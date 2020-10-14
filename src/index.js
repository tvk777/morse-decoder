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

const decodeLetter = letter => {
    let morseLetter = letter
    .replace(/11/g, '-')
    .replace(/10/g, '.')
    .replace(/0/g, '');
    const key = Object.keys(MORSE_TABLE).find(item => item == morseLetter);
    return MORSE_TABLE[key];
}

function decode(expr) {
    let decoded = '';
    let decodedArray = [];
    const words = expr.split('**********');
    const wordsByLetters = words.map(word => word.match(/.{1,10}/g));

    wordsByLetters.forEach((word, index) => {
        decoded += word.reduce((str,letter) => 
        { console.log(str, decodeLetter(letter));
          return str + decodeLetter(letter)
          }, '');
        if(index<wordsByLetters.length-1) decoded +=' '
  
    });

    return decoded;
}

module.exports = {
    decode
}