# Wave 6 — A0 scope and launch receipt

Started 2026-08-08 after the owner cleared the Wave 5 A10 pause.

- Scope: **126 items**, 9 pages, 3 legal Beta batches; 34 already-tagged
  appearances excluded by the standing owner rule.
- `wave6-real-analysis-laurent`: `formal-laurent-series-field` — 11 items.
- `wave6-real-analysis-limits`: `limsup-and-subsequential-limits` and
  `topology-of-r`, with their examples companions — 65 items.
- `wave6-topology`: `hausdorff-via-the-diagonal` and
  `homotopy-and-homotopy-equivalence`, with their examples companions — 50
  items.
- Relationship inventory: 987 published-backward, 369 same-batch, 34 forward.
- A0 baseline: `wave6-touches.json` snapshot `baseline`, 2,859 items.
- Generated-risk ledger refreshed: 69 seeds, 14 load-bearing, largest cone 9.
- Manifest policy: 126 scoped items, 0 errors, 0 warnings. Directly runnable
  base gates (`depcheck`, `fwdcheck`, `extcheck`, `rendercheck`, `prosecheck`,
  `citecheck`, `depsource`) exited 0. The TypeScript precheck wrapper could not
  run in the managed sandbox because its nested process is denied; the prior
  corpus baseline remains the last precheck receipt and this is recorded rather
  than represented as a pass.

A1/A2 is running under `tools/run-wave.mjs --wave 6 --from-step A2`: three GPT
5.6 Sol Betas, each at `xhigh` with `model_context_window=1000000`. The driver
will halt at A3 for orchestrator adjudication.

Working baseline: HEAD `84c52d1`; the owner-directed Sol/Terra mechanism update
and these Wave 6 artifacts are uncommitted because this session mounts `.git`
read-only. No credential is recorded here.
