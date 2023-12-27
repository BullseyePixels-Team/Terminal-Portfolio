let input = document.getElementById("input");
let greet = document.getElementById("greet");
let cmd = document.getElementById("cmd");
let consoleElement = document.getElementById("console");


var txt = "/* Welcome to the Website terminal-Like You can start by typing þ help() ◙ in the command line argument */";

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
            /*if(text.charAt(j) === "þ"){
                element.innerHTML += "<span>";
                j = j + 1;
            }*/
            if(text.charAt(j) === "◙"){
                element.innerHTML += "</span>";
                j = j + 1;
            }
            element.innerHTML += text.charAt(j);
            j++;
            setTimeout(type, typingSpeed);
        }
        else{
            if (element === consoleElement){
                consoleElement.innerHTML += "<br> >_   ";
            }
            
        }
    }

    type();
}
typeWriterD(greet, txt);

var his = "the history of search():ß ß";
var k = 0;
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        ch = input.value;
        if (ch != "") {
            document.getElementById("input").value = "";
            cmd.innerHTML += ">>" + ch + "<br>";

            his += k.toString() + " - " + ch + "ß";
            k++;

            if (ch === "help()") {
                typeWriterD(consoleElement, "these are the functions that you can use: ß ß => whois()                   |     Who We Are? ß => secrets()            |     Find the password ß => clear()                    |     Clear terminal ß => projects()          |     View projects ß => insta('name')    | open instagram ß => history()              | show the history of searches ß");
            }
            else if (ch === "whois()") {
                typeWriterD(consoleElement, "Mohamed Mnasria & Yassine Fouzai's portfolio.");
            }   
            else if (ch === "projects()") {
                typeWriterD(consoleElement, "Nothing right now..");
            }   
            else if (ch === "clear()") {
                consoleElement.innerHTML = ">_";
                cmd.innerHTML = "";
                
            }   
            else if (ch === "secrets()") {
                typeWriterD(consoleElement, "???");
            }   
            else if (ch === 'insta("mohamed")' || ch === "insta('mohamed')"){
                typeWriterD(consoleElement, "opening Mohamed Mnasria's instagram...");
                setTimeout(() => {window.open("https://www.instagram.com/mhmdmnasria_2006/", "_blank");}, 1000);
            }   
            else if (ch === 'insta("yassin")' || ch === "insta('yassin')"){
                typeWriterD(consoleElement, "opening Yassin Fouzai's instagram...");
                setTimeout(() => {window.open("https://www.instagram.com/its_da_foz/", "_blank");}, 1000);
            }   
            else if (ch === 'history()'){
                typeWriterD(consoleElement, his);
            }   
            else {
                typeWriterD(cmd, ">> Undefined Command. Please try a valid one. ß");
            }
        }
    }
});