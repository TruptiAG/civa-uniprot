function init(){


        liveViews(response);

}
function liveViews(response) {
    document.getElementById('visits').innerText = response.value;
}
// The function is called in the CDN on HTML
//https://javascript.plainenglish.io/how-to-count-page-views-with-the-count-api-afc9369c1f8f