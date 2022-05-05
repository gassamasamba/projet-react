import React, {useState} from 'react'
export default function AppEvent() {
    const [counter, setCounter] = useState(0)
    const onPlus = () =>{
        setCounter(counter + 1)
    }
    const onMoins = () =>{
        setCounter(counter - 1)
    }
    return (
        <div>
            <button onClick={onPlus}>+</button>
            <p>Compteur: {counter}</p>

            <button onClick={onMoins}>-</button>
        </div>
    )
}