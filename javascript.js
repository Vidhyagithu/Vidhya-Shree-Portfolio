let communicationProgress = document.querySelector(".communication");
let problemSolvingProgress = document.querySelector(".problem-solving");
let creativityProgress = document.querySelector(".creativity");
let teamWorkProgress = document.querySelector(".team-work");

let progressStartValue = 0,
    progressEndValue = 90,
    speed = 25;

let progress = setInterval(() => {
    progressStartValue++;

    communicationProgress.style.background = `conic-gradient(rgb(244,180,26) ${progressStartValue * 3.6}deg, #11344b 0deg)`
    problemSolvingProgress.style.background = `conic-gradient(rgb(244,180,26) ${progressStartValue * 2.88}deg, #11344b 0deg)`
    creativityProgress.style.background = `conic-gradient(rgb(244,180,26) ${progressStartValue * 3.06}deg, #11344b 0deg)`
    teamWorkProgress.style.background = `conic-gradient(rgb(244,180,26) ${progressStartValue * 2.70}deg, #11344b 0deg)`

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);
//Smooth Scrolling
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
