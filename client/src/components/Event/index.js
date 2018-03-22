import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrLineColor } from '../../redux';

import './index.css';
import Icon from '../Icon/';
import Time from '../Time/';
import Card from '../Card/';
import Evaluation from '../Evaluation/';

class Event extends Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const lineColor = this.props.data.lineColor;
      const index = this.props.index;
      const prevLineColor = index > 0
        ? this.props.currLineColor.lineColors[index - 1]
        : null;
      this.props.setCurrLineColor({
        lineColor: lineColor || (prevLineColor || {}).lineColor
      });
    }

    render() {

      const data = this.props.data;
      const index = this.props.index;
      const { title, icon, time, subtitle, notes, backgroundColor, judgmentIcon, lineColor } = data;

      let evaluation = data.evaluation;
      if (evaluation) evaluation.color = data.color;
      let judgement = null;
      if (judgmentIcon === 'success'){
        judgement = 'successIcon';
      } else if (judgmentIcon === 'errorIcon') {
        judgement = 'errorIcon';
      }

      const verticalLineColor = (this.props.currLineColor
        .lineColors[index] || {})
        .lineColor || '';

      return (
          <div className='Event'>
            <div className='group'>
              <div className='date-icon'>
                <Time time={time} />
                <Icon icon={icon} lineColor={lineColor} />
              </div>
              <div className={`line ${verticalLineColor}`}></div>
            </div>
            <Card backgroundColor={backgroundColor}>
                <h2 className='title'>{title}</h2>
                {subtitle && <div className='subtitle'>{subtitle}</div>}
                {notes && <div className='notes'>{notes}</div>}
                {evaluation && <Evaluation data={evaluation}/>}
                <div className={`judgement ${judgement}`}>
                  {judgmentIcon &&
                      <svg width='20' height='20'>
                        <image href={`http://localhost:8077/artwork/svgs/${judgement}.svg`} />
                      </svg>
                  }
                </div>

            </Card>
          </div>
      );
    }
}

// Preferable to have PropTypes.shape({}) if time permitted
Event.propTypes = {
  data: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  currLineColor: state.lineColor,
});

const mapDispatchToProps = { setCurrLineColor };

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
export default AppContainer;


