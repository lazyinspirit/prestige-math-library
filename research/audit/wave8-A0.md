# Wave 8 A0 — frozen audit scope

Baseline: `6fb3b6c` (`main`, matching `origin/main` before launch). The owner explicitly directed Waves 8, 9, and 10 to run in parallel. Their A1/A2 reading passes may overlap; mutations and frozen-text gates remain wave-scoped and dependency-reconciled.

- Scope: **8 pages / 4 A/B pairs / 139 items / 116 proof-bearing**.
- Excluded by R3: **16** already-tagged item appearances.
- Legal Beta batches: **3**. The generated three-pair real-analysis manifest was split through `wave8-batch-split.json`; the split severs no declared inter-pair relationship.
- Relationships: **1,602** total — 1,224 published-backward, 336 same-batch, 42 forward, 0 cross-batch, 0 unresolved.
- Baseline touch snapshot: `research/audit/wave8-touches.json`, label `baseline`, 2,859 items.
- A0 gates: **9/9 pass**, including manifest-only policy over all 139 scoped items.

| batch | pairs | items | proof-bearing |
|---|---:|---:|---:|
| `wave8-real-analysis-absolute-convergence` | 1 | 40 | 34 |
| `wave8-real-analysis-cantor-continuity` | 2 | 67 | 58 |
| `wave8-topology` | 1 | 32 | 24 |

Next action: three GPT 5.6 Sol Audit-Betas perform A1/A2, one per legal batch.
