import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

class Connection extends Component {
    // const channelDirection =

    render() {
        const { id, channels } = this.props;
        if (!channels) { return null; }
        const found = this.props.channels.find(channel => {
            return channel.indexOf(id);
        });
        const index = channels.indexOf(found);
        const isNode = channels.indexOf(id) > -1;
        return (
            <div className='Connection'>
                <div className='top'></div>
                {(isNode) && <div className='middle'></div>}
                <div className='bottom'></div>
                <div className='gap'></div>
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

