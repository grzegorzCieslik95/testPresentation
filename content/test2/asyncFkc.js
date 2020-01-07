function asyncFkc(params) {
    return new Promise((resolve, reject) => {
        if (params) {
            return resolve('Success');
        }
        return reject(new Error('Fail'));
    })
}

module.exports = {
    asyncFkc,
};
