# This dispatch — read batch 5

Audit **batch 5** in full. Findings file:
`research/frontier-10-reader-5.findings.md`.

## Pages and items

- **A** `fubini-and-change-of-variables` — 25 items
- **B** `fubini-and-change-of-variables-examples` — 13 items

**38 items.** The scaffold, source harvest and
proof contracts are `research/frontier-10-batch-5.{pages.json,coverage.json,proof-contracts.json}`;
the batch notes record its provenance rationales and convention decisions.

## Cross-batch seam to check hard

This batch's change-of-variables material rests on batch 9's determinant
interfaces, and the two were authored in parallel — 11 citation quotes were
already found stale and repaired. **Re-verify every batch-9 citation against the
authored text**, especially the ring-versus-field boundary: the ring-level
corollary says an invertible matrix has *unit* determinant, while
`thm-real-square-matrix-invertible-iff-determinant-nonzero` is the real
specialisation. A step using the ring statement where it needs the real one is
unlicensed.

