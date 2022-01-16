document.addEventListener('DOMContentLoaded', function() {

let path = anime.path('.outline');
let path2 = anime.path('.outline2')
let anime1 = anime({
    targets: '.outline-anime',
    translateY: path('y'),
    translateX: path('x'),
    easing: 'linear',
    duration: function() { return anime.random(2500, 5000); },
    loop: true
    });
let anime2 = anime({
    targets: ".outline-anime2",
    translateY: path2('y'),
    translateX: path2('x'),
    easing: 'linear',
    duration: 6000,
    loop: true
});

let pathUp = anime.path('.outlineUp')
let pathDown = anime.path('.outlineDown')
let animeLine = anime({
    targets: '.line-drawing-demo .lines',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: function() { return anime.random(1000, 2000); },
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
    });
let animeDown = anime({
    targets: ".outline-animeUp",
    translateY: pathUp('y'),
    translateX: pathUp('x'),
    easing: 'linear',
    direction: 'alternate',
    duration: function() { return anime.random(8000, 9000); },
    loop: true
});
let animeUp = anime({
    targets: ".outline-animeDown",
    translateY: pathDown('y'),
    translateX: pathDown('x'),
    easing: 'linear',
    direction: 'alternate',
    duration: function() { return anime.random(8000, 9000); },
    loop: true
});
let pathLeft = anime.path('.outline-left')
anime({
    targets: ".outline-left-anime",
    translateY: pathLeft('y'),
    translateX: pathLeft('x'),
    easing: 'linear',
    direction: 'alternate',
    duration: function() { return anime.random(2000, 5000); },
    loop: true
});


anime({
    targets: ['.preview__title','.preview__sub-title','.preview__img','.preview__btn'],
    translateY: [30,0],
    opacity: 1,
    direction: 'alternate',
    delay: 1500,
    loop: false,
    easing: 'linear'
})
});