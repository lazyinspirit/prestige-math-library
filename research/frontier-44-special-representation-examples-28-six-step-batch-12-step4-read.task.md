# Step 4 batch reviewer — batch **12**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **12**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["12"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 12 | `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison` | A | principal-series-representations-of-gl-n-over-a-finite-field, young-diagrams-tableaux-and-permutation-modules, integral-specht-modules-and-modular-simple-modules, free-modules-and-exact-sequences, noetherian-rings-and-hilbert-basis, the-hook-length-formula-and-rsk-correspondence, modular-representations-and-projective-covers |
| 12 | `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison-examples` | B | ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison |

## Your content, in full

### `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison` — Ordinary Hecke Specht Polytabloids and Signed Murphy Comparison

- `def-dj-bridge-row-column-permutation-modules-and-polytabloids` · definition — Hecke row permutation modules and ordinary Dipper-James polytabloids
- `lem-dj-bridge-row-permutation-module-standard-action` · lemma — The row permutation module: distinguished basis and Hecke action
- `lem-dj-bridge-permutation-form-invariance-and-restriction` · lemma — The permutation form is H-contravariant and restricts to the DJ form
- `lem-dj-bridge-sign-automorphism-and-star-dual` · lemma — The Hecke sign automorphism, pullback and contragredient dual
- `lem-dj-bridge-parabolic-double-coset-annihilation` · lemma — Row symmetrizers and signed column symmetrizers vanish outside dominance
- `lem-dj-bridge-murphy-cellular-basis-and-cell-form` · lemma — The Murphy cellular basis, the cell law and the Murphy form
- `lem-dj-bridge-integral-murphy-and-polytabloid-straightening` · lemma — Integral polytabloid straightening for the comparison
- `lem-dj-bridge-theta-transport-of-the-cellular-structure` · lemma — Theta transports the Murphy cellular structure to the signed cell modules
- `thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual` · theorem — Murphy cells are the same-shape contragredient Specht duals
- `thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell` · theorem — Ordinary Specht modules are the signed conjugate Murphy cells
- `cor-dj-bridge-specialization-and-composition-multiplicity-dictionary` · corollary — Polytabloid specialization and the exact signed multiplicity dictionary

### `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison-examples` — Ordinary Hecke Specht Polytabloids and Signed Murphy Comparison — Examples

- `cex-dj-bridge-untwisted-conjugation-changes-the-module` · counterexample — Untwisted conjugation changes the module
- `ex-dj-bridge-row-and-column-shapes-at-rank-three` · example — The row and column Specht conventions in rank three
- `ex-dj-bridge-singular-two-tableau-shape` · example — The two-tableau pairing at a singular parameter

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `type-a-hecke-specht-modules-and-cellular-bases` requires `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison`
- `modular-branching-and-the-good-node-crystal` requires `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison`
- `ariki-categorification-and-graded-decomposition-numbers` requires `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison`
---

# Step 4 Alpha batch reviewer — read-only digest, `frontier-44-special-representation-examples-28-six-step`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
