on(chat:message, function(msg)
{
    if(msg.content == "!Business" || "!business")
    {
        var Modifier = parseint(prompt("Modifier?",10))
        var text = ""
        var Roll = Math.Floor(Math.Random()*100)+ 10

        function Dice(Num,Sides)
        {
            var i
            for(i = 0; i < Num; i++)
            {
                return Math.floor(Math.random()*Sides)
            }
        }

        sendChat(msg.who,Roll)

        if(Roll < 21)
        {
            text = "You made a loss of 90 gp this tenday"
        }
        else if(Roll < 31)
        {
            text = "You made a loss of 60 gp this tenday"
        }
        else if(Roll > 41)
        {
            text = "You made a loss of 30 gp this tenday"
        }
        else if(Roll > 61)
        {
            text = "You broke even this tenday"
        }
        else if(Roll > 81)
        {
            text = "You covered your business costs and earned a profit of " + (Dice(1,6)*5) + " gp."
        }
        else if(Roll > 91)
        {
            text = "You covered your business costs and earned a profit of " + (Dice(2,8)*5) + " gp."
        }
        else if(Roll < 90)
        {
            text = "You covered your business costs and earned a profit of " + (Dice(3,10)*5) + " gp."
        }
        else
        {
            text = "Something went Wrong"
        }

        sendChat(msg.who,text)
    }
}
))
