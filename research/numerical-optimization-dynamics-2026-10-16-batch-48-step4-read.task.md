# Step 4 batch reviewer — batch **48**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **48**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["48"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 48 | `generalized-eigenvalue-pencils-and-qz-methods` | A | direct-matrix-factorisations-lu-cholesky-and-qr, the-spectral-theorem-and-singular-value-decomposition, finite-precision-direct-factorizations, computed-schur-decompositions-and-nonnormal-spectra, computed-singular-values-and-rank-revealing-factorizations, the-complex-exponential-and-eulers-formula |
| 48 | `generalized-eigenvalue-pencils-and-qz-methods-examples` | B | generalized-eigenvalue-pencils-and-qz-methods |

## Your content, in full

### `generalized-eigenvalue-pencils-and-qz-methods` — Generalized eigenvalue pencils and QZ methods

- `def-regular-generalized-eigenvalue-pencil` · definition — Regular matrix pencils and homogeneous generalized eigenvalues
- `lem-block-upper-triangular-pencil-determinant-factorizes` · lemma — The homogeneous determinant factors across a block upper triangular pencil
- `lem-zero-determinant-matrix-has-nonzero-kernel-vector` · lemma — A square matrix with zero determinant has a nonzero kernel vector
- `def-b-inner-product-and-dual-norm-for-definite-pencil` · definition — The B-inner product, B-norm, and dual residual norm
- `alg-generalized-hessenberg-triangular-reduction` · algorithm — Givens reduction of a matrix pair to Hessenberg-triangular form
- `def-generalized-schur-form` · definition — Complex and real generalized Schur forms
- `lem-projective-determinant-is-homogeneous-and-scale-invariant` · lemma — The homogeneous determinant is scale invariant on projective pairs
- `lem-regular-pencil-has-no-common-kernel-vector` · lemma — A regular pencil has no nonzero vector in both kernels
- `lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil` · lemma — Two-sided unitary errors in a matrix pencil accumulate as a backward perturbation pair
- `thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis` · theorem — A Hermitian-definite pencil has a real spectrum and a B-orthonormal eigenbasis
- `prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence` · proposition — Givens reduction terminates with a unitary-equivalent Hessenberg-triangular pair
- `lem-regular-pencil-has-projective-eigenvalue` · lemma — Every regular complex pencil has a homogeneous eigenvalue pair
- `thm-b-metric-residual-encloses-definite-pencil-eigenvalue` · theorem — A B-dual residual bounds distance to the spectrum of a Hermitian-definite pencil
- `lem-qz-two-sided-local-computed-update-bound` · lemma — Common computed Givens actions certify both pencil matrices and factor residuals
- `alg-finite-budget-qz-iteration-with-deflation-and-residual` · algorithm — Finite-budget QZ iteration with homogeneous status and residual output
- `thm-generalized-schur-form-exists-for-regular-pencil` · theorem — Every regular real or complex pencil has a generalized Schur form
- `prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence` · proposition — Every finite-budget QZ run returns a status and records unitary transforms and explicit deflations
- `thm-computed-qz-pair-has-certified-backward-error` · theorem — Certified QZ residuals give a backward error bound for both pencil matrices

### `generalized-eigenvalue-pencils-and-qz-methods-examples` — Generalized eigenvalue pencils and QZ methods — Examples

- `ex-singular-b-yields-an-infinite-generalized-eigenvalue` · example — A singular B can give a regular pencil with an infinite generalized eigenvalue
- `ex-regular-and-singular-pencil-determinant-witnesses` · example — A regular pencil and an identically singular determinant pencil
- `ex-mass-stiffness-pencil-has-two-b-orthogonal-modes` · example — A mass-stiffness pencil has real B-orthogonal modes and a residual enclosure

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `generalized-eigenvalue-pencils-and-qz-methods` requires `finite-precision-direct-factorizations`
- `generalized-eigenvalue-pencils-and-qz-methods` requires `computed-schur-decompositions-and-nonnormal-spectra`
- `generalized-eigenvalue-pencils-and-qz-methods` requires `computed-singular-values-and-rank-revealing-factorizations`
- `restarted-and-block-eigensolvers` requires `generalized-eigenvalue-pencils-and-qz-methods`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

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
