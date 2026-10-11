# Step 4 batch reviewer — batch **11**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **11**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["11"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 11 | `rim-hooks-and-the-murnaghan-nakayama-rule` | A | frobenius-characteristic-and-the-symmetric-group-character-dictionary, outer-products-skew-specht-modules-and-littlewood-richardson, the-hook-length-formula-and-rsk-correspondence |
| 11 | `rim-hooks-and-the-murnaghan-nakayama-rule-examples` | B | rim-hooks-and-the-murnaghan-nakayama-rule |

## Your content, in full

### `rim-hooks-and-the-murnaghan-nakayama-rule` — Rim Hooks and the Murnaghan–Nakayama Rule

- `def-removable-border-strip-and-height` · definition — Removable border strips and their height
- `lem-hooks-correspond-to-removable-border-strips` · lemma — Hooks of a partition correspond bijectively to removable border strips
- `thm-determinantal-form-of-a-specht-character` · theorem — The determinantal form of a Specht character
- `lem-character-value-on-a-full-cycle-is-supported-on-hooks` · lemma — The value of an irreducible character on a full cycle is supported on hooks
- `lem-alternating-hook-induction-cancels-disconnected-rim-removals` · lemma — Alternating hook induction cancels disconnected rim removals
- `lem-restriction-to-two-block-subgroup-has-lr-multiplicities` · lemma — Restriction to the two-block Young subgroup has LR multiplicities
- `thm-murnaghan-nakayama-character-rule` · theorem — The Murnaghan–Nakayama character rule
- `cor-no-removable-cycle-length-strip-forces-a-character-zero` · corollary — A missing removable strip of the cycle length forces a zero character value
- `cor-hook-divisibility-defect-zero-vanishing-criterion` · corollary — The hook-divisibility vanishing criterion
- `prop-r-cycle-virtual-character-filter` · proposition — The $r$-cycle virtual character filter
- `thm-triangular-fixed-tabloid-reconstruction-of-the-character-table` · theorem — Fixed-tabloid reconstruction of the character table (Fox–Mullineux)

### `rim-hooks-and-the-murnaghan-nakayama-rule-examples` — Rim Hooks and the Murnaghan–Nakayama Rule — Examples

- `ex-murnaghan-nakayama-for-shape-five-four-four` · example — Murnaghan–Nakayama values of the character of (5,4,4)
- `ex-the-s4-character-table-by-rim-hook-recursion` · example — The S_4 character table by rim-hook recursion
- `cex-a-disconnected-rim-set-is-not-a-border-strip` · counterexample — A disconnected removable rim set is not a border strip
- `ex-r-cycle-filter-for-nu-three-two-and-r-three` · example — The 3-cycle filter for ν=(3,2) on S_8
- `ex-s5-character-table-by-fixed-tabloid-reconstruction` · example — The S_5 character table by fixed-tabloid reconstruction

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `type-a-hecke-specht-modules-and-cellular-bases` requires `rim-hooks-and-the-murnaghan-nakayama-rule`
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
