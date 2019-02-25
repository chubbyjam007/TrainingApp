/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Testcontainer from './component/container/Testcontainer'

import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './dataflow/reducer'
import Paycontainer from './component/container/Paycontainer'

// new import
import Controloutcomecontainer from './component/container/Controloutcomecontainer'
import { RootStack } from '../src/navigator/RootStack'
import Dividecontainer from './component/container/Dividecontainer';
//



const store = createStore(reducers, applyMiddleware(createLogger()))




export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
        {/* <View>
          <Dividecontainer />
          <Paycontainer />
        </View> */}
      </Provider>

    );
  }
}

