/* desktop telephone click error message */
/*
var deskTel = document.getElementsByClassName('desktop-tel')[0];

deskTel.addEventListener('click', sorry);

function sorry() {
    deskTel.innerHTML = '<i class="fas fa-mobile-alt"></i>Cannot auto-call from this device';

    setTimeout(function(){
        deskTel.innerHTML = '<i class="fas fa-mobile-alt"></i>0403 551 943';
    }, 1000);
};
*/
/* clipboard copy */

var mail = document.getElementById('mail');

mail.addEventListener('click', function(){
    var temp = document.createElement('input');
    temp.setAttribute('type', 'text');
    temp.setAttribute('value', 'zenithwebdesigns@gmail.com');

    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    temp.remove();
    mail.innerHTML = '<i class="far fa-envelope"></i>Copied to clipboard!';

    setTimeout(function(){
        mail.innerHTML = '<i class="far fa-envelope"></i>';
    }, 1000);
});


/*  FADE IN ON SCROLL   */
var animateHTML = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'hidden',
            'fade-in-element'
          )
        } 
      }
    }
    return {
      init: init
    };
  };
animateHTML().init();