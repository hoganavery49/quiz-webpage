var questionNum = 0;

$(document).ready(function() {
    $("#extraControls").removeClass("hidden");

    setup();

    $("img").click(function() {
        $("#a"+questionNum).show();
        $("#next").show();
    });

    $("#next").click(nextQuestion);
    $("#restart").click(reset);
});

function setup() {
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#q1").hide();
    $("#q2").hide();
    $("#q3").hide();
    $("#a0").hide();
    $("#a1").hide();
    $("#a2").hide();
    $("#a3").hide();
    $("#next").hide();
    $("#endMessage").hide();
    $("#restart").hide();
}

function nextQuestion() {
    if(questionNum < 3) {
        $("#img"+questionNum).hide();
        $("#q"+questionNum).hide();
        $("#a"+questionNum).hide();
        $("#next").hide();
        questionNum += 1;
        $("#img"+questionNum).show();
        $("#q"+questionNum).show();
    } else {
        $("#img"+questionNum).hide();
        $("#q"+questionNum).hide();
        $("#a"+questionNum).hide();
        $("#next").hide();
        questionNum = 0;
        $("#endMessage").show();
        $("#restart").show();
    }
}

function reset() {
    $("#endMessage").hide();
    $("#restart").hide();
    $("#img0").show();
    $("#q0").show();
}
