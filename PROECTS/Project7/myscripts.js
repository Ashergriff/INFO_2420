var logo1 = new Image();
var logo2 = new Image();

var imgArray = [
    "image1lg.jpg",
    "image2lg.jpg",
    "image3lg.jpg",
    "image4lg.jpg"
];

var titleArray = [
    "American Goldfinch",
    "Bald Eagle",
    "Blue Bird",
    "Cardinal"
];

var imgPath = "Images/fullsize/";

function swapImage(imgID) {
    var theImage = document.getElementById("theImage");
    var textDiv = document.getElementById("bottomText");

    if (theImage && textDiv) {
        theImage.src = imgPath + imgArray[imgID];
        theImage.alt = titleArray[imgID];
        textDiv.textContent = titleArray[imgID];
    }
}

function preloadImages() {
    var i;
    var tmpImg;

    logo1.src = "Images/nobckglogo.png";
    logo2.src = "Images/logohovers.png";

    for (i = 0; i < imgArray.length; i++) {
        tmpImg = new Image();
        tmpImg.src = imgPath + imgArray[i];
    }
}
