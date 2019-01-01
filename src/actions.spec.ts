import { isPureFormsAction } from './actions';

describe(isPureFormsAction.name, () => {
  it('should return true if type is pure-forms/', () => {
    expect(isPureFormsAction({ type: 'pure-forms/' })).toBe(true);
  });

  it('should return true if type startsWith pure-forms/', () => {
    expect(isPureFormsAction({ type: 'pure-forms/test' })).toBe(true);
  });

  it('should return false if type does not have pure-forms/', () => {
    expect(isPureFormsAction({ type: 'some-type' })).toBe(false);
  });

  it('should return false if type is missing', () => {
    expect(isPureFormsAction({} as any)).toBe(false);
  });
});
