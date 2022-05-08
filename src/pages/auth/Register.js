import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';


// style
import styles from '../Generic.style';

// Components
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';


function Register({ navigation }) {

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text
                    style={styles.header}>
                    Code Talks
                </Text>
                <CustomInput
                    placeholder="E posta adresinizi giriniz.."
                />
                <CustomInput
                    placeholder="Şifrenizi Giriniz.."
                    secureTextEntry={true}
                />
                <CustomInput
                    placeholder="Şifrenizi yeniden giriniz.."
                    secureTextEntry={true}
                />

                <CustomButton
                    text="Kayıt Ol"
                    theme="primary"
                />
                <CustomButton
                    text="Geri"
                    theme='secondary'
                    onPress={goBack}
                />
            </View>

        </SafeAreaView>

    )
}


export default Register;