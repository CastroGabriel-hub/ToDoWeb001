const screen = document.querySelector('.screen');

window.addEventListener('load', createSidebar);

function createSidebar(e){
    //creating elements
    const aside = document.createElement('aside');
    aside.setAttribute('class', 'sidebar');

    const nav = document.createElement('nav');
    nav.setAttribute('class', 'menu');

    const item1 = document.createElement('a');
    item1.setAttribute('href', 'index.html');
    item1.setAttribute('class', 'menu-item');
    item1.innerText = 'Tasks';
    
    const item2 = document.createElement('a');
    item2.setAttribute('href', 'profile.html');
    item2.setAttribute('class', 'menu-item');
    item2.innerText = 'Profile';

    const item3 = document.createElement('a');
    item3.setAttribute('href', 'calendar.html');
    item3.setAttribute('class', 'menu-item');
    item3.innerText = 'Calendar';

    //getting page document name
    var path = window.location.pathname;
    var page = path.split("/").pop();

    //selecting curent page
    if(page === 'index.html'){
        item1.setAttribute('class', 'menu-item selected');
    }else if(page === 'profile.html'){
        item2.setAttribute('class', 'menu-item selected');
    }else if(page === 'calendar.html'){
        item3.setAttribute('class', 'menu-item selected');
    }

    //appending elements
    nav.appendChild(item1);
    nav.appendChild(item2);
    nav.appendChild(item3);
    aside.appendChild(nav);
    screen.insertBefore(aside, screen.firstChild);

}