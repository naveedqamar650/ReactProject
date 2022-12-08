import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import io from "socket.io-client";

function Btn({bgColor, btnLabel, textColor, Press}) {
    return (
      <TouchableOpacity
      onPress={Press}
        style={{
          backgroundColor: bgColor,
          borderRadius: 100,
          alignItems: 'center',
          width: '15%',
          paddingVertical: 10,
          marginVertical: -47,
          marginLeft: 325
        }}>
        <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
          {btnLabel}
        </Text>
      </TouchableOpacity>
    );
  }

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: []
    };
  }

  componentDidMount() {
    this.socket = io("http://192.168.10.23:3000");
    this.socket.on("chatmessage", msg => {
      this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });
  }

  submitChatMessage() {
    this.socket.emit("chatmessage", this.state.chatMessage);
    this.setState({ chatMessage: "" });
  }

  submit = () =>{
    this.submitChatMessage()
  }

  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <Text key={chatMessage}>{chatMessage}</Text>
    ));

    return (
      <View style={styles.container}>
        <View style={styles.TopView}>
            {chatMessages}
        </View>
        <View style={styles.BottomView}>
            <TextInput placeholder="Enter Message"
            style={{ height: 50, width:'80%', borderWidth: 2, backgroundColor: 'white', paddingLeft: 10, paddingRight: 10, paddingVertical: 5, borderColor: 'transparent', borderRadius: 100}}
            autoCorrect={false}
            value={this.state.chatMessage}
            onSubmitEditing={() => this.submitChatMessage()}
            onChangeText={chatMessage => {
                this.setState({ chatMessage });
            }}
            />
            <Btn textColor='white' bgColor={'white'} btnLabel="" Press={() => this.submit()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162e3e',
    paddingTop: 40,
    paddingHorizontal: 10
  },
  TopView:{
    width:'100%',
    height:'90%',
    backgroundColor:'white',
    borderRadius: 20,
    padding: 10
  },
  BottomView:{
    width:'100%',
    height:'10%', 
    marginTop: 5
  }
});