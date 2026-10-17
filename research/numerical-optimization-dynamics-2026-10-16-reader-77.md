# Step 3a reader report — batch 77

## Scope and run state

Reviewed batch `77` from `research/numerical-optimization-dynamics-2026-10-16-batch-77.pages.json`, the batch proof contracts, both assigned pages, all fifteen assigned items, and the listed direct suppliers needed to check their arguments. The autopilot status reported the run as active (`3a-read` at 68/107, no work currently in flight). The recent git history is dated 2026-10-16 and is consistent with this run being in progress. The run status also reports an unrelated split-stage blocker: `split-70 failed 3x`.

## Opened inventory

**Pages**

- `library/numerical-differential-equations-and-stochastic-dynamics/parallel-in-time-parareal-and-mgrit.md`
- `library/numerical-differential-equations-and-stochastic-dynamics/parallel-in-time-parareal-and-mgrit-examples.md`

**Assigned items, read in supplier-to-consumer order**

- `def-parareal-propagator-pair`
- `alg-parareal-correction-sweeps`
- `def-linear-all-at-once-time-operator`
- `lem-parareal-first-k-nodes-are-fine-exact`
- `thm-parareal-binomial-error-bound`
- `lem-mgrit-exact-coarse-elimination`
- `thm-parareal-inexact-sweep-error-ledger`
- `alg-mgrit-two-level-cycle`
- `cor-parareal-continuous-target-error-decomposition`
- `thm-mgrit-contraction-implies-residual-and-error-decay`
- `alg-mgrit-multilevel-recursive-cycle`
- `ex-parareal-dissipative-scalar-heat-mode`
- `ex-parareal-oscillatory-coarse-phase-error`
- `ex-parareal-nonlinear-tube-escape`
- `ex-mgrit-scalar-diffusion-two-grid-contraction`

**Direct and targeted secondary suppliers**

- `def-explicit-runge-kutta-tableau-and-stage-map`
- `def-backward-euler-step-equation`
- `def-euler-midpoint-rk4-tableaus`
- `def-norm-and-normed-space`
- `def-real-exponential-function-and-e`
- `lem-exponential-dominates-one-plus-x`
- `thm-exponential-addition-formula`
- `def-first-order-ode-initial-value-problem-and-solution`
- `def-one-step-ode-method-local-defect-order-and-stability`
- `cor-mean-value-theorem`
- `thm-derivative-of-exponential`
- `thm-exponential-is-strictly-increasing`
- `cor-exponential-reciprocal-and-positivity`
- `def-integer-power`
- `lem-power-monotone`

## Item review and repair

The propagator definition correctly treats the fine and coarse maps as partial deterministic maps, separates their labels from accuracy or convergence claims, and makes a selected backward-Euler branch part of the input. The correction-sweep procedure specifies its recurrence, finite budgets, failure statuses, and work model. The all-at-once definition correctly encodes the linear recurrence with its known initial-state contribution in the first right-hand-side block.

The first-k-nodes induction, conditional binomial estimate, additive update-defect ledger, and continuous-target decomposition were checked against their stated hypotheses. In particular, the binomial induction handles b=0, the k>n binomial convention, and the fixed-horizon substitution H=T/N. The MGRIT elimination proof correctly establishes invertibility by forward substitution, forms the Schur complement, and derives the coarse recurrence by repeated substitution. The two-level algorithm’s P, R, A_c, relaxation order, and error operator are dimensionally and algebraically consistent; the recursive algorithm updates the coarse residual between its prescribed recursive visits and does not claim a multilevel convergence rate.

**Repair — `lem-parareal-first-k-nodes-are-fine-exact`, Facts & Assumptions, Statement, and step 2.1.** The original consequence said that K >= N alone made the returned table complete. The supplier algorithm permits propagation failure or time-budget expiry and returns only the last fully completed row, so a budget of at least N does not guarantee that row K exists. The assumption now identifies only completed rows as formed by successful calls; the statement and proof condition the returned-row consequence on full completion of rows 0,...,K, and cite the algorithm’s output rule. The item had no `verification.judge` record to remove. The related proof-contract derivation for step 2.1 now carries the same completion condition and cites `F2`.

The direct consumer `ex-parareal-oscillatory-coarse-phase-error` was checked after this statement repair. Its use of the first assertion concerns a specified completed sweep, and its maps are total, so its exact second-sweep conclusion remains valid.

## Pages

- **`parallel-in-time-parareal-and-mgrit` — pass.** Its summary accurately distinguishes the sequential fine trajectory from the exact ODE solution, states the conditional nature of the Parareal estimate and MGRIT contraction, and avoids a general multilevel convergence claim.
- **`parallel-in-time-parareal-and-mgrit-examples` — pass.** Each summary claim matches the four finite computations. The scalar MGRIT example’s matrix and induced norm were checked directly: its sole nonzero entry is −5/48, giving norm 5/48.

## Source checks

- Falgout et al., *Parallel Time Integration with Multigrid*, §§2.1–2.4 (PDF pp. 3–7): the all-at-once recurrence, C/F Schur complement and ideal transfers, and recursive MGRIT cycle support the constructions. In particular, §2.3 identifies the Schur complement (A_{CC}-A_{CF}A_{FF}^{-1}A_{FC}), and §2.4 gives the recursive level solve, residual restriction, and ideal interpolation correction.
- Gander, *50 Years of Time Parallel Time Integration*, §2.5, equation (18) and Theorem 2 (PDF pp. 14–16): the standard Parareal correction recurrence and a conditional error estimate. The assigned discrete estimate was checked from its own proof, not inferred from Gander’s different hypotheses.
- Southworth, *Necessary Conditions and Tight Two-Level Convergence Bounds for Parareal and MGRIT*, §§1–2.2 (arXiv:1810.07292, PDF pp. 1–6): the convergence results impose explicit temporal-approximation assumptions, consistent with the items’ warning that the method name alone supplies no convergence bound.
- Dobrev et al., *Two-Level Convergence Theory for Multigrid Reduction in Time*, Theorem 3.3 (author-hosted PDF, printed pp. 9–10): the searchable source excerpt states simultaneous unitary diagonalizability and stability assumptions and gives a C-point error bound. The full PDF could not be fetched reliably, so its proof was not used to validate any assigned claim.

The exponential supplier proof was also followed through its mean-value, derivative, monotonicity, positivity, and power-order citations. Those hypotheses supply the uses made by the Parareal theorem.

## Remaining defects and blockers

- No confirmed uneditable defect remains in this batch or its required dependencies.
- No batch-level mathematical blocker. The unrelated autopilot `3a-split` blocker for batch 70 remains recorded in run state.

The repaired item passed `reflow` (unchanged), `precheck` (PASS), and the required final `proof-layout` run (1 item, 3 steps, 0 defects). No other item or page was edited.
