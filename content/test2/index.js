const {add} = require('./syncFkc');
const {asyncFkc} = require('./asyncFkc');
const {Test} = require('./class');

function test1(a, b) {
    const result = add(a, b);
    if (result > 10) {
        return 'More';
    }
    return 'Less';
}

async function test2() {
    return asyncFkc();
}

function test3() {
    const m = new Test('test');
    return m.run();
}

module.exports = {
    test1,
    test2,
    test3,
};
