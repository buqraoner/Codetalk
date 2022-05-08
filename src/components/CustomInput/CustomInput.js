import React from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from './CustomInput.style';

const CustomInput = ({ placeholder,secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder} 
                    secureTextEntry={secureTextEntry}
                />
        </View>

    )
}


export default CustomInput;
