# prestige-math-library — session instructions

This repo is the **public math library** served at `app.prestige-intelligence.cc/library`
by the Prestige Intelligence app (bind-mount; see README §How serving works).
**Normative docs, read before touching content: `SCHEMA.md` (item/page contract) and
`README.md` (provenance, judge lineup, citation rules).** House style for proofs:
`items/lem-cauchy-bounded.md` is the approved exemplar.

## The authoring workflow (every item, no exceptions)

1. **Author as `status: draft`** per SCHEMA.md. Session-authored content is
   `origin: session`; never fabricate scraped sources (use `references`).
2. **Precheck (mechanical, free)** — from the repo root:
   ```
   npx --prefix /root/Projects/prestige-intelligence/worker tsx tools/precheck.mts
   ```
   Bare = all items; or pass specific files. On REPAIR output, adopt the printed
   canonical stratification into the file and re-run until clean (the repo stores
   the strictly stratified form: a step citing phase-k steps sits in phase k+1).
   Record `verification.precheck: pass`.
3. **Cross-family judge** (before publish): session items → **GPT-5.4 primary,
   Gemini fallback — NEVER a Claude model**; pipeline items → production lineup.
   No judge script exists yet (TODO: `tools/judge.mts` via ofox using the app
   repo's key); until then run it manually and record model/verdict/date in
   `verification.judge`.
4. **Owner audit** gates `status: published` (set `verification.audited`).
   Flipping status is the publish action — the live site reads this directory.
5. **Commit + push** (`main`, conventional-commit style). NO Co-Authored-By
   trailers, ever. GitHub is backup only, never on the serving path.

## Preview

Renderer not yet built (app-repo work: `/library` routes reading env
`MATH_LIBRARY_DIR`). Until then and for pre-deploy preview: the app repo's
`docs/DEV_WORKFLOW.md` tunnel (dev server on :3001). Post-deploy: owner signs in
on prod → drafts render with a DRAFT banner; public sees only `published`.

## Hard rules

- Item ids are IMMUTABLE on `main`; renames go through `aliases` (SCHEMA §2).
- A published page listing a draft item is a hard error, never a silent skip.
- Generation for this library NEVER goes through the public billed pipelines,
  and NEVER wires the Claude subscription into the worker service. Modes:
  session route (Fable + Claude subagents) or the internal harness over
  `worker/src/engines/` at raw API cost.
- Mathematical content requires Fable audit before publish, even when judged.
