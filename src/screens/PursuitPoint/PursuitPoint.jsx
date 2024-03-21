import { useRef } from 'react';
import { StyleSheet, Animated, View, useColorScheme, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const CURSOR_SIDE_SIZE = 20;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;

const _lighSheme = {
   background: '#fff',
   font: '#000',
   ui: 'skyblue',
};

const _darkSheme = {
   background: '#000',
   font: '#fff',
   ui: 'tomato',
};

const _colors = (_sheme) => {
   if (_sheme === 'light') return _lighSheme;
   else return _darkSheme;
};

export const PursuitPoint = () => {
   const _sheme = useColorScheme();

   const { height, width } = useWindowDimensions();
   const touch = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

   return (
      <View
         onStartShouldSetResponder={() => true}
         onMoveShouldSetResponder={() => true}
         onResponderMove={(event) => {
            touch.setValue({
               x: event.nativeEvent.pageX,
               y: event.nativeEvent.pageY,
            });
         }}
         onResponderRelease={() => {
            Animated.spring(touch, {
               toValue: {
                  x: width / 2 + CURSOR_HALF_SIDE_SIZE,
                  y: height / 2 + CURSOR_HALF_SIDE_SIZE,
               },
               useNativeDriver: false,
            }).start();
         }}
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
         <StatusBar style="auto" />
      </View>
   );
};
