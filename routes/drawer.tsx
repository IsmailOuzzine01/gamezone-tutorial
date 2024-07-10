import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName='HomeStack'  screenOptions={{header: () => false}}>
            <Drawer.Screen name='HomeStack' component={HomeStack} options={{title: 'Home'}} />
            <Drawer.Screen name='AboutStack' component={AboutStack} options={{title: 'About'}} />
        </Drawer.Navigator>
    );
}
 
export default AppDrawer;