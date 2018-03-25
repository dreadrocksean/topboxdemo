import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Icon = ({ icon, lineColor }) => {
    const lcIcon = (icon || '').toLowerCase();
    let type = '';
    if (!icon) {
        type = ' default';
    } else if (lineColor) {
        type = ` ${lineColor}`;
    }

    return (
        <div className={`Icon${type}`}>
            {icon &&
                <img src={`http://localhost:8077/artwork/svgs/${lcIcon}.svg`} />
            }
        </div>
    );
};

Event.propTypes = {
  icon: PropTypes.string,
}

export default Icon;

