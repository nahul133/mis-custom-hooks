import React, { useState } from 'react';

export const useCounter = (inicialState = 0) => {
    
    const [count, setCount] = useState(inicialState);

    const increment = () => {
        setCount( count + 1 );
    }

    const decrement = () => {
        setCount( count - 1 );
    }

    const reset = () => {
        setCount(inicialState)
    }

    return {

        count,
        increment,
        decrement,
        reset

    }

};
