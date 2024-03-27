// Data

const colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen',
];
const hexCode = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',];

// Initialize the toggle

let isSimple = true;
let isHex = false;
let colorFlipperClicked = false;


// Constant for element

const btn = document.getElementById('btn');
const toggleSimple = document.getElementById('toggleSimple');
const toggleHex = document.getElementById('toggleHex');
const invert = document.getElementById('invert');


// constant for query

const myColor = document.querySelector(".Project1-ColorFlipper-container-color");
const signSimple01 = document.querySelector(".Project1-ColorFlipper-menu-2-simple");
const signSimple02 = document.querySelector(".Project1-ColorFlipper-menu-2-simple:hover");

const signHex01 = document.querySelector(".Project1-ColorFlipper-menu-2-hex");
const signHex02 = document.querySelector(".Project1-ColorFlipper-menu-2-hex:hover");



// Clicking the toggles



toggleHex.addEventListener('click', function(){
    if (!isHex) {
    signHex01.style.color = "var(--themeColor01)";
    signHex01.style.cursor = "default";
    /*
    signHex02.style.filter = "brightness(110%)";
    signHex02.style.color = "var(--themeColor01)";
        
    } 
    */
    toggleHex.classList.add('HoverClass01');


    signSimple01.style.color = "black";
    signSimple01.style.cursor = "pointer";
    toggleSimple.classList.add('HoverClass01');
    toggleHex.classList.remove('HoverClass01');

    isSimple = false;
    isHex = true;
    }
    
}
);



toggleSimple.addEventListener('click', function(){
    if (!isSimple) {
    signSimple01.style.color = "var(--themeColor01)";
    signSimple01.style.cursor = "default";

    toggleSimple.classList.add('HoverClass01');


    signHex01.style.color = "black";
    signHex01.style.cursor = "pointer";
    toggleHex.classList.add('HoverClass01');
    toggleSimple.classList.remove('HoverClass01');
    isSimple = true;
    isHex = false;
    }
    
}
);






// Random Color Generating


function getRandNum() {
    return Math.floor(Math.random() * colors.length);

};

function getRandNumHex() {
    return Math.floor(Math.random() * hexCode.length);

};



btn.addEventListener('click', function(){

    if (isSimple) {

    const randomNumber = getRandNum();
    document.body.style.backgroundColor = colors[randomNumber];
    myColor.textContent=colors[randomNumber];
    myColor.style.color=colors[randomNumber];

    myColor.style.filter="invert(0)";
    colorFlipperClicked = false;
    } else if (isHex) {
    
    let colorText = `#`;
        for (let i = 0; i < 6; i++) {
            colorText = colorText + hexCode[getRandNumHex()];

            
        };
    document.body.style.backgroundColor = colorText;
    myColor.textContent=colorText;
    myColor.style.color=colorText;
    myColor.style.filter="invert(0)";
    colorFlipperClicked = false;

    }
        
}

);


// Invert the color by Title Color Flipper

invert.addEventListener('click', function(){
    if (!colorFlipperClicked) {
    myColor.textContent=`Invert : `+myColor.textContent;
    myColor.style.filter="invert(1)";
    colorFlipperClicked = true
    } else {
    
    myColor.textContent= myColor.textContent.replace(`Invert : `,"");
    myColor.style.filter="invert(0)";
    colorFlipperClicked = false
    }

}
);





