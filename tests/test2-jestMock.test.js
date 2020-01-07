/* global jest */

const mockSyncFkc = {
    add: jest.fn()
};

jest.mock('../content/test2/syncFkc', () => {
    return mockSyncFkc;
});

const {test1} = require('../content/test2/index');

describe('test2', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('syncFkc with jest.fn()', () => {
        mockSyncFkc.add
            .mockImplementationOnce(() => 5)
            .mockImplementationOnce(() => 15);

        expect(test1(2, 5)).toBe('Less');
        expect(test1(3, 6)).toBe('More');
        expect(mockSyncFkc.add).toHaveBeenNthCalledWith(1, 2, 5);
        expect(mockSyncFkc.add).toHaveBeenNthCalledWith(2, 3, 6);
    });
});
