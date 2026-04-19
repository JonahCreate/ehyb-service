/* Process — 五步法. 5 columns on desktop, stacked on mobile.
   Lifted from the original marketing-site Process.jsx, copy untouched.
   Added a closing note + CTA row so the section can stand alone without
   the surrounding differentiation / about / testimonials sections.
*/

function Process({density = 'normal'}) {
  const steps = [
    ['01', '去噪', '篩掉不重要的，留下真正屬於你的。'],
    ['02', '萃取', '從你的經驗和故事裡，找出核心觀點。'],
    ['03', '定錨', '確立你真正代表的那個立場。'],
    ['04', '轉譯', '把內在的東西，說成外界聽得懂的語言。'],
    ['05', '建構', '組成清楚、一致、讓人信任的品牌表達。'],
  ];

  return (
    <section className={"process process--" + density} id="process">
      <div className="container">
        <div className="process-head">
          <p className="eyebrow">
            How we work <i className="pencil-mark" style={{fontStyle:'normal'}}>✎</i>
          </p>
          <h2 className="section-title">
            品牌翻譯<span className="hero-title-stress">五步法</span>
          </h2>
          <p className="process-lede">
            從一團模糊到一句清楚，<br className="brk-mobile"/>
            我們陪你走這五步。
          </p>
        </div>

        <ol className="process-steps">
          {steps.map(([n, name, cp], i) => (
            <li key={n} className="process-step reveal is-visible" style={{transitionDelay: Math.min(i*45, 260) + 'ms'}}>
              <span className="step-number" aria-hidden>{n}</span>
              <h3 className="step-name">{name}</h3>
              <p className="step-copy">{cp}</p>
            </li>
          ))}
        </ol>

        <div className="process-foot">
          <p className="pull-quote">
            「別人教 how。<br/>我們教 why 和 judgment。」
          </p>
          <a className="btn btn-outline process-foot-cta" href="services.html">
            看看五步法如何落進每個方案 →
          </a>
        </div>
      </div>
    </section>
  );
}
window.Process = Process;
