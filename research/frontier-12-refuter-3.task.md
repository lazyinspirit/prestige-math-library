## refuter-3 — eigenvalues, Cayley–Hamilton, and the spectral mapping theorem

You are **read-only**. You cannot write files, and you never propose an edit
directly into content — you report evidence and Alpha adjudicates it from disk.

### Your assignment

| order | kind | page | items |
|---|---|---|---|
| 86 | A | `eigenvalues-eigenvectors-and-the-characteristic-polynomial` | 23 |
| 87 | B | `eigenvalues-eigenvectors-and-the-characteristic-polynomial-examples` | 7 |

**30 items.** Every id below is a file at `items/<id>.md`.

The batch's own record — what the author promised — is the matching
`research/frontier-12-batch-<i>.notes.md` and
`research/frontier-12-batch-<i>.proof-contracts.json`. The merged contract is
`research/frontier-12-proof-contracts.json`.

### Where the exposure is

This page deliberately proves results **over an arbitrary field** that its
source (Pinkham) proves over the complex numbers, by carrying an explicit
hypothesis that the characteristic polynomial splits. That strengthening is the
main thing to check: it is a genuine generalisation, and generalisations are
where hypotheses go missing.

Concentrate on:

- `thm-cayley-hamilton`. It takes the adjugate route over `F[x]`: expand
  `adj(xI - A) = B_0 + ... + B_{n-1} x^{n-1}`, apply the adjugate identity,
  compare matrix coefficients, telescope. **The classic pseudo-proof — "substitute
  A into det(xI - A) = 0" — is invalid**, and the page documents the trap in
  `fs-matrix-polynomial-substitution-is-a-ring-homomorphism`. Verify the real
  proof never uses the invalid move, that the coefficient comparison is between
  genuinely equal matrix polynomials, and that the telescoping sum is correct.
- `thm-spectral-mapping-for-polynomials` and
  `cor-characteristic-polynomial-evaluation-has-only-zero-eigenvalues`. The proof
  is an induction on an invariant eigenline using
  `lem-characteristic-polynomial-of-block-triangular-matrix`. Check the induction
  hypothesis, the cancellation of `(x - lambda_0)` in the integral domain `F[x]`,
  and that the block-triangular lemma states what the proof uses. Check whether
  the theorem claims the eigenvalues of `p(A)` are **exactly** `{p(lambda_i)}`
  with multiplicity, and whether the proof delivers that or only one inclusion.
- `thm-trace-is-sum-of-eigenvalues` and `thm-determinant-is-product-of-eigenvalues`.
  These compare coefficients of the factored characteristic polynomial against
  `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients`. Check
  the **signs** — the `x^{n-1}` coefficient is `-tr(A)` and the constant term is
  `(-1)^n det(A)`, and sign errors here are easy and fatal.
- `thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent` — check
  the induction.
- Every item carrying the split-characteristic-polynomial hypothesis: confirm the
  hypothesis is **stated in the Statement**, not only used in the proof. A
  theorem that needs splitting but does not say so is fatal.

### Item ids


**`eigenvalues-eigenvectors-and-the-characteristic-polynomial`**

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

**`eigenvalues-eigenvectors-and-the-characteristic-polynomial-examples`**

- `ex-characteristic-polynomial-and-eigenspaces-of-a-two-by-two-matrix`
- `ex-real-quarter-turn-has-no-real-eigenvalues`
- `ex-a-matrix-over-f-two-with-no-eigenvalues`
- `ex-repeated-eigenvalue-with-one-dimensional-eigenspace`
- `ex-repeated-eigenvalue-with-full-eigenspace`
- `ex-cayley-hamilton-reduces-powers-of-a-two-by-two-matrix`
- `fs-matrix-polynomial-substitution-is-a-ring-homomorphism`
