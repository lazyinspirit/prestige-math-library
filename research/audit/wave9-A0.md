# Wave 9 A0 — frozen audit scope

Baseline: `6fb3b6c` (`main`, matching `origin/main` before launch). The owner explicitly directed Waves 8, 9, and 10 to run in parallel. Wave 9 reading may overlap Wave 8, but dependency-sensitive mutations and frozen-text gates must reconcile the final Wave 8 text first.

- Scope: **2 pages / 1 A/B pair / 43 items / 34 proof-bearing**.
- Excluded by R3: **34** already-tagged item appearances.
- Legal Beta batches: **1** (`wave9-real-analysis`).
- Relationships: **485** total — 394 published-backward, 91 same-batch, 0 cross-batch, 0 forward, 0 unresolved.
- Baseline touch snapshot: `research/audit/wave9-touches.json`, label `baseline`, 2,859 items.
- A0 gates: **9/9 pass**, including manifest-only policy over all 43 scoped items.

Next action: one GPT 5.6 Sol Audit-Beta performs A1/A2.
