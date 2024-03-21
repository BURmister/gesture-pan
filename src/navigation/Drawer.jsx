import { createDrawerNavigator } from '@react-navigation/drawer';

import { PursuitPoint } from '../screens/PursuitPoint/PursuitPoint';
import { SomeThing } from '../screens/SomeThing/SomeThing';

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
   return (
      <Drawer.Navigator>
         <Drawer.Screen name="PursuitPoint" component={PursuitPoint} options={{ headerShown: true }} />
         <Drawer.Screen name="SomeThing" component={SomeThing} options={{ headerShown: true }} />
      </Drawer.Navigator>
   );
};
