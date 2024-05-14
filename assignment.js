function add(params) {

    if (typeof params !== 'string') {
        return false
    }

    let commaSepratorString = ',';
    let nums = params;

    if (params.startsWith('//')) {
        const parts = params.split('\n');
        commaSepratorString = parts[0][2];
        nums = parts[1];
    }

    if (nums === '') {
        return 0;
    }

    const numArray = nums.split(new RegExp(`[${commaSepratorString}\n]`));
    const negatives = numArray.filter(num => parseInt(num, 10) < 0);

    const nonNumberValues = numArray.filter(num => isNaN(parseInt(num, 10)));

    if (nonNumberValues.length === numArray.length) {
        return false
    }

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }

    return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = add;