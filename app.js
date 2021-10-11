let GlobalOnOff = 0;
let gul = document.getElementsByClassName("gul")[0];

function Gon() {
    if (GlobalOnOff == 0) {
        gul.style.display = "block";
        GlobalOnOff = 1;
    } else {
        gul.style.display = "none";
        GlobalOnOff = 0;
    }
};

let addhidden = document.getElementsByClassName("addhidden")[0];
let NCli = document.getElementsByClassName("nav_controller")[0].getElementsByTagName("li")[0];

function addH() {
    addhidden.className = 'addshow';
};

function addS() {
    let addshow = document.getElementsByClassName("addshow")[0];
    addshow.className = 'addhidden';
};