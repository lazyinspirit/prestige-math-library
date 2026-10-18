# Step 3a reader report — batch 71

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: `reader`  
Date: 2026-10-18

## Scope and run status

I reviewed only batch 71. The Autopilot status command reported the named run as live in Step 3a, with no worker currently in flight. The task manifest assigns one A page with 34 items and its B companion with five items. I read both assigned pages and all 39 assigned items, then followed the declared dependency order from level 0 through level 7 and reviewed the consumer chains after identifying repair candidates.

## Opened inventory

### Assigned pages

- `monotone-hjb-schemes-and-policy-iteration` (A; 34 assigned items).
- `monotone-hjb-schemes-and-policy-iteration-examples` (B; five assigned items).

### Assigned A-page items, by manifest dependency level

- Level 0: `def-na-finite-state-discounted-bellman-system`; `def-na-second-order-elliptic-semijets-and-closure`; `lem-na-convex-support-localization-and-lipschitz-dual-gradient`; `lem-na-jensen-maximum-principle-semiconvex`; `lem-na-lipschitz-critical-image-null`; `thm-na-rademacher-euclidean`.
- Level 1: `def-na-periodic-grid-and-tensor-multilinear-interpolation`; `lem-na-discounted-bellman-policy-matrix-inverse-positive`; `lem-na-sup-convolution-semiconvexity-and-jet-transfer`; `thm-na-semiconvex-alexandrov-second-order-differentiability`.
- Level 2: `alg-na-finite-control-howard-policy-iteration`; `def-na-first-order-hjb-cauchy-problem`; `def-na-periodic-diagonal-controlled-diffusion-hjb-problem`; `lem-na-multilinear-interpolation-positive-and-second-order-accurate`; `thm-na-elliptic-theorem-of-sums`.
- Level 3: `alg-na-explicit-diagonal-diffusion-hjb-grid-step`; `alg-na-positive-interpolation-semilagrangian-hjb-step`; `alg-na-upwind-hjb-grid-step`; `def-na-second-order-parabolic-viscosity-solution`; `lem-na-grid-contact-localization-for-half-relaxed-limits`; `thm-na-howard-policy-iteration-monotone-improvement-termination`.
- Level 4: `lem-na-diagonal-diffusion-discrete-initial-trace`; `lem-na-diagonal-diffusion-stencil-is-monotone`; `lem-na-elliptic-spacetime-jets-imply-parabolic-hjb-inequalities`; `lem-na-first-order-hjb-discrete-initial-trace`; `lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity`; `thm-na-diagonal-diffusion-stencil-consistency`; `thm-na-positive-interpolation-hjb-step-monotone-stable-consistent`; `thm-na-upwind-hjb-grid-step-monotone-stable-consistent`.
- Level 5: `thm-na-diagonal-diffusion-scheme-half-relaxed-limits`; `thm-na-first-order-hjb-scheme-convergence`; `thm-na-periodic-diagonal-hjb-second-order-comparison`.
- Level 6: `cor-na-diagonal-diffusion-scheme-converges-under-comparison`.
- Level 7: `thm-na-diagonal-diffusion-hjb-scheme-convergence`.

### Assigned B-page items, by manifest dependency level

- Level 4: `cex-na-centered-hjb-update-is-not-monotone`; `ex-na-discounted-control-switching-policy-iteration`.
- Level 5: `ex-na-diagonal-diffusion-manufactured-solution`.
- Level 6: `ex-na-compact-control-quantization-hamiltonian-error`; `ex-na-eikonal-kink-monotone-hjb-updates`.

### Page prerequisites and item suppliers opened

I read the eight page prerequisites listed in the A-page manifest: `hyperbolic-finite-difference-methods`, `semi-lagrangian-characteristic-transport`, `hamilton-jacobi-equations-and-viscosity-solutions`, `sparse-high-dimensional-estimation-and-covariance`, `power-and-sample-size-planning`, `measures-and-their-basic-properties`, `lebesgue-measure-on-euclidean-space`, and `countability-and-uncountability`.

I opened the direct dependency statements and the proof sections needed for the assigned inferences. The 60 unique external item suppliers are:

