import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, ImageBackground, Platform, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import NewsTile from './src/components/NewsTile';
import { SafeAreaInsetsContext, SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dimensions } from 'react-native';
var {
  width,
  height
} = Dimensions.get('window');

import night from './assets/night_time.png'; 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{

        headerBackTitle: 'Back',
        headerTintColor: '#FFF',
      }}>
        <Stack.Screen name="Home" component={Home} options={{
          header: props =>    // Your custom header
            <View
              style={{
                flexDirection: "coloum",
                height: 100,
                marginTop: Platform.OS == "ios" ? 20 : 0 // only for IOS to give StatusBar Space
              }}
            >

              <View style={{
                flex: 1,
                backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}>

                <View style={{
                  height: '60%',
                  width: '85%',
                  backgroundColor: 'green',
                  borderRadius: 20,
                  marginBottom: 10
                }}></View>

              </View>

            </View>,

          headerLargeTitle: false,
          headerTransparent: true,
          headerBlurEffect: 'systemMaterialDark',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          title: 'test'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {

  return (


    <ScrollView contentInsetAdjustmentBehavior="automatic">

      <View style={{ height: height * (2 / 4), backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View style={{
                  height: '90%',
                  width: '85%',
                  backgroundColor: 'green',
                  borderRadius: 20,
                }}>
                  
                  <ImageBackground source={night} style={{ width: '100%', height: '100%', borderRadius: 20, overflow: 'hidden'}}>
                  
                  <View style={{flex:2, backgroundColor: 'blue', alignItems: 'flex-start', justifyContent: 'center', opacity: 0.5}}>
                    
                    <View style={{backgroundColor: 'pink', marginLeft: 10, opacity: 0.5}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>TIPS AND TRICKS</Text>
                    </View>


                    </View>
                  <View style={{flex:15, backgroundColor: 'purple', opacity: 0.5}}>

                  <View style={{backgroundColor: 'pink', marginLeft: 10, opacity: 0.5}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Night Time Exploration</Text>
                    </View>

                  </View>
                  </ImageBackground>


                </View>
      </View>

      <View style={{ height: height * (2 / 4), backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center'  }}>
      <View style={{
                  height: '90%',
                  width: '85%',
                  backgroundColor: 'green',
                  borderRadius: 20,
                }}></View>
      </View>
      <View style={{ height: height * (2 / 4), backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'  }}>
      <View style={{
                  height: '90%',
                  width: '85%',
                  backgroundColor: 'green',
                  borderRadius: 20,
                }}></View>
      </View>

    </ScrollView>

  );

}

const styles = StyleSheet.create({
});

