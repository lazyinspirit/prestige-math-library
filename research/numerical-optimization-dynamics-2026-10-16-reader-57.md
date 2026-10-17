# Step 3a reader report — batch 57

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Coverage: batch `57`

## Opened inventory

Assigned pages:

- `library/numerical-pdes-and-spatial-discretization/finite-element-eigenvalue-approximation.md` (A page)
- `library/numerical-pdes-and-spatial-discretization/finite-element-eigenvalue-approximation-examples.md` (B page)

Assigned A-page items, read supplier-first:

- Level 0: `def-eigenspace-best-approximation-gap`; `thm-compact-coercive-form-spectrum-and-minmax`; `lem-finite-dimensional-galerkin-minmax`; `lem-compact-self-adjoint-residual-controls-invariant-subspace-gap`; `thm-finite-hermitian-ritz-residual-certifies-spectrum-and-eigendirection`; `prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil`.
- Level 3: `lem-conforming-energy-projection-is-best-approximation`.
- Level 4: `lem-conforming-galerkin-ritz-matrix-error-is-quadratic-in-gap`.
- Level 5: `thm-conforming-galerkin-eigenvalue-upper-bound-quadratic-gap-error`.
- Level 6: `thm-conforming-galerkin-eigenspace-gap-under-isolated-cluster`.

Assigned B-page items, read with their listed suppliers first:

- Level 1: `ex-nearly-dependent-overlap-matrix-whitening-and-conditioning`.
- Level 2: `ex-nonconforming-broken-eigenvalue-below-dirichlet-ground-state`.
- Level 4: `ex-dirichlet-square-conforming-p1-eigenvalue-upper-bound`.
- Level 7: `ex-repeated-eigenvalue-subspace-stable-but-eigenvector-choice-unstable`.

