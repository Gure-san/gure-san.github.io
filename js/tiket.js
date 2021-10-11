// menu toggle
const tombol = document.getElementById('toggle');
const navTombol = document.getElementById('navTombol');

tombol.addEventListener('click', function() {
        navTombol.classList.toggle('ganti');
});

// detail tiket 
const detailBase = document.querySelectorAll('.detail');
const tombolBuy = document.querySelectorAll('.buy');
const infoDetail = document.querySelector('.info-detail');
const containerButton = document.querySelector('main');
const boxani = Array.from(document.querySelectorAll('.box'));
console.log(tombolBuy);

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

        if(e.target.classList.contains('tombol-empat')) {
                detailBase[3].classList.add('fade-out');
                boxani[3].classList.add('boxAni');
                return e;
        }

        if(e.target.classList.contains('tombol-lima')) {
                detailBase[4].classList.add('fade-out');
                boxani[4].classList.add('boxAni');
                return e;
        }

        if(e.target.classList.contains('tombol-enam')) {
                detailBase[5].classList.add('fade-out');
                boxani[5].classList.add('boxAni');
                return e;
        }

        if(e.target.classList.contains('info-detail')) {
                detailBase[6].classList.add('fade-out');
                boxani[6].classList.add('boxAni');
                return e;
        }

        if(e.target.classList.contains('close')) {
                e.target.parentNode.parentNode.classList.remove('fade-out');
                e.target.parentNode.classList.remove('boxAni');
                return e;
        }

        return e; 
});

