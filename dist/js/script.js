//navbar fixed
window.onscroll = function () {
    const header   = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}


//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu   = document.querySelector('#navMenu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//hide and show pengalaman
const pendidikanBtn = document.getElementById('pendidikan');
const lombaBtn      = document.getElementById('lomba');

const pendidikanContent = document.querySelectorAll('.pendidikan');
const lombaContent      = document.querySelectorAll('.lomba');

pendidikanBtn.addEventListener('click', function(){
    pendidikanContent.forEach(pendidikan => {
        pendidikan.classList.add('show')
    });
    lombaContent.forEach(lomba => {
        lomba.classList.remove('show')
    });

    lombaBtn.classList.remove('btn-active');
    pendidikanBtn.classList.add('btn-active');
});
lombaBtn.addEventListener('click', function(){
    pendidikanContent.forEach(pendidikan => {
        pendidikan.classList.remove('show')
    });
    lombaContent.forEach(lomba => {
        lomba.classList.add('show')
        // lomba.className.display = 'hidden'
    });

    lombaBtn.classList.add('btn-active');
    pendidikanBtn.classList.remove('btn-active');
});

//animasi typing
const type = new Typed('#typed', {
    strings: ["web developer", "android developer"],
    typeSpeed: 120,
    backSpeed: 40,
    loop: true,
  });

//enambahkan atribut otomatis
const content = document.querySelectorAll('.wrap')
content.forEach(e => {
    e.setAttribute('data-aos', 'fade-left')
});

//animation on scroll
AOS.init();