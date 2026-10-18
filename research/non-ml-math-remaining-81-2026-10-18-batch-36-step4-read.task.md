# Step 4 batch reviewer — batch **36**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **36**. Step-5 owning group: **v**.
Return `group: "v"` and `batches: ["36"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 36 | `pin-spin-and-clifford-module-representations` | A | real-complex-clifford-classification-and-graded-products, complete-reducibility-for-compact-groups |
| 36 | `pin-spin-and-clifford-module-representations-examples` | B | pin-spin-and-clifford-module-representations |

## Your content, in full

### `pin-spin-and-clifford-module-representations` — Pin and Spin Groups and Their Representations

- `lem-real-orthogonal-space-preliminaries` · lemma — Orthogonal-space preliminaries and anisotropic reflections
- `lem-real-orthogonal-polar-decomposition` · lemma — Polar decomposition of a real indefinite orthogonal matrix
- `lem-cartan-dieudonne-real-nondegenerate-reflection-factorization` · lemma — Cartan–Dieudonné factorization over a real quadratic space
- `lem-real-clifford-involutions-and-norm` · lemma — Clifford involutions and the norm of a vector product
- `def-real-clifford-group-and-normalized-pin-spin` · definition — Real Clifford group, Pin, and the two Spin subgroups
- `lem-twisted-clifford-adjoint-reflection-and-scalar-kernel` · lemma — Twisted Clifford action, reflections, and scalar kernel
- `lem-normalized-pin-spin-product-and-norm-laws` · lemma — Normalized Pin products and Clifford norm
- `thm-real-pin-spin-image-kernel-and-compactness` · theorem — Real Pin and full-even Spin images, kernels, and definite compactness
- `lem-real-local-spin-lift-by-matrix-logarithm` · lemma — Local Spin lift from the matrix logarithm
- `thm-real-spin-modules-and-real-types` · theorem — Real Spin modules from the even Clifford algebra
- `thm-real-pin-spin-topological-double-covers` · theorem — Pin and full-even Spin are topological double covers
- `lem-euclidean-spin-sphere-bundle-local-sections` · lemma — Euclidean Spin sphere bundle and explicit rotor sections
- `thm-complex-spin-modules-and-compact-reducibility` · theorem — Complex spinor modules and complete reducibility for Euclidean Spin
- `lem-real-spin-norm-detects-components` · lemma — The even Clifford norm detects the identity component in mixed signature
- `cor-euclidean-spin-is-universal-cover` · corollary — Euclidean Spin is the universal cover of SO(n) for n at least three

### `pin-spin-and-clifford-module-representations-examples` — Pin and Spin Groups and Their Representations: Examples and Counterexamples

- `ex-pin-plus-minus-and-spin-two-double-angle` · example — Pin lift squares and the Spin(2) double-angle map
- `ex-pin-reflection-and-scalar-kernel-in-the-plane` · example — A Pin generator reflects one coordinate and has scalar kernel
- `ex-split-even-clifford-algebra-gives-two-spin-modules` · example — The split even Clifford algebra in signature (1,1)
- `ex-mixed-signature-full-spin-and-norm-one-spin` · example — A mixed-sign even lift has norm minus one

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `pin-spin-and-clifford-module-representations` requires `real-complex-clifford-classification-and-graded-products`
- `real-clifford-modules-ko-and-abs-orientations` requires `pin-spin-and-clifford-module-representations`
- `spin-geometry-dirac-and-index-theory` requires `pin-spin-and-clifford-module-representations`
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
