import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './screens/LogInScr'
export default class App extends React.Component() {
  render(){
  return (
    <LogInScreen/>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
