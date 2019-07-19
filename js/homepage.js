$(document).ready(function () {
    $("#mssg").addClass("mssg");
    $("#play").addClass("button-resize").mousedown(function () {
        $(".button-resize").css("border", ".9em solid rgba(39, 84, 38, 0.97)");
    }).mouseup(function () {
        $(".button-resize").css("border", "none");
    }).click(function () {
        $("#welcome")[0].play();
        $("#mssg").addClass(
            "clicked-mssg").queue("text",function () {
            setTimeout(function () {
                $("#mssg").text("Welcome to PlayTM!");}, 500);
            setTimeout(function () {
                $("#mssg").text("Place Hand On Scanner");}, 3100);
            setTimeout(function () {
                $("#mssg").text("Hi Kewal!");}, 6800);
            setTimeout(function () {
                window.location.href = "select_char.html";
            }, 10500);
        }).dequeue("text")
    }).dblclick(function () {
        window.location.href = "selectoption.html";
    })
});

