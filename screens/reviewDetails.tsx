import FlatButton from "@/shared/FlatButton";
import globalStyles from "../styles/global";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";

const ReviewDetails = ({ navigation, route }) => {

    const item = route.params?.item;

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
            <Text style={globalStyles.paragraph}>{ item.body }</Text>
            <View style={styles.ratings}>
                {Array.from({ length: item.rating }, (_, index) => (
                    <Image
                        key={index}
                        source={require('@/assets/images/star-filled.png')}
                        style={styles.starImage}
                    />
                ))}
            </View>
            <FlatButton 
                title="Modify rate" 
                onPress={() => Alert.alert('OOPS', 'Not developed yet !', [{text: 'Understood'}])} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    ratings: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    starImage: {
        width: 50,
        height: 50
    }
});
 
export default ReviewDetails;