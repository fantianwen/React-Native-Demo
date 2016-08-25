/**
 * Created by RadAsm on 16/8/25.
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
    Image
} from 'react-native';


var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'

export default class MoviewDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2)=>row1 !== row2
            }),
            loaded: false
        };
    }

    componentDidMount() {
        this._fetchData();
    }

    _fetchData() {

        fetch(REQUEST_URL)
            .then((response)=>response.json())
            .then((responseData)=> {

                this.setState({
                    loaded: true,
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies)
                })

            })
            .done();
    }

    _renderRow(movie, sectionID, rowID) {
        return (

            <View style={styles.itemContainer}>

                <Image style={styles.itemImageStyle}
                       source={{uri:movie.posters.thumbnail}}
                >

                </Image>

                <View style={styles.itemTitleContainerStyle}>

                    <Text style={styles.itemTextStyle}>

                        {movie.title}

                    </Text>

                </View>

            </View>

        );
    }

    render() {

        if (!this.state.loaded) {
            return (
                <View style={styles.loadingRootStyle}>

                    <Text>

                        loading data...

                    </Text>

                </View>
            );
        }

        return (

            <View>

                <ListView dataSource={this.state.dataSource}
                          renderRow={this._renderRow}
                >

                </ListView>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    loadingRootStyle: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },

    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    itemImageStyle: {
        width: 53,
        height: 81
    },

    itemTextStyle: {
        textAlign: 'center'
    },

    itemTitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});