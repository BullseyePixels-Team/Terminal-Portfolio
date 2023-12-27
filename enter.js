document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            window.location.href = 'terminal.html'; 
        }
    });
});


function getRandom(max) {
    return Math.floor(Math.random() * max);
}

let fstpa = document.getElementById("ascii");
let scdpa = document.getElementById("ascii2")
function typeWriter(element) {
    var j = 0;
    var textLength = 2000;
    var typingSpeed = 1.5;

    function type() {
        if (j < textLength) {
            element.innerHTML += getRandom(2).toString();
            j++;
            if (j%50 === 0 && j != 1){
                element.innerHTML += "<br>";
            }
            setTimeout(type, typingSpeed);
        }
    }

    type();
}
typeWriter(fstpa);
typeWriter(scdpa)