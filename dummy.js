// script.js
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load all components
loadComponent('forDogs', 'forDogs.html');
loadComponent('forCats', 'forCats.html');