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
    TextInput,
    TouchableWithoutFeedback,
    NetInfo,
    ToastAndroid
} from 'react-native';

const styles = StyleSheet.create({

    bgStyle: {
        backgroundColor: '#f4f4f4',
        flex: 1,
    },

    imageStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignSelf: 'center'
    },

    usernameStyle: {
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
        backgroundColor: 'white'
    },

    usernameStyle1: {
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
        backgroundColor: 'white',
        marginTop: 1
    },

    submitStyle: {
        marginTop: 20,
        marginLeft: 36,
        marginRight: 36,
        backgroundColor: 'yellow',
        paddingTop: 20,
        paddingBottom: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },

    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1,
        justifyContent: 'space-between'
    },

    cannotlogin: {},

    newUser: {},

    textStyle: {
        color: 'blue'
    }

});


export default class TextInputDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this._netInfoChangeHandler = this._netInfoChangeHandler.bind(this);

        this.state = {

            _netState: NetInfo.isConnected,

        };
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener('change', this._netInfoChangeHandler);
    }

    componentDidUnMount() {
        NetInfo.isConnected.removeEventListener('change', this._netInfoChangeHandler);
    }


    _netInfoChangeHandler(netState) {
        ToastAndroid.show("当前网络的状态是:" + netState);
    }


    render() {
        return (
            <View style={styles.bgStyle}>

                <Image style={styles.imageStyle} source={require('./img/ic_tjke_lxr.png')}>

                </Image>

                <TextInput style={styles.usernameStyle}
                           placeholder='用户名'
                           numberOfLines={1}
                           autoFocus={true}
                           underlineColorAndroid={'transparent'}
                >

                </TextInput>

                <TextInput style={styles.usernameStyle1}
                           placeholder='用户名'
                           numberOfLines={1}
                           autoFocus={true}
                           underlineColorAndroid={'transparent'}
                >

                </TextInput>


                <TouchableWithoutFeedback onPress={()=>{alert('submitClicked')}}>

                    <View style={styles.submitStyle}>

                        <Text style={styles.textStyle}>
                            login
                        </Text>

                    </View>

                </TouchableWithoutFeedback>


                <View style={styles.bottomContainer}>

                    <View style={styles.cannotlogin}>

                        <Text style={styles.textStyle}>

                            无法登陆?

                        </Text>

                    </View>

                    <View style={styles.newUser}>

                        <Text style={styles.textStyle}>

                            新用户

                        </Text>

                    </View>

                </View>

            </View>
        )
    }

}
