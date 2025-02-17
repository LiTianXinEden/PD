/*
    This script creates an automatic image slideshow for the image inside the element with id "bakeryApp".
    It cycles through an array of images every 4 seconds, applying a smooth fade-out effect before changing
    the image source. 

    When the page loads, the script selects the image element and initializes an image list with three 
    image paths. A function `changeImage` is used to transition between images: it first applies a fade-out 
    effect using a CSS class, waits 700 milliseconds for the animation to complete, then updates the image 
    source and removes the fade-out class to allow a fade-in transition.

    The `setInterval` function ensures that `changeImage` runs every 4 seconds, continuously cycling through 
    the images in the array.
    
    This effect creates a seamless transition, enhancing the visual experience for users.
*/

//Bakery App (Development)
document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.querySelector("#bakeryApp"); // Target the specific card's image
    const images = [
        "img/adminView.png",
        "img/loginPage.png",
        "img/cartView.png"
    ];
    let index = 0;

    function changeImage() {
        imgElement.classList.add("fade-out"); // Start fade-out

        setTimeout(() => {
            index = (index + 1) % images.length;
            imgElement.src = images[index];
            imgElement.classList.remove("fade-out"); // Fade back in
        }, 700); // Wait for fade-out before changing image
    }

    setInterval(changeImage, 4000); // Change image every 3 seconds
});

//CRUD supermarket (Development)
document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.querySelector("#CRUDsupermarket"); // Target the specific card's image
    const images = [
        "img/marketPage.png",
        "img/marketPageAdd.png",
        "img/marketPageEdit.png",
        "img/marketPageProduct.png"
    ];
    let index = 0;

    function changeImage() {
        imgElement.classList.add("fade-out"); // Start fade-out

        setTimeout(() => {
            index = (index + 1) % images.length;
            imgElement.src = images[index];
            imgElement.classList.remove("fade-out"); // Fade back in
        }, 700); // Wait for fade-out before changing image
    }

    setInterval(changeImage, 4000); // Change image every 3 seconds
});

//VR Escape Room (Development)
document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.querySelector("#vrEscapeRoom"); // Target the specific card's image
    const images = [
        "img/garageOverview.png",
        "img/circuitBox.png",
        "img/shelfView.png",
        "img/tableView.png"
    ];
    let index = 0;

    function changeImage() {
        imgElement.classList.add("fade-out"); // Start fade-out

        setTimeout(() => {
            index = (index + 1) % images.length;
            imgElement.src = images[index];
            imgElement.classList.remove("fade-out"); // Fade back in
        }, 700); // Wait for fade-out before changing image
    }

    setInterval(changeImage, 4000); // Change image every 3 seconds
});

//Brand Package (Design)
document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.querySelector("#brandPackage"); // Target the specific card's image
    const images = [
        "img/namecard.png",
        "img/stickerSet3.png",
        "img/stickerSet1.png",
        "img/portfolioDesign.png",
        "img/aboutDesign.png"
    ];
    let index = 0;

    function changeImage() {
        imgElement.classList.add("fade-out"); // Start fade-out

        setTimeout(() => {
            index = (index + 1) % images.length;
            imgElement.src = images[index];
            imgElement.classList.remove("fade-out"); // Fade back in
        }, 700); // Wait for fade-out before changing image
    }

    setInterval(changeImage, 4000); // Change image every 3 seconds
});

//Typography (Design)
document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.querySelector("#typography"); // Target the specific card's image
    const images = [
        "img/typography1.png",
        "img/typography2.png",
        "img/typography3.png",
        "img/typography_moodboard.png",
        "img/typography_sketch.png",
    ];
    let index = 0;

    function changeImage() {
        imgElement.classList.add("fade-out"); // Start fade-out

        setTimeout(() => {
            index = (index + 1) % images.length;
            imgElement.src = images[index];
            imgElement.classList.remove("fade-out"); // Fade back in
        }, 700); // Wait for fade-out before changing image
    }

    setInterval(changeImage, 4000); // Change image every 3 seconds
});

//Cafe Delivery App (Design)
document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.querySelector("#cafeDeliveryApp"); // Target the specific card's image
    const images = [
        "img/cafeApp_overview.png",
        "img/cafeApp_home.png",
        "img/cafeApp_notif.png",
        "img/cafeApp_orderDetails.png",
        
    ];
    let index = 0;

    function changeImage() {
        imgElement.classList.add("fade-out"); // Start fade-out

        setTimeout(() => {
            index = (index + 1) % images.length;
            imgElement.src = images[index];
            imgElement.classList.remove("fade-out"); // Fade back in
        }, 700); // Wait for fade-out before changing image
    }

    setInterval(changeImage, 4000); // Change image every 3 seconds
});


//MERN Recipe App (Development)
document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.querySelector("#MERNrecipeApp"); // Target the specific card's image
    const images = [
        "img/recipeAppHome.png",
        "img/recipeAppEdit.png",
        "img/recipeAppAI1.png",
        "img/recipeAppAI2.png",
        
    ];
    let index = 0;

    function changeImage() {
        imgElement.classList.add("fade-out"); // Start fade-out

        setTimeout(() => {
            index = (index + 1) % images.length;
            imgElement.src = images[index];
            imgElement.classList.remove("fade-out"); // Fade back in
        }, 700); // Wait for fade-out before changing image
    }

    setInterval(changeImage, 4000); // Change image every 3 seconds
});


//StyleShop UI Kit (Design)
document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.querySelector("#styleShop"); // Target the specific card's image
    const images = [
        "img/styleShopOverview.png",
        "img/styleShopHome.png",
        "img/styleShopClothes.png",
        "img/styleShopDetails.png",
        "img/styleShopCart.png",
        "img/styleShopCheckout.png",
        
    ];
    let index = 0;

    function changeImage() {
        imgElement.classList.add("fade-out"); // Start fade-out

        setTimeout(() => {
            index = (index + 1) % images.length;
            imgElement.src = images[index];
            imgElement.classList.remove("fade-out"); // Fade back in
        }, 700); // Wait for fade-out before changing image
    }

    setInterval(changeImage, 4000); // Change image every 3 seconds
});


//HDB rental listings (Development)
document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.querySelector("#HDBrentalListings"); // Target the specific card's image
    const images = [
        "img/rentalListingsHome.png",
        "img/rentalListingsDetails.png",
        "img/rentalListingsSearch1.png",
        
        
    ];
    let index = 0;

    function changeImage() {
        imgElement.classList.add("fade-out"); // Start fade-out

        setTimeout(() => {
            index = (index + 1) % images.length;
            imgElement.src = images[index];
            imgElement.classList.remove("fade-out"); // Fade back in
        }, 700); // Wait for fade-out before changing image
    }

    setInterval(changeImage, 4000); // Change image every 3 seconds
});