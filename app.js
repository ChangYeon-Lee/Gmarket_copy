let GlobalOnOff = 0;
let gul = document.getElementsByClassName("Gul")[0];

function Gon() {
    if (GlobalOnOff == 0) {
        console.log("성공");
        gul.style.display = "block";
        GlobalOnOff = 1;
    } else {
        gul.style.display = "none";
        GlobalOnOff = 0;
    }
};

// let addhidden = document.getElementsByClassName("addhidden")[0];
// let NCli = document.getElementsByClassName("nav_controller")[0].getElementsByTagName("li")[0];

// function addshow() {
//     NCli.addEventListener("mouseover", function() {
//         addhidden.toggleAttribute("addshow");
//         console.log("성공");
//     });
// };