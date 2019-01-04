document
    // .querySelector('#content')
    .addEventListener('scroll', function (e) {
        for (var i = 0; i <= 1000; i++) {
            console.log(i);
        }
    }
    // , {
    //     passive: true
    // }
)
// document.querySelector('#content')
//     .addEventListener('scroll', function (e) {
//         let target = e.target;
//         console.log(123);

//         console.log(target.scrollHeight);
//         console.log(target.scrollTop);
//         console.log(target.clientHeight);
//     })