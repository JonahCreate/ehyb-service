# Fonts

All typography uses **Google Fonts** — no local TTFs are needed. Load via:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@300;400;700;900&display=swap" rel="stylesheet">
```

## Families in use

| Family | Role | Weights / styles |
|---|---|---|
| **Noto Serif TC** | Chinese display (h1–h3, card titles, step names) | 300, 400, 700, 900 |
| **Noto Sans TC** | Chinese body (nav, paragraphs, lists) | 300, 400, 500, 700 |
| **Cormorant Garamond** | English decorative accent (eyebrows, step numbers, prices) | 400, 500, 600, italic 400 |

## Substitutions

**None flagged for the Latin/CJK families** — the brand was designed for Google Fonts from the start.

**Local TTFs:**

- `Aston_Script.ttf` — **TERTIARY backup accent only.** Loaded via `@font-face` in `colors_and_type.css` as `--font-script`. Reserved for the founder's Latin signature ("Jonah"). **Never** for headlines, body, navigation, Chinese characters, or any role Noto Serif TC could fill. If you're considering it, default to Noto Serif TC instead.

## Fallback stacks

Already encoded in `colors_and_type.css`:

- `--font-display`: `"Noto Serif TC", "Songti TC", "PMingLiU", serif`
- `--font-body`: `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif`
- `--font-accent`: `"Cormorant Garamond", "Georgia", serif`
