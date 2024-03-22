import { TouchableOpacity, useColorScheme } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';

import { _colors } from './../styles/index';

export const DrawerContent = (props) => {
   const _sheme = useColorScheme();
   const closeDrawer = () => props.navigation.closeDrawer();

   return (
      <DrawerContentScrollView
         {...props}
         style={{ backgroundColor: _colors(_sheme).standBackground }}
         contentContainerStyle={{ paddingBottom: 42, flex: 1, justifyContent: 'flex-end' }}>
         <TouchableOpacity onPress={() => closeDrawer()} style={{ position: 'absolute', top: 16, left: 16, padding: 16 }}>
            <FontAwesome name="close" size={24} color={_colors(_sheme).font} />
         </TouchableOpacity>
         <DrawerItemList {...props} />
      </DrawerContentScrollView>
   );
};
