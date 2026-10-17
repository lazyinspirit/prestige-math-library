# Step 3a reader report — batch 22

Run: `numerical-optimization-dynamics-2026-10-16`  
Reader: `reader-22`  
Scope: batch `22` only

## Opened inventory

Assigned pages:

- A page `nonlinear-boundary-value-solvers`: [page source](../library/numerical-differential-equations-and-stochastic-dynamics/nonlinear-boundary-value-solvers.md)
- B page `nonlinear-boundary-value-solvers-examples`: [page source](../library/numerical-differential-equations-and-stochastic-dynamics/nonlinear-boundary-value-solvers-examples.md)

Assigned items, read in the authored supplier/consumer sequence:

- A page: `def-nonlinear-two-point-bvp-and-boundary-residual`, `lem-c1-ode-flow-on-common-tube`, `def-certified-ivp-approximation-and-sensitivity-interface`, `def-linearized-two-point-bvp-operator-and-conditioning`, `def-midpoint-collocation-residual-for-bvps`, `prop-multiple-shooting-residual-zero-iff-bvp-solution`, `prop-shooting-residual-zero-iff-bvp-solution`, `alg-midpoint-collocation-for-nonlinear-bvps`, `lem-midpoint-bvp-discrete-linearized-inverse`, `prop-midpoint-residual-zero-is-collocation`, `prop-multiple-shooting-residual-block-jacobian`, `prop-shooting-residual-derivative`, `alg-multiple-shooting-for-nonlinear-bvps`, `alg-single-shooting-for-nonlinear-bvps`, `thm-midpoint-collocation-local-branch-and-error-budget`, `cor-local-newton-convergence-for-midpoint-bvp-collocation`, `cor-local-newton-convergence-for-shooting-bvp-residual`, and `thm-shooting-residual-error-budget`.
- B examples: `ex-midpoint-collocation-has-two-branches`, `ex-unstable-single-shooting-amplifies-error`, and `ex-newton-shooting-fails-from-singular-start`.

The dependency items opened for the batch were `def-first-order-ode-initial-value-problem-and-solution`, `def-interval`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `thm-picard-lindelof-local-existence-and-uniqueness`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `thm-gronwall-integral-inequality`, `thm-heine-cantor-metric`, `thm-norm-inequality-for-the-vector-valued-integral`, `thm-mean-value-inequality`, `thm-chain-rule-for-total-derivatives`, `def-c-one-map-and-local-inverse`, `def-total-derivative-in-euclidean-space`, `def-jacobian-matrix-and-gradient`, `thm-euclidean-space-complete`, `thm-banach-fixed-point`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `def-invertible-euclidean-linear-map`, `lem-newton-contraction-near-an-invertible-derivative`, and `lem-geometric-sequence-null`.

