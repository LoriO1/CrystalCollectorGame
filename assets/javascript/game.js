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






// // movie title object
// var titleObject = {
//     "the shining": {
//     "gif": "<img src='./assets/images/Shining.gif'/>",
//     },  
//     "psycho": {
//     "gif": "<img src='./assets/images/Psycho.gif'/>",    
//     },
//     "halloween": {
//     "gif": "<img src='./assets/images/Halloween.gif'/>",    
//     },
//     "scream": {
//     "gif": "<img src='./assets/images/Scream.gif'/>",    
//     },
//     "the conjuring": {
//     "gif": "<img src='./assets/images/Conjuring.gif'/>",    
//     },
//     "jaws": {
//     "gif": "<img src='./assets/images/Jaws.gif'/>",    
//     },
//     "rosemarys baby": {
//     "gif": "<img src='./assets/images/Rosemary.gif'/>",    
//     },
//     "nightmare on elm street": {
//     "gif": "<img src='./assets/images/Nightmare.gif'/>",    
//     },
//     "it": {
//     "gif": "<img src='./assets/images/IT.gif'/>",    
//     },
//     "silence of the lambs": {
//     "gif": "<img src='./assets/images/SilenceLambs.gif'/>",    
//     },
//     "carrie": {
//     "gif": "<img src='./assets/images/Carrie.gif'/>",    
//     },
//     "saw": {
//     "gif": "<img src='./assets/images/Saw.gif'/>",    
//     },
//     "the amityville horror": {
//     "gif": "<img src='./assets/images/Amityville.gif'/>",    
//     },
//     "poltergeist": {
//     "gif": "<img src='./assets/images/Poltergeist.gif'/>",    
//     },
//     "the exorcist": {
//     "gif": "<img src='./assets/images/Exorcist.gif'/>",    
//     },
// }

// var movieTitles = Object.keys(titleObject)

// // variables
//     var playerName = "";
//     var randoSelectedTitle = "";
//     var titleLetters = [];
//     var blanks = 0;
//     var guessedLetters = "";
//     // var blanksAndSuccesses = [];
//     var wrongLetters = [];
//     var scoreWins = 0;
//     var scoreLosses = 0;
//     // var lettersToGuess = 7;


// start function not triggered until player submits player name
    // start();

    // document.getElementById("submitBtn").addEventListener ("click", function (event) {
    //     event.preventDefault();    

    //     playerName = document.getElementById("playername").value;
    //     document.getElementById("startDisplay").textContent = "welcome " + playerName + ", let's play a game. type a letter if you dare.";     
    //     document.getElementById("playerForm").style.display = "none";   

    //     if (playerName) {  
    //     document.onkeyup = function (event) {  
    //     if (event.keyCode >= 65 && event.keyCode <= 90) {
    //         guessedLetters = event.key;     

                // convert caps to lowercase
                // document.onkeyup=function (event){
                //     var caps = event.key.toLowerCase();
                //     guessedLetters.push(caps);
                //     console.log(guessedLetters); 
                // }   

            // if (wrongLetters.indexOf(guessedLetters) !== -1) {
            //         alert("that letter was already used");
            //     return;
            // }
            // if (blanksAndSuccesses.indexOf(guessedLetters) !== -1) {
            //         alert("that letter was already used");
            //     return;
            // } 

            // match(guessedLetters);
            // end();  
    //     }  
    //     };
    // } 
    // });



// function end() {
//     document.getElementById("guessesRemaining").innerHTML = total;
//     // document.getElementById("movie").innerHTML = blanksAndSuccesses.join("");
//     // document.getElementById("spentLetters").innerHTML = wrongLetters.join("");

//     // scenario: player wins
//     if (titleLetters.toString() === blanksAndSuccesses.toString()) {
//         // scoreWins++;
//         //     alert("winner, winner; fava beans for dinner!");
//         //         document.getElementById("wins").innerHTML = scoreWins;

//         var movieEntries = Object.entries(titleObject)
//         for (var i = 0; i < movieEntries.length; i++) {
//             var titles = movieEntries[i][0]
//             var gifs = movieEntries[i][1]["gif"]
//                 document.getElementById("wrongLetters").style.visibility = "hidden";    
//                 document.getElementById("spentLetters").style.visibility = "hidden"; 

//             if (titleLetters.join('') === titles) {
//                 document.getElementById("gifs").style.display = "block";
//                 document.getElementById("gifs").innerHTML = gifs;            
//             }        
//         }

//         setTimeout(function() {
//             document.getElementById("gifs").style.display = "none"; 
//             document.getElementById("wrongLetters").style.visibility = "initial";    
//             document.getElementById("spentLetters").style.visibility = "initial"; 

//             start();
//         }, 5000) 
//     }

//     // scenario: player loses
//     else if (total == magicNum) {
//         scoreLosses++;
//             alert("you lose. try again!");
//                 document.getElementById("losses").innerHTML = scoreLosses;
//                 document.getElementById("movie").innerHTML = titleLetters.join("");

//         var movieEntries = Object.entries(titleObject)
//         for (var i = 0; i < movieEntries.length; i++) {
//             var titles = movieEntries[i][0]
//             var gifs = movieEntries[i][1]["gif"]
//                 document.getElementById("wrongLetters").style.visibility = "hidden";    
//                 document.getElementById("spentLetters").style.visibility = "hidden"; 

//             if (titleLetters.join('') === titles) {
//                 document.getElementById("gifs").style.display = "block";
//                 document.getElementById("gifs").innerHTML = gifs;            
//             }        
//         }

//         setTimeout(function() {
//             document.getElementById("gifs").style.display = "none"; 
//             document.getElementById("wrongLetters").style.visibility = "initial";    
//             document.getElementById("spentLetters").style.visibility = "initial";

//             start();
//         }, 5000)
//     }
// }

// $(document).ready(function(){
//     // $(window).load(function(){        
//     //     $('#myModal').modal('show');
//     // }); 

//     var _originalSize = $(window).width() + $(window).height()
//     $(window).resize(function(){
//         if($(window).width() + $(window).height() != _originalSize){
//             console.log("keyboard show up");
//         $(".copyright_link").css("position","relative");  
//         }
//         else{
//             console.log("keyboard closed");
//         $(".copyright_link").css("position","fixed");  
//         }
//     });         
// });