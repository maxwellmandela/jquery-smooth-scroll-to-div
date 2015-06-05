/*
* Jquery Scroll to Div plugin
* Author : Maxwell Mandela
*/
$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        $(target).css("height", $(document).height());
    }

});