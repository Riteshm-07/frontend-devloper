const viewProjectsBtn = document.getElementById("viewProjectsBtn");
const backBtn = document.getElementById("backBtn");

const mainContent = document.querySelector(".main-content");
const projectsSection = document.getElementById("projectsSection");

viewProjectsBtn.addEventListener("click", () => {
    mainContent.style.display = "none";
    projectsSection.style.display = "block";
    window.scrollTo(0, 0);
});

backBtn.addEventListener("click", () => {
    projectsSection.style.display = "none";
    mainContent.style.display = "block";
    window.scrollTo(0, 0);
});
