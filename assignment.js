function add(params) {
    // Check if params is not a string
    if (typeof params !== 'string') {
        return false;
    }

    let commaSepratorString = ',';
    let nums = params;

    // If params starts with '//', assume custom delimiter
    if (params.startsWith('//')) {
        const parts = params.split('\n');
        // Get custom delimiter from the first line after '//'
        commaSepratorString = parts[0][2];
        // Assign the numbers part to nums
        nums = parts[1];
    }

    // If nums is empty return 0
    if (nums === '') {
        return 0;
    }

    // Split the numbers string into an array using custom delimiter or comma or newline
    const numArray = nums.split(new RegExp(`[${commaSepratorString}\n]`));

    // Filter out negative numbers
    const negatives = numArray.filter(num => parseInt(num, 10) < 0);

    // Filter out none numeric values
    const nonNumberValues = numArray.filter(num => isNaN(parseInt(num, 10)));

    // If all values are non-numeric return false
    if (nonNumberValues.length === numArray.length) {
        return false;
    }

    // If there are negative numbers, throw an error
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }

    // Return the sum of the numbers given as input
    return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = add;
