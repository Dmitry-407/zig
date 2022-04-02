
var image = function (url) {
    $('.window').empty();
    $('.window').append('<p class="closed" onclick="image_no()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="cancel_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M15.414 14l4.95 4.95a1 1 0 1 1-1.414 1.414L14 15.414l-4.95 4.95a1 1 0 0 1-1.414-1.414l4.95-4.95-4.95-4.95A1 1 0 0 1 9.05 7.636l4.95 4.95 4.95-4.95a1 1 0 1 1 1.414 1.414L15.414 14z" class="color"></path></g></svg></p><img src="'+ url +'"/>');
    $('.window').addClass('online');
}

var image_no = function() {
    $('.window').removeClass('online');
}

var t;
var up = function () {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        t = setTimeout('up()',30);
    } else clearTimeout(t);
    return false;
}

window.onscroll = function () {
    if($('html').scrollTop() >= ($('html').height() / 2)) {
        $('.up').addClass('online');
    }else {
        $('.up').removeClass('online');
    }
}