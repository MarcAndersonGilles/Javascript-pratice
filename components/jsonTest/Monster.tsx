import React from 'react'

export default function monster() {
    const monster = `[ {
        "name": "Bulbasaur",
        "type": "Grass",
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "spAttack": 65,
        "spDefense": 65,
        "speed": 45,
        "moves": [
            "Tackle",
            "Vine Whip",
            "Razor Leaf",
            "Seed Bomb"
        ]
    }]`
    console.log(JSON.parse(monster)) // This is a string, not an object
  return (
    <div className=''>
        <h1>{monster}</h1>
    </div>
  )
}
