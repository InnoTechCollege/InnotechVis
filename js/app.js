let menuOpen = false;
let disclaimerOpen = false;
let frontEndActive = true;
let intervals = new Set();
const mobileMenu = document.getElementById("mobile-menu");
const disclaimerContent = document.getElementById("disclaimer-content");
const disclaimerContainer = document.getElementById("disclaimer-container");

function openPage(target) {
    window.open(target, "_self");
}

function toggleSubTopic(element) {
    let display = element.nextElementSibling.style.display;
    console.log(display);
    if (display == "none") display = "block";
    else display = "none";
}

function toggleMenu() {
    stopIntervals();
    menuOpen ? closeMenu() : openMenu();
    menuOpen = !menuOpen;
}

function toggleDisclaimer() {
    if (disclaimerOpen) {
        disclaimerContent.classList.remove("grow-height");
        disclaimerContent.classList.add("shrink-height");
        disclaimerContainer.classList.remove("grow-height-half");
        disclaimerContainer.classList.add("shrink-height-half");
    } else {
        disclaimerContent.classList.remove("shrink-height");
        disclaimerContent.classList.add("grow-height");
        disclaimerContainer.classList.remove("shrink-height-half");
        disclaimerContainer.classList.add("grow-height-half");
    }
    disclaimerOpen = !disclaimerOpen;
}

function frontEndOn() {
    if (frontEndActive) return;
    frontEndActive = true;
    document.getElementById("front-end-button").classList.remove("inactive-path");
    document.getElementById("front-end-button").classList.add("active-path");
    document.getElementById("back-end-button").classList.remove("active-path");
    document.getElementById("back-end-button").classList.add("inactive-path");

    document.getElementById("front-end-content").classList.add("active-content");
    document.getElementById("front-end-content").classList.remove("inactive-content");
    document.getElementById("back-end-content").classList.add("inactive-content");
    document.getElementById("back-end-content").classList.remove("active-content");
}

function backEndOn() {
    if (!frontEndActive) return;
    frontEndActive = false;
    document.getElementById("front-end-button").classList.remove("active-path");
    document.getElementById("front-end-button").classList.add("inactive-path");
    document.getElementById("back-end-button").classList.remove("inactive-path");
    document.getElementById("back-end-button").classList.add("active-path");

    document.getElementById("front-end-content").classList.add("inactive-content");
    document.getElementById("front-end-content").classList.remove("active-content");
    document.getElementById("back-end-content").classList.add("active-content");
    document.getElementById("back-end-content").classList.remove("inactive-content");
}

function openMenu() {
    let interval = setInterval(open, 12);
    intervals.add(interval);
    mobileMenu.style.height = "5px";
    function open() {
        if (mobileMenu.clientHeight >= 200) { clearInterval(interval); intervals.delete(interval); }
        let height = mobileMenu.clientHeight * 1.1;
        mobileMenu.style.height = height + "px";
    }
}

function closeMenu() {
    let interval = setInterval(close, 12);
    intervals.add(interval);
    function close() {
        if (mobileMenu.clientHeight <= 5) { clearInterval(interval); mobileMenu.style.height = "0px"; intervals.delete(interval); }
        let height = mobileMenu.clientHeight / 1.1;
        mobileMenu.style.height = height + "px";
    }
}

function stopIntervals() {
    for (var interval of intervals) {
        clearInterval(interval);
    }
}