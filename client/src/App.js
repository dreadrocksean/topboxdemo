import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrLineColor } from './redux';

import './App.css';
import { fetchData } from './constants/api';
import Event from './components/Event/';

class App extends Component {

  static defaultProps = { fetchData };

  state = { data: [] };

  componentDidMount() {
    this.fetchData('data1.json');
    // this.fetchData('data2.json');
  }

  async fetchData(dataName) {
    try {
      const data = await this.props.fetchData(dataName);
      this.setState({ data });
    } catch (err) {
      console.log('ERROR: ', err);
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.data.map((event, i) => (
            <Event data={event} key={i} index={i}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  lineColor: state.lineColor,
});

const mapDispatchToProps = { setCurrLineColor };

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default AppContainer;
