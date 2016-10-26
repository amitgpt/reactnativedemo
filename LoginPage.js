'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
} from 'react-native';
import Button from 'apsl-react-native-button';
//import CookieManager from 'react-native-cookies';

class LoginPage extends Component {
  /*constructor(props) {
    super(props);
    this.state = {text: 'test'};
  }*/
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F7F7F7', alignItems: 'center', justifyContent: 'center'}}>
        
        <TextInput
          style={styles.login}
          placeholder="Enter Your email."          
        />
        
        <TextInput
          style={styles.login}
          placeholder="Enter Your password."          
        />
         <Button style={styles.loginbutton} onPress={this._onPressButton}>
           <Text>Login</Text>
         </Button>
        
      </View>
    );
  }
  
  
}
var styles = StyleSheet.create({
  login:{
    top:-50,
    height:100,
    width :200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginbutton:{
    width :200,
    left:80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  
});


module.exports = LoginPage;
