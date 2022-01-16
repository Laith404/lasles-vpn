document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.hamburger').addEventListener('click', function(item) {
        let nav = document.querySelector('nav'),
            reg = document.querySelector('.header__reg');
        if(!this.classList.contains('is-active')) {
            this.classList.add('is-active');
            nav.classList.add('active');
            reg.classList.add('active');
        } else {
            this.classList.remove('is-active');
            nav.classList.remove('active');
            reg.classList.remove('active');
        }
    })

    document.body.classList.add('load');

    window.onload = function () {
        
        window.setTimeout(function () {
            document.body.classList.remove('load');
          document.body.classList.add('loaded');
        }, 500);
      }
})
