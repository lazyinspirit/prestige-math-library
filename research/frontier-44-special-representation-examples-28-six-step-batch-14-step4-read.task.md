# Step 4 batch reviewer — batch **14**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **14**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["14"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 14 | `cores-quotients-and-blocks-of-symmetric-groups` | A | integral-specht-modules-and-modular-simple-modules, type-a-hecke-specht-modules-and-cellular-bases, grothendieck-groups-and-graded-cartan-pairings, artinian-rings-and-length, blocks-defect-groups-and-the-brauer-homomorphism |
| 14 | `cores-quotients-and-blocks-of-symmetric-groups-examples` | B | cores-quotients-and-blocks-of-symmetric-groups |

## Your content, in full

### `cores-quotients-and-blocks-of-symmetric-groups` — Cores, Quotients, and Blocks of Symmetric Groups

- `def-beta-set-and-e-runner-abacus-of-a-partition` · definition — Beta-sets, the shift, and the e-runner abacus of a partition
- `lem-hooks-are-bead-gap-pairs-on-an-abacus` · lemma — Hooks are bead-gap pairs on the abacus
- `def-e-core-e-quotient-and-e-weight` · definition — The e-core, the e-quotient, and the e-weight
- `lem-virtual-weyl-combinations-detect-q-schur-block-separation` · lemma — Virtual Weyl combinations detect q-Schur block separation
- `thm-e-core-is-independent-of-the-rim-hook-removal-order` · theorem — The e-core is independent of the rim hook removal order
- `thm-e-quotient-controls-hooks-divisible-by-e` · theorem — The e-quotient controls the hooks of e-divisible length
- `prop-core-quotient-size-and-weight-formula` · proposition — The core-quotient size formula defines the weight
- `thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core` · theorem — q-Schur Weyl modules are in the same block iff their labels have the same e-core
- `thm-weight-one-block-decomposition-pattern` · theorem — The weight-one block decomposition pattern
- `cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core` · corollary — Type-A Hecke Specht modules are in the same block iff their labels have the same e-core
- `thm-nakayama-block-classification-for-symmetric-groups` · theorem — Nakayama block classification for symmetric groups
- `prop-weight-zero-symmetric-group-blocks-are-defect-zero` · proposition — Weight-zero symmetric-group blocks are defect zero
- `rem-block-weight-is-not-the-same-as-numerical-defect` · remark — Block weight is not the same as numerical defect

### `cores-quotients-and-blocks-of-symmetric-groups-examples` — Cores, Quotients, and Blocks of Symmetric Groups — Examples

- `ex-three-core-and-three-quotient-by-abacus` · example — The three-core and three-quotient of (6,5,2,1^3) by abacus
- `ex-three-core-of-four-three-two-one` · example — The three-core of (4,3,2,1) by two removal orders
- `cex-the-same-number-of-removable-p-hooks-does-not-replace-the-core-test` · counterexample — Equal removable-hook counts do not replace the core test
- `ex-a-weight-one-block-decomposition-matrix` · example — The complete weight-one decomposition matrix for S3 at p=3

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cores-quotients-and-blocks-of-symmetric-groups` requires `type-a-hecke-specht-modules-and-cellular-bases`
- `modular-branching-and-the-good-node-crystal` requires `cores-quotients-and-blocks-of-symmetric-groups`
- `cyclotomic-hecke-and-quiver-hecke-algebras` requires `cores-quotients-and-blocks-of-symmetric-groups`
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
