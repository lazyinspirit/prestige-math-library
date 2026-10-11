# Step 4 batch reviewer — batch **16**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **16**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["16"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 16 | `level-one-fock-space-and-residue-crystals` | A | modular-branching-and-the-good-node-crystal, quantum-affine-type-a-and-level-one-fock-space |
| 16 | `level-one-fock-space-and-residue-crystals-examples` | B | level-one-fock-space-and-residue-crystals |

## Your content, in full

### `level-one-fock-space-and-residue-crystals` — Level-One Fock Space and Residue Crystals

- `def-symmetric-group-level-one-residue-and-partition-label-convention` · definition — The symmetric-group level-one residue and partition-label convention
- `lem-level-one-node-order-and-conjugation-dictionary` · lemma — Residue-node reading orders and the conjugation dictionary
- `prop-qg-fock-crystal-arrows-agree-with-the-modular-good-node-operators` · proposition — The QG Fock-crystal arrows are the modular good-node operators
- `thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention` · theorem — The restricted-partition component is the basic crystal in the symmetric-group convention
- `def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention` · definition — Level-one global-basis transition polynomials in the symmetric-group convention
- `lem-general-hecke-cellular-simple-labels-match-the-basic-crystal` · lemma — General Hecke cellular simple labels match the basic crystal

### `level-one-fock-space-and-residue-crystals-examples` — Level-One Fock Space and Residue Crystals — Examples

- `ex-fock-e-and-f-actions-on-shape-two-one-at-e-three` · example — The Fock E- and F-actions on the shape (2,1) at e = 3
- `ex-level-one-charge-zero-crystal-through-rank-four-at-e-three` · example — The charge-zero level-one crystal through rank four at e = 3
- `cex-the-full-fock-space-is-not-automatically-the-irreducible-basic-module` · counterexample — The full Fock space is not automatically the irreducible basic module

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `level-one-fock-space-and-residue-crystals` requires `modular-branching-and-the-good-node-crystal`
- `level-one-fock-space-and-residue-crystals` requires `quantum-affine-type-a-and-level-one-fock-space`
- `ariki-categorification-and-graded-decomposition-numbers` requires `level-one-fock-space-and-residue-crystals`
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
