import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={s.wrapper}>
        {options.map(option=> (
        <button className={s.button} type="button" key={option} onClick={()=> onLeaveFeedback(option)}>{option}</button>
        ))}
    </div>
)
    
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// const FeedbackOptions = ({onGoodFeedbackIncrement,onNeutralFeedbackIncrement,onBadFeedbackIncrement}) => {
//     return (
//         <div>
//             <button type="button" onClick={onGoodFeedbackIncrement}>Good</button>
//             <button type="button" onClick={onNeutralFeedbackIncrement}>Neutral</button>
//             <button type="button" onClick={onBadFeedbackIncrement}>Bad</button>
//         </div>
//     )
// }