import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

// styles
import styles from './Generic.style';


//CustomInput
import CustomInput from "../../components/CustomInput";
import CustomButton from '../../components/CustomButton';


function Login({ navigation }) {
    const goBack = () => {
        navigation.goBack();
        
    }
    const handleLogin = () => {
        navigation.navigate("Rooms");
    }



    return (
        <SafeAreaView
            style={styles.container}>
            <View>
                <Text style={styles.header}>Code Talks</Text>
                <CustomInput
                    placeholder="E posta adresinizi giriniz.."
                />
                <CustomInput
                    placeholder="Şifrenizi Giriniz.."
                    secureTextEntry={true}
                />
                <CustomButton
                    text="Giriş Yap"
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


export default Login;