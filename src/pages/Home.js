import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

//styles 
import styles from './Generic.style';

//Components 
import CustomButton from '../components/CustomButton';



function Home({ navigation }) {

    const handlePress = () => {
        navigation.navigate('Register');
    }

    const handleLogin = () => {
        navigation.navigate('Login');
    }




    return (
        <SafeAreaView
            style={styles.container}>
            <View>
                <Text
                    style={styles.header}>
                    Code Talks
                </Text>
                <View>
                    <CustomButton
                        text="Giriş Yap"
                        onPress={handleLogin}

                    />
                    <CustomButton
                        text="Kayıt Ol"
                        onPress={handlePress}
                        theme="secondary"
                    />

                </View>
            </View>
        </SafeAreaView>

    )
}


export default Home;
