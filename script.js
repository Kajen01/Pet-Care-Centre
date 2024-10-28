// Header section
const navigators = document.getElementsByClassName('navigators')[0]

function navigatorFun() {
    // Hide the navigators
    if (navigators.style.display === 'block') {
        navigators.style.display = 'none';
    }
    // Show the navigators
    else {
        navigators.style.display = 'block';
    }
}
// Reload the page
function refreshOnResize() {
    window.location.reload();
}
window.addEventListener('resize', refreshOnResize);

function disableScroll() {
    document.body.classList.add('no-scroll');
}

function enableScroll() {
    document.body.classList.remove('no-scroll');
}

// User section
const blurbackground = document.getElementsByClassName('blurbackground')[0]
const signin = document.getElementsByClassName('signin')[0]
const signup = document.getElementsByClassName('signup')[0]
const forget = document.getElementsByClassName('forget')[0]
const sendmessage = document.getElementsByClassName('sendmessage')[0]

function signinFun() {
    if (blurbackground.style.display === 'block') {
        doneFun()
    }
    else {
        disableScroll()
        blurbackground.style.display = 'block'
        signin.style.display = 'block'
        signup.style.display = 'none'
        forget.style.display = 'none'
        sendmessage.style.display = 'none'
    }
}

function signupFun() {
    disableScroll()
    blurbackground.style.display = 'block'
    signin.style.display = 'none'
    signup.style.display = 'block'
    forget.style.display = 'none'
    sendmessage.style.display = 'none'
}

function submitFun() {
    enableScroll()
    blurbackground.style.display = 'none'
    signin.style.display = 'none'
    signup.style.display = 'none'
    forget.style.display = 'none'
    sendmessage.style.display = 'none'
}

function forgetFun() {
    disableScroll()
    blurbackground.style.display = 'block'
    signin.style.display = 'none'
    signup.style.display = 'none'
    forget.style.display = 'block'
    sendmessage.style.display = 'none'
}

function sendFun() {
    disableScroll()
    blurbackground.style.display = 'block'
    signin.style.display = 'none'
    signup.style.display = 'none'
    forget.style.display = 'none'
    sendmessage.style.display = 'block'
}

function doneFun() {
    enableScroll()
    blurbackground.style.display = 'none'
    signin.style.display = 'none'
    signup.style.display = 'none'
    forget.style.display = 'none'
    sendmessage.style.display = 'none'
}

function handleSubmit(event) {
    event.preventDefault();
}

// Link with forDogs
const forDogs = document.getElementsByClassName('fordogs')[0]
forDogs.addEventListener('click', function () {
    window.location.href = './forDogs.html'
})


const forCats = document.getElementsByClassName('forcats')[0]
forCats.addEventListener('click', function () {
    window.location.href = './forCats.html'
})
