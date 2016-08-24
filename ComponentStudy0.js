/**
 * Created by RadAsm on 16/8/9.
 */

/**
 * 学习:
 *      样式
 *      Text
 *      Image
 *      ScrollView
 *      Navigator
 */

'use strict';

import React,{ Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Navigator,
    TouchableHighlight
} from 'react-native';


const styles = StyleSheet.create({
    container1: {
        // 颜色
        color: 'red',
        // 字体大小
        fontSize: 20,
        // 字体名称
        fontFamily: "Georgia",
        // 字体风格
        fontStyle: 'italic',
        // 字体粗细
        fontWeight: '300',
        // 文字阴影偏移
        textShadowOffset: {width: 30, height: 30},
        // 文字阴影颜色
        textShadowColor: 'green',
        // 文字阴影圆角的大小
        textShadowRadius: 10,
        // 字间距(好像效果不大)
        letterSpacing: 100,
        // 行高度
        lineHeight: 50,
        // 文字对齐方式
        textAlign: 'auto',
    },
    container2: {
        // 颜色
        color: 'red',
        // 字体大小
        fontSize: 20,
        // 字体名称
        fontFamily: "Georgia",
        // 字体风格
        fontStyle: 'italic',
        // 字体粗细
        fontWeight: '300',
        // 文字阴影偏移
        textShadowOffset: {width: 30, height: 30},
        // 文字阴影颜色
        textShadowColor: 'green',
        // 文字阴影圆角的大小
        textShadowRadius: 10,
        // 字间距(好像效果不大)
        letterSpacing: 100,
        // 行高度
        lineHeight: 50,
        // 文字对齐方式
        textAlign: 'center',
        // 文字下划线
        textDecorationLine: 'underline',
        // 下划线的样式,好像没效果
        textDecorationStyle: 'dashed',
        textDecorationColor: 'blue',
        writingDirection: 'rtl',

    },
    amilia: {
        width: 350,
        height: 300,
        opacity: 0.3,
    },
    image1: {
        width: 80,
        height: 80,
        borderWidth: 3,
        borderColor: 'red',
        borderRadius: 30,
    },

    flexContainer1: {
        height: 100,
        flexDirection: 'row',
        marginTop: 50,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    flexChild1: {
        width: 30,
        backgroundColor: 'powderblue'
    },
    flexChild2: {
        width: 30,
        backgroundColor: 'skyblue'
    },
    flexChild3: {
        width: 30,
        backgroundColor: 'steelblue'
    },
    flexContainer2: {
        height: 100
    }
});


export default class ComponentStudy0 extends Component {

    render() {
        return (

            <ScrollView>
                <Text style={styles.container1}>Hello,World!</Text>
                <Text style={styles.container2}>
                    Hello,World2!

                    <Text>
                        Hello,world3!
                    </Text>


                </Text>

                <Image style={styles.amilia} source={require('./img/hehe.png')}>
                    <Text style={{textAlign:'center'}}>

                        艾米莉亚碳!

                    </Text>

                </Image>

                <Image style={styles.image1} source={{uri:'ic_launcher'}}/>

                <Image style={styles.image1}
                       source={{uri:'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg'}}/>

                <View style={styles.flexContainer1}>

                    <View style={styles.flexChild1}/>
                    <View style={styles.flexChild2}/>

                    <TouchableHighlight style={styles.flexChild3}
                                        onPress={()=>{
                                            var _navigator;
                                            _navigator = this.props.navigator;
                                            _navigator.jumpBack();
                                        }}>
                        <View />
                    </TouchableHighlight>
                </View>
                <View style={styles.flexContainer2}>
                </View>

            </ScrollView>
        );
    }
}