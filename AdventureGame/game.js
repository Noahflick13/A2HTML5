        var inventory = {
            credits:1000,
            lazerSword:0,
            plasmaBomb:0,
            shipMap:0,
            beamGun:0,
            
        }
Game();

function Game(){
    document.write("Trouble in space.");
    var playerName = prompt("what is your name?");
    alert("Welcome to the Interstellar space station "+ playerName);
    alert("Before you start the game, make sure you spell everything EXACTLY as it reads.");
    
    Cell();
    
    function Cell(){
        var jail = prompt("You slowly start to wake up. Your head is throbbing and in great pain. You try to remember what happened last night. You look around and notice your in some kind of jail cell...but the gravity feels low...and unearthly... \n -Look around \n -call for someone \n -look out the window \n -shop");
        
        if(jail == "look around"){
        
        LOOK();
    }
        
        else if(jail == "inspect window"){
         
        Window();   
     }
        
        else if(jail == "shop"){
        
        shop();
        }
        
        else if(jail == "lazer"){
            
        Lazarbeam()
        }
    
}
        function Window(){
            var windowCheck = prompt("You look out the window and stare into deep space. Stars surround you and meteors fly off in the distance. You can either \n -Try to break window \n -walk away");
                if(windowCheck == "Try to break window"){
                    var windowbreak = prompt("you set yourself up to punch the glass. You pull your arm back and hit the window as hard as you can. The window cracks and you hear the air being vaccumed out of your cell slowly. Alarms start blaring and your captors are alerted \n -try to cover the window \n -punch window again. \n -lie to the captors");
                    if(windowbreak == "punch window again"){
                        var windowbroken = alert("you get ready to punch the window one last time. As you begin to launch your fist at the window the guards come through the door. your fist connects with the glass and shatters. you, the guards, and everything in your cell get sucked into space. You have a short ammount of breath still in your lungs that you hold onto desperately, but the cold space around you makes you freeze and you start drifting toward a random planet. ")
                    }
                }
        }
        
        function LOOK(){
            var cellLook = prompt("You take a good look around. Behind you is your bed with a window, on your right you have a sink and toilet, on your left is an old wall, and directly in front of you is a row of lazer beams that look like they would cut or kill anything that goes through. would you like to \n -inspect window \n -inspect old wall \n -inspect toilet and sink \n -try to go through lazers.");
            
            if(cellLook == "try to go through lazers"){
                
                Lazarbeam();
            }
            else if(cellLook == "inspect old wall"){
                
                Trump();
            }
        }
        
        
        function Yell(){
            var callForSomeone = prompt("You yell for someone to talk to. Two alien guards open the door and approach you. What do you choose to say? \n -i come in peace \n -why am i in here \n -let me out of here");
        }
    
        function shop(){
            var spaceShop = prompt("Welcome to the space shop. what would you like to buy? \n -lazer sword \n -leave");
            
                if(spaceShop == "lazer sword" && inventory.credits >= 100){
                    var lazerSwordBuy = confirm("do you really need a lazer sword? you might burn or even kill yourself with it.");
                    if(lazerSwordBuy){
                        //adds sword
                        inventory.lazerSword ++;
                        //displays swords owned
                        alert("you own " +inventory.lazerSword+" swords");
                        //takes money
                        inventory.credits = inventory.credits - 100;
                        //displays coins left
                        //alert("you have " +inventory.credits " credits remaining");
                        shop();
                    }
    
                }
        }
    
        function Trump(){
            var wallInt = prompt("You inspect the old wall, you see that it is cracked and possibly breakable. \n -kick wall \n -throw your body into the wall \n -leave wall alone");
                
                    if(wallInt == "kick wall"){
                        var kickingWall = prompt("You kick the wall with all your might. the crack gets bigger, but dust falls from the ceiling. it might be dangerous to kick again, but it could lead to a way out. \n -kick wall again \n -back away");
                    
                        if(kickingWall == "kick wall again"){
                            var wallFallsDown = prompt("You kick the wall as hard as you can once more!...but the ceiling collapses and your leg gets hit with debris. You can either n\ -make a run for it! n\ -wait for the guards and lie.");
                        
                        if(wallFallsDown == "make a run for it"){
                            alert("You make a break for it!...but you have no idea where your running. You limp run out of your cell and head to the door. The door slides open and you hear the guards running from the right. you break left and make it 30 feet before you get shot in the chest and fall to the floor. Your attempt at escape was brave but you could not outrun a lazer beam.")
                            }
                        }
                    }
            
            }
        function Lazarbeam(){
            alert("You back up as far as you can. You charge at the lazers with everything you have!");
            var lazerChance = ["got killed", "made it through alive", "made it through, but you are severely injured"];
            alert("You "+lazerChance[Math.floor(Math.random()* 2)]+"!");
                
            if(lazerChance == 1){
                darkSide();
            }
        }
        function darkSide(){
            prompt("You're on the other side of your cell. You notice an emergency exit hatch in the corner of the room and a doorway that leads to the rest of the ship. \n -emergency exit \n -doorway")
        }
        function death(){
            var deathcheck = confirm("you have died. Would you like to try again?");
        }
    
    var rand = Math.Floor(Math.Random()*3);
    
    var chance = [death(), win(), lose()];
    
    

}