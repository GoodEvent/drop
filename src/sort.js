let a = [55, 54, 40, 5, 4, 2, 1];

for (let j = 1; j < a.length; j++) {
    let key = a[j];
    let c = j - 1;
    while (c > -1 && a[c] > key) {
        a[c + 1] = a[c];
        c = c - 1;
    }
    a[c + 1] = key;
    console.log(a);
    
    // if (s < p) {
    //     a[j - 1] = s;
    //     a[j] = p;
    // }
}

// console.log(a);