'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  ListView,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
var foods = [
    {key: 'Sport Your Train', details:''},
    {key: 'Live Station', details:'', isCollapsed: true},
    {key: 'Train Schedule', details:''},
    {key: 'Train Between Stations', details:''},
    {key: 'Cancelled Trains', details:'', isCollapsed: true},
    {key: 'Rescheduled Trains', details:''},
    {key: 'Diverted Trains', details:''},
    {key: 'Manage Favourites', details:''},
   
];
class MainPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
     
        <View>
          <View style={styles.headerlayout} >
          <Image style={styles.logo} source={require('./img/logo.png')} />
          <Text style={styles.htitle}>
            National Train Enquiry System
          </Text>
          <Text style={styles.pr}>
           Indian Railways
          </Text>
         </View>
      
        <View>
         
            <ListView
                  style={styles.listViewContainer}
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow.bind(this)}
                  initialListSize={14}/>
         
          </View>
        </View>
      
    );
  }

   constructor(props){
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            dataSource: ds.cloneWithRows(foods),
        };
    }
    _renderRow(data, sectionID, rowID) {
        return (
            <TouchableHighlight onPress={this.gotoSpotYourTrain.bind(this)}
                style={styles.buttonContainer}>
                <Text>{data.key}</Text>
            </TouchableHighlight>
        );
    }
    

  gotoSpotYourTrain() {
    console.log('here');
    this.props.navigator.push({
      id: 'SpotYourTrain',
      name: 'SpotYourTrain',
    });
  }
}

var NavigationBarRouteMapper = {

  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
         LeftButton
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          RightButton
        </Text>
      </TouchableOpacity>
    );
  }
};

var styles = StyleSheet.create({
  logo:{
    top:5,
    height:50,
    width :50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  headerlayout: {
    width: Dimensions.get('window').width, 
    height: 60, 
    top:55,
    backgroundColor: '#FFFFFF',
  },
  htitle: {
    left: 100,
    bottom:35,
  },
  pr : {
   left: 140,
   bottom:33,
  },
  rightarroy : {
    top:5,
    height:50,
    width :50,
    right : 10,
  },
  scrollViewContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
    },
    listViewContainer: {
        top:60,
        flex: 1,
        flexDirection: 'column',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        backgroundColor: "#EEE",
    },
    header: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#387ef5",
    },
  
});

module.exports = MainPage;
