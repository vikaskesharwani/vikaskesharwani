$(document).ready(function(){
    
    $surface = $('.surface');
    $car = $('.car');
    $card = $('.moving-car .card-container');
    $meet = $('.meet');

    $(document).on('keypress',function(e){
        if(e.which == 13){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
            $($card).toggleClass('moveLeft');
            $($meet).toggleClass('fade-in');
        }
    });


});