
const newsArticles = [
    {
        id: "nature-chaos-update",
        date: "2026-11-17",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
        translations: {
            en: {
                title: "Nature Chaos – Development Update",
                category: "DEVELOPMENT",
                description: "Discover the latest development progress of Nature Chaos.",
                content: `
                    <p>Welcome to our latest Nature Chaos development update!</p>
                    <p>Nature Chaos is a survival adventure game where players
                    explore islands, collect resources and try to survive.</p>
                    <p>We are working on bringing this world to life.
                    More information will follow soon.</p>
                `,
                readMore: "Read More →",
                backToNews: "← Back to News",
                published: "Published: "
            },
            de: {
                title: "Nature Chaos – Entwicklungs-Update",
                category: "ENTWICKLUNG",
                description: "Erfahre den neuesten Fortschritt bei der Entwicklung von Nature Chaos.",
                content: `
                    <p>Willkommen zu unserem neuesten Entwicklungs-Update für Nature Chaos!</p>
                    <p>Nature Chaos ist ein Survival-Abenteuer, in dem Spieler Inseln erkunden,
                    Ressourcen sammeln und versuchen zu überleben.</p>
                    <p>Wir arbeiten daran, diese Welt zum Leben zu erwecken.
                    Weitere Informationen folgen bald.</p>
                `,
                readMore: "Mehr lesen →",
                backToNews: "← Zurück zu News",
                published: "Veröffentlicht: "
            }
        }
    },
    {
        id: "banana-studios",
        date: "2026-11-12",
        image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
        translations: {
            en: {
                title: "The Future of BaNaNa Studios",
                category: "STUDIO NEWS",
                description: "A look at the future projects of BaNaNa Studios.",
                content: `
                    <p>Welcome to BaNaNa Studios!</p>
                    <p>We are focused on creating games and bringing new ideas
                    to life through programming and creativity.</p>
                    <p>Stay tuned for more updates.</p>
                `,
                readMore: "Read More →",
                backToNews: "← Back to News",
                published: "Published: "
            },
            de: {
                title: "Die Zukunft von BaNaNa Studios",
                category: "STUDIO-NEWS",
                description: "Ein Blick auf die künftigen Projekte von BaNaNa Studios.",
                content: `
                    <p>Willkommen bei BaNaNa Studios!</p>
                    <p>Wir konzentrieren uns auf die Entwicklung von Spielen und auf die Umsetzung neuer Ideen
                    durch Programmierung und Kreativität.</p>
                    <p>Bleibt dran für weitere Updates.</p>
                `,
                readMore: "Mehr lesen →",
                backToNews: "← Zurück zu News",
                published: "Veröffentlicht: "
            }
        }
    }
];

function getCurrentLanguage() {
    return localStorage.getItem("banana-language") || "de";
}

function formatArticleDate(dateString, language) {
    const locale = language === "de" ? "de-DE" : "en-GB";

    return new Date(dateString + "T12:00:00").toLocaleDateString(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}

function renderNewsList() {
    const newsContainer = document.getElementById("news-container");
    const language = getCurrentLanguage();

    if (!newsContainer) {
        return;
    }

    newsContainer.innerHTML = newsArticles.map(article => {
        const item = article.translations[language] || article.translations.en;
        const date = formatArticleDate(article.date, language);

        return `
            <article class="news-card">

                <img
                    src="${article.image}"
                    alt="${item.title}"
                    class="news-image"
                >

                <div class="news-card-content">

                    <span class="news-category">
                        ${item.category}
                    </span>

                    <h3>${item.title}</h3>

                    <p class="news-date">${date}</p>

                    <p class="news-description">
                        ${item.description}
                    </p>

                    <a href="article.html?id=${article.id}"
                       class="text-link">
                        ${item.readMore}
                    </a>

                </div>

            </article>
        `;
    }).join("");
}

function renderArticle() {
    const articleContainer = document.getElementById("article-container");
    const language = getCurrentLanguage();

    if (!articleContainer) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("id");
    const article = newsArticles.find(item => item.id === articleId);

    if (!article) {
        articleContainer.innerHTML = `
            <h1>Article not found</h1>
            <a href="news.html">Back to News</a>
        `;
        return;
    }

    const item = article.translations[language] || article.translations.en;
    const date = formatArticleDate(article.date, language);

    document.title = item.title + " – BaNaNa Studios";

    articleContainer.innerHTML = `
        <p class="small-title">${item.category}</p>
        <h1>${item.title}</h1>
        <p class="article-date">${item.published}${date}</p>

        <img src="${article.image}"
             alt="${item.title}"
             class="article-image">

        <div class="article-content">
            ${item.content}
        </div>

        <a href="news.html" class="text-link">
            ${item.backToNews}
        </a>
    `;
}

renderNewsList();
renderArticle();
window.addEventListener("languagechange", () => {
    renderNewsList();
    renderArticle();
});
