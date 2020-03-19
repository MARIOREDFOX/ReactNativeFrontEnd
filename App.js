import React ,{ Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

import bgImage from './assets/images/background.jpg'
import logo from './assets/images/logo.png'

class App extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.logoText}>LOGIN</Text>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex:1,
    width:null,
    height:null,
    justifyContent:'center',
    alignItems:'center',
  },
  logo: {
    width: 120,
    height: 120 
  },
  logoContainer: {
    alignItems: 'center'
  },
  logoText: {
    color:'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  }
});

export default App;
