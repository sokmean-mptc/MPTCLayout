
let url = location.href.replace(/\/$/, '');
locationHash(url);
function locationHash(url){
    if (location.hash) {
        const hash = url.split('#');
        $('#tab-collapse a[href="#'+hash[1]+'"]').tab('show');
        $('#collapse-'+hash[1]).collapse('show');
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
