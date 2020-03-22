import React, { Component } from "react";
import { AppStyles } from "../../../assets/Styles/styles";

import { StyleSheet, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
// import { Button } from 'react-native-elements';
import Button from "react-native-button";

import { Actions } from 'react-native-router-flux';

import Signup from '../Signup/Signup';

export default class Login extends Component {
  // render() {
  //   return (
  //     <KeyboardAvoidingView style={styles.containerView} behavior="padding">
  //       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //         <View style={styles.loginScreenContainer}>
  //           <View style={styles.loginFormView}>
  //             <Text style={styles.logoText}>Instamobile</Text>
  //             <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
  //             <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
  //           </View>
  //           <Button
  //               title="Login"
  //               type="outline"
  //             />
  //         </View>
  //       </TouchableWithoutFeedback>
  //     </KeyboardAvoidingView>
  //   );
  // }
  // componentDidMount() {
  // }
  // componentWillUnmount() {
  // }
  signup() {
    // Actions.push(Signup)
    alert("clicked")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="E-mail or phone number"
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Password"
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>

        <Button
          containerStyle={styles.loginContainer}
          style={styles.loginText}
        >
          Log in
        </Button>

        <Text style={styles.or}>OR</Text>

        <Button
          containerStyle={styles.facebookContainer}
          style={styles.facebookText}
          onPress={this.signup}
        >
          Sign Up
        </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  or: {
    fontFamily: AppStyles.fontName.main,
    color: "black",
    marginTop: 40,
    marginBottom: 10
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20
  },
  leftTitle: {
    alignSelf: "stretch",
    textAlign: "left",
    marginLeft: 20
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  loginText: {
    color: AppStyles.color.white
  },
  placeholder: {
    fontFamily: AppStyles.fontName.text,
    color: "red"
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main
  },
  body: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text
  },
  facebookContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.facebook,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  facebookText: {
    color: AppStyles.color.white
  }
});

