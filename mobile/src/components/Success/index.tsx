import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import successImg from '../../assets/success.png'
import { Copyright } from '../Copyright';

import { styles } from './styles';

interface Props {
    handleResetFeedback: () => void
}

export function Success({ handleResetFeedback }: Props) {
    return (
        <View style={styles.container}>
            <Image
                source={successImg}
                style={styles.image}
            />
            <Text style={styles.title}>Agradecemos o feedback</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleResetFeedback()}>
                <Text style={styles.buttonTitle}>Quero enviar outro</Text>
            </TouchableOpacity>
            <Copyright />
        </View>
    );
}