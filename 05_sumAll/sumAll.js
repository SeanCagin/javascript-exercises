const sumAll = function(lower, upper) {
    if (typeof lower !== "number" || typeof upper !== "number" || 
        isNaN(lower) || isNaN(upper) || 
        lower < 0 || upper < 0) {
            return "ERROR";
        }
        
    if (lower > upper) {
        [lower, upper] = [upper, lower];
    }
    
    retval = 0;
    for (let i = lower; i <= upper; i++) {
        retval += i;
    }
    
    return retval;
};

// Do not edit below this line
module.exports = sumAll;
