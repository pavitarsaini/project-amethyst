import React, { createRef, Ref, useRef, useState } from 'react';
import { ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTile from './src/components/HomeTile';
import { Dimensions } from 'react-native';
var {
  width,
  height
} = Dimensions.get('window');

const Stack = createNativeStackNavigator();

export default function App() {

  const tile = React.useRef<View>(null);

  return (
    <ScrollView style={{backgroundColor: 'black'}}>

      <View style={{height:80}}></View>

      
      <HomeTile></HomeTile>
      <HomeTile></HomeTile>
      

    </ScrollView>
  );
}