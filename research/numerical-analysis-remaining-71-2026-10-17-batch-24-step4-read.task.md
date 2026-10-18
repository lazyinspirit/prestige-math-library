# Step 4 batch reviewer — batch **24**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **24**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["24"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 24 | `square-root-covariance-update-error-and-stability` | A | numerical-algebraic-riccati-equations-and-stabilizing-branches, kalman-filtering |
| 24 | `square-root-covariance-update-error-and-stability-examples` | B | square-root-covariance-update-error-and-stability |

## Your content, in full

### `square-root-covariance-update-error-and-stability` — Square root covariance update error and stability

- `lem-square-root-kalman-householder-error-rational-envelope` · lemma — An explicit rational envelope for the scaled Householder QR error
- `lem-square-root-kalman-gram-perturbation-bound` · lemma — A factor perturbation gives an explicit Gram-matrix error
- `lem-square-root-kalman-measurement-block-factor-identity` · lemma — The block QR measurement update gives the canonical Kalman update
- `lem-square-root-kalman-prediction-factor-identity` · lemma — QR prediction preserves the canonical covariance factor
- `lem-square-root-kalman-schur-perturbation-bound` · lemma — Innovation, gain, and posterior errors follow from joint covariance perturbations
- `lem-square-root-kalman-triangular-solve-forward-bound` · lemma — An innovation solve residual gives a singular-value forward bound
- `alg-finite-budget-square-root-kalman-filter` · algorithm — Finite-horizon square-root Kalman filter by rectangular factors and QR
- `lem-square-root-kalman-prearray-qr-error-bound` · lemma — Product and Householder QR errors bound the represented joint covariance
- `thm-square-root-kalman-finite-procedure-status` · theorem — The square-root Kalman procedure terminates with a finite status and operation-count bound
- `thm-square-root-kalman-finite-horizon-perturbation-bound` · theorem — The square-root filter has an explicit conditioned finite-horizon error bound

### `square-root-covariance-update-error-and-stability-examples` — Square root covariance update error and stability — Examples

- `ex-square-root-kalman-perturbed-prearray-psd-factor` · example — A nonzero prearray perturbation changes the posterior but keeps its factor product PSD
- `ex-subtractive-kalman-update-loses-positive-semidefiniteness` · example — A rounded subtractive covariance update can become indefinite
- `ex-square-root-kalman-singular-prior-positive-innovation` · example — A singular prior factor with a positive innovation remains admissible
- `ex-square-root-kalman-nearly-noiseless-solve-sensitivity` · example — A nearly noiseless weakly scaled observation amplifies innovation-solve residual

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `square-root-covariance-update-error-and-stability` requires `numerical-algebraic-riccati-equations-and-stabilizing-branches`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
