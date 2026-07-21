document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("before-after-slider");
    if(!slider) return;
    
    const foreground = slider.querySelector(".img-foreground");
    const handle = slider.querySelector(".slider-handle");
    let isDragging = false;

    function moveSlider(x) {
        let rect = slider.getBoundingClientRect();
        let position = ((x - rect.left) / rect.width) * 100;
        if (position < 0) position = 0;
        if (position > 100) position = 100;
        foreground.style.width = position + "%";
        handle.style.left = position + "%";
    }

    slider.addEventListener("mousedown", () => isDragging = true);
    window.addEventListener("mouseup", () => isDragging = false);
    window.addEventListener("mousemove", (e) => {
        if (isDragging) moveSlider(e.clientX);
    });

    // Touch support
    slider.addEventListener("touchstart", () => isDragging = true);
    window.addEventListener("touchend", () => isDragging = false);
    window.addEventListener("touchmove", (e) => {
        if (isDragging) moveSlider(e.touches[0].clientX);
    });
});
