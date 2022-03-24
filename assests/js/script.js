// resize navbar on scroll

var navbar = document.querySelector('.navbar');

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

// scroll section active link

const section = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    section.forEach(current => {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id')
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.add('active')
            }
            else{
                document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.remove('active')
            }
        })
    }
window.addEventListener('scroll', scrollActive);

// preloader

window.addEventListener('load', function(){
    const preLoader = document.getElementById('preloader');
    preLoader.style.display = 'none';
})

// portfolio filter

const filterContainer = document.querySelector(".portfolio-filter-inner"),
filterBtns = filterContainer.children,
totalFilterBtn = filterBtns.length,
portfolioItems = document.querySelectorAll('.portfolio-item'),
totalPortfolioItem = portfolioItems.length;

for(let i=0; i<totalFilterBtn; i++){
    filterBtns[i].addEventListener("click", function(){
        filterContainer.querySelector('.active').classList.remove('active');
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        for(let k=0; k<totalPortfolioItem; k++){
            if(filterValue === portfolioItems[k].getAttribute('data-category')){
                portfolioItems[k].classList.add('show');
                portfolioItems[k].classList.remove('hide');
            }else{
                portfolioItems[k].classList.add('hide');
                portfolioItems[k].classList.remove('show');
            }
            if(filterValue === 'all'){
                portfolioItems[k].classList.add('show');
                portfolioItems[k].classList.remove('hide');
            }
        }
    })
}

// scroll to top

const scrollUp = document.querySelector('.scroll-top');
window.addEventListener("scroll", () =>{
    this.scrollY >= 800 ? scrollUp.classList.add('show') : scrollUp.classList.remove('show');
});

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
    });
});

// close navbar when click a link

const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarNavDropdown');
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        menuToggle.classList.remove('show');
    })
})

// scroll reveal animation

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 100,
})

sr.reveal(`.socials`, {delay: 200})
sr.reveal(`.intro`, {origin: 'right', distance: '200px', delay: 200,})
sr.reveal(`.main-img`, {delay: 300, origin: 'top'})