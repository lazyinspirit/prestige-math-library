# Step 4 batch reviewer — batch **29**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **29**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["29"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 29 | `variance-reduction-and-randomized-integration` | A | iid-monte-carlo-integration-and-error, conditional-expectation |
| 29 | `variance-reduction-and-randomized-integration-examples` | B | variance-reduction-and-randomized-integration |

## Your content, in full

### `variance-reduction-and-randomized-integration` — Control variates, antithetics, and stratification

- `def-control-variate-estimator` · definition — Control-variate estimators
- `thm-control-variate-unbiasedness-and-optimal-coefficient` · theorem — Unbiasedness and optimal coefficients for fixed controls
- `def-antithetic-randomized-sampling` · definition — Antithetic randomized sampling
- `lem-oppositely-monotone-functions-of-independent-coordinates-have-nonpositive-covariance` · lemma — Oppositely monotone functions of independent coordinates have nonpositive covariance
- `thm-antithetic-variance-and-monotone-sufficiency` · theorem — Antithetic variance and a monotone sufficient condition
- `def-stratified-monte-carlo-estimator` · definition — Stratified Monte Carlo estimator
- `thm-stratified-unbiasedness-variance-and-proportional-allocation` · theorem — Stratified estimator unbiasedness, variance, and proportional allocation
- `thm-same-sample-control-coefficient-remainder-is-op-one-over-n` · theorem — Same-sample coefficient remainder is of order $O_P(n^{-1})$
- `thm-independent-pilot-control-variate-is-conditionally-unbiased` · theorem — An independent pilot coefficient preserves conditional unbiasedness

### `variance-reduction-and-randomized-integration-examples` — Control variates, antithetics, and stratification — Examples

- `ex-perfect-control-variate` · example — A perfect-correlation control removes all variance
- `ex-uncorrelated-control-variate` · example — An uncorrelated control has no variance benefit
- `ex-monotone-antithetic-pair` · example — A monotone uniform integrand has a zero-variance antithetic pair
- `ex-proportional-stratification-variance-reduction` · example — Proportional stratification reduces variance for a uniform mean
- `ex-same-sample-control-regression-bias` · example — A same-sample fitted coefficient can bias the estimator
- `ex-independent-pilot-control-variate` · example — A random pilot coefficient remains conditionally unbiased

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `variance-reduction-and-randomized-integration` requires `iid-monte-carlo-integration-and-error`
---

# Step 4 Alpha batch reviewer — read-only digest, `bayesian-computational-statistics-62`

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
