function r(key) {
    switch (key) {
        case 'a':
            console.log('a');
            break;
        case 'b':
            console.log('b');
            break;
        case 'c':
            console.log('c');
            break;
        default:
    }
}
console.time("switch");
for (let index = 0; index < 10000; index++) {
    r('a');
    r('b');
    r('c');
}

console.timeEnd("switch");
let o = {
    a: function () { console.log('a') },
    b: function () { console.log('b') },
    c: function () { console.log('c') },
};
function ro(key) {
    o[key]();
}
console.time("obj");
for (let index = 0; index < 10000; index++) {
    ro('a');
    ro('b');
    ro('c');
}
console.timeEnd("obj");
let m = new Map();
m.set('a', function () { console.log('a') });
m.set('b', function () { console.log('b') });
m.set('c', function () { console.log('c') });
function rm(key) {
    m.get(key)();
}
console.time("map");
for (let index = 0; index < 10000; index++) {
    rm('a');
    rm('b');
    rm('c');
}
console.timeEnd("map");

