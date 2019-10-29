$(document).ready(function() {
    checkPages();

	$('.site-page').find('a').on('click', function(event){
        event.stopPropagation();
    });

	$('.site-menu').on('click', function(event){
        $('.site-overlay').addClass('is-visible');
        $('body').addClass('nav-open');
    });

    $('.site-overlay').on('click', function(event){
        $('.site-overlay').removeClass('is-visible');
        $('body').removeClass('nav-open');
    });
});

function checkPages(){
    $('.site-page:not(.is-active) .page-header').on('click', function(){
        $('.site-page .page-header').off('click');

        $('.site-page').removeClass('is-active');
        $('.page-article').removeClass('is-visible');
        $(this).parent().addClass('is-active');
        setTimeout(function(){
            $('.site-page.is-active').find('.page-article').addClass('is-visible');
        }, 500);

        checkPages();
    })
}
