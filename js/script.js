// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall’utente
// Aggiungiamo una piccola animazione al click su “Crea” e “Annulla”, se clicchiamo su annulla dobbiamo ripulire il form.

// VARIABILI, INPUT USER
var euro = 0.21;
var costoViaggio;
var km = parseInt(document.getElementById('testokm'));
var eta = parseInt(document.getElementById('eta'));

//PREZZO DEL BIGLIETTO A SECONDA DEI KM
costoViaggio = euro * km;
console.log(costoViaggio, "costodelbiglietto");

// SCONTO A SECONDA DELL'ETA DEL VIAGGIATORE
var costoViaggioMinori = (costoViaggio - (costoViaggio * 0.2)).toFixed(2);
var costoViaggioAnziani = (costoViaggio - (costoViaggio * 0.4)).toFixed(2);
console.log(costoViaggioMinori, costoViaggioAnziani);
var output = document.getElementById('biglietto')
// a seconda dell'età verrà visualizzato un costo biglietto
if (eta <= 18) {
  output.innerHTML = costoViaggioMinori + "€"
} else if (eta >= 65) {
  output.innerHTML = costoViaggioAnziani + "€"
} else {
  output.innerHTML = costoViaggio + "€"
}
// PREZZO TOTALE DEL VIAGGIO, OUTPUT


// BOTTONE CHE GENERA BIGLIETTO
var bottone = document.getElementById('bottone');

bottone.addEventListener('click',
 function(){
  (output.innerHTML).value;
});
