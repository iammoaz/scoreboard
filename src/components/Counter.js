import React, { PropTypes } from 'react';

const Counter = props => {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => props.onChange()}>-</button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action decrement" onClick={() => props.onChange(1)}>+</button>
        </div>
    )
};

Counter.propTypes = {
    onChange: React.PropTypes.func.isRequired;
    score: React.PropTypes.number.isRequired;    
};

export default Counter;
