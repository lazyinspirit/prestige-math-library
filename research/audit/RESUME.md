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
- **WAVE 0 IN FLIGHT (A0 done, A1/A2 running, 2026-08-02).** A0 artifacts on
  disk: 7 manifests (298 item entries; 276 distinct — the two ℝ construction
  pages share a 22-item ℤ/ℚ prelude), `wave0-touches.json` baseline snapshot,
  `wave0-audit-manifest.json` (1,166 same-batch / 631 cross-batch / 448
  published-backward / 25 forward edges). **8 Audit-Betas dispatched** (Opus,
  A1+A2 only, no repairs before A3): one per batch, except real-analysis split
  into sub-batches `cauchy` (owns all 40 cauchy-page items incl. the shared
  prelude) and `dedekind` (its 17 exclusive items), writing sub-namespaced
  `wave0-real-analysis-{cauchy,dedekind}.*` files; `content-policy.mjs
  --ledger` is repeatable so both ledgers feed the gate. Expected Beta outputs
  per batch: `.provenance.jsonl`, `.findings.md`, `.proof-contracts.json`.
  **Next action: on Beta completion, A3 — orchestrator adjudicates every
  proposed repair from disk, then approves A4 application; then A6 Alpha,
  A7 judge sweep (`JUDGE_LINEUP=deepseek+opus`, `judge-sweep.mjs --pages`
  with all 7 wave-0 A page ids), A8, A9, A10 owner rundown.
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
