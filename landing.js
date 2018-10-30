console.log("test");

$('.jumbotron').on('mouseenter', function () {
    $('#img1').addClass('animated slower fadeIn');
    $('#img2').addClass('animated slower fadeIn');
    $('#img3').addClass('animated slower fadeIn');
});

$('.third').on('mouseenter', function () {
    $('.img #avatar').addClass('animated slower slideInRight');
    $('.second .container').addClass('animated slower slideInLeft');
});
