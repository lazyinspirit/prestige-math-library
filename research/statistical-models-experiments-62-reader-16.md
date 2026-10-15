# Step 3a reader report — batch 16

Run: `statistical-models-experiments-62`  
Batch: `16`  
Role: `reader-16`

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/response-surfaces-and-optimal-design.md`
- `library/statistical-models-and-experiments/response-surfaces-and-optimal-design-examples.md`

Their four required pages were also opened:

- `library/statistical-models-and-experiments/full-factorial-contrasts-and-interactions.md`
- `library/statistical-models-and-experiments/fractional-factorial-aliasing-and-foldover.md`
- `library/linear-algebra/matrix-differentiation-and-first-order-spectral-perturbation.md`
- `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`

All eight assigned items and their batch-16 contracts were reviewed in dependency order:

1. `def-local-response-surface-model`
2. `def-approximate-linear-model-design-and-optimality-criteria`
3. `lem-log-determinant-concavity-on-positive-definite-matrices`
4. `def-central-composite-design`
5. `thm-second-order-response-surface-stationary-point-and-classification`
6. `thm-d-optimality-equivalence-theorem`
7. `ex-saddle-in-second-order-response-surface`
8. `ex-approximate-vs-exact-d-optimal-design`

The following direct item suppliers were opened. Draft in-run suppliers: `def-two-level-full-factorial-design` (batch 14), `def-regular-fractional-factorial-defining-relation-and-resolution` (batch 15), and its justified-by result `thm-regular-fractional-factorial-aliasing-criterion` (batch 15). Published suppliers: `prop-standard-coordinate-inner-products`, `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-determinant-of-a-triangular-matrix`, `thm-determinant-multiplicative`, `def-determinant-of-a-square-matrix`, `def-matrix-minors-cofactors-and-adjugate`, `thm-laplace-cofactor-expansion`, `thm-adjugate-identity-over-a-commutative-ring`, `prop-matrix-differentials-obey-sum-product-and-adjoint-rules`, `thm-determinant-differential-and-jacobis-formula`, `thm-derivative-of-matrix-inversion`, `prop-differentials-of-trace-and-frobenius-linear-functionals`, and `def-trace-of-a-square-matrix`. I also opened `thm-real-normal-endomorphism-classification`, used by the real spectral corollary.

## Mathematical review and evidence

- The local response-surface definition states the declared region and disclaims adequacy and extrapolation. The stationary-point theorem correctly derives the unique point for symmetric nonsingular $B$, classifies the ambient quadratic by its eigenvalue signs, and limits the fitted-region conclusion to an interior point. The saddle witness uses opposite signed quadratic increments inside the region.
- The approximate-design definition gives a finite nonempty candidate set, $p\ge1$, the weight constraint, the information matrix, the linear-model error assumptions, and distinct nonsingular-design criteria. Its exact-run clause omitted $n\ge1$, which made $n_x/n$ undefined at $n=0$; that is repaired below.
- The log-determinant proof's line segment remains positive definite, its determinant is positive, and the second derivative is $-\operatorname{tr}(A_t^{-1}HA_t^{-1}H)\le0$. Its use of the determinant differential inherits the published-dependency finding below.
- The central-composite definition gives the full and regular-fraction core branches, axial runs, and repeated center runs. The current batch-14/15 suppliers support those branches. Oehlert's Chapter 19, §19.6 states the factorial/axial/center construction, permits a resolution-V-or-higher fractional core, and describes axial points with one coordinate at \(\pm\alpha\) and the rest zero.
- The D-equivalence condition is mathematically correct for the stated finite candidate set and a nonsingular design. The necessity path remains nonsingular for $t<1$; sufficiency follows from the log-determinant tangent inequality; the support equality follows by taking the weighted trace. Its written proof also relies on the published determinant-differential supplier reported below.
- Both examples check out. For the saddle, the two interior coordinate directions give increments $h^2$ and $-h^2$. For candidates $0,1,2$, the approximate endpoint design has determinant $1$, and enumeration of the ten nonnegative three-run allocations gives maximum $8/9$.

Source checks:

- Gary W. Oehlert, *A First Course in Design and Analysis of Experiments*, Chapter 19 §§19.1–19.7: [source PDF](https://users.stat.umn.edu/~gary/book/fcdae.pdf). In particular, §§19.5–19.7 (PDF pp. 540–543) give the quadratic canonical-coordinate classification, and §19.6 (printed pp. 522–523; PDF pp. 541–542) states the central-composite components and the resolution-V-or-higher fractional-core condition.
- Stephen Boyd and Lieven Vandenberghe, *Convex Optimization*: [source PDF](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf). Section 3.1.5 (PDF pp. 84–85) states log-determinant concavity on the positive-definite cone; §7.5 (PDF pp. 398–402) discusses approximate experiment design, D/E/A criteria, and the D-optimal dual sensitivity constraint with equality on support.
- J. Kiefer and J. Wolfowitz, “The Equivalence of Two Extremum Problems,” *Canadian Journal of Mathematics* 12 (1960), 363–366: [publisher PDF](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/B8B0626C11F52B0FD8C67C5D54BDDD43/S0008414X00010002a.pdf/the-equivalence-of-two-extremum-problems.pdf), DOI [10.4153/CJM-1960-030-4](https://doi.org/10.4153/CJM-1960-030-4). Theorem and proof, pp. 364–365, establish the equivalence between determinant maximization and the maximum sensitivity value $p$; the proof differentiates along feasible design segments.

## Repair

In `items/def-approximate-linear-model-design-and-optimality-criteria.md:36`, I changed the exact-run clause to require an integer $n\ge1$. The denominator is now defined for every admitted exact design. I updated the `zero` boundary evidence in `research/statistical-models-experiments-62-batch-16.proof-contracts.json` and refreshed the four consumer contract quotations that reproduce the definition. The item had no stale `verification.judge` record.

Validation after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/def-approximate-linear-model-design-and-optimality-criteria.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-approximate-linear-model-design-and-optimality-criteria.md` — 0 checked, 0 failing (definition has no proof steps).
- `node tools/proof-layout.mjs items/def-approximate-linear-model-design-and-optimality-criteria.md` — 1 item, 0 steps, 0 defects.

