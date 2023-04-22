
















// /////////////////////////////////////////////////////////////////////////
// ///1. créer une classe voiture
// class Car {
//     constructor(brand, model, year, color, price) {
//         this.carname = brand;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//         this.price = price;
//     }
//       bruit = () => {
//         return 'Vroum vroum'; 
//     }
// }

//  class Toyota extends Car{
//     constructor(brand,model,year,color,price,ami){
//         super(brand,model,year,color,price)
//         this.ami = ami;
//     }
//     hello(){
//         return `Hello ${this.ami}`;
//     }
//  }
// let toyota = new Toyota('Toyota','Corolla',2010,'blue',20000,'John');
// console.log(toyota.hello());
// const car1= new Car("Ford", "Mustang", 1969, "red", 10000);
// const car5 = new Car('Toyota', 'Corolla', 2010, 'blue', 20000)
// console.log(`La voiture est une ${car5.carname}. ${car5.bruit()}  `, );
// console.log(`Le garage possède une ${car1.carname} ${car1.model} de ${car1.year} et de couleur ${car1.color}.`);




////////////////////2. Polymorphisme
///permet à des objets de différentes classes de répondre de manière identique
// à des messages ou à des méthodes qui ont le même nom mais des implémentations différentes.
// class Forme {
//     calculerSurface() {
//       console.log("La surface de la forme est inconnue.");
//     }
//   }

//   class Carre extends Forme {
//     constructor(cote) {
//       super();
//       this.cote = cote;
//     }

//     calculerSurface() {
//       console.log("La surface du carré est " + (this.cote * this.cote));
//     }
//   }

//   class Cercle extends Forme {
//     constructor(rayon) {
//       super();
//       this.rayon = rayon;
//     }

//     calculerSurface() {
//       console.log("La surface du cercle est " + (Math.PI * this.rayon * this.rayon));
//     }
//   }

//   let forme1 = new Carre(5);
//   let forme2 = new Cercle(3);

//   forme1.calculerSurface(); // Affiche "La surface du carré est 25"
//   forme2.calculerSurface();


//////3. Encapsulation
//permet de cacher les détails d'implémentation d'une classe et de
// n'exposer que les fonctionnalités publiques et nécessaires.
// class CompteBancaire {
//     #solde = 0;

//     constructor() {
//         // constructeur de la classe
//     }

//     #verifierSolde(montant) {
//         if (montant > this.#solde) {
//             throw new Error("Solde insuffisant.");
//         }
//     }

//     deposer(montant) {
//         this.#solde += montant;
//     }

//     retirer(montant) {
//         this.#verifierSolde(montant);
//         this.#solde -= montant;
//     }

//     afficherSolde() {
//         console.log("Le solde du compte est de " + this.#solde + " euros.");
//     }
// }
// let monCompteBancaire = new CompteBancaire();
// monCompteBancaire.deposer(1000);
// monCompteBancaire.retirer(500);
// monCompteBancaire.afficherSolde(); // Affiche "Le solde du compte est de 500 euros."  