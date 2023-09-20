const projectMenuItem = document.querySelector(".list-menu li:nth-child(2)");
const contactMenuItem = document.querySelector(".list-menu li:nth-child(3)");
const homeMenuItem = document.querySelector(".list-menu li:nth-child(1)");


projectMenuItem.addEventListener("click", () => {
    window.scrollTo({
        top: 600,
        left: 0,
        behavior: "smooth",
    });
});


contactMenuItem.addEventListener("click", () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "auto" });
    }
});

homeMenuItem.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});