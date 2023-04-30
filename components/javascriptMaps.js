const personnes = [
    {prenom : 'John', nom : 'Doe', age : 25},
    {prenom : 'Jane', nom : 'Doe', age : 24},
    {prenom : 'Jim', nom : 'Doe', age : 12},
]

const arrayPrenom = personnes.map((personne) => {
    return personne.prenom;
})
console.log(arrayPrenom)

// //.map() permet de créer un nouveau tableau à partir d'un tableau
// // existant en appliquant une fonction à chaque élément de ce tableau.
// const arrayChiffre = [1,2,3,4,5]

// const arrayMulti5 = arrayChiffre.map((chiffre) => {
//     return chiffre * 5;
// })

// console.log(arrayMulti5)