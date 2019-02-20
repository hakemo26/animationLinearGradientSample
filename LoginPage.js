import React, { Component } from "react";
import { Text, View, TextInput, TouchableHighlight, Alert } from "react-native";
import styles from "../../src/assets/css/styles";
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      colorLoginButtonText: {
        color: 'white'
      }
    };
    
  }
  showAlert= () => {
    alert('Welcome '+this.state.text);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <AnimatedLinearGradient customColors={presetColors.nikamuz} speed={4000}/>
        <View style={styles.loginBox}>
          <Text style={styles.loginTitle}>ورود</Text>
          <View style={styles.inputGroups}>
            <Text style={styles.labelText}>نام کاربری :‌ </Text>
            <TextInput
              value={this.state.inputText}
              onChangeText={(text) => this.setState({text})}
              style={styles.inputText}
              underlineColorAndroid="transparent"
              placeholder="لطفا برای ورود به برنامه یک نام کاربری وارد کنید"
            />
          </View>
          <View style={styles.buttonGroups}>
            <TouchableHighlight
              style={styles.button}
              onPress= { this.showAlert }
              underlayColor={'#ffde0a'}
              onShowUnderlay={() => {
                this.setState({
                  colorLoginButtonText: {
                    color: 'black'
                  }
                })
              }}
              onHideUnderlay={() => {
                this.setState({
                  colorLoginButtonText: {
                    color: 'white'
                  }
                })
              }}
            >
              <Text style={[styles.buttonText, this.state.colorLoginButtonText]}>ورود به برنامه</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}


// nikamuz: [
//     'rgb(0, 175, 255)',
//     'rgb(30, 175, 240)',
//     'rgb(60, 175, 210)',
//     'rgb(90, 175, 180)',
//     'rgb(120, 175, 150)',
//     'rgb(150, 175, 120)',
//     'rgb(180, 175, 90)',
//     'rgb(210, 175, 60)',
//     'rgb(240, 175, 30)',
//     'rgb(255, 175, 0)',
//   ]