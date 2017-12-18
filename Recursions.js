const words = ['why', 'do', 'you', 'call', 'me', 'when', 'you', 're', 'high'];
const separators = [' ', ' ', ' ', ' ', ' ', ' ', '\'', ' ', ' ', '?'];

function joinWith() {
    return join;

    function join([x, y, ...ys]) {
        let str = `${x}${s}${y}`;

        return ys.length === 0 ? str : join([str, ...ys]);
    }
}

const result = separators.map(joinWith).map(f => f(words));

console.log(result);
