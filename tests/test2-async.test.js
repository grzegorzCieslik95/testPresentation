/* global jest */

const async = require('../content/test2/asyncFkc');
const asyncFkcSpy = jest.spyOn(async, 'asyncFkc');

const { test2 } = require('../content/test2/index');

describe('test2', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('syncFkc with jest.fn()', async () => {
        asyncFkcSpy.mockImplementationOnce(() => Promise.resolve('Success'))
            .mockImplementationOnce(() => Promise.reject(new Error('Fail')));

        expect(await test2()).toBe('Success');
        await expect(test2()).rejects.toThrow(new Error('Fail'));
    });
});
