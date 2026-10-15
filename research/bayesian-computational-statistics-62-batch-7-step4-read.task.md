# Step 4 batch reviewer — batch **7**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **7**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["7"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 7 | `posterior-prediction-and-bayesian-decision` | A | posterior-propriety-and-dominated-bayes-formula, losses-risk-and-decision-rules |
| 7 | `posterior-prediction-and-bayesian-decision-examples` | B | posterior-prediction-and-bayesian-decision |

## Your content, in full

### `posterior-prediction-and-bayesian-decision` — Posterior prediction, credible sets, and Bayes actions

- `def-posterior-predictive-law` · definition — Posterior-predictive probability kernel
- `thm-posterior-predictive-mixture-is-a-kernel` · theorem — A posterior mixture of future kernels is a probability kernel
- `thm-posterior-predictive-moment-decomposition` · theorem — Posterior-predictive mean and variance decomposition
- `def-posterior-credible-set` · definition — Posterior credible set
- `lem-measurable-posterior-quantile-and-cdf-bracketing` · lemma — Posterior quantiles are measurable and bracket their probability level
- `thm-central-posterior-quantile-interval-is-credible` · theorem — Equal-tailed posterior quantile intervals are credible
- `def-posterior-median` · definition — Posterior median
- `lem-lower-posterior-median-is-measurable` · lemma — The lower posterior median is a measurable rule
- `def-posterior-risk-and-bayes-action` · definition — Finite posterior risk and Bayes action rule
- `thm-posterior-mean-is-squared-error-bayes-action` · theorem — Under AC, the finite-second-moment posterior mean uniquely minimizes squared risk
- `thm-posterior-median-minimizes-absolute-risk` · theorem — Every posterior median minimizes absolute risk when the first absolute moment is finite
- `thm-finite-class-maximal-mass-is-zero-one-bayes-action` · theorem — A maximal-mass action is Bayes under finite-class zero–one loss

### `posterior-prediction-and-bayesian-decision-examples` — Posterior prediction, credible sets, and Bayes actions — Examples

- `ex-posterior-predictive-mixture-adds-parameter-uncertainty` · example — Posterior prediction adds parameter uncertainty to future sampling variation
- `ex-asymmetric-loss-changes-the-posterior-optimal-action` · example — Asymmetric loss can change the posterior-optimal action
- `ex-posterior-median-can-be-nonunique` · example — A posterior median need not be unique
- `ex-continuous-density-mode-under-zero-one-loss` · example — A continuous density mode need not distinguish exact zero–one actions
- `ex-posterior-credible-interval-need-not-have-nominal-frequency-coverage` · example — Posterior credibility does not ensure nominal frequentist coverage

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `posterior-prediction-and-bayesian-decision` requires `posterior-propriety-and-dominated-bayes-formula`
- `functional-bayesian-limits-and-credible-set-calibration` requires `posterior-prediction-and-bayesian-decision`
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
