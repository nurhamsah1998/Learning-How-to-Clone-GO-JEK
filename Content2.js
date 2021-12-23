import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

export default function Content3() {
  const btn = () => {
    alert('ihir!!');
  };
  return (
    <View style={{paddingHorizontal: 15, backgroundColor: 'white'}}>
      <View
        style={{
          paddingTop: 20,
          borderWidth: 1,
          borderColor: 'transparent',
          borderBottomColor: '#d2d2d2',
          paddingBottom: 50,
        }}>
        <View>
          <Image
            style={{
              width: '20%',
              height: 23,
              position: 'absolute',
              zIndex: 2,
              margin: 10,
            }}
            source={require('./logo/white.png')}
          />
          <View>
            <View
              style={{
                backgroundColor: 'black',
                width: '100%',
                height: 220,
                zIndex: 1,
                opacity: 0.22,
                borderRadius: 15,
              }}></View>
            <Image
              style={{
                width: '100%',
                height: 220,
                position: 'absolute',
                borderRadius: 15,
              }}
              source={require('./dummy/go-food-kfc.jpg')}
            />
          </View>
        </View>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
            GO-NEWS
          </Text>
          <Text style={{marginTop: 10, fontSize: 15}}>
            Tim Jaguar Gerebek Rumah Untuk Ritual Santet di Galaksi neoSantara,
            dan bikin dramatis, serta mendebarkan tapi ...
          </Text>
        </View>
        <View
          style={{
            width: 100,
            marginLeft: 10,
            alignSelf: 'flex-start',
            paddingHorizontal: -20,
          }}>
          <Button color="#44cd08" onPress={btn} title="Read More" />
        </View>
      </View>
    </View>
  );
}
