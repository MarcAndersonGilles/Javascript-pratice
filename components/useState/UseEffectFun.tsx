import React, {useState,useEffect} from 'react'

export default function UseEffectFun() {
  const [renderCount, setRenderCount] = React.useState(0)

  useEffect(() => {
    // setRenderCount((prev) => prev + 1) // This will loop forever so dont use it
  }, 
  [renderCount])
  return (
    <div>
      <h1>Render Count: {renderCount}</h1>
    </div>
  )
}
