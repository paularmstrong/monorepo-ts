import { run } from '../';

describe('run', () => {
  test('returns the result from package a', () => {
    expect(run()).toEqual('result');
  });
});
