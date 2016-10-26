/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';

//import SplashScreen from 'react-native-smart-splash-screen';
var SplashPage = require('./SplashPage');
var LoginPage = require('./js/components/auth/LoginPage');
var MainPage = require('./MainPage');
var SpotYourTrain = require('./js/components/sportyourtrain/SpotYourTrain');
var LiveStation = require('./js/components/livestation/LiveStation');
var TrainSchedule = require('./js/components/trainschedule/TrainSchedule');
var TrainBetweenStation = require('./js/components/trainbetweenstation/TrainBetweenStation');
var CancelledTrains = require('./js/components/cancelledtrains/CancelledTrains');
var RescheduledTrains = require('./js/components/rescheduledtrains/RescheduledTrains');
var DivertedTrains = require('./js/components/divertedtrains/DivertedTrains');
var ManageFavorites = require('./js/components/managefavorites/ManageFavorites');
var NoNavigatorPage = require('./js/components/nonavigationpage/NoNavigatorPage');

class App extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'SplashPage', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
  
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
            navigator={navigator} />
      );
    }

    if (routeId === 'MainPage') {
      return (
        <MainPage
            navigator={navigator} />
      );
    }
    if (routeId === 'SpotYourTrain') {
      return (
        <SpotYourTrain
          navigator={navigator} />
      );
    }
     if (routeId === 'LiveStation') {
      return (
        <LiveStation
          navigator={navigator} />
      );
    }
     if (routeId === 'TrainSchedule') {
      return (
        <TrainSchedule
          navigator={navigator} />
      );
    }
     if (routeId === 'TrainBetweenStation') {
      return (
        <TrainBetweenStation
          navigator={navigator} />
      );
    }
     if (routeId === 'CancelledTrains') {
      return (
        <CancelledTrains
          navigator={navigator} />
      );
    }
    if (routeId === 'RescheduledTrains') {
      return (
        <RescheduledTrains
          navigator={navigator} />
      );
    }
    if (routeId === 'DivertedTrains') {
      return (
        <DivertedTrains
          navigator={navigator} />
      );
    }
     if (routeId === 'ManageFavorites') {
      return (
        <ManageFavorites
          navigator={navigator} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>welcome to Indian railway....</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('indianrails', () => App);
