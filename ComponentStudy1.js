/**
 * Created by RadAsm on 16/8/10.
 */
'use strict';
import React,{ Component } from 'react';
import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Navigator,
    TouchableHighlight,
    TextInput
} from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const componentStyle1 = StyleSheet.create({

        container: {
            flex: 1,
            flexDirection: 'column',
        },
        container1: {
            flex: 1,
            flexDirection: 'row',

        },
        container2: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'green',
        },
        container_left_top: {},
        container_right_top: {},
        container_left_bottom: {},
        container_right_bottom: {},


        textInputStyle: {
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: 'blue'

        }
    })
    ;

export default class ComponentStudy1 extends Component {

    constructor(props) {
        super(props);
        this.state = {text: 'Hello,world!'}
    }

    render() {
        return (
            <View style={{backgroundColor:'yellow',flex:1}}>

                <Text>
                    RN组件学习
                </Text>

                <Text>
                    TextInput学习
                </Text>

                <View style={componentStyle1.container}>

                    <View style={componentStyle1.container1}>

                        <TextInput style={componentStyle1.textInputStyle}
                                   value={this.state.text}
                                   onChangeText={(text)=>{
                                        this.setState({text});
                                        }
                                   }
                                   autoFocus={true}
                                   keyboardType='email-address'
                                   onChange={()=>{
                                       console.log('something changes')
                                   }}
                        >

                        </TextInput>

                    </View>

                    <View style={componentStyle1.container2}>

                        <TextInput style={componentStyle1.textInputStyle}
                                   defaultValue='这是不可编辑的'
                                   editable={false}>


                        </TextInput>

                    </View>

                </View>

            </View>

        );
    }
}
