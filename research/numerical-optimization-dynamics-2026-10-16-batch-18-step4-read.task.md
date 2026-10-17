# Step 4 batch reviewer — batch **18**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **18**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["18"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 18 | `stationary-iterations-and-relaxation` | A | conjugate-gradients-minres-and-preconditioning, krylov-subspaces-arnoldi-and-gmres, matrix-norms-condition-numbers-and-numerical-stability, sparse-matrix-models-and-kernel-costs |
| 18 | `stationary-iterations-and-relaxation-examples` | B | stationary-iterations-and-relaxation |

## Your content, in full

### `stationary-iterations-and-relaxation` — Stationary iterations and relaxation

- `def-diagonal-lower-upper-splitting-convention` · definition — Diagonal, lower, and upper parts in the stationary-iteration convention
- `alg-richardson-stationary-iteration` · algorithm — Finite-budget Richardson stationary iteration
- `lem-irreducible-row-substochastic-matrix-has-strict-weighted-contraction` · lemma — An irreducible row-substochastic matrix with a strict row has a weighted contraction
- `alg-jacobi-stationary-iteration` · algorithm — Finite-budget Jacobi stationary iteration
- `alg-gauss-seidel-stationary-iteration` · algorithm — Finite-budget Gauss–Seidel stationary iteration
- `alg-sor-stationary-iteration` · algorithm — Finite-budget successive over-relaxation stationary iteration
- `thm-strict-row-diagonal-dominance-implies-jacobi-and-gauss-seidel-convergence` · theorem — Strict row diagonal dominance guarantees Jacobi and Gauss–Seidel convergence
- `thm-irreducibly-weakly-diagonally-dominant-jacobi-and-gauss-seidel-converge` · theorem — Irreducibly weak row diagonal dominance with a strict row guarantees Jacobi and Gauss–Seidel convergence
- `thm-sor-converges-iff-a-is-positive-definite-and-zero-less-than-omega-less-than-two` · theorem — SOR converges exactly for positive-definite A and relaxation parameter in (0, 2)

### `stationary-iterations-and-relaxation-examples` — Stationary iterations and relaxation — Examples

- `ex-stationary-splitting-with-an-initial-error-missing-an-unstable-eigenspace` · example — A stationary split converges from an error missing its unstable eigenspace
- `ex-jacobi-iteration-for-a-strictly-diagonally-dominant-matrix` · example — Jacobi iteration on a strictly row-diagonally-dominant system
- `ex-sor-iteration-for-a-positive-definite-matrix-with-omega-in-zero-two` · example — SOR on a positive-definite system with relaxation parameter in (0, 2)

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `stationary-iterations-and-relaxation` requires `sparse-matrix-models-and-kernel-costs`
- `linear-multistep-methods-and-dahlquist-equivalence` requires `stationary-iterations-and-relaxation`
- `krylov-methods-and-lanczos-convergence` requires `stationary-iterations-and-relaxation`
- `preconditioner-algorithms-and-residual-metrics` requires `stationary-iterations-and-relaxation`
- `hyperbolic-finite-difference-methods` requires `stationary-iterations-and-relaxation`
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
