import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Icon = ( {icon, lineColor} ) => {
    icon = (icon || '').toLowerCase();
    let type = '';
    if (!icon) {
        type = ' default';
    } else if (lineColor) {
        type = ` ${lineColor}`;
    }
    return (
        <div className={`Icon${type}`}>
            {icon &&
                <img src={`http://localhost:8077/artwork/svgs/${icon}.svg`}/>
            }
        </div>
    );
};

Event.propTypes = {
  icon: PropTypes.string,
}

export default Icon;

