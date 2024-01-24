const mainDiv = document.getElementById('main-heading'); // 
const subHeading = document.createElement('h3');
subHeading.textContent = "Buy high quality organic fruits online";
subHeading.style.fontStyle = 'italic';
mainDiv.appendChild(subHeading);
const para = document.createElement('p')
const r = document.getElementsByTagName('div')
const secondDiv = r[1]
const paraText = document.createTextNode('Total fruits:4');

secondDiv.appendChild(para);
const fruits = document.querySelector('.fruits');
secondDiv.insertBefore(para, fruits);

para.id = 'fruits-total'