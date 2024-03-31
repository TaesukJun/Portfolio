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

};

privacyCloseBox.onclick = function() {

    privacyContent.style.display = "none";
    isPrivacyOpen = false;

};


privacyBtn.onclick = function() {
    if (!isPrivacyOpen) {
        privacyContent.style.display = "block";
        isPrivacyOpen = true;

    } else if (isPrivacyOpen) {
        privacyContent.style.display = "none";
        isPrivacyOpen = false;
    }

};



disclaimerBtn.onclick = function() {
    if (!isDisclaimerOpen) {
        disclaimerContent.style.display = "block";
        isDisclaimerOpen = true;

    } else if (isDisclaimerOpen) {
        disclaimerContent.style.display = "none";
        isDisclaimerOpen = false;
    }

};

disclaimerCloseBox.onclick = function() {

    disclaimerContent.style.display = "none";
    isDisclaimerOpen = false;

};

