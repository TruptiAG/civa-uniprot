function init(){
    //var counterContainer = document.getElementById("website_counter");
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

        var counter= <?php echo $counterVal ?>;

        CountVisitors(visitCount,counter);
    }
}
function CountVisitors(visitCount,counter){
    var counterContainer=document.getElementById("website_counter");

    //counterContainer.innerHTML = visitCount;
    counterContainer.innerHTML = "<span style=\"color:white\">" + "Total Visitors  : " + "</span> "+ "<span style=\"color:white\">" + visitCount + "</span>";

counterContainer.innerHTML = "<span style=\"color:white\">" + "Total Visitors  : " + "</span> "+ "<span style=\"color:white\">" + counter+ "</span>";



}
document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        init();
    }
});

//ref : http://net-informations.com/js/err/null.htm
