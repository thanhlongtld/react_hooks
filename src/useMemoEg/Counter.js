import React, { useState, useMemo } from "react"

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne((prevCounterOne) => prevCounterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo((prevCounterTwo) => prevCounterTwo + 1)
    }
    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])
    // const isEven = () => {

    //     return counterOne % 2 === 0
    // }
    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One {counterOne}</button>
                <span>{isEven ? "Even" : "Odd"}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
