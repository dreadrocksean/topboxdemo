import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';
import Icon from '../Icon/';
import Time from '../Time/';
import Card from '../Card/';
import Evaluation from '../Evaluation/';
import Connection from '../Connection/';


class Event extends Component {

    render() {

      const data = this.props.data;
      const { index } = this.props;
      const { title, icon, time, subtitle, notes,
        backgroundColor, judgmentIcon, lineColor,
        id
      } = data;

      let evaluation = data.evaluation;
      if (evaluation) evaluation.color = data.color;
      let judgement = null;
      if (judgmentIcon === 'success'){
        judgement = 'successIcon';
      } else if (judgmentIcon === 'errorIcon') {
        judgement = 'errorIcon';
      }

      const verticalLineColor = this.props.lineColors[index].lineColor;

      const last = this.props.last ? ' last' : '';

      return (
          <div className='Event'>
            <div className='group'>

              <div className='date-icon'>
                <Time time={time} />
                <Icon icon={icon} lineColor={lineColor} />
              </div>

              { !this.props.last &&
                <div className={`line ${verticalLineColor}${last}`}></div>
              }
            </div>

            <Card backgroundColor={backgroundColor}>
                <h2 className='title'>{title}</h2>
                {subtitle && <div className='subtitle'>{subtitle}</div>}
                {notes && <div className='notes'>{notes}</div>}
                {evaluation && <Evaluation data={evaluation}/>}
                <div className={`judgement ${judgement}`}>
                  {judgmentIcon &&
                    <img src={`http://localhost:8077/artwork/svgs/${judgement}.svg`} alt={judgement} />
                  }
                </div>

            </Card>
            <Connection id={id} />
          </div>
      );
    }
}

// Preferable to have PropTypes.shape({}) if time permitted
Event.propTypes = {
  data: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => (
  {lineColors: state.lineColors,}
);

const AppContainer = connect(
  mapStateToProps
)(Event);

export default AppContainer;


