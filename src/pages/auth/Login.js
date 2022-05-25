import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import auth from '@react-native-firebase/auth';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
// styles
import styles from './Generic.style';
//CustomInput
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);



    const goBack = () => {
        navigation.goBack();
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Code Talks</Text>
                <Text>Loading...</Text>
            </View>
        );
    }





    const handleLogin = async () => {
        if (email === "" || password === "") {
            showMessage({
                message: "Lütfen tüm alanları doldurunuz.",
                type: "danger",
                icon: "danger",
                duration: 3000
            });
        }
        else {
            setLoading(true);
            await auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    setLoading(false);
                    showMessage({
                        message: "Giriş Başarılı",
                        type: "info",
                        icon: "success",
                        duration: 2000
                    });
                    console.log('Giriş Başarılı');
                    navigation.navigate('Rooms');
                })
                .catch(errorCode => {
                    console.log(errorCode);
                    const errorMessage = AuthErrorMessageParse(errorCode);
                    setLoading(false);
                    showMessage({
                        message: errorMessage,
                        type: "danger",
                        icon: "danger",
                        duration: 2000
                    });
                });
        };
    }




    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.header}>Code Talks</Text>
                <CustomInput
                    placeholder="E posta adresinizi giriniz.."
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder="Şifrenizi Giriniz.."
                    secureTextEntry={true}
                    value={password}
                    setValue={setPassword}
                />
                <CustomButton text="Giriş Yap" theme="primary" onPress={handleLogin} />
                <CustomButton text="Geri" theme="secondary" onPress={goBack} />
            </View>
        </SafeAreaView>
    );
}

export default Login;
