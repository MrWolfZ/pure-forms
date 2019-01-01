import {
  addArrayControl,
  addGroupControl,
  box,
  compose,
  createFormArrayState,
  createFormControlState,
  createFormGroupState,
  disable,
  enable,
  focus,
  formArrayReducer,
  formControlReducer,
  formGroupReducer,
  formStateReducer,
  isArrayState,
  isBoxed,
  isGroupState,
  markAsDirty,
  markAsPristine,
  markAsSubmitted,
  markAsTouched,
  markAsUnsubmitted,
  markAsUntouched,
  removeArrayControl,
  removeGroupControl,
  reset,
  setErrors,
  setUserDefinedProperty,
  setValue,
  unbox,
  unfocus,
  updateArray,
  updateGroup,
  updateRecursive,
  validate,
  ValueConverters,
} from './pure-forms';

describe('pure-forms', () => {
  it(`should export ${compose.name}`, () => expect(compose).toBeDefined());
  it(`should export ${isArrayState.name}`, () => expect(isArrayState).toBeDefined());
  it(`should export ${isGroupState.name}`, () => expect(isGroupState).toBeDefined());
  it(`should export ${createFormControlState.name}`, () => expect(createFormControlState).toBeDefined());
  it(`should export ${createFormGroupState.name}`, () => expect(createFormGroupState).toBeDefined());
  it(`should export ${createFormArrayState.name}`, () => expect(createFormArrayState).toBeDefined());
  it(`should export ${formControlReducer.name}`, () => expect(formControlReducer).toBeDefined());
  it(`should export ${formGroupReducer.name}`, () => expect(formGroupReducer).toBeDefined());
  it(`should export ${formArrayReducer.name}`, () => expect(formArrayReducer).toBeDefined());
  it(`should export ${formStateReducer.name}`, () => expect(formStateReducer).toBeDefined());
  it(`should export ${addArrayControl.name}`, () => expect(addArrayControl).toBeDefined());
  it(`should export ${addGroupControl.name}`, () => expect(addGroupControl).toBeDefined());
  it(`should export ${disable.name}`, () => expect(disable).toBeDefined());
  it(`should export ${enable.name}`, () => expect(enable).toBeDefined());
  it(`should export ${focus.name}`, () => expect(focus).toBeDefined());
  it(`should export ${markAsDirty.name}`, () => expect(markAsDirty).toBeDefined());
  it(`should export ${markAsPristine.name}`, () => expect(markAsPristine).toBeDefined());
  it(`should export ${markAsSubmitted.name}`, () => expect(markAsSubmitted).toBeDefined());
  it(`should export ${markAsTouched.name}`, () => expect(markAsTouched).toBeDefined());
  it(`should export ${markAsUnsubmitted.name}`, () => expect(markAsUnsubmitted).toBeDefined());
  it(`should export ${markAsUntouched.name}`, () => expect(markAsUntouched).toBeDefined());
  it(`should export ${removeArrayControl.name}`, () => expect(removeArrayControl).toBeDefined());
  it(`should export ${removeGroupControl.name}`, () => expect(removeGroupControl).toBeDefined());
  it(`should export ${reset.name}`, () => expect(reset).toBeDefined());
  it(`should export ${setErrors.name}`, () => expect(setErrors).toBeDefined());
  it(`should export ${setUserDefinedProperty.name}`, () => expect(setUserDefinedProperty).toBeDefined());
  it(`should export ${setValue.name}`, () => expect(setValue).toBeDefined());
  it(`should export ${unfocus.name}`, () => expect(unfocus).toBeDefined());
  it(`should export ${updateArray.name}`, () => expect(updateArray).toBeDefined());
  it(`should export ${updateGroup.name}`, () => expect(updateGroup).toBeDefined());
  it(`should export ${updateRecursive.name}`, () => expect(updateRecursive).toBeDefined());
  it(`should export ${validate.name}`, () => expect(validate).toBeDefined());
  it(`should export ValueConverters`, () => expect(ValueConverters).toBeDefined());
  it(`should export ${box.name}`, () => expect(box).toBeDefined());
  it(`should export ${unbox.name}`, () => expect(unbox).toBeDefined());
  it(`should export ${isBoxed.name}`, () => expect(isBoxed).toBeDefined());
});
