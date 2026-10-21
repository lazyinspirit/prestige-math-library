# Step 4 batch reviewer — batch **94**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **94**. Step-5 owning group: **af**.
Return `group: "af"` and `batches: ["94"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 94 | `tau-invariant-and-the-four-ball-genus` | A | smooth-and-topological-knot-concordance, grid-homology-and-combinatorial-knot-floer-theory, knot-cobordism-maps-and-functoriality |
| 94 | `tau-invariant-and-the-four-ball-genus-examples` | B | tau-invariant-and-the-four-ball-genus |

## Your content, in full

### `tau-invariant-and-the-four-ball-genus` — The tau invariant and four-ball genus

- `lem-knot-floer-mirror-complex-duality` · lemma — The normalized filtered complex of a reverse mirror is dual
- `lem-tau-additive-for-filtered-tensor-products` · lemma — The tau level adds under the filtered tensor product
- `lem-tau-of-the-unknot-is-zero` · lemma — The tau level of the standard unknot is zero
- `lem-tau-connected-sum-filtered-tensor-product` · lemma — The filtered knot Floer complex of a connected sum is a tensor product
- `lem-knot-floer-large-surgery-and-filtered-cobordism-input` · lemma — A genus-g knot cobordism bounds the tau difference
- `thm-tau-is-concordance-invariant-and-four-ball-genus-bound` · theorem — Tau is an additive smooth concordance invariant and bounds four-ball genus

### `tau-invariant-and-the-four-ball-genus-examples` — The tau invariant and four-ball genus — Examples and Counterexamples

- `ex-knot-kt-41-worked-cases` · example — Tau of the unknot and trefoils from filtered staircases
- `cex-knot-kt-41-boundary-case` · counterexample — Vanishing tau does not imply smooth sliceness

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `tau-invariant-and-the-four-ball-genus` requires `smooth-and-topological-knot-concordance`
- `tau-invariant-and-the-four-ball-genus` requires `grid-homology-and-combinatorial-knot-floer-theory`
- `tau-invariant-and-the-four-ball-genus` requires `knot-cobordism-maps-and-functoriality`
- `epsilon-and-upsilon-concordance-invariants` requires `tau-invariant-and-the-four-ball-genus`
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
