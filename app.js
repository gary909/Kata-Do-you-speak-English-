function spEng(sentence) {
    let mySentence = sentence.toLowerCase();
    if (mySentence.includes("english")) {
        return true;
    } else {
        return false;
    }
}

console.log(spEng("english")); // true
console.log(spEng("egnlish")); // false
