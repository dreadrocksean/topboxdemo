import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setReferences, setLineColors } from './redux';

import './App.css';
import { fetchData } from './constants/api';
import Event from './components/Event/';

class App extends Component {

  static defaultProps = { fetchData };

  state = { data: [] };

  componentDidMount() {
    this.doFetchData('data1.json');
    // this.doFetchData('data2.json');
  }

  async doFetchData(dataName) {
    try {
      const data = await this.props.fetchData(dataName);
      this.setReferencesStore(data);
      this.setLineColorsStore(data);
      this.setState({ data });
    } catch (err) {
      console.log('ERROR: ', err);
    }
  }

  setReferencesStore(events) {
    const references = events.reduce((agg, event) => {
        if (!event.references || !event.references.length) {return agg;}
        agg.push({id: event.id, references: event.references});
        return agg;
    }, []);
    this.props.setReferences(references);
  }

  setLineColorsStore(events) {
    const lineColors = events.map(event => ({
        lineColor: event.lineColor, id: event.id
    }));
    this.props.setLineColors(lineColors);
  }

  render() {
    const data = this.state.data;
    return (
      <div className="App">
        {data.map((event, i) => {
            return (
                <Event
                    data={event}
                    key={i}
                    index={i}
                    last={data.length === i+1}
                />
            )
        })}
      </div>
    );
  }
}

Event.propTypes = {
  setLineColors: PropTypes.func,
  setReferences: PropTypes.func,
}

const mapDispatchToProps = { setReferences, setLineColors };

const AppContainer = connect(
  null, mapDispatchToProps
)(App);
export default AppContainer;
