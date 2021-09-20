// menu toggle
const tombol = document.getElementById('toggle');
const navTombol = document.getElementById('navTombol');

tombol.addEventListener('click', function() {
        navTombol.classList.toggle('ganti');
});

// detail tiket promo
const detailBase = document.querySelectorAll('.detail');
const containerButton = document.querySelector('main');
const boxani = Array.from(document.querySelectorAll('.box'));

containerButton.addEventListener('click', e => {
        if(e.target.classList.contains('tombol-satu')) {
                detailBase[0].classList.add('fade-out');
                boxani[0].classList.add('boxAni');
                return e;
        }
        
        if(e.target.classList.contains('tombol-dua')) {
                detailBase[1].classList.add('fade-out');
                boxani[1].classList.add('boxAni');
                return e;
        }

        if(e.target.classList.contains('tombol-tiga')) {
                detailBase[2].classList.add('fade-out');
                boxani[2].classList.add('boxAni');
                return e;
        }

        if(e.target.classList.contains('close')) {
                e.target.parentNode.parentNode.classList.remove('fade-out');
                e.target.parentNode.classList.remove('boxAni');
                return e;
        }

        return e; 
});


// detail layanan
const cardLayanan = document.querySelectorAll('.detailLayanan');
const layanan = document.querySelector('section');
const boxaniCard = Array.from(document.querySelectorAll('.bflex'));

layanan.addEventListener('click', e => {
        if(e.target.classList.contains('tombol-satu')) {
                cardLayanan[0].classList.add('fade-out');
                boxaniCard[0].classList.add('boxAni');
                return e;
        }
        
        if(e.target.classList.contains('tombol-dua')) {
                cardLayanan[1].classList.add('fade-out');
                boxaniCard[1].classList.add('boxAni');
                return e;
        }

        if(e.target.classList.contains('tombol-tiga')) {
                cardLayanan[2].classList.add('fade-out');
                boxaniCard[2].classList.add('boxAni');
                return e;
        }

        if(e.target.classList.contains('tombol-empat')) {
                cardLayanan[3].classList.add('fade-out');
                boxaniCard[3].classList.add('boxAni');
                return e;
        }

        if(e.target.classList.contains('close')) {
                e.target.parentNode.parentNode.classList.remove('fade-out');
                e.target.parentNode.classList.remove('boxAni');
                return e;
        }

        return e; 
});

