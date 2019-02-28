        var inventory = {
            credits:1000,
            lazerSword:0,
            bullets:0,
            
        }
        var invCheck = function(){
            alert("\n credits "+inventory.credits+"\n laserswords"+inventory.lazerSword+"\n bullets "+inventory.bullets+"");
        }
Game();

function Game(){
    document.write("Trouble in space.");
    var playerName = prompt("what is your name?");
    alert("Welcome to the Interstellar space station "+ playerName);
    alert("Before you start the game, make sure you spell everything EXACTLY as it reads.");
    
    Cell();
    
    function Cell(){
        var jail = prompt("You slowly start to wake up. Your head is throbbing and in great pain. You try to remember what happened last night. You look around and notice your in some kind of jail cell...but the gravity feels low...and unearthly... \n -Look around \n -call for someone \n -inspect window \n -shop").toLowerCase();
        
        if(jail == "look around"){
        
        LOOK();
    }
        else if(jail == "call for someone"){
            Yell();
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
            var windowCheck = prompt("You look out the window and stare into deep space. Stars surround you and meteors fly off in the distance. You can either \n -Try to break window \n -walk away").toLowerCase();
                if(windowCheck == "Try to break window"){
                    var windowbreak = prompt("you set yourself up to punch the glass. You pull your arm back and hit the window as hard as you can. The window cracks and you hear the air being vaccumed out of your cell slowly. Alarms start blaring and your captors are alerted \n -try to cover window \n -punch window again. \n -lie to the captors").toLowerCase();
                    if(windowbreak == "punch window again"){
                        alert("you get ready to punch the window one last time. As you begin to launch your fist at the window the guards come through the door. your fist connects with the glass and shatters. you, the guards, and everything in your cell get sucked into space. You have a short ammount of breath still in your lungs that you hold onto desperately, but the cold space around you makes you freeze and you start drifting toward a random planet. As you start to drift you gain momentum at a constant rate and you speed towards the planet. The ice on your skin begins to melt and suddenly you are engulfed in fire as you plummet to your doom. Before you even hit the ground you turn into ash.");
                    }
                    else if(windowbreak == "try to cover window"){
                        alert("you grab the blanket off your bunk and put it over the crack hoping that the vaccum of air would keep the blanket in place. The guards come running in and tell you to put your back against the old wall. the blanket holds but makes an obvious sound that something is wrong behind it. The guards tear down the blanket and discover the massive crack in the glass. They tell you to put your back against the window. The guards turn to walk out the door and the last guard quickly turns and shoots the glass, making it shatter and you get sucked into cold space.");
                    }
                    else if (windowbreak == "lie to the captors"){
                    var lietoGuards = prompt("The guards come in and you have your hands in the air, already surrendering. The guards ask you how this happened. You answer to them with \n -an asteroid hit the window \n -the glass cracked under pressure \n -punched the glass out of rage").toLowerCase();
                        if(lietoGuards == "an asteroid hit the window"){
                            alert("the guards laugh at you as they know you tried to decieve them. They tell you that theres not an asteroid within 500 feet of the whole ship due to the defence turrets blasting any nearby meteors. as they exit the room the last guard turns around and gives you credit for trying. Then shoots the glass behind you and leaves. the glass slowly starts cracking more and more until it finally shatters and you get sucked out into space and get blasted by a defence turret.");
                        }
                        else if(lietoGuards == "the glass cracked under pressure"){
                            alert("you tell the guards that you were pressing against the glass looking out into space. they command you to back away from the glass as they seal the crack with a freeze ray. they exit the room and your left alone.");
                            Cell();
                        }
                        else if(lietoGuards == "punched the glass out of rage"){
                            alert("you tell the guards that you punched the glass out of rage. the leading guard tells the command room to drop the shutters on your cell. a thick metal panel covers both sides of your window. they turn and leave your room and you're left alone.");
                            Cell();
                        }
                    }
                }
                else if(windowCheck == "walk away"){
                    Cell();
                }
        }
        
        function LOOK(){
            var cellLook = prompt("You take a good look around. Behind you is your bed with a window, on your right you have a sink and toilet, on your left is an old wall, and directly in front of you is a row of lazer beams that look like they would cut or kill anything that goes through. would you like to \n -inspect window \n -inspect old wall \n -inspect toilet and sink \n -try to go through lazers.").toLowerCase();
            
            if(cellLook == "try to go through lazers"){
                
                Lazarbeam();
            }
            else if(cellLook == "inspect old wall"){
                
                Trump();
            }
            else if(cellLook == "inspect window"){
                
                Window();
            }
            else if(cellLook == "inspect toilet and sink"){
                alert("a regular toilet and sink. both made of metal and partialy rusted.");
                LOOK();
            }
        }
        
        
        function Yell(){
            var callForSomeone = prompt("You yell for someone to talk to. Two alien guards open the door and approach you. What do you choose to say? \n -i come in peace \n -why am i in here \n -let me out of here \n -nevermind").toLowerCase();
            
            if(callForSomeone == "let me out of here"){
                alert("the guards laugh a little bit and leave");
                Yell();
            }
            else if(callForSomeone == "i come in peace"){
                alert("the guards laugh a littl bit and leave");
                Yell();
            }
            else if(callForSomeone == "why am i in here"){
                alert("the guards tell you that you were aboard an illegal smuggling ship and they caught you and everyone else onboard while you were asleep");
                Yell();
            }
            else if(callForSomeone == "nevermind"){
                
                Cell();
            }
        }
    
        function shop(){
            var bulletShop = 200;
            var bulletPrice = 1;
            
            
            var spaceShop = prompt("Welcome to the space shop. what would you like to buy? \n -lazer sword \n -bullets \n -leave").toLowerCase();
            
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
            else if(spaceShop == "bullets"){
                var bulletCon = prompt("how many bullets do you want?");
                
                while(!confirm("Are you sure you want to buy "+bulletCon+" bullets, for "+bulletPrice+" per bullet?")){
                    bulletCon = prompt("How many bullets do you want?");
                
                }
                
                for(i = 1; i <= bulletCon; i++){
                    inventory.bullets ++;
                    console.log("you have "+inventory.bullets+" bullets");
                }
                alert("You have bought "+bulletCon+" bullets. Thank you!");
                shop();
            }
            else if(spaceShop == "leave"){
                
                Cell();
            }
        }
    
        function Trump(){
            var wallInt = prompt("You inspect the old wall, you see that it is cracked and possibly breakable. \n -kick wall \n -throw your body into the wall \n -leave wall alone").toLowerCase();
                
                    if(wallInt == "kick wall"){
                        var kickingWall = prompt("You kick the wall with all your might. the crack gets bigger, but dust falls from the ceiling. it might be dangerous to kick again, but it could lead to a way out. \n -kick wall again \n -back away").toLowerCase();
                    
                        if(kickingWall == "kick wall again"){
                            var wallFallsDown = prompt("You kick the wall as hard as you can once more!...but the ceiling collapses and your leg gets hit with debris. You can either n\ -make a run for it! n\ -wait for the guards and lie.").toLowerCase();
                        
                        if(wallFallsDown == "make a run for it"){
                            alert("You make a break for it!...but you have no idea where your running. You limp run out of your cell and head to the door. The door slides open and you hear the guards running from the right. you break left and make it 30 feet before you get shot in the chest and fall to the floor. Your attempt at escape was brave but you could not outrun a lazer beam.")
                            }
                        }
                    }
                else if(wallInt == "throw your body into the wall"){
                    var wallDestroy = promp("you back up to the opposite side of the old wall. you charge at it and leap into it with your shoulder first. you break through the wall and the ceiling collapses behind you. you get up and break for the door. you hear that the guards are coming from your right so you decide to break left. Sprinting down the hallway you hear them coming. do you \n -keep running \n -jump into a nearby closet").toLowerCase();
                    
                    if(wallDestroy == "keep running"){
                        alert("you keep running as fast as you can! but the guards see you and shoot you with a lazer beam. you collapse to the ground and die. your attempt was brave but no one can out run a lazer beam.");
                    }
                    else if(wallDestroy == "jump into nearby closet"){
                        var inCloset = promp("you quickly step into a closet. you hear the guards run past searching for you. you decide to wait a few seconds before leaving. before you step out you hear a sound of snoring behind you. you slowly turn around and find a guard sleeping in a sleeping bag. his blaster is against the wall and his guard outfit is in a bag by his feet. do you \n -take his blaster and uniform \n -quickly leave").toLowerCase();
                        if(inCloset == "quickly leave"){
                            alert("you jump out of the closet in fear that he might wake up. you keep running and you hear the guards coming back to the main hall way. You reach a door to an unknown room but it appears to be locked! The guards run up behind you and stab you through the chest.");
                            Trump();
                        }
                        else if(inCloset == "take his blaster and uniform"){
                            alert("you quietly take his uniform and blaster, you step out of the hallway and a pack of guards run past you unaware of your presence. you proceed to run down the hallway and find a door to the escape pods. The door requires a pass code.");
                            var passcode = prompt("you look on the arm of the uniform to find a code that reads XR47, but you notice that there is also a code in your helmets HUD that reads 9235. what code do you choose to enter? \n -XR47 \n -9253").toLowerCase();
                            if(passcode == "9253"){
                                alert("you input the passcode. the lights turn red and an alarm starts blaring. guards turn the corner to see that your trying desperately to open the door. they all take aim and fire their blasters.");
                                Trump();
                            }
                            else if(passcode == "XR47"){
                                alert("you input the passcode. you hear the door unlock and proceed to enter. You step in the first escape pod you see and press the EMERGENCY LAUNCH button. You hear a loud explosion and you begin jettesoning towards the planet below. the escape pod flashes the fasten seatbelt sign. moments later you hear a loud BOOM outside. It appears you broke the sound barrier, your pod deploys a parachute and you float to the ground. kicking open the door you find yourself in a sandy desert, with a town off in the distance...Congrats player you have successfully escaped.");
                            }
                        }
                    }
                    
                }
            
            }
        function Lazarbeam(){
            alert("You back up as far as you can. You charge at the lazers with everything you have!");
           var lazerChance = [Math.floor(Math.random()* 2)];
                
            if(lazerChance == 0){
                death();
            }
            else if(lazerChance == 1){
                darkSide();
            }
            else if(lazerchance == 2){
                chicken();
            }
        }
        function darkSide(){
            var dank = prompt("You're on the other side of your cell. You notice an emergency exit hatch in the corner of the room and a doorway that leads to the rest of the ship. \n -emergency exit \n -doorway").toLowerCase();
                if(dank == "emergency exit"){
                    alert("you open the emegency exit and step into a small escape pod. you slam your fist into the launch button and jetteson towards the planet below. You hear a loud BOOM outside, it appears you broke the sound barrier. your pod deploys a parachute and you float gracefully to the ground. you open the door and find that you're on a desert planet and a small town off in the distance. congrats player, you escaped successfully.");
                }
            if(dank == "doorway"){
                alert("you step out into the hallway. unfortunately you steped out as a guard was walking past. he looks over at you and stabs you for escaping.");
                Lazarbeam();
            }
        }
        function death(){
            var deathcheck = confirm("you have died. Would you like to try again?");
            if(deathcheck){
                Cell();
            }
            else{
                alert("goodbye.")
            }
        }
        
        function chicken(){
            alert("you sprint at the lazers but you chicken out and crash into the wall");
            Lazarbeam();
        }

}