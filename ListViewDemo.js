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
    ListView,
    TouchableOpacity
} from 'react-native';


var ToastCustomAndroid = require('./ToastCustomAndroid')

const styles = StyleSheet.create({

    listViewChild: {}

});

export default class ListViewDemo extends Component {

    // 构造
    constructor(props) {
        super(props);

        this._renderRow = this._renderRow.bind(this);

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2)=>r1 !== r2
        });
        // 初始状态
        this.state = {

            dataSource: ds.cloneWithRows(
                [
                    'row1',
                    'row2',
                    'row3',
                    'row4',
                    'row5',
                    'row6',
                    'row7',
                    'row8'
                ]
            ),
        };
    }

    _renderRow(rowData:string, sectionID:number, rowID:number) {
        return (

            <TouchableOpacity activeOpacity={0.8}
                              onPress={()=>{

                              if(rowID<4){
                                    ToastCustomAndroid.callBackFunction(
                                            true,
                                            (a,b,c,d,e)=>{
                                                ToastCustomAndroid.show('pressed+++true'+rowID+";"+a+","+b+","+c+","+d+","+e,1);
                                                },
                                            (a,b,c,d,e)=>{
                                                ToastCustomAndroid.show('pressed++++false'+rowID+";"+a+","+b+","+c+","+d+","+e,1);
                                                }
                                    )
                              }else{
                                    ToastCustomAndroid.callBackFunction(
                                            false,
                                            (a,b,c,d,e)=>{
                                                ToastCustomAndroid.show('pressed+++true'+rowID+";"+a+","+b+","+c+","+d+","+e,1);
                                                },
                                            (a,b,c,d,e)=>{
                                                ToastCustomAndroid.show('pressed++++false'+rowID+";"+a+","+b+","+c+","+d+","+e,1);
                                                }
                                    )
                              }
                              }}
            >

                <View>

                    <Text>
                        {rowData}
                    </Text>

                </View>

            </TouchableOpacity>

        );
    }

    render() {
        return (

            <ListView dataSource={this.state.dataSource}
                      renderRow={this._renderRow}
                      contentContainerStyle={styles.listViewChild}
            >

            </ListView>
        )
    }
}

