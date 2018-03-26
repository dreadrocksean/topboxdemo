import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Channel = ({ connectionType, showMiddle }) => {

  const show = connectionType > -1;

  return (
    <div className='Channel'>
      {<div className='top' style={{opacity: +(show && connectionType !== 1)}}></div>}
      {showMiddle && <div className='middle'></div>}
      {<div className='bottom' style={{opacity: +(show && connectionType > 0)}}></div>}
      {<div className='gap' style={{opacity: +(show && connectionType > 0)}}></div>}
    </div>
  );

};

Channel.propTypes = {
  connectionType: PropTypes.number.isRequired,
  showMiddle: PropTypes.bool.isRequired,
};

export default Channel;
