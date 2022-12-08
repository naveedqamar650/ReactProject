import React from 'react';
import {View, Text, Touchable, TouchableOpacity, TextInput} from 'react-native';
import Background from './background';

const Login = (props) => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: '#162e3e', fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
            <Text style={{color: '#162e3e', fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={'#162e3e'} btnLabel="Login" Press={() => alert("Logged In")} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: '#162e3e', fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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