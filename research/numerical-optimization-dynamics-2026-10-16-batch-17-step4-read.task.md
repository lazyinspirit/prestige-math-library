# Step 4 batch reviewer — batch **17**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **17**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["17"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 17 | `computed-singular-values-and-rank-revealing-factorizations` | A | direct-matrix-factorisations-lu-cholesky-and-qr, the-spectral-theorem-and-singular-value-decomposition, finite-precision-direct-factorizations |
| 17 | `computed-singular-values-and-rank-revealing-factorizations-examples` | B | computed-singular-values-and-rank-revealing-factorizations |

## Your content, in full

### `computed-singular-values-and-rank-revealing-factorizations` — Computed singular values and rank revealing factorizations

- `alg-householder-bidiagonalization` · algorithm — Householder bidiagonalization and its finite precision status
- `alg-strong-rank-revealing-qr-with-finite-swaps` · algorithm — Strong rank-revealing QR with finite swaps and explicit statuses
- `lem-singular-value-product-bound` · lemma — Singular values contract under left and right multiplication
- `lem-singular-values-lipschitz-in-spectral-norm` · lemma — Singular values are Lipschitz in the spectral norm
- `prop-spectral-numerical-rank-counts-singular-values-over-real-or-complex` · proposition — Spectral numerical rank counts singular values above threshold over R or C
- `alg-implicit-shifted-bidiagonal-qr-with-deflation` · algorithm — Finite budget implicit shifted QR for bidiagonal singular values
- `lem-exact-householder-bidiagonal-reduction` · lemma — Exact unitary equivalence of Householder bidiagonalization
- `lem-strong-rrqr-column-swap-volume-ratio` · lemma — A strong RRQR column swap multiplies selected volume by its score
- `thm-bidiagonal-singular-values-relative-under-componentwise-perturbations` · theorem — Componentwise relative perturbations of bidiagonal matrices control every singular value relatively
- `thm-strong-rrqr-singular-value-comparisons` · theorem — Strong RRQR block singular values compare to the full matrix spectrum
- `alg-rank-thresholded-least-squares-by-svd` · algorithm — Rank-thresholded least squares by the singular value decomposition
- `lem-implicit-bidiagonal-qr-bulge-chase-unitary-equivalence` · lemma — Bulge chase preserves bidiagonal singular values
- `thm-strong-rrqr-swap-rule-terminates` · theorem — The strong RRQR swap rule terminates after finitely many swaps
- `thm-bidiagonal-svd-backward-error-under-local-stability` · theorem — Local stable reflectors and rotations give an aggregate SVD backward error
- `thm-svd-thresholded-least-squares-minimum-norm-model` · theorem — The SVD threshold solver gives the unique minimum-norm fit to its truncated model
- `cor-computed-singular-values-absolute-error-from-backward-stability` · corollary — Computed singular-value error is bounded by backward perturbation plus readout error
- `alg-scaled-complex-householder-and-givens-updates` · algorithm — Scaled real and complex Householder and Givens update arithmetic
- `lem-scaled-complex-householder-and-givens-local-backward-error` · lemma — Scaled complex Householder and Givens steps have explicit local backward errors

### `computed-singular-values-and-rank-revealing-factorizations-examples` — Computed singular values and rank revealing factorizations — Examples

- `ex-nearly-rank-deficient-design-matrix` · example — A nearly rank-deficient two-column design changes numerical rank with tolerance
- `cex-classical-column-pivoted-qr-is-not-strong-with-factor-one` · counterexample — Classical column-pivoted QR can fail the strong coefficient bound
- `ex-absolute-versus-relative-singular-value-error` · example — Absolute error can erase a tiny singular value while relative error preserves it

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `computed-singular-values-and-rank-revealing-factorizations` requires `finite-precision-direct-factorizations`
- `computed-schur-decompositions-and-nonnormal-spectra` requires `computed-singular-values-and-rank-revealing-factorizations`
- `generalized-eigenvalue-pencils-and-qz-methods` requires `computed-singular-values-and-rank-revealing-factorizations`
- `matrix-functions-and-scaling-squaring` requires `computed-singular-values-and-rank-revealing-factorizations`
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
