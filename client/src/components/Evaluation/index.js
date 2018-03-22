import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

const Evaluation = ( props ) => {
    const { text, score, maxScore, color } = props.data;
    const scoreDefined = score !== null && typeof(score) !== 'undefined';
    const classes = classNames({
        Evaluation: true,
        red: color === 'red',
        green: color === 'green',
    });
    return (
        <div className={classes}>
            <p>{text}</p>
            {scoreDefined && <p>{`${score}/${maxScore}`}</p>}
            {/*<Checkbox />*/}
        </div>
    );
};

Event.propTypes = {
  secs: PropTypes.number.required,
}

export default Evaluation;

