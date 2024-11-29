function mapURL(latitude, longitude) {
    return 'https://www.openstreetmap.org/?mlat=' + latitude + '&mlon=' + longitude + '#map=16/' + latitude + '/' + longitude;
}

function groupTitle(group) {
    var s = "";
    if (group.title_as_en != null) { s += group.title_as_en; }
    if (group.title_as_en != null && group.title_as_cy != null) { s += "/<br>"; }
    if (group.title_as_cy != null) { s += group.title_as_cy; }
    return s;
}

function groupSubtitle(group) {
    var s = "";
    if (group.subtitle_as_en != null) { s += group.subtitle_as_en; }
    if (group.subtitle_as_en != null && group.subtitle_as_cy != null) { s += "/<br>"; }
    if (group.subtitle_as_cy != null) { s += group.subtitle_as_cy; }
    return s;
}

function groupPhone(group) {
    if (group.phone != null && group.phoneCountryCode != null && group.phoneLocalCode != null) {
        return group.phoneGlobalPrefix + ' (' + group.phoneLocalPrefix + ') ' + group.phone
    }
    return null;
}

function groupURL(group) {
    if (group.websiteURL != null) { return group.websiteURL; }
    if (group.facebookURL != null) { return group.facebookURL; }
    if (group.instagramURL != null) { return group.instagramURL; }
    if (group.tiktokURL != null) { return group.tiktokURL; }
    if (group.youtubeURL != null) { return group.youtubeURL; }
    if (group.twitterURL != null) { return group.twitterURL; }
    if (group.latitude != null && group.longitude != null) { return mapURL(group.latitude, group.longitude); }
    return null;
}

function groupNav(group) {
    var html = "";
    if (group.websiteURL   != null) { html += '<a href="' + group.websiteURL    + '"><i class="fa-solid fa-house"></i></a>' }
    if (group.calendarURL  != null) { html += '<a href="' + group.calendarURL   + '"><i class="fa-solid fa-calendar"></i></a>' }
    if (group.mapURL       != null) { html += '<a href="' + group.mapURL        + '"><i class="fa-solid fa-map"></i></a>' }
    if (group.facebookURL  != null) { html += '<a href="' + group.facebookURL   + '"><i class="fa-brands fa-facebook"></i></a>' }
    if (group.instagramURL != null) { html += '<a href="' + group.instagramURL  + '"><i class="fa-brands fa-instagram"></i></a>' }
    if (group.tiktokURL    != null) { html += '<a href="' + group.tiktokURL     + '"><i class="fa-brands fa-tiktok"></i></a>' }
    if (group.youtubeURL   != null) { html += '<a href="' + group.youtubeURL    + '"><i class="fa-brands fa-youtube"></i></a>' }
    if (group.twitterURL   != null) { html += '<a href="' + group.twitterURL    + '"><i class="fa-brands fa-twitter"></i></a>' }
    if (group.phone        != null) { html += '<a href="tel:' + group.phone     + '"><i class="fa-solid fa-phone"></i></a>' }
    if (group.mailto       != null) { html += '<a href="mailto:' + group.mailto + '"><i class="fa-regular fa-envelope"></i></a>' }


