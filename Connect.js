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

export default function Connect(props) {
  const style = {
    textJudul: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 10,
      color: 'black',
    },
    img: {
      width: '37%',
      height: 80,
    },
    btn: {
      width: 100,
      alignSelf: 'flex-end',
      paddingHorizontal: -20,
      marginTop: 10,
    },
  };
  Connect.defaultProps = {
    sideTitle: 'text here',
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        marginTop: 20,
        paddingTop: 20,
      }}>
      <Image source={require('./logo/gojek.png')} />
      <Text style={style.textJudul}>{props.judul}</Text>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Image
          style={style.img}
          source={require('./dummy/facebook-connect.png')}
        />
        <View style={{paddingLeft: 10}}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
            {props.sideTitle}
          </Text>
          <Text style={{width: 200, fontWeight: '500'}}>{props.text}</Text>
        </View>
      </View>
      <View style={style.btn}>
        <Button title="CONNECT!" />
      </View>
    </View>
  );
}
