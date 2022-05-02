import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Animated, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import NewsTile from './src/components/NewsTile';

import { Dimensions } from 'react-native';
var {
  width,
  height
} = Dimensions.get('window');


export default function App() {

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  const popHeight = useRef(new Animated.Value(50)).current;
  const popWidth = useRef(new Animated.Value(100)).current;

  const popIn = () => {
    
    Animated.timing(popHeight, {
      toValue: height,
      duration: 200,
      useNativeDriver: false
    }).start();

    Animated.timing(popWidth, {
      toValue: height,
      duration: 200,
      useNativeDriver: false
    }).start();

  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AnimatedTouchable style={[
          styles.tile,
          {
            height: popHeight,
            width: popWidth,
            flex: 1
          },
          
        ]} onPress={popIn}>
        <NewsTile ></NewsTile>
      </AnimatedTouchable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
  },
  tile: {
    justifyContent: 'center',
    alignSelf: 'center',
  }
});
