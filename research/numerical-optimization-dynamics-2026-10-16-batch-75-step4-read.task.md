# Step 4 batch reviewer — batch **75**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **75**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["75"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 75 | `differential-algebraic-equations-and-consistent-initialization` | A | nonlinear-equations-and-newton-methods, implicit-stiff-time-stepping-and-algebraic-error |
| 75 | `differential-algebraic-equations-and-consistent-initialization-examples` | B | differential-algebraic-equations-and-consistent-initialization |

## Your content, in full

### `differential-algebraic-equations-and-consistent-initialization` — Differential algebraic equations and consistent initialization

- `def-semi-explicit-index-one-dae-and-consistent-initial-data` · definition — Semi-explicit index-one DAEs and consistent initial data
- `def-regular-differentiation-index` · definition — Differentiation index for a regular local semi-explicit DAE
- `thm-index-one-dae-implicit-function-reduction` · theorem — A regular index-one DAE has a local reduced ODE branch
- `lem-index-one-dae-algebraic-residual-to-state-error` · lemma — An index-one algebraic residual locally bounds algebraic state error
- `alg-index-one-dae-consistent-initialization` · algorithm — Finite-budget index-one DAE consistent initialization
- `alg-index-one-dae-backward-euler-stepper` · algorithm — Finite-budget coupled backward Euler for an index-one DAE
- `alg-index-one-dae-bdf2-stepper` · algorithm — Finite-budget coupled constant-step BDF2 for an index-one DAE
- `lem-index-one-dae-backward-euler-local-branch` · lemma — The coupled index-one backward-Euler equations have a local branch
- `lem-index-one-dae-bdf2-local-branch` · lemma — The coupled index-one constant-step BDF2 equations have a local branch
- `thm-index-one-dae-finite-budget-solvers-terminate` · theorem — The finite-budget index-one DAE solvers return a status in finite work
- `thm-index-one-dae-backward-euler-first-order-with-residuals` · theorem — Coupled backward Euler is first order for a regular index-one DAE
- `thm-index-one-dae-bdf2-second-order-with-residuals` · theorem — Coupled constant-step BDF2 is second order for a regular index-one DAE

### `differential-algebraic-equations-and-consistent-initialization-examples` — Differential algebraic equations and consistent initialization — Examples

- `ex-index-one-circuit-consistent-initialization-and-be-step` · example — A capacitor-resistor circuit has one consistent algebraic current
- `ex-index-two-dae-algebraic-residual-does-not-control-state` · example — An index-two DAE can have zero algebraic residual and an arbitrary algebraic variable
- `ex-index-three-pendulum-by-differentiation` · example — The constrained pendulum has differentiation index three

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `differential-algebraic-equations-and-consistent-initialization` requires `nonlinear-equations-and-newton-methods`
- `differential-algebraic-equations-and-consistent-initialization` requires `implicit-stiff-time-stepping-and-algebraic-error`
- `constrained-dynamics-shake-and-rattle` requires `differential-algebraic-equations-and-consistent-initialization`
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
