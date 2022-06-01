const body = document.body;

window.addEventListener('load', createHeader);

function createHeader(){
    const headerDiv = document.createElement('div');
    headerDiv.setAttribute('class', 'header-container');

    const hdr = document.createElement('header');
    hdr.setAttribute('class', 'header');
    
    const title = document.createElement('h1');
    title.innerText = "Todo Web App";

    hdr.appendChild(title);
    headerDiv.appendChild(hdr);
    body.insertBefore(headerDiv, body.firstChild);
}