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
            if (element === consoleElement ||element === logo){
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
                typeWriterD(consoleElement, "these are the functions that you can use: ß ß => þwhois()◙                   |    Who We Are? ß => þsecrets()◙            |     Find the password ß => þclear()◙                    |     Clear terminal ß => þprojects()◙          |     View projects ß => þhistory()◙              | show the search history ß => þsocial()◙                   | show socials of members ß => þlogo()◙                       | draw our logo ß");
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
                // Create an input field
                const passwordInput = document.createElement("input");
                passwordInput.type = "password";
                passwordInput.placeholder = "Enter the password (4-digits)";
                passwordInput.id = "passwordInput";
            
                consoleElement.appendChild(passwordInput);
                passwordInput.focus();
                
                passwordInput.addEventListener("keypress", function (event) {
                    if (event.key === "Enter") {
                        
                        event.preventDefault();
                        const enteredPassword = passwordInput.value.trim();
                        if (enteredPassword === "7610") {
                            passwordInput.placeholder = "succeed";
                            typeWriterD(consoleElement, "Congratulations! You guessed the password    þ(which is 7610)◙ . You won! ß");
                        } else {
                            passwordInput.placeholder = "failed";
                            typeWriterD(consoleElement, "Wrong password. þTry again◙. ß");
                        }
                        input.focus();
                    }
                });
            }
            else if (ch === 'git("mohamed")' || ch === "git('mohamed')"){
                typeWriterD(consoleElement, "opening Mohamed Mnasria's github...");
                setTimeout(() => {window.open("https://github.com/MhmdMnasria", "_blank");}, 1000);
            }
            else if (ch === 'insta("mohamed")' || ch === "insta('mohamed')"){
                typeWriterD(consoleElement, "opening Mohamed Mnasria's instagram...");
                setTimeout(() => {window.open("https://www.instagram.com/mhmdmnasria_2006/", "_blank");}, 1000);
            }
            else if (ch === 'git("yassin")' || ch === "git('yassin')"){
                typeWriterD(consoleElement, "opening Yassin Fouzai's github...");
                setTimeout(() => {window.open("https://github.com/yassinfouzai", "_blank");}, 1000);
            }    
            else if (ch === 'insta("yassin")' || ch === "insta('yassin')"){
                typeWriterD(consoleElement, "opening Yassin Fouzai's instagram...");
                setTimeout(() => {window.open("https://www.instagram.com/its_da_foz/", "_blank");}, 1000);
            }   
            else if (ch === 'history()'){
                typeWriterD(consoleElement, his);
            }
            else if (ch === "social()"){
                typeWriterD(consoleElement, "here's the social networks: ß ß => mohamed  :ß - þinsta(◙'mohamed'þ)◙ ß - þgit(◙'mohamed'þ)◙ ß ß => yassin  :ß - þinsta(◙'yassin'þ)◙ ß - þgit(◙'yassin'þ)◙ ß");
            }else if (ch === "logo()") {
                // ASCII art for your logo
                const logoAscii = `______  _     _               _______ _______ __   __ _______ ß|_____] |     | |      |      |______ |______   \\_/   |______ ß|_____] |_____| |_____ |_____ ______| |______    |    |______ ß _____  _____ _     _ _______        _______ ß|_____]   |    \\___/  |______ |      |______ ß|       __|__ _/   \\_ |______ |_____ ______|
                `;
                logo = document.createElement("pre");
                logo.id = "logo";
                consoleElement.appendChild(logo);
                typeWriterD(logo, logoAscii);
            }
            
            else {
                typeWriterD(cmd, ">> ►Undefined Command. Please try a valid one.◙ ß");
            }
        }
    }
});