import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';

//styles
import styles from './CustomButton.style';



const CustomButton = ({ onPress, text, theme = "primary" }) => {
    return (
        <SafeAreaView >
            <TouchableOpacity
                style={styles[theme].button}
                onPress={onPress}
            >
                <View>
                    <Text
                        style={styles[theme].buttonText}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>

        </SafeAreaView>

    );
}


export default CustomButton;