import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import globalStyles from "@/styles/global";

const CustomHeader = ({ title, drawerNavigation }) => {
    const openDrawer = () => {
        drawerNavigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={30} color='#fff' onPress={openDrawer} style={styles.menuIcon}/>
            <Text style={styles.headerTitle}>{ title }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 55,
        width: '100%',
        justifyContent: "center",
        backgroundColor: '#444',
        alignItems: 'center'
    },
    headerTitle: {
        textAlign: 'center',
        fontFamily: 'Montserrat Bold',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 1
    },
    menuIcon: {
        position: 'absolute',
        left: 16
    }
})
 
export default CustomHeader;