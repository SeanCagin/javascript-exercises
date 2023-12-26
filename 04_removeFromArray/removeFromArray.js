const removeFromArray = function(arr, ...options) {
    let retval = [];
    let delItems = new Set(options);
    arr.forEach(element => {
        if (!(delItems.has(element))) {
            retval.push(element);
        }
    });
    return retval;

};


removeFromArray([2, 4], 2, 5);
// Do not edit below this line
module.exports = removeFromArray;
