function ProductLadder() {
  const steps = [
    ['01', '兩天品牌\n差異化診斷', '免費', false],
    ['02', '單次品牌\n診斷諮詢', '2,000', false],
    ['03', '一週品牌\n定位工作坊', '3,500', false],
    ['04', '八週品牌\n完整陪跑', '25,000', true],
  ];
  return (
    <section className="sv-ladder">
      <span className="sv-ladder-title">你的路徑</span>
      <div className="sv-ladder-steps">
        {steps.map(([num, name, price, dark], i) => (
          <React.Fragment key={num}>
            <div className={"sv-step" + (dark ? " sv-step-dark" : "")}>
              <span className="sv-step-num">Step {num}</span>
              <span className="sv-step-name">{name.split('\n').map((s, j) => (
                <React.Fragment key={j}>{j > 0 && <br/>}{s}</React.Fragment>
              ))}</span>
              <span className="sv-step-price">{price}</span>
            </div>
            {i < steps.length - 1 && <div className="sv-step-arrow"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
window.ProductLadder = ProductLadder;

function ServicesFooter() {
  return (
    <footer className="sv-footer">
      <div className="sv-footer-name">Jonah ✦ 這就是品牌</div>
      <div className="sv-footer-contact">
        LINE 私訊 &nbsp;｜&nbsp; <a href="mailto:gj.marketing0116@gmail.com">gj.marketing0116@gmail.com</a>
      </div>
      <div className="sv-footer-note">幫有料的人，把自己說清楚。</div>
    </footer>
  );
}
window.ServicesFooter = ServicesFooter;
