# Step 3a reader report — batch 104

Run: `numerical-optimization-dynamics-2026-10-16`

## Opened inventory

- Assigned A page: `multirate-and-partitioned-time-integration` and all eight assigned items:
  `alg-frozen-slow-explicit-fast-euler`, `alg-synchronous-waveform-relaxation-finite-window`,
  `lem-frozen-slow-euler-variation-bounds`, `lem-frozen-slow-euler-one-step-stability`,
  `cor-cubic-defect-gives-second-order-for-symmetric-multirate-composition`,
  `thm-waveform-relaxation-contraction-and-error-bound`, `lem-frozen-slow-euler-local-defect-bound`,
  and `thm-frozen-slow-euler-global-first-order-error`.
- Assigned B page: `multirate-and-partitioned-time-integration-examples` and all three assigned examples:
  `ex-linear-electromechanical-multirate-block-cost`,
  `ex-coupled-fast-mode-destabilizes-frozen-slow-euler`, and
  `ex-frozen-slow-interpolation-limits-order`.
- Page prerequisites: `global-ode-and-density-error` and `imex-and-operator-splitting-methods`.
- Other direct dependencies opened: `def-vector-valued-functions-limits-and-continuity`, `def-vector-valued-derivative-and-integral`, `def-first-order-ode-initial-value-problem-and-solution`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-norm-inequality-for-the-vector-valued-integral`, `thm-continuous-implies-integrable`, `thm-componentwise-limits-and-continuity`, `lem-vector-valued-continuous-curve-space-is-complete`, `thm-complete-subspace-iff-closed`, `thm-banach-fixed-point`, `def-real-exponential-function-and-e`, `def-integer-power`, `lem-power-monotone`, `lem-exponential-dominates-one-plus-x`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `thm-derivative-of-exponential`, `cor-mean-value-theorem`, `thm-monotonicity-of-the-integral`, and `lem-integral-elementary-bounds`.
- The current batch-28 supplier `lem-discrete-one-step-error-recurrence-bound` was also checked with the cited recurrence inputs `def-natural-logarithm`, `def-real-power`, `thm-real-power-laws`, `def-finite-sum`, and `lem-finite-sum-laws`.
- For the current batch-98 page prerequisite and the A-page cross-pair wording, opened the live items `def-exact-split-flows-lie-strang-and-bracket`, `lem-lie-strang-local-error-expansions`, and `thm-lie-strang-global-orders-and-subflow-error`.
- Assignment material opened: the batch-104 manifest, beta task and dependency-order task, batch notes, cross-batch dependency record, and the nine proof contracts.

No dedicated rendered evidence bundle was exposed at the dispatched paths or in the matching run-state files. I used the current page and item bodies and the batch contract/notes as navigation evidence, not as verdicts.

## Review and repairs

1. `lem-frozen-slow-euler-variation-bounds`, proof step 1.1: the original last inequality integrated a pointwise bound without citing scalar integral monotonicity. Added `thm-monotonicity-of-the-integral` as a dependency and a fact, and stated that the norm integrand is integrable by the vector integral inequality. The cited theorem’s claim 3 gives the required constant bound.
2. `lem-frozen-slow-euler-local-defect-bound`, facts and proof steps 1.1, 1.2, and 2.1: the slow and fast estimates needed integrability of their continuous vector integrands and the same scalar integral comparison. Added the componentwise-continuity and continuous-integrability suppliers and the scalar comparison fact. The slow estimate now uses the pointwise bound `KMH` across a length-`H` interval, giving `KMH^2`; together with the `3KMH^2` fast estimate this preserves the stated `4KMH^2` bound. Updated the proof contract’s citations and step derivations.
3. `thm-frozen-slow-euler-global-first-order-error`, Statement: the proof compares the numerical run with an algorithm run started from each exact node, but the original hypotheses only guaranteed success of the numerical trajectory. Added the explicit successful exact-start comparison-step assumption and required its stages and outputs to lie in the common bounded/Lipschitz set. Updated the proof-contract derivation for step 1.1.
4. `library/numerical-differential-equations-and-stochastic-dynamics/multirate-and-partitioned-time-integration.md`, Summary: corrected the obsolete description of batch 98’s method-specific symmetric composition and defect/stability verification as still open. The current batch-98 items prove finite-dimensional Lie/Strang splitting results under their own tube hypotheses. The revised summary says that the 104 conditional result does not instantiate those results as a coupled multirate composition and states what a future application would need.

No `verification.judge` record was present in the three changed items. Their proof contracts were updated where the repairs changed cited support or the step-1.1 application conditions.

## Citation check

I checked the four source references used by the assigned definitions/results against their original PDFs. Günther–Sandu’s *Multirate Methods for Ordinary Differential Equations*, CSL-TR-25-5 (2025), title page and §4.1.1, formulas (4.2a–c), give the slow forward-Euler update, fast Euler substeps, and constant-interpolation option; this matches the assigned frozen-slow procedure. [Original report](https://vtechworks.lib.vt.edu/bitstreams/107ab78d-834d-44a8-9cc8-566d7f2a2911/download)

Günther’s *Numerical Analysis and Simulation I — Ordinary Differential Equations* (Winter Term 2017/18), title page and §4.3.1, formulas (4.17a–b), cover multirate explicit Euler and the need to choose an approximation for intermediate slow values. [Lecture notes](https://acm.uni-wuppertal.de/fileadmin/mathe/www-num/teaching/ode_1819/script_1819.pdf)

Embree’s *Lecture Notes on Numerical Analysis*, Lecture 34 §5.3 (PDF pp. 190–192), is a global-error analysis for explicit one-step methods; the assigned proof independently derives its method-specific recurrence and uses the batch-28 recurrence result. [Lecture notes](https://personal.math.vt.edu/embree/math5466/nanotes.pdf)

Lelarasmee’s *The Waveform Relaxation Method for Time-Domain Analysis of Large Scale Integrated Circuits: Theory and Applications*, UCB/ERL M82/40 (1982), title page and Chapter 5 §5.1 (PDF pp. 61–62), treat functional-space fixed-point and contraction ideas. The assigned synchronous integral map is defined and proved locally; the citation is not used to identify it with Lelarasmee’s canonical iteration. [Report](https://www2.eecs.berkeley.edu/Pubs/TechRpts/1982/Archive/ERL-82-40.pdf)

## Verdicts and remaining defects

- A page `multirate-and-partitioned-time-integration`: pass after the summary repair. The frozen-slow estimates, waveform contraction certificate, and conditional order-two statement match their current items and hypotheses.
- B page `multirate-and-partitioned-time-integration-examples`: pass. The dissipative energy derivative, two exact fast-step calculations, and frozen-versus-midpoint macro sums match the examples; the page keeps the midpoint result model-specific.
- Unedited defects: none found in the assigned carriers or the opened direct dependencies. No finding remains for another-batch or published content.
- Blocker: none for this reader dispatch. Final autopilot status showed the run active, no work in flight, and batch 104 included in the current 3a-read coverage.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts` reported all three changed items unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` passed each changed item: 1 checked, 0 failing.
- One final `node tools/proof-layout.mjs` command covered all three changed items: 3 items, 9 proof steps, 0 defects.

Coverage limit: I did not re-audit every transitive foundational proof behind the published dependency chain. I opened and checked the direct supplier statements and the proof portions needed by the assigned arguments; the external PDFs were used to verify citation identity and scope, not as substitutes for local proofs.
