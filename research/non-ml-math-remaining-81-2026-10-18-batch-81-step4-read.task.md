# Step 4 batch reviewer — batch **81**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **81**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["81"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 81 | `frobenius-algebras-and-two-dimensional-sewing` | A | algebraic-representation-and-tensor-symmetry-map, finite-hopf-integrals-frobenius-duality-and-maschke, braided-and-symmetric-monoidal-categories, morse-critical-points-hessians-and-indices |
| 81 | `frobenius-algebras-and-two-dimensional-sewing-examples` | B | frobenius-algebras-and-two-dimensional-sewing, modular-representations-and-projective-covers |

## Your content, in full

### `frobenius-algebras-and-two-dimensional-sewing` — Frobenius Algebras and Oriented Two-Dimensional Sewing

- `def-oriented-open-closed-surface-category` · definition — The oriented open-closed surface category with colored free boundary
- `def-frobenius-object-and-knowledgeable-sewing-data` · definition — Frobenius objects and typed colored knowledgeable sewing data
- `lem-finite-frobenius-functional-determines-coproduct` · lemma — A Frobenius functional determines a unique Frobenius coproduct
- `lem-relative-surface-collars-and-elementary-decomposition` · lemma — Face-relative Morse decomposition into the ten sewing generators
- `lem-elementary-surface-sewing-relations` · lemma — Elementary colored surface sewings give the Frobenius relations
- `lem-frobenius-sewing-derived-moves` · lemma — Typed algebraic derivations of the Frobenius sewing moves
- `def-relative-open-closed-surface-normal-form` · definition — The marked boundary-relative open-closed normal word
- `lem-boundary-relative-two-dimensional-surface-normal-form` · lemma — The complete colored boundary-relative surface normal-form theorem
- `thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras` · theorem — Closed oriented two-dimensional TQFTs are commutative Frobenius algebras
- `thm-knowledgeable-frobenius-data-classify-open-closed-sewing` · theorem — Typed colored knowledgeable Frobenius data classify open-closed sewing

### `frobenius-algebras-and-two-dimensional-sewing-examples` — Frobenius Algebras and Oriented Two-Dimensional Sewing: Examples and Counterexamples

- `ex-dual-numbers-are-nonsemisimple-symmetric-frobenius` · example — The dual numbers are symmetric Frobenius and nonsemisimple over every field
- `ex-group-algebra-is-symmetric-but-not-closed-sector` · example — A nonabelian group algebra is symmetric Frobenius but not a closed sector

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `frobenius-algebras-and-two-dimensional-sewing` requires `algebraic-representation-and-tensor-symmetry-map`
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
