const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function(btn) {
      btn.classList.remove('active-btn');
    });
    e.target.classList.add('active-btn');
    articles.forEach(function(article) {
      article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});