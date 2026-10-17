# Step 4 batch reviewer — batch **69**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **69**. Step-5 owning group: **z**.
Return `group: "z"` and `batches: ["69"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 69 | `global-optimization-and-certified-branch-and-bound` | A | matrix-norms-condition-numbers-and-numerical-stability, nonlinear-equations-and-newton-methods, inequality-kkt-duality-and-optimality-certificates, outward-rounded-interval-and-ball-arithmetic, barrier-and-primal-dual-interior-point-methods, gaussian-process-priors-and-posterior-laws |
| 69 | `global-optimization-and-certified-branch-and-bound-examples` | B | global-optimization-and-certified-branch-and-bound |

## Your content, in full

### `global-optimization-and-certified-branch-and-bound` — Global optimization and certified branch and bound

- `def-mccormick-bilinear-box-envelope` · definition — McCormick envelope for a bilinear term on a box
- `def-spatial-global-optimization-problem` · definition — Compact-box global minimization problems
- `lem-positive-noise-regularizes-observed-covariance` · lemma — Positive Gaussian observation noise makes the observed covariance positive definite
- `alg-finite-candidate-gp-acquisition-search` · algorithm — Finite-candidate Gaussian-process acquisition search with explicit statuses
- `def-spatial-box-bound-certificate` · definition — Certified lower, upper, and emptiness bounds on a box
- `lem-mccormick-envelope-equals-graph-convex-hull` · lemma — The four McCormick inequalities give the convex hull of a bilinear graph over a box
- `alg-certified-spatial-branch-and-bound` · algorithm — Finite-budget certified spatial branch and bound
- `thm-adaptive-finite-candidate-gp-search-posterior-correct` · theorem — Adaptive finite-candidate Gaussian-process search uses the correct sequential posterior
- `thm-finite-candidate-gp-search-terminates` · theorem — Finite-candidate Gaussian-process acquisition search terminates within its budget
- `thm-finite-budget-spatial-bnb-terminates` · theorem — Finite-budget spatial branch and bound always returns a declared status
- `thm-spatial-bnb-eventual-epsilon-termination` · theorem — Consistent bounds and exhaustive longest-side branching give eventual epsilon termination
- `thm-spatial-bnb-gap-certificate-sound` · theorem — A spatial branch-and-bound gap certificate proves global epsilon-optimality
- `alg-interval-dag-box-enclosure-and-bound` · algorithm — Outward-rounded interval enclosures for factorable expression DAGs on boxes
- `def-factorable-box-convex-relaxation-interface` · definition — Certified factorable convex relaxations on a box
- `alg-factorable-mccormick-box-relaxation` · algorithm — Finite McCormick convex relaxation construction for factorable box problems
- `alg-lipschitz-midpoint-box-lower-bound` · algorithm — Validated Lipschitz midpoint lower bounds on boxes
- `thm-factorable-dual-certificate-is-valid-box-lower-bound` · theorem — A verified dual certificate for a McCormick relaxation is a valid global lower bound
- `thm-interval-lipschitz-bound-sound-consistent` · theorem — Outward interval and Lipschitz midpoint bounds are sound and consistent under refinement
- `alg-certified-constraint-emptiness-search` · algorithm — Certified constraint-emptiness search with a finite query budget
- `alg-bounded-mixed-integer-branch-and-bound` · algorithm — Bounded mixed-integer branch and bound with a finite enumeration fallback
- `thm-uniform-constraint-margin-enables-empty-box-detection` · theorem — A positive constraint-separation margin permits finite certified empty-box detection
- `thm-bounded-mixed-integer-finite-budget-terminates` · theorem — Finite-budget bounded mixed-integer branch and bound terminates
- `thm-bounded-mixed-integer-gap-certificate-sound` · theorem — A bounded mixed-integer gap certificate proves global epsilon-optimality

### `global-optimization-and-certified-branch-and-bound-examples` — Global optimization and certified branch and bound — Examples

- `ex-noisy-biological-simulator-finite-candidate-gp-acquisition` · example — A noisy biological simulator search is conditional on its chosen Gaussian-process model
- `cex-invalid-spatial-lower-bound-can-prune-global-minimum` · counterexample — An invalid lower bound can prune the true global minimizer
- `ex-multimodal-polynomial-spatial-bnb-gap-certificate` · example — A multimodal quartic receives an exact spatial branch-and-bound gap certificate
- `ex-bounded-engineering-design-mixed-integer-gap-certificate` · example — A bounded engineering design has an exact mixed-integer gap certificate

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `global-optimization-and-certified-branch-and-bound` requires `nonlinear-equations-and-newton-methods`
- `global-optimization-and-certified-branch-and-bound` requires `inequality-kkt-duality-and-optimality-certificates`
- `global-optimization-and-certified-branch-and-bound` requires `outward-rounded-interval-and-ball-arithmetic`
- `global-optimization-and-certified-branch-and-bound` requires `barrier-and-primal-dual-interior-point-methods`
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
