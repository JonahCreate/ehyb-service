function ServiceCard({variant = 'light', tag, title, price, priceNote, desc, diff, getsTitle, gets, footnote, side, extraSpan, extraStyle}) {
  const className = ['sv-card', variant === 'dark' ? 'sv-card-free' : '', extraSpan ? 'sv-span2' : ''].filter(Boolean).join(' ');
  if (variant === 'dark' && side) {
    return (
      <div className={className} style={extraStyle}>
        <div className="sv-card-content">
          <span className="sv-card-tag">{tag}</span>
          <div className="sv-card-title">{title}</div>
          <div className="sv-card-price">{price}</div>
          <div className="sv-card-price-note">{priceNote}</div>
          <div className="sv-card-divider"></div>
          <p className="sv-card-desc">{desc}</p>
          <span className="sv-gets-title">{getsTitle || '你會帶走'}</span>
          <ul className="sv-gets-list">{gets.map((g, i) => <li key={i}>{g}</li>)}</ul>
        </div>
        <div className="sv-card-side">
          <div className="sv-card-side-title">{side.title}</div>
          <ul className="sv-card-side-list">{side.items.map((g, i) => <li key={i}>{g}</li>)}</ul>
        </div>
      </div>
    );
  }
  return (
    <div className={className} style={extraStyle}>
      <span className="sv-card-tag">{tag}</span>
      <div className="sv-card-title">{title}</div>
      <div className="sv-card-price">{price}</div>
      <div className="sv-card-price-note">{priceNote}</div>
      <div className="sv-card-divider"></div>
      {diff && <div className="sv-diff-note">{diff}</div>}
      {desc && <p className="sv-card-desc">{desc}</p>}
      <span className="sv-gets-title">{getsTitle || '你會帶走'}</span>
      <ul className="sv-gets-list">{gets.map((g, i) => <li key={i}>{g}</li>)}</ul>
      {footnote && <p className="sv-footnote">{footnote}</p>}
    </div>
  );
}
window.ServiceCard = ServiceCard;
