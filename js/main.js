function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1500);
    })
}

loadData()
    .then(() => {
        let preloaderEl = document.getElementById('preloader');
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');
    });

$(document).ready(function () {
    var c1 = new Rellax('.c1', {
        speed: -3
    });

    var c2 = new Rellax('.c2', {
        speed: -5
    });

    var c3 = new Rellax('.c3', {
        speed: -6
    });

    var c4 = new Rellax('.c4', {
        speed: 5
    });

});

let elements = document.querySelectorAll('.animated-by-scroll');

addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.scrollY);
})