# Step 4 batch reviewer — batch **103**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **103**. Step-5 owning group: **af**.
Return `group: "af"` and `batches: ["103"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 103 | `simulation-gradient-estimation-and-simultaneous-perturbation` | A | numerical-differentiation-and-derivative-error-control, stochastic-approximation-and-stochastic-gradient-methods, discrete-continuous-and-pde-adjoint-sensitivities, fisher-information-and-finite-sample-information-bounds, conformal-prediction-and-exchangeable-ranks |
| 103 | `simulation-gradient-estimation-and-simultaneous-perturbation-examples` | B | simulation-gradient-estimation-and-simultaneous-perturbation |

## Your content, in full

### `simulation-gradient-estimation-and-simultaneous-perturbation` — Simulation gradient estimation and simultaneous perturbation

- `cex-uniform-payoff-convergence-does-not-imply-gradient-convergence` · counterexample — Uniform payoff convergence does not imply gradient convergence
- `def-simulation-gradient-objective-and-payoff-oracle` · definition — Simulation objectives and unbiased payoff oracles
- `alg-two-evaluation-spsa-gradient-estimator` · algorithm — Two-evaluation simultaneous-perturbation gradient estimator
- `def-coupled-simulation-finite-difference-estimator` · definition — Coupled finite-difference simulation-gradient estimator
- `def-pathwise-simulation-gradient-estimator` · definition — Pathwise and reparameterized simulation-gradient estimators
- `thm-likelihood-ratio-gradient-identity-on-fixed-support` · theorem — The likelihood-ratio score gradient is unbiased on fixed support
- `prop-coupled-simulation-difference-variance-identity` · proposition — Coupled finite differences have a covariance-controlled variance
- `thm-pathwise-simulation-gradient-is-unbiased-under-envelope` · theorem — A dominated pathwise simulation gradient is unbiased
- `thm-spsa-gradient-bias-is-second-order` · theorem — Symmetric simultaneous perturbations have second-order gradient bias
- `thm-spsa-gradient-has-inverse-step-variance-bound` · theorem — Weighted simulator moments give an inverse-step SPSA variance bound
- `thm-spsa-stochastic-approximation-has-stationary-limit-points` · theorem — Summably biased SPSA has convergent objective values and zero gradient liminf
- `thm-discrete-sde-adjoint-gradient-interchange` · theorem — A finite stochastic adjoint gives the discrete gradient under domination

### `simulation-gradient-estimation-and-simultaneous-perturbation-examples` — Simulation gradient estimation and simultaneous perturbation — Examples

- `ex-moving-support-score-estimator-misses-boundary-term` · example — A moving uniform support contributes a missing score boundary term
- `ex-two-call-spsa-biological-simulator` · example — One two-call SPSA estimate for an expensive biological simulator
- `ex-coupled-differences-reduce-variance` · example — Common random numbers can remove finite-difference noise
- `ex-gaussian-reparameterization-and-score-gradient` · example — Gaussian reparameterization gives two gradient estimators

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `simulation-gradient-estimation-and-simultaneous-perturbation` requires `numerical-differentiation-and-derivative-error-control`
- `simulation-gradient-estimation-and-simultaneous-perturbation` requires `stochastic-approximation-and-stochastic-gradient-methods`
- `simulation-gradient-estimation-and-simultaneous-perturbation` requires `discrete-continuous-and-pde-adjoint-sensitivities`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
