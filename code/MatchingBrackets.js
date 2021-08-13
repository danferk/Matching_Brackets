
let isMatching = (str) => {
    
    return !str.split('').reduce((uptoPrevChar, thisChar) => {
        if(thisChar === '(' || thisChar === '{' || thisChar === '[' ) {
            return ++uptoPrevChar;
        } else if (thisChar === ')' || thisChar === '}' || thisChar === ']') {
            return --uptoPrevChar;
        }

        return uptoPrevChar
    }, 0);
}

exports.isMatching = isMatching;