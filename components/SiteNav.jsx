/* Shared sticky nav. Used by index.html, services.html and (later) coaching.html.

   Props:
   - active: 'home' | 'services' | 'coaching' (for underline state)
   - onDark: boolean — when the page's top is a dark section,
            the initial (unscrolled) nav renders in dark-on-dark style
*/
function SiteNav({active, onDark}) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, {passive: true});
    return () => window.removeEventListener('scroll', on);
  }, []);

  const items = [
    ['home', '首頁', 'index.html'],
    ['services', '服務方案', 'services.html'],
    ['coaching', '八週陪跑', 'coaching.html'],
  ];

  const navClass =
    'site-nav'
    + (scrolled ? ' is-scrolled' : '')
    + (onDark && !scrolled ? ' on-dark' : '');

  const logoSrc = (onDark && !scrolled)
    ? '../assets/logo-placeholder-dark.svg'
    : '../assets/logo-placeholder.svg';

  // the main index.html lives at site/ root so for index the logo path is just
  // ../assets; services lives at site/ root too, so same. When opened as file://
  // from site/index.html, paths resolve against site/. We use assets/... here.
  const resolved = (p) => p.replace('../assets/', 'assets/');

  return (
    <header className={navClass}>
      <div className="container nav-inner">
        <a href="index.html" className="brand-link" aria-label="這就是品牌 首頁">
          <img src={resolved(logoSrc)} className="logo" alt="這就是品牌"/>
        </a>

        <nav className="desktop-menu" aria-label="主選單">
          {items.map(([id, lbl, href]) => (
            <a
              key={id}
              href={href}
              className={active === id ? 'is-active' : ''}
              aria-current={active === id ? 'page' : undefined}
            >{lbl}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-outline nav-cta nav-cta--outline" href="services.html">
            服務方案
          </a>
          <a className="btn btn-primary nav-cta" href={active === 'home' ? '#booking' : 'index.html#booking'}>
            免費診斷 →
          </a>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-label="開啟選單"
            onClick={() => setOpen(v => !v)}
          >目錄</button>
        </div>
      </div>

      {open && (
        <nav className="mobile-menu" aria-label="行動選單">
          {items.map(([id, lbl, href]) => (
            <a
              key={id}
              href={href}
              className={active === id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >{lbl}</a>
          ))}
          <a href={active === 'home' ? '#booking' : 'index.html#booking'} onClick={() => setOpen(false)} className="mobile-menu-cta">
            免費診斷 →
          </a>
        </nav>
      )}
    </header>
  );
}
window.SiteNav = SiteNav;
