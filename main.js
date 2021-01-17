const target = document.querySelector('.target');
const links = document.querySelectorAll('.mynav a');

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', e => e.preventDefault());
    links[i].addEventListener('mouseenter', mouseHover);
}

