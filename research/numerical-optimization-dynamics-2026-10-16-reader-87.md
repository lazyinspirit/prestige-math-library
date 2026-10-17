# Step 3a reader report — batch 87

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Verdict: both assigned pages pass after the listed item repairs; no uneditable defect remains.

## Opened inventory

Read the active run status, batch-87 manifest, reader brief, proof-contract file, repository instructions, `README.md`, `SCHEMA.md`, and `WORKFLOW.md`. The run status showed Step 3a reading in progress and batch 87 assigned to the active frontier.

Opened assigned pages:

- `library/numerical-differential-equations-and-stochastic-dynamics/coagulation-fragmentation-and-sectional-population-balance-numerics.md` (A page).
- `library/numerical-differential-equations-and-stochastic-dynamics/coagulation-fragmentation-and-sectional-population-balance-numerics-examples.md` (B page).

Opened every assigned item in dependency order, then opened the outside-batch dependencies needed for the mathematical review.

**A-page items (34):**

`def-bounded-lipschitz-discrepancy-for-measures`, `def-conservative-fixed-pivot-redistribution`, `def-finite-discrete-coagulation-fragmentation-system`, `def-weighted-total-variation-space-for-population-measures`, `lem-convergent-power-series-termwise-differentiation`, `alg-finite-sectional-coagulation-fragmentation-balance`, `def-continuous-size-coagulation-fragmentation-weak-model`, `lem-bounded-lipschitz-discrepancy-dominated-by-weighted-total-variation`, `lem-finite-coagulation-fragmentation-event-moments`, `lem-fixed-pivot-barycentric-identities`, `lem-rooted-tree-generating-function-series`, `lem-weighted-total-variation-space-is-complete`, `alg-finite-sectional-forward-euler-positivity-cfl`, `def-infinite-fixed-pivot-sectional-dynamics`, `lem-continuous-coagulation-operator-weighted-total-variation-bound`, `lem-continuous-fragmentation-operator-weighted-total-variation-bound`, `lem-finite-sectional-vector-field-locally-lipschitz`, `thm-finite-sectional-positivity-and-mass-reservoir-conservation`, `thm-product-kernel-pre-gelation-second-moment-blowup`, `lem-continuous-coagulation-fragmentation-vector-field-locally-lipschitz`, `thm-finite-sectional-forward-euler-positivity-and-conservation`, `thm-finite-sectional-global-ode-and-moment-bounds`, `thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability`, `lem-continuous-coagulation-fragmentation-local-positive-wellposedness`, `lem-fixed-pivot-coagulation-fragmentation-quadrature-error`, `thm-finite-sectional-forward-euler-global-first-order-error`, `thm-continuous-coagulation-fragmentation-moment-bounds`, `lem-second-moment-controls-tail-mass-and-number`, `thm-bounded-kernel-continuous-coagulation-fragmentation-global-wellposedness`, `thm-continuous-coagulation-fragmentation-bounded-lipschitz-stability`, `thm-infinite-fixed-pivot-sectional-grid-error`, `lem-cutoff-overflow-return-error-bound`, `thm-sectional-semiflow-cutoff-error-budget`, and `thm-sectional-forward-euler-total-error-budget`.

**B-page items (5):**

`ex-binary-fragmentation-preserves-first-moment`, `ex-constant-kernel-coagulation-number-decay-and-mass`, `ex-fixed-pivot-redistributes-between-adjacent-pivots`, `cex-product-kernel-blowup-defeats-a-global-grid-inference`, and `ex-cutoff-overflow-is-reported-as-lost-mass`.

**Outside-batch mathematical suppliers opened:**

