const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const decodeLetter = str => {
    for(let i; i < str.length; i++){
        if(str[i]==='0') {
            str.splice(0, 1);
        } else {
            return;
        }
    }
    return str;
}

function decode(expr) {
    let decoded = '';
    let decodedArray = [];
    const words = expr.split('**********');
    console.log(words);
    const wordsByLetters = words.map(word => word.match(/.{1,10}/g));
    wordsByLetters.forEach(word => {
        decodedArray.push(word.map(letter => decodeLetter(letter)))
    });
    console.log(decodedArray);
}

module.exports = {
    decode
}