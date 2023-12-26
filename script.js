let input = document.getElementById("input");
let greet = document.getElementById("greet");
let cmd = document.getElementById("cmd");
let consoleElement = document.getElementById("console");

var i = 0;
var txt = "/* Welcome to the Website terminal-Like You can start by typing help() in the command line argument */";
var speed = 20;

function typeWriterD(element, text) {
    var j = 0;
    var textLength = text.length;
    var typingSpeed = 10;

    function type() {
        if (j < textLength) {
            if(text.charAt(j) === "ß"){
                element.innerHTML += "<br>";
                j = j+1;
            }
            element.innerHTML += text.charAt(j);
            j++;
            setTimeout(type, typingSpeed);
        }
        else{
            if (element === consoleElement){
                consoleElement.innerHTML += "<br> >_";
            }
            
        }
    }

    type();
}

typeWriterD(greet, txt);

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        ch = input.value;
        if (ch != "") {
            document.getElementById("input").value = "";
            cmd.innerHTML += ">>" + ch + "<br>";
        }

        if (ch === "help()") {
            typeWriterD(consoleElement, "these are the functions that you can use: ß => whois()             |     Who We Are? ß => secrets()      |     Find the password ß => clear()              |     Clear terminal ß => projects()    |     View projects ");
        } else if (ch === "whois()") {
            typeWriterD(consoleElement, "Mohamed Mnasria & Yassine Fouzai's portfolio.");
        } else if (ch == "projects()") {
            typeWriterD(consoleElement, "Nothing right now..");
        } else if (ch == "clear()") {
            consoleElement.innerHTML = ">_";
            cmd.innerHTML = "";
            
        } else if (ch == "secrets()") {
            typeWriterD(consoleElement, "???");
        } else {
            cmd.innerHTML += ">> Undefined Command. Please try a valid one. <br>";
        }
    }
});