import React from 'react';
import {View, Text, Touchable, TouchableOpacity, TextInput} from 'react-native';
import { YellowBox } from 'react-native-web';
import Background from './background';

const Login = (props) => {
  return (
    <Background>
      
    </Background>
  );
};

const Field = props => {
    return (
      <TextInput
        {...props}
        style={{borderRadius: 100, color: '#162e3e', paddingHorizontal: 10, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
        placeholderTextColor={ '#162e3e' }></TextInput>
    );
  };

  function Btn({bgColor, btnLabel, textColor, Press}) {
    return (
      <TouchableOpacity
      onPress={Press}
        style={{
          backgroundColor: bgColor,
          borderRadius: 100,
          alignItems: 'center',
          width: 300,
          paddingVertical: 10,
          marginVertical: 10
        }}>
        <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
          {btnLabel}
        </Text>
      </TouchableOpacity>
    );
  }

export default Login;