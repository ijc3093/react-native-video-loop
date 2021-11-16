import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {VideoLooper} from './video'
import {Editor} from './editor'
import useFormData from 'react-use-form-data'
import { createGlobalStyle } from 'styled-components'

import PropTypes from 'prop-types';
import styled from 'styled-components';


function HomeScreen({ navigation }) {
  const [formData, updateFormData, initialFormData, isInitialDataForPlaceholder] = useFormData({ 
    sampleVideo: 'https://ijc3093.github.io/image/yesterday_New.mp4',
    // https://lewhunt.github.io/assets/fitness/squats-720p.mp4
    // https://ijc3093.github.io/yesterday_OLD.mp4
    start: 4.31,
    end: 9.48,
    isEditorActive: false,
    isDebugMode: true,
    isSplitView: false
  }, true);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button
        onPress={navigation.openDrawer}
        title="Open navigation drawer"
      />
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}
      <GlobalStyle></GlobalStyle>
      <Editor {...formData} updateFormData={updateFormData} initialFormData={isInitialDataForPlaceholder && initialFormData}></Editor>
      {/* <VideoLooper source={formData.sampleVideo} start={Number(formData.start)} end={Number(formData.end)} isDebugMode={formData.isDebugMode} isSplitView={formData.isSplitView}></VideoLooper> */}

      <h3>This is gif</h3>
      <img src="https://ijc3093.github.io/image/ezgif.com-gif-maker.gif"></img>

      <h3>------------------------------------------------------------------------------------------------------------</h3>
      <h3>This is video looper</h3>
      <video width="750" height="500" controls>
        <source src="https://ijc3093.github.io/image/yesterday_OLD2.mp4" type="video/mp4"/>
      </video>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={navigation.openDrawer}
        title="Open navigation drawer"
      />
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
    margin: 0
  }
`
