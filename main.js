const target = document.querySelector('.target');
const links = document.querySelectorAll('.mynav a');
const colors = ['#1abc9c', '#27ae60', '#3498db', '#8e44ad', '#f1c40f', '#e67e22', '#e74c3c', '#2c3e50'];

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', e => e.preventDefault());
    links[i].addEventListener('mouseenter', mouseHover);
}

function mouseHover() {
    if(!this.parentNode.classList.contains('active')) {
        for(let i = 0; i < links.length; i++) {
            if(links[i].parentNode.classList.contains('active')) {
                links[i].parentNode.classList.remove('active');
            }
            links[i].style.opacity = '.3';
        }
        this.parentNode.classList.add('active');
        this.style.opacity = '1';

    }
}