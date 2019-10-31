function getParameterByName(name, def, url) {
    if (!def) def = '';
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return def;
    if (!results[2]) return def;
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

new Vue({
    el: '#searchform',
    data: {
        searchradio: getParameterByName('target', 'eds'),
        radios: [
            { text: 'Find books', value: 'catalogue' },
            { text: 'Find books and articles', value: 'eds' },
            { text: 'Find library information', value: 'all' }
        ],
        links: {
            catalogue: 'advancedsearch',
            eds: 'http://search.ebscohost.com/login.aspx?authtype=ip,guest,shib&amp;custid=s4895734&amp;groupid=main&amp;site=eds&amp;authpid=eds',
            all: 'http://guides.library.lincoln.ac.uk/'
        }
    },
});