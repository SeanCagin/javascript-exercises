const reverseString = function(str) {
    if (typeof str !== "string") return "ERROR";
    retval = "";
    let i = str.length - 1;
    while (i >= 0) {
        retval += str.charAt(i);
        i--;
    }
    return retval;
};

// Do not edit below this line
module.exports = reverseString;
