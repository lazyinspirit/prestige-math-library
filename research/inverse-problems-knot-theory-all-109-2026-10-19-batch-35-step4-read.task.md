# Step 4 batch reviewer — batch **35**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **35**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["35"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 35 | `manifold-and-physical-constraint-inversion` | A | inverse-problems-identifiability-and-stability, nonlinear-inverse-problems-and-tangential-cone-conditions, riemannian-optimization-on-stiefel-and-grassmann-manifolds, constrained-variational-problems-and-variational-inequalities, hilbert-space-geometry-and-riesz-representation |
| 35 | `manifold-and-physical-constraint-inversion-examples` | B | manifold-and-physical-constraint-inversion |

## Your content, in full

### `manifold-and-physical-constraint-inversion` — Physical constraints and manifold-valued inversion

- `def-ip-admissible-constraint-class` · definition — Admissible constraint classes and restricted identifiability
- `prop-ip-constraints-can-remove-kernel-ambiguity` · proposition — A constraint removes kernel ambiguity exactly when its differences avoid the kernel
- `alg-ip-stiefel-constrained-regularized-gradient` · algorithm — Finite-budget regularized gradient on a Stiefel constraint
- `lem-ip-stiefel-gradient-finite-budget-return-and-feasibility` · lemma — The Stiefel gradient procedure returns a feasible iterate within its finite budget

### `manifold-and-physical-constraint-inversion-examples` — Physical constraints and manifold-valued inversion — Examples and Counterexamples

- `ex-ip-pde-inadmissible-state-rejected-before-solve` · example — A negative finite-difference PDE state is rejected before solving
- `ex-ip-constraint-eliminates-a-kernel-direction` · example — A line constraint removes one kernel direction
- `ex-ip-halfspace-constraint-leaves-continuous-kernel-ambiguity` · example — A half-space constraint leaves a continuous kernel ambiguity

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `manifold-and-physical-constraint-inversion` requires `inverse-problems-identifiability-and-stability`
- `manifold-and-physical-constraint-inversion` requires `nonlinear-inverse-problems-and-tangential-cone-conditions`
- `inverse-problem-benchmarking-and-shift` requires `manifold-and-physical-constraint-inversion`
---

# Step 4 Alpha batch reviewer — read-only digest, `inverse-problems-knot-theory-all-109-2026-10-19`

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
