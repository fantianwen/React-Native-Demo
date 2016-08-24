/**
 * Created by RadAsm on 16/8/15.
 */
import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Navigator,
    Image,
    TouchableWithoutFeedback,
    ScrollView,
    BackAndroid
} from 'react-native';

const demoStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        flexDirection: 'column',
    },

    child: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textInputStyle: {
        fontSize: 16,
        color: 'blue',
        marginLeft: 16,
    },

    imageRightArrow: {
        marginRight: 16
    }

});

export default class Demos extends Component {

    render() {
        return (

            <View style={demoStyle.container}>

                <ScrollView>

                    <TouchableWithoutFeedback onPress={()=>{
                       this.props.navigator.push({index:3});
                       }
                    }
                    >

                        <View style={demoStyle.child}>

                            <Text style={demoStyle.textInputStyle}>
                                TextInputDemo
                            </Text>

                            <Image style={ demoStyle.imageRightArrow} source={require('./img/ic_tjke_arrow_wx.png')}>

                            </Image>


                        </View>

                    </TouchableWithoutFeedback>


                    <TouchableWithoutFeedback onPress={()=>{
                       this.props.navigator.push({index:4});
                       }
                    }
                    >

                        <View style={demoStyle.child}>

                            <Text style={demoStyle.textInputStyle}>
                                ProgressBarDemo
                            </Text>

                            <Image style={ demoStyle.imageRightArrow} source={require('./img/ic_tjke_arrow_wx.png')}>

                            </Image>


                        </View>

                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=>{
                       this.props.navigator.push({index:5});
                       }
                    }
                    >

                        <View style={demoStyle.child}>

                            <Text style={demoStyle.textInputStyle}>
                                ToolbarDemo
                            </Text>

                            <Image style={ demoStyle.imageRightArrow} source={require('./img/ic_tjke_arrow_wx.png')}>

                            </Image>


                        </View>

                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=>{
                       this.props.navigator.push({index:6});
                       }
                    }
                    >

                        <View style={demoStyle.child}>

                            <Text style={demoStyle.textInputStyle}>
                                ViewPagerAndroid Demo
                            </Text>

                            <Image style={ demoStyle.imageRightArrow} source={require('./img/ic_tjke_arrow_wx.png')}>

                            </Image>


                        </View>

                    </TouchableWithoutFeedback>


                    <TouchableWithoutFeedback onPress={()=>{
                       this.props.navigator.push({index:7});
                       }
                    }
                    >

                        <View style={demoStyle.child}>

                            <Text style={demoStyle.textInputStyle}>
                                ListView Demo
                            </Text>

                            <Image style={ demoStyle.imageRightArrow} source={require('./img/ic_tjke_arrow_wx.png')}>

                            </Image>


                        </View>

                    </TouchableWithoutFeedback>


                    <TouchableWithoutFeedback onPress={()=>{
                       this.props.navigator.push({index:8});
                       }
                    }
                    >

                        <View style={demoStyle.child}>

                            <Text style={demoStyle.textInputStyle}>
                                API-AsyncStorage Demo
                            </Text>

                            <Image style={ demoStyle.imageRightArrow} source={require('./img/ic_tjke_arrow_wx.png')}>

                            </Image>


                        </View>

                    </TouchableWithoutFeedback>


                    <TouchableWithoutFeedback onPress={()=>{
                       this.props.navigator.push({index:9});
                       }
                    }
                    >

                        <View style={demoStyle.child}>

                            <Text style={demoStyle.textInputStyle}>
                                API-屏幕适配 Demo
                            </Text>

                            <Image style={ demoStyle.imageRightArrow} source={require('./img/ic_tjke_arrow_wx.png')}>

                            </Image>

                        </View>

                    </TouchableWithoutFeedback>


                </ScrollView>
            </View>

        )
    }
}


