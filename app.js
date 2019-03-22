const panels = document.querySelectorAll('.panel');

// Event listeners
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

    // Show loader
    document.querySelectorAll('.panel').style.opacity = '0.1';

document.addEventListener('readystatechange', event => {

    if (event.target.readyState === "complete") {
        alert("Now external resources are loaded too, like css,src etc... ");
                // Hide loader
                document.querySelectorAll('.panel').style.opacity = '1';
    }

});

// Toggle flex item resize
function toggleOpen() {
    this.classList.toggle('open');
}

// Toggle text animation
function toggleActive(e) {
    // Listen for "flex-grow" ("flex" in Safari, so "includes" used to cover both)
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}



