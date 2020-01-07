/* global jest */

const mockClass = {
    constructor: jest.fn(),
    init: jest.fn(),
    run: jest.fn(),
};

jest.mock('../content/test2/class', () => {
    return {
        Test: class {
            constructor(...params) {
                return mockClass.constructor(...params);
            }

            init(...params) {
                return mockClass.init(params);
            }

            run(...params) {
                return mockClass.run(...params);
            }
        }
    }
});

const { test3 } = require('../content/test2/index');

describe('class', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('mock class - undefined', () => {
        mockClass.constructor.mockImplementationOnce(() => {
            return null;
        });

        const res = test3();
        expect(res).toBeUndefined();
    });

    it('mock class', () => {
        mockClass.run.mockImplementationOnce(() => {
            return 'testowanie';
        });

        const res = test3();
        expect(res).toBe('testowanie');
        const res2 = test3();
        expect(res2).toBeUndefined();

    })
});
