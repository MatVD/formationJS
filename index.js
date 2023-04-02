// ---------------------------------------------- //
//             Formation javascript               //
// ---------------------------------------------- //


// ------ 01 Les variables ------ //
// ------------------------------ //
    // Tout comme vous mettez le nom d'un carton en fonction de ce qui se trouvent à l'intérieur, de même, le nom d'une varibale doit indiquer ce qui se trouve à l'intérieur

    // Exercice
        // Créer deux variables : 
            // "numberOfSeasons" et lui affecter la valeur 6
            // "numberOfEpisodes" et assignez lui la valeur 12
    
// --- Modifier la valeur d'une variable

// --- Les Opérateurs

    // Exercice
        // Créer deux nouvelles variables
            // "episodeTime" avec pour valeur 45
            // "commercialTime" avec 5

        // À l'aide des deux variables, ainsi que du nombre d'épisodes et du nombre de saisons, 
        // créez une variable nommée "totalShowTime" qui contient le temps de visionnage total de cette série


// --- Mutabilité des variables


// --- Les constantes

    // Exercice 
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-1-les-variables

      // Voici un composant qui déconstruit une journée en heures, minutes et secondes.

      // Créer les trois constantes qui donnent le nombre d'heures par jour, le nombre de minutes par heure, et le nombre de secondes par minute.
    
      // Jouez un peu avec ces valeurs, et vous verrez vite l'importance d'avoir les bonnes valeurs constantes dans une application !
    
      // Dans l'espace alloué, créez les trois constantes suivantes :
        // hoursPerDay: heures par jour
        // minutesPerHour: minutes par heure
        // secondsPerMinute: secondes par minute


  // Résumé avec Kahoots

// ------ 02 Les Types de données ------ //
// ------------------------------------- //

// Le type d'une variable ou d'une constante est tout simplement le genre des données qu'elle enregistre. En JavaScript, il y a trois types primitifs principaux :

// number (nombre) ;
// string (chaîne de caractères) ;
// boolean (valeur logique).

// Les types primitifs sont les briques de base de chaque structure de données en JavaScript. Peu importe la complexité finale de votre application, à sa base se trouveront ces trois types primitifs.

// Number

// Boolean

// String

    // Exercice
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-2-les-types

      // Maintenant que vous avez terminé le composant pour la série, il est temps de travailler sur le composant pour les épisodes individuels.

      // Ce composant affichera le titre de l'épisode, sa durée en minutes, et si l'utilisateur a déjà regardé l'épisode ou non.

      // Créez une variable nommée  episodeTitle  qui contient une chaîne de caractères correspondant au titre de votre épisode (employez votre créativité !).

      // Créez une variable appelée  episodeDuration  qui contient un nombre correspondant à la durée de votre épisode en minutes.

      // Enfin, créez une variable booléenne nommée   hasBeenWatched  qui indique si l'utilisateur a déjà regardé l'épisode ou non.

      // Vérifiez si le composant fonctionne correctement. N'hésitez pas à modifier vos valeurs pour vérifier que le composant réagit comme prévu. N'oubliez pas, votre code ira entre les commentaires "===" sur l'exercice.

  
    // Résumé avec Kahoots


