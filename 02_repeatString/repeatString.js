const repeatString = function(str, count) {
    if (count < 0 || typeof count !== "number") return "ERROR"; 
    retval = "";
    for (let i = 0; i < count; i++) {
        retval += str;
    }

    return retval;
};

// Do not edit below this line
module.exports = repeatString;
