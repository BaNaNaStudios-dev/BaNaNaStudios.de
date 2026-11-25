"use strict";
/* Mehr Leben: Devlog-Menüpunkt, Community (Social-Links + Newsletter), animierter Fortschritt */

/* ===== HIER DEINE SOCIAL-LINKS EINTRAGEN =====
   Einfach zwischen die Anführungszeichen die Adresse einfügen.
   Leere Zeilen werden auf der Website nicht angezeigt. */
const SOCIAL_LINKS = [
    { name: "YouTube",   url: "" },   // z. B. "https://www.youtube.com/@deinkanal"
    { name: "TikTok",    url: "" },   // z. B. "https://www.tiktok.com/@deinname"
    { name: "Instagram", url: "" },   // z. B. "https://www.instagram.com/deinname"
    { name: "Discord",   url: "" }    // z. B. "https://discord.gg/deincode"
];


const TEXT = {
    de: {
        "spot.kicker": "UNSER NÄCHSTES SPIEL", "spot.watch": "Teaser #1 ansehen",
        "spot.text": "Überlebe in der Natur: Finde Essen, achte auf deine Ausdauer und lerne Heiltechniken, um zu überleben.",
        "spot.s1": "Idee & Konzept", "spot.s2": "Programmierung", "spot.s3": "Testphase", "spot.s4": "Release 2028–2029",
        "spot.news": "Alle News",
        "com.kicker": "COMMUNITY", "com.title": "Bleib dabei",
        "com.text": "Folge uns und erfahre als Erstes, wenn es Neuigkeiten zu Nature Chaos gibt.",
        "com.follow": "Folge uns", "com.news": "Neuigkeiten per E-Mail",
        "com.placeholder": "Deine E-Mail-Adresse", "com.submit": "Anmelden",
        "com.consent": "Ich möchte E-Mails mit Neuigkeiten von BaNaNa Studios bekommen und kann mich jederzeit wieder abmelden.",
        "com.sending": "Wird gesendet …", "com.ok": "Danke! Wir haben deine Anmeldung bekommen.",
        "com.err": "Das hat leider nicht geklappt. Bitte versuche es später noch einmal.",
        "com.noSocial": "Die Links folgen bald.",

    },
    en: {
        "spot.kicker": "OUR NEXT GAME", "spot.watch": "Watch Teaser #1",
        "spot.text": "Survive in the wild: find food, watch your stamina and learn healing techniques to stay alive.",
        "spot.s1": "Idea & concept", "spot.s2": "Programming", "spot.s3": "Testing", "spot.s4": "Release 2028–2029",
        "spot.news": "All news",
        "com.kicker": "COMMUNITY", "com.title": "Stay in the loop",
        "com.text": "Follow us and be the first to know when there is news about Nature Chaos.",
        "com.follow": "Follow us", "com.news": "News by email",
        "com.placeholder": "Your email address", "com.submit": "Subscribe",
        "com.consent": "I would like to receive emails with news from BaNaNa Studios and can unsubscribe at any time.",
        "com.sending": "Sending …", "com.ok": "Thank you! We received your subscription.",
        "com.err": "That did not work. Please try again later.",
        "com.noSocial": "Links coming soon.",

    }
};

function currentLang() { return localStorage.getItem("banana-language") === "en" ? "en" : "de"; }
function tt(key) { return (TEXT[currentLang()] || TEXT.de)[key] || key; }

function applyTexts() {
    document.querySelectorAll("[data-t]").forEach(el => { el.textContent = tt(el.dataset.t); });
    document.querySelectorAll("[data-t-ph]").forEach(el => { el.placeholder = tt(el.dataset.tPh); });
    renderSocial();
}

function renderSocial() {
    const box = document.getElementById("social-links");
    if (!box) return;
    box.replaceChildren();
    const active = SOCIAL_LINKS.filter(s => /^https:\/\//.test(s.url));
    const section = document.getElementById("community");
    if (section) section.hidden = !active.length;
    if (!active.length) {
        const p = document.createElement("p");
        p.className = "form-hint";
        p.textContent = tt("com.noSocial");
        box.append(p);
        return;
    }
    active.forEach(s => {
        const a = document.createElement("a");
        a.className = "social-link";
        a.href = s.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = s.name;
        box.append(a);
    });
}

function setupStepper() {
    const stepper = document.getElementById("stepper");
    if (!stepper) return;
    if (!("IntersectionObserver" in window)) { stepper.classList.add("in-view"); return; }
    new IntersectionObserver((entries, observer) => {
        entries.forEach(e => { if (e.isIntersecting) { stepper.classList.add("in-view"); observer.disconnect(); } });
    }, { threshold: 0.4 }).observe(stepper);
}

document.addEventListener("DOMContentLoaded", () => {
    applyTexts();
    setupStepper();
    document.getElementById("language-select")?.addEventListener("change", () => setTimeout(applyTexts, 0));
});
