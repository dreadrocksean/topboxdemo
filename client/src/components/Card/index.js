import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.css';

const Card = ( props ) => {
    const { backgroundColor } = props;

    const classes = classNames({
      'red': backgroundColor === 'red',
      'Card': true
    });
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};

Event.propTypes = {
  backgroundColor: PropTypes.string,
}

export default Card;

