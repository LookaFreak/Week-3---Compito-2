/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/* I datatype in Javascript sono i tipi di dati o formati che possono assegnare a una variabile nel linguaggio di Javascript
e sono di cinque tipologie differenti:
1. Number: è una variabile che può contenere qualsiasi numero
2. String: è una sequenza di caratteri delimitati da "" o ''
3. Boolean: è un'entità logica che risponde alla domanda con vero o falso
4. Undefined: rappresenta un valore che non esiste ancora
5. Null: rappresenta un valore vuoto
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Si può pensarli come gruppi di variabili che descrivono la stessa entità
immaginiamo un database di una scuola dove un contenitore contiene tutte le informazioni dei vari studenti
ad esempio nome cognome classe anni  */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let plus = 12 + 20;
console.log(plus);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

 let x = 12; 

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Alessandro";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

4 - x;
console.log(x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = john;
let name2 = John;
console.log(name1 === name2);


/* ESERCIZIO 8
 Crea un oggetto in Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby)
*/

 let person = {
name: "Alessandro",
surname: "Camarda",
age: 28,
hobby: "Weed and Pussy"
};

console.log(person);