$(".SendBtn").on("click touchstart", function (evt) {
    evt.preventDefault();
    $(this).addClass("fly");
    that = this
    setTimeout(function() {
        $(that).removeClass("fly");
    }, 5400)
});