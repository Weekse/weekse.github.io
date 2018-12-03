
$('#about, #contact').hide();
$('#about, #contact').css('opacity', 1);

var running = false;

$('.a').click(function(){
    if (!running) {
        running = true;
        $('#about, #contact').fadeOut(500);
        $('#welcome').delay(500).fadeIn(500, function(){
            running = false;
        })
    }
})

$('.b').click(function(){
    if (!running) {
        running = true;
        $('#welcome, #contact').fadeOut(500);
        $('#about').delay(500).fadeIn(500, function(){
            running = false;
        })
    }
})

$('.c').click(function(){
    if (!running){
        running = true;
            $('#about, #welcome').fadeOut(500);
            $('#contact').delay(500).fadeIn(500, function(){
                running = false;
            })
    }
})

$('#mail').click(function(){
    var $temp = $("<input>");
    $temp.val('mattweekes92@gmail.com');
    $("body").append($temp);
    $temp.select();
    document.execCommand('copy');
    $temp.remove();
    $('#alert-email').fadeIn();
    $('#alert-email').delay(2000).fadeOut();
})

$('#phone').click(function(){
    var $temp = $("<input>");
    $temp.val('0403551943');
    $("body").append($temp);
    $temp.select();
    document.execCommand('copy');
    $temp.remove();
    $('#alert-ph').fadeIn();
    $('#alert-ph').delay(2000).fadeOut();
})

$('#t1').click(function(){
    $('#styles').attr('href', 'style.css');
})

$('#t2').click(function(){
    $('#styles').attr('href', 'style2.css');
})