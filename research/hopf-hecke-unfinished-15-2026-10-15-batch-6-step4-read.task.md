# Step 4 batch reviewer — batch **6**, run `hopf-hecke-unfinished-15-2026-10-15`

You are the only reviewer for batch **6**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["6"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 6 | `hopf-modules-coinvariants-and-the-fundamental-theorem` | A | tensor-coherence-and-algebraic-descent, comodules-matrix-coefficients-and-coalgebra-duality, bialgebras-convolution-and-antipode-identities, hopf-module-tensor-products-and-rigid-duality |
| 6 | `hopf-modules-coinvariants-and-the-fundamental-theorem-examples` | B | hopf-modules-coinvariants-and-the-fundamental-theorem |

## Your content, in full

### `hopf-modules-coinvariants-and-the-fundamental-theorem` — Hopf Modules, Coinvariants, and the Fundamental Theorem

- `def-hh-right-right-hopf-module-and-coinvariants` · definition — Right-right Hopf modules and coinvariants
- `lem-hh-coinvariants-form-a-subspace` · lemma — The coinvariants of a right-right Hopf module form a subspace
- `lem-hh-free-right-right-hopf-module` · lemma — The free right-right Hopf module on a vector space
- `lem-hh-hopf-module-coinvariant-projection` · lemma — The coinvariant projection of a right-right Hopf module
- `thm-hh-fundamental-theorem-of-hopf-modules` · theorem — The fundamental theorem of right-right Hopf modules
- `lem-hh-coinvariants-of-free-hopf-module` · lemma — Coinvariants of a free right-right Hopf module
- `cor-hh-hopf-module-functor-equivalence` · corollary — Right-right Hopf modules are equivalent to vector spaces

### `hopf-modules-coinvariants-and-the-fundamental-theorem-examples` — Hopf Modules, Coinvariants, and the Fundamental Theorem — Examples

- `ex-hh-regular-hopf-module-projection` · example — The regular Hopf module and its projection
- `ex-hh-free-hopf-module-over-group-algebra` · example — The free Hopf module over a group algebra
- `ex-hh-free-hopf-module-over-polynomial-hopf-algebra` · example — The free Hopf module over the polynomial Hopf algebra
- `cex-hh-separate-action-and-coaction-fail-hopf-compatibility` · counterexample — A module and comodule need not satisfy Hopf compatibility

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hopf-modules-coinvariants-and-the-fundamental-theorem` requires `comodules-matrix-coefficients-and-coalgebra-duality`
- `hopf-modules-coinvariants-and-the-fundamental-theorem` requires `bialgebras-convolution-and-antipode-identities`
- `hopf-modules-coinvariants-and-the-fundamental-theorem` requires `hopf-module-tensor-products-and-rigid-duality`
- `finite-hopf-integrals-frobenius-duality-and-maschke` requires `hopf-modules-coinvariants-and-the-fundamental-theorem`
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
