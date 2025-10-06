// Sticky header shadow on scroll
const siteHeader = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 6) siteHeader.classList.add('scrolled');
  else siteHeader.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// “Load more” demo (adds placeholder cards)
const grid = document.getElementById('grid');
const loadMoreBtn = document.getElementById('loadMore');
const moreItems = [
  { seed: 'b1', tag: 'HOW‑TO', title: 'Out‑the‑door price: what’s included?', meta: '5 min read · Guides' },
  { seed: 'b2', tag: 'USED', title: 'Certified vs. private‑party: pros and cons', meta: '6 min read · Used' },
  { seed: 'b3', tag: 'FINANCE', title: 'APR, money factor, residual: quick math', meta: '3 min read · Finance' },
  { seed: 'b4', tag: 'DEALS', title: 'Stacking incentives without surprises', meta: '5 min read · Deals' },
  { seed: 'b5', tag: 'HOW‑TO', title: 'The email template that gets OTD quotes', meta: '4 min read · Guides' },
  { seed: 'b6', tag: 'USED', title: 'Pre‑purchase inspections: checklists', meta: '7 min read · Used' }
];

function createCard({ seed, tag, title, meta }) {
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <a class="card__media" href="#"><img src="https://picsum.photos/seed/${seed}/640/360" alt=""></a>
    <div class="card__body">
      <a href="#" class="kicker">${tag}</a>
      <h3 class="card__title"><a href="#">${title}</a></h3>
      <p class="card__excerpt">Placeholder copy for demo purposes. Replace with your own content.</p>
      <div class="card__meta">${meta}</div>
    </div>
  `;
  return el;
}

if (loadMoreBtn) {
  let index = 0;
  loadMoreBtn.addEventListener('click', () => {
    const slice = moreItems.slice(index, index + 3);
    slice.forEach(item => grid.appendChild(createCard(item)));
    index += 3;
    if (index >= moreItems.length) {
      loadMoreBtn.disabled = true;
      loadMoreBtn.textContent = 'All caught up';
    }
  });
}
