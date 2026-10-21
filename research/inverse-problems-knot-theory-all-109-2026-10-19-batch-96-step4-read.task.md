# Step 4 batch reviewer — batch **96**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **96**. Step-5 owning group: **af**.
Return `group: "af"` and `batches: ["96"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 96 | `knot-floer-genus-and-fiberedness-detection` | A | satellite-knots-and-jsj-tori, grid-homology-and-combinatorial-knot-floer-theory |
| 96 | `knot-floer-genus-and-fiberedness-detection-examples` | B | knot-floer-genus-and-fiberedness-detection |

## Your content, in full

### `knot-floer-genus-and-fiberedness-detection` — Knot Floer genus and fibering detection

- `def-balanced-taut-sutured-manifold-and-product-region` · definition — Balanced taut sutured manifolds and characteristic product regions
- `lem-poincare-homology-sphere-is-nontrivial-integral-homology-sphere` · lemma — The Poincaré sphere is a nontrivial integral homology sphere
- `def-sutured-floer-chain-complex` · definition — Sutured Floer chain complexes and homology notation
- `def-knot-relative-spinc-structure` · definition — Relative Spin-c structures and Chern classes for sutured knot exteriors
- `def-top-alexander-grading-of-knot-floer-homology` · definition — The absolute Alexander grading of knot Floer homology
- `lem-ni-holomorphic-disk-and-jsj-analytic-inputs` · lemma — Analytic inputs for Ni's sutured knot Floer decompositions
- `thm-knot-floer-detects-seifert-genus` · theorem — Knot Floer homology detects the Seifert genus
- `lem-ni-fiberedness-sutured-floer-and-gabai-inputs` · lemma — Ni's sutured Floer and Gabai product criterion
- `thm-fibered-knot-has-rank-one-top-knot-floer-homology` · theorem — A fibered knot has rank-one top knot Floer homology
- `thm-rank-one-top-knot-floer-detects-fiberedness` · theorem — Rank-one top knot Floer homology detects fibering

### `knot-floer-genus-and-fiberedness-detection-examples` — Knot Floer genus and fibering detection — Examples and Counterexamples

- `cex-knot-kt-43-boundary-case` · counterexample — A null-homologous unknot in a homology sphere can have reducible exterior
- `ex-knot-kt-43-worked-cases` · example — Trefoil and 5_2 knot Floer genus and fibering cases

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `knot-floer-genus-and-fiberedness-detection` requires `satellite-knots-and-jsj-tori`
- `knot-floer-genus-and-fiberedness-detection` requires `grid-homology-and-combinatorial-knot-floer-theory`
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
