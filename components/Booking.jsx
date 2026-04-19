/* Booking — primary conversion moment of the site.
   Orange field. Same treatment as the original Booking.jsx but elevated
   so it carries the page as the final section.
*/

function Booking() {
  return (
    <section className="booking" id="booking">
      <span className="booking-pencil" aria-hidden="true">✎</span>

      <div className="container booking-layout">
        <div className="booking-main">
          <p className="eyebrow eyebrow--on-primary">
            Free 15-min diagnostic call
          </p>
          <h2 className="section-title section-title--hero" style={{color:'var(--color-cream)'}}>
            還在猶豫嗎？<br/>
            <span className="booking-subhead">15 分鐘，先聊聊你的品牌卡在哪。</span>
          </h2>

          <p className="booking-copy">
            免費。不推銷。只是好好談談。<br/>
            你帶著問題來，我們陪你把它說清楚。
          </p>

          <div className="booking-actions">
            <a className="btn btn-on-primary-filled booking-cta-primary" href="#">
              預約 15 分鐘免費諮詢 →
            </a>
            <a className="btn btn-on-primary-outline" href="#">
              或加入 LINE 官方帳號，慢慢了解我們
            </a>
          </div>
        </div>

        <aside className="booking-aside" aria-label="預約後會發生什麼">
          <p className="booking-aside-kicker">What happens next</p>
          <ol className="booking-aside-list">
            <li>
              <span className="booking-aside-num">01</span>
              <span>你點下按鈕，挑一個你方便的 15 分鐘。</span>
            </li>
            <li>
              <span className="booking-aside-num">02</span>
              <span>我們在通話前，先看一眼你的網站或自介。</span>
            </li>
            <li>
              <span className="booking-aside-num">03</span>
              <span>通話結束，你會帶走一個具體的下一步。</span>
            </li>
          </ol>
          <p className="booking-aside-foot">
            如果這次對不上，我會直接告訴你。<br/>
            不推銷。不浪費你時間。
          </p>
        </aside>
      </div>
    </section>
  );
}
window.Booking = Booking;
