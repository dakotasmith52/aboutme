src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"

window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});



$(document).ready(function() {
    $('.ul').localScroll({duration:800});
});

document.addEventListener("onscroll",scroll);

function onScroll(evt) {
    console.log("Does this work?");
}
