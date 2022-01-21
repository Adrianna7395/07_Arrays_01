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

output(getSentenceArr(["Ich","bin","Maxine","Mütze"]));
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


