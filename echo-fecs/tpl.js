export default function foo(bar) {
    let baz = `${bar.length}`

    return {
        'ifa': 0,
        a: 1,
        [`${bar}`]: bar,
        [`${baz}`]: baz
    }
}
