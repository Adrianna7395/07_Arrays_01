"use strict";

/* Die Satzbau-Maschine | Arrays */

// Funktionalität mit Einzelparametern
// "Ich bin Max Mütze"


output(getSentence("Ich","bin","Max","Mütze"));
output(getSentence("Ich","bin","Maxine","Mütze"));
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

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


