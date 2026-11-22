/* =========================
   BANANA STUDIOS
   JAVASCRIPT
========================= */

const translations = {
    en: {
        nav: {
            home: "Home",
            games: "Games",
            trailers: "Trailers",
            news: "News",
            about: "About",
            downloads: "Downloads",
            support: "Support"
        },
        index: {
            kicker: "WELCOME TO BANANA STUDIOS",
            heroTitle: "WE CREATE<br><span>NEW WORLDS.</span>",
            heroDescription: "Discover our games, explore new worlds and experience gaming in a different way.",
            primaryCta: "Explore Games",
            secondaryCta: "About Us",
            studioLabel: "OUR STUDIO",
            discoverHeading: "DISCOVER MORE",
            discoverText: "Explore our latest projects and stay connected with BaNaNa Studios.",
            gamesTag: "GAMES",
            gamesTitle: "Game Overview",
            gamesText: "See our upcoming worlds, mechanics and creative direction.",
            gamesLink: "Open overview →",
            trailersTag: "TRAILERS",
            trailersTitle: "Trailer Collection",
            trailersText: "Watch cinematic reveals and teaser content from our projects.",
            trailersLink: "Open trailers →",
            newsTag: "NEWS",
            newsTitle: "News Archive",
            newsText: "Follow the latest studio updates, previews and announcements.",
            newsLink: "Open archive →"
        },
        games: {
            kicker: "OUR PROJECTS",
            title: "Game Overview",
            intro: "Discover the worlds we are creating and the gameplay experiences we are building.",
            sectionKicker: "CURRENTLY IN DEVELOPMENT",
            sectionHeading: "Our Games",
            category: "SURVIVAL / ADVENTURE",
            gameTitle: "Nature Chaos",
            description: "A survival adventure where a shipwreck leaves you stranded on a mysterious island, forcing you to gather resources, survive threats and discover allies.",
            feature1: "Exploration of a hostile environment",
            feature2: "Crafting, survival and progression",
            feature3: "Atmospheric world design",
            status: "COMING SOON"
        },
        trailers: {
            kicker: "WATCH NOW",
            title: "Trailers Overview",
            intro: "A first look at our vision, atmosphere and world-building.",
            sectionKicker: "UPCOMING CONTENT",
            sectionHeading: "Our Trailers",
            cardTag: "Gameplay Reveal",
            cardTitle: "Nature Chaos",
            cardText: "A first glimpse into the world, survival systems and the magic of nature.",
            teaserTag: "Teaser",
            teaserTitle: "Project Echo",
            teaserText: "A moody preview of a world filled with secrets and untold risks."
        },
        news: {
            kicker: "LATEST UPDATES",
            title: "News Archive",
            intro: "All the latest studio updates, announcements and development progress in one overview.",
            sectionLabel: "LATEST UPDATES"
        },
        about: {
            kicker: "WHO WE ARE",
            title: "About BaNaNa Studios",
            intro: "We create new worlds, memorable gameplay experiences and stories built around creativity and technical excellence.",
            mission: "OUR MISSION",
            missionTitle: "WHAT WE DO",
            missionText: "BaNaNa Studios develops atmospheric worlds and emotionally engaging game experiences built around original ideas and careful design.",
            values: "OUR VALUES",
            valuesTitle: "HOW WE WORK",
            valuesText: "We combine programming, design and creative vision to turn ideas into experiences with clarity, heart and precision.",
            stat1: "Active projects",
            stat2: "Creative ideas",
            stat3: "Studio vision"
        },
        downloads: {
            kicker: "GET OUR GAMES",
            title: "Downloads",
            intro: "Soon you will find all downloads from BaNaNa Studios here.",
            tag: "DOWNLOADS",
            soon: "COMING SOON",
            text: "There is nothing to download yet. Check back soon.",
            link: "Go to news →"
        },
        support: {
            kicker: "WE ARE HERE TO HELP",
            title: "Support",
            intro: "Answers to common questions, known issues and direct help from our team.",
            tabFaq: "FAQ",
            tabIssues: "Known issues",
            tabHelp: "Technical help",
            faqKicker: "QUESTIONS",
            faqHeading: "FAQ",
            faq1q: "When will Nature Chaos be released?",
            faq1a: "There is no exact date yet. We publish updates in the news section.",
            faq2q: "Where can I download your games?",
            faq2a: "On the Downloads page. It currently says Coming Soon, and you will find new content there as soon as it is available.",
            faq3q: "How can I reach the team?",
            faq3a: "Use the contact form below or write to us directly by email.",
            faq4q: "Does using the website cost anything?",
            faq4a: "No, the website is free for everyone.",
            issuesKicker: "STATUS",
            issuesHeading: "Known issues",
            issuesNone: "There are currently no known issues.",
            issuesText: "If you notice anything, please let us know using the form below.",
            helpKicker: "CONTACT",
            helpHeading: "Technical help",
            helpText: "Describe your issue as precisely as possible. Your message goes directly to our team.",
            formName: "Name",
            formEmail: "Your email address",
            formCategory: "Category",
            catTech: "Technical help",
            catBug: "Report a bug",
            catDownload: "Download problem",
            catGame: "Question about the games",
            catOther: "Other",
            formMessage: "Description",
            formSend: "Send message",
            formSending: "Sending...",
            formSuccess: "Thank you! Your message has been sent.",
            formError: "Sending failed. Please try again later or write to us directly by email.",
            formHint: "By submitting, you agree that we only use your details to answer your request.",
            mailTitle: "Prefer email?"
        }
    },
    de: {
        nav: {
            home: "Startseite",
            games: "Spiele",
            trailers: "Trailer",
            news: "News",
            about: "Über uns",
            downloads: "Downloads",
            support: "Support"
        },
        index: {
            kicker: "WILLKOMMEN BEI BANANA STUDIOS",
            heroTitle: "WIR ERSCHAFFEN<br><span>NEUE WELTEN.</span>",
            heroDescription: "Entdecke unsere Spiele, erkunde neue Welten und erlebe Gaming auf eine besondere Weise.",
            primaryCta: "Spiele entdecken",
            secondaryCta: "Über uns",
            studioLabel: "UNSERE STUDIO",
            discoverHeading: "MEHR ENTDECKEN",
            discoverText: "Entdecke unsere aktuellen Projekte und bleibe mit BaNaNa Studios verbunden.",
            gamesTag: "SPIELE",
            gamesTitle: "Spielübersicht",
            gamesText: "Sieh dir unsere kommenden Welten, Spielmechaniken und kreative Richtung an.",
            gamesLink: "Übersicht öffnen →",
            trailersTag: "TRAILER",
            trailersTitle: "Trailer-Sammlung",
            trailersText: "Sieh dir filmische Einblicke und Teaser unserer Projekte an.",
            trailersLink: "Trailer öffnen →",
            newsTag: "NEWS",
            newsTitle: "Newsarchiv",
            newsText: "Erfahre die neuesten Updates, Einblicke und Ankündigungen aus dem Studio.",
            newsLink: "Archiv öffnen →"
        },
        games: {
            kicker: "UNSERE PROJEKTE",
            title: "Spieleübersicht",
            intro: "Entdecke die Welten, die wir entwickeln und wie wir neue Gameplay-Erlebnisse formen.",
            sectionKicker: "AKTUELL IN ENTWICKLUNG",
            sectionHeading: "Unsere Spiele",
            category: "SURVIVAL / ABENTEUER",
            gameTitle: "Nature Chaos",
            description: "Ein survival-lastiges Abenteuer, in dem du nach einer Schiffskatastrophe auf einer fremden Insel strandest und dabei Ressourcen, Gefahren und neue Verbündete entdecken musst.",
            feature1: "Erkundung einer feindlichen Umgebung",
            feature2: "Crafting, Survival und Fortschritt",
            feature3: "Atmosphärisches Weltdesign",
            status: "BALD VERFÜGBAR"
        },
        trailers: {
            kicker: "JETZT ANSEHEN",
            title: "Trailerübersicht",
            intro: "Ein erster Blick auf unsere Vision, Stimmungen und Spielwelt-Atmosphären.",
            sectionKicker: "BEKOMMENDE INHALTE",
            sectionHeading: "Unsere Trailer",
            cardTag: "COMING SOON",
            cardTitle: "Nature Chaos",
            cardText: "COMING SOON",
            teaserTag: "Teaser",
        },
        news: {
            kicker: "AKTUELLE UPDATES",
            title: "Newsarchiv",
            intro: "Alle aktuellen Nachrichten, Entwicklungen und Studio-Updates in einem klaren Überblick.",
            sectionLabel: "AKTUELLE UPDATES"
        },
        about: {
            kicker: "WER WIR SIND",
            title: "Über BaNaNa Studios",
            intro: "Wir schaffen neue Welten, inspirierte Gameplay-Erlebnisse und Geschichten mit Fokus auf Kreativität und technische Exzellenz.",
            mission: "UNSERE MISSION",
            missionTitle: "WAS WIR TUN",
            missionText: "BaNaNa Studios entwickelt kleine, atmosphärische und emotional spannende Spielwelten. Unser Ziel ist es, einzigartige Ideen in greifbare Erfahrungen zu verwandeln.",
            values: "UNSERE WERTE",
            valuesTitle: "WIE WIR ARBEITEN",
            valuesText: "Wir verbinden Programmierung, Design und kreative Vision. Jede Idee wird mit Leidenschaft, Präzision und einem klaren Fokus auf Spielerlebnisse umgesetzt.",
            stat1: "Aktive Projekte",
            stat2: "Kreative Ideen",
            stat3: "Studio-Vision"
        },
        downloads: {
            kicker: "UNSERE SPIELE HERUNTERLADEN",
            title: "Downloads",
            intro: "Hier findest du bald alle Downloads von BaNaNa Studios.",
            tag: "DOWNLOADS",
            soon: "COMING SOON",
            text: "Noch gibt es nichts zum Herunterladen. Schau bald wieder vorbei.",
            link: "Zu den News →"
        },
        support: {
            kicker: "WIR HELFEN DIR",
            title: "Support",
            intro: "Antworten auf häufige Fragen, bekannte Probleme und direkte Hilfe von unserem Team.",
            tabFaq: "FAQ",
            tabIssues: "Bekannte Probleme",
            tabHelp: "Technische Hilfe",
            faqKicker: "FRAGEN",
            faqHeading: "FAQ",
            faq1q: "Wann erscheint Nature Chaos?",
            faq1a: "Einen genauen Termin gibt es noch nicht. Neuigkeiten veröffentlichen wir im News-Bereich.",
            faq2q: "Wo kann ich unsere Spiele herunterladen?",
            faq2a: "Auf der Downloads-Seite. Dort steht aktuell noch Coming Soon, sobald es etwas gibt, findest du es dort.",
            faq3q: "Wie erreiche ich das Team?",
            faq3a: "Nutze das Kontaktformular weiter unten oder schreibe uns direkt per E-Mail.",
            faq4q: "Kostet die Nutzung der Website etwas?",
            faq4a: "Nein, die Website ist für alle kostenlos.",
            issuesKicker: "STATUS",
            issuesHeading: "Bekannte Probleme",
            issuesNone: "Aktuell sind keine bekannten Probleme gemeldet.",
            issuesText: "Falls dir etwas auffällt, melde es uns gern über das Formular unten.",
            helpKicker: "KONTAKT",
            helpHeading: "Technische Hilfe",
            helpText: "Beschreibe dein Anliegen so genau wie möglich. Deine Nachricht kommt direkt bei unserem Team an.",
            formName: "Name",
            formEmail: "Deine E-Mail-Adresse",
            formCategory: "Kategorie",
            catTech: "Technische Hilfe",
            catBug: "Fehler melden",
            catDownload: "Download-Problem",
            catGame: "Frage zu den Spielen",
            catOther: "Sonstiges",
            formMessage: "Beschreibung",
            formSend: "Nachricht senden",
            formSending: "Wird gesendet...",
            formSuccess: "Danke! Deine Nachricht wurde gesendet.",
            formError: "Senden fehlgeschlagen. Bitte versuche es später erneut oder schreibe uns direkt per E-Mail.",
            formHint: "Mit dem Absenden stimmst du zu, dass wir deine Angaben nur zur Beantwortung deiner Anfrage verwenden.",
            mailTitle: "Lieber direkt per E-Mail?"
        }
    }
};

