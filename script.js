$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

});

const colorSchemeSelect = document.getElementById('color-scheme');

const colorSchemes = {
    default: {
        "--purple": "#00f81d",
        "--positiveShadow1": "#00ff1e",
        "--positiveShadow": "#001b02",
        "--positiveProjectShadow": "#282828",
        "--negativeShadow": "#38bb00d9",
        "--topLeftBG": "#002504",
        "--bottomRightBG": "#98d900",
        "--darkShadow": "#88ff00",
        "--border": "rgba(47, 255, 0, 0.742)",
        "--headerImage": "url('bg_2.png')"
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
        "--headerImage": "url('bg_3.png')",
    },
    scheme2: {
        "--purple": "#00580a",
        "--positiveShadow1": "#4000ff",
        "--positiveShadow": "#000000d9",
        "--positiveProjectShadow": "#000000d9",
        "--negativeShadow": "#de0059be",
        "--topLeftBG": "#330000",
        "--bottomRightBG": "#d20043",
        "--darkShadow": "#ffb744",
        "--border": "rgb(255, 0, 55)",
        "--headerImage": "url('bg_4.png')",
    },
    scheme3: {
        "--purple": "#00580a",
        "--positiveShadow1": "#4000ff",
        "--positiveShadow": "#000000d9",
        "--positiveProjectShadow": "#000000d9",
        "--negativeShadow": "#a600ff00",
        "--topLeftBG": "#130033",
        "--bottomRightBG": "#a600ff",
        "--darkShadow": "#ff00ea",
        "--border": "rgb(0, 242, 255)",
        "--headerImage": "url('bg_1.png')"
    },
};

colorSchemeSelect.addEventListener('change', (e) => {
    const selectedScheme = e.target.value;
    const root = document.documentElement;
    const scheme = colorSchemes[selectedScheme];

    for (const key in scheme) {
        root.style.setProperty(key, scheme[key]);
    }
});

