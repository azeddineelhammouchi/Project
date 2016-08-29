'use strict';

    // ******************************************************* VARIABELS **************************************************************** //   



    //CIJFERS
   
var muziekbegin;
var een;
var twee;
var uitkomst;
var level;
var goedeAntwoord;
var correctaudio;
var fautaudio;
var unlock;
var huidigeLevel = 0;
var tellerLevel = 1;
var goedeAntwoord = 0;









    // ********************************************************* Startpagina ****************************************************************** //


$(document).ready(function () {
    correctaudio = $("#correctaudio")[0];
    fautaudio = $("#fautaudio")[0];

    muziekbegin = $("#Audio")[0];
    muziekbegin.play();
    $("#levels").fadeOut(0);
    $("#spel").fadeOut(0);
    $("#resultaatPagina").fadeOut();

    $("#correct").fadeOut(0);
    $("#error").fadeOut(0);


    $("#btnplay").click(openLevels);


    $("#ber").html(een + " + " + twee + " = ");
    $("#button").click(checkOK); 
});




    // ************************************************** AUDIO ON/OFF *************************************************************** //



$(function () {
    var muteBool = false;

    $("#soundlogo").click(function () {
        if (muteBool === false) {
            $("#soundlogo").css('background-color', 'red');
            $("audio").prop('muted', true);
            muteBool = true;
        } else {
            $("audio").prop('muted', false);
            $("#soundlogo").css('background-color', 'silver');
            muteBool = false;
        }
    });
});





    // ********************************************************* FUNCTIONS ************************************************************* //


    // ************************************** OPEN DE PAGINA MET VERSCHILLENDE LEVELS *********************************** //


function openLevels() {

    $("#startpagina").fadeOut(0);
    $("#resultaatPagina").fadeOut(0);
    $("#levels").fadeIn(0);


    muziekbegin = $("#Audio")[0];
    muziekbegin.play();


    $("#level1").click(openLevel1);


    //******* Het blokkeren & beschikbaar maken van Level 2 & 3 ************* //

    if (unlock >= 1) {
        $("#level2").click(openLevel2);
        huidigeLevel = 1;

        $("#level2").mouseover(function () {

            $("#level2").css('background', 'firebrick');
            $("#level2").css('cursor','pointer'); 
        });


        $("#level2").mouseout(function () {

            $("#level2").css('background', 'red');

        });


    }

    if (unlock >= 2) {
        $("#level3").click(openLevel3);

        $("#level3").mouseover(function () {

            $("#level3").css('background', 'firebrick');
            $("#level3").css('cursor', 'pointer');

        });

        $("#level3").mouseout(function () {

            $("#level3").css('background', 'red');

        });
    }

    tellerLevel = 1;
    goedeAntwoord = 0;


}








    // ************************************** Level1 *********************************** //


function openLevel1() {

    level = 1;

    een = Math.floor(Math.random() * 9);
    twee = Math.floor(Math.random() * 9);

    uitkomst = een + twee;

    $("#spel").fadeIn(0);
    $("#levels").fadeOut(0);
    $("#resultaatPagina").fadeOut(0);




    $("#ber").html(een + " + " + twee + " = ");
    $("#button").click(checkOK);
    muziekbegin.pause();

    $("#AntwoordResultaat").css("font-size", "0.5em");

}

    // ************************************** Level2 *********************************** //


function openLevel2() {
        
    level = 2;

    een = Math.floor(Math.random() * 100);
    twee = Math.floor(Math.random() * 100);

    uitkomst = een + twee;


    $("#levels").fadeOut(0);
    $("#spel").fadeIn(0);



    $("#ber").html(een + " + " + twee + " = ");
    $("#button").click(checkOK);
    muziekbegin.pause();
}



    // ************************************** Level3 *********************************** //


