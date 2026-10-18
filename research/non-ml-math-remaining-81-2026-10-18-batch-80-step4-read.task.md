# Step 4 batch reviewer — batch **80**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **80**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["80"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 80 | `jordan-spin-factor-and-alternative-algebras` | A | clifford-universal-algebras-and-pbw, hilbert-space-geometry-and-riesz-representation |
| 80 | `jordan-spin-factor-and-alternative-algebras-examples` | B | jordan-spin-factor-and-alternative-algebras |

## Your content, in full

### `jordan-spin-factor-and-alternative-algebras` — Jordan Algebras, Spin Factors, and Alternative Examples

- `def-jordan-algebra` · definition — Jordan algebra over a field of characteristic not two
- `def-alternative-algebra` · definition — Alternative algebra
- `def-involutive-complex-associative-algebra` · definition — Complex associative algebra with involution
- `def-associative-jordan-product` · definition — Symmetrized product of an associative algebra
- `thm-associative-symmetrization-satisfies-jordan-identity` · theorem — The symmetrized product of an associative algebra is Jordan
- `def-real-spin-factor` · definition — Real spin-factor product
- `thm-real-spin-factor-is-jordan` · theorem — The real spin factor satisfies the Jordan identity
- `prop-real-spin-factor-maps-onto-clifford-jordan-subalgebra` · proposition — The spin factor and the plus-quadratic Clifford convention
- `def-octonion-algebra-by-cayley-dickson` · definition — Real octonions by Cayley–Dickson doubling
- `lem-quaternion-conjugation-is-an-anti-involution` · lemma — Quaternion conjugation is an anti-involution
- `lem-octonion-conjugation-is-an-anti-involution` · lemma — Octonion conjugation is an anti-involution
- `thm-octonions-are-alternative-but-not-associative` · theorem — The Cayley–Dickson octonions are alternative but not associative
- `def-hermitian-three-by-three-octonion-matrix-data` · definition — Hermitian three-by-three octonion matrix data
- `thm-real-albert-algebra-is-jordan` · theorem — The real Albert algebra is a Jordan algebra

### `jordan-spin-factor-and-alternative-algebras-examples` — Jordan Algebras, Spin Factors, and Alternative Examples: Examples and Counterexamples

- `cex-special-jordan-product-need-not-be-associative` · counterexample — The symmetrized product need not be associative
- `cex-self-adjoint-part-need-not-be-associative-subalgebra` · counterexample — The self-adjoint part need not be an associative subalgebra
- `ex-real-two-dimensional-spin-factor` · example — The spin factor on the real plane
- `ex-octonions-are-alternative-but-not-associative` · example — A concrete octonion associator witness
- `ex-albert-offdiagonal-octonion-product` · example — An off-diagonal product in the Albert algebra

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `jordan-spin-factor-and-alternative-algebras` requires `clifford-universal-algebras-and-pbw`
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
