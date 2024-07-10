import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FlatButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    
const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#444',
        margin: 10
    },
    buttonText: {
        color: 'white',
        textTransform: 'capitalize',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Montserrat Bold',
        letterSpacing: 1
    }
});
 
export default FlatButton;