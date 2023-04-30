import React from 'react'

export default function MaphtmlTEST() {

  const fruits = [
    { id: 1, name: "Banane", price: 1.99 },
    { id: 2, name: "Pomme", price: 0.99 },
    { id: 3, name: "Orange", price: 1.49 }
  ];

  return (
    <div className='text-black '>
      {fruits.map((fruit) => {
         return (
        <div key={fruits}>
          <h1>{fruit.name}</h1>
          <p>{fruit.price}</p>
        </div>
           );
      })}
    </div>
  )
}
