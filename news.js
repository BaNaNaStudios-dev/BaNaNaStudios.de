/* =========================
   BANANA STUDIOS
   NEWS

   Neue News hinzufügen: Einen Block { ... } kopieren, oben in
   "newsItems" einfügen (neueste zuerst) und Texte anpassen.
========================= */

const newsItems = [
    {
        date: "2026-11-22",
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85",
        de: {
            category: "ENTWICKLUNG",
            title: "Programmierung von Nature Chaos begonnen",
            imageAlt: "Naturlandschaft zu Nature Chaos",
            intro: "Wir haben den nächsten großen Schritt gemacht: Die Programmierung von Nature Chaos hat offiziell begonnen. Nach der Konzeptphase entsteht jetzt das technische Fundament für unser erstes Survival-Abenteuer.",
            releaseTitle: "Voraussichtlicher Release",
            release: "Nach aktuellem Stand erwarten wir die Veröffentlichung zwischen 2028 und 2029. Dieser Zeitraum ist eine Planung und kann sich im Laufe der Entwicklung noch ändern.",
            featuresTitle: "Das erwartet dich im Spiel",
            features: [
                "Überleben in der Natur: Nach einer Schiffskatastrophe strandest du auf einer fremden Insel und musst dich allein durchschlagen.",
                "Heiltechniken: Verletzungen behandelst du mit natürlichen Mitteln und erlernten Techniken.",
                "Nahrung: Du musst Essen finden, zubereiten und deinen Hunger im Blick behalten.",
                "Ausdauer: Eine Stamina-Anzeige begrenzt, wie lange du rennen, klettern und arbeiten kannst.",
                "Ressourcen und Crafting: Sammle Material, baue Werkzeuge und entwickle dich Schritt für Schritt weiter."
            ],
            outro: "Wir halten dich auf dieser Seite über neue Einblicke und Fortschritte auf dem Laufenden."
        },
        en: {
            category: "DEVELOPMENT",
            title: "Programming of Nature Chaos has begun",
            imageAlt: "Nature landscape for Nature Chaos",
            intro: "We have taken the next big step: programming of Nature Chaos has officially begun. After the concept phase, the technical foundation of our first survival adventure is now taking shape.",
            releaseTitle: "Expected release",
            release: "As things stand, we expect the release between 2028 and 2029. This is a plan and may still change during development.",
            featuresTitle: "What to expect in the game",
            features: [
                "Survival in the wild: After a shipwreck you are stranded on an unknown island and must fend for yourself.",
                "Healing techniques: You treat injuries using natural remedies and learned techniques.",
                "Food: You need to find and prepare food and keep an eye on your hunger.",
                "Stamina: A stamina bar limits how long you can run, climb and work.",
                "Resources and crafting: Gather materials, build tools and progress step by step."
            ],
            outro: "We will keep you updated on this page with new insights and progress."
        }
    }
];

function formatNewsDate(isoDate, lang) {
    const date = new Date(isoDate + "T12:00:00");
    return date.toLocaleDateString(lang === "de" ? "de-DE" : "en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    if (className === "news-subtitle") {
        element.style.cssText = "margin:22px 0 8px; font-size:16px; letter-spacing:-0.01em;";
    }
    return element;
}

function renderNews() {
    const container = document.getElementById("news-container");
    if (!container) return;

    const stored = localStorage.getItem("banana-language") || "de";
    const lang = stored === "en" ? "en" : "de";

    container.innerHTML = "";

    newsItems.forEach(item => {
        const text = item[lang];

        const card = makeElement("article", "news-card");

        const image = makeElement("img", "news-image");
        image.src = item.image;
        image.alt = text.imageAlt;
        image.loading = "lazy";
        card.appendChild(image);

        const content = makeElement("div", "news-card-content");
        content.appendChild(makeElement("span", "news-category", text.category));
        content.appendChild(makeElement("h3", "", text.title));
        content.appendChild(makeElement("p", "news-date", formatNewsDate(item.date, lang)));
        content.appendChild(makeElement("p", "news-description", text.intro));

        content.appendChild(makeElement("h4", "news-subtitle", text.releaseTitle));
        content.appendChild(makeElement("p", "news-description", text.release));

        content.appendChild(makeElement("h4", "news-subtitle", text.featuresTitle));
        const list = makeElement("ul", "feature-list");
        text.features.forEach(feature => list.appendChild(makeElement("li", "", feature)));
        content.appendChild(list);

        content.appendChild(makeElement("p", "news-description", text.outro));

        card.appendChild(content);
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderNews);
window.addEventListener("languagechange", renderNews);
