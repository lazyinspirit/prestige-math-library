# Step 3a reader report — batch 85

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Scope: batch `85`

## Opened inventory

### Assigned pages

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/sqp-active-set-and-augmented-lagrangian-methods.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/sqp-active-set-and-augmented-lagrangian-methods-examples.md`

### Required prerequisite pages

- `library/numerical-linear-algebra-and-approximation/finite-precision-direct-factorizations.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/inequality-kkt-duality-and-optimality-certificates.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/nonconvex-line-search-and-inexact-newton-methods.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/bfgs-and-limited-memory-quasi-newton-methods.md`

### Assigned items, read in dependency order

- `def-sqp-linearized-quadratic-subproblem`
- `def-sqp-augmented-lagrangian-equality-and-inequality`
- `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature`
- `def-sqp-l1-exact-penalty-merit`
- `alg-sqp-augmented-lagrangian-multiplier-method`
- `alg-sqp-second-order-correction`
- `alg-sqp-exact-hessian-newton-step`
- `lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate`
- `alg-sqp-exhaustive-active-set-qp-solve`
- `alg-sqp-feasible-working-set-qp-solve`
- `alg-sqp-reduced-bfgs-kkt-step`
- `alg-sqp-merit-globalization-with-finite-budgets`
- `thm-sqp-exhaustive-active-set-qp-solve-correct-finite`
- `thm-sqp-working-set-qp-terminates-under-nondegeneracy-anticycling`
- `thm-sqp-second-order-correction-residual-order`
- `thm-sqp-exact-hessian-local-quadratic-convergence`
- `thm-sqp-reduced-bfgs-superlinear-under-dm`
- `thm-sqp-augmented-lagrangian-local-convergence`
- `alg-sqp-finite-precision-kkt-qr-solve-and-residual-check`
- `thm-sqp-merit-globalization-finite-budget-status`
- `thm-sqp-finite-precision-kkt-residual-certificate-sound`
- `ex-sqp-augmented-lagrangian-penalty-conditioning`
- `ex-sqp-engineering-design-active-inequality`
- `ex-sqp-maratos-effect-and-second-order-correction`

### Outside-scope dependency items opened

Current-run suppliers:

- Batch 1: `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, `alg-scaled-householder-reflector-formation-and-application`, `lem-scaled-householder-step-meets-local-backward-error-premise`, `lem-rounded-linear-and-normal-residual-certificates`, `lem-rounded-triangular-substitution-componentwise-backward-error`, `thm-scaled-householder-qr-backward-stability`, `thm-computed-full-rank-least-squares-backward-stability`.
- Batch 6: `def-inequality-constrained-program-and-kkt-geometry`, `def-kkt-residual-and-normal-cone`, `lem-finitely-generated-euclidean-cones-are-closed`, `thm-farkas-alternative-for-finite-linear-systems`, `thm-convex-kkt-sufficiency-and-normal-cone-certificate`.
- Batch 58: `lem-inexact-newton-error-recurrence-under-lipschitz-jacobian`, `thm-inexact-newton-local-forcing-rates`.
- Batch 71: `def-bfgs-curvature-pair-and-update-formulas`, `lem-bfgs-updates-preserve-secant-symmetry-and-spd`.

Published supporting items:

- `cor-second-order-taylor-expansion-with-the-hessian`
- `def-euclidean-inner-product`
- `def-standard-relative-floating-point-model-and-unit-roundoff`
- `cor-finite-dimensional-subspaces-are-closed`
- `thm-nearest-point-in-a-nonempty-closed-convex-set`
- `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`
- `thm-differentiable-convex-functions-and-gradient-inequality`
- `lem-product-of-one-plus-deltas-gives-theta-n`
- `thm-cauchy-schwarz-in-an-inner-product-space`
- `thm-cauchy-schwarz-and-the-euclidean-norm`
- `def-householder-reflector`
- `def-full-reduced-and-column-pivoted-computational-qr-factorisations`
- `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`
- `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts`
- `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`
- `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`
- `def-forward-and-back-substitution-for-triangular-systems`
- `thm-euclidean-implicit-function-theorem`
- `thm-heine-borel-rn`
- `thm-extreme-value-metric`
- `cor-vector-valued-ftc-and-lipschitz-bound`

## Page verdicts

