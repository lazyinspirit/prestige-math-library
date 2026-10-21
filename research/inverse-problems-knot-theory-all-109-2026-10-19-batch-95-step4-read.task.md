# Step 4 batch reviewer — batch **95**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **95**. Step-5 owning group: **af**.
Return `group: "af"` and `batches: ["95"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 95 | `epsilon-and-upsilon-concordance-invariants` | A | grid-homology-and-combinatorial-knot-floer-theory, tau-invariant-and-the-four-ball-genus, torus-knots-and-seifert-fibered-exteriors, planar-diagram-codes-and-knot-table-enumeration |
| 95 | `epsilon-and-upsilon-concordance-invariants-examples` | B | epsilon-and-upsilon-concordance-invariants |

## Your content, in full

### `epsilon-and-upsilon-concordance-invariants` — Epsilon and Upsilon concordance invariants

- `def-epsilon-from-filtered-knot-floer-complex` · definition — Epsilon from the filtered knot Floer complex
- `def-upsilon-function-from-filtered-complex` · definition — The Upsilon function from the filtered knot Floer complex
- `lem-slice-knot-floer-complex-stably-equivalent-to-unknot` · lemma — A smooth slice knot has a knot Floer complex stably equivalent to the unknot
- `lem-upsilon-filtered-tower-splitting` · lemma — Filtered tower splitting for the Upsilon minimax
- `def-grid-upsilon-from-grid-complex` · definition — Grid Upsilon from the diagonal grid complex
- `lem-upsilon-nu-minus-four-ball-bound` · lemma — The auxiliary nu-minus threshold is bounded by smooth slice genus
- `thm-smooth-concordance-implies-stable-filtered-knot-floer-equivalence` · theorem — Smooth concordance implies stable filtered equivalence of knot Floer complexes
- `lem-epsilon-stable-equivalence-and-not-a-homomorphism` · lemma — Epsilon is stable-equivalence invariant but not a homomorphism
- `thm-grid-upsilon-equals-oss-upsilon` · theorem — The grid Upsilon function agrees with the original Upsilon invariant
- `thm-upsilon-additivity-mirror-and-genus-bound` · theorem — Upsilon additivity, mirror symmetry, and four-ball genus bound
- `thm-epsilon-upsilon-are-concordance-homomorphism-data` · theorem — Epsilon and Upsilon concordance data

### `epsilon-and-upsilon-concordance-invariants-examples` — Epsilon and Upsilon concordance invariants — Examples and Counterexamples

- `cex-knot-kt-42-boundary-case` · counterexample — A low-weight basis term does not define Upsilon
- `ex-knot-kt-42-worked-cases` · example — Epsilon and Upsilon for the trefoil and its mirror

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `epsilon-and-upsilon-concordance-invariants` requires `grid-homology-and-combinatorial-knot-floer-theory`
- `epsilon-and-upsilon-concordance-invariants` requires `tau-invariant-and-the-four-ball-genus`
- `epsilon-and-upsilon-concordance-invariants` requires `torus-knots-and-seifert-fibered-exteriors`
- `epsilon-and-upsilon-concordance-invariants` requires `planar-diagram-codes-and-knot-table-enumeration`
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
