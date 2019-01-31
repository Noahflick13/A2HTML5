// Single line comment
/*

Multiline comment

*/

//document.write("<h1>So steez dude, so <em>STEEZ</em>.</h1>");

//alert("WARNING! WARNING! WARNING! REEEEEE!");

//Confirm("do you like cheese?);

//prompt("what kind of cheese do you like?);

//var PC = prompt("What is your name?");

//confirm("So your name is "+PC);
Game();

function Game(){
    document.write("Trouble in space.");
    var playerName = prompt("what is your name?");
    alert("Welcome to the Interstellar space station "+ playerName);
    
    Cell();
    
    function Cell(){
        var jail = prompt("You slowly start to wake up. Your head is throbbing and in great pain. You try to remember what happened last night. You look around and notice your in some kind of jail cell...but the gravity feels low...and unearthly... \n -Look around \n -call for someone \n -look out the window");
        
        if(jail == "look around" || jail == "look"){
        
        LOOK();
    }
        
        else if(jail == "inspect window" || "window"){
         
        Window();   
     }
    
}
        function Window(){
            var windowCheck = prompt("You look out the window and stare into deep space. Stars surround you and meteors fly off in the distance. You can either \n -Try to break window \n -walk away");
        }
        
        function LOOK(){
            var cellLook = prompt("You take a good look around. Behind you is your bed with a window, on your right you have a sink and toilet, on your left is an old wall, and directly in front of you is a row of lazer beams that look like they would cut or kill anything that goes through. would you like to \n -inspect window \n -inspect old wall \n -inspect toilet and sink \n -try to go through lazers.");
            
            if(cellLook == "try to go through lazers" || "lazers" || "go through lazers"){
                alert("You back up as far as you can to the wall. Charging at the lazers at full speed you make it though...in three different pieces...good job, you successfully killed yourself and now you have to restart the game.");
            }
            
            else if(cellLook == "inspect old wall" || "old wall"){
                var wallInt = prompt("You inspect the old wall, you see that it is cracked and possibly breakable. \n -kick wall n\ -throw your body into the wall n\ -leave wall alone");
                
                if(wallInt == "kick" || "kick wall"){
                    var kickingWall = prompt("You kick the wall with all your might. the crack gets bigger, but dust falls from the ceiling. it might be dangerous to kick again, but it could lead to a way out. n\ -kick the wall again n\ back away");
                    
                    if(kickingWall == "kick again" || "kick"){
                        var wallFallsDown = prompt("You kick the wall as hard as you can once more!...but the ceiling collapses and your leg gets hit with debris. You can either n\ -make a run for it! n\ -wait for the guards and lie.");
                        
                        if(wallFallsDown == "make a run for it" || "run"){
                            alert("You make a break for it!...but you have no idea where your running. You limp run out of your cell and head to the door. The door slides open and you hear the guards running from the right. you break left and make it 30 feet before you get shot in the chest and fall to the floor. Your attempt at escape was brave but you could not outrun a lazer beam.ß")
                        }
                    }
                }
            }
        }
        
        function Yell(){
            var callForSomeone = prompt("You yell for someone to talk to. Two alien guards open the door and approach you. What do you choose to say? \n -i come in peace \n -why am i in here \n -let me out of here");
        }
        

}