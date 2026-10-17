# Reader report — batch 34

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `34`

## Opened inventory

Assigned pages:

- A page `krylov-methods-and-lanczos-convergence`.
- B page `krylov-methods-and-lanczos-convergence-examples`.

Assigned items, read in supplier-before-consumer order:

- `lem-scaled-chebyshev-filter-bound-on-a-separated-interval`
- `thm-two-pass-mgs-arnoldi-local-relation-and-orthogonality-bound`
- `thm-cg-recursive-residual-gap-and-attainable-accuracy`
- `thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases`
- `thm-gmres-true-residual-gap-from-computed-arnoldi-relation`
- `prop-sparse-unrestarted-gmres-work-and-storage`
- `ex-unrestarted-and-restarted-gmres-on-a-diagonal-system`
- `ex-cg-denominator-failure-and-minres-on-an-indefinite-system`
- `ex-lanczos-poorly-aligned-start-vector-delays-the-largest-ritz-value`
- `ex-lanczos-repeated-top-zero-component-and-invariant-breakdown`

The A page's nine required pages were all present and opened: `conjugate-gradients-minres-and-preconditioning` (published), `eigenvalue-iterations-and-the-qr-algorithm` (published), `krylov-subspaces-arnoldi-and-gmres` (published), `matrix-norms-condition-numbers-and-numerical-stability` (published), `the-spectral-theorem-and-singular-value-decomposition` (published), `finite-precision-direct-factorizations` (draft), `sparse-matrix-models-and-kernel-costs` (draft), `stationary-iterations-and-relaxation` (draft), and `fundamental-trigonometric-identities` (published). This confirms six published and three draft prerequisites.

Supplier items opened for the arguments included `def-chebyshev-polynomials-first-and-second-kind`, `def-real-polynomial-degree-leading-coefficient-and-monic`, `thm-of-square-roots`, `def-arnoldi-process`, `def-krylov-subspace-of-a-matrix-and-start-vector`, `def-inner-product-norm`, `def-inner-product-space`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, `def-standard-relative-floating-point-model-and-unit-roundoff`, `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds`, `lem-product-of-one-plus-deltas-gives-theta-n`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-conjugate-gradient-recurrence`, `def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix`, `def-cholesky-factorisation-with-positive-diagonal`, `def-induced-matrix-p-norm`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `def-lanczos-process-as-hermitian-arnoldi`, `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization`, `def-ritz-values-and-ritz-vectors-from-arnoldi`, `prop-ritz-residual-formula-for-an-arnoldi-ritz-pair`, `thm-courant-fischer-min-max-principle`, `def-gmres-iterate`, `def-restarted-gmres-m`, `def-csr-matrix-with-stored-entry-semantics`, `alg-csr-matrix-vector-product-with-validation`, `thm-csr-storage-and-exact-matvec-cost`, and `def-minres-iterate-from-the-lanczos-tridiagonalization`.

I also reviewed the current batch pages manifest and proof-contract file against the authored item bodies.

## Repairs and evidence

- In `lem-scaled-chebyshev-filter-bound-on-a-separated-interval`, proof step 1.1 now uses two real recurrences and proves their squared norm is invariant. This establishes `|T_j(t)| ≤ 1` on `[-1,1]` using the item's stated Chebyshev recurrence and square-root dependency, without silently relying on complex-number identities. The proof contract was updated.
- In `ex-cg-denominator-failure-and-minres-on-an-indefinite-system`, Fact F3 and proof step 1.2 now use the MINRES definition's residual scale `β=||r_0||_2` and the Lanczos recurrence's first subdiagonal `β_1`. The prior `β_0=√2` and `β_2=1` labels conflicted with the opened definitions (`β_0=0`, and the first column uses `β_1`). The proof contract's derivation and finite check were updated.
- In `ex-lanczos-repeated-top-zero-component-and-invariant-breakdown`, the scalar case now specifies `b=1`. Proof step 1.1 also verifies its top component and breakdown at dimension 1, and verifies the top component, invariant subspace, and breakdown at dimension 2 for the repeated-top case. The proof contract now records those checks.
- In `prop-sparse-unrestarted-gmres-work-and-storage`, proof step 2.1 referred to itself while combining work bounds. It now combines steps 1.1, 1.2, and 1.3. The proof contract's derivation inputs were corrected to remove the self-reference.
- In the assigned A page, the prerequisite summary now says nine required pages, with six published and three drafts. All nine page files were opened and their statuses checked.

No stale `verification.judge` record was present on the four revised draft items. Reflow and precheck passed for each changed item. The final `proof-layout` command checked all four changed item paths together: 4 items, 14 steps, 0 defects.

## Defects not edited

None found in the assigned items or assigned page prose. No uneditable dependency defect remains to route.

## Page verdicts

- `krylov-methods-and-lanczos-convergence` (A): pass after the prerequisite-count correction. Its mathematical summary matches the reviewed Chebyshev, Lanczos, finite-precision, CG, and sparse-cost items; all nine required pages are present.
- `krylov-methods-and-lanczos-convergence-examples` (B): pass. Its summary matches the four reviewed examples, including the corrected MINRES notation and the explicit Lanczos breakdown cases.

## Blocker

The run status still reports a separate `3a-split` blocker: `split-6` failed three times for batch 6. It is outside batch 34 and did not prevent this review.
