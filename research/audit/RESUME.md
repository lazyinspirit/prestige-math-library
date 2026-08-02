# Published-page audit — orchestrator RESUME checkpoint

Updated 2026-08-02, pre-compaction. Objective: run the published-page audit
workflow (`AUDIT-WORKFLOW.md`, NORMATIVE) — provenance retro-tagging +
citation-precision audit of the legacy untagged published corpus, waves
bottom-up, batches = category × dependency level.

## State

- Workflow BUILT, tested, MERGED to `main` and pushed: commits `6e2cbb1`
  (tools/briefs/docs) and `e8c4cbe` (R3 scope exclusion). Branch
  `audit-published-pages` retained at 6e2cbb1; worktree removed.
- **Wave definition changed (owner, 2026-08-02): waves are the SITE's
  dependency levels** — the app's `pageGraph` (category-local, item-`deps`
  projected to pages, roots at 0) ported verbatim into
  `rounds.mjs --audit-batches`; NOT the plan-spec `requires` function. First
  wave is **wave 0** (every category's level-0 pairs, incl. the pre-plan
  ℕ/ℝ construction pages; `not-proved-here` excluded). Verified 2026-08-02:
  all 66 in-scope pair levels equal the app's own output; 40 manifests,
  waves 0–14, 2,179 items in scope, 428 tagged appearances excluded.
