# frontier-10, batch 9 — spliced in at step 3

You are **Beta-frontier-10-9**. Your writable artifacts are the four
`research/frontier-10-batch-9.*` files named in the brief above.

## Why this batch exists

Beta-5 refused to scaffold the change-of-variables theorem for
`fubini-and-change-of-variables` (order 237) and was right to: the library has
**no determinant definition and no determinant theorem**, published or planned
with items. Under the owner's 2026-08-11 rule that a missing prerequisite is a
thing to *build*, not to decline, the orchestrator approved building it.
`research/frontier-10-step3-decisions.md` §D1 is the decision.

**You are on the critical path.** Batch 5 cannot author until your interfaces
exist, and batch 5 is in the same run.

## Your pages

- **A** `gaussian-elimination-and-row-reduction` (order 80, linear-algebra)
  - **B** `gaussian-elimination-and-row-reduction-examples` (order 81)
  - requires: `matrices-and-the-matrix-of-a-linear-map`
- **A** `determinants-of-matrices-over-a-commutative-ring` (order 82, linear-algebra)
  - **B** `determinants-of-matrices-over-a-commutative-ring-examples` (order 83)
  - requires: `matrices-and-the-matrix-of-a-linear-map`,
    `symmetric-groups-and-the-sign-homomorphism`,
    `rings-subrings-and-integral-domains`, `finite-counting-and-binomial-coefficients`

## Dependencies that are IN THIS RUN, not yet published

`matrices-and-the-matrix-of-a-linear-map` and
`symmetric-groups-and-the-sign-homomorphism` are being scaffolded **right now by
batch 1 of this same run**, at orders 78 and 44 — both before yours, so citing
them is backward-pointing and legal under `LEVELS.md` §Step 2.

**Read `research/frontier-10-batch-1.pages.json` on disk** for their exact item
ids, kinds and titles, and cite those ids. Do not invent an id you wish existed
and do not restate their content. `rings-subrings-and-integral-domains` and
`finite-counting-and-binomial-coefficients` are published — open them.

## Interfaces batch 5 needs from you

Expose these, with these ids or with a substitution you record explicitly in your
notes so the orchestrator can apply it to batch 5:

- `def-determinant-of-a-square-matrix` — the determinant of a square matrix over
  a commutative ring, and its absolute real value when specialised to real
  matrices.
- `thm-determinant-under-elementary-row-operations` — row swap negates, nonzero
  row scaling scales by that scalar, row addition leaves unchanged; **must cover
  singular matrices**.
- `thm-determinant-multiplicative` — `det(AB)=det(A)det(B)` for square matrices
  of the same finite size.
- `thm-invertible-matrices-factor-into-elementary-matrices` — every invertible
  finite square real matrix is a finite product of elementary matrices. This one
  belongs on the **Gaussian elimination** page; the first three on the
  determinant page.

Restrict the determinant definition to finite `n >= 1`.

## Prose scaffold sections to read

- `research/plan-algebra-track.md`
- `research/plan-algebra-track-expansion.md`
- `research/plan-combinatorics-and-categories.md`

## Batch note

Two full pairs, so the ordinary two-pair cap applies and both need the full
canonical-coverage harvest. Determinants over a **commutative ring**, not just a
field — the page id says so, and the Leibniz/permutation-sign definition is what
makes `symmetric-groups-and-the-sign-homomorphism` a real dependency rather than
a decorative one. Expect the determinant A page to be large; if it exceeds 60
items, propose the split in your notes with the exact cut and proposed ids.
