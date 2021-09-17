var Character = 0
var Round = 0
var i;

var Opac = 1

function Instructions() {
    document.getElementById("Instructions").hidden = false
    document.getElementById("Instructions").classList.remove("FadeOut");
    document.getElementById("Instructions").classList.add("FadeIn");
    document.getElementById("InstructionsButton").disabled = false
    document.getElementById("InstructionsLink").style.pointerEvents = ""
}

function InstructionReturn() {
    document.getElementById("Instructions").classList.remove("FadeIn");
    document.getElementById("Instructions").hidden = true;
}

function StartPilot() {
    document.getElementById("Round0").hidden = false;
    document.getElementById("Round0").classList.add("FadeIn");
    document.getElementById("PilChoice0Start").classList.add("FadeIn");
    document.getElementById("PilChoice0Table").classList.add("FadeIn");

    //Pilot Tags are across the different Rounds, this goes through and unhides them all 
    var PilotTags = document.querySelectorAll("div.Pilot");
    for (i = 0; i < PilotTags.length; i++) {
        PilotTags[i].hidden = false;
    };
    document.getElementById("Start").hidden = true;
    Character = 1;
    Round = 0;
};

function StartOperator() {
    document.getElementById("Round0").hidden = false;
    document.getElementById("Round0").classList.add("FadeIn");
    document.getElementById("OperatorChoice0Start").classList.add("FadeInDelay2");
    document.getElementById("OperatorChoice0Table").classList.add("FadeInDelay2");

    //Operator Tags are across the different Rounds, this goes through and unhides them all 
    var OperatorTags = document.querySelectorAll("div.Operator");
    for (i = 0; i < OperatorTags.length; i++) {
        OperatorTags[i].hidden = false;
    };
    document.getElementById("Start").hidden = true;
    Character = 2;
    Round = 0;
};

