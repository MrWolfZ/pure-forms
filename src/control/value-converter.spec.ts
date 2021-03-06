import { box } from '../boxing';
import { ValueConverters } from './value-converter';

describe('ValueConverters', () => {
  describe('default', () => {
    it('should return the same primitive view value', () => {
      const viewValue = 'A';
      expect(ValueConverters.default<typeof viewValue>().convertViewToStateValue(viewValue)).toBe(viewValue);
    });

    it('should return the same primitive state value', () => {
      const stateValue = 'A';
      expect(ValueConverters.default<typeof stateValue>().convertStateToViewValue(stateValue)).toBe(stateValue);
    });

    it('should return a boxed object view value', () => {
      const viewValue = { v: 'A' };
      expect(ValueConverters.default<typeof viewValue>().convertViewToStateValue(viewValue)).toEqual(box(viewValue));
    });

    it('should return an unboxed object state value', () => {
      const stateValue = box({ v: 'A' });
      expect(ValueConverters.default<typeof stateValue.value>().convertStateToViewValue(stateValue)).toEqual(stateValue.value);
    });

    it('should return a boxed array view value', () => {
      const viewValue = ['A'];
      expect(ValueConverters.default<typeof viewValue>().convertViewToStateValue(viewValue)).toEqual(box(viewValue));
    });

    it('should return an unboxed array state value', () => {
      const stateValue = box(['A']);
      expect(ValueConverters.default<typeof stateValue.value>().convertStateToViewValue(stateValue)).toEqual(stateValue.value);
    });

    it('should return null view value', () => {
      const viewValue = null;
      expect(ValueConverters.default<typeof viewValue>().convertViewToStateValue(viewValue)).toBe(viewValue);
    });

    it('should return undefined view value', () => {
      const viewValue = undefined;
      expect(ValueConverters.default<typeof viewValue>().convertViewToStateValue(viewValue)).toBe(viewValue);
    });
  });

  describe('dateToISOString', () => {
    it('should return an ISO string when converting view value', () => {
      const viewValue = new Date();
      const stateValue = ValueConverters.dateToISOString.convertViewToStateValue(viewValue);
      expect(stateValue).toEqual(viewValue.toISOString());
    });

    it('should pass through "null" view values', () => {
      const stateValue = ValueConverters.dateToISOString.convertViewToStateValue(null);
      expect(stateValue).toEqual(null);
    });

    it('should return a date when converting state value', () => {
      const stateValue = '1970-01-01T00:00:00.000Z';
      const viewValue = ValueConverters.dateToISOString.convertStateToViewValue(stateValue);
      expect(viewValue).toEqual(new Date(stateValue));
    });

    it('should pass through "null" state values', () => {
      const viewValue = ValueConverters.dateToISOString.convertStateToViewValue(null);
      expect(viewValue).toEqual(null);
    });

    it('should return an equal value if converting from view to state and back', () => {
      const viewValue = new Date();
      const stateValue = ValueConverters.dateToISOString.convertViewToStateValue(viewValue);
      expect(ValueConverters.dateToISOString.convertStateToViewValue(stateValue)).toEqual(viewValue);
    });

    it('should return an equal value if converting from state to view and back', () => {
      const stateValue = '1970-01-01T00:00:00.000Z';
      const viewValue = ValueConverters.dateToISOString.convertStateToViewValue(stateValue);
      expect(ValueConverters.dateToISOString.convertViewToStateValue(viewValue)).toEqual(stateValue);
    });
  });

  describe('objectToJSON', () => {
    const tests = [
      {
        type: 'string',
        expectedViewValue: 'Hello world',
        expectedStateValue: '"Hello world"',
      },
      {
        type: 'number',
        expectedViewValue: 356.2,
        expectedStateValue: '356.2',
      },
      {
        type: 'boolean',
        expectedViewValue: true,
        expectedStateValue: 'true',
      },
      {
        type: 'array',
        expectedViewValue: [1, 2, 'this is a string', { a: 'b' }],
        expectedStateValue: '[1,2,"this is a string",{"a":"b"}]',
      },
      {
        type: 'object',
        expectedViewValue: {
          a: [1, 2, 3],
          b: {
            c: '456',
          },
        },
        expectedStateValue: '{"a":[1,2,3],"b":{"c":"456"}}',
      },
    ];

    tests.forEach(({ type, expectedStateValue, expectedViewValue }) => {
      it(`should return the expected ${type} when converting a view value`, () => {
        const stateValue = ValueConverters.objectToJSON.convertViewToStateValue(expectedViewValue);
        expect(stateValue).toEqual(stateValue);
      });

      it(`should return the expected JSON string when converting a state value of type ${type}`, () => {
        const viewValue = ValueConverters.objectToJSON.convertStateToViewValue(expectedStateValue);
        expect(viewValue).toEqual(viewValue);
      });

      it(`should return an equal value if converting from view to state and back (type ${type})`, () => {
        const stateValue = ValueConverters.objectToJSON.convertViewToStateValue(expectedViewValue);
        expect(ValueConverters.objectToJSON.convertStateToViewValue(stateValue)).toEqual(expectedViewValue);
      });

      it(`should return an equal value if converting from state to view and back (type ${type})`, () => {
        const stateValue = ValueConverters.objectToJSON.convertStateToViewValue(expectedStateValue);
        expect(ValueConverters.objectToJSON.convertViewToStateValue(stateValue)).toEqual(expectedStateValue);
      });
    });

    it('should pass through a "null" view value', () => {
      const stateValue = ValueConverters.objectToJSON.convertViewToStateValue(null);
      expect(stateValue).toEqual(null);
    });

    it('should pass through a "null" state value', () => {
      const viewValue = ValueConverters.objectToJSON.convertStateToViewValue(null);
      expect(viewValue).toEqual(null);
    });
  });
});
