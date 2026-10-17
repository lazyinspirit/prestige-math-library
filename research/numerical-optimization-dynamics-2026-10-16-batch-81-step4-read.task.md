# Step 4 batch reviewer — batch **81**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **81**. Step-5 owning group: **t**.
Return `group: "t"` and `batches: ["81"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 81 | `matrix-exponential-and-phi-function-actions` | A | krylov-subspaces-arnoldi-and-gmres, matrix-norms-condition-numbers-and-numerical-stability, strongly-continuous-semigroups-and-hille-yosida, krylov-methods-and-lanczos-convergence, matrix-functions-and-scaling-squaring |
| 81 | `matrix-exponential-and-phi-function-actions-examples` | B | matrix-exponential-and-phi-function-actions |

## Your content, in full

### `matrix-exponential-and-phi-function-actions` — Matrix exponential and phi function actions

- `def-phi-functions-by-everywhere-convergent-series` · definition — The phi-function family by everywhere-convergent series
- `def-logarithmic-norm-for-complex-matrices` · definition — The Euclidean logarithmic norm of a complex matrix
- `def-certified-matvec-and-vector-arithmetic` · definition — Normwise certified matrix-vector and vector-step arithmetic
- `lem-matrix-action-defect-variation-of-constants` · lemma — Variation of constants for a finite-matrix action defect
- `lem-phi-series-converges-absolutely` · lemma — The scalar and matrix phi series converge absolutely
- `lem-logarithmic-norm-is-real-and-variational` · lemma — The Euclidean logarithmic norm is a real Rayleigh-quotient maximum
- `alg-scaled-taylor-exponential-action` · algorithm — Finite scaled Taylor action for the matrix exponential
- `thm-phi-recurrence-and-augmented-matrix-actions` · theorem — Phi recurrence and augmented-matrix action identities
- `lem-logarithmic-norm-bounds-the-matrix-exponential` · lemma — The logarithmic norm bounds forward and reverse matrix exponentials
- `thm-scaled-taylor-exponential-action-error-and-work` · theorem — Scaled Taylor action has a finite normwise truncation and roundoff certificate
- `alg-arnoldi-exponential-and-phi-actions` · algorithm — Arnoldi projection for exponential and phi-function actions
- `thm-arnoldi-exponential-action-error-bound` · theorem — Arnoldi action error is the semigroup-weighted residual integral

### `matrix-exponential-and-phi-function-actions-examples` — Matrix exponential and phi function actions — Examples

- `ex-phi-one-at-zero-without-division` · example — The value phi_1(0) is obtained directly from its series
- `ex-stiff-diagonal-arnoldi-action` · example — A one-dimensional Arnoldi projection misses a slow mode of a stiff diagonal matrix
- `ex-nonnormal-transient-action-certificate` · example — A nonnormal action grows transiently while its Arnoldi residual certificate remains valid

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `matrix-exponential-and-phi-function-actions` requires `krylov-methods-and-lanczos-convergence`
- `matrix-exponential-and-phi-function-actions` requires `matrix-functions-and-scaling-squaring`
- `exponential-and-integrating-factor-integrators` requires `matrix-exponential-and-phi-function-actions`
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
