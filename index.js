import {AppRegistry} from 'react-native';
import App from './App';
import EStyleSheet from 'react-native-extended-stylesheet';
import {name as appName} from './app.json';

EStyleSheet.build();
AppRegistry.registerComponent(appName, () => App);