`cor-bolzano-weierstrass-in-rn`; `cor-taylor-remainder-bound`; `def-axiom-of-choice`; `def-convex-and-strictly-convex-functions-on-euclidean-sets`; `def-countable-choice`; `def-finite-sum`; `def-half-relaxed-limits`; `def-hamilton-jacobi-cauchy-problem`; `def-lipschitz-holder-contraction`; `def-metric-ball`; `def-metric-compactness`; `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`; `def-natural-numbers`; `def-nonnegative-extended-series`; `def-null-and-content-zero-in-rn`; `def-operator-norm-on-a-finite-dimensional-inner-product-space`; `def-periodic-one-way-advection-schemes`; `def-real-numbers`; `def-semilagrangian-periodic-grid-and-interpolant`; `def-sobolev-space-wkp-and-its-norm`; `def-viscosity-subsolution-and-supersolution`; `def-weak-derivative-of-a-locally-integrable-function`; `lem-acl-representatives-reconstruct-weak-gradients-by-fubini`; `lem-ceiling-and-least-positive-integer-threshold`; `lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure`; `lem-euclidean-balls-have-positive-finite-lebesgue-measure`; `lem-finite-set-has-max`; `lem-finite-sum-laws`; `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`; `lem-periodic-tensor-interpolant-is-convex-and-linf-contracting`; `lem-rat-embeds-dense`; `lem-smooth-bump-between-concentric-euclidean-balls`; `lem-symmetric-matrix-operator-norm-rayleigh`; `prop-measure-monotonicity`; `thm-c1-lipschitz-ac-bv-hierarchy`; `thm-choice-implies-dependent-implies-countable-choice`; `thm-comparison-for-first-order-hamilton-jacobi-equations`; `thm-continuous-implies-integrable`; `thm-convex-functions-on-open-convex-sets-are-locally-lipschitz`; `thm-euclidean-semicontinuous-extreme-value-theorem`; `thm-ftc-first-part`; `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`; `thm-hahn-banach-dominated-extension`; `thm-heine-borel-rn`; `thm-heine-cantor-metric`; `thm-invertible-matrix-theorem`; `thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n`; `thm-lebesgue-measure-is-a-complete-measure`; `thm-lebesgue-measure-under-dilations-and-reflections`; `thm-lebesgue-null-agrees-with-elementary-nullity-in-rn`; `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`; `thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume`; `thm-lipschitz-images-of-null-sets-in-rn-are-null`; `thm-n-cross-n-countable`; `thm-nonnegative-series-bounded-partial-sums`; `thm-poincare-inequality-on-a-ball`; `thm-product-of-countable`; `thm-rationals-countable`; `thm-well-ordering-principle`; `thm-zorn`.

The two draft supplier items `def-semilagrangian-periodic-grid-and-interpolant` and `lem-periodic-tensor-interpolant-is-convex-and-linf-contracting` are batch-70 dependencies. I opened their complete definitions/proof and verified the unit-period specialization and positive interpolation interface used by batch 71. The page-level advection and viscosity imports were checked against `def-periodic-one-way-advection-schemes`, `def-hamilton-jacobi-cauchy-problem`, `def-viscosity-subsolution-and-supersolution`, `def-half-relaxed-limits`, and `thm-comparison-for-first-order-hamilton-jacobi-equations`.

## Confirmed defects and repairs

