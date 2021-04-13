import $ from 'jquery'
let url = location.href.replace(/\/$/, '');
locationHash(url);
function locationHash(url){
    if (location.hash) {

        const hash = url.split('#');

        $('#tab-collapse > a').removeClass('active');
        $('#accordion-tab-collapse > div').removeClass('active');
        $('#accordion-tab-collapse > div').removeClass('show');

        $('#accordion-tab-collapse .collapse-title .btn').addClass('collapsed');
        $('#accordion-tab-collapse .collapse').removeClass('show');

        // -------------
        
        $('#tab-collapse a[href="#'+hash[1]+'"]').addClass('active');
        $('#'+hash[1]).addClass('active show');

        $('#'+hash[1]+' .btn').removeClass('collapsed');
        $('#'+hash[1]+' .collapse').addClass('show');

        url = location.href.replace(/\/#/, '#');
        history.replaceState(null, null, url);
     
    }

}
$('#tab-collapse a[data-toggle="pill"]').on('click', function() {
    let newUrl;
    const hash = $(this).attr('href');
    newUrl = url.split('#')[0] + hash;
    newUrl += '/';
    history.replaceState(null, null, newUrl);
    locationHash(location.href.replace(/\/$/, ''));
});

$('button[data-toggle="collapse"]').on('click', function() {
    let newUrl;
    const hash = $(this).attr('data-tab');
    newUrl = url.split('#')[0] + hash;
    newUrl += '/';
    history.replaceState(null, null, newUrl);
    locationHash(location.href.replace(/\/$/, ''));
});
