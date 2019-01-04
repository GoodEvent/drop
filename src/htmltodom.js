import parse5 from 'parse5';
import './index.css';
import './scroll';
class LoginComponent {
  constructor() {
    this.name = '123';
    this.add = this.add.bind(this);
  }

  add(e) {
    console.log('add');
    jumpList();
  }
}

let loginComponent = new LoginComponent();
var html = `<div><button (click)="add()">add</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
<div><button (click)="add()">add1</button></div>
`;
// var div = document.createElement('div');
// var button = document.createElement('button');
// var newContent = document.createTextNode('add');
// button.appendChild(newContent);
// div.appendChild(button);


function astToElement(ast, component) {
  let ele;
  if (ast.nodeName === '#document-fragment') {
    ele = document.createDocumentFragment();
  } else if (ast.nodeName === "#text") {
    ele = document.createTextNode(ast.value);
  } else {
    ele = document.createElement(ast.nodeName);
    ast.attrs.forEach(function (attr) {
      let name = attr.name.split('');
      name.shift();
      name.pop();
      let event = name.join('');
      let value = attr.value;
      let methed = value.split('(')[0];
      ele.addEventListener(event, component[methed])
    })
  }
  if (ast.childNodes) {
    ast.childNodes.forEach(function (node) {
      let ne = astToElement(node, component);
      ele.appendChild(ne);
    })
  }
  return ele;

}




// button.onclick = loginComponent.add;

function jumpLogin() {
  let c = document.querySelector('#content');
  let loginTAst = parse5.parseFragment(html);
  let dom = astToElement(loginTAst, loginComponent);
  if (c.childElementCount > 0) {
    c.innerHTML = "";
  }
  c.appendChild(dom);
  history.pushState({}, '', 'login');
}

function jumpList() {
  let c = document.querySelector('#content');
  let listTAst = parse5.parseFragment(listHtml);
  let dom = astToElement(listTAst, listComponent);
  if (c.childElementCount > 0) {
    c.innerHTML = "";
  }
  c.appendChild(dom);

  history.pushState({}, '', 'list');
}


let listHtml = `<ul (click)="info()"><li>123</li><li>456</li></ul>`

class ListComponent {
  constructor() {

  }
  info() {
    jumpLogin();
  }
}

let listComponent = new ListComponent()

// let ul = document.createElement('ul');
// let li1 = document.createElement('li');
// let text1 = document.createTextNode('123');
// li1.appendChild(text1);
// let li2 = document.createElement('li');
// let text2 = document.createTextNode('456');
// li2.appendChild(text2);
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.onclick = listComponent.info;




jumpLogin();