// --- Dropmenu ---
var dropdownLink = document.querySelector(".expandable-item");
var dropMenu = document.querySelector(".drop-menu");

dropdownLink.addEventListener("click", function () {
    try {
        if (dropMenu.style.display == "block") {
            dropMenu.style.display = "none";
        } else {
            dropMenu.style.display = "block";
        }
    } catch (err) {
        console.log("[JavaScript Error]", err);
    }
});

// --- Sidenav Toggler ---
var toggler = document.querySelector(".toggler");
toggler.addEventListener("click", showSidenav);

function showSidenav() {
    var sidenav = document.querySelector("aside");
    var sidenavCard = document.querySelectorAll(".sidenav-card");
    var linkText = document.querySelectorAll(".text");
    var expandIcon = document.querySelector("#expandable");

    try {
        if (sidenav.style.width == "85px") {
            sidenav.style.width = "275px";
            expandIcon.style.display = "block";

            // Loop through all specified elements
            for (var element = 0; element < sidenavCard.length; element++) {
                sidenavCard[element].style.textAlign = "initial";
            }

            for (var element = 0; element < linkText.length; element++) {
                linkText[element].style.display = "inline-block";
            }
        } else {
            sidenav.style.width = "85px";
            expandIcon.style.display = "none";

            for (var element = 0; element < sidenavCard.length; element++) {
                sidenavCard[element].style.textAlign = "center";
            }

            for (var element = 0; element < linkText.length; element++) {
                linkText[element].style.display = "none";
            }
        }
    } catch (err) {
        console.error("[JavaScript Error]", err);
    }
}