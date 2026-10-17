# Step 3a reader report — batch 72

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Date: 2026-10-17

## Opened inventory

Assigned pages:

- `trust-region-and-cubic-regularization-methods` (A)
- `trust-region-and-cubic-regularization-methods-examples` (B)

Required page context:

- `krylov-methods-and-lanczos-convergence`
- `nonconvex-line-search-and-inexact-newton-methods`

All 21 assigned items were opened and reviewed in dependency order.

The 18 A-page items were `def-trust-region-quadratic-model-and-ratio`,
`def-adaptive-cubic-regularization-model`,
`lem-natural-logarithm-bounded-by-argument`,
`lem-trust-region-subproblem-optimality-and-hard-case`,
`alg-trust-region-cauchy-step`,
`lem-positive-definite-model-has-unique-newton-step`,
`lem-global-cubic-model-minimizer-decrease`,
`lem-trust-region-cauchy-decrease`, `alg-dogleg-trust-region-step`,
`alg-truncated-cg-trust-region-step`, `alg-adaptive-cubic-regularization`,
`lem-truncated-cg-iterates-are-krylov-vectors`, `alg-trust-region-method`,
`lem-trust-region-ratio-accuracy-for-small-radii`,
`lem-adaptive-cubic-unsuccessful-iteration-count`,
`thm-trust-region-global-liminf-gradient`,
`thm-trust-region-epsilon-iteration-complexity`, and
`thm-adaptive-cubic-regularization-epsilon-complexity`.

The three B-page items were `ex-indefinite-trust-region-boundary-minimizer`,
`ex-trust-region-singular-hard-case`, and
`ex-trust-region-newton-cauchy-truncated-cg`.

Published suppliers opened for the exact uses in these items included
`def-euclidean-inner-product`, `def-jacobian-matrix-and-gradient`,
`def-hessian-and-euclidean-critical-point`, `def-induced-matrix-p-norm`,
`def-matrix-product-and-identity-matrix`,
`def-definite-and-indefinite-hessian-quadratic-forms`,
`cor-real-spectral-theorem-for-self-adjoint-endomorphisms`,
`def-invertible-euclidean-linear-map`,
`thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized`,
`thm-cauchy-schwarz-and-the-euclidean-norm`,
`thm-real-power-continuity-and-derivatives`,
`cor-euclidean-closed-balls-and-spheres-are-compact`,
`thm-extreme-value-metric`, `cor-hessian-is-symmetric`,
`def-krylov-subspace-of-a-matrix-and-start-vector`,
`def-natural-logarithm`, `thm-natural-logarithm-laws`,
`thm-logarithm-derivative-and-integral`, `cor-mean-value-theorem`,
`thm-intermediate-value`, `thm-algebra-of-continuous-functions`,
`lem-geometric-sequence-null`, `def-limsup-liminf`,
`lem-extended-reals-complete`, `def-upper-bound`, and
`thm-of-archimedean`.

For the third B-page example, I also opened the current draft suppliers
`def-wolfe-and-strong-wolfe-conditions`,
`alg-bracketing-zoom-strong-wolfe-search`, and
`alg-inexact-newton-krylov-with-descent-safeguard`, along with their needed
derivative and matrix-free interfaces:
`def-c-one-map-and-local-inverse`, `thm-chain-rule-for-total-derivatives`,
`thm-total-derivative-computes-directional-and-partial-derivatives`, and
`def-matrix-free-access-model-for-krylov-methods`.

## Review and page verdicts

The trust-region subproblem proof constructs a secular root when the shifted
Hessian is nonsingular and handles the singular least-eigenspace case
separately. Its sufficiency identity has nonnegative terms under the stated
conditions, and the necessity argument correctly uses equality of global
minimum values. The Cauchy decrease, dogleg boundary intersection, truncated-CG
Krylov recurrence, ratio accuracy, accepted/rejected trial accounting, and
logarithm estimate all follow from their stated hypotheses. The cubic model is
coercive, the global-minimizer decrease and inexact-step decrease use the two
stated radial conditions, and the rejection-count and evaluation-complexity
arguments count unsuccessful outer trials. The three examples' numerical
values were recomputed directly; the Newton direction is outside the trust
ball, its exact inexact-Newton residual and descent checks pass, the first
strong-Wolfe trial is accepted, and the Cauchy and first truncated-CG exits
coincide.

- **A page:** Reader verdict — the summary accurately describes the local
  results and does not claim full-sequence gradient convergence. The three
  convergence/complexity statements now define the uncapped trajectory in
  terms of the finite procedure's nonterminal transition rules.
- **B page:** Reader verdict — the three examples and their page summary are
  mathematically consistent with the checked calculations and imported
  interfaces. No global convergence claim is transferred from the draft
  inexact-Newton supplier.