The direct dependencies listed by batch 57 were opened. These included the compact-operator, Hilbert-space, countable-choice, coercive-form, Riesz, Lax–Milgram, spectral-theorem, Parseval/Fourier, orthogonal-decomposition, rank-nullity, finite-dimensional basis, Heine–Borel and extreme-value items; the Cholesky and matrix-product items; the Poincaré, Dirichlet spectrum and Courant–Fischer items; and the Galerkin orthogonality, Céa, symmetric best-approximation, mesh, broken-space and zero-boundary suppliers. Additional supporting items opened for the checked proof steps were `cor-finite-dimensional-subspaces-are-closed`, `cor-finite-dimensional-normed-spaces-are-banach`, `def-square-summable-family-on-an-arbitrary-index-set`, `def-metric-compactness`, `lem-compactness-is-intrinsic`, `thm-compact-subset-is-closed-and-bounded`, `lem-closed-subset-of-a-compact-space-is-compact`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-reals-cauchy-complete`, `thm-of-archimedean`, `lem-affine-simplex-gauss-green-formula`, and `lem-oriented-facet-cancellation-on-matching-meshes`.

Manifest-required pages also opened:

- `library/functional-analysis/compact-self-adjoint-hilbert-schmidt-and-trace-class-operators.md`
- `library/pde/fredholm-elliptic-problems-and-the-elliptic-spectrum.md`
- `library/numerical-pdes-and-spatial-discretization/finite-element-meshes-and-interpolation.md`
- `library/numerical-pdes-and-spatial-discretization/ceas-lemma-and-aubin-nitsche-error-estimates.md`
- `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md`

## Independent source check

I checked the Galerkin claims against Jean-Luc Guermond, [MATH 661 Finite Element Methods, Part X, Chapter 47](https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf): Theorem 47.1, printed pp. 308–309, gives the compact solution-operator eigenbasis and form-norm basis; Propositions 47.3–47.4, printed pp. 309–310, give the attained first-eigenvalue and min–max principles; Lemma 47.7, printed pp. 312–313, gives the conforming one-sided bound; and Theorem 47.10, printed pp. 314–315, gives a quadratic best-approximation error under its small-mesh conditions. These statements agree with the local proof interfaces and caveats; the local abstract arguments were checked independently.

For the repeated-cluster discussion I checked Bertrand Mercier, [Topics in Finite Element Solution of Elliptic Problems, Chapter 8](https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf), §8.5, printed pp. 132–134: the section states that an isolated eigenvalue of multiplicity (m) has a discrete cluster of the same dimension and proves a directed eigenspace estimate from the solution-operator residual. The assigned residual lemma is proved locally by its spectral expansion.

## Repairs

- `lem-finite-dimensional-galerkin-minmax`, Step 1.1: the original proof invoked Riesz representation on (V_h) without first establishing that the inherited inner-product norm is complete. Replaced that use by the explicit finite-basis formula (K_hu_h=\sum_i b(u_h,\psi_i)\psi_i). Added the finite-dimensional orthonormal-basis and finite-dimensional completeness dependencies; Step 3.1 now states why the compact spectral theorem applies to (V_h).
- `thm-compact-coercive-form-spectrum-and-minmax`, Step 3.1: made the decreasing eigenvalue enumeration explicit. Finiteness above every positive threshold and finite multiplicity give a maximum in each nonempty remainder; the resulting ordering lists every eigenvalue occurrence and tends to zero.
- `lem-conforming-galerkin-ritz-matrix-error-is-quadratic-in-gap`, Step 2.2: supplied the Cauchy–Schwarz bounds for the three mass-error terms and an explicit finite-matrix estimate from the largest-entry bound. Corrected the duplicated prose range in Step 4.1 and added the Cauchy–Schwarz dependency.
- `thm-conforming-galerkin-eigenspace-gap-under-isolated-cluster`, Step 1.2: proved that boundedness and coercivity make the energy norm equivalent to the given Hilbert norm, so the energy space is complete before Riesz representation is applied. The functional is now conjugated explicitly to match the library’s first-variable-linear convention. Added the Cauchy–Schwarz dependency.
- `ex-nonconforming-broken-eigenvalue-below-dirichlet-ground-state`: specified the scalar degree-zero trial space. Replaced the unsupported assertion that the broken function is not in (H^1_0) with the directly established trace mismatch showing it is outside the conforming polynomial subspace.
- `ex-repeated-eigenvalue-subspace-stable-but-eigenvector-choice-unstable`: specified the real positive-integer coordinate set and a positive-integer sequence of constant trial spaces. Proved completeness of (\ell^2) by coordinate limits before using it as a Hilbert space; then proved that the weighted space is Hilbert, the form is well-defined and bounded coercive, the inclusion is compact, and its eigenvalues/eigenspaces are exactly the asserted coordinate data. The alternating vector sequence is now indexed explicitly. The precheck’s phase-order suggestion was adopted.

The batch 57 proof-contract entries for all six repaired items were regenerated. I corrected the Countable Choice evidence in the finite Ritz and repeated-eigenvalue contracts to match the final proofs. The six repaired items had no stale `verification.judge` records.

## Findings not editable in this dispatch

None confirmed. The findings file is empty.

## Page verdicts

- `finite-element-eigenvalue-approximation`: the summary is supported by the reviewed local items, including the small-gap condition on the quadratic estimate, the conformity requirement for the one-sided bound, the target-location caveat for residuals, and the isolated-cluster conclusion.
- `finite-element-eigenvalue-approximation-examples`: the summary matches the four reviewed calculations and their stated limits. The broken-space example remains a counterexample to the conforming hypotheses, not a claim that all nonconforming discretizations underestimate.

No page prose was changed.

## Validation and blocker

For every repaired item, `reflow.mts` and `precheck.mts` passed on the final item text. The final batched command

```text
node tools/proof-layout.mjs items/lem-finite-dimensional-galerkin-minmax.md items/thm-compact-coercive-form-spectrum-and-minmax.md items/lem-conforming-galerkin-ritz-matrix-error-is-quadratic-in-gap.md items/thm-conforming-galerkin-eigenspace-gap-under-isolated-cluster.md items/ex-nonconforming-broken-eigenvalue-below-dirichlet-ground-state.md items/ex-repeated-eigenvalue-subspace-stable-but-eigenvector-choice-unstable.md
```

reported `6 items, 32 steps, 0 defects`. Batch 57 has no blocker. The recomputed
run status also reports the unrelated `3a-split` blocker `split-6 failed 3x
(covers 6)`; it is outside this batch and was left untouched.

## Coverage note

All assigned pages and items, all five manifest-required pages, and all batch-57 direct dependencies were opened. I also opened the supporting finite-dimensional, sequence-space, mesh, and facet results used in the repaired or checked arguments. I did not recursively re-audit every lower-level dependency beneath each published spectral or elliptic supplier; I checked the exact supplied statements and the local uses, and consulted the cited full sections where the finite-element spectral estimates required cross-checking.
