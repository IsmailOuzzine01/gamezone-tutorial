import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#ddd',
        margin: 10,
        shadowColor: '#444',
        elevation: 5,
        borderRadius: 20
    },
    titleText: {
        fontFamily: 'Montserrat Bold',
        fontSize: 20,
        color: '#333',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    paragraph: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        color: '#333',
        marginHorizontal: 6,
        marginBottom: 6,
    }
})

export default globalStyles;