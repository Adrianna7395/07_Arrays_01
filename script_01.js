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
// let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
// for (let i = 0; i < arr.length; i++) {
// output(arr[i]);
// }


// Überlegung - Transponierung

// einer Variablen kann Ihr eigener Wert zugewiesen werden. Solange die Variable existiert, bleibt dieser erhalten.
// hier Aufsummierung


// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1; // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 0 + 1
// output("inhalt von a: " + a);



// besser mit FOR-Schleife
// let a = 0; // Anfangswert
// for (let i = 0; i <= 10; i++) 
// {
//     output("in der loop: " + a);
//     a = a + 1;
// }
// output("in der loop: " + a);

// 1 a

// let str = "";
// let gap = " ";
// let addStr = "Test";
// for (let i = 0; i <= 5; i++) 
// {
//     // output("in der loop: " + str);
//     // // a = a + 1;       //Numerik
//     str = str + "Test"  + gap    //Text
// }
// output("nach der loop: " + str);


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

//Funktionalität mit Array 2
// Transponierung: untereinander --> nebeneinander

output(getSentenceArr2(["Ich","bin","Maxine","Mütze"]));
output(getSentenceArr2(["Ich","bin","Nadine","Kapütze"]));
output(getSentenceArr2([]));
function getSentenceArr2(arr) {         

    const gap = " ";
    const punct = ".";
    let str = "";

    if (arr.length == 0) {
        return "xxx"
    }




for (let i = 0; i < arr.length; i++) {

// wenn ich noch nicht das letzte element --gap
//wenn ich das letzte element habe --punct
// a = a + 1 || a += 1

    if (i != arr.length -1) {   //punkt ist auf Platz -1 von hinten
        str += arr[i] + gap;
    } else {
        str += arr[i] + punct;
    }


}
return str;
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


