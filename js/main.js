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
let isSub = document.getElementById('isSub').innerHTML;

let logoClicked= true; 

logo.onclick = function() {
    if (!logoClicked) {  
    document.documentElement.style.setProperty('--themeColor01', '#c1a231');
    document.documentElement.style.setProperty('--themeColor01-hover', '#5f4a0c');
    document.documentElement.style.setProperty('--themeColor02-hover', '#bea82d');
    document.documentElement.style.setProperty('--themeColor03', '#e5d693');
    document.documentElement.style.setProperty('--themeColor04', '#f7f0c6');
    document.documentElement.style.setProperty('--themeColor05', 'rgb(249, 246, 224)');
    logoClicked= true;
    if (isSub=="sub") {
        console.log(logo.src)
        logo.src="../img/pikachu.png";

    } else {
        logo.src="img/pikachu.png";
    }
    

    } else if (logoClicked) {
    console.log(logo.src) 
    document.documentElement.style.setProperty('--themeColor01', '#a231c1');
    document.documentElement.style.setProperty('--themeColor01-hover', '#5f0c5f');
    document.documentElement.style.setProperty('--themeColor02-hover', '#712dbe');
    document.documentElement.style.setProperty('--themeColor03', '#d493e5');
    document.documentElement.style.setProperty('--themeColor04', '#edc6f7');
    document.documentElement.style.setProperty('--themeColor05', 'rgb(247, 224, 249)');
    logoClicked= false;
    logo.src="img/icon/ditto.png";
    if (isSub=="sub") {
        logo.src="../img/icon/ditto.png";
    } else {
        logo.src="img/icon/ditto.png";
    }

    }

};


// let logoSub = document.getElementById("main-logo4");

// let logoSubClicked= false;

// logoSub.onclick = function() {
//     if (!logoSubClicked) {
//     document.documentElement.style.setProperty('--themeColor01', '#c1a231');
//     document.documentElement.style.setProperty('--themeColor01-hover', '#5f4a0c');
//     document.documentElement.style.setProperty('--themeColor02-hover', '#bea82d');
//     document.documentElement.style.setProperty('--themeColor03', '#e5d693');
//     document.documentElement.style.setProperty('--themeColor04', '#f7f0c6');
//     document.documentElement.style.setProperty('--themeColor05', 'rgb(249, 246, 224)');
//     logoSubClicked= true;
//     //logoSub.src="../img/pikachu.png";

//     } else if (logoSubClicked) {

//     document.documentElement.style.setProperty('--themeColor01', '#a231c1');
//     document.documentElement.style.setProperty('--themeColor01-hover', '#5f0c5f');
//     document.documentElement.style.setProperty('--themeColor02-hover', '#712dbe');
//     document.documentElement.style.setProperty('--themeColor03', '#d493e5');
//     document.documentElement.style.setProperty('--themeColor04', '#edc6f7');
//     document.documentElement.style.setProperty('--themeColor05', 'rgb(247, 224, 249)');
//     logoSubClicked= false;
//     //logoSub.src="../img/ditto.png";
//     }

// };



// Get the button element
const galleryBurger = document.getElementById('galleryBurger');
const galleryBurgerSub = document.getElementById('galleryBurgerSub');

// Add a mouseover event listener
galleryBurger.addEventListener('mouseover', () => {
  // Change the button's background color
  galleryBurger.style.backgroundColor = 'var(--themeColor03)';
  galleryBurgerSub.style.opacity = 1;
  galleryBurgerSub.style.display ='block';
  galleryBurgerSub.style.visibility ='visible';
  galleryBurgerSub.style.height ='20rem';
  galleryBurgerSub.style.transition ="all 1s";
  
});



// Add a mouseout event listener
galleryBurger.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    // galleryBurger.style.backgroundColor = 'green';
    // setTimeout(()=> {
    //     galleryBurgerSub.style.opacity = 0;
    //     galleryBurgerSub.style.display ='none';
    //     galleryBurgerSub.style.visibility ='hidden';
    //     galleryBurgerSub.style.height ='0rem';
    //     galleryBurgerSub.style.transition ='all 1s ease-in-out';
    // }, 1000);
    galleryBurgerSub.style.opacity = 0;
    galleryBurgerSub.style.display ='none';
    galleryBurgerSub.style.visibility ='hidden';
    galleryBurgerSub.style.height ='0rem';
    galleryBurgerSub.style.transition ="all 1s";

});

  galleryBurgerSub.addEventListener('mouseover', () => {
    // Change the button's background color
    galleryBurger.style.backgroundColor = 'var(--themeColor01)';
    galleryBurgerSub.style.opacity = 1;
    galleryBurgerSub.style.display ='block';
    galleryBurgerSub.style.visibility ='visible';
    galleryBurgerSub.style.height ='20rem';
    galleryBurgerSub.style.transition ="all 1s";
    
  });

  galleryBurgerSub.addEventListener('mouseout', () => {
    // Change the button's background color
    galleryBurger.style.backgroundColor = 'var(--themeColor03)'
    galleryBurgerSub.style.opacity = 0;
    galleryBurgerSub.style.display ='none';
    galleryBurgerSub.style.visibility ='hidden';
    galleryBurgerSub.style.height ='0rem';
    galleryBurgerSub.style.transition ="all 1s";

    
  });




let fadingTime = 300;

function fadeOutAndIn(el) {
                    
    let opacity = 1; // Initial opacity
    let opacity2 = 0; // Fading in opacity
    let interval = setInterval(function() {
    if (opacity > 0) {
        opacity -= 50/fadingTime;
        //parametric function for fading away
        el.style.opacity = opacity * opacity / (2 * (opacity * opacity - opacity) + 1);
    } else if (opacity2 < 1.01){
        opacity2 += 50/fadingTime;
        el.style.opacity = opacity2;
    } else {
        clearInterval(interval); // Stop the interval when opacity reaches 0
        el.style.opacity = 1.1;
        // el.style.display = 'none'; // Hide the element
    }
    }, 50); 
}

function fadeOut(el) {
                    
    let opacity = 1; // Initial opacity
    let interval = setInterval(function() {
    if (opacity > 0) {
        // console.log(opacity);
        opacity -= 50/fadingTime;
        //parametric function for fading away
        el.style.opacity = opacity;
        // el.style.opacity = opacity * opacity / (2 * (opacity * opacity - opacity) + 1);
    } else {
        clearInterval(interval); // Stop the interval when opacity reaches 0
        el.style.opacity = 0;
        el.style.display = 'none'; // Hide the element
    }
    }, 50);
}

function fadeIn(el) {
                    
    let opacity = 0; // Initial opacity
    let interval = setInterval(function() {
    el.style.display = 'flex';
    if (opacity < 1.01) {
        opacity += 50/fadingTime;
        el.style.opacity = opacity * opacity / (2 * (opacity * opacity - opacity) + 1);
    } else {
        clearInterval(interval); 
        el.style.opacity = 1;
        
    }
    }, 50);
}




/**
 * Javascript to make scroll speed difference
 */

