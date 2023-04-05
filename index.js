// ---------------------------------------------- //
//             Formation javascript               //
// ---------------------------------------------- //


// ------ 01 Les variables ------ //
// ------------------------------ //
    // Tout comme vous mettez le nom d'un carton en fonction de ce qui se trouvent à l'intérieur, de même, le nom d'une varibale doit indiquer ce qui se trouve à l'intérieur

    // Comment déclarer une variable ? Avec let, const et var
    //let car = "bmw"

    car = "Seat" // => on peur réaffecter un valeur à une variable existante

    let quantityBookInStock = 500
    // camelCase => 1ère lettre des mot en majuscule sauf la toute première

    // Exercice
        // Créer deux variables : 
            // "numberOfSeasons" et lui affecter la valeur 6
            // "numberOfEpisodes" et assignez lui la valeur 12

            // Correction
              let numberOfSeasons = 6
              let numberOfEpisodes = 12

    
// --- Modifier la valeur d'une variable
    quantityBookInStock = 499 // => on a changer la valeur

// --- Les Opérateurs
    // +, -, *, /, %

    let nombre = 10 + 3 // addition, soustraction
    let nombre2 = 6 / 2 // division
    let nombre3 = 2 * 3 // multiplication

    // Exercice
        // Créer deux nouvelles variables
            // "episodeTime" avec pour valeur 45
            // "commercialTime" avec 5

        // À l'aide des deux variables, ainsi que du nombre d'épisodes et du nombre de saisons, 
        // créez une variable nommée "totalShowTime" qui contient le temps de visionnage total de cette série


// --- Mutabilité des variables
    let compteur = 0; 
    compteur++;
    compteur = 10; // On peut changer la valeur si c'est déclarer avec let ou var. 


// --- Les constantes
    const nombrePostParPage = 20;
    // nombrePostParPage = 30; // Retournera une erreur dans la console car on ne peut plus changer sa valeur

    // Exercice 
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-1-les-variables


  // Résumé avec Kahoots

// ------ 02 Les Types de données ------ //
// ------------------------------------- //

// Le type d'une variable ou d'une constante est tout simplement le genre des données qu'elle enregistre. En JavaScript, il y a trois types primitifs principaux :

// number (nombre) ;
// string (chaîne de caractères) ;
// boolean (valeur logique). true ou false

// Les types primitifs sont les briques de base de chaque structure de données en JavaScript. Peu importe la complexité finale de votre application, à sa base se trouveront ces trois types primitifs.

// Number
  let numberInt = 20
  let numberFloat = 1.3

// Boolean
  let bool = true
  let boolean2 = false

// String
  let chaine1 = "Je m'appelle Flo"
  let chaine2 = "j'ai 25 ans"
  console.log(chaine1 + ' ' + chaine2) // => concaténation

    // Exercice
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-2-les-types

  
    // Résumé avec Kahoots


// ----------- 03 Les Objets ------------ //
// -------------------------------------- //

  // Mais qu'est-ce que cela signifie vraiment ? Commençons par nous intéresser à quelques objets du monde réel, comme les stylos, les livres, les smartphones, les ordinateurs, etc.

  // Vous connaissez tous des types de stylos – à bille, feutre, plume, etc. Ils font tous partie du type d'objet : stylos. Vous pouvez écrire avec, ils utilisent de l'encre et peuvent se tenir à une main.

  // Ce serait identique pour différents types de livres. Ils possèdents tous : des pages, une couverture, un titre, etc.

  // Les objets possèdent tous des caractéristiques propre à leur type

  // En programmation, on appelle un type d'objet => une classe. Pour créer une classe, vous pouvez choisir le nom de votre choix. Vous le verrez, les classes permettent aussi de regrouper beaucoup de détails ; c'est pourquoi elles s'appellent aussi des types complexes.


  // Comment créer un objet ?
  let myBook = {
    title: 'Le titre du livre',
    author: 'Mat VD',
    numberOfPages: 250,
    readed: true 
  }

  

    // Exercice
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-3-les-objets


  // Comment accéder aux données d'un objet ?

    // console.log(myBook.title) // dot notation
    // console.log(myBook.author)

    // Exercice
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-3-les-objets


