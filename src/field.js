import React from 'react';
import {TextInput} from 'react-native';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: '#162e3e', paddingHorizontal: 10, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
      placeholderTextColor={ '#162e3e' }></TextInput>
  );
};

export default Field;