function translate(key, language) {
    const [group, name] = key.split(".");
    return translations[language]?.[group]?.[name] || key;
}

function applyTheme(theme) {
    document.body.dataset.theme = theme;
    const themeSelect = document.getElementById("theme-select");

    if (themeSelect) {
        themeSelect.value = theme;
    }

    localStorage.setItem("banana-theme", theme);
}

function applyLanguage(language) {
    const lang = language === "de" ? "de" : "en";
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const translated = translate(element.dataset.i18n, lang);
        if (translated) {
            element.textContent = translated;
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(element => {
        const translated = translate(element.dataset.i18nHtml, lang);
        if (translated) {
            element.innerHTML = translated;
        }
    });

    const pageKey = window.location.pathname.split("/").pop() || "index.html";

    if (pageKey === "index.html") {
        const heroKicker = document.getElementById("hero-kicker");
        const heroTitle = document.getElementById("hero-title");
        const heroDescription = document.getElementById("hero-description");
        const primaryCta = document.getElementById("hero-cta-primary");
        const secondaryCta = document.getElementById("hero-cta-secondary");

        if (heroKicker) heroKicker.textContent = translate("index.kicker", lang);
        if (heroTitle) heroTitle.innerHTML = translate("index.heroTitle", lang);
        if (heroDescription) heroDescription.textContent = translate("index.heroDescription", lang);
        if (primaryCta) primaryCta.textContent = translate("index.primaryCta", lang);
        if (secondaryCta) secondaryCta.textContent = translate("index.secondaryCta", lang);
    }

    if (pageKey === "games.html") {
        const kicker = document.getElementById("page-kicker");
        const title = document.getElementById("page-title");
        const intro = document.getElementById("page-intro");

        if (kicker) kicker.textContent = translate("games.kicker", lang);
        if (title) title.textContent = translate("games.title", lang);
        if (intro) intro.textContent = translate("games.intro", lang);
    }

    if (pageKey === "trailers.html") {
        const kicker = document.getElementById("page-kicker");
        const title = document.getElementById("page-title");
        const intro = document.getElementById("page-intro");

        if (kicker) kicker.textContent = translate("trailers.kicker", lang);
        if (title) title.textContent = translate("trailers.title", lang);
        if (intro) intro.textContent = translate("trailers.intro", lang);
    }

    if (pageKey === "news.html") {
        const kicker = document.getElementById("page-kicker");
        const title = document.getElementById("page-title");
        const intro = document.getElementById("page-intro");

        if (kicker) kicker.textContent = translate("news.kicker", lang);
        if (title) title.textContent = translate("news.title", lang);
        if (intro) intro.textContent = translate("news.intro", lang);
    }

    if (pageKey === "about.html") {
        const kicker = document.getElementById("page-kicker");
        const title = document.getElementById("page-title");
        const intro = document.getElementById("page-intro");

        if (kicker) kicker.textContent = translate("about.kicker", lang);
        if (title) title.textContent = translate("about.title", lang);
        if (intro) intro.textContent = translate("about.intro", lang);
    }

    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
        languageSelect.value = lang;
    }

    localStorage.setItem("banana-language", lang);
    window.dispatchEvent(new CustomEvent("languagechange", { detail: lang }));
}

document.addEventListener("DOMContentLoaded", () => {
    const navigationLinks = document.querySelectorAll(".navigation a");

    navigationLinks.forEach(link => {
        link.addEventListener("click", () => {
            console.log("Navigation:", link.textContent);
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(event) {
            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                event.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    const savedTheme = localStorage.getItem("banana-theme") || "dark";
    const savedLanguage = localStorage.getItem("banana-language") || "de";

    applyTheme(savedTheme);
    applyLanguage(savedLanguage);

    const themeSelect = document.getElementById("theme-select");
    const languageSelect = document.getElementById("language-select");

    themeSelect?.addEventListener("change", (event) => {
        applyTheme(event.target.value);
    });

    languageSelect?.addEventListener("change", (event) => {
        applyLanguage(event.target.value);
    });

    console.log("BaNaNa Studios website loaded successfully!");
});
