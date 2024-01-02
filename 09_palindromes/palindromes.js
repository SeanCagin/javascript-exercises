function movePointer(string, pointer, direction) {
    let invalidChars = new Set(["!", "?", ",", ".", " ", "-"]);
    while(invalidChars.has(string.charAt(pointer))) {
        pointer += direction;
    }
    return pointer;
}

const palindromes = function (str) {
    str = str.toUpperCase();
    let front = 0;
    let back = str.length - 1;
    while (front < back) {
        front = movePointer(str, front, 1);
        back = movePointer(str, back, -1);
        if (str.charAt(front) !== str.charAt(back)) return false;
        front++;
        back--;
    }
    return true;
};

// Do not edit below this line
palindromes("A car, a man, a maraca.");
module.exports = palindromes;
