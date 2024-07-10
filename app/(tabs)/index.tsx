import AppDrawer from '../../routes/drawer';
import * as Font from 'expo-font'
import { useEffect, useState } from 'react';


export default function HomeScreen() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Montserrat': require('../../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
          'Montserrat Bold': require('../../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <AppDrawer></AppDrawer>
  );
}