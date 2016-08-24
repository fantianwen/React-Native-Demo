'use strict';

import React,{ Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    BackAndroid
} from 'react-native';

import MyScene from './MyScene';
import ComponentStudy0 from './ComponentStudy0'
import ComponentStudy1 from './ComponentStudy1'
import Demos from './Demos'
import TextInputDemo from './TextInputDemo'
import ProgressBarDemo from './ProgressBarDemo'
import ToolbarDemo from './ToolbarDemo'
import ViewPagerAndroidDemo from './ViewPagerAndroidDemo'
import ListViewDemo from './ListViewDemo'
import AyncStorageDemo from './AyncStorageDemo'
import ScreenDemo from './ScreenDemo'

var _navigator;

class StudyNavigationApp extends Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }

    goBack() {
        if (_navigator && _navigator.getCurrentRoutes().length > 1) {
            _navigator.pop();
            return true;
        }
        return false;
    }

    render() {
        return (
            <Navigator
                initialRoute={{title:'RN study',index:0}}
                renderScene={(route,navigator)=>{
                            _navigator = navigator;

                            switch (route.index){
                                case 0:
                                    return <Demos navigator={navigator}/>
                                    break;
                                case 1:
                                    return <ComponentStudy0 navigator={navigator}/>
                                    break;
                                case 2:
                                    return <ComponentStudy1 navigator={navigator}/>
                                    break;
                                case 3:
                                    return <TextInputDemo />
                                    break;
                                case 4:
                                    return <ProgressBarDemo />
                                    break;
                                case 5:
                                    return <ToolbarDemo />
                                    break;
                                case 6:
                                    return <ViewPagerAndroidDemo />
                                    break;
                                case 7:
                                    return <ListViewDemo />
                                    break;
                                case 8:
                                    return <AyncStorageDemo />
                                    break;
                                case 9:
                                    return <ScreenDemo />
                                    break;
                            }
                        }
                    }
                configureScene={(route)=>{
                    if(route.sceneConfig){
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromBottom;
                }}
            />
        );
    }
}

AppRegistry.registerComponent('RNStudyProject', ()=>StudyNavigationApp);



