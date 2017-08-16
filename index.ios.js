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
import Drawer from 'react-native-drawer';
import MyControlPanel from './ControlPanel';
import tweens from './tweens';
import { StackNavigator } from 'react-navigation';

const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

let counter = 0;
export class SummersityPhone extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: 'overlay',
      openDrawerOffset:100,
      closedDrawerOffset:0,
      panOpenMask: .1,
      panCloseMask: .9,
      relativeDrag: false,
      panThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: true,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: false,
      negotiatePan: false,
      side: "left",
    };
   }

   setDrawerType(type){
     this.setState({
       drawerType: type
     })
   }

   tweenHandler(ratio){
     if(!this.state.tweenHandlerPreset){ return {} }
     return tweens[this.state.tweenHandlerPreset](ratio)
   }

   noopChange(){
     this.setState({
       changeVal: Math.random()
     })
   }

   openDrawer(){
     this.drawer.open()
   }

   closeDrawer(){
     this.drawer.close()
   }

   setStateFrag(frag) {
     this.setState(frag);
   }

   render() {
     var controlPanel = <MyControlPanel closeDrawer={() => {
       this.drawer.close();
     }} />
     return (
       <Drawer
         ref={c => this.drawer = c}
         type={this.state.drawerType}
         animation={this.state.animation}
         openDrawerOffset={this.state.openDrawerOffset}
         closedDrawerOffset={this.state.closedDrawerOffset}
         panOpenMask={this.state.panOpenMask}
         panCloseMask={this.state.panCloseMask}
         relativeDrag={this.state.relativeDrag}
         panThreshold={this.state.panThreshold}
         content={controlPanel}
         styles={drawerStyles}
         disabled={this.state.disabled}
         tweenHandler={this.tweenHandler.bind(this)}
         tweenDuration={this.state.tweenDuration}
         tweenEasing={this.state.tweenEasing}
         acceptDoubleTap={this.state.acceptDoubleTap}
         acceptTap={this.state.acceptTap}
         acceptPan={this.state.acceptPan}
         tapToClose={this.state.tapToClose}
         negotiatePan={this.state.negotiatePan}
         changeVal={this.state.changeVal}
         side={this.state.side}
         >
           <MyMainView
             drawerType={this.state.drawerType}
             setParentState={this.setStateFrag.bind(this)}
             openDrawer={this.openDrawer.bind(this)}
             openDrawerOffset={this.state.openDrawerOffset}
             closedDrawerOffset={this.state.closedDrawerOffset}
             panOpenMask={this.state.panOpenMask}
             panCloseMask={this.state.panCloseMask}
             relativeDrag= {this.state.relativeDrag}
             panStartCompensation= {this.state.panStartCompensation}
             tweenHandlerOn={this.state.tweenHandlerOn}
             disabled={this.state.disabled}
             panThreshold={this.state.panThreshold}
             tweenEasing={this.state.tweenEasing}
             tweenHandlerPreset={this.state.tweenHandlerPreset}
             animation={this.state.animation}
             noopChange={this.noopChange.bind(this)}
             acceptTap={this.state.acceptTap}
             acceptDoubleTap={this.state.acceptDoubleTap}
             acceptPan={this.state.acceptPan}
             tapToClose={this.state.tapToClose}
             negotiatePan={this.state.negotiatePan}
             side={this.state.side}
             />
       </Drawer>
        );
     }
   }

//   const SummersityPhone = StackNavigator({
//     Main: { screen: MyMainView },
//     About: { screen: SummersityAboutPage },
//   });

AppRegistry.registerComponent('SummersityPhone', () => SummersityPhone);
