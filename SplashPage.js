'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';


class SplashPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'LoginPage',
      });
    }, 2000);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center'}}>
        <Image style={styles.logo} source={require('./img/logo.png')} />
        <Text style={{color: '#525CCE', fontSize: 32,}}>Indian Railways</Text>
        <Text style={{color: '#525CCE', fontSize: 15,}}>Welcomes you</Text>
        <Text style={{color: '#525CCE', fontSize: 15,}}>to</Text>
        <Text style={{color: '#525CCE', fontSize: 15,}}>National Train Enquiry System</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  logo:{
    top:-50,
    height:100,
    width :100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  
});
module.exports = SplashPage;