// Les classes 
  // La construction d'un objet à la main, par la notation à accolades vue précédemment, convient bien à des objets simples et uniques. Mais vous aurez souvent besoin de beaucoup d'objets du même type. C'est là que les classes sont utiles

  // Une classe est un modèle pour un objet dans le code. Elle permet de construire plusieurs objets du même type (appelés instances de la même classe) plus facilement, rapidement et en toute fiabilité

// Comment construire une classe ?
    class MyBook {  // mot clé "class" puis nom de la classe avec une majuscule
      constructor(title, author, numberOfPages, readed) { 
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.readed = readed;
      }
    }

    let book1 = new MyBook('Le titre du livre', 'nom auteur', 200, true);
    
    // Exerice
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-4-les-classes


  // Résumé avec Kahoots


// ----------- 04 Les tableaux ------------ //
// ---------------------------------------- //
  // Il existe un autre type en JavaScript : le tableau (array).

    //     marque / places / km / En circulation
    let car = ["BMW", 5, 120000, true]

    //                0         1        2        3     
    //let guests = ['Franck', 'Marvin', 'John', 'Isabelle']
    guests[0] // => Franck
    guests[1] // => Marvin
    guests[2] // => John
    guests[3] // => Isabelle



    // Info : l'indice d'un tableau démarre à zéro

    // Exercice
    // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-5-les-tableaux

  
  //                0         1        2        3     
  let guests = ['Franck', 'Marvin', 'John', 'Isabelle']
  // Travailler sur les tableaux
    // Length
      guests.length
    // Push
      guests.push('Mat') // => ajoute un élément en fin de tableau
    // Unshift
      guests.unshift('Greg') // => ajoute un élément en début de tableau
    // Pop
      guests.pop()


    // Exercice

  // Résumé avec Kahoots


// ----------- 05 Les conditions ------------ //
// ------------------------------------------ //

  // L'instruction   if  /  else  est une des plus universelles en programmation. Qu'il s'agisse de réagir à une saisie de l'utilisateur, aux résultats de calculs ou de simplement vérifier si quelqu'un est connecté ou non, vous aurez souvent à utiliser des instructions if/else.

  // IF (SI) l'utilisateur est connecté, ouvrir sa page d'accueil

  // ELSE (SINON) revenir à la page de connexion

 
  // let boolean = true;

  // if (boolean) {
  //   alert('La condition est remplie')
  // } else {
  //   alert('La condition n\'est pas remplie')
  // }

  // let userLoggedIn = true
  // let firstName = "Paul"


  // const numberOfSeats = 30;
  // const numberOfGuests = 25;
  // if (numberOfGuests < numberOfSeats) {
  // // autoriser plus d'invités
  // } else {
  // // ne pas autoriser de nouveaux invités
  // }

  // expressions de comparaisons
  // < , <= , == , >= , > , !=
  // if (firstName != "Paul") {
  //   alert("Utilisateur connecté")
  // } else {
  //   alert(`Bonjour ${firstName}`)
  // }

    // Exercice 
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-6-les-conditions

    // La condition à remplir pour pouvoir conduire une voiture en france
    // age >= 18
    // haveAcar = true
    // haveFuel = true
    // Si la condition est remplie, aficher "Vous êtes autorisé à conduire" sinon afficher "Dommage, il va falloir attendre"

    // let age = 18

    // if (age >= 18) {
    //   alert("Vous êtes autorisé à conduire")
    // } else {
    //   alert("Dommage, il va falloir attendre")
    // }
    
  // Les conditions multiples

    // Opérateurs logiques
    // ET => && 
    // OU => ||
    // NOT => !

  let haveAcar = true
  let haveFuel = false
  let haveKeys = true

  // if (age >= 18 && haveAcar && haveFuel && haveKeys) {
  //   alert("Vous êtes autorisé à conduire")
  // } else {
  //   alert("Dommage, il va falloir attendre")
  // }

  // if (age == 18) {
  //   alert('Tu es tout juste majeur')
  // } else if (age >= 99) { // 102
  //   alert('Tu ne devrais plus conduire')
  // } else if (age > 18) { 
  //   alert('Tu peux conduire')
  // } else {
  //   alert('J\'ai rien de plus à écrire')
  // }

    // Exercice 
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-6-les-conditions



  // Le scope des variables (la portée des variables)

  // let userLoggedIn1 = false
  // let welcomeMessage = ""

  // if (userLoggedIn1) {
  //   welcomeMessage = "Bienvenue à nouveau"
  // } else {
  //   welcomeMessage = "Bienvenue nouvel utilisateur"
  // }

  // alert(welcomeMessage)

    // En JavaScript, les variables créées par let  ou const  ne peuvent 
    // être vues ou utilisées qu'à l'intérieur du bloc de code dans lequel elles sont déclarées.


  // L'instruction switch
  // Va être utile si on veut vérifier la valeur d'une variable par rapport à une liste de valeurs attendues

  // let firstUser = {
  //   name: "Will Alexander",
  //   age: 33,
  //   accountLevel: "normal"
  // };

  // let secondUser = {
  //     name: "Sarah Kate",
  //     age: 21,
  //     accountLevel: "premium"
  // };



  // switch (fifthUser.accountLevel) {
  //   case 'normal':
  //     alert('Bienvenue à toi')
  //     break

  //   case 'premium':
  //     alert('Bienvenue à toi premium')
  //     break

  //   default: 
  //     alert('Bienvenue nouvel utilisateur') 
  // }


  // Résumé kahoots

