function add(params) {
    let commaSepratorString = ',';
    let nums = params;

    if (nums === '') {
        return 0;
    }

    const numArray = nums.split(new RegExp(`[${commaSepratorString}\n]`));
    const negatives = numArray.filter(num => parseInt(num, 10) < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }

    return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}


module.exports = add;