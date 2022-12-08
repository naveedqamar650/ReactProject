import React, { useState } from 'react';
import {View, Text, Touchable, TouchableOpacity, TextInput, StyleSheet, ImageBackground} from 'react-native';

const Login = (props) => {
    const [userName, setuserName] = useState("");      
    const [Password, setPassword] = useState("");      

    const submit = () =>{
        if (userName === "Naveed" && Password === "Admin123"){
            props.navigation.navigate("ChatPage");
            setuserName("");
            setPassword("");
        }else{
            setuserName("");
            setPassword("");
        }
    }
    
  return (
      <View style={styles.mainView}>
        <View style={styles.TopView}>
        <ImageBackground source={require("./assets/bg.jpg")} style={{ height: '160%' }} />
        </View>
        <View style={styles.BottomView}>
        <Text style={{fontSize: 48, color: '#162e3e', fontWeight: 'bold', marginHorizontal: 30, marginBottom: 15}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: '#162e3e',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 30,
              marginHorizontal: 65
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            value={userName}
            onChangeText={(actualData) => setuserName(actualData)}
          />
          <Field 
            placeholder="Password" secureTextEntry={true} 
            value={Password}
            onChangeText={(actualData) => setPassword(actualData)}
          />
          <View
            style={{alignItems: 'flex-end', width: '97%', paddingRight: 16, marginBottom: 50}}>
            <Text style={{color: '#162e3e', fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={'#162e3e'} btnLabel="Login" Press={() => submit()} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    mainView:{
        flex:1
    },
    TopView:{
      width:'100%',
      height:'40%'
    },
    BottomView:{
      width:'100%',
      height:'60%',
      backgroundColor:'#f2f6f9',
      borderTopLeftRadius:70,
      borderTopRightRadius:70,
      padding:40
    }
  })

const Field = props => {
    return (
      <TextInput
        {...props}
        style={{borderRadius: 100, color: '#162e3e', paddingHorizontal: 20, width: '90%', height:'10%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10, marginHorizontal: 10}}
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
          marginVertical: 0,
          marginHorizontal: 10
        }}>
        <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
          {btnLabel}
        </Text>
      </TouchableOpacity>
    );
  }

export default Login;