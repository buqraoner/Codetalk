import { StyleSheet } from 'react-native';


const base_styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        margin: 3,
        padding: 10,
        
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,

    },




});



export default {
    primary: StyleSheet.create({
        ...base_styles,
        button: {
            ...base_styles.button,
            backgroundColor: '#34da87',
            alignItems: 'center',
            justifyContent: 'center',

        },
        buttonText: {
            ...base_styles.buttonText,
            color: '#E1F0E8',
        },



    }),

    secondary: StyleSheet.create({
        ...base_styles,

        button: {
            ...base_styles.button,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E1F0E8',
        },

        buttonText: {
            ...base_styles.buttonText,
            color: '#34da87',
        },





    }),

};
