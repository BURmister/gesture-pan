import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './Drawer';

export const RootNavigator = () => {
   return (
      <NavigationContainer>
         <DrawerNavigator />
      </NavigationContainer>
   );
};
