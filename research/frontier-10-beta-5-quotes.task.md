# frontier-10, batch 5 — citation-quote repair

`proof-contract.mjs --strict` fails step 5 with **11 `citation-quote-mismatch`
errors, all yours**. Every one is a quote of a batch-9 Statement that does not
occur in that item's authored text.

## Why this happened — it is not your mistake

You and batch 9 authored **in parallel**. Your brief told you to read batch 9's
items on disk rather than the scaffold, but batch 9 was still writing them, so
the text you quoted was the scaffold's. The orchestrator should have sequenced
batch 9 ahead of you. Batch 9 is now finished and its Statements are final.

## The 11 edges

`thm-linear-images-scale-jordan-content-by-absolute-determinant` — L-facts quoting
`thm-gaussian-elimination-produces-row-echelon-form`,
`cor-a-row-reduction-is-a-product-of-elementary-matrices`,
`cor-elementary-matrices-are-invertible`,
`thm-invertible-matrices-factor-into-elementary-matrices`,
`thm-invertible-matrix-theorem`,
`thm-determinant-under-elementary-row-operations`,
`thm-real-square-matrix-invertible-iff-determinant-nonzero`

`thm-change-of-variables-for-compact-jordan-sets` — L1 quoting
`cor-determinant-is-a-polynomial-in-the-matrix-entries`, L4 quoting
`thm-determinant-multiplicative`

`ex-parallelepiped-content-from-a-matrix` — L2 quoting `def-determinant-of-a-square-matrix`

`ex-hyperspherical-coordinate-jacobian` — L2 quoting `thm-determinant-multiplicative`

## What to do

For each: **open the target item in `items/` and read its authored Statement**,
then correct both

1. the `[L#]` fact text in your own item, and
2. the recorded source clause in
   `research/frontier-10-batch-5.proof-contracts.json`,

so the quote is exact, or a faithful shortening preserving domain, quantifiers,
hypotheses, conclusion and direction.

**This is a correctness check, not a copy-paste job.** If a batch-9 Statement
turns out to be *weaker* than what your proof needs — in particular the
ring-versus-field split, where `thm-real-square-matrix-invertible-iff-determinant-nonzero`
is the real specialisation and the ring-level statement is about the determinant
being a **unit** — then your proof step is not licensed and must be repaired, not
just requoted. Say so in your notes if you hit that.

## Scope

Your own `items/` items and your own four `research/frontier-10-batch-5.*`
artifacts. Do not edit batch 9's items.

## Gate

```
node tools/proof-contract.mjs research/frontier-10-batch-5.proof-contracts.json --strict
```

Must be clean of `citation-quote-mismatch` for your items.
