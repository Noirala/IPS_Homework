window.addEventListener('load', function () {
    setBodyLoaded();
    setAnimatedBlockLoaded();
});



function setBodyLoaded() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
}

function setAnimatedBlockLoaded() {
    let reached = false;
    const ANIMATED_BLOCK_OFFSET = 300;
    const animatedBlock = document.getElementById('animatedBlock');
    const animatedBlockOffset = animatedBlock.offsetTop;
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', function () {
        let scrolled = window.pageYOffset;
        if (scrolled + windowHeight > animatedBlockOffset + ANIMATED_BLOCK_OFFSET) {
            if (!reached) {
                animatedBlock.classList.add('loaded');
                reached = true;
            }

        }
    })
}


$('.close_button, .overlay').click(function () {
    closePopup();
})

$('.subscribe_button, .menu_button, .main_button').click(function (event) {
    showPopup(event);
})

function showPopup(event) {
    event.preventDefault();
    $('.popup').addClass('visible');
    $('.overlay').addClass('visible');
}

function closePopup() {
    $('.popup').removeClass('visible');
    $('.overlay').removeClass('visible');
}



$('.scrollUp_button').click(function () {
    $('html').animate({
        scrollTop: 0,
    }, 800)
})


$(window).scroll(() => {
    if ($(window).scrollTop() >= 400) {
        $('.scrollUp_button').addClass('visible');
    } else {
        $('.scrollUp_button').removeClass('visible');
    }
})

$('.js-scroll-to').click((event)=>{
    event.preventDefault();
    var target = $(event.target.hash)
    $(window).scrollTo(target, 800);
})