`thm-lagrange-burmann-inversion`, `prop-formal-derivative-algebra`, `thm-formal-power-series-unit-criterion`, `thm-exponential-product-limit`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `thm-picard-lindelof-local-existence-and-uniqueness`, `thm-forward-euler-one-step-consistency-and-local-error`, `thm-global-error-from-one-step-defect-and-stability`, `lem-discrete-one-step-error-recurrence-bound`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-one-step-ode-method-local-defect-order-and-stability`, `def-first-order-ode-initial-value-problem-and-solution`, `lem-time-along-ode-solution-derivative-bound`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `cor-mean-value-theorem`, `thm-continuous-partial-derivatives-imply-total-differentiability`, `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`, `thm-mean-value-inequality-for-total-derivatives`, `def-convex-subset-of-euclidean-space`, `def-real-exponential-function-and-e`, `def-finite-sum`, `lem-finite-sum-laws`, `def-integer-power`, `lem-power-monotone`, `def-natural-logarithm`, `def-real-power`, `thm-real-power-laws`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `lem-exponential-dominates-one-plus-x`, `thm-chain-rule-for-total-derivatives`, `lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps`, `lem-vector-valued-continuous-curve-space-is-complete`, `lem-picard-operator-preserves-a-closed-curve-ball`, `lem-picard-operator-is-a-short-time-contraction`, and `thm-banach-fixed-point`.

Also opened the six declared prerequisite pages: `interacting-particle-mean-field-and-vortex-blob-error`, `composite-quadrature-rules`, `one-step-ode-consistency-and-local-error`, `runge-kutta-methods-and-order`, `global-ode-and-density-error`, and `positive-conservative-production-destruction-integrators`. Their page summaries did not supply additional claims used by the assigned item proofs.

## Review and edits

The finite event definitions use ordered pairs consistently: unequal pairs are counted twice at half-rate, equal pairs remove two parent particles at half-rate, and fixed-pivot redistribution preserves event number and first moment. The finite positivity and augmented-mass proofs are valid; the finite moment-growth estimate correctly separates the pivot second-moment excess from the event's physical increment. The forward-Euler CFL is the total parent loss rate, and its positivity and conservation conclusions follow for each accepted exact-arithmetic step.

The continuous weak model's mass, number, and second-moment estimates follow from the stated bounded-kernel, daughter-count, support, and first-moment assumptions. The weighted-total-variation operator bounds, local positive construction, global continuation, bounded-Lipschitz stability, pivot quadrature estimate, cutoff comparison, and combined error budget were checked against their supplier statements and arguments. The grid and cutoff estimates are distinct; the reservoir is diagnostic and does not implement later fragmentation return.

The product-kernel generating-function argument was checked through the rooted-tree series and the coefficient equations. The item gives the full local derivation of the pre-gelation formula and moments. A searchable excerpt of [WIAS preprint 585](https://www.wias-berlin.de/preprint/585/wias_preprints_585.pdf), §6, equation (6.8), independently states the monodisperse product-kernel formula for $K(i,j)=ij$; the direct PDF fetch timed out. Laurençot, [*Weak compactness techniques and coagulation equations*](https://arxiv.org/pdf/1801.08312), §3.3, Theorem 3.13 and its proof (pp. 37–39), states finite-time mass loss under its additional weak-solution hypotheses and the kernel lower bound $K(x,y)\ge r(x)r(y)$ with $r(x)=\kappa_m x^{\lambda/2}$, $1<\lambda\le2$. That source matches the contextual remark in the counterexample and is not used to prove the assigned pre-gelation formula.

Edits made only in assigned draft items:

1. In `thm-finite-sectional-positivity-and-mass-reservoir-conservation`, changed the mass sum's undeclared final index `J` to `M`, the grid endpoint index in the defining algorithm. Updated the corresponding statement references in the proof contract.
2. In `thm-product-kernel-pre-gelation-second-moment-blowup`, made the verification at $t=0$ explicit: the equation's right sides are $-1$, $1/2$, and $0$ for $k=1$, $k=2$, and $k\ge3$, matching the formula's right derivatives.
3. In `lem-fixed-pivot-coagulation-fragmentation-quadrature-error`, expanded the fragmentation residual into the daughter-shape term and both rate-variation terms. This shows where the $L_\beta(D+1)$ contribution comes from and keeps the stated constant unchanged.
4. In `ex-constant-kernel-coagulation-number-decay-and-mass`, established that the positive scalar number solution cannot reach zero at a finite time before differentiating its reciprocal.
5. In `lem-continuous-coagulation-fragmentation-local-positive-wellposedness` and `thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability`, made the measure-valued integrating-factor argument explicit: the loss coefficient is continuous in $L^\infty$, multiplication by bounded functions is bounded on the weighted measure space, the survival multipliers vary continuously in operator norm, and the split difference quotient gives the mild formula's derivative and its converse.

No stale `verification.judge` record was present on the changed items. The affected proof contracts were updated. `proof-contract.mjs --items` checked all six changed contracts: 0 errors, 0 warnings.

## Page verdicts and unedited defects

| Page | Verdict | Evidence |
|---|---|---|
| `coagulation-fragmentation-and-sectional-population-balance-numerics` (A) | Pass | Its summary matches the finite event, continuous weak-model, grid, cutoff, and time-error results. It states that the continuous claims use bounded Lipschitz data and the stated daughter-count/mass assumptions, and it does not claim a post-gelation mass-loss proof. No page prose edit was needed. |
| `coagulation-fragmentation-and-sectional-population-balance-numerics-examples` (B) | Pass | Its summary matches the constant-kernel, pivot, binary-fragmentation, overflow, and product-kernel examples. No B-page prose was edited. |

Defects not edited: none. Batch 87 has no blocker. The final run status remains active, with no in-flight worker and no blocker listed.

## Required checks

- `tools/reflow.mts` and `tools/precheck.mts` were run for each of the six changed items; all six final prechecks pass. The first quadrature precheck requested a canonical repair after the new display block; I rewrote that equation inline within the single proof-step paragraph and reran reflow/precheck successfully.
- The single final `node tools/proof-layout.mjs` command covered all six changed item paths: 6 items, 24 steps, 0 defects.

## Coverage note

All 39 assigned items and both assigned pages were opened, along with the direct mathematical suppliers and the referenced one-step/global-error recurrence support listed above. The two cross-batch Euler results were first opened before their non-batch support was enumerated; I then opened and checked those suppliers before completing the review, without rereading the consumer files. I did not recursively re-audit every unrelated transitive prerequisite behind the published supplier items. The WIAS preprint's searchable result exposed the exact formula and locator, but the PDF endpoint timed out; the assigned item supplies a local derivation of that formula and its moment identities. The shared worktree contains many changes outside batch 87; those files were not reviewed or modified.
