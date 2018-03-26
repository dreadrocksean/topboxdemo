import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Channel from '../Channel';
import './index.css';

class Connection extends Component {
  // const channelDirection =

  renderChannels() {
    const { id, channels } = this.props;
    return channels.map((ch, i) => {
      const flatChannels= [].concat(...channels);
      const found = flatChannels.find(item => {
        return item.id === id && item.channelIndex === i;
      }) || {};
      let channelIndices = (
        flatChannels.filter(item => item.id === id)
        .map(fc => fc.channelIndex)
      );
      channelIndices = channelIndices.length ? channelIndices : [-1];
      const highestChannel = Math.max(...channelIndices);

      const connectionType = typeof found.connectionType === 'undefined'
        ? -1
        : found.connectionType;

      return (
        <div key={i} className='ChannelWrapper'>
          <Channel
            connectionType={connectionType}
            showMiddle={highestChannel > i - 1}
          />
        </div>
      )
    });
  }

  render() {
    return (
      <div className='Connection'>
        {this.renderChannels()}
      </div>
    );
  }
}

Connection.propTypes = {
  id: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {channels: state.channels,}
};

const AppContainer = connect(
  mapStateToProps,
)(Connection);

export default AppContainer;
