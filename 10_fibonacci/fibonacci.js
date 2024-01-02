const fibonacci = function(n) {
    n = +n;
    if (n < 1) return "OOPS";
    let first = 1;
    let second = 1;
    let i = 2;
    while (i < n) {
        first = first + second;
        second = second + first;
        i += 2;
    }
    return i == n ? second : first;
};

// Do not edit below this line
module.exports = fibonacci;
