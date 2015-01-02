$(function() {

    var recentActive = $('.main-nav>#active');
    $('.main-nav').on('click', 'li', function() {
        recentActive.removeAttr('id');
        recentActive = $(this);
        $(this).attr('id', 'active');
    });

    $('#arrival').selectmenu();
});