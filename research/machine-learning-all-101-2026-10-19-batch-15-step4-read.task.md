# Step 4 batch reviewer — batch **15**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **15**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["15"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 15 | `ml02-rkhs-svm` | A | inequality-kkt-duality-and-optimality-certificates, inner-product-spaces-and-orthogonality, the-spectral-theorem-and-singular-value-decomposition |
| 15 | `ml02-rkhs-svm-examples` | B | ml02-rkhs-svm |

## Your content, in full

### `ml02-rkhs-svm` — RKHS regularization, kernels, and support-vector machines

- `def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces` · definition — Positive semidefinite kernels and reproducing kernel Hilbert spaces
- `lem-finite-dimensional-projection-in-a-real-inner-product-space` · lemma — Projection onto a finite-dimensional subspace of an arbitrary real inner-product space
- `thm-canonical-rkhs-construction-and-reproducing-property` · theorem — A positive semidefinite kernel has a canonical reproducing kernel Hilbert space under countable choice
- `lem-positive-semidefinite-gram-matrix-has-euclidean-feature-factorization` · lemma — A finite positive semidefinite kernel Gram matrix has a Euclidean feature factorization
- `thm-finite-sample-representer-theorem-in-an-rkhs` · theorem — Finite-sample representer theorem when a minimizer exists
- `def-hard-and-soft-margin-support-vector-machines` · definition — Hard- and soft-margin support-vector machines with an unpenalized bias
- `lem-soft-margin-svm-primal-attainment` · lemma — The soft-margin SVM primal attains its minimum, including the unpenalized-bias boundary
- `thm-soft-margin-svm-dual-and-kkt-conditions` · theorem — Soft-margin SVM duality and KKT conditions
- `ex-gaussian-radial-kernel` · example — The Gaussian radial kernel is positive semidefinite

### `ml02-rkhs-svm-examples` — RKHS regularization, kernels, and support-vector machines — Examples

- `ex-linear-and-polynomial-kernels` · example — Linear and polynomial kernels as finite feature inner products
- `ex-separable-hard-margin-svm` · example — A one-dimensional separable hard-margin SVM
- `ex-overlapping-soft-margin-svm-score-and-kkt` · example — Conflicting labels, a soft-margin optimum, and the meaning of its score

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `minimum-norm-interpolation-and-double-descent` requires `ml02-rkhs-svm`
- `neural-tangent-kernels-and-lazy-training` requires `ml02-rkhs-svm`
- `sketched-kernel-learning-and-certified-solves` requires `ml02-rkhs-svm`
---

# Step 4 Alpha batch reviewer — read-only digest, `machine-learning-all-101-2026-10-19`

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
