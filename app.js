(() => {
  const themeToggle = document.querySelector('#theme-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const applyTheme = dark => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeToggle.setAttribute('aria-label', label);
    themeToggle.title = label;
    themeMeta.content = dark ? '#14181d' : '#ffffff';
  };
  applyTheme(document.documentElement.dataset.theme === 'dark');
  themeToggle.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    applyTheme(dark);
    try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); } catch (_) {}
  });
  const toggle = document.querySelector('#menu-toggle');
  const sidebar = document.querySelector('#sidebar');
  const links = [...document.querySelectorAll('.sidebar nav a')];
  const mobile = window.matchMedia('(max-width: 760px)');
  const setMenu = open => {
    sidebar.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { setMenu(false); toggle.focus(); } });
  mobile.addEventListener('change', () => setMenu(false));
  const sections = links.map(a => document.getElementById(a.hash.slice(1)));
  let scheduled = false;
  const update = () => {
    scheduled = false;
    let active = sections[0];
    sections.forEach(s => { if (s.getBoundingClientRect().top < (mobile.matches ? 115 : 160)) active = s; });
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 3) active = sections[sections.length - 1];
    links.forEach(a => {
      const current = a.hash === '#' + active.id;
      a.classList.toggle('active', current);
      if (current) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
    });
  };
  addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  addEventListener('load', update);
  update();
})();
