import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

class Details extends Component {
  ComponentWillMount() {
    fetch('https://akrp-server.herokuapp.com/movies/${this.props.id}')
      .then(resp => resp.json)
        .then((respo) => this.setState({ details: respo }));
  }

  renderDetails() {
    return this.props.details.map(details => {
      return (
    <Card
      key={details._id}
      title={details.original_title}
      image={{ uri: details.poster_path }}
    >
      <Text>{details.overview}</Text>
    </Card>
  );
  });
}

 render() {
  return (
    <View>
      {this.renderDetails()};
    </View>
  );
}
}

const mapStateToProps = (state) => {
  return { id: state.movie.id };
};

export default connect(mapStateToProps)(Details);
