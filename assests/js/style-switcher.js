// toggle style switcher

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})
// hide style switcher on scroll
window.addEventListener("scroll", () => {
    document.querySelector('.style-switcher').classList.remove('open');
})

// theme colors

function themeColors(){
    const colorStyle = document.querySelector('.js-color-style'),
    themeColorsContainer = document.querySelector('.js-theme-colors');

    themeColorsContainer.addEventListener("click", ({target}) => {
        if(target.classList.contains('js-theme-color-item')){
            localStorage.setItem('color', target.getAttribute('data-js-theme-color'));
            setColor();
        }
    });

    // save theme on localStorage
    function setColor(){
        let path = colorStyle.getAttribute('href').split('/');
        path = path.slice(0, path.length-1);
        colorStyle.setAttribute('href', path.join("/") + '/' + localStorage.getItem('color') + '.css');

    }
    if(localStorage.getItem('color') !== null){
        setColor();
    }
}
themeColors()


// light/dark mode

// lightDark.addEventListener("click", () => {
//     document.body.classList.toggle('dark-themes')
// })

// window.addEventListener("load", () =>{
//     if (document.body.classList.contains('dark-themes')) {
//         lightDark.querySelector('i').classList.add('bi-sun-fill');
//     }else{
//         lightDark.querySelector('i').classList.add('bi-moon-fill');
//     }
// })
// const checkBox = document.querySelector('input[type="checkbox"]'),
// lightDark = document.querySelector('.dark-theme');
// checkBox.addEventListener('click', () => {
//     if(checkBox.checked){
//         lightDark.querySelector('i').classList.remove('bi-moon-fill');
//         lightDark.querySelector('i').classList.add('bi-sun-fill');
//         localStorage.setItem('dark-theme', 'true');
//     }else{
//         localStorage.setItem('dark-theme', 'false');
//         lightDark.querySelector('i').classList.remove('bi-sun-fill');
//         lightDark.querySelector('i').classList.toggle('bi-moon-fill');
//     }
//     if(localStorage.getItem("dark-theme") !== null){
//         if(localStorage.getItem('dark-theme') === 'false'){
//             document.body.classList.remove('dark-themes');
//         }else{
//             document.body.classList.add('dark-themes');
//         }   
//     }
// })


function themeLightDark(){
    const darkModeCheckbox = document.getElementById('check'),lightDark = document.querySelector('.dark-theme');
    darkModeCheckbox.addEventListener('click', function(){
        if(this.checked){
            localStorage.setItem('theme-dark', 'true');
            lightDark.querySelector('i').classList.remove('bi-moon-fill');
            lightDark.querySelector('i').classList.add('bi-sun-fill');
        }else{
            localStorage.setItem('theme-dark', 'false');
            lightDark.querySelector('i').classList.remove('bi-sun-fill');
            lightDark.querySelector('i').classList.add('bi-moon-fill');
        }
        themeMode();
    });
    
    function themeMode(){
        if(localStorage.getItem('theme-dark') === 'false'){
            document.body.classList.remove('t-dark');
            lightDark.querySelector('i').classList.add('bi-moon-fill');
            lightDark.querySelector('i').classList.remove('bi-dun-fill');
        }else{
            document.body.classList.add('t-dark');
            lightDark.querySelector('i').classList.add('bi-sun-fill');
            lightDark.querySelector('i').classList.remove('bi-moon-fill');
        }
    }

    if(localStorage.getItem('theme-dark') !== null){
        themeMode();
    }
    if(document.body.classList.contains('t-dark')){
        darkModeCheckbox.checked = true;
    }
}
themeLightDark();
