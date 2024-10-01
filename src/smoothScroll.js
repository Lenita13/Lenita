document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuButton = document.getElementById('menu-button');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menuButton.classList.add('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

document.getElementById('menu-button2').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuButton = document.getElementById('menu-button');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        menuButton.classList.remove('hidden');
    }
});