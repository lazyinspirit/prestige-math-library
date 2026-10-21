# Step 4 batch reviewer — batch **100**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **100**. Step-5 owning group: **ah**.
Return `group: "ah"` and `batches: ["100"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 100 | `khovanov-to-floer-spectral-sequence` | A | spectral-sequences, double-complexes-exact-couples-and-convergence, cyclic-branched-covers-and-knot-determinants, khovanov-homology-and-jones-categorification, grid-homology-and-combinatorial-knot-floer-theory, three-manifold-surgery-presentations-and-kirby-moves |
| 100 | `khovanov-to-floer-spectral-sequence-examples` | B | khovanov-to-floer-spectral-sequence |

## Your content, in full

### `khovanov-to-floer-spectral-sequence` — The Khovanov to Floer spectral sequence

- `def-double-branched-cover-of-an-oriented-link` · definition — Double branched cover of an oriented link
- `lem-os-filtered-convergence-and-invariance-scope` · lemma — Filtered convergence and the scope of the Ozsváth–Szabó construction
- `lem-double-branched-cover-of-an-oriented-link-well-defined` · lemma — Existence and isotopy invariance of the double branched cover of a link
- `lem-double-cover-of-two-arc-rational-tangle-is-solid-torus` · lemma — The double branched cover of the trivial two-arc tangle is a solid torus
- `def-link-surgery-filtered-complex-for-double-branched-cover` · definition — Link-surgery filtered complex for a double branched cover
- `lem-lift-of-two-strand-half-twist-is-annular-dehn-twist` · lemma — A two-strand half-twist lifts to an annular Dehn twist
- `lem-hat-CF-genus-one-lens-space-order-three-rank-three` · lemma — The genus-one hat Floer complex of an order-three lens space has rank three
- `lem-os-link-surgery-filtered-complex-and-triangle` · lemma — Ozsváth–Szabó link-surgery filtered complex and exact triangle
- `lem-os-unlink-resolution-covers-and-floer-tqft` · lemma — Unlink resolution covers and the Heegaard Floer TQFT
- `lem-trefoil-double-branched-cover-is-lens-space-order-three` · lemma — The trefoil double branched cover is a lens space of order three
- `def-reduced-khovanov-cohomology-of-a-based-link-over-f2` · definition — Reduced Khovanov cohomology of a based link over F2
- `lem-os-first-differential-is-reduced-khovanov` · lemma — The first surgery differential is the reduced Khovanov TQFT differential
- `lem-reduced-khovanov-over-f2-basepoint-independence` · lemma — Reduced Khovanov homology over F2 is independent of the chosen link component
- `lem-trefoil-reduced-khovanov-rank-three` · lemma — The reduced Khovanov homology of a trefoil has rank three
- `lem-link-surgery-e-one-differential-is-reduced-khovanov` · lemma — The E1 differential of the link-surgery complex is reduced Khovanov
- `thm-reduced-khovanov-over-f2-link-invariance` · theorem — Reduced Khovanov homology over F2 is an oriented link invariant
- `thm-os-spectral-sequence-for-a-fixed-link-diagram` · theorem — The Ozsváth–Szabó spectral sequence for a fixed link diagram
- `thm-os-khovanov-spectral-sequence-to-branched-cover-floer` · theorem — The Khovanov to branched-cover Heegaard Floer spectral sequence

### `khovanov-to-floer-spectral-sequence-examples` — The Khovanov to Floer spectral sequence — Examples and Counterexamples

- `cex-knot-kt-45-boundary-case` · counterexample — The endpoints do not determine intermediate pages
- `ex-knot-kt-45-worked-cases` · example — The trefoil Khovanov-to-Floer rank calculation

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `khovanov-to-floer-spectral-sequence` requires `cyclic-branched-covers-and-knot-determinants`
- `khovanov-to-floer-spectral-sequence` requires `khovanov-homology-and-jones-categorification`
- `khovanov-to-floer-spectral-sequence` requires `grid-homology-and-combinatorial-knot-floer-theory`
- `khovanov-to-floer-spectral-sequence` requires `three-manifold-surgery-presentations-and-kirby-moves`
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