## Repairs and evidence

| Carrier | Repair | Evidence |
|---|---|---|
| `lem-trust-region-subproblem-optimality-and-hard-case` | Added the hypothesis $n\ge1$ to the Statement and Facts & Assumptions. | The referenced trust-region model requires $n\ge1$; the proof indexes the least eigenvalue as $\mu_1$ and the hard-case clause requires a least eigenvalue. The three assigned examples use $n=2$. |
| `thm-trust-region-global-liminf-gradient` | Defined the claim as an infinite-horizon trajectory following the algorithm's nonterminal rules, with target zero and the finite outer-cap return omitted. | `alg-trust-region-method` accepts a finite $N\in\mathbb N_0$ and returns `outer-budget-exhausted` at its cap. The proof uses the repeated update rules, not a finite call with an infinite cap. The assigned epsilon-complexity consumer uses the same transition rules and does not rely on the liminf conclusion. |
| `thm-trust-region-epsilon-iteration-complexity` | Clarified that the step counts are for the uncapped transition trajectory to the target; the final sentence reinstates a finite cap. | The proof first establishes target attainment/counts for continued transitions and then bounds the finite algorithm's sufficient cap. |
| `thm-adaptive-cubic-regularization-epsilon-complexity` | Defined the counted uncapped trajectory by the algorithm's trial and update rules, with the finite outer-cap return omitted. | The proof counts those transitions and separately derives a sufficient finite cap. |
| Source locators in the four trust-region items above plus `lem-trust-region-ratio-accuracy-for-small-radii` | Corrected the Nocedal–Wright theorem/lemma numbers and page locators. | In *Numerical Optimization*, Theorem 4.1's statement is printed p. 70; its hard-case discussion and proof are in §4.3, printed pp. 87–91. Lemma 4.3 gives the Cauchy decrease. The liminf result is Theorem 4.5, and its ratio-error/small-radius argument is equations (4.27)–(4.32) of the Theorem 4.5 proof. The target-aware counts remain locally proved. |
| Batch-72 proof contracts | Updated the KKT supplier scope in its contract and the three example contracts' KKT quotes to include $n\ge1$. Updated the line-search definition quote in the Newton example contract to match its current initialization and branches; corrected its finite-check step pointer from nonexistent `1.3` to `3.1`. Added the uncapped-trajectory scope to the three affected convergence/complexity contracts. | These updates match the current item Statements/Definitions and current proof steps. No `verification.judge` record was present on the edited items. |

Authoritative source passages checked:

- [Nocedal and Wright, *Numerical Optimization*, second edition](https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf), Chapter 4 Theorem 4.1 and §4.3 hard case/proof; Lemma 4.3; Theorem 4.5 and its equations (4.27)–(4.32).
- [Nick Gould, *Continuous Optimization Algorithms, Part 3.2: Trust-Region Methods*](https://www.numerical.rl.ac.uk/media/people/nick-gould/part3.2.pdf), Theorem 3.1 Cauchy decrease, Theorem 3.7 global liminf result, and Theorem 3.9 shifted-Hessian characterization.
- [Cartis, Gould, and Toint, *Adaptive cubic regularisation methods for unconstrained optimization. Part II*](https://perso.unamur.be/~phtoint/pubs/TR07-05b.pdf), §2.1–2.2 trial and unsuccessful-update rules, §4.1 conditions (4.1)–(4.2) and Lemma 4.2 decrease, and §5.1 Corollary 5.3 first-order evaluation complexity.
- [Nesterov and Polyak, *Cubic regularization of a Newton scheme and its global performance*](https://webdoc.sub.gwdg.de/ebook/serien/e/CORE/dp2003-41.pdf), Lemma 1, equations (2.2)–(2.4), and the cubic model's global-minimizer formulation.

## Checks and remaining issues

- Reflow and precheck passed for all five changed items.
- `node tools/proof-layout.mjs` on those five changed item paths: 5 items, 23 steps, 0 defects.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-72.proof-contracts.json --strict --json`: 14 contracts checked, 0 errors, and one `shotgun-bracket` warning on `lem-global-cubic-model-minimizer-decrease`. Its facts F6 and F7 are used at steps 1.2 and 1.4; the warning reflects several algebraic/summary steps without fact tags and did not identify an unsupported inference.
- No confirmed mathematical or contract defect remains unedited in batch 72.
- Current run status is `running` with no blocker entries. Batch 72 remains missing from `3a-read` and `3a-split` pending this handoff; there is no additional batch-72 blocker.

Coverage note: all assigned pages and items, the direct dependencies needed to check their claims, both required page bodies, and the cited source passages above were opened. I did not re-audit the full transitive proof closures of every published supplier beyond the exact statements and clauses used here.
