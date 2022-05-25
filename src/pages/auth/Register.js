import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import auth from '@react-native-firebase/auth';
import AuthErrorMessageParse from '../../utils/authErrorMessageParse';

// style
import styles from '../Generic.style';

// Components
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

function Register({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const goBack = () => {
        navigation.goBack();
    };

    const register = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                navigation.navigate('Rooms');
            })
            .catch(errorCode => {
                console.log(errorCode);
                const errorMessage = AuthErrorMessageParse(errorCode);
                alert(errorMessage);
            });
    };

    const checkPassword = () => {
        if (password === confirmPassword) {
            return true;
        } else {
            alert('Şifreler uyuşmuyor.');
            return false;
        }
    };

    const GoRoomPage = () => {
        navigation.navigate('Rooms');
    };

    const RegisterSubmit = () => {
        if (checkPassword()) {
            if (register()) {
                GoRoomPage();
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.header}>Code Talks</Text>
                <CustomInput
                    placeholder="E posta adresinizi giriniz.."
                    value={email}
                    setValue={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoFocus={true}
                    returnKeyType="next"
                />
                <CustomInput
                    placeholder="Şifrenizi Giriniz.."
                    secureTextEntry={true}
                    value={password}
                    setValue={setPassword}
                    returnKeyType="next"
                />
                <CustomInput
                    placeholder="Şifrenizi yeniden giriniz.."
                    secureTextEntry={true}
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    returnKeyType="done"
                />

                <CustomButton
                    text="Kayıt Ol"
                    theme="primary"
                    onPress={RegisterSubmit}
                />
                <CustomButton text="Geri" theme="secondary" onPress={goBack} />
            </View>
        </SafeAreaView>
    );
}

export default Register;
