const shareButton = document.querySelector(".share-btn");
let active = false;
shareButton.addEventListener("click", (MouseEvent) => {
    const popup = document.querySelector(".hidden-pop-up");
    const downTriangle = document.querySelector(".down-triangle");
    // if button was NOT pressed
    if (!active) {
        popup.style.display = "flex";
        if (window.innerWidth > 850)
            downTriangle.style.display = "block";
        shareButton.classList.add("active");
        active = true;
    }
    //if button was pressed
    else {
        popup.style.display = "none";
        downTriangle.style.display = "none";
        shareButton.classList.remove("active");
        active = false;
    }
});
