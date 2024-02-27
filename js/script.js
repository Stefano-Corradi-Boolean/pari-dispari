
let pariDispari;
let numGiocatore;

let validPariDispari = false;
let validNumber = false;

// fino a quando non è valido l'iserimento di pari/dispari ripropongo il prompt
while (!validPariDispari) {
  pariDispari = prompt('Scrivi "pari" oppure "dispari"')
  // verifico che la stringa inserita sia 'pari' o 'dispari'
  if(pariDispari.toLowerCase() === 'pari' || pariDispari.toLowerCase() === 'dispari'){
    // se la stringa è valita interrompo il ciclo quindi non chiedo un altrpo inserimento
    validPariDispari = true;
  }else{
    alert('Attenzione! Devi scrivere la parola "pari" o "dispari"')
  }
}

while(!validNumber){
  numGiocatore = parseInt(prompt('Scrivi un numero da 1 a 5'));
  if(isNaN(numGiocatore) === false){
    if(numGiocatore > 0 && numGiocatore <=5){
      validNumber = true;
    }else{
      alert('Attenzione! hai inserito un numero sbagliato')
    }
  }else{
    alert('Attenzione! hai inserito una stringa e non un numero')
  }
}




const numPc = Math.ceil(Math.random() * 5)
console.log(numPc)
const somma = numPc + numGiocatore;
console.log(somma)

let risultato, messaggio;

// SOLUZIONE CON 2 IF
// if(somma % 2 === 0){
//   risultato = 'pari'
// }else{
//   risultato = 'dispari';
// }

// if(risultato === pariDispari){
//   messaggio = 'Vince il giocatore'
// }else{
//   messaggio = 'Vince il pc'
// }

// SOLUZIONE CON AND (&&)
// if(somma % 2 === 0 && pariDispari === 'pari'){
//   messaggio = 'Vince il giocatore'
// } else if(somma % 2 !== 0 && pariDispari === 'dispari'){
//   messaggio = 'Vince il giocatore'
// }else{
//   messaggio = 'Vince il pc'
// }

// SOLUZIONE CON AND (&&) e OR (||)
if((somma % 2 === 0 && pariDispari === 'pari') || (somma % 2 !== 0 && pariDispari === 'dispari')){
  messaggio = 'Vince il giocatore'
}else{
  messaggio = 'Vince il pc'
}

document.getElementById('output').innerHTML = `
Il giocatore ha giocato ${pariDispari} con numero ${numGiocatore} <br>
Il pc ha giocato ${numPc}  <br>
${messaggio}
`