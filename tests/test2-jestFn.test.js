/* global jest */

const mockSyncFkc = {
    add: jest.fn()
};

const syncFkc = require('../content/test2/syncFkc');
syncFkc.add = jest.fn()
    .mockImplementationOnce(() => 5)
    .mockImplementationOnce(() => 15);

const {test1} = require('../content/test2/index');

describe('test2', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('syncFkc with jest.fn()', () => {
        expect(test1(2, 5)).toBe('Less');
        expect(test1(3, 6)).toBe('More');
        expect(syncFkc.add).toHaveBeenNthCalledWith(1, 2, 5);
        expect(syncFkc.add).toHaveBeenNthCalledWith(2, 3, 6);
    });
});
