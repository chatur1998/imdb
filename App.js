import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  ComponentWillMount() {
    fetch('https://akrp-server.herokuapp.com/movies?p=1')
    .then((response) => response.json())
    .then((res) => this.setState({ imdb: res }));
  }

  render() {
  return (
    <Provider store={createStore(reducers)} />
      <Main />
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
