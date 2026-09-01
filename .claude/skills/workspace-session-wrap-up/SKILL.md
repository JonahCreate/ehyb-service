---
name: workspace-session-wrap-up
description: Runs the end-of-session wrap-up for the CURRENT project. It detects which project you're in (jonah-workspace, the 這就是品牌 vault, or ehyb-service) and writes that project's session recap, lessons, and status log, then commits/pushes. Use immediately when the user says "收工", "wrap it up", "總結", "done for today", or any signal the coding session is ending. This is per-PROJECT session closeout (recap + commit) — distinct from memory-renewal, which does long-term cross-session MEMORY.md renewal. Do not wait to be asked twice — trigger this skill and follow it exactly.
---

# Session Wrap-Up

## Overview

This is the closing protocol for whichever project you're working in. Run it in order, fully, every time. Announce: "I'm using the workspace-session-wrap-up skill."

**The goal:** capture what happened, lock in any new lessons, sync to GitHub so the other machine can `git pull` and pick up full context.

**Important:** Every step that says "create" or "append" means actually write the file using the Write or Edit tool — not describe what you would write, not show the content in the chat. Execute each step for real.

---

## Step 0 — Detect Project + Load Path-Map (fail-closed) `[回歸測試 #5]`

Before ANYTHING else, identify which project this session is in. From the repo root, check markers:

```bash
ls workspace.html history/WORKSPACE-LOG.md 2>/dev/null    # Path-Map A marker
ls "系統/回歸測試.md" 2>/dev/null; ls -d "AI 第二大腦/sessions" 2>/dev/null   # Path-Map B marker
basename "$(git rev-parse --show-toplevel 2>/dev/null)"   # Path-Map C marker: repo folder name = ehyb-service
pwd
```

- `workspace.html` + `history/WORKSPACE-LOG.md` exist → **Path-Map A (jonah-workspace)**
- `系統/回歸測試.md` (or `AI 第二大腦/sessions/`) exists → **Path-Map B (這就是品牌 vault)**
- Git repo top-level folder name is `ehyb-service` → **Path-Map C (ehyb-service)**
- **Neither matches → STOP. Do NOT write to any guessed path.** Tell Jonah: "I'm in `<cwd>`, which matches none of jonah-workspace, 這就是品牌 vault, or ehyb-service. Which wrap-up convention should I use, or is this a new project that needs its own path-map?"

This is **fail-closed**: an unrecognized project must NEVER silently get another project's layout. (Guard from 2026-06-10: this skill mis-fired in the 這就是品牌 vault, writing every step to non-existent jonah-workspace paths. Adding a new project = add a column here, never let detection fall through. Path-Map C added 2026-09-01 after this skill sat archived and a session invented an ad-hoc wrap-up for ehyb-service instead of stopping to ask.)

**Every step below reads its target from the active path-map:**

