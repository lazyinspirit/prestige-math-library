# Step 3a reader report — batch 60

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `60`

## Opened inventory

### Assigned pages

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/operator-splitting-admm-and-primal-dual-methods.md` (A page)
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/operator-splitting-admm-and-primal-dual-methods-examples.md` (B page)

### Assigned items, in dependency order

A-page items:

1. `def-maximal-monotone-relation-on-euclidean-space`
2. `def-saddle-point-for-convex-concave-lagrangian`
3. `lem-firmly-nonexpansive-picard-iteration-converges`
4. `lem-one-point-extension-for-finite-dimensional-nonexpansive-map`
5. `lem-schur-reduction-for-polynomial-unit-disk-roots`
6. `alg-naive-sequential-three-block-admm`
7. `alg-two-block-admm-scaled`
8. `def-fenchel-conjugate-on-finite-dimensional-euclidean-space`
9. `def-resolvent-of-a-monotone-relation`
10. `lem-admm-exact-subproblem-optimality-relations`
11. `lem-fenchel-conjugate-is-proper-closed-convex`
12. `lem-fenchel-young-equality-characterizes-subgradients`
13. `thm-maximal-monotone-resolvent-is-firmly-nonexpansive`
14. `alg-douglas-rachford-splitting`
15. `alg-pdhg-primal-dual-hybrid-gradient`
16. `lem-two-block-admm-energy-and-objective-estimates`
17. `lem-douglas-rachford-map-is-firmly-nonexpansive`
18. `lem-pdhg-one-step-gap-telescope`
19. `thm-two-block-admm-residual-objective-and-dual-convergence`
20. `thm-douglas-rachford-shadow-converges-to-zero-of-sum`
21. `thm-pdhg-ergodic-saddle-gap-o1k`

B-page examples:

- `cex-naive-three-block-admm-divergence`
- `ex-consensus-admm-least-squares`
- `ex-lanczos-ritz-value-is-not-a-norm-certificate`
- `ex-two-pixel-pdhg-total-variation-step`

### Direct dependency items opened

`alg-csr-matrix-vector-product-with-validation`, `cor-bolzano-weierstrass-in-rn`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-convex-program-duality-and-slater-condition`, `def-csr-matrix-with-stored-entry-semantics`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `def-euclidean-inner-product`, `def-extended-real-epsilon-subdifferential`, `def-extended-reals`, `def-induced-matrix-p-norm`, `def-krylov-subspace-of-a-matrix-and-start-vector`, `def-proper-closed-convex-function-on-rn`, `def-proximal-mapping`, `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`, `lem-proper-closed-convex-function-affine-minorant`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-compact-iff-finite-intersection-property`, `thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity`, `thm-csr-matvec-returns-the-represented-matrix-product`, `thm-csr-storage-and-exact-matvec-cost`, `thm-euclidean-semicontinuous-extreme-value-theorem`, `thm-heine-borel-rn`, `thm-lagrangian-weak-duality`, `thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases`, `thm-nearest-point-in-a-nonempty-closed-convex-set`, `thm-proximal-operator-existence-resolvent-firm-nonexpansive`, `thm-rouche-theorem`, and `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial`.

Additional proof suppliers opened for the proximal and Lanczos dependency proofs: `lem-smooth-composite-sum-preserves-proper-closed-convexity`, `thm-euclidean-semicontinuity-level-set-characterisations`, `def-arnoldi-process`, `def-lanczos-process-as-hermitian-arnoldi`, `def-ritz-values-and-ritz-vectors-from-arnoldi`, `prop-ritz-residual-formula-for-an-arnoldi-ritz-pair`, `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization`, `thm-courant-fischer-min-max-principle`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, and `lem-scaled-chebyshev-filter-bound-on-a-separated-interval`.

Batch evidence opened for page-level source and supplier status: `research/numerical-optimization-dynamics-2026-10-16-batch-60.source-coverage.json` and `research/numerical-optimization-dynamics-2026-10-16-batch-60.cross-batch-dependencies.json`.

## Repairs and evidence

