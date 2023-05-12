import React from 'react'

export default function Promises() {
    ////////////////////////////////////////////////////////////////////////////////////////////////
    //1. First Promise to test
    // We say what is suppose to be a resolve and reject 
    let promisesFirst = new Promise((resolve, reject) => {
        const a = 1+ 1
        if(a == 2){
            resolve("Sucess")
        }else{
            reject('Failed')
        }
    })
    //then will be call when the promise is resolved(Like it will do something)
    promisesFirst.then((message) => {
        console.log("This is in the then " + message)
        //this will be call when the promise is rejected
    }).then((message) => {
        console.log("This is good " + message)
    })
    .catch((error) => {
        console.log("This is in the catch " + error)
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////
    // 2. Second all promises are resolved
    const acheterOrdinateur = new Promise((resolve, reject) => {
        resolve("J'ai acheté un ordinateur")
    })
    const acheterConsole = new Promise((resolve,reject) => {
        resolve("J'ai acheter")
    })
    const acheterTelephone = new Promise ((resolve,reject) => {
        resolve("J'ai acheter un telephone")
    })
    Promise.all([acheterTelephone,acheterConsole,acheterTelephone]).then((message) => {
        // console.log(message)
    })
    // The fatest promise will be the one that will be resolve(if theres a lot of code)
    Promise.race([acheterTelephone,acheterConsole,acheterTelephone]).then((message) => {
        console.log(message)
    })


  return (
    <div>

    </div>
  )
}
