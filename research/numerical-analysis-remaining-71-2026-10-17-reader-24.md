# Step 3a reader report — batch 24

Run `numerical-analysis-remaining-71-2026-10-17`; batch `24`. The live autopilot status was `running`, with Step 3a read active and no item-level transition in flight.

## Opened inventory

### Assigned pages

- A: `square-root-covariance-update-error-and-stability` at `library/numerical-linear-algebra-and-approximation/square-root-covariance-update-error-and-stability.md`.
- B: `square-root-covariance-update-error-and-stability-examples` at `library/numerical-linear-algebra-and-approximation/square-root-covariance-update-error-and-stability-examples.md`.

### Required page context

- `numerical-algebraic-riccati-equations-and-stabilizing-branches` (draft).
- `kalman-filtering` (published).

The A page retains both required pages. The assigned claims do not use the Riccati page's CARE/DARE conclusions or assert a uniform-in-time stability result. The Kalman page and its exact-posterior supplier were used for the stated canonical recursion.

### Assigned items

Read in manifest dependency order: `lem-square-root-kalman-householder-error-rational-envelope`, `lem-square-root-kalman-gram-perturbation-bound`, `lem-square-root-kalman-measurement-block-factor-identity`, `lem-square-root-kalman-prediction-factor-identity`, `lem-square-root-kalman-schur-perturbation-bound`, `lem-square-root-kalman-triangular-solve-forward-bound`, then `alg-finite-budget-square-root-kalman-filter` and `lem-square-root-kalman-prearray-qr-error-bound`, then `thm-square-root-kalman-finite-procedure-status` and `thm-square-root-kalman-finite-horizon-perturbation-bound`, followed by the four B examples:

- `ex-square-root-kalman-perturbed-prearray-psd-factor`
- `ex-subtractive-kalman-update-loses-positive-semidefiniteness`
- `ex-square-root-kalman-singular-prior-positive-innovation`
- `ex-square-root-kalman-nearly-noiseless-solve-sensitivity`

### Published item suppliers

Opened all nineteen direct external item dependencies: `alg-kalman-filter`, `alg-scaled-householder-reflector-formation-and-application`, `cor-operator-norm-submultiplicative-and-t-star-t-identity`, `def-axiom-of-choice`, `def-forward-and-back-substitution-for-triangular-systems`, `def-frobenius-matrix-norm`, `def-full-reduced-and-column-pivoted-computational-qr-factorisations`, `def-linear-gaussian-state-space-model-with-independent-noises`, `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `lem-one-step-kalman-gaussian-conditioning`, `lem-scaled-householder-step-meets-local-backward-error-premise`, `lem-scaled-real-householder-step-termination-and-status`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds`, `thm-kalman-filter-is-exact-posterior`, `thm-scaled-householder-qr-backward-stability`, `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`, and `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts`.

For the proofs that used them, also opened `thm-operator-norm-is-the-largest-singular-value`, `thm-singular-value-decomposition`, `def-singular-values-of-an-endomorphism`, `prop-singular-values-are-well-defined`, `def-abs-value`, `lem-of-abs-value`, `lem-of-triangle-inequality`, `def-p-norms-on-rn`, and `lem-p-norms-are-norms-and-induce-the-published-metrics`.

### Source passages

