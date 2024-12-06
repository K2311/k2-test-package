
function reverseString(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return input.split('').reverse().join('');
}

module.exports = reverseString;
