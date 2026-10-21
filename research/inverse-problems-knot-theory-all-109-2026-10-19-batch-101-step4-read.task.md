# Step 4 batch reviewer — batch **101**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **101**. Step-5 owning group: **ah**.
Return `group: "ah"` and `batches: ["101"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 101 | `branched-cover-correction-terms-and-sliceness` | A | the-whitney-trick-and-surgery-below-the-middle-dimension, cyclic-branched-covers-and-knot-determinants, smooth-and-topological-knot-concordance, grid-homology-and-combinatorial-knot-floer-theory, dehn-surgery-on-knots-and-homology, real-clifford-modules-ko-and-abs-orientations, relative-smooth-triangulation-and-bundle-fitting, divisors-riemann-roch-and-duality |
| 101 | `branched-cover-correction-terms-and-sliceness-examples` | B | branched-cover-correction-terms-and-sliceness |

## Your content, in full

### `branched-cover-correction-terms-and-sliceness` — Branched-cover correction terms and sliceness

- `def-heegaard-floer-plus-infinity-absolute-grading` · definition — Heegaard Floer plus and infinity groups and absolute grading for rational homology spheres
- `lem-rational-homology-four-ball-admits-spinc` · lemma — A compact oriented rational homology four-ball admits a Spin-c structure
- `lem-spin-c-structures-form-an-h2-torsor` · lemma — Spin-c structures on a fixed oriented bundle form an H2 torsor
- `def-heegaard-floer-correction-term` · definition — Heegaard Floer correction term
- `lem-rational-ball-spin-c-extension-set-metabolizer` · lemma — Spin-c extensions over a rational ball form a metabolizer coset
- `lem-heegaard-floer-correction-term-heegaard-invariance` · lemma — Heegaard invariance and well-definedness of the correction term
- `lem-rational-ball-spin-c-cobordism-map-inequality` · lemma — Correction-term inequality from a rational-ball cobordism map
- `lem-heegaard-floer-correction-terms-lens-space-lp1` · lemma — Lens-space correction-term formula for L(p,1)
- `lem-rational-ball-b2-bounds-lens-l4` · lemma — A rational homology ball bounded by L(4,1)
- `thm-correction-term-obstruction-from-rational-ball` · theorem — Correction terms vanish on extending Spin-c structures over rational homology balls
- `lem-slice-disk-double-cover-is-rational-homology-ball` · lemma — The smooth slice-disk double cover is a rational homology ball
- `cor-double-cover-d-invariant-obstructs-smooth-slice` · corollary — Double-cover correction terms obstruct smooth sliceness

### `branched-cover-correction-terms-and-sliceness-examples` — Branched-cover correction terms and sliceness — Examples and Counterexamples

- `ex-knot-kt-46-worked-cases` · example — L(3,1) correction terms in the stated orientation convention
- `cex-knot-kt-46-boundary-case` · counterexample — A nonextendible Spin-c structure with nonzero d on a rational-ball boundary

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `branched-cover-correction-terms-and-sliceness` requires `cyclic-branched-covers-and-knot-determinants`
- `branched-cover-correction-terms-and-sliceness` requires `smooth-and-topological-knot-concordance`
- `branched-cover-correction-terms-and-sliceness` requires `grid-homology-and-combinatorial-knot-floer-theory`
- `branched-cover-correction-terms-and-sliceness` requires `dehn-surgery-on-knots-and-homology`
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
