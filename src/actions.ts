import { FormControlId, KeyValue, ValidationErrors } from './state';

export interface Action {
  type: string;
}

// NOTE: the explicit type declaration for the `TYPE` properties is required
// for the output declarations to properly use the literal string type instead
// of just `string`

export class SetValueAction<TValue> implements Action {
  static readonly TYPE: 'pure-forms/SET_VALUE' = 'pure-forms/SET_VALUE';
  readonly type = SetValueAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
    public readonly value: TValue,
  ) { }
}

export class SetErrorsAction implements Action {
  static readonly TYPE: 'pure-forms/SET_ERRORS' = 'pure-forms/SET_ERRORS';
  readonly type = SetErrorsAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
    public readonly errors: ValidationErrors,
  ) { }
}

export class SetAsyncErrorAction implements Action {
  static readonly TYPE: 'pure-forms/SET_ASYNC_ERROR' = 'pure-forms/SET_ASYNC_ERROR';
  readonly type = SetAsyncErrorAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
    public readonly name: string,
    public readonly value: any,
  ) { }
}

export class ClearAsyncErrorAction implements Action {
  static readonly TYPE: 'pure-forms/CLEAR_ASYNC_ERROR' = 'pure-forms/CLEAR_ASYNC_ERROR';
  readonly type = ClearAsyncErrorAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
    public readonly name: string,
  ) { }
}

export class StartAsyncValidationAction implements Action {
  static readonly TYPE: 'pure-forms/START_ASYNC_VALIDATION' = 'pure-forms/START_ASYNC_VALIDATION';
  readonly type = StartAsyncValidationAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
    public readonly name: string,
  ) { }
}

export class MarkAsDirtyAction implements Action {
  static readonly TYPE: 'pure-forms/MARK_AS_DIRTY' = 'pure-forms/MARK_AS_DIRTY';
  readonly type = MarkAsDirtyAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
  ) { }
}

export class MarkAsPristineAction implements Action {
  static readonly TYPE: 'pure-forms/MARK_AS_PRISTINE' = 'pure-forms/MARK_AS_PRISTINE';
  readonly type = MarkAsPristineAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
  ) { }
}

export class EnableAction implements Action {
  static readonly TYPE: 'pure-forms/ENABLE' = 'pure-forms/ENABLE';
  readonly type = EnableAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
  ) { }
}

export class DisableAction implements Action {
  static readonly TYPE: 'pure-forms/DISABLE' = 'pure-forms/DISABLE';
  readonly type = DisableAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
  ) { }
}

export class MarkAsTouchedAction implements Action {
  static readonly TYPE: 'pure-forms/MARK_AS_TOUCHED' = 'pure-forms/MARK_AS_TOUCHED';
  readonly type = MarkAsTouchedAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
  ) { }
}

export class MarkAsUntouchedAction implements Action {
  static readonly TYPE: 'pure-forms/MARK_AS_UNTOUCHED' = 'pure-forms/MARK_AS_UNTOUCHED';
  readonly type = MarkAsUntouchedAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
  ) { }
}

export class FocusAction implements Action {
  static readonly TYPE: 'pure-forms/FOCUS' = 'pure-forms/FOCUS';
  readonly type = FocusAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
  ) { }
}

export class UnfocusAction implements Action {
  static readonly TYPE: 'pure-forms/UNFOCUS' = 'pure-forms/UNFOCUS';
  readonly type = UnfocusAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
  ) { }
}

export class MarkAsSubmittedAction implements Action {
  static readonly TYPE: 'pure-forms/MARK_AS_SUBMITTED' = 'pure-forms/MARK_AS_SUBMITTED';
  readonly type = MarkAsSubmittedAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
  ) { }
}

export class MarkAsUnsubmittedAction implements Action {
  static readonly TYPE: 'pure-forms/MARK_AS_UNSUBMITTED' = 'pure-forms/MARK_AS_UNSUBMITTED';
  readonly type = MarkAsUnsubmittedAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
  ) { }
}

export class AddArrayControlAction<TValue> implements Action {
  static readonly TYPE: 'pure-forms/ADD_ARRAY_CONTROL' = 'pure-forms/ADD_ARRAY_CONTROL';
  readonly type = AddArrayControlAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
    public readonly value: TValue,
    public readonly index?: number,
  ) { }
}

export class AddGroupControlAction<TValue extends KeyValue, TControlKey extends keyof TValue = keyof TValue> implements Action {
  static readonly TYPE: 'pure-forms/ADD_GROUP_CONTROL' = 'pure-forms/ADD_GROUP_CONTROL';
  readonly type = AddGroupControlAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
    public readonly name: keyof TValue,
    public readonly value: TValue[TControlKey],
  ) { }
}

export class RemoveArrayControlAction implements Action {
  static readonly TYPE: 'pure-forms/REMOVE_ARRAY_CONTROL' = 'pure-forms/REMOVE_ARRAY_CONTROL';
  readonly type = RemoveArrayControlAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
    public readonly index: number,
  ) { }
}

export class RemoveGroupControlAction<TValue> implements Action {
  static readonly TYPE: 'pure-forms/REMOVE_CONTROL' = 'pure-forms/REMOVE_CONTROL';
  readonly type = RemoveGroupControlAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
    public readonly name: keyof TValue,
  ) { }
}

export class SetUserDefinedPropertyAction implements Action {
  static readonly TYPE: 'pure-forms/SET_USER_DEFINED_PROPERTY' = 'pure-forms/SET_USER_DEFINED_PROPERTY';
  readonly type = SetUserDefinedPropertyAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
    public readonly name: string,
    public readonly value: any,
  ) { }
}

export class ResetAction implements Action {
  static readonly TYPE: 'pure-forms/RESET' = 'pure-forms/RESET';
  readonly type = ResetAction.TYPE;

  constructor(
    public readonly controlId: FormControlId,
  ) { }
}

export type Actions<TValue> =
  | SetValueAction<TValue>
  | SetErrorsAction
  | SetAsyncErrorAction
  | ClearAsyncErrorAction
  | StartAsyncValidationAction
  | MarkAsDirtyAction
  | MarkAsPristineAction
  | EnableAction
  | DisableAction
  | MarkAsTouchedAction
  | MarkAsUntouchedAction
  | FocusAction
  | UnfocusAction
  | MarkAsSubmittedAction
  | MarkAsUnsubmittedAction
  | AddGroupControlAction<TValue>
  | RemoveGroupControlAction<TValue>
  | AddArrayControlAction<any>
  | RemoveArrayControlAction
  | SetUserDefinedPropertyAction
  | ResetAction
  ;

export function isPureFormsAction(action: Action) {
  return !!action.type && action.type.startsWith('pure-forms/');
}
