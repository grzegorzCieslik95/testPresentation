class Test {

    constructor(params) {
        this.init(params);
    }

    init(params) {
        this.test = params.test;
    }

    run() {
        return this.test;
    }
}

module.exports = {Test};
