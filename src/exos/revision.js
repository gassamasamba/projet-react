/**
 * Exo 1
 *
 * Avec une fonction classique, créez une fonction
 * bonjour qui accépte un paramètre "name" et retourne
 * la chaine de character : `Bonjour ${name}, comment allez-vous ?`
 *
 * Exporter la fonction et importer puis tester
 * dans le fichier `index.js`
 */

export function bonjour(nom){
  return ` Bonjour ${nom} comment vous allez`
} 

//  * Exo 2
//  *
//  * Avec une fonction fléché "bonjour2" réalisez le
//  * même exercice que plus haut
//  *
//  * Exporter la fonction et importer puis tester
//  * dans le fichier `index.js`
//  */
export let bonjour2 = (nom)=> {
  return ` Bonjour ${nom} comment vous allez`
}

/**
 * Exo 3
 *
 * Avec la variable suivante, créez une fonction
 * displayStudentName qui retourne la chaine de characters
 * suivante :
 *
 * "Élève john doe, 24 ans"
 *
 * Exporter la fonction et importer puis tester
 * dans le fichier `index.js`
 */
export const student = {
  firstname: 'John',
  lastname: 'Doe',
  age: 24,
  notes: [12, 13, 18, 9, 8, 15],
}
export function displayStudentName() {
  return student.firstname  + ' ' + student.lastname + ' ' + student.age
}

/**
 * Exo 4
 *
 * Toujours avec les variable plus créez une fonction
 * "displayNotes" qui retourne la chaine de character
 * suivante :
 *
 * "12/20, 13/20, 18/20, 09/20, 08/20, 15/20"
 *
 * Vous pouvez vous aider des méthodes de tableaux
 * map et join (map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map,
 * join : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
 *
 * Exporter la fonction et importer puis tester
 * dans le fichier `index.js`
 */
export const displayNotes = (a) => {
   var chaineCaractere = a
   return chaineCaractere
}

/**
 * Exo 5
 *
 * Créez une fonction "calculateAverage" qui accépte
 * en paramètre un tableaux de notes et retourne
 * la moyenne de toutes les notes (addition de toute les notes divisé
 * par la nombre de note).
 *
 * Vous pouvez vous aider de la fonction `reduce` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
 *
 * Exporter la fonction et importer puis tester
 * dans le fichier `index.js`
 */
export  function calculateAverage(a) {
  var sum = 0
  var i = 0
  for(i=0; i<a.length; i++) {
    sum = sum + a[i]

  }
  return sum / a.length
  

}

/**
 * Exo 6
 *
 * Créez une fonction displayStudent qui accépte
 * un "student" en paramètre et retourne la chaine
 * de character suivante :
 *
 * Élève John Doe, 24 ans
 * notes : 12/20, 13/20, 18/20, 09/20, 08/20, 15/20
 * moyenne : 12,5/20
 */
export const eleve = {
  nom : 'john',
  prenom: 'doe',
  age : 24,
  notes : [12, 13, 18, 09, 08, 15],
  moyenne : function moye (a) {
    var sum = 0
    var i = 0
    for(i=0; i<a.length; i++) {
    sum = sum + a[i]

}
return sum / a.length

  }
}
export function displayStudent() {
  return eleve.nom + ' ' + eleve.prenom + ' ' + eleve.notes + ' ' + eleve.moyenne

  

}