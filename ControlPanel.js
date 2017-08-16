import React, { Component } from 'react';
import {
  AppRegistry,
  SwitchIOS,
  Switch,
  Image,
  SliderIOS,
  PickerIOS,
  PickerItemIOS,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import SliderJS from 'react-native-slider';
import styles from './styles';
import Button from './Button';
import MyMainView from './MyMainView';
import SummersityAboutPage from './SummersityAboutPage';
import { StackNavigator } from 'react-navigation';

export default class ControlPanel extends Component {
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          Control Panel
        </Text>

        <Button
          onPress={() => {
            //navigate('Main');
            this.props.closeDrawer();
            console.log("From Main Page Button");
          }}
          text="Main Page"
        />
        <Button
          onPress={() => {
            //navigate('About');
            this.props.closeDrawer();
            console.log("From About Page Button");
          }}
          text="About Page"
        />
      </View>
    );
  }
}
