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
    const target = $(event.target.hash)
    $(window).scrollTo(target, 800);
})


$('.faq_accordeon').click( function (event) {
    console.log(event);
    $(event.target).toggleClass('visible');
    var panel_text = $(event.currentTarget.children[1])[0];
    panel_text.classList.toggle('visible');
})

$('#subscribe').submit(function(event){
    event.preventDefault();
    var form = $('form')[0];
    var formValid = false;
    
    var name = $(event.target[0]).val();
    if (!name){
        $(event.target[0]).addClass('error');
        formValid = false;
    } else {
        $(event.target[0]).removeClass('error');
        formValid = true;
    }
    
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var email = $(event.target[1]).val();
    if (re.test(String(email).toLowerCase())){
        $(event.target[1]).removeClass('error');
        formValid = true;
    } else {
        $(event.target[1]).addClass('error');
        formValid = false;
    }
    
    var activity = $(event.target[2]).val();
    if (!activity) {
        $(event.target[2]).addClass('error');
        formValid = false;
    } else {
        $(event.target[2]).removeClass('error');
        formValid = true;
    }
    
    var accept = $(event.target[3]).is(':checked');
    if (!accept) {
        $(event.target[3]).addClass('error');
        formValid = false;
    } else {
        $(event.target[3]).removeClass('error');
        formValid = true;
    }
    
    if (formValid) {
        form.submit();
    }
    
})