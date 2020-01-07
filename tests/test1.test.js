/* global jest */
const { sum, results } = require('../content/test1/test1');

describe('test', () => {
    it('test', () => {
        expect(sum(2, 1)).toBe(3);
    });

    it('test2', () => {
        expect(results(2, 1, ['sum'])).toStrictEqual({sum: 3});
    });
});
