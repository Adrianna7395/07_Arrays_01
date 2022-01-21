"use strict";

/* Die Satzbau-Maschine | Arrays */


// Theorie: Array

// let arr; 
// // arr = new Array(); // Konstruktor
// arr = []; // Literal
// arr = [2,4,7,11];
// arr = [false,true,true];
// arr = ["Ich","bin","Maxine","Mütze"];

// output(arr);
// output(arr.length); // Anzahl der Elemente
// output(arr[arr.length -1]);     //Index (zeigt welche Position im Array)

// Theorie: Schleifen (for-schleife)
// For -Schleife als Wiederholungs-Struktur


// Inkrement (untere --> obere Grenze)
// for (let i = 10; i <= 20; i++) 
// {
//     output("index i: " + i);
    
// }

// Dekrement ( obere --> untere Grenze)
// for (let i = 10; i > 0; i--) 
// {
//     output("index i: " + i);
    
// }

// Inkrement (var. Schrittweite)
// for (let i = 0; i <= 100; i+=10) 
// {
//     output("index i: " + i);


// }

/* 02b. For-Schleife für Array-Index (Iteration)*/
let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
for (let i = 0; i < arr.length; i++) {
output(arr[i]);
}



// Funktionalität mit Einzelparametern
// "Ich bin Max Mütze"


// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","Maxine","Mütze"));

function getSentence(word1,word2,word3,word4) {         //word sind Parametern

            const gap = " ";
            const punct = ".";
            const str = word1 + gap + 
                        word2 + gap +
                        word3 + gap + 
                        word4 + 
                        punct;

    return str;

}


// Funktionalität mit Array 1
// word1, word2, wordN ist Semantische Struktur
// arr[0],arr[1],arr[n] ist Numerische Struktur
// Transformation semantisches in numerisches Problem

// output(getSentenceArr(["Ich","bin","Maxine","Mütze"]));
function getSentenceArr(arr) {         //word sind Parametern

    const gap = " ";
    const punct = ".";
    const str = arr[0] + gap + 
                arr[1] + gap +
                arr[2] + gap + 
                arr[3] + 
                punct;

return str;

}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


