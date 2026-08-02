# Published-page audit — orchestrator RESUME checkpoint

Updated 2026-08-02, pre-compaction. Objective: run the published-page audit
workflow (`AUDIT-WORKFLOW.md`, NORMATIVE) — provenance retro-tagging +
citation-precision audit of the legacy untagged published corpus, waves
bottom-up, batches = category × dependency level.

## State

- Workflow BUILT, tested, MERGED to `main` and pushed: commits `6e2cbb1`
  (tools/briefs/docs) and `e8c4cbe` (R3 scope exclusion). Branch
  `audit-published-pages` retained at 6e2cbb1; worktree removed.
- **No wave has started. Next action is Step A0 for wave 1:**
  `node tools/rounds.mjs --audit-batches --wave 1` (writes to
  `research/audit/`), take the `touchlog` baseline snapshot
  (`node tools/touchlog.mjs snap research/audit/wave1-touches.json baseline`),
  report batch/pair/seam counts, then dispatch Audit-Betas per
  `briefs/audit-beta.md` (A1 provenance + A2 citation audit; no repairs before
  A3 approval).
- Opus 5 judge lane preflighted AND injection-tested (PASS 4 record in
  `tools/judge.mts` header): control keep=true, injected false step caught.
- Baselines (2026-08-02): 41 batch manifests / 2,007 items in scope / 428
  already-tagged appearances excluded; `genrisk` 23 seeds, all zero-cone
  (test outputs were written to scratch only — regenerate real manifests
  into `research/audit/` at A0).

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
