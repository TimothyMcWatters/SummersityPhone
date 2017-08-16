import React, { Component } from 'react';
import {
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
import { StackNavigator } from 'react-navigation';

export default class MyMainView extends Component {
  static navigationOptions = {
    title: 'Main Page',
    };
  render(){
    return (
      <ScrollView
        pointerEvents="box-none"
        style={styles.scrollView}
        scrollEventThrottle={200}
        contentInset={{top: 0}}
        >
        <View style={styles.container}>
        <Image style={styles.welcome} source={require('./UWF1.png')} />

        <Button
          onPress={this.props.openDrawer}
          text="Menu"
        />

        <View style={styles.row}>
          <Text style={styles.controlPanelText}>
            Welcome to Summersity!
            </Text>
        </View>

        </View>
      </ScrollView>
    )
  }
}
