import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import buttonPressed from '../actions';

class Main extends Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  onButtonPress(id) {
    this.props.buttonPressed(this.props.movie.id);
  }  

  renderMovies() {
    return this.props.data.map(movie => {
      <Details record={movie} />

      <Card
        key={movie._id}
        title={movie.original_title}
        image={{ uri: movie.poster_path }}
      >
      <Button
        onPress={this.onButtonPress.bind(this)}
        backgroundColor="#03A9F4"
        title="Know more!!"
      />
    </Card>
  );
  }
  render() {
    return (
      <ScrollView>
        {this.renderMovies()};
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.movie.imdb }
}


export default connect(null, { buttonPressed, fetchMovies })(Main);