- `sqp-active-set-and-augmented-lagrangian-methods` (A): No page-prose defect found. Its summaries match the reviewed item claims. The page's dependency support remains conditional on the two reported batch-6 findings.
- `sqp-active-set-and-augmented-lagrangian-methods-examples` (B): No page-prose defect found. Its summary matches the three checked examples. The engineering-design example reaches the reported batch-6 convex-KKT statement.

## Repairs made

- `lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate`, proof step 1.1: added the $n=0$ case. There, $\mathbb R^0$ is a singleton, independent equality rows must be absent, and zero inequality multipliers give the KKT certificate. The compactness argument now explicitly starts at $n\ge1$, matching the domain of `thm-heine-borel-rn`. Updated the batch-85 proof contract's derivation and zero-boundary evidence. Reflow completed; precheck passed.
- `alg-sqp-finite-precision-kkt-qr-solve-and-residual-check`: listed its direct procedure suppliers, `alg-scaled-householder-reflector-formation-and-application` and `def-forward-and-back-substitution-for-triangular-systems`, in `deps`; spelled out the $N$ active-column QR calls, stored-reflector application to $b$, and descending rounded triangular solve. Added the corresponding proof-contract citations. Reflow completed; precheck passed.

Neither edited item had a `verification.judge` record. No judge or certification stamp was added.

Final proof-layout command for both changed paths: `node tools/proof-layout.mjs items/lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate.md items/alg-sqp-finite-precision-kkt-qr-solve-and-residual-check.md` — **2 items, 8 steps, 0 defects**.

## Uneditable findings

1. `thm-convex-kkt-sufficiency-and-normal-cone-certificate`, batch 6, `## Statement`: the statement refers to the feasible set $C$ and its normal cone without defining $C$ from the displayed constraints or explicitly identifying $h(x)=Ax-b$. The generic program definition in its dependencies defines a feasible set for an $h,g$ program, but the theorem does not state this instantiation. Define $C=\{x\in U:Ax=b,\ g_i(x)\le0\}$ (and state the finite inequality index range) so the minimization and $N_C$ conclusion have a bound subject. The item is a direct dependency of `lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate` and `ex-sqp-engineering-design-active-inequality`.
2. `lem-finitely-generated-euclidean-cones-are-closed`, batch 6, `## Proof`, step 1.2: the proof asserts that $R_J(y)=G_J^{-1}A_J^Ty$ is continuous and uses continuity to make $R_J^{-1}(\mathbb R_{\ge0}^{|J|})$ closed, but gives no continuity estimate and lists no result supplying continuity of this finite matrix map. Add, for example, $\|R_J(y)-R_J(y')\|_2\le\|G_J^{-1}A_J^T\|_2\|y-y'\|_2$. This is a short nonfatal proof omission. Its dependency path reaches the assigned QP-certificate lemma through `thm-farkas-alternative-for-finite-linear-systems`.

These are both current-run batch-6 suppliers and were outside the edit scope. Their current raw SHA-256 values at split matched the reviewed source bytes: `thm-convex-kkt-sufficiency-and-normal-cone-certificate` — `04e13d66b54f0241043de0050db3f1fcb7608741a470ebee86d0ad16f64158a6`; `lem-finitely-generated-euclidean-cones-are-closed` — `be7659a5a50cea54e4a5e5de9643f7a91dcf648fc39ecb0e62985f7abd60c32e`.

## Source checks and limitations

The indexed source text for Nocedal and Wright, *Numerical Optimization*, §18.11, Example 18.1, pp. 565–569, gives the same unit-circle Maratos example and SQP direction used in the assigned example; I also checked the merit and SOC calculations directly. Source URL: <https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf>. The PDF fetch itself timed out, so I relied on the indexed excerpt and the local derivation for that check.

The accessible *Fundamentals of Numerical Computation* Householder section, §3.4.1, Definition 3.4.1 and Theorem 3.4.1, confirms the exact reflector $I-2vv^T$ for unit $v$ and its annihilation construction: <https://fncbook.com/house/>.

The complete transitive foundation graph was not re-audited. I opened the assigned items, their direct dependencies, and the additional supporting items needed to check the cited proof paths. The Bertsekas augmented-Lagrangian PDF was not retrievable by the web reader because of its file size; I checked the local multiplier-contraction proof independently, and no unresolved mathematical uncertainty remained. No blocker prevents completion of this reader assignment.
