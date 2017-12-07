// Monads

const pure = x => {first: x};

const monadMap = Ma => fn => fn(Ma.first);

const times10 = x => pure(x * 10);

const firstMonadResult = monadMap(pure(10))(times10);
const secondMonadResult = monadMap(firstMonadResult)(times10);

console.log(firstMonadResult);  // {first: 100}
console.log(secondMonadResult); // {first: 1000}

// Maybe Monads #1

const pure3 = x => {state: true, value: x};
const fail = _ => {state: false, value: 'Nothing'};

const bind = Ma => fn => Ma['state'] ? fn(Ma['value']) : fail();

const add42 = x => pure3(x + 42);

const maybe1 = bind(pure3(10))(add42);
const maybe2 = bind(fail(maybe1))(add42);
const maybe3 = bind(maybe2)(add42);

console.log(maybe1); // {state: true, value: 52}
console.log(maybe2); // {state: false, value: 'Nothing'}
console.log(maybe3); // {state: false, value: 'Nothing'}

// Maybe Monads #2

const pureMaybe = x => ['Just', x];
const failMaybe = _ => ['Nothing', null];
const just = pureMaybe;
const nothing = failMaybe();

const fst = ([x,]) => x;
const snd = ([,y]) => y;

const add7 = x => just(x + 7);

const bindMaybe = Ma => fn => fst(Ma) === 'Just' ? fn(snd(Ma)) : nothing;

const maybe4 = bindMaybe(just(3))(add7);
const maybe5 = bindMaybe(maybe4)(add7);
const maybe6 = bindMaybe(maybe5)(add7);
const maybe7 = bindMaybe(maybe6)(add7);

console.log(maybe4); // ['Just', 10]
console.log(maybe5); // ['Just', 17]
console.log(maybe6); // ['Just', 24]
console.log(maybe7); // ['Just', 31]

bindMaybe(maybe7)(console.log); // 31
