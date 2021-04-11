import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../config';
import * as firebase from 'firebase';

export default class LogInScreen extends React.Component {
  constructor(){
    super()
    this.state={
      emailID: "",
      password: ""
    }
  }

  logIn=(emailID, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailID, password)
        .then(()=>{
            return alert("Successfully logged in!")
        })
      .catch((error)=>{ 
          var errorCode=error.code;
          var errorMsg=error.message;
          return alert(errorMsg)
      })
    } 

   signIn=(emailID, password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailID, password)
        .then((response)=>{
            return alert("Signed up successfully!")
        })
      .catch((error)=>{ 
          var errorCode=error.code;
          var errorMsg=error.message;
          return alert(errorMsg)
      })
    } 


  render() {
    return (
      <View style={styles.container}>
        <Text>Book Santa</Text>
        <TextInput 
        placeholder="Email ID" 
        style={styles.usrInput}
        keyboardType = "email-adress"
        onChangeText={(text)=>{
          this.setState({
            emailID: text
          })
        }}/>

        <TextInput 
        placeholder="Password" 
        style={styles.usrInput}
        secureTextEntry= {true}
        onChangeText={(text)=>{
          this.setState({
            password: text
          })
        }}/>

        <TouchableOpacity style={styles.logInBtn} onPress={()=>{
          this.logIn(this.state.emailID, this.state.password)
        }}>
        <Text> Log In </Text>      
        </TouchableOpacity>

        <TouchableOpacity style={styles.logInBtn} onPress={()=>{
          this.signIn(this.state.emailID, this.state.password)
        }}>
        <Text> Sign In </Text>      
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  usrInput: {
    width: 300,
    height: 40,
    borderRadius: 1,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    margin: 7
  },
  logInBtn:{
    backgroundColor: "violet",
    width: 90,
    height: 30,
    borderWidth: 2,
    textAlign: "center",
    justifyContent: "center"
  }
});
