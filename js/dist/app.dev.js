"use strict";

var menuOpen = false;
var disclaimerOpen = false;
var frontEndActive = true;
var intervals = new Set();
var mobileMenu = document.getElementById("mobile-menu");
var disclaimerContent = document.getElementById("disclaimer-content");
var disclaimerContainer = document.getElementById("disclaimer-container");

function openPage(target) {
  window.open(target, "_self");
}

function toggleSubTopic(element) {
  var info = element.nextElementSibling;
  console.log(element.innerHTML.endsWith("+"));

  if (element.innerHTML.endsWith("+")) {
    element.innerHTML = element.innerHTML.replace("+", "-");
  } else {
    element.innerHTML = element.innerHTML.replace("-", "+");
  }

  info.classList.toggle("sub-topic-info");
  info.classList.toggle("sub-topic-info-show");
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
  var interval = setInterval(open, 12);
  intervals.add(interval);
  mobileMenu.style.height = "5px";

  function open() {
    if (mobileMenu.clientHeight >= 200) {
      clearInterval(interval);
      intervals["delete"](interval);
    }

    var height = mobileMenu.clientHeight * 1.1;
    mobileMenu.style.height = height + "px";
  }
}

function closeMenu() {
  var interval = setInterval(close, 12);
  intervals.add(interval);

  function close() {
    if (mobileMenu.clientHeight <= 5) {
      clearInterval(interval);
      mobileMenu.style.height = "0px";
      intervals["delete"](interval);
    }

    var height = mobileMenu.clientHeight / 1.1;
    mobileMenu.style.height = height + "px";
  }
}

function stopIntervals() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = intervals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var interval = _step.value;
      clearInterval(interval);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}