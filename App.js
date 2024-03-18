import { useRef } from 'react';
import { StyleSheet, Animated, View, useColorScheme, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const CURSOR_SIDE_SIZE = 20;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;

export default function App() {
   const colorScheme = useColorScheme();

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
            console.log({
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
         style={{ flex: 1 }}>
         <Animated.View
            style={{
               position: 'absolute',
               top: Animated.subtract(touch.y, CURSOR_HALF_SIDE_SIZE),
               left: Animated.subtract(touch.x, CURSOR_HALF_SIDE_SIZE),
               // top: height / 2 - CURSOR_HALF_SIDE_SIZE,
               // left: width / 2 - CURSOR_HALF_SIDE_SIZE,
               height: CURSOR_SIDE_SIZE,
               width: CURSOR_SIDE_SIZE,
               borderRadius: CURSOR_HALF_SIDE_SIZE,
               backgroundColor: 'skyblue',
            }}
         />
      </View>
   );
}

{
   /* <View style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#fff' : '#000' }]}>
   <Text style={{ color: colorScheme === 'light' ? '#000' : '#fff' }}>Open up App.js to start working on your app! </Text>
   <StatusBar style="auto" />
</View> */
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
