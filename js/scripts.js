$(document).ready(function(){
    //carousel
    $("#mycarousel").carousel( { interval: 2000 } );

    //popover
    $('[data-toggle="popover"]').popover()
    $('.popover-dismiss').popover({
        trigger: 'focus'
    })

    //Tooltip
    $('[data-toggle="tooltip"]').tooltip()
});
