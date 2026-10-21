# Step 4 batch reviewer — batch **93**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **93**. Step-5 owning group: **ae**.
Return `group: "ae"` and `batches: ["93"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 93 | `knot-cobordism-maps-and-functoriality` | A | smooth-and-topological-knot-concordance, khovanov-homology-and-jones-categorification, grid-homology-and-combinatorial-knot-floer-theory, lee-deformation-and-rasmussen-s-invariant, real-clifford-modules-ko-and-abs-orientations |
| 93 | `knot-cobordism-maps-and-functoriality-examples` | B | knot-cobordism-maps-and-functoriality |

## Your content, in full

### `knot-cobordism-maps-and-functoriality` — Knot cobordism maps and functoriality

- `def-barnatan-tangle-cobordism-category` · definition — The Bar-Natan cobordism category
- `def-decorated-link-cobordism-and-floer-target` · definition — Decorated knot cobordisms and the two-color link Floer target
- `lem-khovanov-frobenius-tqft-respects-barnatan-relations` · lemma — The Khovanov Frobenius TQFT respects the Bar-Natan relations
- `lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing` · lemma — Regularity, compactness, and gluing for decorated knot Floer triangles
- `thm-carter-saito-movie-move-equivalence` · theorem — Movie-move equivalence for surface cobordisms
- `def-knot-floer-cobordism-map` · definition — The decorated knot Floer cobordism map
- `lem-knot-floer-cobordism-naturality-and-movie-invariance` · lemma — Naturality and movie invariance of the decorated knot Floer map
- `def-khovanov-cobordism-map-up-to-sign` · definition — The Khovanov map assigned to a generic surface movie
- `lem-barnatan-carter-saito-movie-moves-up-to-sign` · lemma — The even Khovanov map is unchanged up to sign by each movie move
- `thm-barnatan-khovanov-cobordism-functoriality-up-to-sign` · theorem — Functoriality of even integral Khovanov homology up to sign
- `thm-khovanov-and-knot-floer-cobordism-map-scope` · theorem — Scope of the Khovanov and decorated knot Floer cobordism maps

### `knot-cobordism-maps-and-functoriality-examples` — Knot cobordism maps and functoriality — Examples and Counterexamples

- `ex-knot-kt-40-worked-cases` · example — A birth followed by a merging saddle
- `cex-knot-kt-40-boundary-case` · counterexample — A birth and a death do not cancel

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `knot-cobordism-maps-and-functoriality` requires `smooth-and-topological-knot-concordance`
- `knot-cobordism-maps-and-functoriality` requires `khovanov-homology-and-jones-categorification`
- `knot-cobordism-maps-and-functoriality` requires `grid-homology-and-combinatorial-knot-floer-theory`
- `knot-cobordism-maps-and-functoriality` requires `lee-deformation-and-rasmussen-s-invariant`
- `tau-invariant-and-the-four-ball-genus` requires `knot-cobordism-maps-and-functoriality`
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
