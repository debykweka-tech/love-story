function goToPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => page.classList.remove("active"));

    document.getElementById(pageId).classList.add("active");
}

function validateContract() {
    const checkbox = document.getElementById("accept");

    if (checkbox.checked) {
        goToPage("page4");
    } else {
        alert("Tu dois d’abord approuver l’accord 😌");
    }
}
