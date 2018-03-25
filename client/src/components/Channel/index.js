import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Channel extends React.Component {


//2-5, 2-6, 3-7, 2-3
  render() {
    const { channelIndex, connectionType } = this.props;
    const width = 20;
    return (
      <div className='Channel' style={{opacity: +(connectionType > -1)}}>
        {<div className='top' style={{opacity: +(connectionType != 1)}}></div>}
        {(connectionType < 2) && <div className='middle'></div>}
        {<div className='bottom' style={{opacity: +(connectionType > 0)}}></div>}
        {<div className='gap' style={{opacity: +(connectionType > 0)}}></div>}
      </div>
    );
  }
}

Channel.propTypes = {
  channelIndex: PropTypes.number.isRequired,
  connectionType: PropTypes.number.isRequired,
};

export default Channel;
