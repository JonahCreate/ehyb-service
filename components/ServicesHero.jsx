/* Services-page hero — cream background, centered, matches main-site voice.
   Replaces the old dark header + small centered PricingHero. */

function ServicesHero() {
  return (
    <section className="sv2-hero" id="top">
      <div className="container">
        <p className="eyebrow">服務方案總覽 <i className="pencil-mark" style={{fontStyle:'normal'}}>✎</i></p>
        <h1 className="sv2-hero-title">
          你不是沒有料。<br/>
          只是還沒有人幫你<span className="sv2-hero-em">說清楚</span>。
        </h1>
        <div className="sv2-hero-divider" aria-hidden="true"></div>
        <p className="sv2-hero-desc">
          從免費體驗到完整陪跑，<br className="brk-mobile"/>
          每一個服務都在做同一件事：<br/>
          幫你找到那條，把所有東西串起來的線。
        </p>
        <div className="sv2-hero-actions">
          <a className="btn btn-primary" href="#plans">查看四個方案 ↓</a>
          <a className="btn btn-outline" href="index.html#booking">先預約 15 分鐘免費診斷</a>
        </div>
      </div>
    </section>
  );
}
window.ServicesHero = ServicesHero;
