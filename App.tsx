import React, { createRef, Ref, useRef, useState } from 'react';
import { ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dimensions } from 'react-native';
var {
  width,
  height
} = Dimensions.get('window');

import night from './assets/night_time.png';

const Stack = createNativeStackNavigator();


export default function App() {

  const tile = React.useRef<View>(null);

  const showRefPosition = () => {
    console.log("button clicked, set focus and log position");
    // this works and shows that i am using the ref correctly
    tile.current.measure( (x, y, width, height) => {
      console.log('x-pos: ' + x)
      console.log('y-pos: ' + y)
    })
  };

  return (
    <ScrollView style={{backgroundColor: 'black'}}>

      <View style={{height:80}}></View>

      <TouchableWithoutFeedback onPress={showRefPosition}> 

      <View ref={tile} style={{ height: height * (2 / 4), alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Image source={night} style={{ width: '90%', height: '100%', borderRadius: 20, position: 'absolute'}}/>

        <View style={{ height: '90%', width: '100%' }}>

            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 40, marginTop: 20 }}>

              <View style={{ flex: 1.2 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.6);', letterSpacing: 1, }}>TIPS AND TRICKS</Text>
              </View>

              <View style={{ flex: 15 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', letterSpacing: 0.5 }}>Night Time Exploration</Text>
              </View>

            </View>

        </View>

        </View>
        </TouchableWithoutFeedback>
      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
});
