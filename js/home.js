// menu toggle
const tombol = document.getElementById('toggle');
const navTombol = document.getElementById('navTombol');

tombol.addEventListener('click', function() {
        navTombol.classList.toggle('ganti');
});

// detail tiket promo
const detailBase = document.querySelectorAll('.detail');
const containerButton = document.querySelector('main');
const boxAni = document.querySelectorAll('.box');
// console.log();
let i = 0;

containerButton.addEventListener('click', e => {
        if(e.target.classList.contains('tombol-satu')) {
                detailBase[0].classList.add('fade-out');
                boxAni[0].classList.add('boxAni');
                return e;
        }
        
        if(e.target.classList.contains('tombol-dua')) {
                detailBase[1].classList.add('fade-out');
                boxAni[1].classList.add('boxAni');
                return e;
        }

        if(e.target.classList.contains('tombol-tiga')) {
                detailBase[2].classList.add('fade-out');
                boxAni[2].classList.add('boxAni');
                return e;
        }

        if(e.target.classList.contains('close')) {
                e.target.parentNode.parentNode.classList.remove('fade-out');
                e.target.parentNode.classList.remove('boxAni');
                return e;
        }
        return e; 
});

