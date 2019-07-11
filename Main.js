import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { buttonPressed, fetchMovies } from '../actions';
import Details from './Details';


class Main extends Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  onButtonPress() {
    this.props.buttonPressed(this.props.movie._id);
  }

  renderMovies() {
     //const database = Array.from(this.props.data);
     return this.props.data.map(movie => {
      return (
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
  });
}
  render() {
    return (
      <ScrollView>
        <Text>
          console.log(this.props.data)
        </Text>
        {this.renderMovies()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({ data: state.movie.imdb });


export default connect(mapStateToProps, { buttonPressed, fetchMovies })(Main);
