# Step 4 batch reviewer — batch **23**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **23**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["23"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 23 | `ml02-latent-representations` | A | the-spectral-theorem-and-singular-value-decomposition, characteristic-functions-inversion-and-continuity, improper-and-parameter-dependent-multiple-integrals, measures-and-their-basic-properties, product-measures-and-the-fubini-tonelli-theorems, properties-of-the-integral-and-the-working-ftc, the-derivative-and-mean-value-theorems, the-lebesgue-integral-and-the-convergence-theorems, the-riemann-integral |
| 23 | `ml02-latent-representations-examples` | B | ml02-latent-representations |

## Your content, in full

### `ml02-latent-representations` — Latent factors, ICA, NMF, and representation ambiguity

- `def-covariance-factor-model` · definition — Covariance factor model with diagonal residual covariance
- `def-square-ica-model` · definition — Square independent-component model with standardized sources
- `def-poisson-nmf-model` · definition — Poisson nonnegative matrix-factorization model
- `prop-covariance-factor-model-rotation-ambiguity` · proposition — Orthogonal rotation preserves the covariance factor model
- `lem-ica-whitening-reduces-mixing-to-orthogonal` · lemma — Whitening a square ICA model gives orthogonal mixing
- `prop-poisson-nmf-factorization-invariances` · proposition — Positive component rescaling and permutation preserve an NMF rate matrix
- `prop-poisson-nmf-loglikelihood` · proposition — Independent Poisson counts have the stated NMF log-likelihood
- `lem-local-gaussian-characteristic-function-is-global` · lemma — A characteristic function that is Gaussian near zero is globally Gaussian
- `lem-orthogonal-independent-mixing-shared-columns-gaussian` · lemma — A shared column of an independent orthogonal mixing must be Gaussian
- `thm-square-ica-identifiability-at-most-one-gaussian` · theorem — Square ICA is identifiable up to signs and permutation with at most one Gaussian source
- `alg-poisson-nmf-multiplicative-updates` · algorithm — Finite Poisson NMF multiplicative-update sweeps
- `lem-poisson-nmf-updates-preserve-positivity` · lemma — Strictly positive initialization keeps the Poisson NMF updates well-defined

### `ml02-latent-representations-examples` — Latent factors, ICA, NMF, and representation ambiguity — Examples

- `ex-ica-sign-permutation-ambiguity` · example — A standardized Laplace ICA model has signed-permutation alternatives
- `ex-gaussian-factor-rotation` · example — Two Gaussian latent factors admit a nontrivial orthogonal rotation
- `ex-poisson-nmf-nonunique-factorizations` · example — A positive rate matrix has NMFs beyond scale and permutation
- `ex-poisson-nmf-zero-count-update` · example — A zero-count cell remains well-defined in a positive NMF update

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
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
