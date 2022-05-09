import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
    screenshoot: string | null,
    onTakeShoot: () => void,
    onRemoveShoot: () => void
}

export function ScreenshotButton({ screenshoot, onTakeShoot, onRemoveShoot }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={screenshoot ? onRemoveShoot : onTakeShoot}
        >
            {
                screenshoot
                    ?
                    <View>
                        <Image
                            style={styles.image}
                            source={{ uri: screenshoot }}
                        />
                        <Trash
                            size={22}
                            color={theme.colors.text_secondary}
                            weight="fill"
                            style={styles.removeIcon}
                        />
                    </View>
                    :
                    <Camera
                        size={24}
                        color={theme.colors.text_secondary}
                        weight='bold'
                    />
            }
        </TouchableOpacity>
    );
}