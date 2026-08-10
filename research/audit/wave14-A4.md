# Wave 14 A4 orchestrator receipt

Status: **A4 complete and independently gated.** Baseline is
`442f831c94882899c1dc5559b36599b0f78a99c8`.

- Applied scope: 25/25 provenance/source rows, preserving all `origin` fields.
- Split: 20 pure retags, five material items, zero creations. The authoritative
  host run of `audit-split.mjs` reproduced the exact material set recorded in
  `wave14-audit-split.json`.
- Repairs: all five A3-authorized citation/proof repairs are present. The
  `thm-e-is-irrational` phase labels were normalized to 2.1/3.1/4.1 so the
  dependency-stratified proof passes reflow and precheck; the propositions and
  dependency inputs are exactly the A3-authorized ones.
- Contracts: merged `wave14-proof-contracts.json` contains 23/23 items and
  passes strict validation with zero errors and zero warnings.
- Authoritative A4 gate: 13/13 pass, zero warnings at wrapper level.
- URL sweep: 16/18 direct `curl` successes. The two HTTP-403 rows are the TAMU
  second-edition exponential-properties page and Keisler's Wisconsin PDF.
  Both are search-indexed and content-resolvable; the equivalent TAMU
  first-edition section is directly crawlable. Alpha owns their final source
  disposition at A6.
- A6 barrier: all 16 earlier-wave edges remain mandatory (4 Wave 11, 3 Wave
  12, 9 Wave 13).

The Beta also wrote five redundant `pre-A4-<id>` touch snapshots. Their hashes
are identical to the canonical `pre-A4` stage snapshot, so the touch report
still records exactly 25 one-time changes and no repeated repair. They are
retained as durable evidence; later A4 tasks explicitly forbid per-item
snapshots under the binding efficiency protocol.

No A6 or later work has started for Wave 14.
