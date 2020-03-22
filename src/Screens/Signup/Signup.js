import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "react-native-button";
import { AppStyles } from "../../../assets/Styles/styles";


export default class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.title, styles.leftTitle]}>Create new account</Text>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Full Name"
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Phone Number"
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="E-mail Address"
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
                    containerStyle={[styles.facebookContainer, { marginTop: 50 }]}
                    style={styles.facebookText}
                    // onPress={() => this.onRegister()}
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
      height: 42,
      paddingLeft: 20,
      paddingRight: 20,
      color: AppStyles.color.text
    },
    facebookContainer: {
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.tint,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      marginTop: 30
    },
    facebookText: {
      color: AppStyles.color.white
    }
  });