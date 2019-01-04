let event = new CustomEvent('LoginSuccess',{detail:123});
let content = document.querySelector('#content');
content.addEventListener('LoginSuccess', function (e) {
    console.log(e.detail);
}, {
    possive: true
})

content.dispatchEvent(event);