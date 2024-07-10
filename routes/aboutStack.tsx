import CustomHeader from '@/shared/header';
import About from '../screens/about';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const AboutStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName='About' screenOptions={{
            header: () => <CustomHeader title='About GameZone' drawerNavigation={navigation}/>
          }}>
            <Stack.Screen name="About" component={About} options={{ title: 'About Gamezone' }}/>
          </Stack.Navigator>
    );
}
 
export default AboutStack;