## Defect not editable in this assignment

`thm-determinant-differential-and-jacobis-formula` is published. Its `Proof 1.1` and `Proof 2.1` (source lines 46 and 48) use determinant column-multilinearity/cofactor expansion and the identity $\operatorname{adj}(A)=\det(A)A^{-1}$, respectively, but its `deps` (lines 10–13) omit the determinant/cofactor definitions, Laplace expansion, and adjugate identity. The statement and proof also use $\operatorname{adj}(A)$ without depending on its local definition. The local proof needs the derivative calculation from the determinant/cofactor definitions and Laplace expansion, then the published adjugate identity multiplied by $A^{-1}$. This is a **fatal unlicensed-inference** finding for both assigned consumers, `lem-log-determinant-concavity-on-positive-definite-matrices` and `thm-d-optimality-equivalence-theorem`; their written arguments therefore retain this unlicensed premise. This published carrier was not edited.

## Page verdicts

- `response-surfaces-and-optimal-design`: **Hold for the reported published dependency.** The response-surface, central-composite, stationary-point, and design-summary prose matches the reviewed items. The log-determinant and D-equivalence proofs use the published determinant-differential supplier.
- `response-surfaces-and-optimal-design-examples`: **Hold for an inherited dependency.** The saddle witness and exact-versus-approximate determinant calculation are correct; the latter uses the D-equivalence theorem affected by the published supplier.

The four required context-page summaries were opened; I found no page-summary defect in them. The batch-16 contract for `def-central-composite-design` still records its fractional-core prerequisite as open even though the current batch-15 supplier and the resolution-V condition are present; I treated this as stale contract evidence, not a content defect, and left it unchanged.

## Coverage note and blocker

The complete assigned batch, all manifest-listed direct item dependencies, both assigned pages, and all four required page summaries were opened. The cited response-surface and optimal-design source passages were reviewed, as were the local fractional-alias and real-normal supplier proofs used here. I did not re-audit every transitive proof prerequisite behind the established published matrix and spectral suppliers. The remaining blocker is owner review/repair of the published determinant-differential dependency; no other batch-16 content blocker was found.
