import React, {useState, useEffect, useRef} from 'react'

export default function UseRef() {
    const [name, setName] = useState('')
const renderCount = useRef(1)
const prevName = useRef<string>()

// Can store previous names with useRef, access some values dom elements, no additional renders
useEffect(() => {
    prevName.current = name
}, [name])

useEffect(() => {
    renderCount.current = renderCount.current + 1
}, [renderCount])
    return (
        <div>
            <h1>Render Count: {renderCount.current}</h1>
            <input  value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name} and it used to be {prevName.current}</div>
            <button onClick={focus}>Focus</button>
        </div>
    )
}
