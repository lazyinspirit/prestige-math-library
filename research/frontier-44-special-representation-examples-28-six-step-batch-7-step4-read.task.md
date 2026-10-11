# Step 4 batch reviewer — batch **7**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **7**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["7"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 7 | `tensor-product-crystals-and-highest-weight-crystal-uniqueness` | A | kashiwara-operators-and-crystal-lattices, tensor-products-of-modules |
| 7 | `tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples` | B | tensor-product-crystals-and-highest-weight-crystal-uniqueness |

## Your content, in full

### `tensor-product-crystals-and-highest-weight-crystal-uniqueness` — Tensor-Product Crystals and Highest-Weight Crystal Uniqueness

- `lem-tensor-products-of-integrable-weight-modules-are-integrable` · lemma — Tensor products of integrable weight modules and of their crystal lattices
- `def-tensor-product-of-crystals` · definition — The tensor product crystal $B_1\otimes B_2$ and its two-case convention
- `lem-i-string-components-of-a-crystal-lattice` · lemma — The $i$-string components of a lattice vector and the single surviving component modulo $q$
- `def-highest-weight-element-and-connected-highest-weight-crystal` · definition — Highest weight elements, lowering-generated subcrystals and highest weight crystals
- `thm-crystal-basis-tensor-product-rule` · theorem — The crystal basis of a tensor product and the two-case operator rule
- `lem-crystal-tensor-product-weight-epsilon-and-phi-formulas` · lemma — The weight, $\varepsilon_i$ and $\varphi_i$ formulas for the tensor product crystal
- `thm-the-highest-weight-crystal-b-lambda-exists` · theorem — The canonical crystal $B(\lambda)$ is a highest weight crystal of highest weight $\lambda$
- `prop-dual-crystal-and-reversal-conventions` · proposition — The dual crystal: reversed arrows, negated weights and swapped $\varepsilon/\varphi$
- `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals` · theorem — Uniqueness: crystal bases of integrable modules decompose into highest weight crystals
- `thm-highest-weight-components-in-a-tensor-product-crystal` · theorem — Highest weight components in a tensor product crystal

### `tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples` — Tensor-Product Crystals and Highest-Weight Crystal Uniqueness — Examples

- `cex-changing-the-tensor-equality-convention-changes-the-crystal` · counterexample — Changing the equality case in the tensor rule breaks the partial-inverse axiom
- `ex-tensor-crystal-b-one-tensor-b-one-for-sl-two` · example — The tensor crystal $B(1)\otimes B(1)$ for $\mathfrak{sl}_2$
- `ex-highest-components-in-a-small-type-a-two-tensor-crystal` · example — Highest components in the $A_2$ tensor crystal $B(\lambda_1)\otimes B(\lambda_1)$
- `ex-dual-crystal-reverses-arrows-and-weights` · example — Dual crystals reverse arrows and weights: two small computations

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `tensor-product-crystals-and-highest-weight-crystal-uniqueness` requires `kashiwara-operators-and-crystal-lattices`
- `balanced-triples-and-global-crystal-bases` requires `tensor-product-crystals-and-highest-weight-crystal-uniqueness`
- `quantum-affine-type-a-and-level-one-fock-space` requires `tensor-product-crystals-and-highest-weight-crystal-uniqueness`
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
