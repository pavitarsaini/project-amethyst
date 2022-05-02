import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
var {
  width,
  height
} = Dimensions.get('window');

export default function NewsTile() {
  return (

    <View style={{ height: height * (2 / 4), alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <View style={{ height: '90%', width: '90%' }}>

          <ImageBackground source={night} style={{ width: '100%', height: '100%', borderRadius: 20, overflow: 'hidden' }}>

            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20, marginTop: 30 }}>

              <View style={{ flex: 1.2 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.6);', letterSpacing: 1, }}>TIPS AND TRICKS</Text>
              </View>

              <View style={{ flex: 15 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', letterSpacing: 0.5 }}>Night Time Exploration</Text>
              </View>

            </View>

          </ImageBackground>


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
