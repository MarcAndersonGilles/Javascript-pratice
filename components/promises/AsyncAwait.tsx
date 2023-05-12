import React, {useState} from 'react'

export default function AsyncAwait() {
    const [response, setResponse] = useState<any>('')

    const manger = () => {
        return new Promise((resolve, reject) => {
            const prixPizza = 10
            const argentPersonne = 15
            if (prixPizza > argentPersonne) {
                reject('Tu n\'as pas assez d\'argent pour la pizza')
            } else {
                resolve('Tu as assez d\'argent pour la pizza')
            }
        })
    }

    const faireManger = async () => {
        try {
            const reponse = await manger()
            console.log(reponse)
            setResponse(reponse)
        } catch (error) {
            console.log(error)
            setResponse(error)
        }

    }
   faireManger()

    return (
        <div>
            <h1>{response}</h1>
        </div>
    )
}
