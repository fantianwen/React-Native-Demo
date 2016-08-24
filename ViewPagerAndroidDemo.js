/**
 * Created by RadAsm on 16/8/18.
 */
import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Navigator,
    ViewPagerAndroid,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    ToastAndroid,
    AppState
} from 'react-native';


const styles = StyleSheet.create({
    viewPagerPage1: {
        backgroundColor: 'green'
    },
    viewPagerPage2: {},
    pageStyle: {
        alignItems: 'center',
        backgroundColor: 'yellow',
        height: 300
    }
});

export default class ViewPagerAndroidDemo extends Component {

    constructor(props) {
        super(props);
        this._handleAppStateChangedHandler = this._handleAppStateChangedHandler.bind(this);
        this.state = {

            _appState: AppState.currentState,

        }
    }

    componentWillMount() {

        AppState.addEventListener('change', this._handleAppStateChangedHandler);
    }

    componentWillUnMount() {
        AppState.removeEventListener('change', this._handleAppStateChangedHandler);
    }

    _handleAppStateChangedHandler(appState) {
        alert("app状态为" + appState);
        ToastAndroid.show('当前app的状态是:' + appState, ToastAndroid.SHORT);
    }

    render() {
        return (

            <View style={{flex:1}}>


                <Text>

                    current active state is:{this.state._appState}

                </Text>


                <TouchableWithoutFeedback
                    delayPressIn={2000}
                    onPressIn={()=>{
                    ToastAndroid.show('ToastAndroid',ToastAndroid.SHORT);
                    }}


                >
                    <Text>

                        这是一个ViewPager例子啊

                    </Text>
                </TouchableWithoutFeedback>


                <ViewPagerAndroid
                    style={styles.pageStyle}
                    initialPage={0}
                >
                    <View style={styles.viewPagerPage1}>

                        <TouchableHighlight underlayColor="red"
                                            onPress={()=>{alert("pressed");}}
                                            onPressIn={()=>{alert("pressedIn...");}}
                                            onPressOut={()=>{alert("pressedOut...")}}
                        >

                            <Text>

                                First page

                            </Text>

                        </TouchableHighlight>


                        <TouchableWithoutFeedback onLongPress={()=>{alert("长按了");}}>

                            <View>

                                <Text>

                                    长按和延迟的对比(长按)

                                </Text>

                            </View>

                        </TouchableWithoutFeedback>


                        <TouchableWithoutFeedback delayPressIn={2000}
                                                  onPressIn={()=>{alert("延迟2秒..In");}}

                        >

                            <View>

                                <Text>

                                    长按和延迟的对比(延迟)

                                </Text>

                            </View>

                        </TouchableWithoutFeedback>


                        <TouchableWithoutFeedback delayPressOut={2000}
                                                  onPressOut={()=>{alert("delay press out");}}

                        >

                            <View>

                                <Text>

                                    delay press out

                                </Text>

                            </View>

                        </TouchableWithoutFeedback>


                    </View>

                    <View style={styles.viewPagerPage2}>


                        <TouchableOpacity activeOpacity={0.6}>

                            <Text>

                                Second page

                            </Text>

                        </TouchableOpacity>

                        <TouchableHighlight activeOpacity={0.6}
                                            onPress={()=>{alert("dddd");}}
                                            underlayColor='yellow'


                        >

                            <Text>

                                TouchableHighlight

                            </Text>

                        </TouchableHighlight>


                        <TouchableNativeFeedback style={{marginTop:20}}
                                                 background={TouchableNativeFeedback.SelectableBackground()}
                                                 background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
                                                 background={TouchableNativeFeedback.Ripple('blue',false)}

                        >
                            <View style={{width: 150, height: 100,}}>
                                <Text style={{margin: 30}}>Button</Text>
                            </View>
                        </TouchableNativeFeedback>


                    </View>


                </ViewPagerAndroid>

            </View>
            //
            //<View >
            //    <Text style={styles.welcome}>
            //        ViewPagerAndroid实例
            //    </Text>
            //    <ViewPagerAndroid style={styles.pageStyle} initialPage={0}>
            //        <View style={{backgroundColor:"red"}}>
            //            <Text>First Page!</Text>
            //        </View>
            //        <View style={{backgroundColor:"yellow"}}>
            //            <Text>Second Page!</Text>
            //        </View>
            //    </ViewPagerAndroid>
            //</View>

        )
    }

}


