## Reader 2 — audit batch 3 (75 items)

You did **not** author this batch. That separation is the point of your role.

| order | kind | page | items |
|---|---|---|---|
| 86 | A | `eigenvalues-eigenvectors-and-the-characteristic-polynomial` | 23 |
| 87 | B | `eigenvalues-eigenvectors-and-the-characteristic-polynomial-examples` | 7 |
| 92 | A | `dual-spaces-bilinear-forms-and-inertia` | 33 |
| 93 | B | `dual-spaces-bilinear-forms-and-inertia-examples` | 12 |

Every item id is listed in `research/plan-spec.json` under these pages, and each
one is a file at `items/<id>.md`. The batch's own record — what its author
promised — is `research/frontier-12-batch-3.notes.md` and
`research/frontier-12-batch-3.proof-contracts.json`.

### Write your findings to

`research/frontier-12-reader-2.findings.md`

### You are READ-ONLY on content

Do not edit any file under `items/` or `library/`. Alpha adjudicates every
finding from disk and applies any repair. Your job is evidence, not a verdict.

### Priorities for this batch

Read every item, but spend your attention where the exposure is. 75 items is
a lot; a shallow pass over all of them is worth less than a real pass over the
proof-bearing ones plus a check of every citation.

Specific things known to be live in this run:

- **Hypotheses.** `char != 2` for polarisation and orthogonal diagonalisation;
  ordered fields for Sylvester's inertia; star-shaped rather than merely
  connected for the converse of closedness; smallness conditions in the
  category-theory limits; pairwise versus mutual independence in probability;
  nonnegativity for Markov; the split-characteristic-polynomial hypothesis where
  the source assumed an algebraically closed field.
- **Citation fidelity.** A `[F#]`/`[A#]`/`[L#]` fact must state the cited
  proposition itself. This run already caught one at scaffold stage — a quoted
  `|sin x| <= |x|` where the source states `sin(x) <= x` for `x >= 0`. Open the
  cited item on disk and compare; do not trust the restatement.
- **Green's theorem** (if batch 4) is deliberately scoped to elementary regions
  and finite unions. Complaining it does not cover arbitrary Jordan domains is
  NOT a finding. A proof step that quietly assumes a Jordan domain IS one.
- **Titles.** A title or Statement claiming more than the proof delivers is
  fatal, and the step-7 judges cannot see a false title.

Item ids, for your checklist:

- `def-eigenvalue-eigenvector-eigenspace-and-spectrum`
- `prop-eigenvalue-iff-shift-is-not-invertible`
- `thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent`
- `cor-an-operator-has-at-most-dimension-many-distinct-eigenvalues`
- `def-characteristic-polynomial-of-a-matrix`
- `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients`
- `lem-characteristic-polynomial-of-block-triangular-matrix`
- `thm-characteristic-polynomial-is-similarity-invariant`
- `def-characteristic-polynomial-of-an-operator`
- `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial`
- `def-algebraically-closed-field`
- `cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue`
- `def-algebraic-and-geometric-multiplicity-of-an-eigenvalue`
- `thm-trace-is-sum-of-eigenvalues`
- `thm-determinant-is-product-of-eigenvalues`
- `thm-geometric-multiplicity-does-not-exceed-algebraic-multiplicity`
- `cor-a-simple-eigenvalue-has-one-dimensional-eigenspace`
- `thm-products-ab-and-ba-have-the-same-characteristic-polynomial`
- `def-polynomial-evaluation-at-an-endomorphism`
- `thm-spectral-mapping-for-polynomials`
- `cor-characteristic-polynomial-evaluation-has-only-zero-eigenvalues`
- `thm-cayley-hamilton`
- `cor-inverse-of-an-invertible-operator-is-a-polynomial-in-the-operator`
- `ex-characteristic-polynomial-and-eigenspaces-of-a-two-by-two-matrix`
- `ex-real-quarter-turn-has-no-real-eigenvalues`
- `ex-a-matrix-over-f-two-with-no-eigenvalues`
- `ex-repeated-eigenvalue-with-one-dimensional-eigenspace`
- `ex-repeated-eigenvalue-with-full-eigenspace`
- `ex-cayley-hamilton-reduces-powers-of-a-two-by-two-matrix`
- `fs-matrix-polynomial-substitution-is-a-ring-homomorphism`
- `def-algebraic-dual-and-linear-functional`
- `def-dual-family-associated-to-a-basis`
- `thm-dual-family-is-a-basis-in-finite-dimension`
- `thm-dual-family-does-not-span-in-infinite-dimension`
- `lem-linear-functionals-separate-points-from-subspaces`
- `def-canonical-map-to-the-double-dual`
- `thm-canonical-map-to-double-dual-is-injective`
- `thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional`
- `def-annihilators-under-the-evaluation-pairing`
- `thm-double-annihilator-and-annihilator-dimension`
- `def-transpose-of-a-linear-map`
- `prop-transpose-preserves-identities-and-reverses-composition`
- `thm-transpose-kernel-range-and-rank`
- `thm-matrix-of-transpose-is-the-transposed-matrix`
- `def-bilinear-symmetric-skew-and-alternating-forms`
- `thm-symmetric-alternating-relations-by-characteristic`
- `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual`
- `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form`
- `thm-change-of-basis-for-a-bilinear-form-is-congruence`
- `cor-rank-and-nondegeneracy-are-congruence-invariants`
- `def-sesquilinear-and-hermitian-forms-over-a-field-with-involution`
- `thm-change-of-basis-for-a-sesquilinear-form`
- `def-quadratic-form-and-polar-form`
- `thm-polarization-bijection-in-characteristic-not-two`
- `thm-symmetric-bilinear-forms-have-an-orthogonal-basis`
- `cor-symmetric-matrices-are-congruent-to-diagonal-matrices`
- `cor-quadratic-forms-diagonalize-in-characteristic-not-two`
- `thm-alternating-forms-have-a-symplectic-normal-form`
- `def-definiteness-inertia-and-signature-data-over-the-reals`
- `thm-sylvesters-law-of-inertia`
- `cor-real-symmetric-bilinear-forms-are-classified-by-inertia`
- `lem-schur-complement-congruence-and-determinant`
- `thm-sylvesters-criterion-for-positive-definiteness`
- `ex-dual-basis-and-transpose-on-f-three`
- `ex-annihilator-of-a-coordinate-plane`
- `ex-canonical-double-dual-map-for-polynomial-space-is-not-surjective`
- `cex-distinct-subspaces-of-the-dual-can-have-the-same-preannihilator`
- `ex-a-bilinear-form-neither-symmetric-nor-alternating`
- `ex-congruence-diagonalization-and-inertia-of-a-real-quadratic-form`
- `ex-symplectic-normal-form-of-a-degenerate-alternating-form`
- `cex-symmetric-form-need-not-have-an-orthogonal-basis-in-characteristic-two`
- `cex-distinct-quadratic-forms-have-the-same-polar-form-in-characteristic-two`
- `cex-positive-determinant-does-not-imply-positive-definite`
- `ex-sylvesters-criterion-for-a-three-by-three-matrix`
- `cex-congruence-need-not-preserve-trace-or-determinant`
