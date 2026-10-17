# Step 4 batch reviewer — batch **102**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **102**. Step-5 owning group: **af**.
Return `group: "af"` and `batches: ["102"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 102 | `numerical-identifiability-and-optimal-experiment-design` | A | response-surfaces-and-optimal-design, inequality-kkt-duality-and-optimality-certificates, proximal-gradient-and-accelerated-composite-optimization, gauss-newton-and-levenberg-marquardt-methods, discrete-continuous-and-pde-adjoint-sensitivities |
| 102 | `numerical-identifiability-and-optimal-experiment-design-examples` | B | numerical-identifiability-and-optimal-experiment-design |

## Your content, in full

### `numerical-identifiability-and-optimal-experiment-design` — Numerical identifiability and optimal experiment design

- `def-nonlinear-experimental-design-and-local-identifiability` · definition — Finite nonlinear observation designs, local identifiability, and weighted information
- `lem-computed-sensitivity-singular-value-perturbation` · lemma — Computed sensitivity errors perturb every singular value by at most their operator-norm error
- `lem-logdet-information-perturbation-bound` · lemma — A uniform positive eigenvalue floor controls log-determinant error
- `alg-finite-budget-multiplicative-d-optimal-design` · algorithm — Finite-budget multiplicative update for approximate D-optimal design
- `lem-information-matrix-perturbation-bound` · lemma — Computed Jacobian error controls the weighted information-matrix error
- `rem-gauss-newton-information-is-not-full-hessian` · remark — The Gauss–Newton information term omits residual curvature from the full Hessian
- `thm-full-rank-sensitivity-implies-local-identifiability` · theorem — Full column rank of the sensitivity Jacobian implies local identifiability
- `thm-local-information-positive-definite-iff-full-column-rank` · theorem — The weighted information matrix is positive definite exactly at full sensitivity rank
- `thm-local-parameter-perturbation-bound` · theorem — A lower singular-value bound and Lipschitz Jacobian control local parameter error
- `thm-multiplicative-design-update-well-defined-and-terminates` · theorem — Finite-budget multiplicative design updates preserve the simplex and nonsingularity
- `thm-uniform-sensitivity-error-controls-design-gap` · theorem — Uniform information errors control approximate D-optimal design gaps
- `thm-equivalence-violation-bounds-d-optimal-design-gap` · theorem — The D-equivalence violation bounds the finite-budget design's log-determinant gap

### `numerical-identifiability-and-optimal-experiment-design-examples` — Numerical identifiability and optimal experiment design — Examples

- `ex-cubic-observation-is-locally-identifiable-with-zero-jacobian` · example — A zero Jacobian does not prevent local identifiability of the cubic map
- `ex-first-order-kinetic-rates-are-confounded-by-total-decay` · example — Parallel first-order decay identifies only the sum of two rates
- `ex-local-identifiability-does-not-imply-global-identifiability` · example — The observation theta squared is locally identifiable but globally aliased
- `ex-solver-tolerance-can-reverse-a-design-ranking` · example — A small sensitivity solve error can reverse a two-design ranking
- `ex-endpoint-sensors-give-a-d-optimal-linear-time-design` · example — Endpoint sensor times are D-optimal for an intercept-slope model

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `numerical-identifiability-and-optimal-experiment-design` requires `inequality-kkt-duality-and-optimality-certificates`
- `numerical-identifiability-and-optimal-experiment-design` requires `proximal-gradient-and-accelerated-composite-optimization`
- `numerical-identifiability-and-optimal-experiment-design` requires `gauss-newton-and-levenberg-marquardt-methods`
- `numerical-identifiability-and-optimal-experiment-design` requires `discrete-continuous-and-pde-adjoint-sensitivities`
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