- **WAVE 0: A0–A8 COMPLETE, PAUSED BEFORE A9 (owner, 2026-08-02).**
  Commits: A4 `c355590`, A6 `240fac2`, A7 `93cbf89`, A8r1 `298f953`,
  A8r2 `52becaa`, stamp tool + finding `749a355`.
  **Judge lane changed mid-wave (owner): Opus 5 -> Sonnet 5**, lineup
  `JUDGE_LINEUP=deepseek+sonnet`, injection-tested (judge.mts PASS 5).
  Cause: headless Opus exited status 1 on 303/382 calls at 16-way
  concurrency (capacity refusal, 101 nulls). Superseded Opus rows parked in
  `wave0-judge-opus-superseded.jsonl`.
  A7: 276/276 both lanes, 0 nulls. DeepSeek 249 keep/27 reject; Sonnet 243/33.
  A8: 64 adjudications over 2 rounds — 6+1 confirmed_fatal, rest nonfatal or
  false positive. 63 items carry `verification.verified`.
  **EXACT NEXT ACTIONS, in order:**
  1. IN FLIGHT: scoped Alpha repairing `lem-rat-embeds-dense` (Statement
     claims "embedding of ordered fields"; no inverse preservation proved;
     neither lane caught it). Orchestrator decision: PROVE in place, do not
     narrow (consumer `lem-cauchy-with-convergent-subsequence` [L3] leans on
     the unproved half). Requires consumer closure + independent
     certification before completion. Commit only after its gates pass.
  2. CLOSING FULL-MANIFEST SWEEP (not just --items): A8 repairs invalidated
     the pair-context hash of 184/276 items. Use
     `JUDGE_LINEUP=deepseek+sonnet node tools/judge-sweep.mjs --manifests
     research/audit/wave0-*.pages.json ...` — ledger skip makes current
     verdicts free. Staged rejudge ids: def-cut-multiplication,
     def-nat-finite-sum-and-product, def-real-dedekind,
     ex-pascals-triangle-to-row-six, lem-rat-cut-embeds, plus whatever the
     in-flight repair adds.
  3. `node tools/apply-judge-stamps.mjs --ledger ... --manifests ... --apply`
     (owner-approved 2026-08-02). Dry-run first; it stamps ONLY items where
     both lanes returned keep=true on the CURRENT hash.
  4. A9 scope-denial re-grep, then A10 owner rundown (the wave's sole pause).
  **A10 queue so far:** dedekind reading-order swap (D9); legacy page-count
  prose; about-the-book URL pattern (Stanley/Halmos/Rudin/Tao);
  bare-[A#] ℤ/ℚ prelude sweep; optional von Neumann order/membership lemma;
  Hausdorff-distance forward promise; `rem-sup-conventions` root-cause claim;
  Sonnet's 42% false-positive rate (9/16 were reject-with-keep-reasoning — a
  verdict-extraction problem); abstract-algebra Beta's momentary `git stash`
  on the shared tree (recovered, no damage); twice-touched escalations
  (`lem-rat-cut-embeds` = 4 touches, most-touched of the wave;
  `thm-reals-dedekind-field`; `ex-euclidean-algorithm-on-consecutive-
  fibonacci-numbers`; `thm-vandermonde-identity`; `lem-cut-reciprocal`;
  3 topology decay items).

- **(historical) A0–A4 detail:** All 8 batches
  through A1/A2 (findings+ledgers+contracts on disk), A3 adjudicated
  (`wave0-*.A3.md`), A4 applied and committed (`c355590`): 269 items
  retro-tagged/repaired, ZERO fatal defects wave-wide, zero `ai-generated`
  statements except 7 combinatorics `trivial` witnesses (2 load-bearing
  genrisk seeds, cone 1). Six `established-knowledge` rows HELD unwritten for
  Alpha concurrence (NT×1, cauchy×3, LA×2). ~65 material items are stampless
  (`published-unaudited`) awaiting Alpha's `verification.verified`
  {scope: published-audit, delegated_by: owner}. A6 prep committed
  (`08f01ce`): merged contracts (209 items), impact template (270 interfaces
  / 2,451 affected), git-diff classification 205 pure / 65 material
  (baseline `87c4025` → applied `c355590`), genrisk regenerated. Touch
  snapshots: baseline / pre-A4-dedekind / pre-A4 / post-A4 (the 17
  "double-repaired" dedekind items are a snapshot-window artifact, one
  logical repair each). **Alpha (Opus) is dispatched for A6**: certify 65
  material repairs via independent readers, 6 D2 concurrences, deferred
  debatable restatements (√2 retitle, Bernoulli, Tao/Rudin curation, D5c,
  extended-reals linkage), 1,104 cross-batch/backward edge audit, risk
  reviews, 2 genrisk dispositions, impact receipt; report =
  `research/audit/wave0-alpha.md`.
  **Next after A6: A7 judge sweep** — `JUDGE_LINEUP=deepseek+opus
  node tools/judge-sweep.mjs --pages` with ALL 7 wave-0 A page ids
  (monoids-groups-and-subgroups, finite-counting-and-binomial-coefficients,
  construction-of-the-natural-numbers, vector-spaces-and-subspaces,
  divisibility-gcd-and-bezout, construction-of-r-via-cauchy-sequences +
  construction-of-r-via-dedekind-cuts, metric-spaces) — every in-scope item,
  both lanes; then A8 Alpha adjudication of rejections, A9 scope-denial
  re-grep, A10 owner rundown (queue so far: dedekind reading-order swap D9,
  legacy page-count prose, about-the-book URL pattern (Stanley/Halmos/Rudin),
  bare-[A#] prelude sweep, optional von Neumann lemma, Hausdorff-distance
  forward promise; also report the abstract-algebra Beta's momentary git
  stash on the shared tree, recovered without damage).
- Opus 5 judge lane preflighted AND injection-tested (PASS 4 record in
  `tools/judge.mts` header): control keep=true, injected false step caught.
- Baselines (2026-08-02, site-parity levels): 40 batch manifests, waves 0–14
  / 2,179 items in scope / 428 already-tagged appearances excluded; `genrisk`
  23 seeds, all zero-cone (test outputs were written to scratch only —
  regenerate real manifests into `research/audit/` at A0).

## Owner rules binding this run (beyond the standing repo rules)

- Decisions D1–D5, R1–R3 in `AUDIT-WORKFLOW.md` §11. Highlights:
  D1 FULL proof contracts for every in-scope proof-bearing item.
  D2 established-but-unsourced → `ai-altered` without URL, ledger evidence
  `established-knowledge`, REQUIRES Alpha concurrence (else `ai-generated`).
  D3 one owner pause per wave (A10); ship per wave.
  D5 delete legacy `authorship` in the same edit that writes provenance.
  R1 repair delegation = everything incl. debatable restatements, Alpha final
  adjudicator; owner-only: deletions, id changes, reading-order changes.
  R2 judge every in-scope item every wave. R3 already-tagged items are NEVER
  audit scope (mechanical in `rounds.mjs --audit-batches`).
- Models: all audit agents Opus 5 high effort via Claude runtime; judges
  `JUDGE_LINEUP=deepseek+opus` (DeepSeek key via env or
  /root/Projects/prestige-intelligence/.env). Build lineup untouched.
- Repair stamp: `verification.verified` {scope: published-audit,
  delegated_by: owner}. Gates + per-wave receipt commands:
  `AUDIT-WORKFLOW.md` §8.

## Gotchas already measured

- `claude --bare` breaks OAuth ("Not logged in") — runFreshOpus deliberately
  omits it; do not re-add.
- `rounds.mjs --repo` defaults to the main checkout path; fine when running
  from the repo root.
- The judge context-hash / sweeps must run from the repo root (relative
  `items/` paths).
- Owner's separate codex session may hold uncommitted `main` state — check
  `git status` before committing.

## Working tree at checkpoint

`main` at `e8c4cbe`, clean. No `research/audit/wave*` artifacts exist yet;
this file is the first content of `research/audit/`.
