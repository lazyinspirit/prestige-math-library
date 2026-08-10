# Wave 11 A0 — frozen audit scope

- Baseline: `442f831c94882899c1dc5559b36599b0f78a99c8` (`HEAD == origin/main`, clean before A0).
- Batch: `research/audit/wave11-real-analysis.pages.json`.
- Pages: 4 (2 A/B pairs): `darboux-lhopital-and-taylor`, its examples companion, `properties-of-the-integral-and-the-working-ftc`, and its examples companion.
- Scope: 61 untagged items, 55 proof-bearing; 0 already-tagged exclusions.
- Relationships: 790 = 618 published-backward + 155 same-batch + 17 forward; 0 unresolved.
- Touch ledger: `wave11-touches.json`, snapshot `baseline`, 2,859 corpus items.
- A0 gate of record: 9/9 pass. The first sandboxed wrapper attempt produced only nested-process `EPERM`; the identical already-approved host wrapper then passed every gate.

Parallel-run barrier: Wave 12 has 29 edges from 7 sources into 12 Wave 11 targets; Wave 13 has 1 edge into 1 target; Wave 14 has 4 edges into 4 targets. Those consumers must be reconciled against Wave 11 final text before their Alpha closure.
