function onscroll() {
    if ($(document).scrollTop() < 100) {
        $('.shadow').addClass('toppage');
        $('.navbar').css('top', -$(document).scrollTop());
    }
    else {
        $('.shadow').removeClass('toppage');
        $('.navbar')[0].animate({'top': 0}, 500, () => {});
    }
}

$(function() {
    $(document).on('scroll', onscroll);
    onscroll();
});