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
        var jail = prompt("You slowly start to wake up. Your head is throbbing and in great pain. You try to remember what happened last night. You look around and notice your in some kind of jail cell...but the gravity feels low...and unearthly... \n -Look around \n -Get more sleep \n -call for someone \n -look out the window");
        
    if(jail == "look around" || jail == "look"){
        var cellLook = prompt("You take a good look around. Behind you is your bed with a window, on your right you have a sink and toilet, on your left is an old wall, and directly in front of you is a row of lazer beams that look like they would cut or kill anything that goes through. would you like to \n -inspect window \n -inspect old wall \n -inspect toilet and sink \n -try to go through lazers.");
        }
    
    else if(jail == "get more sleep"  || jail == "sleep"){
        alert("You fall back asleep. Dreaming about the depths of space and all its mysteries, just waiting for an adventurer to explore and discover.");
        var resume = confrim("Do you want to keep playing?");
        
        if(resume){
            Cell();
        }
        else{
            alert("Game Over.");
            }
    
        }
    }
    
        
    
    
}