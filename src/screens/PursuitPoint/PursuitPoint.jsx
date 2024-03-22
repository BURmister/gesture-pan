import { useRef } from 'react';
import { Animated, StatusBar, TouchableOpacity, View, useColorScheme, useWindowDimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { _colors } from '../../styles/index';

const CURSOR_SIDE_SIZE = 20;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;

export const PursuitPoint = ({ navigation }) => {
   const _sheme = useColorScheme();
   const toggleDrawer = () => navigation.toggleDrawer();

   const { height, width } = useWindowDimensions();
   const touch = useRef(new Animated.ValueXY({ x: width / 2, y: height / 2 })).current;

   return (
      <View style={{ flex: 1 }}>
         <View
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
            onResponderMove={(event) =>
               touch.setValue({
                  x: event.nativeEvent.pageX,
                  y: event.nativeEvent.pageY,
               })
            }
            onResponderRelease={() =>
               Animated.spring(touch, {
                  toValue: {
                     x: width / 2,
                     y: height / 2,
                  },
                  useNativeDriver: false,
               }).start()
            }
            style={{ flex: 1, backgroundColor: _colors(_sheme).background }}>
            <Animated.View
               style={{
                  position: 'absolute',
                  top: Animated.subtract(touch.y, CURSOR_HALF_SIDE_SIZE),
                  left: Animated.subtract(touch.x, CURSOR_HALF_SIDE_SIZE),
                  height: CURSOR_SIDE_SIZE,
                  width: CURSOR_SIDE_SIZE,
                  borderRadius: CURSOR_HALF_SIDE_SIZE,
                  backgroundColor: _colors(_sheme).ui,
               }}
            />
         </View>
         <TouchableOpacity onPress={() => toggleDrawer()} style={{ position: 'absolute', top: 16, left: 16, padding: 16 }}>
            <FontAwesome5 name="hamburger" size={24} color={_colors(_sheme).font} />
         </TouchableOpacity>
         <StatusBar style="auto" />
      </View>
   );
};
