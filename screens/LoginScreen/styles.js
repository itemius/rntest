import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    view: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    button: {
        backgroundColor: '#6dcfb6',
        borderRadius: 10,
        borderWidth: 0,
        height: 40,
        width: '80%',
        elevation: 3,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    buttonText: {
        color: '#ffffff'
    },
    textInput: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        marginTop: 20,
        borderColor: 'lightgray',
        paddingHorizontal: 20
    }
});

export default styles;