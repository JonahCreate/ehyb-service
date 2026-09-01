# ehyb-service

Jonah 的課程銷售頁靜態網站（純 HTML/CSS，無框架）。目前主要在改「六週文字策展計劃」的展覽視覺（`writing-exhibition.html` / `writing-exhibition-v2-prototype.html`）。

## Current state

- 已裝 Impeccable 設計技能（`.claude/skills/impeccable/`），本專案本地安裝，非全域。
- `PRODUCT.md` 目前只涵蓋六週文字策展計劃頁面，其他課程頁面尚未建立各自的產品說明書。
- 收工流程走 `.claude/skills/workspace-session-wrap-up`（Path-Map C），commit 後先問過 Jonah 再 push。

## Prevention Rules

| ID | Rule |
|----|------|
| EH-1 | **技能清單裡沒有預期的技能，先查再代打** — 使用者提到固定儀式性動作（收工、健檢⋯）但技能清單找不到對應技能時，先確認是「真的不存在」還是「存在但沒載入」，不要自己臨時編一套流程頂替。 |
| EH-2 | **截圖異常不能直接當 bug 回報** — 視覺工具（截圖／預覽）顯示空白、跳動、文字消失等異常時，先用程式量測實際 DOM 座標交叉驗證，確認是網站真的有問題還是工具本身顯示錯誤，再回報給使用者。 |
