$(document).ready(function () {
    $("#select_audio")[0].play();

    setTimeout(function () {
        $("#1").hover(function () {
            $("#fighter")[0].play();
        });
        $("#2").hover(function () {
            $("#adventurer")[0].play();
        });
        $("#3").hover(function () {
            $("#monk")[0].play();
        });
        $("#4").hover(function () {
            $("#djinn")[0].play();
        })
    }, 2000)



    // $("#play").click(function () {
    //     $("#welcome")[0].play();
    //     $("#mssg").addClass(
    //         "clicked-mssg").queue("text",function () {
    //         setTimeout(function () {
    //             $("#mssg").text("Welcome to PlayTM!");}, 500);
    //         setTimeout(function () {
    //             $("#mssg").text("Place Hand On Scanner");}, 3100);
    //         setTimeout(function () {
    //             $("#mssg").text("Hi Kewal!");}, 6800);
    //         setTimeout(function () {
    //             window.location.href = "select_char.html";
    //         }, 10500);
    //     }).dequeue("text")
    // })
});

