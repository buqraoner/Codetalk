import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();


//Pages
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";






const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Home',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        title: 'Register',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: "Login",
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default App;
