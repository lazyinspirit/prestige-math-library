# Wave 12 A4 orchestrator receipt

Status: **A4 complete and independently gated.** Baseline is
`442f831c94882899c1dc5559b36599b0f78a99c8`.

- Dispatch: the first A4 attempt is preserved as a 36-second transport-only
  failure caused by sandbox network denial. The identical append-only `a4r2`
  host dispatch completed successfully.
- Applied scope: 61/61 provenance/source rows, preserving all `origin` fields.
- Split: 53 pure retags and eight material items, zero creations. The
  authoritative host execution of `audit-split.mjs` reproduced the A3 set.
- Repairs: eight Facts and 13 Fact links removed; the two actually used
  Bolzano citations were relocated to its Remark; net declared dependency
  delta is four removals and one addition.
- Contracts: 48/48, 398 steps, 667 Fact/source citations, 384 boundaries;
  strict validation has zero errors and zero warnings.
- Final relationships: 887 = 648 published-backward + 235 same-batch + four
  forward. All 29 Wave12-to-Wave11 barrier edges remain mandatory.
- Authoritative A4 gate: 13/13 pass, zero wrapper warnings.
- Impact template: 61 changed interfaces and 364 affected items for A6.
- URL sweep: 44/46 direct successes. The legacy KTH analysis PDF and Lebl
  `realanal2-draft-v2.0.pdf` return HTTP 404; the ledger also carries live
  companion sources for the affected source families. Alpha owns the exact
  final disposition or source replacement at A6.

Only the canonical `baseline`, `pre-A4`, and `post-A4` touch snapshots exist.
No A6 or later work has started for Wave 12.
