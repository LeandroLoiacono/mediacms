import { logErrorAndReturnError } from './errors';
//import { isPositiveInteger, isPositiveIntegerOrZero } from '../helpers';

export const PositiveIntegerOrZero = (function () {
  return function (obj, key, comp) {
    return void 0 === obj[key] || (obj[key] === Math.trunc(obj[key]) && obj[key] >= 0) //isPositiveIntegerOrZero(obj[key])
      ? null
      : logErrorAndReturnError([
          'Invalid prop `' +
            key +
            '` of type `' +
            typeof obj[key] +
            '` supplied to `' +
            (comp || 'N/A') +
            '`, expected `positive integer or zero` (' +
            obj[key] +
            ').',
        ]);
  };
})();

export const PositiveInteger = (function () {
  return function (obj, key, comp) {
    return void 0 === obj[key] || (obj[key] === Math.trunc(obj[key]) && obj[key] >= 0)
      ? null
      : logErrorAndReturnError([
          'Invalid prop `' +
            key +
            '` of type `' +
            typeof obj[key] +
            '` supplied to `' +
            (comp || 'N/A') +
            '`, expected `positive integer` (' +
            obj[key] +
            ').',
        ]);
  };
})();
