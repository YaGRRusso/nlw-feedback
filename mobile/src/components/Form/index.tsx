import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import {
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { ScreenshotButton } from '../ScreenshotButton';
import { FeedbackType } from '../Widget';

import { styles } from './styles';

import { captureScreen } from 'react-native-view-shot'
import { api } from '../../libs/api';
import * as FileSystem from 'expo-file-system'

interface Props {
    feedbackType: FeedbackType,
    setFeedbackSent: (key: boolean) => void,
    handleResetFeedback: () => void
}

export function Form({ feedbackType, setFeedbackSent, handleResetFeedback }: Props) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [comment, setComment] = useState('')

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    function handleScreenshot() {
        captureScreen({
            format: 'jpg',
            quality: 0.8,
        })
            .then(uri => setScreenshot(uri))
            .catch(error => console.log(error))
    }

    function handleRemoveScreenshot() {
        setScreenshot(null)
    }

    async function handleSendFeedback() {
        if (loading) {
            return;
        }

        setLoading(true)
        const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' })

        try {
            await api.post('/feedbacks', {
                feedbackType: feedbackType,
                comment: comment,
                screenshot: `data:image/png;base64, ${screenshotBase64}`
            })
            setFeedbackSent(true)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => handleResetFeedback()}>
                    <ArrowLeft
                        size={24}
                        weight='bold'
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Image
                        source={feedbackTypeInfo.image}
                        style={styles.image}
                    />
                    <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
                </View>
            </View>

            <TextInput
                multiline
                style={styles.input}
                placeholder='Conte com detalhes o que está acontecendo...'
                placeholderTextColor={theme.colors.text_secondary}
                onChangeText={setComment}
            />

            <View style={styles.footer}>
                <ScreenshotButton
                    screenshoot={screenshot}
                    onTakeShoot={handleScreenshot}
                    onRemoveShoot={handleRemoveScreenshot}
                />
                <Button isLoading={loading} onPress={() => handleSendFeedback()} />
            </View>

        </View>
    );
}