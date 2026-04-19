/* Hero — three composition tweaks (classic / split / editorial).
   All three live inside the same <section>, controlled by the `variant` prop
   read from the Tweaks panel via window.__TWEAKS__ / a React context.
*/

function Hero({variant = 'classic', glyphWord = '品牌', accent = 'normal'}) {
  const heroClass =
    'hero hero--' + variant
    + (accent === 'soft' ? ' hero--soft' : '')
    + (accent === 'deep' ? ' hero--deep' : '');

  return (
    <section className={heroClass} id="top">
      <span className="hero-pencil" aria-hidden="true">✎</span>

      <div className="container hero-layout">
        <div className="hero-content reveal is-visible">
          <p className="eyebrow eyebrow--on-primary">
            Brand Translation Studio <i className="pencil-mark" style={{fontStyle:'normal'}}>✎</i>
          </p>

          <h1 className="hero-title">
            你有料。<br/>只是還沒<span className="hero-title-stress">說清楚</span>。
          </h1>

          <p className="hero-copy">
            我們幫你找到那句對的話，<br/>
            讓對的人一看就懂、一聽就信。
          </p>

          <div className="hero-actions">
            <a className="btn btn-on-primary-filled hero-cta-primary" href="#booking">
              預約 15 分鐘免費診斷 →
            </a>
            <a className="btn btn-on-primary-outline" href="services.html">
              查看服務方案
            </a>
          </div>

          <p className="hero-proof">
            <span className="hero-proof-num">100+</span>
            <span className="hero-proof-sep" aria-hidden="true">｜</span>
            已協助過的品牌找到清晰定位
          </p>
        </div>

        {/* variant: split — right column carries a tall quote block */}
        {variant === 'split' && (
          <aside className="hero-aside reveal is-visible">
            <p className="hero-aside-eyebrow">A note from Jonah</p>
            <blockquote className="hero-aside-quote">
              「別人教 how。<br/>我們教 why 和 judgment。」
            </blockquote>
            <p className="hero-aside-sig">— Jonah，品牌翻譯師</p>
          </aside>
        )}

        {/* variant: editorial — stacked index / meta rail on the right */}
        {variant === 'editorial' && (
          <aside className="hero-aside hero-aside--rail reveal is-visible">
            <dl className="hero-rail">
              <div>
                <dt>ISSUE</dt>
                <dd>No. 01 · 2026</dd>
              </div>
              <div>
                <dt>VOLUME</dt>
                <dd>Brand Translation</dd>
              </div>
              <div>
                <dt>FILED BY</dt>
                <dd>Jonah, Taipei</dd>
              </div>
            </dl>
            <p className="hero-rail-foot">免費。不推銷。<br/>只是好好談談你的品牌。</p>
          </aside>
        )}
      </div>

      {/* oversized decorative Chinese glyph bleeds from bottom-right */}
      <p className="hero-deco-text" aria-hidden="true">{glyphWord}</p>
    </section>
  );
}
window.Hero = Hero;
