const panels = document.querySelectorAll('.panel');

// Event listeners
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

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



