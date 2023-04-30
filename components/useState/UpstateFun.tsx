import React from 'react'
import States from './States'
type Props = {
    countCounter: (bgColor: any) => void
    countNumber: number
    countCountm1: (bgColor: any) => void
    bgColorBlue: boolean
    bgColorYellow: boolean
    handleAfficherNom: () => void
    afficherNom: string
  

}
export default function Upstate({countCounter,countNumber,countCountm1,
  bgColorBlue,bgColorYellow
  ,handleAfficherNom,afficherNom
} : Props) {
  
  return (
    <div className='flex  justify-center flex-col  items-center border p-6 text-black border-black border-opacity-50 '>
      <div className='flex flex-row gap-3 '>
      <button className={`bg-green-400 p-10 rounded-lg ${bgColorBlue ? ' bg-blue-500' : 'bg-zinc-700'}`} onClick={countCounter}>Click moi</button>
        <button className={`bg-red-500 p-10 rounded-lg ${bgColorYellow ? ' bg-yellow-500' :'bg-zinc-700 '}`} onClick={countCountm1}>Click moi</button>
      </div>     
      <div className='flex flex-col text-black border-black p-5'><h1>Chiffre actuel :{countNumber}  </h1>
      <button className='flex flex-col p-5 bg-gray-600' onClick={handleAfficherNom}>Afficher mon nom</button>
      <p className='font-bold text-base'>{afficherNom}</p> </div>  
    </div>
  )
}
