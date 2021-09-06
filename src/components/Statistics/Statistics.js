import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <div className={s.wrapper}>
                <p className={s.good}>Good: {good}</p> 
                <p className={s.neutral}>Neutral: {neutral}</p>
                <p className={s.bad}>Bad: {bad}</p>
            </div>
            <p className={s.total}>Total: {total}</p>
            <p className={s.positiveFeedback}>Positive feedback: {positivePercentage} %</p>
        </div> 
    )
}

Statistics.defaultProps = {
    total: 0,
    positivePercentage: 0,
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
