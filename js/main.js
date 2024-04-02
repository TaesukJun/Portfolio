let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBtn.onclick = function() {
    if (!isBurgerOpen) {
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 5rem, center";
        isBurgerOpen = true;
        
    } else if (isBurgerOpen) {
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "center, center left 5rem";
        isBurgerOpen = false;
    }

}

let privacyBtn = document.querySelector(".privacy-btn");
let privacyContent = document.querySelector(".footer-main-privacy");
let privacyCloseBox = document.querySelector(".footer-main-privacy-head-closeBtn");


let disclaimerBtn = document.querySelector(".disclaimer-btn");
let disclaimerContent = document.querySelector(".footer-main-disclaimer");
let disclaimerCloseBox = document.querySelector(".footer-main-disclaimer-head-closeBtn");


let isPrivacyOpen = false;
let isDisclaimerOpen = false;

privacyBtn.onclick = function() {
    if (!isPrivacyOpen) {
        privacyContent.style.display = "block";
        isPrivacyOpen = true;

    } else if (isPrivacyOpen) {
        privacyContent.style.display = "none";
        isPrivacyOpen = false;
    }

}

privacyCloseBox.onclick = function() {

    privacyContent.style.display = "none";
    isPrivacyOpen = false;

}


privacyBtn.onclick = function() {
    if (!isPrivacyOpen) {
        privacyContent.style.display = "block";
        isPrivacyOpen = true;

    } else if (isPrivacyOpen) {
        privacyContent.style.display = "none";
        isPrivacyOpen = false;
    }

}



disclaimerBtn.onclick = function() {
    if (!isDisclaimerOpen) {
        disclaimerContent.style.display = "block";
        isDisclaimerOpen = true;

    } else if (isDisclaimerOpen) {
        disclaimerContent.style.display = "none";
        isDisclaimerOpen = false;
    }

}

disclaimerCloseBox.onclick = function() {

    disclaimerContent.style.display = "none";
    isDisclaimerOpen = false;

}



let logo = document.getElementById("main-logo");

let logoClicked= false;

logo.onclick = function() {
    if (!logoClicked) {
    document.documentElement.style.setProperty('--themeColor01', '#c1a231');
    document.documentElement.style.setProperty('--themeColor01-hover', '#5f4a0c');
    document.documentElement.style.setProperty('--themeColor02-hover', '#bea82d');
    document.documentElement.style.setProperty('--themeColor03', '#e5d693');
    document.documentElement.style.setProperty('--themeColor04', '#f7f0c6');
    document.documentElement.style.setProperty('--themeColor05', 'rgb(249, 246, 224)');
    logoClicked= true;

    } else if (logoClicked) {

    document.documentElement.style.setProperty('--themeColor01', '#a231c1');
    document.documentElement.style.setProperty('--themeColor01-hover', '#5f0c5f');
    document.documentElement.style.setProperty('--themeColor02-hover', '#712dbe');
    document.documentElement.style.setProperty('--themeColor03', '#d493e5');
    document.documentElement.style.setProperty('--themeColor04', '#edc6f7');
    document.documentElement.style.setProperty('--themeColor05', 'rgb(247, 224, 249)');
    logoClicked= false;

    }

};







/**
 * Javascript to make scroll speed difference
 */

