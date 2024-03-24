import { useColorScheme, useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './DrawerContent';
import { PursuitPoint } from '../screens/PursuitPoint/PursuitPoint';
import { Mem } from '../screens/Mem/Mem';

import { _colors } from './../styles/index';

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
   const _sheme = useColorScheme();
   const { width } = useWindowDimensions();

   return (
      <Drawer.Navigator
         screenOptions={{
            drawerStyle: {
               width: width,
            },
            drawerInactiveTintColor: _colors(_sheme).font,
            drawerActiveTintColor: _colors(_sheme).ui,
            drawerItemStyle: {
               marginHorizontal: 8,
               paddingHorizontal: 0,
               borderRadius: 8,
               backgroundColor: 'transparent',
            },
            drawerLabelStyle: {
               fontSize: 24,
            },
            drawerType: 'slide',
         }}
         drawerContent={(props) => <DrawerContent {...props} />}>
         <Drawer.Screen name="PursuitPoint" component={PursuitPoint} options={{ headerShown: false, title: 'Catching Up Point' }} />
         <Drawer.Screen name="SomeThing" component={Mem} options={{ headerShown: false, title: 'Wanna Big Memes?' }} />
      </Drawer.Navigator>
   );
};
