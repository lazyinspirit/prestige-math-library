# Step 3a reader report — batch 65

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `65`

## Live run and scope

The active autopilot status reports the run as `running`. Batch 65 was not listed among the read-stage batches already covered. The run status also reports repeated failures for `split-51` and `collect-36`; both are outside this assignment. No batch-65 blocker was identified.

## Opened pages

- `library/machine-learning/neural-odes-and-continuous-normalizing-flows.md`
- `library/machine-learning/neural-odes-and-continuous-normalizing-flows-examples.md`

Both files contain YAML frontmatter only, preserve `page_layout: compact-v1`, and have no Markdown summary body.

## Opened items

Assigned batch items:

- `def-neural-ode`
- `thm-neural-ode-global-smooth-flow`
- `thm-instantaneous-change-of-variables-for-ode-flow`
- `alg-adjoint-sensitivity-method`
- `ex-numerical-adjoint-error`

Published suppliers opened for the assigned claims, in supplier-first order:

- `thm-mean-value-inequality-for-total-derivatives`
- `thm-extreme-value-metric`
- `thm-heine-borel-rn`
- `thm-picard-lindelof-local-existence-and-uniqueness`
- `thm-existence-and-uniqueness-of-a-maximal-ode-solution`
- `thm-gronwall-integral-inequality`
- `lem-ode-extension-from-a-compact-interior-region`
- `thm-smooth-dependence-of-ode-solutions-on-parameters`
- `thm-fundamental-theorem-for-nonautonomous-smooth-odes`
- `thm-c1-dependence-of-solutions-on-initial-data`
- `thm-chain-rule-for-total-derivatives`
- `thm-continuous-flow-log-density-equation`
- `def-countable-choice`
- `def-first-order-ode-initial-value-problem-and-solution`
- `def-measure-with-density`
- `def-determinant-of-a-square-matrix`
- `def-natural-logarithm`
- `cor-determinant-is-a-polynomial-in-the-matrix-entries`
- `thm-algebra-of-continuous-functions`
- `thm-algebra-of-derivatives`
- `thm-leibniz-determinant-is-alternating-multilinear-and-normalized`
- `thm-real-square-matrix-invertible-iff-determinant-nonzero`
- `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`
- `thm-intermediate-value`
- `thm-logarithm-derivative-and-integral`
- `thm-continuous-ode-adjoint-gradient-formula`
- `thm-discrete-adjoint-gradient-recursion`
- `def-parameterized-finite-state-step-objective`
- `def-real-exponential-function-and-e`
- `thm-derivative-of-exponential`
- `lem-derivative-algebra-and-chain-rules`
- `thm-exponential-addition-formula`
- `cor-exponential-reciprocal-and-positivity`

## Review, edits, and evidence

- `def-neural-ode`: the initial-value problem and trajectory definition preserve the state, parameter, and time domains; it makes no unsupported existence or accuracy claim. Its references follow the complete definition.
- `thm-neural-ode-global-smooth-flow`: the local Lipschitz condition follows from smoothness on a compact local cylinder. The stated origin bound and global state-Lipschitz bound give linear growth; Gronwall bounds trajectories on the finite interval, and the compact-interior extension supplier rules out a finite endpoint before $0$ or $T$. The finite composition of local smooth flows gives the stated parameter and state dependence. Uniqueness gives the reverse-time inverse, and the local variational equation yields the displayed Jacobian equation. No missing hypothesis or unjustified conclusion was found.
- `thm-instantaneous-change-of-variables-for-ode-flow`: its finite-time flow meets the $C^1$-diffeomorphism hypotheses of the published log-density result, and Countable Choice is stated explicitly. The density identity and divergence formula follow with the stated endpoint convention. No defect was found.
- `alg-adjoint-sensitivity-method`: the input conditions, exact state and adjoint IVPs, and returned vector match the continuous adjoint gradient formula. I added `justified_by` entries for `thm-neural-ode-global-smooth-flow` and `thm-continuous-ode-adjoint-gradient-formula`, which supply the state flow and adjoint solution used by the procedure. The item has no proof steps, citations, or derivations in its proof contract, so that contract was not changed; it had no `verification.judge` record to remove. Reflow reported unchanged; precheck reported `0 checked, 0 failing`; proof-layout reported `1 items, 0 steps, 0 defects`.
- ex-numerical-adjoint-error: $u_2(t)=e^{θt}$, so the exact objective gradient is $e^θ$. The $N$-step Euler objective is $(1+θ/N)^N$, with derivative $(1+θ/N)^{N-1}$. At $θ=-100$, the $N=50$ and $N=100$ gradients are respectively $-1$ and $0$, both different from the positive exact gradient. The witness asserts no general solver-error bound. No defect was found.

No diagrams occur in the assigned pages or items. The two page inventories agree with the batch manifest, and neither page contains a summary.

## Page verdicts

- `neural-odes-and-continuous-normalizing-flows`: **clean**. Frontmatter inventory, draft status, and compact layout match the manifest; the body is empty.
- `neural-odes-and-continuous-normalizing-flows-examples`: **clean**. Frontmatter inventory, draft status, and compact layout match the manifest; the body is empty.

## Unedited defects

No confirmed mathematical defect in an assigned item or a supplier statement needed by the assigned claims remains. The findings JSON therefore has an empty `findings` array.

## Coverage limitation

I opened all five assigned items, both assigned pages, every unique dependency listed in the batch manifest, and the direct dependencies listed by `thm-continuous-flow-log-density-equation` (38 item files total). I did not recursively re-audit every prerequisite behind those published suppliers, and I did not browse their cited literature; the ODE, change-of-variables, adjoint, and finite Euler calculations were checkable from the opened local statements and proofs. No uncertainty about the assigned mathematics remained.
