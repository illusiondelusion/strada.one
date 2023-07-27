for (const node of document.body.childNodes) {
    console.log(node);
}

const nodes = Array.from(document.body.childNodes);
nodes.forEach(node => console.log(node));

const mainDiv = document.getElementById('main_div');
const button = document.querySelector('.button');

console.log(mainDiv);
console.log(button);