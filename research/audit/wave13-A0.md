# Wave 13 A0 — frozen audit scope

- Baseline: `442f831c94882899c1dc5559b36599b0f78a99c8` (`HEAD == origin/main`, clean before A0).
- Batch: `research/audit/wave13-real-analysis.pages.json`.
- Pages: 4 (2 A/B pairs): `power-series-and-real-analytic-functions`, its examples companion, `the-riemann-integral-in-rn-and-jordan-content`, and its examples companion.
- Scope: 76 untagged items, 62 proof-bearing; 59 already-tagged appearances excluded mechanically.
- Relationships: 487 = 288 published-backward + 199 same-batch; 0 unresolved.
- Touch ledger: `wave13-touches.json`, snapshot `baseline`, 2,859 corpus items.
- A0 gate of record: 9/9 pass. The first sandboxed wrapper attempt produced only nested-process `EPERM`; the identical already-approved host wrapper then passed every gate.

Parallel-run barriers: Wave 13 has 1 edge into Wave 11 and 23 edges into Wave 12. Wave 14 has 9 edges from 8 sources into 6 Wave 13 targets. Reconcile all against exact final earlier-wave text.
