# Step 4 batch reviewer — batch **34**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **34**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["34"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 34 | `krylov-methods-and-lanczos-convergence` | A | conjugate-gradients-minres-and-preconditioning, eigenvalue-iterations-and-the-qr-algorithm, krylov-subspaces-arnoldi-and-gmres, matrix-norms-condition-numbers-and-numerical-stability, the-spectral-theorem-and-singular-value-decomposition, finite-precision-direct-factorizations, sparse-matrix-models-and-kernel-costs, stationary-iterations-and-relaxation, fundamental-trigonometric-identities |
| 34 | `krylov-methods-and-lanczos-convergence-examples` | B | krylov-methods-and-lanczos-convergence |

## Your content, in full

### `krylov-methods-and-lanczos-convergence` — Krylov methods and Lanczos convergence

- `lem-scaled-chebyshev-filter-bound-on-a-separated-interval` · lemma — A scaled Chebyshev polynomial suppresses a separated interval
- `thm-two-pass-mgs-arnoldi-local-relation-and-orthogonality-bound` · theorem — Two-pass MGS Arnoldi has an explicit local relation and an a posteriori orthogonality bound
- `thm-cg-recursive-residual-gap-and-attainable-accuracy` · theorem — Finite-precision CG has a recursive-residual gap and an attainable-accuracy bound
- `thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases` · theorem — Lanczos largest Ritz values obey a Chebyshev start-angle bound, including degenerate branches
- `thm-gmres-true-residual-gap-from-computed-arnoldi-relation` · theorem — A computed GMRES correction has an explicit finite-precision residual gap
- `prop-sparse-unrestarted-gmres-work-and-storage` · proposition — Unrestarted GMRES has a sparse matvec plus orthogonalization work bound

### `krylov-methods-and-lanczos-convergence-examples` — Krylov methods and Lanczos convergence — Examples

- `ex-unrestarted-and-restarted-gmres-on-a-diagonal-system` · example — Unrestarted GMRES solves a two-dimensional diagonal system before GMRES(1) restarts
- `ex-cg-denominator-failure-and-minres-on-an-indefinite-system` · example — CG's positive-denominator hypothesis fails on an indefinite system while MINRES can start
- `ex-lanczos-poorly-aligned-start-vector-delays-the-largest-ritz-value` · example — A poorly aligned start delays the largest Ritz value and requires the start-angle factor
- `ex-lanczos-repeated-top-zero-component-and-invariant-breakdown` · example — Lanczos handles repeated top eigenvalues, absent top components, and exact breakdown

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `krylov-methods-and-lanczos-convergence` requires `finite-precision-direct-factorizations`
- `krylov-methods-and-lanczos-convergence` requires `sparse-matrix-models-and-kernel-costs`
- `krylov-methods-and-lanczos-convergence` requires `stationary-iterations-and-relaxation`
- `certified-stationary-distribution-and-hitting-statistic-numerics` requires `krylov-methods-and-lanczos-convergence`
- `preconditioner-algorithms-and-residual-metrics` requires `krylov-methods-and-lanczos-convergence`
- `restarted-and-block-eigensolvers` requires `krylov-methods-and-lanczos-convergence`
- `matrix-exponential-and-phi-function-actions` requires `krylov-methods-and-lanczos-convergence`
- `nonconvex-line-search-and-inexact-newton-methods` requires `krylov-methods-and-lanczos-convergence`
- `operator-splitting-admm-and-primal-dual-methods` requires `krylov-methods-and-lanczos-convergence`
- `nonlinear-conjugate-gradient-methods` requires `krylov-methods-and-lanczos-convergence`
- `trust-region-and-cubic-regularization-methods` requires `krylov-methods-and-lanczos-convergence`
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` requires `krylov-methods-and-lanczos-convergence`
- `iterative-regularization-and-early-stopping` requires `krylov-methods-and-lanczos-convergence`
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
