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
    ProgressBarAndroid,
    ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
    progressBarStyle: {},
});

export default class ProgressBarDemo extends Component {
    render() {
        return (
            <View>

                <Text>

                    这是ProgressBar的Demo

                </Text>

                <ProgressBarAndroid style={styles.progressBarStyle}
                                    styleAttr='Inverse'
                                    color='blue'>

                </ProgressBarAndroid>

                <ProgressBarAndroid styleAttr='LargeInverse'
                                    color='green'
                                    progress={0.4}>

                </ProgressBarAndroid>

                <ProgressBarAndroid styleAttr='Horizontal'
                                    color='green'
                                    progress={0.4}>

                </ProgressBarAndroid>

                <ProgressBarAndroid style={{marginTop: 10}}
                                    styleAttr='Horizontal'
                                    color='yellow'
                                    progress={0.4}
                                    indeterminate={false}>

                </ProgressBarAndroid>


                <ActivityIndicator size='large'
                                   color='purple'>

                </ActivityIndicator>


            </View>
        )
    }
}
