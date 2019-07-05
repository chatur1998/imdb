import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import router from './router';

class App extends Component {
  render() {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <router />
    <Provider>

   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