function openLevel3() {
    
    
    
    level = 3;

    een = Math.floor(Math.random() * 1000);
    twee = Math.floor(Math.random() * 1000);

    uitkomst = een + twee;


    $("#levels").fadeOut(0);
    $("#spel").fadeIn(0);


    $("#ber").html(een + " + " + twee + " = ");
    $("#button").click(checkOK);
    muziekbegin.pause();

}


    // **************************************************** CHECKOK ************************************************************** //

    //*********** NA KIJKEN OF HET VALUE IN DE BOX JUIST OF FOUTT IS *****//






function checkOK() {
    tellerLevel++;

    uitkomst = een + twee;

    var resultaat = document.getElementById('externR').value;

    if (resultaat == uitkomst) {
        goedeAntwoord++;

        $("#feedback").text("Good !");
        correctaudio.play();




            /******** IMG JUISTE ANTWOORD *************/

        $("#correct").fadeIn(0);

        $("#correct").animate({
            width: '200px',
            height: '200px'
        }, 450);

        setTimeout(function () {
            $("#correct").css("width", "80px");
            $("#correct").css("height", "80px");
            $("#correct").fadeOut(0);
        }, 452);

    } else {
        $("#feedback").text("BAD MAN !");
        fautaudio.play();



            /******** IMG FOUTE ANTWOORD ***********/

        $("#error").fadeIn(0);

        $("#error").animate({
            width: '200px',
            height: '200px'
        }, 450);

        setTimeout(function () {
            $("#error").css("width", "80px");
            $("#error").css("height", "80px");
            $("#error").fadeOut(0);
        }, 452);

    }


        //*** Animatie bij juiste en slechte Antwoord *****//


    $("#feedback").animate({
        marginLeft: '50%'
    }, 700);
    setTimeout(function () {
        $("#feedback").text("");
    }, 701);



        //**********************Random function voor de verschillende levels tientallen, hondertallen en duizendtallen ****** /////////////

    setTimeout(function () {

        if (tellerLevel < 20) {


            if (level == 1) {
                een = Math.floor(Math.random() * 9);
                twee = Math.floor(Math.random() * 9);
            }

            if (level == 2) {
                een = Math.floor(Math.random() * 100);
                twee = Math.floor(Math.random() * 100);
            }

            if (level == 3) {
                een = Math.floor(Math.random() * 1000);
                twee = Math.floor(Math.random() * 1000);
            }


            /*************UITPUT************ */

            $("#ber").html(een + " + " + twee + " = ");

            /******** TEKST = LEEG & TERUG OP ZIJN PLAATS*********/


            $("#feedback").animate({
                marginLeft: '0%'
            }, 1);
            $("#externR").val(0);

        }

            // *************** Het weergeven van Het resultaat via resultaatPagina ************* //

        if (tellerLevel >= 20) {

            $("#spel").fadeOut();
            $("#resultaatPagina").fadeIn();
            $("#ScoreOp10").html(("Score:" + " " + goedeAntwoord / 2) + "/10");

            $("#AntwoordResultaat").animate({
                fontSize: '4em'
            }, 1000);

                // ************************ Antwoord bij slecht of  goed resultaat + buttons ****************************/
            if ((goedeAntwoord / 2) >= 5) {

                $("#AntwoordResultaat").html("U bent Geslaagd Einstein");

                if (huidigeLevel === 0) {
                    unlock = 1;
                }


                if (huidigeLevel === 1 && unlock === 1) {
                    unlock = 2;
                }

            } else {
                $("#AntwoordResultaat").html("U bent NIET geslaagd, probeer opnieuw!!");
            }

            $("#herstart").click(openLevel1);
            $("#LevelMenuPagina").click(openLevels);

        }


    }, 1000);

}






    // ********************************************************* ENTER TOETS ********************************************************** //


$(function () {
    $(document).keydown(function (a) {

        if (a.keyCode === 13) {
            checkOK();
        }
        if (a.keyCode === 65) {
            goedeAntwoord = 12;
        }


    });
});










