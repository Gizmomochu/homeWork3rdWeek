console.log("Witam wszystkich w mojej kolejnej pracy. Dzięki za wszystkie komentarze. PS. Na samym dole mała łamigłówka. :)")


/*wszystkie chwytane elementy*/
let buttonImg = document.querySelector(".buttonImg");
let imgChris = document.querySelector(".imgChris");
let buttonColor = document.querySelector(".buttonColor");
let webPage = document.querySelector(".webPage");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let button5 = document.querySelector(".button5");
let button6 = document.querySelector(".button6");
let navi = document.querySelector(".navi");
let navButton1 = document.querySelector(".navButton1");
let navButton2 = document.querySelector(".navButton2");
let navButton3 = document.querySelector(".navButton3");
let navButton4 = document.querySelector(".navButton4");
let navButton5 = document.querySelector(".navButton5");
let body = document.querySelector(".body");
let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let award = document.querySelector(".award");

/*zmiana koloru tła i przycisków*/
buttonColor.addEventListener("click", () => {
    body.classList.toggle("dark");
    buttonColor.classList.toggle("buttonDark");
    buttonImg.classList.toggle("buttonDark");
    button1.classList.toggle("buttonDark");
    button2.classList.toggle("buttonDark");
    button3.classList.toggle("buttonDark");
    button4.classList.toggle("buttonDark");
    button5.classList.toggle("buttonDark");
    navi.classList.toggle("naviDark");
    navButton1.classList.toggle("linkDark");
    navButton2.classList.toggle("linkDark");
    navButton3.classList.toggle("linkDark");
    navButton4.classList.toggle("linkDark");
    navButton5.classList.toggle("linkDark");
    header.classList.toggle("headerDark");
    footer.classList.toggle("footerDark");
    webPage.classList.toggle("webPageDark");
    
    if (body.classList.contains("dark")) {
        buttonColor.innerText = "Dzień";
    } 
    else {
        buttonColor.innerText = "Noc";
    }
});

/*ukrywanie i pokazywanie zdjęcia*/
buttonImg.addEventListener("click", () => {
    imgChris.classList.toggle("hide");
    if (imgChris.classList.contains("hide")) {
        buttonImg.innerText = "Pokaż";
    }
    else {
        buttonImg.innerText = "Ukryj";
    }
});

/*ukrywanie i pokazywanie rozdziałów*/
button1.addEventListener("click", () => {
    wstep.classList.toggle("hide");
    button1.classList.toggle("buttonActive");
});

button2.addEventListener("click", () => {
    poczatekDrogi.classList.toggle("hide");
    button2.classList.toggle("buttonActive");
});

button3.addEventListener("click", () => {
    zrozumienie.classList.toggle("hide");
    button3.classList.toggle("buttonActive");
});

button4.addEventListener("click", () => {
    cwiczenia.classList.toggle("hide");
    button4.classList.toggle("buttonActive");
});

button5.addEventListener("click", () => {
    cdn.classList.toggle("hide");
    button5.classList.toggle("buttonActive");
});

/*ukryta wiadomość*/

button1.addEventListener("click", () => {
    award.classList.toggle("hide1");
    console.log("Dobrze kombinujesz :)");
});

button5.addEventListener("click", () => {
    award.classList.toggle("hide5");
    console.log("Dobrze kombinujesz :)");
});

button2.addEventListener("click", () => {
    award.classList.toggle("hide2");
    console.log("Niestety :(");
});

button3.addEventListener("click", () => {
    award.classList.toggle("hide3");
    console.log("Niestety :(");
});

button4.addEventListener("click", () => {
    award.classList.toggle("hide4");
    console.log("Niestety :(");
});







/*
if (button1.classList.contains("hiddenMessage") && button5.classList.contains("hiddenMessage")) {
    award.classList.remove("hide");
    console.log("Brawo prawidłowa kombinacja");
} 
else {
    console.log("Niepoprawna kombinacja");
}

button6.addEventListener("click", () => {
    award.classList.remove("hide");
});

*/