1. In `alg-na-finite-control-howard-policy-iteration`, the evaluation budget was only constrained by `$K\ge1$`. Since the instructions test the exact equality `$k+1=K$`, the procedure did not specify a finite integer budget and noninteger budgets would not implement the stated evaluation limit. I changed this to a positive integer `$K\in\mathbb N$, `$K\ge1$`. The policy-improvement theorem and the two-state consumer were checked: the default `$K=P$` is integer and their conclusions are unchanged.

2. In `def-na-first-order-hjb-cauchy-problem`, the discretized set `$A_k$` was not required to be nonempty even though `$H_k$` was defined as its maximum. An empty `$A_k$` makes that maximum undefined. I specified a sequence of finite nonempty `$A_k\subseteq A$` and separated the Hamiltonian-error definition from the vanishing-error condition. I also made the assigned A-page summary say that each update uses a nonempty finite control set. I checked the semi-Lagrangian and upwind algorithms, their trace and consistency results, both first-order convergence consumers, the centered counterexample, and the two first-order examples against the added condition; all already use nonempty action sets.

3. In `alg-na-explicit-diagonal-diffusion-hjb-grid-step`, `$t_n$` and the number of updates were not specified, so the coefficient-evaluation times and terminal output were incomplete. I added a positive integer `$M$`, `$\tau=T/M$`, `$t_n=n\tau$`, the loop `$n=0,\ldots,M-1$`, per-step admissibility checks, and output `$U^M$`. The initial-trace, monotonicity, consistency, half-relaxed-limit, manufactured-solution, and final convergence consumers use this horizon convention and remain valid.

4. In `alg-na-upwind-hjb-grid-step`, the same missing time partition left `$t_n$` undefined and the update count unspecified. I added `$M\ge1$`, `$\tau=T/M$`, `$t_n=n\tau$`, the exact update loop, per-step CFL checks, and output `$U^M$`. The upwind trace and consistency results, first-order convergence proof, centered counterexample, and eikonal example remain valid; their one-step cases use `$M=1$` and the eikonal family already states `$\tau=T/M$`.

5. In `ex-na-discounted-control-switching-policy-iteration`, the example named its state set `$\{0,1\}$`, while the supplier defines states as `$\{1,\ldots,n\}`. I relabelled the example states `$\{1,2\}$` and updated its rows and exact policy calculations. The policy equations still give `$V=(0,2)$` initially and `$V=(1,2)$` after the single strict switch, with the exit tie retained.

I refreshed the batch-71 proof-contract citation/derivation entries for the 14 other proof-bearing consumers of the changed statements and the edited policy example (15 entries total) using `tools/regen-contract-entries.mjs`. I also corrected the affected boundary evidence in the batch contract: the first-order definition's empty-action case is now checked; the upwind algorithm's empty branch is not applicable under `$M\ge1$` and nonempty controls; and budget/time-horizon endpoint evidence and the relabelled policy-example evidence match the current text. Existing `template_review`/`reviewed` receipts retain their original item hashes; I did not rebind or self-certify those reviews. The changed items contained no `verification.judge` record, so there was no judge stamp to remove.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts` was run once on the five changed item paths. Four were unchanged; the policy example was reflowed into the required paragraph layout.
- `node tools/tsx-run.mjs tools/precheck.mts` on those five paths passed the only proof-bearing changed item (`ex-na-discounted-control-switching-policy-iteration`); the four definition/algorithm items are not applicable to proof-step precheck.
- `node tools/proof-layout.mjs` on all five changed item paths reported `5 items, 2 steps, 0 defects`.

## Page verdicts

- `monotone-hjb-schemes-and-policy-iteration` (A): no unresolved mathematical or summary defect identified after the repairs. The three numerical branches, discounted policy-iteration chain, and local comparison/convergence proofs agree with their declared hypotheses and dependencies.
- `monotone-hjb-schemes-and-policy-iteration-examples` (B): no unresolved page-prose defect identified. All five examples' stated computations and PDE/stencil checks are sound; the state-label mismatch in the policy example was repaired.

## Uneditable findings and blocker

No confirmed defect remains outside reader edit scope. No proposed withdrawal is needed. There is no reader blocker. The batch-70 draft suppliers were checked as dependencies and no defect was found in the interfaces used by batch 71.

## Coverage note

All 39 assigned items and both assigned pages were opened, and the eight page prerequisites listed in the A-page manifest were read. Direct suppliers and the local proof sections needed for the reviewed claims were opened, including the convex-analysis, measure-theory, Rademacher/Alexandrov, theorem-of-sums, half-relaxed-limit, and comparison chains. I did not independently audit every transitive proof below the published supplier theorems; their published statements and the relevant local supplier arguments were the evidence used here.

The principal authoritative source cross-checks were Crandall–Ishii–Lions, *User's Guide to Viscosity Solutions*, Theorem 3.2, equation (3.8), printed pp. 16–18, and its proof in the Appendix, printed pp. 57–58 (https://arxiv.org/pdf/math/9207212); the same paper's parabolic Theorem 8.3, printed p. 50, and comparison proof of Theorem 8.2, printed pp. 50–52; Barles–Souganidis, *Convergence of Approximation Schemes for Fully Nonlinear Second Order Equations*, §2, assumptions (2.2)–(2.5) and Theorem 2.1, printed pp. 274–276 (https://benjaminmoll.com/wp-content/uploads/2021/04/barles-souganidis.pdf); Debrabant–Jakobsen, *Semi-Lagrangian Schemes for Linear and Fully Non-Linear Hamilton-Jacobi-Bellman Equations*, §2, interpolation conditions (I1)–(I2), PDF pp. 2–3 (https://arxiv.org/pdf/1403.1217); and Wang He, *Reinforcement Learning: A Mathematical Introduction*, Chapter 10, §§10.6–10.9 (https://wanghemath.github.io/Book-MathRL/chapters/chapter-07-policy-improvement-and-policy-iteration.html). These references support the quoted interfaces; the assigned items' local calculations were checked directly.
