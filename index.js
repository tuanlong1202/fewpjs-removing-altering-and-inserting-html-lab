// Write your code here!

let pMain = document.getElementById("main");
pMain.remove();

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';

document.body.appendChild(newHeader);
