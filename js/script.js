//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65

//variabili

var prezzoKm=0.21
var prezzo

//prompt domande al passeggero
var chilometri=prompt("Quanti chilometri vuoi percorrere?")
var eta=prompt("Quanti anni hai?")

//prezzi biglietti
var subtotale=(prezzoKm*chilometri).toFixed(2)

console.log(subtotale)

if (eta<18){
    prezzo=(subtotale-((subtotale/100)*20)).toFixed(2)
} else if(eta>65) {
        prezzo=(subtotale-((subtotale/100)*40)).toFixed(2)
    } else {
        prezzo=subtotale
    }

console.log (prezzo)

document.getElementById("titolo").innerHTML="Grazie per aver compilato il form! <br>Il costo del tuo biglietto è: "+prezzo + " euro."