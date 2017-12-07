'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Monads

var pure = function pure(x) {
  first: x;
};

var monadMap = function monadMap(Ma) {
  return function (fn) {
    return fn(Ma.first);
  };
};

var times10 = function times10(x) {
  return pure(x * 10);
};

var firstMonadResult = monadMap(pure(10))(times10);
var secondMonadResult = monadMap(firstMonadResult)(times10);

console.log(firstMonadResult); // {first: 100}
console.log(secondMonadResult); // {first: 1000}

// Maybe Monads #1

// const pure3 = x => {state: true, value: x};
// const fail = _ => {state: false, value: 'Nothing'};

var bind = function bind(Ma) {
  return function (fn) {
    return Ma['state'] ? fn(Ma['value']) : fail();
  };
};

var add42 = function add42(x) {
  return pure3(x + 42);
};

var maybe1 = bind(pure3(10))(add42);
var maybe2 = bind(fail(maybe1))(add42);
var maybe3 = bind(maybe2)(add42);

console.log(maybe1); // {state: true, value: 52}
console.log(maybe2); // {state: false, value: 'Nothing'}
console.log(maybe3); // {state: false, value: 'Nothing'}

// Maybe Monads #2

var pureMaybe = function pureMaybe(x) {
  return ['Just', x];
};
var failMaybe = function failMaybe(_) {
  return ['Nothing', null];
};
var just = pureMaybe;
var nothing = failMaybe();

var fst = function fst(_ref) {
  var _ref2 = _slicedToArray(_ref, 1),
      x = _ref2[0];

  return x;
};
var snd = function snd(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
      y = _ref4[1];

  return y;
};

var add7 = function add7(x) {
  return just(x + 7);
};

var bindMaybe = function bindMaybe(Ma) {
  return function (fn) {
    return fst(Ma) === 'Just' ? fn(snd(Ma)) : nothing;
  };
};

var maybe4 = bindMaybe(just(3))(add7);
var maybe5 = bindMaybe(maybe4)(add7);
var maybe6 = bindMaybe(maybe5)(add7);
var maybe7 = bindMaybe(maybe6)(add7);

console.log(maybe4); // ['Just', 10]
console.log(maybe5); // ['Just', 17]
console.log(maybe6); // ['Just', 24]
console.log(maybe7); // ['Just', 31]

bindMaybe(maybe7)(console.log); // 31
//# sourceMappingURL=Monads.js.map