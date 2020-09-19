import React, { button, useState } from 'react'
import './count.css'


const Counts = () => {
    const [count, setCount] = useState(0);

    const CountHandle = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h1>Click on button for Counting</h1>
            <div className="numbers">{count}</div>
            <button onClick={CountHandle}>Count Me</button>
        </>
    )
}
export default Counts;