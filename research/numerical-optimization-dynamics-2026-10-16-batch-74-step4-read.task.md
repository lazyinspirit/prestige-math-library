# Step 4 batch reviewer — batch **74**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **74**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["74"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 74 | `rosenbrock-and-linearly-implicit-methods` | A | finite-precision-direct-factorizations, nonlinear-equations-and-newton-methods, implicit-stiff-time-stepping-and-algebraic-error |
| 74 | `rosenbrock-and-linearly-implicit-methods-examples` | B | rosenbrock-and-linearly-implicit-methods |

## Your content, in full

### `rosenbrock-and-linearly-implicit-methods` — Rosenbrock and linearly implicit methods

- `def-rosenbrock-euler-step-map` · definition — The Rosenbrock–Euler step map with an exact or approximate Jacobian
- `lem-rosenbrock-shifted-matrix-invertibility-bound` · lemma — A small shifted Jacobian has an explicit inverse bound
- `lem-rosenbrock-shifted-inverse-perturbation` · lemma — Perturbing a shifted Jacobian perturbs its inverse explicitly
- `lem-rosenbrock-stage-residual-certificate` · lemma — A computed shifted-system residual has a certified upper bound
- `alg-rosenbrock-shifted-qr-solver-with-residual-certificate` · algorithm — Reusable Householder QR solve for a shifted matrix with residual status
- `lem-rosenbrock-euler-jacobian-approximation-defect` · lemma — The one-stage update has an explicit Jacobian-approximation defect
- `prop-rosenbrock-euler-is-one-newton-correction-of-backward-euler` · proposition — Autonomous Rosenbrock–Euler is one Newton correction of backward Euler
- `alg-rosenbrock-euler-step` · algorithm — Finite-precision Rosenbrock–Euler step with residual status
- `alg-two-stage-rosenbrock-w-method` · algorithm — Two-stage second-order Rosenbrock W-method with shared factorization
- `lem-rosenbrock-euler-local-defect-and-residual-error` · lemma — Rosenbrock–Euler has an explicit one-step defect and solve-residual allowance
- `lem-two-stage-rosenbrock-local-defect-and-residual-error` · lemma — The two-stage Rosenbrock W-method has a cubic local defect and explicit stage-residual allowance
- `prop-two-stage-rosenbrock-reuses-one-factorization-and-two-solves` · proposition — The two-stage Rosenbrock update reuses one shifted factorization for two solves
- `thm-rosenbrock-computational-steps-terminate-with-finite-work` · theorem — The Rosenbrock factorization and stage procedures terminate with finite work
- `thm-rosenbrock-euler-scalar-a-and-l-stability` · theorem — The Rosenbrock–Euler scalar stability function is A-stable exactly for gamma at least one half
- `thm-two-stage-rosenbrock-scalar-l-stability` · theorem — The selected exact-J two-stage Rosenbrock method is scalar L-stable
- `thm-rosenbrock-euler-global-first-order-error` · theorem — Rosenbrock–Euler has a first-order global error bound on a common tube
- `thm-two-stage-rosenbrock-global-order-two` · theorem — The selected two-stage Rosenbrock W-method has a second-order global error bound

### `rosenbrock-and-linearly-implicit-methods-examples` — Rosenbrock and linearly implicit methods — Examples

- `cex-omitting-rosenbrock-stage-correction-loses-order-two` · counterexample — Omitting the second-stage correction destroys cubic local accuracy
- `ex-two-stage-rosenbrock-factorization-reuse` · example — Two stage right-hand sides reuse one shifted-Jacobian factorization
- `ex-rosenbrock-euler-stiff-decay-and-backward-euler` · example — Rosenbrock–Euler damps a stiff scalar decay with the backward-Euler factor
- `cex-approximate-jacobian-breaks-stiff-damping` · counterexample — A bounded approximate Jacobian can destroy Rosenbrock stiff damping

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `rosenbrock-and-linearly-implicit-methods` requires `finite-precision-direct-factorizations`
- `rosenbrock-and-linearly-implicit-methods` requires `nonlinear-equations-and-newton-methods`
- `rosenbrock-and-linearly-implicit-methods` requires `implicit-stiff-time-stepping-and-algebraic-error`
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
