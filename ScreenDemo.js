/**
 * Created by RadAsm on 16/8/23.
 */
import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Navigator,
    ListView,
    TouchableOpacity,
    PixelRatio,
    Linking
} from 'react-native';

import ToastCustomAndroid from './ToastCustomAndroid'
import NativeNavigator from './NativeStudyModel'

export default class ScreenDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentDidMount() {
        Linking.getInitialURL()
    }

    render() {
        return (

            <View>

                <Text>
                    当前屏幕的分辨率为:{PixelRatio.get()}
                </Text>

                <TouchableOpacity onPress={()=>{
                        ToastCustomAndroid.promiseCallbackTest(true).then((value)=>{
                               ToastCustomAndroid.show("promise返回值为"+value,1);
                        });

                }}>

                    <Text style={styles.promiseStyle}>

                        then(resolve)

                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={{
                        marginTop: 20
                    }}
                    onPress={()=>{
                        ToastCustomAndroid.promiseCallbackTest(false).then(
                            (value)=>{
                                ToastCustomAndroid.show("promise返回值为"+value,1);
                            },
                            (error)=>{
                            ToastCustomAndroid.show("rejected"+error,1);
                            }
                        )
                    }}>

                    <Text style={styles.promiseStyle}>

                        then(resolve+rejected)

                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={{
                        marginTop: 20
                    }}
                    onPress={()=>{
                        ToastCustomAndroid.promiseCallbackTest(false).then(
                            (value)=>{
                                ToastCustomAndroid.show("promise返回值为"+value,1);
                            },
                            (error)=>{
                            ToastCustomAndroid.show("rejected"+error,1);
                            }
                        )
                    }}>

                    <Text style={styles.promiseStyle}>

                        直接返回(使用await关键字)

                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginTop: 20
                    }}
                >

                    <Text style={styles.promiseStyle}>

                        直接返回(使用await关键字)

                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginTop: 20
                    }}

                    onPress={()=>{
                        NativeNavigator.navigateToHybirdTestActivity(222);
                    }}
                >

                    <Text style={styles.promiseStyle}>

                        原生跳转

                    </Text>

                </TouchableOpacity>


            </View>

        )
    }

}


const styles = StyleSheet.create({
    promiseStyle: {
        width: 80,
        height: 45,
        backgroundColor: 'green'
    }
});
