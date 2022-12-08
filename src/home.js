import React from 'react';
import {View, StyleSheet, Text , TouchableOpacity} from 'react-native';
import Background from './background';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 600 }}>
      <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold' }}>Chat Application</Text>
      <Text style={{ color: 'white', fontSize: 32, marginBottom: 40 }}>by Naveed</Text>
      <Btn bgColor={ '#162e3e' } textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      </View>
    </Background>
  );
}

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
          marginVertical: 10,
          marginHorizontal: 15
        }}>
        <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
          {btnLabel}
        </Text>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({})

export default Home;