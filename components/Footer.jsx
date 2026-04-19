/* Footer — dark clay-deep surface. Small. Brand name, tagline,
   quick links to the two other pages, contact. */

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div className="footer-brand">
          <div className="footer-wordmark">這就是品牌</div>
          <div className="footer-wordmark-en">EXACTLY HOW YOU BRAND</div>
          <p className="footer-tag">幫有料的人，把自己說清楚。</p>
        </div>

        <nav className="footer-nav" aria-label="頁尾選單">
          <p className="footer-nav-title">Pages</p>
          <ul>
            <li><a href="index.html">首頁 Home</a></li>
            <li><a href="services.html">服務方案 Services</a></li>
            <li><a href="coaching.html">八週陪跑 8-Week Coaching</a></li>
          </ul>
        </nav>

        <div className="footer-contact">
          <p className="footer-nav-title">Contact</p>
          <ul>
            <li><a href="#">LINE 官方帳號</a></li>
            <li><a href="mailto:hi@exactlyhowyoubrand.com">hi@exactlyhowyoubrand.com</a></li>
            <li>Taipei · Taiwan</li>
          </ul>
        </div>

        <div className="footer-signature">
          <p className="footer-sig">Jonah</p>
          <p className="footer-sig-en">Brand Translator</p>
        </div>
      </div>

      <div className="container footer-base">
        <span>© 2026 這就是品牌. All rights reserved.</span>
        <span className="footer-base-mark">✦</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
