let input = document.getElementById("input");
let greet = document.getElementById("greet");
let cmd = document.getElementById("cmd");
let console = document.getElementById("console");


function typeWriter(txt) {
    let i = 0;
    let speed = txt.length * .2;
    if(i < txt.length){
        document.getElementById("greet").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

var i = 0;
var txt = "/* Welcome to the Website terminal-Like You can start by typing help() in the command line argument */";
var speed = txt.length * .2;
    
    function typeWriterD() {
        if(i < txt.length){
            document.getElementById("greet").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriterD, speed);
            
        }  
}
typeWriterD();



input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        ch = input.value;
        if (ch != ""){
            document.getElementById("input").value = "";
            cmd.innerHTML += ">>" + ch + "</br>"  ;
        }

        if (ch === "help()"){
            console.innerHTML += "these are the function that you can use:"+ "<br>"+
                                 "=> whois()            |     Who We Are? Who am I?    " + "<br>"+
                                 "=> secrets()     |     Find the password" + "<br>"+
                                 "=> clear()             |     Clear terminal " + "<br>"+
                                 "=> projects()   |     View projects View projects" + "<br>"+
                                 ">_";
        }
        else if(ch === "whois()"){
            console.innerHTML += "Mohamed Mnasria & Yassine Fouzai 's portfolio. " + "</br>" + ">_";
        }
        else if(ch == "projects()"){
            console.innerHTML += "Nothing right now.." + "</br>" + ">_";
        }
        else if(ch == "clear()"){
            console.innerHTML = ">_";
            cmd.innerHTML = "";
        }
        else if(ch == "secrets()"){
            console.innerHTML += "???" + "</br>" + ">_";
        }
        else{
            cmd.innerHTML += ">> Undefined Command. Please try a valid one." + "</br>";
        }
    }
});

