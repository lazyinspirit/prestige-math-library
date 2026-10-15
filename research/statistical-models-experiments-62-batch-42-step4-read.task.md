# Step 4 batch reviewer — batch **42**, run `statistical-models-experiments-62`

You are the only reviewer for batch **42**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["42"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 42 | `arma-causality-invertibility-and-spectra` | A | stationary-time-series-moments-and-autocovariance, spectral-measures-and-periodogram-bias, asymptotic-convergence-consistency-and-identification, central-limit-theorems, martingale-inequalities-and-convergence, characteristic-functions-inversion-and-continuity, stationary-markov-chains-and-ergodic-limits, strong-laws-of-large-numbers, discrete-time-martingales, modes-of-convergence-for-random-variables, matrix-differentiation-and-first-order-spectral-perturbation, product-measures-and-the-fubini-tonelli-theorems, gaussian-orthogonal-decomposition-and-quadratic-forms |
| 42 | `arma-causality-invertibility-and-spectra-examples` | B | arma-causality-invertibility-and-spectra |

## Your content, in full

### `arma-causality-invertibility-and-spectra` — ARMA roots, spectra and inference

- `def-linear-process-and-arma-model` · definition — Linear processes, white noise, and ARMA models
- `lem-absolutely-summable-linear-filters-preserve-weak-stationarity` · lemma — Absolutely summable linear filters preserve weak stationarity
- `thm-arma-causality-and-invertibility-root-criteria` · theorem — ARMA causality and invertibility root criteria
- `thm-stationary-arma-spectral-density` · theorem — Spectral density of a stationary ARMA solution
- `thm-stable-linear-process-sample-mean-clt` · theorem — Sample-mean CLT for stable linear processes
- `thm-fixed-order-autoregressive-ols-martingale-limit` · theorem — Fixed-order autoregressive OLS martingale limit
- `cor-stable-ar-long-run-variance-plug-in-consistency` · corollary — Plug-in long-run variance for a stable AR mean

### `arma-causality-invertibility-and-spectra-examples` — ARMA roots, spectra and inference — Examples

- `ex-arma-common-factor-cancellation-and-root-classification` · example — A common factor can reverse an unreduced root classification
- `ex-unit-root-precludes-nonzero-variance-stationary-ar1` · example — A unit-root AR(1) has no weakly stationary solution with nonzero white noise
- `ex-dependent-white-noise-is-not-iid` · example — Uncorrelated white noise need not be iid

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `arma-causality-invertibility-and-spectra` requires `stationary-time-series-moments-and-autocovariance`
- `arma-causality-invertibility-and-spectra` requires `spectral-measures-and-periodogram-bias`
---

# Step 4 Alpha batch reviewer — read-only digest, `statistical-models-experiments-62`

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
