const mobilemenu = document.getElementById('mobile-menu');
const Navlinks = document.getElementById('nav-links');
mobilemenu.addEventListener('click', ()=>
    {
        Navlinks.classList.toggle('active');

});
const links = document.querySelectorAll('.nav-links li a');
links.forEach(link=> {
    link.addEventListener('click' , () => {
        Navlinks.classList.remove('active')
    })
})
document.addEventListener('click', (event) => {
    if(!Navlinks.contains(event.target)&&event.target !== mobilemenu) {
        Navlinks.classList.remove('active')
    }
})