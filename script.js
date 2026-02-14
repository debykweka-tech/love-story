function goToPage(pageId) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
}

function validateContract() {
    const box = document.getElementById("accept");
    if (box.checked) {
        goToPage("page4");
    } else {
        alert("Tu dois accepter l’accord avant 😌");
    }
}

function sendEmail() {
    const email = document.getElementById("email").value;

    if (!email) {
        alert("Entre une adresse e-mail valide");
        return;
    }

    // Objet du mail
    const subject = encodeURIComponent("Certificat officiel de Valentine 💖");

    // Contenu du mail : CERTIFICAT personnalisé
    const body = encodeURIComponent(
        "───────────────────────────────\n" +
        "        Certificat Officiel\n" +
        "         Valentine & Couple\n" +
        "───────────────────────────────\n\n" +
        "Ce document certifie que :\n\n" +
        "Gra-dee\n\n" +
        "a officiellement accepté l’Accord Valentine avec\n\n" +
        "Debora Kweka\n\n" +
        "en ce jour du 14 février 2026.\n\n" +
        "Ce certificat symbolise un engagement sincère, une complicité durable,\n" +
        "et l’ouverture à des aventures remplies d’amour et de folie.\n\n" +
        "Merci pour ta fidélité et ta confiance ❤️\n\n" +
        "Avec tout mon cœur,\n" +
        "Debora Kweka\n" +
        "───────────────────────────────"
    );

    // Ouvre le client mail avec tout prérempli
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
