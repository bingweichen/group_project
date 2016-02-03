/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
Image,
  View
} from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
      <View>
          <View style={styles.style_1}>

          </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({

    style_1:{
        border: '1px solid red',
        height:40,
        borderWidth: 1,
        borderColor: 'red',
    }
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
pic: {
        width:100,
        height:100,
    },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
