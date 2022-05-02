import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
var {
  width,
  height
} = Dimensions.get('window');

export default function NewsTile() {
  return (

    <View style={{ height: height * (2 / 4), backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{
        height: '90%',
        width: '85%',
        backgroundColor: 'green',
        borderRadius: 20,
      }}>

        <View>
          
        </View>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'orange',
    height: 100,
  },
  tile: {
    height: '50%',
    backgroundColor: '#000',
  },
});
