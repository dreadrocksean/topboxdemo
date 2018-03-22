import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Time = ( {time} ) => {
    const date = new Date(0);
    date.setHours(0);
    date.setMilliseconds(date.getMilliseconds() + (time * 1000));
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const mins = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const secs = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    const timeStamp = `${hours}:${mins}:${secs}`;
    return (
        <div className='Time'>{timeStamp}</div>
    );
};

Event.propTypes = {
  time: PropTypes.number.required,
}

export default Time;

