# Step 4 batch reviewer — batch **51**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **51**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["51"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 51 | `iid-bootstrap-and-jackknife-validity` | A | resampling-algorithms-and-sampling-units, delta-method-and-asymptotic-normality, confidence-sets-pivots-and-test-inversion, polyhedral-selective-inference |
| 51 | `iid-bootstrap-and-jackknife-validity-examples` | B | iid-bootstrap-and-jackknife-validity |

## Your content, in full

### `iid-bootstrap-and-jackknife-validity` — IID bootstrap and jackknife for smooth statistics

- `alg-lower-empirical-bootstrap-quantile` · algorithm — Lower empirical quantile of bootstrap values
- `def-iid-empirical-bootstrap-sample` · definition — IID empirical bootstrap sample and smooth mean statistic
- `lem-iid-sample-covariance-converges` · lemma — Finite-second-moment IID sample covariance converges
- `alg-basic-bootstrap-interval` · algorithm — Basic bootstrap interval
- `alg-bias-corrected-bootstrap-interval` · algorithm — Bias-corrected bootstrap interval
- `alg-bootstrap-t-interval` · algorithm — Bootstrap-t interval
- `alg-percentile-bootstrap-interval` · algorithm — Percentile bootstrap interval
- `lem-empirical-bootstrap-law-is-a-probability-measure` · lemma — A finite empirical law is a probability measure
- `thm-delete-one-jackknife-linearization-for-smooth-statistics` · theorem — Delete-one jackknife linearization for smooth functions of a mean
- `lem-finite-bootstrap-cdf-supremum-is-measurable` · lemma — Measurability of the finite-bootstrap CDF supremum
- `alg-delete-one-jackknife-acceleration` · algorithm — Delete-one jackknife acceleration
- `lem-finite-index-bootstrap-sample-is-conditionally-iid` · lemma — Finite-index bootstrap draws are conditionally IID from the empirical law
- `alg-bca-bootstrap-interval` · algorithm — Bias-corrected and accelerated bootstrap interval
- `thm-conditional-iid-bootstrap-clt-for-empirical-law` · theorem — Conditional IID bootstrap CLT for an empirical law
- `thm-iid-bootstrap-validity-for-smooth-statistics` · theorem — First-order IID bootstrap validity for smooth functions of a mean

### `iid-bootstrap-and-jackknife-validity-examples` — IID bootstrap and jackknife for smooth statistics — Examples

- `ex-delete-one-jackknife-for-sample-mean` · example — The delete-one jackknife variance for a sample mean
- `ex-discrete-median-bootstrap-ties` · example — Discrete median bootstrap with ties
- `cex-iid-bootstrap-inconsistency-at-absolute-mean-kink` · counterexample — The IID bootstrap can fail at the kink of the absolute mean
- `ex-iid-bootstrap-smooth-mean` · example — The IID bootstrap for a smooth mean functional

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `iid-bootstrap-and-jackknife-validity` requires `resampling-algorithms-and-sampling-units`
- `bootstrap-failure-and-subsampling` requires `iid-bootstrap-and-jackknife-validity`
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