| Artifact | Path-Map A — jonah-workspace | Path-Map B — 這就是品牌 vault | Path-Map C — ehyb-service |
|---|---|---|---|
| Recap (Step 2) | `history/recaps/YYYY-MM-DD-session-recap.md` (overwrite today's) | `AI 第二大腦/sessions/YYYY-MM-DD.md` — **append** a dated section, never overwrite (concurrent agents share the day file); vault frontmatter `type: session-log` | `history/recaps/YYYY-MM-DD-session-recap.md` (overwrite today's) |
| Lessons (Step 3) | `history/lessons/YYYY-MM-DD-lessons-locked.md` (JW-N format) | **primary**: append `系統/AI執行錯誤日誌.md` (new format w/ 重現輸入 + 守衛 fields); multi-lesson → also `AI 第二大腦/learnings/YYYY-MM-DD-lessons-locked.md` | `history/lessons/YYYY-MM-DD-lessons-locked.md` (EH-N format — see Step 3) |
| Rule/guard (Step 5) | JW-N row in `CLAUDE.md` Prevention Rules table | **no JW-N table** — welded guard → row in `系統/回歸測試.md` ledger + `[回歸測試 #N]` anchor in the owning skill | EH-N row in `CLAUDE.md` Prevention Rules table (create the table on first use if `CLAUDE.md` doesn't exist yet) |
| Status log (Step 4) | `history/WORKSPACE-LOG.md` (one line, top) | `Sync Workspace/state.md` (append status block, `agent: claude-code`, append-only) | `history/WORKSPACE-LOG.md` (one line, top; create the file with a one-line header on first use) |
| Git (Step 7) | `git add history/ CLAUDE.md` → commit → push | commit to main; stage ONLY this session's own files; unrelated WIP in tree → ASK scope, don't blind-bundle; global skills sync via `python3 tools/build_cowork_plugin.py --push` | `git add history/ CLAUDE.md` plus this session's own changed files → commit → **ask before push** (single-person repo, but confirm remote is intended each time until this becomes routine) |
| Deploy-note | `workspace.html` (if changed) | (none — skip) | (none — skip; this is a static HTML site, not a workspace shell) |

---

## Step 1 — Get Today's Date

```bash
date +%Y-%m-%d
```

Use this date for all file names and log entries.

---

## Step 2 — Write Session Recap

Write the recap at the **active path-map's Recap path**.

- **Path-Map A** → `history/recaps/YYYY-MM-DD-session-recap.md`. If it exists for today (repeat wrap-up), overwrite it.
- **Path-Map B** → `AI 第二大腦/sessions/YYYY-MM-DD.md`. **Append** a dated section (`# Session — YYYY-MM-DD`, or `# Session（後段）— …` if the day's file already has a block) — never overwrite; another agent may share today's file. New file → add vault frontmatter (`type: session-log`, tags, `date`, `preamble`).
- **Path-Map C** → `history/recaps/YYYY-MM-DD-session-recap.md`. If it exists for today (repeat wrap-up), overwrite it.

**Required sections (all path-maps):**

```markdown
# Session Recap — YYYY-MM-DD

## What Was Worked On
[Lane or theme summaries — not every micro-turn. What was the intent of each major block of work?]

## What Shipped
**Files changed:**
- [filename] — [what changed]

**Features added / bugs fixed:**
- [concise bullet per item]

**Commits:**
- `[short hash]` — [commit message]

## What Is Still Pending
[Anything started but not finished, or explicitly deferred. If nothing, write "None."]

## Key Decisions Made
| Decision | Why |
|----------|-----|
| [decision] | [reason] |
```

Synthesize from the conversation — don't just list every tool call. Write what a future-Claude reading this file would need to pick up the thread.

---

## Step 3 — Write Lessons Locked (only if mistakes happened)

**Only do this if there were actual errors, wrong approaches, or corrections during the session.** If the session was clean, skip this step entirely.

- **Path-Map A** → create `history/lessons/YYYY-MM-DD-lessons-locked.md`:

  ```markdown
  # Lessons Locked — YYYY-MM-DD

  ## JW-N: [Rule Name]

  **Mistake:** [What went wrong, when it happened]

  **Root cause:** [Why it happened — the underlying assumption or gap]

  **Prevention rule (JW-N):** [What to do next time, in one clear sentence]

  **How to apply:**
  - [Specific situations where this rule triggers]
  - [What to check or do differently]
  ```
  To find the next JW number: check the Prevention Rules table in `CLAUDE.md` and increment from the highest existing number.

- **Path-Map B** → **primary**: append to `系統/AI執行錯誤日誌.md` using ITS documented format (the entry must include 「重現輸入」 and 「守衛」 fields). If the session produced several substantial lessons, also write `AI 第二大腦/learnings/YYYY-MM-DD-lessons-locked.md`. The vault has **no JW-N table** — do not invent one.

- **Path-Map C** → create `history/lessons/YYYY-MM-DD-lessons-locked.md`, same template as Path-Map A but numbered `EH-N` (ehyb-service's own sequence, independent of jonah-workspace's JW-N or the vault's log — never reuse another project's numbering). To find the next EH number: check the Prevention Rules table in `CLAUDE.md` and increment from the highest existing `EH-N`.

---

## Step 4 — Status Log

- **Path-Map A** → add exactly one line to `history/WORKSPACE-LOG.md` at the top of the log entries (after the header):
  ```
  ## YYYY-MM-DD | [One-sentence summary of what happened this session]
  ```
  Keep it tweet-length — a scannable changelog, not a description.

- **Path-Map B** → append a status block to `Sync Workspace/state.md` (append-only, never overwrite):
  ```
  ---
  agent: claude-code
  did: <one sentence — what was completed>
  touched: <comma-separated relative paths, or "none">
  open: <what is still pending, or "nothing">
  timestamp: <ISO 8601>
  ```
  `agent` must be exactly `claude-code` or `cowork`. One block per completed unit of work.

- **Path-Map C** → add exactly one line to `history/WORKSPACE-LOG.md` at the top of the log entries (after the header), same format as Path-Map A:
  ```
  ## YYYY-MM-DD | [One-sentence summary of what happened this session]
  ```
  If `history/WORKSPACE-LOG.md` doesn't exist yet, create it with a one-line header (`# ehyb-service Workspace Log`) before adding the first entry.

---

## Step 5 — Lock the Rule / Guard (only if Step 3 produced one)

- **Path-Map A** → if Step 3 produced a new JW-N rule, add it to the Prevention Rules table in `CLAUDE.md`:
  ```markdown
  | JW-N | **Rule Name** — one-line summary |
  ```
  Also update the "Current state" line if a major feature shipped.

- **Path-Map B** → if a guard was welded this session, add a row to the `系統/回歸測試.md` ledger Index and confirm the `[回歸測試 #N]` anchor is present in the owning skill file. The vault uses the regression ledger, **not** a JW-N / CLAUDE.md table. (Threshold: only weld guards for failures that happened ≥1× AND will systemically recur — never speculative.)

- **Path-Map C** → if Step 3 produced a new EH-N rule, add it to the Prevention Rules table in `CLAUDE.md` (create the table on first use):
  ```markdown
  | EH-N | **Rule Name** — one-line summary |
  ```

---

## Step 6 — Skill Sharpening (post-session skill review)

Before committing, review the skills that were actually **invoked** this session. For each one, ask:

**Did its output need correction, or did I have to work around a gap in it?**

- **No** → leave the skill alone.
- **Yes** → decide: one-time fix, or will it recur every time this skill runs?
  - One-time → note it in the recap, move on.
  - Recurring → **update the SKILL.md now** so the next session starts smarter. Surgical edit only — add the missing rule / example / step; don't rewrite the skill.

Log any skill edits in the recap under "What Shipped → Files changed". Global skills live in `~/.claude/skills/` (mirrored to the vault by the Stop hook), so they sit outside any project repo — note them in the recap but don't expect them in the project commit. A session where a skill needed correction but wasn't updated is compounding debt; close that loop here.

---

## Step 7 — Commit and Push

- **Path-Map A** →
  ```bash
  git add history/ CLAUDE.md
  git commit -m "session wrap-up YYYY-MM-DD"
  git push
  ```

- **Path-Map B** → the tree may hold unrelated WIP from concurrent sessions. Stage **only this session's own files** (the ones you actually touched), commit to `main`, push:
  ```bash
  git add -- <only the files this session changed>
  git commit -m "<scoped message>"
  git push
  ```
  If you're unsure which changes are yours vs. concurrent WIP, **ASK Jonah for commit scope — do not blind-bundle** the whole tree into a wrap-up commit. Global-skill edits don't live in the vault repo; sync them with `python3 tools/build_cowork_plugin.py --push` when relevant.

- **Path-Map C** →
  ```bash
  git add history/ CLAUDE.md -- <only the files this session changed>
  git commit -m "session wrap-up YYYY-MM-DD"
  ```
  Then **ask Jonah before running `git push`** — confirm the remote and branch are the intended destination. (This project is newer to the wrap-up ritual; drop this confirmation step once Jonah says to push by default.)

Report the commit hash when done.

---

## Quality Check Before Committing

- Does the recap capture the *why* behind key decisions, not just what changed?
- If mistakes happened, is there a lessons entry (A/C: lessons-locked file / B: `系統/AI執行錯誤日誌.md`)?
- Is the status-log entry brief and scannable?
- Do the staged files match the active path-map's Git row? (A/C: `history/` + `CLAUDE.md` only, plus explicitly-changed project files. B: only THIS session's own files — no concurrent WIP swept in.)
