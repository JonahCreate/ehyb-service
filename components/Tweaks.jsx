/* Tweaks panel. Hidden until the host posts __activate_edit_mode.
   Controls: hero variant, hero glyph, accent intensity, process density.
*/

function Tweaks({state, setState}) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function onMsg(e) {
      const t = e.data && e.data.type;
      if (t === '__activate_edit_mode') setVisible(true);
      if (t === '__deactivate_edit_mode') setVisible(false);
    }
    window.addEventListener('message', onMsg);
    // Announce availability AFTER the listener is live
    try { window.parent.postMessage({type: '__edit_mode_available'}, '*'); } catch(e){}
    return () => window.removeEventListener('message', onMsg);
  }, []);

  function update(key, value) {
    const next = {...state, [key]: value};
    setState(next);
    try {
      window.parent.postMessage(
        {type: '__edit_mode_set_keys', edits: {[key]: value}},
        '*'
      );
    } catch(e){}
  }

  if (!visible) return null;

  const Row = ({label, id, options}) => (
    <div className="tw-row">
      <label className="tw-label" htmlFor={id}>{label}</label>
      <div className="tw-opts" role="radiogroup" aria-label={label}>
        {options.map(([val, lbl]) => (
          <button
            key={val}
            type="button"
            role="radio"
            aria-checked={state[id] === val}
            className={"tw-opt" + (state[id] === val ? " is-on" : "")}
            onClick={() => update(id, val)}
          >{lbl}</button>
        ))}
      </div>
    </div>
  );

  return (
    <aside className="tweaks" aria-label="Tweaks">
      <header className="tw-header">
        <span className="tw-title">Tweaks</span>
        <span className="tw-sub">Exactly How You Brand</span>
      </header>

      <Row
        label="Hero composition"
        id="heroVariant"
        options={[
          ['classic', 'Classic'],
          ['split', 'Split + quote'],
          ['editorial', 'Editorial rail'],
        ]}
      />

      <Row
        label="Hero background glyph"
        id="heroGlyph"
        options={[
          ['品牌', '品牌'],
          ['清楚', '清楚'],
          ['有料', '有料'],
        ]}
      />

      <Row
        label="Accent intensity"
        id="accent"
        options={[
          ['soft', 'Soft'],
          ['normal', 'Normal'],
          ['deep', 'Deep'],
        ]}
      />

      <Row
        label="Process density"
        id="processDensity"
        options={[
          ['airy', 'Airy'],
          ['normal', 'Normal'],
          ['compact', 'Compact'],
        ]}
      />

      <p className="tw-foot">
        Changes persist to disk. Toggle the Tweaks button to hide.
      </p>
    </aside>
  );
}
window.Tweaks = Tweaks;
