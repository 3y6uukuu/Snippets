const words = ['Why', 'do', 'you', 'call', 'me', 'when', `you're`, 'high?'];
const separators = [' ', '_', '+', '-'];

function joinWith(separator) {
    function join([left, right, ...rest]) {
        let str = `${left}${separator}${right}`;

        return rest.length === 0 ? str : join([str, ...rest]);
    }

    return join;
}

const result = separators.map(joinWith).map(fj => fj(words));

// console.log(result);

// [
//     'why do you call me when you\'re high?',
//     'why_do_you_call_me_when_you\'re_high?',
//     'why+do+you+call+me+when+you\'re+high?',
//     'why-do-you-call-me-when-you\'re-high?'
// ]
