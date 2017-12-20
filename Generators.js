const firstCall = () => {
    const i = (function* isFirst() {
        yield true;
    }());

    return () => i.next().value === true;
};

const isFirst = firstCall();

console.assert(isFirst() === true);
console.assert(isFirst() === false);
console.assert(isFirst() === false);