// ------------- 06 Les boucles ------------- //
// ------------------------------------------ //

// For
// const numberOfpassengers = 10
// for (let i = 0; i < numberOfpassengers; i++) {
//   console.log(`Le passager n° ${i} vient de rentrer dans l'avion`)
// }
// console.log('Tout le monde à embarqué')

//                        0         1       2       3          4       5
// let listePassagers = ['Franck', 'Sylvie', 'Flo', 'Benoit', 'Claire', 'Gilou la menace']


// For ... in => boucler sur les tableaux
// for (let i in listePassagers) {
//   console.log(`Le passager prénommé(e) ${listePassagers[i]} vient de rentrer dans l'avion`)
// }
// console.log('Tout le monde à embarqué')

// For ... of => boucler sur les tableaux et les objets
  // let listePassagers = [
  //   {
  //     name: "Sarah Kate",
  //     age: 21
  //   },
  //   {
  //     name: "Audrey Simon",
  //     age: 27
  //   },
  //   {
  //     name: "Audrey Peters",
  //     age: 27
  //   }
  // ]

// for (let passager of listePassagers) {
//   console.log(`Le passager prénommé(e) ${passager.name} vient de rentrer dans l'avion`)
// }
// console.log('Tout le monde à embarqué')

// While

// let seatsLeft = 10;
// let passengersStillToBoard = 8;
// let passengersBoarded = 0;

// while (seatsLeft > 0 && passengersStillToBoard > 0) {
//     passengersBoarded++; // un passager embarque
//     passengersStillToBoard--; // donc il y a un passager de moins à embarquer
//     seatsLeft--; // et un siège de moins
// }

// console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges

    // Exercice
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-7-les-boucles


// -------- 07 La gestion des erreurs ------- //
// ------------------------------------------ //

// En JavaScript, comme dans beaucoup d'autres langages de programmation, 
// on distingue généralement trois types d'erreur.

  // - les erreurs de syntaxe
    // Relire son code ou le faire relire par quelqu'un
    // IDE => VS Code => surligner les erreurs de syntaxe


  // - les erreurs de logique
    // Une valeur erronée dans une variable
      let ageDeLaMajorite = 19

      if (ageDeLaMajorite <= 18) {
        "Vous n'êtes pas majeur"
      }

    // mélange de condition dans les instructions if
      if (age <= 25 && age >= 50) {
        // Fais cela
      }

    // ordre dans lequel on ecrit nos ligne de code 
    

    //On simule avoir 22 ans donc être majeur
    // const monAge = 22;

    // if(monAge > 18) {
    //     console.log("vous êtes majeur");
    // }else{
    //     console.log("vous êtes mineur");
    // }
    

  // - les erreurs d'éxécution
    // Une page qui n'existe
      // Si jamais cette erreur apparait, comment je vais la traiter
      try {
        // Le code susceptibile de générer une erreur
        // Connexion au site
      } catch (error) {
        // On chope l'erreur
      }

// ------------ 08 Les fonctions ------------ //
// ------------------------------------------ //

// Une fonction est un bloc de code auquel on attribu un nom. Quand vous appelez cette fonction, vous exécutez le code qu'elle contient.

// Exemple
  // Déclaration

  // Exécution


    // Exercice 
    // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-8-les-fonctions


// ------------ 08 Les méthodes d'instances et les proriétés ------------ //
// ---------------------------------------------------------------------- //

// Les méthodes d'instances

    // Exercice
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-8-les-fonctions