# Step 4 batch reviewer — batch **20**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **20**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["20"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 20 | `multigrid-methods-and-complexity` | A | preconditioner-algorithms-and-residual-metrics, lax-milgram-and-weak-elliptic-solutions |
| 20 | `multigrid-methods-and-complexity-examples` | B | multigrid-methods-and-complexity |

## Your content, in full

### `multigrid-methods-and-complexity` — Multigrid methods and complexity

- `def-galerkin-coarse-grid-correction` · definition — Galerkin coarse matrices and the exact coarse-correction error map
- `lem-zero-boundary-piecewise-affine-functions-lie-in-h1zero` · lemma — Continuous piecewise-affine functions with zero endpoints lie in H1-zero
- `thm-galerkin-coarse-correction-is-energy-orthogonal-projector` · theorem — The Galerkin coarse correction is an energy-orthogonal projector
- `def-symmetric-two-grid-error-operator` · definition — The symmetric two-grid error map from a pre-smoother and Galerkin correction
- `alg-aggregation-based-algebraic-multigrid-hierarchy` · algorithm — Finite strength-graph aggregation and Galerkin hierarchy with explicit statuses
- `lem-one-dimensional-poisson-smoothing-and-approximation` · lemma — Level-uniform 1D Poisson smoothing and approximation bounds
- `alg-finite-galerkin-v-cycle` · algorithm — Finite recursive Galerkin V- and W-cycle for an SPD hierarchy
- `thm-two-grid-energy-contraction-under-joint-estimate` · theorem — A joint smoothing-correction estimate gives symmetric two-grid energy contraction
- `thm-aggregation-amg-hierarchy-preserves-spd-and-terminates` · theorem — Finite aggregation AMG preserves the SPD matrix class and returns a status
- `thm-galerkin-v-cycle-work-recurrence-master-regimes` · theorem — Work recurrence for fixed-coarsening multigrid cycles in all three regimes
- `thm-one-dimensional-poisson-two-grid-energy-contraction` · theorem — The symmetric 1D Poisson two-grid cycle is uniformly contractive

### `multigrid-methods-and-complexity-examples` — Multigrid methods and complexity — Examples

- `ex-one-dimensional-poisson-coarse-correction-removes-linear-error` · example — A linear error on the one-dimensional Poisson coarse space is removed exactly
- `ex-v-and-w-cycle-costs-in-two-dimensions` · example — V- and W-cycle work under two-dimensional four-to-one coarsening
- `ex-one-dimensional-poisson-two-grid-uniform-contraction` · example — One high-frequency mode in the finite one-dimensional Poisson two-grid cycle

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `overlapping-schwarz-and-stable-subspace-decompositions` requires `multigrid-methods-and-complexity`
- `nonlinear-full-approximation-multigrid` requires `multigrid-methods-and-complexity`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
