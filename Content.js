import {View, Text, Image, Button} from 'react-native';
import React, {Component} from 'react';
import dataContent from './NewsDataSources';

export default function Content() {
  const btn = () => {
    alert('Coming Soon');
  };

  return (
    <View>
      {dataContent.map(item => {
        return (
          <View key={item.id}>
            <View style={{paddingHorizontal: 15, backgroundColor: 'white'}}>
              <View style={style.container}>
                <View>
                  <Image style={style.logo} source={item.logo} />
                  <View>
                    <View style={style.shadow}></View>
                    <Image style={style.img} source={item.image} />
                  </View>
                </View>
                <View style={{margin: 10}}>
                  <Text
                    style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
                    {item.title}
                  </Text>
                  <Text style={{marginTop: 10, fontSize: 15}}>{item.text}</Text>
                </View>
                <View
                  style={
                    item.button === 'left'
                      ? style.btnLeft
                      : item.button === 'center'
                      ? style.btnCenter
                      : style.btnRight
                  }>
                  <Button color={item.b} onPress={btn} title="Read More" />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}
const style = {
  container: {
    paddingTop: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#d2d2d2',
    paddingBottom: 50,
  },
  logo: {
    width: '20%',
    height: 23,
    position: 'absolute',
    zIndex: 2,
    margin: 10,
  },
  shadow: {
    backgroundColor: 'black',
    width: '100%',
    height: 220,
    zIndex: 1,
    opacity: 0.22,
    borderRadius: 15,
  },
  img: {
    width: '100%',
    height: 220,
    position: 'absolute',
    borderRadius: 15,
  },
  btnLeft: {
    width: 100,
    marginLeft: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: -20,
  },
  btnRight: {
    width: 100,
    marginLeft: 10,
    alignSelf: 'flex-end',
    paddingHorizontal: -20,
  },
  btnCenter: {
    width: 100,
    marginLeft: 10,
    alignSelf: 'center',
    paddingHorizontal: -20,
  },
};
