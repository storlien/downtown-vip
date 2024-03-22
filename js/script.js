function getName() {
    url = window.location.href;

    var regex = new RegExp('[?&]' + "name" + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);

    if (!results) return "";
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getGuestCount() {
    url = window.location.href;

    var regex = new RegExp('[?&]' + "guestcount" + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);

    if (!results) return "";
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getDate() {
    url = window.location.href;

    var regex = new RegExp('[?&]' + "date" + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);

    if (!results) return "";
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function redirectToCheckedin(name) {
    window.location.href = "checkedin.html?name=" + name;
}