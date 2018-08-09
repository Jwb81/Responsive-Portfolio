$(document).ready(function() {
    // console.log($(window).height());
    // console.log($(document).height());
    
    if ($(document).height() > $(window).height()) {
        // alert("Vertical scrollbar!");
        $(".footer").css({"position": "relative"})
    }
})
