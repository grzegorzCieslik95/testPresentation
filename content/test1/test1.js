function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

const actions = {
    mult,
    sum,
};

function results(a, b, operations) {
    return operations.reduce((acc, operation) => {
        acc[operation] = actions[operation](a, b);

        return acc;
    }, {});
}

module.exports = {
    sum,
    results
};
