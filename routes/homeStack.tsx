import CustomHeader from '../shared/header';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ReviewForm from '../screens/reviewForm';

const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={{ 
                title: 'Gamezone',
                header: () => <CustomHeader title='GameZone' drawerNavigation={navigation}/> 
            }} />
            <Stack.Screen name="ReviewForm" component={ReviewForm} options={{ 
                title: 'Add Review',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#444' }
            }} />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ 
                title: 'Review Details', 
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#444' } 
            }}/>
          </Stack.Navigator>
    );
}
 
export default HomeStack;