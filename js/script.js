// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall’utente
// Aggiungiamo una piccola animazione al click su “Crea” e “Annulla”, se clicchiamo su annulla dobbiamo ripulire il form.


// BOTTONE CHE GENERA BIGLIETTO
var genera = document.getElementById('bottone');
genera.addEventListener('click',
 function(){
   document.getElementById('nascosto').style.display = "block";
   // variabili
   var euro = 0.21;
   var km = parseInt(document.getElementById('testokm').value);
   var eta = parseInt(document.getElementById('etapasseggero').value);
   var costoViaggio = euro * km;
   var passeggero = (document.getElementById('nome')).value;
   // SCONTO A SECONDA DELL'ETA DEL VIAGGIATORE
   var costoViaggioMinori = ((costoViaggio - (costoViaggio * 0.2)).toFixed(2));
   var costoViaggioAnziani = ((costoViaggio - (costoViaggio * 0.4)).toFixed(2));
   var output = document.getElementById('biglietto');
   // a seconda dell'età verrà visualizzato un costo biglietto
   if (eta <= 18) {
     output.innerHTML = costoViaggioMinori + "€"
   } else if (eta >= 65) {
     output.innerHTML = costoViaggioAnziani + "€"
   } else {
     output.innerHTML = costoViaggio + "€"
   }
   console.log(output);
   // stampo input ricevuto dall'utente per nome e cognome
   document.getElementById('name').innerHTML = passeggero;
   // output dati biglietto
   document.getElementById('codice').innerHTML = Math.floor(Math.random() * (100000 - 90000 + 1) + 90000 );
   document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 10) + 1 ;
});

// BOTTONE CHE RESETTA
var annulla = document.getElementById('cancella');
annulla.addEventListener('click',
 function () {
   document.getElementById('user').reset();
   document.getElementById('trip').reset();
   document.getElementById('age').reset();
 }
);
