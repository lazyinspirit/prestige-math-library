# Step 4 batch reviewer — batch **52**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **52**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["52"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 52 | `derived-hall-algebras` | A | finitary-ringel-hall-algebras, dg-and-homological-algebra-foundations |
| 52 | `derived-hall-algebras-examples` | B | derived-hall-algebras |

## Your content, in full

### `derived-hall-algebras` — Derived Hall Algebras from dg-Enhanced Categories

- `def-locally-finite-homotopy-type` · definition — Locally finite homotopy types and rational cardinality
- `lem-homotopy-cardinality-base-change` · lemma — Homotopy-cardinality pushforward satisfies base change
- `lem-homotopy-fiber-component-weight-ratio` · lemma — Homotopy-fiber weights reduce to componentwise ratios
- `def-toen-locally-finite-dg-category` · definition — Locally finite dg enhancements for derived Hall theory
- `lem-homotopy-cardinality-pushforward-is-functorial` · lemma — Homotopy-cardinality pushforward is functorial
- `def-toen-derived-hall-algebra` · definition — Toën derived Hall algebra by homotopy-cofiber convolution
- `lem-perfect-dg-modules-have-finite-total-ext` · lemma — Perfect dg modules have finite total Ext
- `lem-derived-hall-moduli-spaces-and-convolution-are-finite` · lemma — Derived Hall moduli types are locally finite and the input span is proper
- `lem-derived-hall-stabilizer-homotopy-sequence` · lemma — Mapping-space homotopy groups give the derived Hall stabilizer weight
- `lem-derived-hall-associativity-squares` · lemma — The two derived Hall correspondence squares are homotopy cartesian
- `thm-toen-derived-hall-number-formula` · theorem — Toën derived Hall numbers have the higher-Ext orbit formula
- `thm-toen-derived-hall-algebra-is-associative-and-unital` · theorem — Toën derived Hall multiplication is associative and unital
- `thm-hereditary-heart-embeds-in-derived-hall-algebra` · theorem — The opposite untwisted Hall algebra of a hereditary heart embeds in the derived Hall algebra
- `rem-toen-kapranov-and-triangle-counts-are-distinct` · remark — Toën, Kapranov, and unweighted triangle counts are distinct constructions

### `derived-hall-algebras-examples` — Derived Hall Algebras: Examples and Counterexamples

- `cex-naive-triangle-orbit-count-omits-derived-homotopy-weight` · counterexample — Unweighted triangle-orbit counts miss the derived homotopy factor
- `ex-hereditary-a2-heart-product-in-derived-hall` · example — The A2 hereditary-heart Hall product inside the derived Hall algebra

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `derived-hall-algebras` requires `finitary-ringel-hall-algebras`
- `derived-hall-algebras` requires `dg-and-homological-algebra-foundations`
- `motivic-hall-algebras-and-integration` requires `derived-hall-algebras`
- `hall-stability-dt-bps-and-wall-crossing` requires `derived-hall-algebras`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

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
