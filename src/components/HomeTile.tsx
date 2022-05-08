import React, { useRef, useState } from 'react';
import { Animated, Text, View, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
var {
  width,
  height
} = Dimensions.get('window');

const night = require('../../assets/night_time.png')

export default function HomeTile() {

  const [storyState, setStoryState] = useState(false)
  const [storyTileOffset, setStoryTileOffset] = useState(0)

  const storyTileTranstionTranslate = useRef(new Animated.Value(0)).current;
  const storyTileTranstionScale = useRef(new Animated.Value(1)).current;

  const storyTileTitleTranslateX = useRef(new Animated.Value(1)).current;
  const storyTileTitleTranslateY = useRef(new Animated.Value(0)).current;

  const openStory = (pv: number) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(storyTileTranstionTranslate, {
      toValue: pv * -1,
      duration: 250,
      useNativeDriver: true
    }).start();

    Animated.timing(storyTileTranstionScale, {
      toValue: 1.2,
      duration: 250,
      useNativeDriver: true
    }).start();

    Animated.timing(storyTileTitleTranslateX, {
      toValue: -20,
      duration: 250,
      useNativeDriver: true
    }).start();

    Animated.timing(storyTileTitleTranslateY, {
      toValue: 40,
      duration: 250,
      useNativeDriver: true
    }).start();
  };

  const closeStory = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(storyTileTranstionTranslate, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true
    }).start();

    Animated.timing(storyTileTranstionScale, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true
    }).start();

    Animated.timing(storyTileTitleTranslateX, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true
    }).start();

    Animated.timing(storyTileTitleTranslateY, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true
    }).start();
  };

  const tile = React.useRef<View>(null);

  const getStoryTileOffset = new Promise<number>((resolve, reject) => {
    if (tile && tile.current) {
      tile.current!.measure((x, y, w, h, px, py) => {
        resolve(py);
      });
    }
  });

  const storyPressHandler = async () => {
    console.log("click")
    if (!storyState) {
      var storyTileOffset = await getStoryTileOffset
      console.log(storyTileOffset)
      openStory(storyTileOffset)
      setStoryState(true)
    }
    else {
      closeStory()
      setStoryState(false)
    }
  };

  return (

    <TouchableWithoutFeedback onPress={storyPressHandler}>

      <Animated.View ref={tile} style={{
        transform: [{ translateY: storyTileTranstionTranslate }],
        height: height * (2 / 4), alignItems: 'center', justifyContent: 'center', flex: 1, marginBottom: 30
      }}>

        <Animated.View style={{ transform: [{ scaleX: storyTileTranstionScale }], width: '90%', height: '100%', position: 'absolute', borderRadius: 20 }} >
          <Image source={night} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
        </Animated.View>

        <Animated.View style={{ transform: [{ translateX: storyTileTitleTranslateX }, {translateY: storyTileTitleTranslateY}], height: '90%', width: '100%' }}>

          <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 40, marginTop: 20 }}>

            <View style={{ flex: 1.2 }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.6);', letterSpacing: 1, }}>TIPS AND TRICKS</Text>
            </View>

            <View style={{ flex: 15, }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', letterSpacing: 0.5 }}>Night Time Exploration</Text>
            </View>

          </View>

        </Animated.View>

      </Animated.View>
    </TouchableWithoutFeedback>

  );
}