- Kevin S. Tracy, [*A Square-Root Kalman Filter Using Only QR Decompositions*](https://arxiv.org/pdf/2208.06452), complete four-page paper; §2, equations (3)–(7), §§3.1–3.4, equations (17)–(36), and Algorithm 1. The source gives the QR Gram identity and square-root prediction/innovation/update procedure; the assigned proofs separately handle rectangular and rank-deficient factors.
- M. A. Salzmann, [*Some Aspects of Kalman Filtering*, Technical Report 140](https://gge.ext.unb.ca/Pubs/TR140.pdf), §3.3.1 (printed pp. 30–31), §3.5.1 (p. 40), and §3.5.2 (p. 42). The source presents square-root time/measurement updates, defines operation-count comparisons for a full filter cycle, and limits its stability discussion to covariance updates rather than automatically extending it to gains or estimates.
- Simo Särkkä, [*Bayesian Filtering and Smoothing* (2013 PDF)](https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf), Chapter 4 §4.3, Theorem 4.2 and equations (4.20)–(4.29), printed pp. 57–58. The full relevant theorem and proof section was retrieved and inspected; it supplies the canonical prediction/update formulas used as mathematical context.

The batch manifest, proof-contract file, coverage record, and batch notes were also read as evidence, not as verdicts.

## Repairs made

- In `lem-square-root-kalman-schur-perturbation-bound`, added a local derivation of Euclidean Cauchy–Schwarz and the induced operator-norm triangle inequality. Step 1.1 now bounds `|xᵀE_Sx|` explicitly; step 4.1 names the derived norm inequality. This supplies the estimates without adding an unmanifested dependency. The proof contract was updated.
- In `lem-square-root-kalman-prearray-qr-error-bound`, added a local Cauchy–Schwarz derivation for the Frobenius product-error estimate. The statement now requires `q ≥ n ≥ 1`, matching the reduced-QR supplier, and treats a zero-inner-dimension product as exact zero instead of applying `γ_r` at `r = 0`. The proof contract and its empty-boundary explanation were updated. The finite-horizon consumer has positive state and observation dimensions, so its use remains within the clarified domain.
- In `lem-square-root-kalman-measurement-block-factor-identity`, qualified the conditional-law interpretation to positive state and observation dimensions and to an independent Gaussian model satisfying `lem-one-step-kalman-gaussian-conditioning`. The factor and block-matrix identities remain valid in the zero-dimensional cases covered by the statement. The proof contract was updated.
- In `thm-square-root-kalman-finite-procedure-status`, added a separate operation-count result. For each time step, the bound is `O(d_k d_{k-1}(ρ_{k-1}+1) + q_k d_k² + (r̄_k+d_k)(p_k+d_k)²)`, with `ρ_0=r_0`, `ρ_{k-1}=d_{k-1}` for later steps, `q_k=max(d_k,ρ_{k-1}+r_{Q,k})`, and `r̄_k=max(p_k,r_{R,k})`. The proof counts the specified Householder passes, matrix products, triangular solve, padding, and status/copy operations. The proof contract now includes these derivations and the `T=0` boundary. I checked all current-run manifests; no in-run item consumes this theorem, so the added statement clause required no item consumer repair.

No assigned A-page prose or B-page prose was changed. The four edited items had no `verification.judge` record to remove. Existing hash-bound Step 2 boundary-review records were preserved rather than rewritten.

## Uneditable finding

`thm-floating-point-dot-product-componentwise-and-normwise-error-bounds`, Proof step 4.1 (line 67), uses the scalar absolute-value triangle inequality to derive the absolute dot-product error bound, but step 4.1 and its Facts & Assumptions do not cite that inequality. `def-abs-value` explicitly identifies `lem-of-triangle-inequality` as a separate result; it is reachable in the theorem's transitive dependencies through the `p`-norm lemma, but it is absent from the step's local citation. The conclusion is correct and the omission is short, so severity is nonfatal. Add an explicit fact/tag for the triangle inequality or supply its one-line derivation. This published item is a direct dependency of the assigned consumer `lem-square-root-kalman-prearray-qr-error-bound`.

This is the only finding in `research/numerical-analysis-remaining-71-2026-10-17-reader-findings-24.json`.

## Page verdicts

- `square-root-covariance-update-error-and-stability` (A): the page summary and its ten assigned items are sound after the listed repairs. One nonfatal citation obligation remains in the published dot-product supplier used by the local prearray bound.
- `square-root-covariance-update-error-and-stability-examples` (B): all four examples' scalar and matrix computations check out. No B-page prose or example was edited.

## Validation and handoff

- Reflow and `precheck.mts` passed for all four edited items.
- The final batched `proof-layout` run covered four items and sixteen proof steps; it reported zero defects.
- The proof-contract `template_review` rows remain bound to their pre-reader item hashes. Those independent records were preserved; the downstream owner must refresh or reconcile the exact-hash evidence before a gate that requires those hashes.
- No gates, judgments, or self-certifications were run.

## Coverage note

All fourteen assigned items and both assigned pages were opened. All direct dependencies in the batch manifest and the focused transitive suppliers needed for the reviewed norm, QR, and Gaussian-conditioning steps were opened. I did not audit the complete transitive published library closure. The exact Särkkä source URL was fetched by shell after the web PDF parser failed; the relevant printed pages and full theorem argument were inspected. The single uneditable citation omission and the preserved pre-reader hash rows are recorded above; no other blocker to the reader handoff remains.
