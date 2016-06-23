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

import {View as StyledView, StyleSheet as cs,  SlideIn, StyledText} from './dist/component.css';
import {ViewPort, CylonEye } from './dist/cylon.css';
import {Bounce} from './dist/bounce.css';
import {Tada} from './dist/tada.css';
import {Wobble} from './dist/wobble.css'
import {FadeIn} from './dist/transition.css';

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
                <Tada><Text>Tada</Text></Tada>
                <Wobble><Text>Wobble</Text></Wobble>
                <FadeIn>Transition!</FadeIn>
                <ViewPort>
                    <CylonEye></CylonEye>
                </ViewPort>
            </View>
        );
    }
}


AppRegistry.registerComponent('PostcssReactNativeDemo', () => PostcssReactNativeDemo);
