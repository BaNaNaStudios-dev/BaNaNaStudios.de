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

const NEWSLETTER_ENDPOINT = "https://formsubmit.co/ajax/bananastudiosofficalde@mail.de";

const TEXT = {
    de: {
        "spot.kicker": "UNSER NÄCHSTES SPIEL", "spot.watch": "Teaser #1 ansehen",
        "spot.text": "Überlebe in der Natur: Finde Essen, achte auf deine Ausdauer und lerne Heiltechniken, um zu überleben.",
        "spot.s1": "Idee & Konzept", "spot.s2": "Programmierung", "spot.s3": "Testphase", "spot.s4": "Release 2028–2029",
        "spot.devlog": "Zum Entwicklungs-Tagebuch", "spot.news": "Alle News",
        "card.devTitle": "Entwicklungs-Tagebuch", "card.devText": "Schau uns beim Entwickeln zu: Fortschritt, Einblicke und kleine Updates.", "card.devLink": "Zum Tagebuch →",
        "com.kicker": "COMMUNITY", "com.title": "Bleib dabei",
        "com.text": "Folge uns und erfahre als Erstes, wenn es Neuigkeiten zu Nature Chaos gibt.",
        "com.follow": "Folge uns", "com.news": "Neuigkeiten per E-Mail",
        "com.placeholder": "Deine E-Mail-Adresse", "com.submit": "Anmelden",
        "com.consent": "Ich möchte E-Mails mit Neuigkeiten von BaNaNa Studios bekommen und kann mich jederzeit wieder abmelden.",
        "com.sending": "Wird gesendet …", "com.ok": "Danke! Wir haben deine Anmeldung bekommen.",
        "com.err": "Das hat leider nicht geklappt. Bitte versuche es später noch einmal.",
        "com.noSocial": "Die Links folgen bald.",
        "dev.kicker": "HINTER DEN KULISSEN", "dev.title": "Entwicklungs-Tagebuch",
        "dev.intro": "Hier zeigen wir, woran wir gerade arbeiten. Die neuesten Einträge stehen oben."
    },
    en: {
        "spot.kicker": "OUR NEXT GAME", "spot.watch": "Watch Teaser #1",
        "spot.text": "Survive in the wild: find food, watch your stamina and learn healing techniques to stay alive.",
        "spot.s1": "Idea & concept", "spot.s2": "Programming", "spot.s3": "Testing", "spot.s4": "Release 2028–2029",
        "spot.devlog": "Open the development diary", "spot.news": "All news",
        "card.devTitle": "Development Diary", "card.devText": "Watch us build: progress, behind-the-scenes and small updates.", "card.devLink": "Open diary →",
        "com.kicker": "COMMUNITY", "com.title": "Stay in the loop",
        "com.text": "Follow us and be the first to know when there is news about Nature Chaos.",
        "com.follow": "Follow us", "com.news": "News by email",
        "com.placeholder": "Your email address", "com.submit": "Subscribe",
        "com.consent": "I would like to receive emails with news from BaNaNa Studios and can unsubscribe at any time.",
        "com.sending": "Sending …", "com.ok": "Thank you! We received your subscription.",
        "com.err": "That did not work. Please try again later.",
        "com.noSocial": "Links coming soon.",
        "dev.kicker": "BEHIND THE SCENES", "dev.title": "Development Diary",
        "dev.intro": "Here we show what we are working on right now. The newest entries are at the top."
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

function setupNewsletter() {
    const form = document.getElementById("newsletter-form");
    if (!form) return;
    const status = document.getElementById("newsletter-status");
    const button = form.querySelector("button[type=submit]");
    const say = (key, kind) => { status.textContent = tt(key); status.className = "form-status" + (kind ? " " + kind : ""); };

    form.addEventListener("submit", async event => {
        event.preventDefault();
        button.disabled = true;
        say("com.sending");
        try {
            const data = Object.fromEntries(new FormData(form));
            data.message = "Newsletter-Anmeldung: " + data.email;
            const response = await fetch(NEWSLETTER_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok && (result.success === true || result.success === "true")) { form.reset(); say("com.ok", "ok"); }
            else throw new Error("failed");
        } catch (e) { say("com.err", "err"); }
        finally { button.disabled = false; }
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
    setupNewsletter();
    setupStepper();
    document.getElementById("language-select")?.addEventListener("change", () => setTimeout(applyTexts, 0));
});
