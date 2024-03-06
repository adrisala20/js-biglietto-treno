/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 il prezzo del biglietto è definito in base ai km (0.21 € al km)
 va applicato uno sconto del 20% per i minorenni
 va applicato uno sconto del 40% per gli over 65.
 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) */

 // dichiario variabili

 let kilometri = parseInt(prompt ('Quanti kilometri vuoi fare?'));
 let anni = parseInt (prompt('quanti anni hai?'));
 let prezzoViaggio = 2.1 * kilometri;

 console.log (kilometri,anni,prezzoViaggio)

 let scontoMinorenni = anni < 18;
 let scontoAdulti = anni >= 65;
//controllo i valori inseriti
if((isNaN(kilometri) && isNaN(anni)) || (isNaN(kilometri) && !isNaN(anni)) || (!isNaN(kilometri) && isNaN(anni))) {
    console.log('valore errato'); 
} else {
    console.log('i kilometri inseriti sono' + $(kilometri), 'hai: '
    + $(annni), 'prezzo del viaggio: ' + $(prezzoViaggio));
}
    


