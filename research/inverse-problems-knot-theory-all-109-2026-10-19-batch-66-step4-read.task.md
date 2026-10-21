# Step 4 batch reviewer — batch **66**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **66**. Step-5 owning group: **v**.
Return `group: "v"` and `batches: ["66"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 66 | `cyclic-branched-covers-and-knot-determinants` | A | knot-exteriors-and-peripheral-systems, seifert-matrices-and-the-alexander-module, alexander-polynomial-from-seifert-matrices |
| 66 | `cyclic-branched-covers-and-knot-determinants-examples` | B | cyclic-branched-covers-and-knot-determinants |

## Your content, in full

### `cyclic-branched-covers-and-knot-determinants` — Cyclic branched covers and knot determinants

- `lem-square-integer-cokernel-finiteness-and-order` · lemma — Finiteness and order of the cokernel of a square integer matrix
- `lem-cyclic-cover-linking-form-inverse-matrix` · lemma — Inverse-matrix formula for a surgery linking form
- `def-cyclic-branched-cover-of-a-knot` · definition — Cyclic branched cover of a knot
- `lem-cyclic-branched-cover-homology-is-alexander-module-coinvariants` · lemma — Homology of a cyclic branched cover as Alexander-module coinvariants
- `lem-branched-cover-surgery-presentation-from-seifert-surface` · lemma — Surgery presentation from a Seifert surface
- `lem-cyclic-branched-cover-seifert-block-matrix` · lemma — Seifert block presentation of cyclic branched-cover homology
- `lem-double-branched-cover-homology-from-seifert-matrix` · lemma — Homology of the double branched cover from a Seifert matrix
- `lem-cyclic-cover-order-root-product-and-rational-sphere-test` · lemma — Root-product test for cyclic branched-cover homology
- `thm-knot-determinant-is-order-of-double-cover-homology` · theorem — Knot determinant is the order of double-cover homology
- `thm-knot-cyclic-cover-order-from-alexander-polynomial` · theorem — Cyclic-cover homology order from the Alexander polynomial

### `cyclic-branched-covers-and-knot-determinants-examples` — Cyclic branched covers and knot determinants — Examples and Counterexamples

- `ex-knot-kt-11-worked-cases` · example — Worked cases: double branched covers of the trefoil, figure-eight knot, and unknot
- `cex-knot-kt-11-boundary-case` · counterexample — A higher cyclic branched cover can have infinite first homology

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cyclic-branched-covers-and-knot-determinants` requires `knot-exteriors-and-peripheral-systems`
- `cyclic-branched-covers-and-knot-determinants` requires `seifert-matrices-and-the-alexander-module`
- `cyclic-branched-covers-and-knot-determinants` requires `alexander-polynomial-from-seifert-matrices`
- `casson-gordon-invariants-and-sliceness-obstructions` requires `cyclic-branched-covers-and-knot-determinants`
- `smooth-sliceness-and-four-ball-genus-obstructions` requires `cyclic-branched-covers-and-knot-determinants`
- `khovanov-to-floer-spectral-sequence` requires `cyclic-branched-covers-and-knot-determinants`
- `branched-cover-correction-terms-and-sliceness` requires `cyclic-branched-covers-and-knot-determinants`
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
