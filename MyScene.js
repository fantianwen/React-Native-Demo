/**
 * Created by RadAsm on 16/8/9.
 */
import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Navigator
} from 'react-native';

const styles = StyleSheet.create({
    flexContainer1: {
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'khaki'
    },
    flexChild1: {
        width: 20,
        height: 20,
        backgroundColor: 'forestgreen'
    },
    flexChild2: {
        width: 20,
        height: 20,
        backgroundColor: 'limegreen'
    },
    flexChild3: {
        width: 20,
        height: 20,
        backgroundColor: 'palegreen'
    }
});

export default class MyScene extends Component {
    render() {
            return (

            <View style={styles.flexContainer1}>

                <TouchableHighlight style={styles.flexChild1}
                                    onPress={()=>this.props.navigator.push({
                                        index:1,
                                        sceneConfig:Navigator.SceneConfigs.VerticalDownSwipeJump
                                    })}>
                    <Text>
                        Hi,My name is hehe!
                    </Text>

                </TouchableHighlight>

                <TouchableHighlight style={styles.flexChild2}
                                    onPress={()=>{
                                        alert(this.props.navigator.getCurrentRoutes());
                                        this.props.navigator.jumpForward();
                                    }}>
                    <View />

                </TouchableHighlight>

                <TouchableHighlight style={styles.flexChild3}
                                    onPress={()=>{
                                        alert(this.props.navigator.getCurrentRoutes());
                                        this.props.navigator.push({
                                            index:2
                                        });
                                    }}>

                    <View />

                </TouchableHighlight>

            </View>
        )
    }
}