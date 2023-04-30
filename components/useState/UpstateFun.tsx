import React from 'react'
import States from './States'
type Props = {
    countCounter: (bgColor: any) => void
    countNumber: number
    countCountm1: (bgColor: any) => void
    bgColorBlue: boolean
    bgColorYellow: boolean
  

}
export default function Upstate({countCounter,countNumber,countCountm1,
  bgColorBlue,bgColorYellow
} : Props) {
  
  return (
    <div className='flex  justify-center flex-col  items-center border p-6 text-black border-black border-opacity-50 '>
      <div className='flex flex-row gap-3 '>
      <button className={`bg-green-400 p-10 rounded-lg ${bgColorBlue ? 'bg-zinc-700' : 'bg-yellow-300'}`} onClick={countCounter}>Click moi</button>
        <button className={`bg-red-500 p-10 rounded-lg ${bgColorYellow ? 'bg-purple-500' : 'bg-green-400'}`} onClick={countCountm1}>Click moi</button>
      </div>     
      <div className='text-black border-black p-5'><h1>Chiffre actuel :{countNumber}  </h1> </div>  
    </div>
  )
}
