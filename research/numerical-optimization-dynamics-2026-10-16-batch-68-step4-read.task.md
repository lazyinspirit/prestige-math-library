# Step 4 batch reviewer — batch **68**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **68**. Step-5 owning group: **t**.
Return `group: "t"` and `batches: ["68"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 68 | `matrix-functions-and-scaling-squaring` | A | strongly-continuous-semigroups-and-hille-yosida, the-spectral-theorem-and-singular-value-decomposition, finite-precision-direct-factorizations, computed-schur-decompositions-and-nonnormal-spectra, sylvester-and-lyapunov-matrix-equations, verified-linear-systems-and-spectral-enclosures, computed-singular-values-and-rank-revealing-factorizations, conformal-mapping-branches-and-the-schwarz-lemma |
| 68 | `matrix-functions-and-scaling-squaring-examples` | B | matrix-functions-and-scaling-squaring |

## Your content, in full

### `matrix-functions-and-scaling-squaring` — Matrix functions and scaling squaring

- `def-diagonal-pade-approximant-for-exponential` · definition — Diagonal Padé approximant to the exponential
- `lem-finite-hermite-interpolation-for-jordan-data` · lemma — Finite Hermite data at distinct eigenvalues have a unique polynomial representative
- `lem-scaling-and-squaring-error-recurrence` · lemma — Error propagation through exact and perturbed squaring steps
- `def-analytic-primary-matrix-function` · definition — Analytic primary matrix functions by Jordan blocks
- `lem-diagonal-pade-remainder-bound` · lemma — A finite scalar remainder bound for the diagonal Padé exponential
- `def-matrix-sign-for-spectrum-off-imaginary-axis` · definition — Primary matrix sign for spectra off the imaginary axis
- `thm-analytic-primary-matrix-function-jordan-contour-agreement` · theorem — Jordan, contour, similarity, and normal-functional-calculus formulas agree
- `alg-exact-jordan-block-analytic-evaluation` · algorithm — Finite analytic evaluation from a supplied exact Jordan decomposition
- `thm-exact-jordan-block-analytic-evaluation-correct` · theorem — A verified Jordan evaluation returns the primary matrix function
- `thm-principal-matrix-logarithm-and-square-root-exist` · theorem — The principal matrix logarithm and square root exist off the closed negative-real axis
- `thm-frechet-exponential-integral-and-block-function-identity` · theorem — The exponential Fréchet derivative has an integral and block-matrix formula
- `thm-matrix-function-rational-contour-error-bound` · theorem — A resolvent contour bound transfers scalar rational error to matrices
- `alg-pade-denominator-solve-by-householder-qr` · algorithm — Finite Householder QR solve for a Padé denominator with explicit statuses
- `thm-pade-denominator-solve-verified-branch-correct` · theorem — An exact residual check certifies the Padé denominator solve
- `alg-pade-scaling-and-squaring-exponential` · algorithm — Finite-order Padé scaling-and-squaring exponential
- `rem-matrix-function-condition-estimates-are-not-certified-bounds` · remark — Condition estimates and certified matrix-function error bounds
- `alg-newton-polar-factor-iteration` · algorithm — Finite-budget Newton iteration for the nonsingular polar factor
- `alg-newton-matrix-sign-iteration` · algorithm — Finite-budget Newton iteration for the matrix sign
- `thm-pade-scaling-and-squaring-error-bound` · theorem — Padé error and squaring defects give a conditional exponential error bound
- `thm-newton-polar-factor-quadratic-convergence` · theorem — Newton polar iterates converge quadratically under an explicit norm condition
- `thm-newton-matrix-sign-convergence-and-quadratic-rate` · theorem — Newton sign iteration converges off the imaginary axis and is locally quadratic
- `alg-schur-parlett-matrix-function` · algorithm — Finite Schur–Parlett recurrence with block merging and inconclusive statuses
- `thm-schur-parlett-recurrence-correctness` · theorem — Separated Schur–Parlett blocks reconstruct the analytic matrix function
- `alg-principal-matrix-logarithm-and-square-root` · algorithm — Principal matrix logarithm and square root by branch-aware Schur–Parlett
- `thm-matrix-function-finite-algorithms-termination-and-budget-status` · theorem — Finite matrix-function algorithms preserve primitive budgets and terminate with explicit statuses

### `matrix-functions-and-scaling-squaring-examples` — Matrix functions and scaling squaring — Examples

- `ex-spd-square-root-and-polar-factor` · example — A positive diagonal Gram matrix gives a nontrivial polar factor
- `ex-nonnormal-exponential-large-transient-norm` · example — A stable-spectrum nonnormal exponential has a large transient norm
- `ex-rotation-logarithm-branch-cut` · example — A half-turn lies on the principal logarithm branch cut

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `matrix-functions-and-scaling-squaring` requires `finite-precision-direct-factorizations`
- `matrix-functions-and-scaling-squaring` requires `computed-schur-decompositions-and-nonnormal-spectra`
- `matrix-functions-and-scaling-squaring` requires `sylvester-and-lyapunov-matrix-equations`
- `matrix-functions-and-scaling-squaring` requires `verified-linear-systems-and-spectral-enclosures`
- `matrix-functions-and-scaling-squaring` requires `computed-singular-values-and-rank-revealing-factorizations`
- `matrix-exponential-and-phi-function-actions` requires `matrix-functions-and-scaling-squaring`
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
