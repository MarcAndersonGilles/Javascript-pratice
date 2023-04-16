
const verifyNumberEqual = (number1, number2) => {
    if(number1 === number2){
        return console.log('Le nombre est égal à lui même');
    }
    else{
        return console.log('Le nombre n\'est pas égal à lui même')
    }
}
verifyNumberEqual(11, 10);







/////////////////////////////////////////////////////////////////////////
// //1. Counter jusqu'a 10
// const countToTen = (count) => {
//     for (let i = 0; i=> 0; ++i){
//       if(i < 10){
//         console.log(count + i)
//       }else{
//         if(i <= 10){
//           console.log(`J'ai fini de compter jusqu'à ${i}`)
//         }
//       }
//     }
//   }
//   console.log(countToTen(1));

/////////////////////////////////////////////////////////////////////////
// //2. Calculer le carré d'un nombre
// const calculeCarre = (x) => {
//     return x * x;
// }
// console.log((calculeCarre(10)))



// /////////////////////////////////////////////////////////////////////////
// // //3. Counter chaque noms dans un tableau
// const noms = [
//     "Jean",
//     "Pierre",
//     "Paul",
//     "Jacques",
//     "Marie",
//     "Jeanne",
//     "Pierre",
//     "Paul",
//     "Jacques",
// ];
// const tousLesNoms = (noms ) => {
//     for(let i = 0; i < noms.length ; i++){
//        console.log(noms[i]);
//     }
// }
// tousLesNoms(noms);


/////////////////////////////////////////////////////////////////////////
// // //4.  Information sur la voiture (objet)
// const car = {
//     brand: "Ford",
//     model: "Mustang",
//     year: 1969,
//     color: "red",
// }
// console.log(`Le garage possède une ${car.brand} ${car.model} de ${car.year} et de couleur ${car.color}.`);
// console.log(car.model)

// ///////////////////////////////////////////////////////////////////////
// // //5. Calculer le nombre pair ou impair
// const calculeNombrePaires = (nombres) => {
//     if (nombres % 2 === 0){
//         return console.log(`Le nombre ${nombres} est un chiffre pair`)
//     }else{
//         return console.log(`Le nombre ${nombres} est chiffre inpair`)
//     }
// }
// calculeNombrePaires(14);

// ///////////////////////////////////////////////////////////////////////

// // //6. La boucle de Fibonacci 10 premiers nombres
// const Fibonacci = (n) => {
//     let a =0;
//     let b= 1;
//     let fibonacci;
//     for (let i = 3; i <= 10; i++) {
//         fibonacci = a + b;
//         a = b;
//         b = fibonacci;
//         console.log(fibonacci)
       

//     }
// }
// Fibonacci();



/////////////////////////////////////////////////////////////////////////
// // //7. Calculer le factoriel d'un nombre
// function factoriel(n) {
//     if (n <= 1) {
//       return 1;
//     } else {
//       return n * factoriel(n - 1);
//     }
//   }
//   // exemple d'utilisation
//   console.log(factoriel(b)); // affiche 120