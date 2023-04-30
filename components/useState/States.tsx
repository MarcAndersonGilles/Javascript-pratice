import React, { useState, useEffect } from 'react'
import UpState from './UpstateFun'
import UseEffectFun from './UseEffectFun'

export default function States() {
  const [bgColorBlue, setbgColorBlue] = useState(false)
  const [bgColorYellow, setbgColorYellow] = useState(false)
  const [afficherNom, setafficherNom] = useState('')

  const handleAfficherNom = () => {
   return setafficherNom('Mon nom est Marc')
  }

  const [count, setcount] = useState(0)
  const handleClick = (bgColor: any) => {
    setcount(count + 1)
    setbgColorBlue(bgColor)
    if(bgColorBlue){
       setbgColorYellow(false)
    }

  }
  const handleClick2 = (bgColor: any) => {
    setcount(count - 1)
    setbgColorYellow(bgColor)
    if(bgColorYellow){
      setbgColorBlue(false)
    }
  }
  useEffect(() => {
    console.log('La page a été chargée')
    console.log(`La couleur actuelle du boutton gauche est ${bgColorBlue ? 'bleu' : 'zinc'}`)
    console.log(`La couleur actuelle du boutton droit est ${bgColorYellow ? 'jaune' : 'zinc'}`)
  },[bgColorBlue,bgColorYellow])
  return (
    <div className='text-black w-full h-full '>
      <UpState countCounter={handleClick}
        countCountm1={handleClick2}
        countNumber={count}
        bgColorBlue={bgColorBlue}
        bgColorYellow={bgColorYellow}
        handleAfficherNom={handleAfficherNom}
        afficherNom={afficherNom}
      />
      <UseEffectFun />
    </div>
  )
}
