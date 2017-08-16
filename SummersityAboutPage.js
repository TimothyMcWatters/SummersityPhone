import React, { Component } from 'react';
import {
  SwitchIOS,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import {  StackNavigator } from 'react-navigation';
import Button from './Button';

export default class SummersityAboutPage extends Component {
  static navigationOptions = {
    title: 'About Page',
  };
  render() {
    return (
    <View style={styles.container}>
      <Image style={styles.banner}
      source={require('./UWF1.png')} />

      <Button
        onPress={this.props.openDrawer}
        text="Menu"
      />

      <Text style={{fontSize:20, fontWeight: 'bold', color: 'white'}}>
        ABOUT SUMMERSITY
      </Text>

      <Text style={{fontSize:10, color: 'white'}}>
        Some information about the application will go here.{"\n"}
      </Text>

      <Image style={styles.mainPicture} source={require('./BaileyKevin.png')} />

      <Text style={styles.mainTextBox}>
      Dr. Kevin Bailey{"\n"}
      Vice President | Student Affairs {"\n"}
      850-474-2214 | baileyk@uwf.edu
      </Text>

      <View style={{flex: 1, flexDirection: 'row'}}>
      <Image style={styles.otherPictures} source={require('./JanuszChuzyn.jpeg')} />
      <Image style={styles.otherPictures} source={require('./TimothyMcWatters.jpg')} />
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={styles.otherTextBox}>
      Janusz Chuzynski{"\n"}
      Research Associate{"\n"}
      Academic Technology Center{"\n"}
      850-473-7231{"\n"}
      jchudzynski@uwf.edu
      </Text>
      <Text style={styles.otherTextBox}>
      Timothy McWatters{"\n"}
      Student / Intern{"\n"}
      Software Engineering{"\n"}
      850-473-7231{"\n"}
      tam50@students.uwf.edu
      </Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2164AC',
  },
  banner: {
    margin: 20,
  },
  mainPicture: {
    margin: 5,
  },
  mainTextBox: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  otherPictures: {
    margin: 30,
    height: 100,
    width: 90,
  },
  otherTextBox: {
    margin: 5,
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
  },
});
