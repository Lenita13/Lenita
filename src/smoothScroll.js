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

////////////////////
const track = document.getElementById("image-track");

const handleOnDown = e => {
    track.dataset.mouseDownAt = e.clientX || e.touches[0].clientX;
};

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";  
    track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const clientX = e.clientX || e.touches[0].clientX;
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - clientX,
          maxDelta = window.innerWidth;

    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
          maxPercentage = window.innerWidth <= 768 ? -315 : -100,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), maxPercentage);

    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, 0%)`;

    for(const image of track.getElementsByClassName("image")) {
        image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
};

/* -- Add event listeners for both mouse and touch events -- */

window.addEventListener('mousedown', handleOnDown);
window.addEventListener('touchstart', handleOnDown);

window.addEventListener('mouseup', handleOnUp);
window.addEventListener('touchend', handleOnUp);

window.addEventListener('mousemove', handleOnMove);
window.addEventListener('touchmove', handleOnMove);
