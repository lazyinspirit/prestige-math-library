# Step 4 batch reviewer — batch **38**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **38**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["38"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 38 | `quantum-query-lower-bounds-and-search-optimality` | A | grover-search-and-invariant-plane-rotations, computational-problems-promises-and-cost-models, reversible-arithmetic-and-oracle-conversion, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, registers-tensor-products-and-partial-trace, uniform-circuit-families-promise-problems-and-complexity |
| 38 | `quantum-query-lower-bounds-and-search-optimality-examples` | B | quantum-query-lower-bounds-and-search-optimality |

## Your content, in full

### `quantum-query-lower-bounds-and-search-optimality` — Quantum Query Lower Bounds and Search Optimality

- `lem-qa-14-coherent-query-normal-form` · lemma — Coherent normal form for finite quantum query algorithms
- `def-qa-14-boolean-search-query-model` · definition — Boolean oracle query model for search lower bounds
- `alg-qa-14-zero-completion-query-simulation` · algorithm — Reversible zero-completion of an N-address bit query
- `def-qa-14-query-mismatch-projectors` · definition — Query-register projectors and mismatch indicators
- `def-qa-14-search-promise` · definition — All-zero versus exactly-one-marked search promise
- `lem-qa-14-state-distance-from-acceptance-gap` · lemma — Acceptance-gap lower bound on final-state distance
- `lem-qa-14-one-query-hybrid-bound` · lemma — One-query oracle perturbation bound
- `thm-qa-14-zero-completion-query-simulation-correct` · theorem — Zero-completed query simulation is exact and uses one raw query
- `alg-qa-14-one-marked-search-with-verification` · algorithm — Fixed-one Grover search with candidate verification
- `lem-qa-14-cumulative-hybrid-bound` · lemma — Cumulative hybrid distance for a T-query algorithm
- `lem-qa-14-aggregate-hybrid-squared-distance` · lemma — Aggregate hybrid distance budget over all marked indices
- `lem-qa-14-chebyshev-recurrence-matches-grover-success` · lemma — The rational Grover recurrence equals the success probability
- `thm-qa-14-grover-search-upper-query-cost` · theorem — Grover search upper-bound query cost
- `thm-qa-14-bbbv-search-lower-bound` · theorem — BBBV hybrid lower bound for unstructured search
- `thm-qa-14-grover-search-upper-success` · theorem — Grover search upper-bound success guarantee
- `thm-qa-14-optimal-search-query-complexity` · theorem — Bounded-error unstructured search query complexity is Theta of square root N

### `quantum-query-lower-bounds-and-search-optimality-examples` — Quantum Query Lower Bounds and Search Optimality — Examples

- `ex-qa-14-hybrid-budget-for-n-small` · example — Finite hybrid budget for a four-address search space
- `cex-qa-14-query-parallelism-does-not-give-exponential-search` · counterexample — One uniform phase query gives small trace-distance advantage

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `quantum-query-lower-bounds-and-search-optimality` requires `grover-search-and-invariant-plane-rotations`
- `quantum-query-lower-bounds-and-search-optimality` requires `computational-problems-promises-and-cost-models`
- `quantum-query-lower-bounds-and-search-optimality` requires `reversible-arithmetic-and-oracle-conversion`
- `quantum-query-lower-bounds-and-search-optimality` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-query-lower-bounds-and-search-optimality` requires `registers-tensor-products-and-partial-trace`
- `quantum-query-lower-bounds-and-search-optimality` requires `uniform-circuit-families-promise-problems-and-complexity`
---

# Step 4 Alpha batch reviewer — read-only digest, `quantum-computing-algorithms-60-2026-10-15`

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
