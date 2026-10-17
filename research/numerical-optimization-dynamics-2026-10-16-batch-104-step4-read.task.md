# Step 4 batch reviewer — batch **104**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **104**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["104"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 104 | `multirate-and-partitioned-time-integration` | A | global-ode-and-density-error, imex-and-operator-splitting-methods |
| 104 | `multirate-and-partitioned-time-integration-examples` | B | multirate-and-partitioned-time-integration |

## Your content, in full

### `multirate-and-partitioned-time-integration` — Multirate and partitioned time integration

- `alg-frozen-slow-explicit-fast-euler` · algorithm — Frozen-slow explicit Euler with fast microsteps
- `alg-synchronous-waveform-relaxation-finite-window` · algorithm — Synchronous Picard waveform relaxation on a finite window
- `lem-frozen-slow-euler-variation-bounds` · lemma — Block variation bounds for a frozen-slow Euler step
- `lem-frozen-slow-euler-one-step-stability` · lemma — One-step stability of frozen-slow Euler with fast microsteps
- `cor-cubic-defect-gives-second-order-for-symmetric-multirate-composition` · corollary — Second-order global bound under symmetric coupling and a cubic defect
- `thm-waveform-relaxation-contraction-and-error-bound` · theorem — Contraction and finite-sweep error bound for synchronous waveform relaxation
- `lem-frozen-slow-euler-local-defect-bound` · lemma — Local defect bound for frozen-slow Euler with fast microsteps
- `thm-frozen-slow-euler-global-first-order-error` · theorem — Fixed-time first-order error bound for frozen-slow Euler

### `multirate-and-partitioned-time-integration-examples` — Multirate and partitioned time integration — Examples

- `ex-linear-electromechanical-multirate-block-cost` · example — A dissipative electromechanical toy model under slow-fast blocking
- `ex-coupled-fast-mode-destabilizes-frozen-slow-euler` · example — A stable coupled model has an unstable explicit fast microstep
- `ex-frozen-slow-interpolation-limits-order` · example — Freezing a varying slow waveform leaves a first-order coupling error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `multirate-and-partitioned-time-integration` requires `global-ode-and-density-error`
- `multirate-and-partitioned-time-integration` requires `imex-and-operator-splitting-methods`
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
