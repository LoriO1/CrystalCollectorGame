// my little pony: elements of harmony - crystal collector game

// global variables
var magicNum = 0;
var scoreWins = 0;
var scoreLosses = 0;
var addClicks = 0;
var total = 0;


function start() {
    magicNum = 0;
    addClicks = 0;
    total = 0;// each time the player clicks a crystal, the total goes up
    total = addClicks;
    // display the ongoing total in the browser
    document.getElementById("guessesRemaining").innerHTML = total;
    // console.log("magicNum", magicNum);
    // magicNum = $("#magicNumber").html(magicNum);
    setup();
}
start();
function setup() {

    // $(".crystals").html("");
    var crystalImages = $(".crysPic");
    for (var i = 0; i < 5; i++) {

        // generate a random value between 1-12 for each crystal
        var crysRandNums = Math.floor(Math.random() * 12) + 1;
        console.log("Crystal number", crysRandNums);
        $(crystalImages[i]).attr("val", crysRandNums)
        // create class and attribute for the crysRandNums to go
        // var crystal = $("<div>");
        // crystal.attr({
        //     "class": "crystal",
        //     "val": crysRandNums
        // });
        // append those divs with the crystal values 
        // $(".crystals").append(crystal);

        // create a random value between 1-4 for each random crystal value to be multiplied by
        // var multiplier = times[Math.floor(Math.random()*times.length)];
        var multiplier = Math.floor(Math.random() * 4) + 1;
        console.log("times", multiplier);

        // multiply each random crystal value by a random value betewen 1-4 
        var calc = function (crysRandNums, multiplier) {
            return (crysRandNums * multiplier);
        }
        console.log("calc", calc(crysRandNums, multiplier));
        // magic number = all 5 calcs added together
        magicNum += calc(crysRandNums, multiplier);
    }

    console.log("magicNum", magicNum);
    magicNum = $("#magicNumber").html(magicNum);

    // $("#magicNumber").html("Magic Number: " + magicNum);
}

// when the player clicks a crystal, add up the values towards matching the magic number
$(".crysPic").on("click", function () {
    // ensure the var num is a number not a string
    var num = parseInt($(this).attr("val"));
    console.log("clicked crystal num", typeof num);
    // when the player keeps clicking, add more onto their total sum
    addClicks += num;
    total = $("#guessesRemaining").html(addClicks);

    console.log("additional clicks", addClicks);
    // extract the current magic number
    magicNum = $("#magicNumber").text();
    console.log("extracted magic num", magicNum);

    // if the player reaches the magic number they win, but if they exceed the magic number they lose

    //scenario: player won
    if (addClicks == magicNum) {
        var num = parseInt($(this).attr("val"));
        scoreWins++;
        alert("hooray - you won a magic crystal!!");
        document.getElementById("wins").innerHTML = scoreWins;
        $("#gifs").append("<img class='star' src='./assets/images/crystal-magic_icon.png'/>");
        setTimeout(function () {
            $(".star").remove()
            start();
            addClicks = 0;
            event.preventDefault();

        }, 2000)

        //scenario: player lost
    } else if (addClicks > magicNum) {
        scoreLosses++;
        alert("you lost this round. but don't give up - try again!");
        document.getElementById("losses").innerHTML = scoreLosses;
            start();
            addClicks = 0;        
    }
});