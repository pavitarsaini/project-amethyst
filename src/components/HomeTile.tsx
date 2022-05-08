import React, { Ref } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Dimensions } from 'react-native';
var {
  width,
  height
} = Dimensions.get('window');

const night = require('../../assets/night_time.png')

interface SelectProtected {
  readonly Tile: View;
}

export default function HomeTile() {

  const tile = React.useRef<View>(null);

  const showRefPosition = () => {
    // this works and shows that i am using the ref correctly
    tile.current!.measure( (x, y, width, height, px, py) => {
      console.log('x-otf: ' + px + ', y-otf: ' + py)
    })
  };

  return (

    <TouchableWithoutFeedback onPress={showRefPosition}> 

      <View ref={tile} style={{ height: height * (2 / 4), alignItems: 'center', justifyContent: 'center', flex: 1, marginBottom: 30}}>
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
