/**
 * Created by RadAsm on 16/8/16.
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
    ToolbarAndroid,
    SwitchAndroid,
    Switch,
    Picker
} from 'react-native';

const styles = StyleSheet.create({
    toolbarStyle: {
        height: 56
    }

});

var toolbarAction = [
    {
        title: '菜单1',
        icon: require('./img/hehe.png'),
    },
    {
        title: '菜单2',
        // show字段用于表明是否隐藏在右边的菜单中还是在显示在toolbar中
        show: 'always'
    }
]


export default class ToolbarDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            switchOn: false,
            selectedLanguage: 'java',
        };
    }

    render() {
        return (

            <View>

                <ToolbarAndroid logo={require('./img/ic_tjke_lxr.png')}
                                title='ToolbarDemo'
                                subtitle='这是副标题'
                                actions={toolbarAction}
                                style={styles.toolbarStyle}
                                navIcon={require('./img/ic_tjke_arrow_wx.png')}
                >

                    <SwitchAndroid value={this.state.switchOn}
                                   onValueChange={(value)=>{

                                      this.state.switchOn = value;

                                      alert(this.state.switchOn);

                               }}>

                    </SwitchAndroid>

                    <Switch value={false}
                            onValueChange={()=>{
                        alert("onValueChanged");
                }}>

                    </Switch>

                    <Picker selectedValue={this.state.selectedLanguage}
                            onValueChange={(language)=>{
                            this.setState({selectedLanguage:language});
                        }}
                    >

                        <Picker.Item label='java' value='java'/>
                        <Picker.Item label='c' value='c'/>

                    </Picker>

                </ToolbarAndroid>

                <Text >

                    当前选择的是:{this.state.selectedLanguage}

                </Text>

            </View>

        )
    }
}