- `items/lem-one-point-extension-for-finite-dimensional-nonexpansive-map.md`, Facts & Assumptions [F1] and proof steps 1.1–2.1: [F1] had attributed norm, parallelogram, and polarization results to `def-euclidean-inner-product`, whose Definition explicitly says the norm axioms are proved separately. Step 1.1 also invoked continuity and coercivity without deriving them, and step 2.1 used a closed convex hull of finitely many gradients without establishing closedness. I added `thm-cauchy-schwarz-and-the-euclidean-norm` to `deps`, corrected [F1], derived norm continuity and the coercive bound in step 1.1, and showed in step 2.1 that the gradient hull is the compact image of a closed bounded simplex (using [F2] and the open-cover definition of compactness), hence is closed. The affected proof-contract citations for [F1] and [F2] now match the cited statements. Its statement is unchanged; the direct consumer `thm-maximal-monotone-resolvent-is-firmly-nonexpansive` was checked and remains valid.
- `items/lem-fenchel-conjugate-is-proper-closed-convex.md`, Facts & Assumptions [F4]–[F5] and proof steps 1.2 and 2.1: bilinearity and finite values alone, as stated in `def-euclidean-inner-product`, do not supply continuity of the affine functions whose half-spaces define the conjugate epigraph. I added `thm-cauchy-schwarz-and-the-euclidean-norm` to `deps`, added [F5], and wrote the Lipschitz estimate `|⟨s,x⟩−⟨s',x⟩| ≤ ||s−s'||₂||x||₂ = d₂(s,s')||x||₂` before using continuity. The affected contract now records [F5] and its source. The statement is unchanged; the assigned consumers, including the Fenchel–Young lemma, PDHG algorithm, and ADMM/PDHG results, were checked.
- `items/alg-two-block-admm-scaled.md`, `items/alg-douglas-rachford-splitting.md`, and `items/alg-pdhg-primal-dual-hybrid-gradient.md`: added `justified_by` metadata for the already-cited results establishing the least-norm tie-break, full-domain resolvent calls, and proximal/conjugate/adjoint calls, respectively. Their proof-contract citations already named these suppliers. No `verification.judge` record was present in any of the five changed items.

For each changed item, `reflow.mts` reported unchanged and `precheck.mts` passed. The final required `proof-layout` command covered all five changed item paths and reported `5 items, 13 steps, 0 defects`.

## Exact-source and computation checks

- The three-block counterexample was checked against Chen, He, Ye, and Yuan, *The Direct Extension of ADMM for Multi-block Convex Minimization Problems is Not Necessarily Convergent*, §§3.1–3.2, printed pp. 10–13 ([author-hosted PDF](https://web.stanford.edu/~yyye/ADMM-final.pdf)). The paper gives the same constraint matrix and the linear state recurrence; its multiplier convention is related by the sign change from its `μ=λ/β` to this item's scaled `u=-μ`. The paper's Theorem 3.1 states divergence for the construction. Exact rational arithmetic checked the displayed matrix's zero eigenvector, traces `301/81`, `20860/6561`, `2588159/1062882`, and `132553799/86093442`, the resulting characteristic polynomial coefficients, and both displayed Schur reductions. In particular, the second reduced polynomial has constant term `336511/333642 > 1`, as used in the contradiction.
- The PDHG update order and strict condition were checked against Chambolle and Pock, “A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging,” Algorithm 1 and Theorem 1(b), pp. 5–6 ([paper PDF](https://optimization-online.org/wp-content/uploads/2010/06/2646.pdf)). The local one-step telescope proves the test-pair bound used by the assigned rate theorem.

## Unedited defects

None found in the assigned pages, assigned items, or opened dependency claims that affect this batch. No proposed withdrawal is present.

## Page verdicts

- A page `operator-splitting-admm-and-primal-dual-methods`: **pass**. Its definitions, dependency summaries, two-block ADMM caveat, Douglas–Rachford shadow conclusion, PDHG step condition and ergodic rate, and choice-free finite-dimensional scope agree with the reviewed items. The four required supplier-page edges in the batch evidence are marked `verified`, and the source-coverage record lists the relevant source sections as included.
- B page `operator-splitting-admm-and-primal-dual-methods-examples`: **pass**. The scalar ADMM iterates, CSR two-pixel PDHG iterates and norm calculation, Lanczos example, and three-block divergence witness agree with their reviewed items.

## Blockers

No batch-60 reader blocker. The autopilot status checked at `2026-10-16 13:36:41 UTC` showed the run still active and a separate stage blocker: `3a-collect`, `collect-20 failed 3x (covers 20)`. This is outside batch 60.

## Coverage note

Both assigned pages, all 25 assigned items, all 29 direct dependencies from the batch graph, and the additional current-run proof suppliers listed above were opened. I did not re-audit the internal dependency closures of every published foundational supplier; I used their stated theorems where the assigned proofs cited them. No unresolved mathematical uncertainty remains in the reviewed batch.
