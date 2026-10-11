# Step 4 batch reviewer — batch **17**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **17**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["17"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 17 | `kronecker-coefficients-and-internal-products` | A | frobenius-characteristic-and-the-symmetric-group-character-dictionary, specht-modules-and-the-irreducibles-of-the-symmetric-group, outer-products-skew-specht-modules-and-littlewood-richardson |
| 17 | `kronecker-coefficients-and-internal-products-examples` | B | kronecker-coefficients-and-internal-products |

## Your content, in full

### `kronecker-coefficients-and-internal-products` — Kronecker Coefficients and Internal Products

- `def-kronecker-coefficient-and-internal-tensor-product` · definition — Kronecker coefficients and the internal tensor product
- `lem-complex-specht-modules-are-self-dual` · lemma — Complex Specht modules are self-dual with real-valued characters
- `prop-kronecker-coefficient-is-a-three-character-inner-product` · proposition — The Kronecker coefficient is a three-character inner product
- `cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric` · corollary — Kronecker coefficients are nonnegative integers with full S_3 and conjugation symmetries
- `def-internal-product-on-symmetric-functions` · definition — The internal (Kronecker) product on symmetric functions
- `prop-power-sums-diagonalize-the-internal-product` · proposition — Power sums diagonalize the internal product
- `def-first-row-padding-of-a-partition` · definition — First-row padding of a partition
- `def-padded-kronecker-coefficient-sequence` · definition — Padded Kronecker coefficient sequences
- `lem-littlewood-internal-product-outer-compatibility` · lemma — Littlewood's identity - the internal product against an outer product
- `lem-kronecker-reduction-lemma` · lemma — The Kronecker reduction lemma of Pak and Panova
- `thm-row-gap-reduction-and-conditional-k-stability` · theorem — Row-gap reduction and conditional k-stability of Kronecker coefficients
- `rem-no-general-positive-combinatorial-rule-for-kronecker-coefficients-is-known` · remark — No general positive combinatorial rule for Kronecker coefficients is known

### `kronecker-coefficients-and-internal-products-examples` — Kronecker Coefficients and Internal Products — Examples

- `ex-kronecker-products-for-s3` · example — The complete internal product table for S_3
- `cex-first-row-padding-before-the-partition-threshold-is-undefined` · counterexample — First-row padding below the threshold is undefined
- `cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability` · counterexample — Row padding need not preserve a Kronecker coefficient before stability

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `character-polynomials-fi-modules-and-representation-stability` requires `kronecker-coefficients-and-internal-products`
- `murnaghan-stability-via-fi-modules` requires `kronecker-coefficients-and-internal-products`
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
