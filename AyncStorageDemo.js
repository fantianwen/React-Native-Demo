/**
 * Created by RadAsm on 16/8/22.
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
    BackAndroid,


    AsyncStorage

} from 'react-native';

var STORAGE_KEY_ONE = '@AsyncStorageDemo:key_one';
var STORAGE_KEY_MESSAGE = '@AsyncStorageDemo:key_message';

export default class AyncStorageDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            message: [],

        };
    }

    componentDidMount() {
        this._loadInitialState();
    }

    componentDidUnMount() {
        this._deleteValue_One();
    }

    async _loadInitialState() {
        var value = await AsyncStorage.getItem(STORAGE_KEY_ONE);

        if (value != null) {
            alert(value);
            this._appendMessage('从存储中获取到数据为:' + value);
        } else {
            this._appendMessage('存储中无数据,初始化为空数据');
        }
    }

    async _saveValue_One() {
        await AsyncStorage.setItem(STORAGE_KEY_ONE, '我是老王');
        this._appendMessage('保存到数据:我是老王');
    }

    async _deleteValue_One() {
        await AsyncStorage.removeItem(STORAGE_KEY_ONE);
        this._appendMessage('删除数据了');
    }

    _appendMessage(message) {
        this.setState({message: this.state.message.concat(message).concat('\n')});
    }

    render() {
        return (
            <View style={styles.rootStyle}>

                <TouchableHighlight onPress={()=>{
                                this._loadInitialState();
                          }}>

                    <View style={styles.buttonStyle}


                    >

                        <Text style={{
                            textAlign: 'center'
                        }}>

                            get and show

                        </Text>

                    </View>

                </TouchableHighlight>

                <TouchableHighlight style={{marginTop: 20}}
                                    onPress={()=>{
                                this._saveValue_One();
                          }}

                >

                    <View style={styles.buttonStyle}

                    >

                        <Text style={{
                            textAlign: 'center',

                        }}>

                            set

                        </Text>

                    </View>

                </TouchableHighlight>

                <TouchableHighlight style={{marginTop: 20}}
                                    onPress={()=>{
                                this._deleteValue_One();
                          }}

                >

                    <View style={styles.buttonStyle}

                    >

                        <Text style={{
                            textAlign: 'center'
                        }}>

                            clear

                        </Text>

                    </View>

                </TouchableHighlight>

                <Text style={{
                            borderBottomColor: '#f00',
                            borderBottomWidth: StyleSheet.hairlineWidth
                            }}>

                    {this.state.message}

                </Text>

            </View>

        )
    }

}

const styles = StyleSheet.create({
    rootStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    buttonStyle: {
        height: 50,
        width: 80,
        backgroundColor: 'gray',
        justifyContent: 'center'
    }
});





