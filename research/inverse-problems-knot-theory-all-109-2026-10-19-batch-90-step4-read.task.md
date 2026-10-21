# Step 4 batch reviewer — batch **90**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **90**. Step-5 owning group: **ad**.
Return `group: "ad"` and `batches: ["90"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 90 | `khovanov-homology-and-jones-categorification` | A | chain-complexes-and-homology, chain-homotopy-and-the-homotopy-category, kauffman-bracket-state-sum-and-jones-polynomial, isotopy-extension-and-embedding-theory-beyond-whitney |
| 90 | `khovanov-homology-and-jones-categorification-examples` | B | khovanov-homology-and-jones-categorification |

## Your content, in full

### `khovanov-homology-and-jones-categorification` — Khovanov homology and Jones categorification

- `lem-marked-knot-cut-tangles-have-relative-reidemeister-movies` · lemma — Cut tangles of marked knots have relative Reidemeister movies
- `def-khovanov-frobenius-algebra-and-cube-of-resolutions` · definition — Khovanov Frobenius algebra and cube of resolutions
- `alg-khovanov-chain-complex-from-diagram` · algorithm — Khovanov chain complex from a diagram
- `lem-khovanov-cube-differential-squares-to-zero` · lemma — The Khovanov cube differential squares to zero
- `def-reduced-khovanov-cohomology-of-a-knot` · definition — Reduced Khovanov cohomology of a knot
- `thm-khovanov-chain-complex-from-diagram-procedure-properties` · theorem — The Khovanov diagram procedure terminates and returns a finite cochain complex
- `lem-khovanov-graded-euler-characteristic-jones-normalization` · lemma — The graded Euler characteristics have the Jones normalization
- `lem-khovanov-signed-local-cancellation-models` · lemma — Signed local cancellation models for the Khovanov Reidemeister moves
- `lem-khovanov-reidemeister-chain-homotopies` · lemma — Khovanov complexes are chain homotopy equivalent under Reidemeister moves
- `thm-khovanov-homology-is-an-oriented-link-invariant` · theorem — Khovanov homology is an oriented link invariant
- `thm-reduced-khovanov-basepoint-and-reidemeister-invariance` · theorem — Reduced Khovanov cohomology is invariant under based moves and basepoint transport
- `thm-khovanov-euler-characteristic-is-jones` · theorem — Khovanov Euler characteristics equal the Jones polynomial

### `khovanov-homology-and-jones-categorification-examples` — Khovanov homology and Jones categorification — Examples and Counterexamples

- `cex-knot-kt-37-boundary-case` · counterexample — Omitting Khovanov normalization breaks Reidemeister I and the Jones Euler characteristic
- `ex-knot-kt-37-worked-cases` · example — Unknot Khovanov and reduced Khovanov groups

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `khovanov-homology-and-jones-categorification` requires `kauffman-bracket-state-sum-and-jones-polynomial`
- `lee-deformation-and-rasmussen-s-invariant` requires `khovanov-homology-and-jones-categorification`
- `knot-cobordism-maps-and-functoriality` requires `khovanov-homology-and-jones-categorification`
- `khovanov-homology-detects-the-unknot` requires `khovanov-homology-and-jones-categorification`
- `khovanov-to-floer-spectral-sequence` requires `khovanov-homology-and-jones-categorification`
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