The current-run batch-3 suppliers opened were `alg-newton-correction-for-vector-residuals`, `lem-vector-newton-correction-error-under-lipschitz-jacobian`, `alg-finite-budget-newton-for-vector-residuals`, `thm-updated-jacobian-newton-local-quadratic-convergence`, and `lem-finite-budget-newton-work-and-status`. Their supporting published claims opened for the Newton proof checks were `def-euclidean-linear-map`, `lem-euclidean-linear-maps-have-matrices-and-are-bounded`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-metric-topology`, `def-metric-ball`, `thm-algebra-of-total-derivatives`, `thm-mean-value-inequality-for-total-derivatives`, `thm-total-derivative-computes-directional-and-partial-derivatives`, `def-vector-valued-derivative-and-integral`, `cor-vector-valued-ftc-and-lipschitz-bound`, `thm-linearity-of-the-integral`, `thm-monotonicity-of-the-integral`, `thm-continuous-implies-integrable`, and `thm-newton-leibniz-with-interior-derivative`.

The two page prerequisites were also opened: `library/real-analysis/picard-lindelof-and-first-order-odes.md` and `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/nonlinear-equations-and-newton-methods.md`. I read the assigned batch manifest, reader brief, relevant batch-22 proof-contract entries, and the applicable item/page and algorithm rules in `SCHEMA.md` and `WORKFLOW.md`.

## Repairs and evidence

All edits were confined to assigned in-flight items. The batch-22 proof-contract entries were updated to match each repaired statement or proof. The existing author risk-review notes remain identified as pre-reader records; they are not treated as verdicts. None of the repaired items had a `verification.judge` record to remove.

| Item and location | Repair and evidence |
|---|---|
| `prop-multiple-shooting-residual-zero-iff-bvp-solution`, Statement and Proof 2.1–3.1 | Required each segment IVP curve to be (C^1) and the endpoint pair to lie in (D_B). The old premise of a unique IVP solution alone did not supply the BVP definition's (C^1) requirement or ensure the boundary row was defined. The revised hypotheses justify the join and boundary evaluation. |
| `prop-shooting-residual-zero-iff-bvp-solution`, Statement and Proof 1.1–1.2 | Required (C^1) exact shots and admissible endpoint pairs on the stated open set. The BVP definition requires a (C^1) trajectory and defines the exact residual only when its endpoint pair lies in (D_B). |
| `cor-local-newton-convergence-for-shooting-bvp-residual`, Statement and Proof 1.1–2.1 | Added the exact certified-evaluator interface on an open neighborhood and the (C^1) boundary-map condition required by single shooting and its Jacobian formula. Made the initial-trial quantifier and quadratic error estimate explicit. (Rin C^2) alone did not establish that the exact flow met the evaluator interface or that the algorithm could form its boundary Jacobian. The proof now chooses the Newton ball inside the intersection of the residual and evaluator neighborhoods. |
| `thm-shooting-residual-error-budget`, Statement and Proof 3.1 | Made (r>0) and the open neighborhood of the closed ball explicit. The trajectory estimate now states the common (C^1), compact convex tube and open initial-state neighborhood required by `lem-c1-ode-flow-on-common-tube`; this supplies the Volterra equations used with Gronwall. The initial-state residual estimate remains separate from this additional trajectory-estimate premise. |
| `lem-c1-ode-flow-on-common-tube`, Proof 1.2 | Changed the maximal-interval contradiction to cover an endpoint at or before (b). The extended coefficient is defined on an open interval containing ([a,b]), so local continuation applies at (b) as well. |
| `lem-midpoint-bvp-discrete-linearized-inverse`, Proof 1.1 | Made the same endpoint continuation case explicit for the fundamental matrix (X), whose coefficient is extended to an open interval containing ([a,b]). |
| `thm-midpoint-collocation-local-branch-and-error-budget`, Facts & Assumptions and Proof 1.1, 4.1 | Specified coordinatewise use of the scalar Taylor theorem for the (d)-component exact curve. For the residual remainder, applied the scalar theorem to each coordinate along the segment and used the two-node row locality and fixed (d) to obtain (C_G) independent of (h,N). A scalar Taylor result used on the full (d(N+1))-dimensional residual would not by itself establish the stated mesh-uniform block-norm remainder. |

The independent mathematical check found the midpoint transfer recurrence, boundary Schur complement, uniform inverse estimate, contraction branch, local Newton consequences, and three example calculations sound under their stated hypotheses. The examples' source contexts agree with the items: Driscoll–Braun, *Fundamentals of Numerical Computation*, §10.1.1 (multiple BVP solutions), §10.2.1–10.2.2 (shooting composition and the decaying-mode sensitivity), §10.4.3 (residual-to-error identity and need for a uniform inverse bound), and §10.5.1 (nonlinear finite-difference solution context; not the item's midpoint scheme). Verfürth, *Numerical Methods and Stochastics*, §I.1.3 (printed p. 9 / PDF p. 10), states initial-data differentiability and the variational IVP; §§I.4.1 and I.4.3 (printed pp. 19–24 / PDF pp. 20–25) cover simple and multiple shooting. The local sensitivity and midpoint inverse proofs here are supplied in the items rather than imported from those statements.

## Page verdicts

- `nonlinear-boundary-value-solvers` (A): the title, prerequisites, inventory, and summary accurately describe the revised draft results. No page prose edit was needed.
- `nonlinear-boundary-value-solvers-examples` (B): the summary accurately describes all three checked examples. No B-page prose edit was made.

## Uneditable findings

None. No confirmed defect remained in the assigned pages or items, the opened batch-3 suppliers, or the published dependencies reviewed for these claims.

## Blocker

None. At the last autopilot status recomputation before this report was written, the run was still running in Step 3a and batch 22 was still missing its reader result. The report and empty findings artifact are this batch's result.

## Coverage note

All two assigned pages, all 21 assigned items, the stated item dependencies, both prerequisite pages, and the supporting claims listed above were opened. The cited FNC passages and Verfürth passages used for context were checked at the locators recorded above; the cited Hairer Newton reference and every bibliography entry were not independently audited because no proof claim here depended on importing them. The first pass read `thm-updated-jacobian-newton-local-quadratic-convergence` before its `lem-newton-contraction-near-an-invertible-derivative` and `lem-geometric-sequence-null` suppliers; both supplier items and their relevant statements were subsequently opened and checked before final conclusions. This order deviation is recorded rather than described as a fully topological first pass.
