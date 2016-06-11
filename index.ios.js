/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Dimensions,
    LayoutAnimation,
    TouchableOpacity,
    View
} from 'react-native';

import styles from './dist/welcome.css';
import {View as StyledView, StyleSheet as cs,  SlideIn, StyledText} from './dist/component.css';
import {ViewPort, CylonEye } from './dist/cylon.css';
import {Bounce} from './dist/bounce.css';

class PostcssReactNativeDemo extends Component {
    render() {
        return (
            <View style={cs.container}>
                <StyledView className="green">
                    <Text style={cs.text}>Hello</Text>
                    <StyledText>Click Me!</StyledText>
                    <SlideIn>
                        <Text>Hello Cruel World!</Text>
                    </SlideIn>

                </StyledView>
                <Bounce>Bounce</Bounce>
            </View>
        );
    }
}
/*
 const styles = StyleSheet.create({
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
 instructions: {
 textAlign: 'center',
 color: '#333333',
 marginBottom: 5,
 },
 });*/

AppRegistry.registerComponent('PostcssReactNativeDemo', () => PostcssReactNativeDemo);
