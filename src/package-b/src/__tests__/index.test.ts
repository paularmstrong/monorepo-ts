import * as PackageA from 'package-a';
import { usePackageA } from '../';

describe('usePackageA', () => {
  test('returns the result from package a', () => {
    const runSpy = jest.spyOn(PackageA, 'run').mockReturnValue('tacos');
    expect(usePackageA()).toEqual('tacos');
    expect(runSpy).toHaveBeenCalled();
  });
});
