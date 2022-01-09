function init(){
    var counterContainer = document.getElementById(".website_counter");
    var pagebody=document.getElementById("page_body");
    pagebody.onload=function(){

        var visitCount = localStorage.getItem("page_view");
        console.log(visitCount)
        // Check if page_view entry is present
        if (visitCount) {
            visitCount = Number(visitCount) + 1;
            localStorage.setItem("page_view", visitCount);
        } else {
            visitCount = 1;
            localStorage.setItem("page_view", 1);
        }
        CountVisitors(visitCount);
    }
}
function CountVisitors(visitCount){
    var counterContainer=document.getElementById("website_counter");
    counterContainer.innerHTML = visitCount;

}
document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        init();
    }
});

//ref : http://net-informations.com/js/err/null.htm