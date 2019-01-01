import { box, Boxed, unbox } from '../boxing';

export interface ValueConverter<TView, TState> {
  convertViewToStateValue(value: TView): TState;
  convertStateToViewValue(value: TState): TView;
}

// tslint:disable-next-line:variable-name
export const ValueConverters = {
  default<T>() {
    return {
      convertViewToStateValue: value => typeof value === 'object' && value !== null ? box(value) : value,
      convertStateToViewValue: unbox,
    } as ValueConverter<T, Boxed<T> | T>;
  },
  dateToISOString: {
    convertViewToStateValue: date => date === null ? null : date.toISOString(),
    convertStateToViewValue: s => s === null ? null : new Date(Date.parse(s)),
  } as ValueConverter<Date | null, string | null>,
  objectToJSON: {
    convertViewToStateValue: value => value === null ? null : JSON.stringify(value),
    convertStateToViewValue: s => s === null ? null : JSON.parse(s),
  } as ValueConverter<{} | null, string | null>,
};
