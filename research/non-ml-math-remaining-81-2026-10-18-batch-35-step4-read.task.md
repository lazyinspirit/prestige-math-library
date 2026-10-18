# Step 4 batch reviewer — batch **35**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **35**. Step-5 owning group: **v**.
Return `group: "v"` and `batches: ["35"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 35 | `real-complex-clifford-classification-and-graded-products` | A | clifford-universal-algebras-and-pbw |
| 35 | `real-complex-clifford-classification-and-graded-products-examples` | B | real-complex-clifford-classification-and-graded-products |

## Your content, in full

### `real-complex-clifford-classification-and-graded-products` — Clifford Classification, Modules, and Graded Tensor Products

- `def-clifford-graded-algebra-module-and-tensor-product` · definition — Graded algebras, graded modules, and the graded tensor product
- `def-real-quaternion-matrix-algebra-notation` · definition — Real, complex, and quaternion coefficient algebras and matrix notation
- `lem-clifford-quotient-has-canonical-z2-grading` · lemma — The Clifford quotient has its canonical parity grading
- `lem-clifford-zero-dimensional-algebra-is-base-field` · lemma — The zero-dimensional Clifford algebra is the base field
- `lem-real-quaternions-form-a-division-algebra` · lemma — Quaternion conjugation and division
- `thm-graded-module-classification-from-even-subalgebra` · theorem — Graded modules over an algebra with an invertible odd element
- `lem-real-division-algebra-tensor-identities` · lemma — Tensor identities for the real division algebras
- `lem-clifford-even-subalgebra-signature-identification` · lemma — Even subalgebras of real and complex Clifford algebras
- `lem-real-clifford-low-dimensional-models` · lemma — Low-dimensional real Clifford algebra models
- `thm-clifford-graded-tensor-product-for-orthogonal-sums` · theorem — The graded tensor product for orthogonal sums of quadratic spaces
- `lem-real-clifford-signature-recurrences-and-periodicity` · lemma — Real Clifford signature recurrences and eightfold periodicity
- `thm-real-complex-clifford-algebra-classification` · theorem — Real and complex Clifford algebra classification with explicit signature
- `thm-graded-clifford-modules-and-real-complex-types` · theorem — Irreducible graded Clifford modules and real, complex, and quaternionic types

### `real-complex-clifford-classification-and-graded-products-examples` — Clifford Classification, Modules, and Graded Tensor Products: Examples and Counterexamples

- `cex-ordinary-tensor-product-fails-for-clifford-orthogonal-sums` · counterexample — The ordinary tensor product does not model an orthogonal Clifford sum
- `ex-real-clifford-low-signature-models` · example — Low-signature real Clifford algebras as C, H, and matrix algebras
- `ex-graded-clifford-module-types-in-low-dimensions` · example — Even-subalgebra types determine small graded Clifford modules

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `real-complex-clifford-classification-and-graded-products` requires `clifford-universal-algebras-and-pbw`
- `real-clifford-modules-ko-and-abs-orientations` requires `real-complex-clifford-classification-and-graded-products`
- `pin-spin-and-clifford-module-representations` requires `real-complex-clifford-classification-and-graded-products`
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
