function onscroll() {
    if ($(document).scrollTop() < 100) {
        $('.navbar-my').css('top', 0);
    }
    else {
        $('.navbar-my').css('top', $(document).scrollTop());
    }
}

$(() => {
    $(document).on('click', 'a[href^="#"]', function(e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        var pos = $id.offset().top;
        $('body, html').animate({scrollTop: pos});
    });
    $(document).on('scroll', onscroll);
    onscroll();
});

function submitSubscribe(e) {
    e.preventDefault()
    var form = new FormData(subscribeForm)
    var email = form.get('email')
    if (!subscribeForm.email.validity.valid) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email is not valid!'
        })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Congratulations',
            text: "You have subscribed successfully!"
        })
        $('#exampleModal').modal('toggle')
        console.log(email)
    }
    return false;
}
