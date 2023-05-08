$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('header').length && !$(event.target).is('#menu')) {
            $('#menu').removeClass('fa-times');
            $('header').removeClass('toggle');
        }
    });

});

const colorSchemeSelect = document.getElementById('color-scheme');

const colorSchemes = {
    default: {
        "--purple": "#00580a",
        "--positiveShadow1": "#4000ff",
        "--positiveShadow": "#000000d9",
        "--positiveProjectShadow": "#000000d9",
        "--negativeShadow": "#de0059be",
        "--topLeftBG": "#330000",
        "--bottomRightBG": "#d20043",
        "--darkShadow": "#ffb744",
        "--border": "rgb(255, 0, 55)",
        "--imgBorder": "rgb(255, 0, 55)",
        "--headerImage": "url('bg_4.png')",
    },
    scheme1: {
        "--purple": "#00580a",
        "--positiveShadow1": "#4000ff",
        "--positiveShadow": "#0000009f",
        "--positiveProjectShadow": "#0000009f",
        "--negativeShadow": "#0040ffbe",
        "--topLeftBG": "#090033",
        "--bottomRightBG": "#1363d3",
        "--darkShadow": "#009dff",
        "--border": "rgb(0, 102, 255)",
        "--imgBorder": "rgb(0, 0, 0)",
        "--headerImage": "url('bg_3.png')",
    },
    scheme2: {
        "--purple": "#00f81d",
        "--positiveShadow1": "#00ff1e",
        "--positiveShadow": "#001b02",
        "--positiveProjectShadow": "#282828",
        "--negativeShadow": "#38bb00d9",
        "--topLeftBG": "#002504",
        "--bottomRightBG": "#98d900",
        "--darkShadow": "#88ff00",
        "--border": "rgba(47, 255, 0, 0.742)",
        "--imgBorder": "rgba(47, 255, 0, 0.742)",
        "--headerImage": "url('bg_2.png')"
    },
    scheme3: {
        "--purple": "#00580a",
        "--positiveShadow1": "#4000ff",
        "--positiveShadow": "#000000d9",
        "--positiveProjectShadow": "#000000d9",
        "--negativeShadow": "#b300ff6a",
        "--topLeftBG": "#130033",
        "--bottomRightBG": "#a600ff",
        "--darkShadow": "#ff00ea",
        "--border": "rgb(0, 242, 255)",
        "--imgBorder": "rgb(0, 242, 255)",
        "--headerImage": "url('bg_1.png')"
    },
};

const imagePaths = {
    default: 'leaves-ember.png',
    scheme1: 'leaves-azure.png', // azure
    scheme2: 'leaves-verdant.png', // neon nights
    scheme3: 'leaves-neon-nights.png',
};

colorSchemeSelect.addEventListener('change', (e) => {
    const selectedScheme = e.target.value;
    const root = document.documentElement;
    const scheme = colorSchemes[selectedScheme];
    document.getElementById('leaves').src = imagePaths[selectedScheme];

    for (const key in scheme) {
        root.style.setProperty(key, scheme[key]);
    }
});

const points = [
    "Welcome to my personal portfolio website.",
    "I am a highly motivated and dedicated programmer with over 4 years of experience.",
    "My passion for technology and continuous learning has led me to utilize diverse frameworks in order to build innovative solutions.",
    "I specialize in Python and proficient in various other programming languages.",
    "I view challenges as opportunities to expand my knowledge and enhance my skills in computer science.",
    "Here, you can explore my projects and learn more about my programming journey."
];

let currentIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

const typingText = document.querySelector('.typing-text');

function type() {
if (isDeleting) {
    if (currentCharIndex > 0) {
    currentCharIndex--;
    typingText.textContent = points[currentIndex].substr(0, currentCharIndex);
    } else {
    isDeleting = false;
    }
} else {
    if (currentCharIndex < points[currentIndex].length) {
    currentCharIndex++;
    typingText.textContent = points[currentIndex].substr(0, currentCharIndex);
    } else {
    setTimeout(() => {
        isDeleting = true;
    }, 2000);
    }
}

setTimeout(() => {
    type();
}, isDeleting ? 10 : 40);

if (isDeleting && currentCharIndex === 0) {
    currentIndex = (currentIndex + 1) % points.length;
}
}

type();
  

const pythonSkills = [
    "DS & Algorithms",
    "Numpy",
    "Pandas",
    "Matplotlib",
    "Streamlit",
    "Tensorflow",
];

// let currentIndex = 0;
// let currentCharIndex = 0;
// let isDeleting = false;

// const typingText = document.querySelector('.typing-text');

// function type() {
// if (isDeleting) {
//     if (currentCharIndex > 0) {
//     currentCharIndex--;
//     typingText.textContent = points[currentIndex].substr(0, currentCharIndex);
//     } else {
//     isDeleting = false;
//     }
// } else {
//     if (currentCharIndex < points[currentIndex].length) {
//     currentCharIndex++;
//     typingText.textContent = points[currentIndex].substr(0, currentCharIndex);
//     } else {
//     setTimeout(() => {
//         isDeleting = true;
//     }, 2000);
//     }
// }

// setTimeout(() => {
//     type();
// }, isDeleting ? 10 : 40);

// if (isDeleting && currentCharIndex === 0) {
//     currentIndex = (currentIndex + 1) % points.length;
// }
// }

// type();