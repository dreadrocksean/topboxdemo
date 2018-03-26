import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

const Evaluation = ( props ) => {


    const { text, score, maxScore, color } = props.data;
    const checkbox =
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
        >
            <path d="M95,0c-1.384,0-2.635,0.562-3.54,1.47L37.5,55.43L19.54,37.47C18.635,36.562,17.384,36,16,36c-2.762,0-5,2.238-5,5
    c0,1.384,0.562,2.635,1.47,3.54l21.49,21.49c0.905,0.907,2.156,1.47,3.54,1.47s2.635-0.562,3.54-1.47L98.53,8.54
    C99.438,7.635,100,6.384,100,5C100,2.238,97.762,0,95,0z"/>
            <polygon points="60,27.501 60,17.5 0,17.5 0,77.5 60,77.5 60,54.227 54,60.227 54,71.5 6,71.5 6,23.5 54,23.5 54,33.5 "/>
        </svg>;
    const scoreDefined = score !== null && typeof(score) !== 'undefined';
    const classes = classNames({
        Evaluation: true,
        red: color === 'red',
        green: color === 'green',
    });
    return (
        <div className={classes}>
            <p>{text}</p>
            <div>
                {scoreDefined && <p>{`${score}/${maxScore}`}</p>}
                <span className='checkbox'>{checkbox}</span>
            </div>
        </div>
    );
};

Event.propTypes = {
  secs: PropTypes.number.required,
}

export default Evaluation;

