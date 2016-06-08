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
import Animated from 'Animated';

import styles from './dist/welcome.css';
import {View as StyledView, StyleSheet as cs, DimensionComponent, SlideIn, StyledText} from './dist/component.css';


const test = StyleSheet.create({
    container: {
        flex: 1
    },
    square: {
        width: 30,
        height: 30,
        backgroundColor: 'blue'
    }
});

class PostcssReactNativeDemo extends DimensionComponent {
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
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
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
