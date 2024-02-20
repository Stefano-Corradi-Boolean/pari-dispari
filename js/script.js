
const pariDispari = 'pari'//prompt('Scrivi "pari" o  "dispari"') // prompt
const numGiocatore = 3//parseInt(prompt('Gioca un numero fra 1 e 5')); // prompt
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