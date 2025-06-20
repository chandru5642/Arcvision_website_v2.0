  // Load CSV from Google Sheets
  const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQzv5SYOURREALURL/pub?output=csv';

  // Get query param ?id=1
  const params = new URLSearchParams(window.location.search);
  const articleId = params.get('id');

  async function loadArticle() {
    const response = await fetch(sheetURL);
    const csvText = await response.text();
    const rows = csvText.trim().split('\n').map(row => row.split(','));

    const headers = rows[0];
    const articles = rows.slice(1).map(row => {
      let article = {};
      headers.forEach((key, i) => {
        article[key.trim()] = row[i]?.trim();
      });
      return article;
    });

    const article = articles.find(a => a.id === articleId);

    if (!article) {
      document.querySelector('.main-article').innerHTML = '<h2>Article not found.</h2>';
      return;
    }

    // Inject content
    document.querySelector('.article-title').textContent = article.title;
    document.querySelector('.article-hero-image img').src = article.image_url;
    document.querySelector('.article-content').innerHTML = `<p>${article.content.replace(/\n/g, '</p><p>')}</p>`;

    // Next article preview
    const next = document.querySelector('.next-article-preview');
    next.href = article.next_url;
    next.querySelector('img').src = article.next_image_url;
    next.querySelector('.preview-title').textContent = article.next_title;
  }

  loadArticle();