function Next() {
    if (Character == 1) {
        switch (Round) {
            case 0:
                document.getElementById("PilotShipDescription").innerHTML = " " + document.getElementById("PilotShipChoice").value;
                document.getElementById("PilotMoodDescription").innerHTML = " " + document.getElementById("PilotMoodChoice").value;
                document.getElementById("PilotNameDescription").innerHTML = " " + document.getElementById("PilotNameChoice").value;
                document.getElementById("OperatorNameDescription").innerHTML = " " + document.getElementById("OperatorNameChoice").value;

                var OperatorNames = document.querySelectorAll("span.OperatorName");
                for (var i = 0; i < OperatorNames.length; i++) {
                    OperatorNames[i].innerHTML = document.getElementById("OperatorNameChoice").value
                }

                document.getElementById("PilotShipDescription").classList.add('FadeIn');
                document.getElementById("PilotMoodDescription").classList.add('FadeIn');
                document.getElementById("PilotNameDescription").classList.add('FadeIn');
                document.getElementById("OperatorNameDescription").classList.add('FadeIn');

                document.getElementById("PilotShipDescription").style.fontWeight = "bold";
                document.getElementById("PilotMoodDescription").style.fontWeight = "bold";
                document.getElementById("PilotNameDescription").style.fontWeight = "bold";
                document.getElementById("OperatorNameDescription").style.fontWeight = "bold";

                document.getElementById("PilotShipChoice").classList.add('FadeOut');
                document.getElementById("PilotMoodChoice").classList.add('FadeOut');
                document.getElementById("PilotNameChoice").classList.add('FadeOut');
                document.getElementById("OperatorNameChoice").classList.add('FadeOut');
                document.getElementById("PilotChoice0Txt").classList.add('FadeOutHalf');

                document.getElementById("PilotShipChoice").disabled = true;
                document.getElementById("PilotMoodChoice").disabled = true;
                document.getElementById("PilotNameChoice").disabled = true;
                document.getElementById("OperatorNameChoice").disabled = true;

                document.getElementById("PilotNext0").hidden = true;
                document.getElementById("Round1").hidden = false;
                document.getElementById("Round1").classList.add("FadeIn");

                Round = 1;
                break;
            case 1:
                var Roll1 = parseInt(document.getElementById("PilotRoll1Input").value)
                var Roll1Err = true

                switch (Roll1) {
                    case 1:
                    case 2:
                        document.getElementById("PilotRoll1Result").innerHTML = "- Your call is weak, and your voice will be filtered, strained, and distorted. Keep this in mind as you communicate.";
                        break;
                    case 3:
                    case 4:
                        document.getElementById("PilotRoll1Result").innerHTML = "- There are brief moments of static interrupt what is otherwise a clean line.";
                        break;
                    case 5:
                    case 6:
                        document.getElementById("PilotRoll1Result").innerHTML = "- Your call comes through loud and clear.";
                        break;
                    default:
                        document.getElementById("PilotRoll1Result").innerHTML = "- That number is too small or too large";
                        Roll1Err = false;
                        break;
                }
                if (Roll1Err) {
                    //Hide and Show all round 1 stuff
                    document.getElementById("PilotRoll1Input").classList.add('FadeOut');
                    document.getElementById("PilotRoll1Txt").classList.add('FadeOutHalf');
                    document.getElementById("PilotRoll1Input").disabled = true;
                    document.getElementById("PilotRoll1Result").classList.add('FadeIn');
                    document.getElementById("PilotRound1End").hidden = false;
                    document.getElementById("PilotRound1End").classList.add('FadeInDelay2');

                    Round = 1.5;
                }
                break;
            case 1.5:
                //Prep all round 2 stuff
                document.getElementById("PilotNext1").hidden = true;
                document.getElementById("Round2").hidden = false;
                document.getElementById("Round2").classList.add("FadeIn");
                Round = 2;
                break;
            case 2:
                var Roll2 = parseInt(document.getElementById("PilotRoll2Input").value)
                var Roll2Err = true

                switch (Roll2) {
                    case 1:
                    case 2:
                        document.getElementById("PilotRoll2Result").innerHTML = "- You are disoriented. You’ve been away so long and nothing looks familiar- you are lost looking at your own home. It is up to the operator to find you in the sky.";
                        break;
                    case 3:
                    case 4:
                        document.getElementById("PilotRoll2Result").innerHTML = "- The display of city lights is confusing and messy- it has changed while you were away. But you round the edge of the planet into the sunlight and soon you pick up a familiar coastline, then a mountain range, then a river. A memory emerges, and you can approximate your position.";
                        break;
                    case 5:
                    case 6:
                        document.getElementById("PilotRoll2Result").innerHTML = "- It is all as you’ve remembered it. You have rehearsed this moment thousands of times. You know exactly where you are.";
                        break;
                    default:
                        document.getElementById("PilotRoll2Result").innerHTML = "- That number is too small or too large";
                        Roll2Err = false;
                        break;
                }
                if (Roll2Err) {
                    //Hide and Show all round 2 stuff
                    document.getElementById("PilotRoll2Txt").innerHTML += Roll2
                    document.getElementById("PilotRoll2Input").classList.add('FadeOut');
                    document.getElementById("PilotRoll2Txt").classList.add('FadeOutHalf');
                    document.getElementById("PilotRoll2Input").disabled = true;
                    document.getElementById("PilotRoll2Result").classList.add('FadeIn');
                    document.getElementById("PilotRound2End").hidden = false;
                    document.getElementById("PilotRound2End").classList.add('FadeInDelay2');

                    Round = 2.5;
                }
                break;
            case 2.5:
                //Prep all round 3 stuff
                document.getElementById("PilotNext2").hidden = true;
                document.getElementById("Round3").hidden = false;
                document.getElementById("Round3").classList.add("FadeIn");
                Round = 3;
                break;
            case 3:

                //Hide and Show all round 3 stuff
                document.getElementById("PilotChoice3Table").hidden = false
                document.getElementById("PilotChoice3Table").classList.add("FadeIn");

                document.getElementById("PilotChoice3Txt").hidden = false
                document.getElementById("PilotChoice3Txt").classList.add("FadeInDelay2");

                document.getElementById("PilotChoice31").hidden = false
                document.getElementById("PilotChoice31").classList.add("FadeInDelay4");
                document.getElementById("PilotChoice32").hidden = false
                document.getElementById("PilotChoice32").classList.add("FadeInDelay4");
                document.getElementById("PilotChoice33").hidden = false
                document.getElementById("PilotChoice33").classList.add("FadeInDelay4");

                Round = 3.5;
                break;
            case 3.5:
                //Prep all round 4 stuff
                document.getElementById("PilotNext3").hidden = true;
                document.getElementById("Round4").hidden = false;
                document.getElementById("Round4").classList.add("FadeIn");
                document.getElementById("PilotRoll4Txt").hidden = false;
                document.getElementById("PilotRoll4Txt").classList.add("FadeInDelay2");
                Round = 4;
                break;
            case 4:
                var Roll4 = parseInt(document.getElementById("PilotRoll4Input").value)
                var Roll4Err = true

                switch (Roll4) {
                    case 1:
                    case 2:
                        document.getElementById("PilotRoll4Result").innerHTML = "- Short on fuel, you section-off and depressurize a portion of your ship, letting the escaping air push your craft down into the very upper atmosphere. You’ll miss the ease of breathing- but hopefully not for much longer, as you begin to slow and descend towards the planet.";
                        break;
                    case 3:
                    case 4:
                        document.getElementById("PilotRoll4Result").innerHTML = "- You unfurl a sail, catching against the tiny traces of atmosphere around you. It quickly shreds against a litany of microparticles, pulling against the frame of your ship, but it effectively slows you. You begin, ever so slightly, to descend.";
                        break;
                    case 5:
                    case 6:
                        document.getElementById("PilotRoll4Result").innerHTML = "- You flip your craft around, firing directly against your rotational speed. As you slow the speed of your orbit, you begin to gently descend.";
                        break;
                    default:
                        document.getElementById("PilotRoll4Result").innerHTML = "- hat number is too small or too large";
                        Roll2Err = false;
                        break;
                }
                if (Roll4Err) {
                    //Hide and Show all round 4 stuff
                    document.getElementById("PilotRoll4Txt").innerHTML += Roll4
                    document.getElementById("PilotRoll4Input").classList.add('FadeOut');
                    document.getElementById("PilotRoll4Txt").classList.add('FadeOutHalf');
                    document.getElementById("PilotRoll4Input").disabled = true;
                    document.getElementById("PilotRoll4Result").classList.add('FadeIn');
                    document.getElementById("PilotRound4End").hidden = false;
                    document.getElementById("PilotRound4End").classList.add('FadeInDelay2');

                    Round = 4.5;
                }
                break;
            case 4.5:
                //Prep all round 5 stuff
                document.getElementById("PilotNext4").hidden = true;
                document.getElementById("Round5").hidden = false;
                document.getElementById("Round5").classList.add("FadeIn");
                Round = 5;
                break;
            case 5:

                //Hide and Show all round 5 stuff
                document.getElementById("PilotChoice5Table").hidden = false
                document.getElementById("PilotChoice5Table").classList.add("FadeIn");

                document.getElementById("PilotChoice5Txt").hidden = false
                document.getElementById("PilotChoice5Txt").classList.add("FadeInDelay2");

                document.getElementById("PilotChoice51").hidden = false
                document.getElementById("PilotChoice51").classList.add("FadeInDelay4");
                document.getElementById("PilotChoice52").hidden = false
                document.getElementById("PilotChoice52").classList.add("FadeInDelay4");
                document.getElementById("PilotChoice53").hidden = false
                document.getElementById("PilotChoice53").classList.add("FadeInDelay4");

                Round = 5.5;
                break;
            case 5.5:
                //Prep all round 6 stuff
                document.getElementById("PilotNext5").hidden = true;
                document.getElementById("Round6").hidden = false;
                document.getElementById("Round6").classList.add("FadeIn");
                document.getElementById("PilotRoll6Txt").hidden = false;
                document.getElementById("PilotRoll6Txt").classList.add("FadeInDelay2");
                Round = 6;
                break;
            case 6:
                var Roll6 = parseInt(document.getElementById("PilotRoll6Input").value)
                var Roll6Err = true

                switch (Roll6) {
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        document.getElementById("PilotRoll6Result").innerHTML = "- Separation fails. You can hear the connective bolts creaking but they do not give. You begin to spin wildly as bits of your ship are torn away. The sounds are terrifying. But this isn’t the end; you are still shielded in your module, you’re still moving towards the ground. You just need to get lucky in where and how you land. You catch your breath. You brace yourself.";
                        break;
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        document.getElementById("PilotRoll6Result").innerHTML = "- Separation complains. The ship wasn’t made for this. The skeleton of your craft pulls you off-balance as your module disconnects from first one side, then another. You’re sideways, but falling faster, and away from the pieces. You fight to maintain balance, but you are free.";
                        break;
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        document.getElementById("PilotRoll6Result").innerHTML = "- Separation eases. You are proud of this ship that has carried you so far and then so gently leaves you, burning up around you like a firework. Your module falls forward, and you are amazed to find that “forward” has meaning.";
                        break;
                    default:
                        document.getElementById("PilotRoll6Result").innerHTML = "- That number is too small or too large";
                        Roll2Err = false;
                        break;
                }
                if (Roll6Err) {
                    //Hide and Show all round 6 stuff
                    document.getElementById("PilotRoll6Txt").innerHTML += Roll6
                    document.getElementById("PilotRoll6Input").classList.add('FadeOut');
                    document.getElementById("PilotRoll6Txt").classList.add('FadeOutHalf');
                    document.getElementById("PilotRoll6Input").disabled = true;
                    document.getElementById("PilotRoll6Result").classList.add('FadeIn');
                    document.getElementById("PilotRound6End").hidden = false;
                    document.getElementById("PilotRound6End").classList.add('FadeInDelay2');

                    Round = 7;
                }
                break;
            case 7:

                //Hide and Show all round 7 stuff
                document.getElementById("PilotNext6").hidden = true;

                document.getElementById("Round7").hidden = false;
                document.getElementById("Round7").classList.add("FadeIn");

                document.getElementById("PilotChoice7Txt").hidden = false
                document.getElementById("PilotChoice7Txt").classList.add("FadeDelay2");

                document.getElementById("PilotChoice71").hidden = false
                document.getElementById("PilotChoice71").classList.add("FadeDelay4");
                document.getElementById("PilotChoice72").hidden = false
                document.getElementById("PilotChoice72").classList.add("FadeDelay4");
                document.getElementById("PilotChoice73").hidden = false
                document.getElementById("PilotChoice73").classList.add("FadeDelay4");

                Round = 8;
                break;
            case 8:
                //All round 8 stuff
                document.getElementById("PilotNext7").hidden = true;
                document.getElementById("Round8").hidden = false;
                document.getElementById("Round8").classList.add("FadeIn");
                document.getElementById("PilotRound8Txt").hidden = false
                document.getElementById("PilotRound8Txt").classList.add("FadeInDelay2");
                document.getElementById("PilotRound8End").hidden = false
                document.getElementById("PilotRound8End").classList.add("FadeInDelay4");
                document.getElementById("PilotRound8End2").hidden = false
                document.getElementById("PilotRound8End2").classList.add("FadeInDelay12");
                Round = 9;
                break;
        }
    } else if (Character == 2) {
        console.log(Round);
        switch (Round) {
            case 0:
                document.getElementById("OperatorJobDescription").innerHTML = " " + document.getElementById("OperatorJobChoice").value;
                document.getElementById("OperatorVoiceDescription").innerHTML = " " + document.getElementById("OperatorVoiceChoice").value;
                document.getElementById("OpOperatorNameDescription").innerHTML = " " + document.getElementById("OpOperatorNameChoice").value;
                document.getElementById("OpPilotNameDescription").innerHTML = " " + document.getElementById("OpPilotNameChoice").value;

                var PilotNames = document.querySelectorAll("span.PilotName");
                for (var i = 0; i < PilotNames.length; i++) {
                    PilotNames[i].innerHTML = document.getElementById("OpPilotNameChoice").value
                }

                document.getElementById("OperatorJobDescription").classList.add('FadeIn');
                document.getElementById("OperatorVoiceDescription").classList.add('FadeIn');
                document.getElementById("OpOperatorNameDescription").classList.add('FadeIn');
                document.getElementById("OpPilotNameDescription").classList.add('FadeIn');

                document.getElementById("OperatorJobDescription").style.fontWeight = "bold";
                document.getElementById("OperatorVoiceDescription").style.fontWeight = "bold";
                document.getElementById("OpOperatorNameDescription").style.fontWeight = "bold";
                document.getElementById("OpPilotNameDescription").style.fontWeight = "bold";

                document.getElementById("OperatorJobChoice").classList.add('FadeOut');
                document.getElementById("OperatorVoiceChoice").classList.add('FadeOut');
                document.getElementById("OpOperatorNameChoice").classList.add('FadeOut');
                document.getElementById("OpPilotNameChoice").classList.add('FadeOut');
                document.getElementById("OperatorChoice0Txt").classList.add('FadeOutHalf');

                document.getElementById("OperatorJobChoice").disabled = true;
                document.getElementById("OperatorVoiceChoice").disabled = true;
                document.getElementById("OpOperatorNameChoice").disabled = true;
                document.getElementById("OpPilotNameChoice").disabled = true;

                document.getElementById("OperatorNext0").hidden = true;
                document.getElementById("Round1").hidden = false;
                document.getElementById("Round1").classList.add("FadeIn");
                document.getElementById("OperatorRound1End").hidden = false;
                document.getElementById("OperatorRound1End").classList.add("FadeInDelay2");

                Round = 1;
                break;
            case 1:
                //Hide and Show all round 2 stuff
                document.getElementById("OperatorNext1").hidden = true

                document.getElementById("Round2").hidden = false;
                document.getElementById("Round2").classList.add("FadeIn");

                document.getElementById("OperatorChoice2Txt1").hidden = false;
                document.getElementById("OperatorChoice2Txt1").classList.add("FadeInDelay2");

                Round = 2
                break;
            case 2:
                document.getElementById("OperatorChoice2Txt2").hidden = false;
                document.getElementById("OperatorChoice2Txt2").classList.add("FadeIn");

                document.getElementById("OperatorChoice2Txt3").hidden = false;
                document.getElementById("OperatorChoice2Txt3").classList.add("FadeInDelay2");

                document.getElementById("OperatorChoice21").hidden = false;
                document.getElementById("OperatorChoice21").classList.add("FadeInDelay4");
                document.getElementById("OperatorChoice22").hidden = false;
                document.getElementById("OperatorChoice22").classList.add("FadeInDelay4");
                document.getElementById("OperatorRound2End").hidden = false;
                document.getElementById("OperatorRound2End").classList.add("FadeInDelay6Half");

                Round = 2.5;
                break;
            case 2.5:
                //Hide and Show all round 3 stuff
                document.getElementById("OperatorNext2").hidden = true

                document.getElementById("Round3").hidden = false;
                document.getElementById("Round3").classList.add("FadeIn");
                Round = 3
                break;
            case 3:
                var Roll3 = parseInt(document.getElementById("OperatorRoll3Input").value)
                var Roll3Err = true

                switch (Roll3) {
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        document.getElementById("OperatorRoll3Result").innerHTML = "- Aim for the sea. You can’t be sure about the pilot’s position, but the water is hard to miss and offers some cushion. It comes with its own dangers, but those can be addressed after reaching the ground.";
                        break;
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        document.getElementById("OperatorRoll3Result").innerHTML = "- Aim for the desert. It might be a harder surface than the ocean, but you think you can help the pilot decelerate enough that the positives of land outweigh the concerns.";
                        break;
                    case 10:
                    case 11:
                    case 12:
                        document.getElementById("OperatorRoll3Result").innerHTML = "- Aim for an established landing site. You think you can get the pilot to a runway, with support on-hand for their arrival.";
                        break;
                    default:
                        document.getElementById("OperatorRoll3Result").innerHTML = "- That number is too small or too large";
                        Roll3Err = false;
                        break;
                }
                if (Roll3Err) {
                    //Hide and Show all round 2 stuff
                    document.getElementById("OperatorRoll3Input").classList.add('FadeOut');
                    document.getElementById("OperatorRoll3Txt").classList.add('FadeOutHalf');
                    document.getElementById("OperatorRoll3Input").disabled = true;
                    document.getElementById("OperatorRoll3Result").classList.add('FadeIn');
                    document.getElementById("OperatorRound3End").hidden = false;
                    document.getElementById("OperatorRound3End").classList.add('FadeInPause');

                    Round = 3.5;
                }
                break;
            case 3.5:
                document.getElementById("OperatorNext3").hidden = true

                document.getElementById("Round4").hidden = false;
                document.getElementById("Round4").classList.add("FadeIn");
                Round = 4;
                break;
            case 4:
                document.getElementById("OperatorChoice4Table").hidden = false;
                document.getElementById("OperatorChoice4Table").classList.add("FadeIn");

                document.getElementById("OperatorChoice4Txt").hidden = false;
                document.getElementById("OperatorChoice4Txt").classList.add("FadeInDelay2");

                document.getElementById("OperatorChoice41").hidden = false;
                document.getElementById("OperatorChoice41").classList.add("FadeInDelay4");
                document.getElementById("OperatorChoice42").hidden = false;
                document.getElementById("OperatorChoice42").classList.add("FadeInDelay4");
                Round = 4.5;
                break;
            case 4.5:
                document.getElementById("OperatorNext4").hidden = true

                document.getElementById("Round5").hidden = false;
                document.getElementById("Round5").classList.add("FadeIn");
                document.getElementById("OperatorRoll5Txt").hidden = false;
                document.getElementById("OperatorRoll5Txt").classList.add("FadeInDelay2");
                Round = 5;
                break;
            case 5:
                var Roll5 = parseInt(document.getElementById("OperatorRoll5Input").value)
                var Roll5Err = true

                switch (Roll5) {
                    case 1:
                    case 2:
                        document.getElementById("OperatorRoll5Result").innerHTML = "- Too short and the pilot burns up. Too long and they skip off the atmosphere, hurtling again into space. You aren’t qualified to make this choice alone- and your machine is not helping overly much. You do what you can to narrow the selection, offering a band of options to the pilot. They’ll just have to feel it out in flight.";
                        break;
                    case 3:
                    case 4:
                        document.getElementById("OperatorRoll5Result").innerHTML = "- There are too many variables to fully pin this down, but you’ve got a pretty good idea of what would serve the pilot best. You advise them to keep their angle and speed within a small range, knowing that they can make last-minute adjustments as needed.";
                        break;
                    case 5:
                    case 6:
                        document.getElementById("OperatorRoll5Result").innerHTML = "- The correct angle is obvious, although you check it against every eventuality. It holds true. You read it over the air three times.";
                        break;
                    default:
                        document.getElementById("OperatorRoll5Result").innerHTML = "- That number is too small or too large";
                        Roll5Err = false;
                        break;
                }
                if (Roll5Err) {
                    //Hide and Show all round 2 stuff
                    document.getElementById("OperatorRoll5Input").classList.add('FadeOut');
                    document.getElementById("OperatorRoll5Txt").classList.add('FadeOutHalf');
                    document.getElementById("OperatorRoll5Input").disabled = true;
                    document.getElementById("OperatorRoll5Result").classList.add('FadeIn');
                    document.getElementById("OperatorRound5End").hidden = false;
                    document.getElementById("OperatorRound5End").classList.add('FadeInPause');

                    Round = 5.5;
                }
                break;
            case 5.5:
                document.getElementById("OperatorNext5").hidden = true

                document.getElementById("Round6").hidden = false;
                document.getElementById("Round6").classList.add("FadeIn");
                Round = 6;
                break;
            case 6:
                document.getElementById("OperatorChoice6Table").hidden = false;
                document.getElementById("OperatorChoice6Table").classList.add("FadeIn");

                document.getElementById("OperatorChoice6Txt").hidden = false;
                document.getElementById("OperatorChoice6Txt").classList.add("FadeInDelay2");

                document.getElementById("OperatorChoice61").hidden = false;
                document.getElementById("OperatorChoice61").classList.add("FadeInDelay4");
                document.getElementById("OperatorChoice62").hidden = false;
                document.getElementById("OperatorChoice62").classList.add("FadeInDelay4");
                Round = 7;
                break;
            case 7:
                document.getElementById("OperatorNext6").hidden = true

                document.getElementById("Round7").hidden = false;
                document.getElementById("Round7").classList.add("FadeIn");
                document.getElementById("Operator7Txt").hidden = false;
                document.getElementById("Operator7Txt").classList.add("FadeInDelay2");
                Round = 8;
                break;
            case 8:
                //All round 8 stuff
                document.getElementById("OperatorNext7").hidden = true;
                document.getElementById("Round8").hidden = false;
                document.getElementById("Round8").classList.add("FadeIn");
                document.getElementById("OperatorRound8Txt").hidden = false
                document.getElementById("OperatorRound8Txt").classList.add("FadeInDelay2");
                document.getElementById("OperatorRound8End").hidden = false
                document.getElementById("OperatorRound8End").classList.add("FadeInDelay4");
                document.getElementById("OperatorRound8End2").hidden = false
                document.getElementById("OperatorRound8End2").classList.add("FadeInDelay12");
                Round = 9;
                break;
        }
    }
}