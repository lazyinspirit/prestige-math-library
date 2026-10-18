# Step 4 batch reviewer — batch **45**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **45**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["45"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 45 | `overlapping-schwarz-and-stable-subspace-decompositions` | A | multigrid-methods-and-complexity, ceas-lemma-and-aubin-nitsche-error-estimates, mixed-finite-elements-and-stokes-stability |
| 45 | `overlapping-schwarz-and-stable-subspace-decompositions-examples` | B | overlapping-schwarz-and-stable-subspace-decompositions |

## Your content, in full

### `overlapping-schwarz-and-stable-subspace-decompositions` — Overlapping Schwarz and stable subspace decompositions

- `lem-schwarz-p1-product-cutoff-interpolation-energy-estimate` · lemma — Elementwise P1 product-cutoff energy estimate
- `def-overlapping-schwarz-subspace-correction-data` · definition — Finite-dimensional Schwarz subspace-correction data
- `lem-schwarz-local-matrices-are-well-defined` · lemma — Schwarz local matrices and exact solves are well defined
- `thm-two-level-p1-poisson-stable-decomposition` · theorem — Stable two-level P1 decomposition for structured Poisson meshes
- `lem-schwarz-local-corrections-are-energy-orthogonal-projections` · lemma — Exact Schwarz local corrections are energy-orthogonal projections
- `lem-schwarz-additive-inverse-is-local-energy-minimum` · lemma — The additive Schwarz inverse minimizes summed local energy
- `thm-additive-schwarz-stable-decomposition-condition-number` · theorem — Additive Schwarz condition bound from stable decomposition and synthesis
- `thm-multiplicative-schwarz-exact-sweep-contraction` · theorem — Multiplicative Schwarz projection sweeps contract with explicit overlap constants
- `thm-two-level-p1-poisson-additive-and-multiplicative-bounds` · theorem — Two-level overlapping P1 Poisson bounds with explicit H-overlap dependence

### `overlapping-schwarz-and-stable-subspace-decompositions-examples` — Overlapping Schwarz and stable subspace decompositions — Examples

- `ex-schwarz-overlap-shrinking-decomposition-bound` · example — The stable-splitting guarantee worsens as overlap shrinks
- `ex-one-level-overlapping-schwarz-condition-number-growth` · example — One-level point-patch Schwarz loses uniformity on 1D Poisson
- `cex-schwarz-naive-coarse-space-misses-conductive-mode` · counterexample — A one-node coarse space misses a high-conductance channel
- `ex-schwarz-two-level-1d-poisson-coarse-plus-odd-corrections` · example — A uniform two-level 1D Poisson correction bound
- `ex-schwarz-inexact-local-solves-spectral-equivalence-bound` · example — Inexact local solves enter through spectral-equivalence constants

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `overlapping-schwarz-and-stable-subspace-decompositions` requires `multigrid-methods-and-complexity`
- `overlapping-schwarz-and-stable-subspace-decompositions` requires `mixed-finite-elements-and-stokes-stability`
- `substructuring-feti-dp-and-bddc-preconditioners` requires `overlapping-schwarz-and-stable-subspace-decompositions`
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
