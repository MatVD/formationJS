// ---------------------------------------------- //
//             Formation javascript               //
// ---------------------------------------------- //


// ------ 01 Les variables ------ //
// ------------------------------ //
    // Tout comme vous mettez le nom d'un carton en fonction de ce qui se trouvent à l'intérieur, de même, le nom d'une varibale doit indiquer ce qui se trouve à l'intérieur

    let car = "bmw"

    car = "Seat"

    let quantityBookInStock = 500
    // camelCase

    // Exercice
        // Créer deux variables : 
            // "numberOfSeasons" et lui affecter la valeur 6
            // "numberOfEpisodes" et assignez lui la valeur 12

            // Correction
              let numberOfSeasons = 6;
              let numberOfEpisodes = 12

              console.log(numberOfSeasons)

    
// --- Modifier la valeur d'une variable
    quantityBookInStock = 499

// --- Les Opérateurs
    // +, -, *, /, %

    let nombre = 10 + 3
    console.log(nombre)

    let nombre2 = 2
    console.log(nombre + nombre2)

    let chaine = "ma chaine"
    console.log(chaine) // une concaténation

    // Exercice
        // Créer deux nouvelles variables
            // "episodeTime" avec pour valeur 45
            // "commercialTime" avec 5

        // À l'aide des deux variables, ainsi que du nombre d'épisodes et du nombre de saisons, 
        // créez une variable nommée "totalShowTime" qui contient le temps de visionnage total de cette série


// --- Mutabilité des variables
    let compteur = 0;
    compteur++;
    compteur = 10;



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
  let boolean = true
  let boolean2 = false

// String
  let chaine1 = "Je m'appelle Flo"
  let chaine2 = "j'ai 25 ans"
  console.log(chaine1 + ' ' + chaine2)

  const myName = 'Flo'

  // C , C++
  // 0 ou 1 
  // 001101011011 011 011001101 111000 111111001 => langage machine

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
  // let myBook = {
  //   title: 'Le titre du livre',
  //   author: 'Mat VD',
  //   numberOfPages: 250,
  //   readed: true 
  // }

  

    // Exercice
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-3-les-objets


  // Comment accéder aux données d'un objet ?

    let myBook = {
      title: 'Le titre du livre',
      author: 'Mat VD',
      numberOfPages: 250,
      readed: true 
    }

    console.log(myBook.title) // dot notation

    // Exercice
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-3-les-objets


// Les classes 
  // La construction d'un objet à la main, par la notation à accolades vue précédemment, convient bien à des objets simples et uniques. Mais vous aurez souvent besoin de beaucoup d'objets du même type. C'est là que les classes sont utiles

  // Une classe est un modèle pour un objet dans le code. Elle permet de construire plusieurs objets du même type (appelés instances de la même classe) plus facilement, rapidement et en toute fiabilité

// Comment construire une classe ?
    class MyBook { 
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
    //                0         1        2        3     
    let guests = ['Franck', 'Marvin', 'John', 'Isabelle'] // => Collection

  // Info : l'indice d'un tableau démarre à zéro

    // Exercice
    // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-5-les-tableaux

  
  // Travailler sur les tableaux

    // Length
      console.log(guests.length)

    // Push
      console.log(guests)
      guests.push('Mat') // => ajoute un élément en fin de tableau
      
    // Unshift
      guests.unshift('Greg') // => ajoute un élément en début de tableau
      console.log(guests)

    // Pop
      guests.pop()
      console.log(guests)

      console.log(guests.includes('Flo'))


    // Exercice

  
  // Résumé avec Kahoots


// ----------- 04 Les conditions ------------ //
// ------------------------------------------ //

  // L'instruction   if  /  else  est une des plus universelles en programmation. Qu'il s'agisse de réagir à une saisie de l'utilisateur, aux résultats de calculs ou de simplement vérifier si quelqu'un est connecté ou non, vous aurez souvent à utiliser des instructions if/else.

  // IF (SI) l'utilisateur est connecté, ouvrir sa page d'accueil

  // ELSE (SINON) revenir à la page de connexion

  // C'est ce qu'on appelle une instruction conditionnelle, parce qu'elle vérifie si certaines conditions sont réunies, et réagit en conséquence.
  let boolean3 = true;

  // if (boolean3) {
  //   alert('La condition est remplie')
  // } else {
  //   alert('La condition n\'est pas remplie')
  // }

  // let userLoggedIn = true
  // let firstName = "Paul"

  // // expressions de comparaisons
  // // < , <= , == , >= , > , !=
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

    let age = 18

    // if (age >= 18) {
    //   alert("Vous êtes autorisé à conduire")
    // } else {
    //   alert("Dommage, il va falloir attendre")
    // }
    
  // Les conditions multiples

    // Opérateurs logiques
    // ET => && 
    // OU => ||
    // ! => NOT

  let haveAcar = true
  let haveFuel = false
  let haveKeys = true

  if (age >= 18 && haveAcar && haveFuel && haveKeys) {
    alert("Vous êtes autorisé à conduire")
  } else {
    alert("Dommage, il va falloir attendre")
  }

    // Exercice 
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-6-les-conditions

  // Le scope des variables

  // L'instruction switch

  // Résumé kahoots

// 06 - Les variables

