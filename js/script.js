// L'utente decide il livello di difficolta
let userDiffulty = parseInt(prompt("decidi la difficolta 1 2 3"));

// creo le variabili
let maxNumb;
const guessNumber = 5;

// imposto il livello di difficoltà
switch (userDiffulty) {
  
  case 1:
    maxNumb = 100;  
    break;
  
  case 2:
    maxNumb = 500;  
    break;
  
  default:
    maxNumb = 1000;
    break;
}

// aspetto che l'utente sia pronto per far iniziare il gioco
alert("clicca ok quando sei pronto");

// genero l'arrey di bombe
const arrayRandom = randomArrayGeneretor(1,maxNumb,guessNumber);
console.log(arrayRandom);
alert(arrayRandom);

// richiamo la funzione dopo 30s e faccio iniziare il gioco
const clock = setTimeout(AskNumber,30000);

function AskNumber(){

  // creo l'arrey delle risposte corrette
  const rightAnswers = [];
  
  // chiedo all'utente guessNumber volte i numeri
  for (let i = 0; i < guessNumber; i++) {
    
    let userAsware = parseInt(prompt("insersci un numero"));
    
    // se sono corretti li inserisco nell'arrey
    if(arrayRandom.includes(userAsware) && !rightAnswers.includes(userAsware)){
      
      rightAnswers.push(userAsware);
    }
  }

  // printo all'utente il messaggio finale
  const userRightAnswersMessage = `hai indovinato un totale di ${rightAnswers.length} risposte ovvero ${rightAnswers}`;
  alert(userRightAnswersMessage);
}

// -----------------------------------
//              FUNCTION 
// -----------------------------------

// Genera numeri random tra un min e un max
function randomArrayGeneretor(minRange, maxRange, guessNumber) {
  
  // function variables
  const randomArrey = [];
  let randomPosition;

  // popolo randomArrey
  while(randomArrey.length < guessNumber){
    randomPosition = getRndInteger(minRange, maxRange)

    // controlla se quel numero è stato già inserito in bombsArrey
    if(!randomArrey.includes(randomPosition)){
      randomArrey.push(randomPosition)
    }
  }

  return randomArrey;
}

// Genera dei numeri rangom
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}