// ----------- 03 Les Objets ------------ //
// -------------------------------------- //

  // Mais qu'est-ce que cela signifie vraiment ? Commençons par nous intéresser à quelques objets du monde réel, comme les stylos, les livres, les smartphones, les ordinateurs, etc.

  // Vous connaissez tous des types de stylos – à bille, feutre, plume, etc. Ils font tous partie du type d'objet : stylos. Vous pouvez écrire avec, ils utilisent de l'encre et peuvent se tenir à une main.

  // Ce serait identique pour différents types de livres. Ils possèdents tous : des pages, une couverture, un titre, etc.

  // Les objets possèdent tous des caractéristiques propre à leur type

  // En programmation, on appelle un type d'objet => une classe. Pour créer une classe, vous pouvez choisir le nom de votre choix. Vous le verrez, les classes permettent aussi de regrouper beaucoup de détails ; c'est pourquoi elles s'appellent aussi des types complexes.


  // Comment créer un objet ?


    // Exercice
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-3-les-objets

      // Dans un exercice précédent, vous avez créé trois variables pour décrire l'épisode d'une série. On dirait la situation parfaite pour créer un seul objet  episode  : créons-le maintenant !
      
      // Créez un objet (Object, en anglais) et stockez-le dans une variable appelée   episode  . Utilisez bien des accolades  {}  et mettez les trois attributs suivants :
      
        // title  : le titre de l'épisode ;
        // duration  : la durée de l'épisode ;
        // hasBeenWatched  : si l'épisode a été visionné ou non.
      
      // Associez des valeurs appropriées à chaque attribut.
      
      // N'oubliez pas d'utiliser des paires clé-valeur séparées par des virgules. Votre code ira entre les commentaires "===" sur l'exercice.
      
      // Si vous n'y arrivez pas du premier coup, ne vous découragez pas, poursuivez vos efforts ! L'apprentissage de la programmation se fait en pratiquant et en apprenant de ses erreurs. 😎


  // Comment accéder aux données d'un objet ?

    // Exercice
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-3-les-objets

      // Voici une occasion de mettre en pratique la dot notation

      // Dans l’exercice précédent, quand vous avez construit l'Object episode  , le code de votre collègue en a extrait les données pour les afficher dans son composant. Maintenant, c'est à vous d'extraire les informations pour les fournir au composant avec la notation  .  ou "dot".

      // Créez les trois variables suivantes :
        // episodeTitle  : le titre de l'épisode (string) ;
        // episodeDuration  : la durée de l'épisode (number) ;
        // episodeHasBeenWatched  : si l'épisode a été regardé ou non (boolean).

      // Assignez-y les valeurs correspondantes de l'objet  episode  en utilisant la notation "dot".


// Les classes 
  // La construction d'un objet à la main, par la notation à accolades vue précédemment, convient bien à des objets simples et uniques. Mais vous aurez souvent besoin de beaucoup d'objets du même type. C'est là que les classes sont utiles

  // Une classe est un modèle pour un objet dans le code. Elle permet de construire plusieurs objets du même type (appelés instances de la même classe) plus facilement, rapidement et en toute fiabilité

// Comment construire une classe ?

    // Exerice
      // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-4-les-classes

      // Maintenant que vous savez créer des classes, il est temps d'en profiter pour notre composant épisode. Cette fois-ci, il y a trois composants épisodes, donc la manière logique de procéder serait de créer une classe   Episode  , et puis en créer trois instances – une pour chaque épisode.

      // Créez une classe  Episode  avec le mot clé  class  .
      
      // Créez un constructor pour votre classe  Episode  qui devra accepter trois arguments :
        // title  : le titre de l'épisode (string) ;
        // duration  : la durée de l'épisode (number) ;
        // hasBeenWatched  : si l'épisode a été regardé ou non (boolean).
      
      // En utilisant le mot clé   this  , assignez les propriétés  title  ,  duration  et  hasBeenWatched  via un constructor .
      
      // Avec le mot clé   new  , créez trois instances de la classe  Episode  :
        // firstEpisode  ;
        // secondEpisode  ;
        // thirdEpisode  .
      
      // N'oubliez pas de passer des arguments appropriés à chaque instance.


  // Résumé avec Kahoots


// ----------- 04 Les tableaux ------------ //
// ---------------------------------------- //
  // Il existe un autre type en JavaScript : le tableau (array).

  // Info : l'indice d'un tableau démarre à zéro

    // Exercice
    // https://replit.com/team/DTBMI-javascript/Formation-JS-Exercice-5-les-tableaux

// 05 - Les variables

// 06 - Les variables

