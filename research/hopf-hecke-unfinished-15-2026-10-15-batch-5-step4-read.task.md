# Step 4 batch reviewer — batch **5**, run `hopf-hecke-unfinished-15-2026-10-15`

You are the only reviewer for batch **5**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["5"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 5 | `hopf-module-tensor-products-and-rigid-duality` | A | tensor-coherence-and-algebraic-descent, comodules-matrix-coefficients-and-coalgebra-duality, bialgebras-convolution-and-antipode-identities, hopf-ideals-finite-duals-and-basic-constructions |
| 5 | `hopf-module-tensor-products-and-rigid-duality-examples` | B | hopf-module-tensor-products-and-rigid-duality |

## Your content, in full

### `hopf-module-tensor-products-and-rigid-duality` — Hopf Module Tensor Products and Rigid Duality

- `def-hh-module-category-and-tensor-action` · definition — The module category of a bialgebra and its tensor action
- `thm-hh-bialgebra-module-tensor-coherence` · theorem — Bialgebra module tensor actions and their coherence
- `def-hh-left-dual-of-a-finite-hopf-module` · definition — The left dual of a finite-dimensional Hopf module
- `thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities` · theorem — Evaluation, coevaluation, and triangle identities for left duals
- `lem-hh-right-dual-and-bidual-conditions` · lemma — Right duals and the antipode twist on biduals

### `hopf-module-tensor-products-and-rigid-duality-examples` — Hopf Module Tensor Products and Rigid Duality — Examples

- `ex-hh-bialgebra-tensor-products-without-antipode` · example — Tensor products of modules over a bialgebra without an antipode
- `ex-hh-finite-group-contragredient-and-tensor-dual` · example — The tensor product and contragredient dual of a finite-group module
- `ex-hh-taft-module-dual` · example — A two-dimensional module and its Taft-algebra dual

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hopf-module-tensor-products-and-rigid-duality` requires `comodules-matrix-coefficients-and-coalgebra-duality`
- `hopf-module-tensor-products-and-rigid-duality` requires `bialgebras-convolution-and-antipode-identities`
- `hopf-module-tensor-products-and-rigid-duality` requires `hopf-ideals-finite-duals-and-basic-constructions`
- `hopf-modules-coinvariants-and-the-fundamental-theorem` requires `hopf-module-tensor-products-and-rigid-duality`
- `quasitriangular-hopf-algebras-and-braided-module-categories` requires `hopf-module-tensor-products-and-rigid-duality`
- `drinfeld-doubles-and-yetter-drinfeld-module-constructions` requires `hopf-module-tensor-products-and-rigid-duality`
- `hecke-symmetries-and-generic-quantum-schur-weyl-duality` requires `hopf-module-tensor-products-and-rigid-duality`
---

# Step 4 Alpha batch reviewer — read-only digest, `hopf-hecke-unfinished-15-2026-10-15`

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
