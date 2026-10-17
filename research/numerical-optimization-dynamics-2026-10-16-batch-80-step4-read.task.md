# Step 4 batch reviewer — batch **80**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **80**. Step-5 owning group: **ai**.
Return `group: "ai"` and `batches: ["80"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 80 | `interacting-particle-mean-field-and-vortex-blob-error` | A | picard-lindelof-and-first-order-odes, one-step-ode-consistency-and-local-error, composite-quadrature-rules, global-ode-and-density-error, runge-kutta-methods-and-order, geometric-numerical-integration |
| 80 | `interacting-particle-mean-field-and-vortex-blob-error-examples` | B | interacting-particle-mean-field-and-vortex-blob-error |

## Your content, in full

### `interacting-particle-mean-field-and-vortex-blob-error` — Interacting particle mean field and vortex blob error

- `def-bounded-lipschitz-dual-norm-for-signed-measures` · definition — Bounded-Lipschitz dual discrepancy for finite signed measures
- `def-globally-lipschitz-mean-field-kernel` · definition — Globally Lipschitz mean-field interaction kernel
- `def-mollified-biot-savart-vortex-kernel` · definition — Smooth mollified Biot-Savart kernel
- `def-p-one-wasserstein-one` · definition — The coupling definition of the 1-Wasserstein distance
- `def-signed-split-transport-cost` · definition — Sign-preserving transport cost for finite signed measures
- `lem-weighted-continuous-path-space-is-complete` · lemma — Completeness of the weighted continuous trajectory space
- `alg-tensor-simpson-force-evaluator` · algorithm — Tensor composite Simpson force evaluator on a rectangle
- `def-characteristic-mean-field-solution` · definition — Characteristic solution of a probability mean-field equation
- `def-mean-field-and-weighted-vortex-particle-systems` · definition — Equal-probability mean-field and weighted signed vortex particle systems
- `def-signed-vorticity-characteristic-solution` · definition — Characteristic solution for a finite signed regularized vorticity
- `lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz` · lemma — The mollified Biot-Savart kernel is smooth and globally Lipschitz
- `lem-signed-bl-norm-dominated-by-split-coupling-cost` · lemma — The bounded-Lipschitz dual discrepancy is bounded by split transport cost
- `lem-w1-is-finite-on-probability-measures-with-finite-first-moment` · lemma — The coupling infimum is finite for finite-first-moment probabilities
- `def-separable-regularized-vortex-interaction-hamiltonian` · definition — Separable regularized vortex-inspired Hamiltonian comparison system
- `thm-dobrushin-w1-stability-for-characteristic-flows` · theorem — Dobrushin stability in 1-Wasserstein distance for mean-field flows
- `thm-empirical-measures-solve-mean-field-equation-exactly` · theorem — Exact weak mean-field identity for empirical particle measures
- `thm-mean-field-characteristic-flow-exists-uniquely` · theorem — Global characteristic flow for a globally Lipschitz mean-field kernel
- `thm-mean-field-characteristics-satisfy-weak-transport-identity` · theorem — Weak transport identity for characteristic mean-field solutions
- `thm-mollified-biot-savart-kernel-has-l1-consistency` · theorem — L1 consistency of the mollified Biot-Savart kernel
- `thm-signed-dobrushin-stability-with-force-defect` · theorem — Signed Dobrushin stability with bounded force defects
- `thm-signed-regularized-vorticity-characteristics-preserve-total-variation` · theorem — Characteristic existence and total-variation preservation for regularized signed vorticity
- `thm-w1-dobrushin-stability-with-force-defect` · theorem — Probability W1 stability under bounded force defects
- `thm-weighted-signed-vortex-particles-satisfy-weak-transport-identity` · theorem — Exact weak transport identity for weighted signed vortex particles
- `lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube` · lemma — One-step Lipschitz bound for classical RK4 on an admitted tube
- `thm-separable-vortex-inspired-leapfrog-is-reversible-symplectic-volume-preserving-order-two` · theorem — Local geometric properties and second-order error of the separable regularized vortex-inspired leapfrog
- `thm-tensor-simpson-force-error` · theorem — Tensor composite Simpson error for a two-dimensional force integral
- `thm-rk4-global-error-for-regularized-vortex-particles` · theorem — Fourth-order global error for RK4 on a regularized vortex particle tube
- `thm-mean-field-vortex-blob-error-budget` · theorem — Mean-field vortex blob error budget with signed particles, force quadrature, and RK4

### `interacting-particle-mean-field-and-vortex-blob-error-examples` — Interacting particle mean field and vortex blob error — Examples

- `ex-softened-newtonian-particles-not-collision-model` · example — Softened Newtonian particles do not specify the physical collision force
- `ex-dimension-dependent-empirical-w1-error` · example — A dimension-dependent lower bound for empirical W1 error
- `ex-mixed-sign-vorticity-needs-signed-distance` · example — A mixed-sign vorticity is not a probability for W1
- `ex-globally-lipschitz-alignment-model` · example — A globally Lipschitz alignment model with exact mean trajectory
- `ex-same-sign-smooth-vortex-blob-approximation` · example — Same-sign smooth vortex density and probability blob error budget

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `interacting-particle-mean-field-and-vortex-blob-error` requires `one-step-ode-consistency-and-local-error`
- `interacting-particle-mean-field-and-vortex-blob-error` requires `composite-quadrature-rules`
- `interacting-particle-mean-field-and-vortex-blob-error` requires `global-ode-and-density-error`
- `interacting-particle-mean-field-and-vortex-blob-error` requires `runge-kutta-methods-and-order`
- `interacting-particle-mean-field-and-vortex-blob-error` requires `geometric-numerical-integration`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` requires `interacting-particle-mean-field-and-vortex-blob-error`
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
