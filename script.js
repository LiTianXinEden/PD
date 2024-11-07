//SCROLLING EFFECT================================
let introContent = document.getElementById('intro-content');
let background = document.getElementById('background-image');
window.addEventListener('scroll', function () {
    let value = window.scrollY;

    introContent.style.marginTop = value * 0.5 + 'px';
    background.style.marginTop = value * 0.5 + 'px';
});

//=============================================
//TYPING EFFECT================================
const dynamicText = document.querySelector(".typingeffect h2 span");
const words = ["HTML", "CSS", "JavaScript"];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    console.log(currentWord, currentChar);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
};

typeEffect();


//=============================================
//TABBED CONTENT================================
const tabs = document.querySelectorAll('.custom-tab');
const contentSections = {
    all: document.getElementById('all-content'),
    development: document.getElementById('development-content'),
    design: document.getElementById('design-content')
};
// Event listener for each tab
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and reset z-index
        tabs.forEach(t => {
            t.classList.remove('active');
            t.style.zIndex = ''; // Reset z-index
        });
        // Add active class to the clicked tab
        tab.classList.add('active');
        
        // Set custom z-index order
        if (tab.dataset.tab === "design") {
            document.querySelector('[data-tab="design"]').style.zIndex = 10;
            document.querySelector('[data-tab="development"]').style.zIndex = 9;
            document.querySelector('[data-tab="all"]').style.zIndex = 8;
        } else if (tab.dataset.tab === "development") {
            document.querySelector('[data-tab="development"]').style.zIndex = 10;
            document.querySelector('[data-tab="all"]').style.zIndex = 9;
            document.querySelector('[data-tab="design"]').style.zIndex = 8;
        } else {
            document.querySelector('[data-tab="all"]').style.zIndex = 10;
            document.querySelector('[data-tab="development"]').style.zIndex = 9;
            document.querySelector('[data-tab="design"]').style.zIndex = 8;
        }
        // Hide all content sections
        Object.values(contentSections).forEach(section => {
            section.style.display = 'none';
        });
        // Show the selected content section
        const tabContent = tab.dataset.tab;
        contentSections[tabContent].style.display = 'block';
    });
});
