const panels = document.querySelectorAll(".panel");




panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClassAll();
        panel.classList.add('active')
    });
});

function removeActiveClassAll() {
    panels.forEach(panel => {panel.classList.remove("active")});
}