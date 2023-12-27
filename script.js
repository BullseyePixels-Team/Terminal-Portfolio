let input = document.getElementById("input");
let greet = document.getElementById("greet");
let cmd = document.getElementById("cmd");
let consoleElement = document.getElementById("console");


var txt = "/* Welcome to the Website terminal-Like You can start by typing þhelp()◙ in the command line argument */";

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
            if(text.charAt(j) === "þ"){
                console.log(text)
                let str = findc(text,j);
                element.innerHTML += "<span>"+str;
                j = j + str.length + 2;
            }
            if(text.charAt(j) === "►"){
                console.log(text)
                let str = findc(text,j);
                element.innerHTML += "<strong>"+str;
                j = j + str.length + 2;
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

function findc(txt,s){
    let str = txt.substr(s);
    let e = str.indexOf("◙");
    return str.substring(1,e)
}
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
                typeWriterD(consoleElement, "these are the functions that you can use: ß ß => þwhois()◙                   |    Who We Are? ß => þsecrets()◙            |     Find the password ß => þclear()◙                    |     Clear terminal ß => þprojects()◙          |     View projects ß => þhistory()◙              | show the search history ß => þsocial()◙                   | show socials of members ß");
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
                consoleElement.innerHTML = ">_";
                typeWriterD(consoleElement, "???");
            } 
            else if (ch === 'git("mohamed")' || ch === "git('mohamed')"){
                consoleElement.innerHTML = ">_";
                typeWriterD(consoleElement, "opening Mohamed Mnasria's github...");
                setTimeout(() => {window.open("https://github.com/MhmdMnasria", "_blank");}, 1000);
            }
            else if (ch === 'insta("mohamed")' || ch === "insta('mohamed')"){
                consoleElement.innerHTML = ">_";
                typeWriterD(consoleElement, "opening Mohamed Mnasria's instagram...");
                setTimeout(() => {window.open("https://www.instagram.com/mhmdmnasria_2006/", "_blank");}, 1000);
            }
            else if (ch === 'git("yassin")' || ch === "git('yassin')"){
                consoleElement.innerHTML = ">_";
                typeWriterD(consoleElement, "opening Yassin Fouzai's github...");
                setTimeout(() => {window.open("https://github.com/yassinfouzai", "_blank");}, 1000);
            }    
            else if (ch === 'insta("yassin")' || ch === "insta('yassin')"){
                consoleElement.innerHTML = ">_";
                typeWriterD(consoleElement, "opening Yassin Fouzai's instagram...");
                setTimeout(() => {window.open("https://www.instagram.com/its_da_foz/", "_blank");}, 1000);
            }   
            else if (ch === 'history()'){
                consoleElement.innerHTML = ">_";
                typeWriterD(consoleElement, his);
            }else if (ch === "social()"){
                consoleElement.innerHTML = ">_";
                typeWriterD(consoleElement, "here's the social networks: ß ß => mohamed  :ß - insta('mohamed') ß - git('mohamed') ß ß => mohamed  :ß - insta('yassin') ß - git('yassin') ß");
            }  
            else {
                typeWriterD(cmd, ">> ►Undefined Command. Please try a valid one.◙ ß");
            }
        }
    }
});