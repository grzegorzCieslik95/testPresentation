/* global jest */

const syncFkc = require('../content/test2/syncFkc');
const addSpy = jest.spyOn(syncFkc, 'add');

const { test1 } = require('../content/test2/index');

describe('test2', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('syncFkc with jest.fn()', () => {
        addSpy.mockImplementationOnce(() => 5)
            .mockImplementationOnce(() => 15);

        expect(test1(2, 5)).toBe('Less');
        expect(test1(3, 6)).toBe('More');
        expect(addSpy).toHaveBeenNthCalledWith(1, 2, 5);
        expect(addSpy).toHaveBeenNthCalledWith(2, 3, 6);
    });
})
