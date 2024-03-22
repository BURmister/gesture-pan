import { useRef } from 'react';
import { Animated, Image, PanResponder, TouchableOpacity, View, useColorScheme, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { _colors } from '../../styles/index';

const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGhzGyc12MQraS1z24qLACMG656L1FzMjQxEediWbvtT04PhFBZlX7wGtB6sHnQp6wf4&usqp=CAU';

const pointDistance = ([xA, xB], [yA, yB]) => {
   return Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));
};

export const Mem = ({ navigation }) => {
   const { width } = useWindowDimensions();
   const _sheme = useColorScheme();
   const toggleDrawer = () => navigation.toggleDrawer();

   const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
   const scale = useRef(new Animated.Value(1)).current;

   const panResponder = useRef(
      PanResponder.create({
         onStartShouldSetPanResponder: (event, state) => true,
         onPanResponderMove: (event, state) => {
            const activeTouches = event.nativeEvent.changedTouches.length;

            if (activeTouches === 1) {
               pan.setValue({
                  x: state.dx,
                  y: state.dy,
               });
            } else if (activeTouches >= 2) {
               const touches = event.nativeEvent.changedTouches;

               const touchA = touches[0];
               const touchB = touches[1];

               const distance = pointDistance([touchA.pageX, touchB.pageX], [touchA.pageY, touchB.pageY]);
               const screenMovedPercent = distance / width;

               scale.setValue(1 + screenMovedPercent * 2);
            }
         },
         onPanResponderRelease: (event, state) =>
            Animated.parallel([
               Animated.spring(pan, {
                  toValue: {
                     x: 0,
                     y: 0,
                  },
                  useNativeDriver: true,
               }),
               Animated.spring(scale, {
                  toValue: 1,
                  useNativeDriver: true,
               }),
            ]).start(),
      }),
   ).current;

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: _colors(_sheme).background }}>
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Animated.Image
               {...panResponder.panHandlers}
               source={{ uri: image }}
               style={{ width: width * 0.8, height: 200, borderRadius: 8, transform: [{ translateX: pan.x }, { translateY: pan.y }, { scale }] }}
            />
         </View>
         <TouchableOpacity onPress={() => toggleDrawer()} style={{ position: 'absolute', top: 16, left: 16, padding: 8 }}>
            <Ionicons name="menu-outline" size={32} color={_colors(_sheme).ui} />
         </TouchableOpacity>
      </View>
   );
};
