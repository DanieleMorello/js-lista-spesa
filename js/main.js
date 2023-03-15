/* 
  Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
  gli elementi della lista individualmente con un ciclo while.
*/

// Definizione dell'array con i prodotti della lista della spesa
const shoppingList = [
  'Pasta',
  'pane', 
  'patatine', 
  'burro', 
  'uova'
] 

// Seleziono l'elemento <ul> in cui inserire gli elementi della lista
const ul = document.querySelector('ul') 

// Inizializzo una variabile 'i' a 0
let i = 0; 

// Ciclo 'while' che continua finché l'indice 'i' è minore della lunghezza dell'array 'shoppingList'
while (i < shoppingList.length) { 
  // Crea un nuovo elemento <li>
  const li = document.createElement('li')
  
  // Imposto il testo dell'elemento <li> corrente con l'elemento dell'array 'shoppingList'
  li.textContent = shoppingList[i]

  // Aggiungo l'elemento <li> alla lista <ul>
  ul.appendChild(li) 

  /* Incremento l'indice 'i' */
  i++ 
}