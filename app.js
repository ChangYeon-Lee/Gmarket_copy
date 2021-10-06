let GlobalOnOff = 0;
let gul = document.getElementsByClassName("Gul")[0];

function Gon() {
    if (GlobalOnOff == 0) {
        gul.style.display = "block";
        GlobalOnOff = 1;
    } else {
        gul.style.display = "none";
        GlobalOnOff = 0;
    }
};