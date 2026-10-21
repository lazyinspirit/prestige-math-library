# Step 4 batch reviewer — batch **59**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **59**. Step-5 owning group: **t**.
Return `group: "t"` and `batches: ["59"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 59 | `seifert-surfaces-and-knot-genus` | A | codimension-one-foliations-and-secondary-classes, crossing-signs-writhe-and-linking-number, smooth-surgery-traces-and-handle-trading |
| 59 | `seifert-surfaces-and-knot-genus-examples` | B | seifert-surfaces-and-knot-genus |

## Your content, in full

### `seifert-surfaces-and-knot-genus` — Seifert surfaces and knot genus

- `alg-seifert-surface-from-diagram` · algorithm — Seifert disk-and-band construction from an oriented knot diagram
- `def-oriented-seifert-surface` · definition — Oriented Seifert surfaces in the three-sphere
- `lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms` · lemma — Smooth Jordan disks and extension of prescribed boundary collars
- `thm-oriented-knot-framing-classes-form-z-torsor` · theorem — Normal framing classes relative to a spanning surface are classified by winding
- `lem-seifert-bands-embedded-orientable-boundary-correct` · lemma — Seifert disks and bands form an embedded oriented spanning surface
- `thm-seifert-surface-from-diagram-procedure-properties` · theorem — Termination and finite output of the Seifert diagram procedure
- `thm-every-oriented-knot-bounds-a-seifert-surface` · theorem — Every smooth oriented knot in $S^3$ bounds a Seifert surface
- `def-oriented-seifert-surface-and-knot-genus` · definition — Seifert surfaces and smooth knot genus
- `thm-seifert-algorithm-boundary-euler-and-genus` · theorem — Euler characteristic and genus of a Seifert disk-and-band surface
- `thm-seifert-zero-framing-and-framing-integer` · theorem — A Seifert framing has zero self-linking

### `seifert-surfaces-and-knot-genus-examples` — Seifert surfaces and knot genus — Examples and Counterexamples

- `ex-knot-kt-04-worked-cases` · example — Worked Seifert-algorithm counts for the trefoil, figure-eight, and kinked unknot
- `cex-knot-kt-04-boundary-case` · counterexample — A genus-one spanning surface for the unknot is not minimal

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `seifert-surfaces-and-knot-genus` requires `crossing-signs-writhe-and-linking-number`
- `connected-sums-and-prime-decomposition` requires `seifert-surfaces-and-knot-genus`
- `seifert-matrices-and-the-alexander-module` requires `seifert-surfaces-and-knot-genus`
- `smooth-and-topological-knot-concordance` requires `seifert-surfaces-and-knot-genus`
- `grid-homology-and-combinatorial-knot-floer-theory` requires `seifert-surfaces-and-knot-genus`
- `planar-diagram-codes-and-knot-table-enumeration` requires `seifert-surfaces-and-knot-genus`
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
