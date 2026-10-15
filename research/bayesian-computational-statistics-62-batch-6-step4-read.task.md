# Step 4 batch reviewer — batch **6**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **6**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["6"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 6 | `conjugate-families-and-posterior-prediction` | A | posterior-propriety-and-dominated-bayes-formula, complete-sufficiency-exponential-families-and-basu, central-limit-theorems, mixed-effects-and-longitudinal-models, poisson-and-cox-point-process-models |
| 6 | `conjugate-families-and-posterior-prediction-examples` | B | conjugate-families-and-posterior-prediction |

## Your content, in full

### `conjugate-families-and-posterior-prediction` — Conjugate families and Gaussian conditioning

- `lem-beta-density-normalization` · lemma — The Beta density has finite positive Lebesgue integral
- `lem-binomial-count-law` · lemma — The Binomial count has its usual probability mass function
- `lem-gamma-density-normalization` · lemma — The shape-rate Gamma density is normalized
- `def-poisson-law` · definition — Exposure-parameterized Poisson law
- `def-exponential-conjugate-prior-family` · definition — Conjugate-form prior for an exponential family
- `lem-finite-euclidean-space-is-standard-borel` · lemma — Finite-dimensional Euclidean space with its Borel sigma-algebra is standard Borel
- `def-dirichlet-density-kernel` · definition — Dirichlet simplex density kernel
- `lem-multinomial-law-normalization` · lemma — The Multinomial mass function is normalized
- `thm-multivariate-normal-conditional-law` · theorem — Conditional law of a jointly Gaussian block with positive-definite observed covariance
- `thm-iid-exponential-family-statistic-is-sufficient` · theorem — The sum of exponential-family statistics is sufficient for an IID sample
- `def-beta-distribution` · definition — Beta distribution
- `def-gamma-distribution-shape-rate` · definition — Shape-rate Gamma distribution
- `thm-dirichlet-density-normalization` · theorem — Dirichlet density normalization by iterated Beta integrals
- `def-multinomial-distribution` · definition — Multinomial distribution
- `def-dirichlet-distribution` · definition — Dirichlet distribution, including the one-category case
- `thm-beta-binomial-conjugate-update` · theorem — Beta-Binomial conjugate update
- `thm-gamma-poisson-exposure-adjusted-update` · theorem — Exposure-adjusted Gamma-Poisson conjugate update
- `thm-exponential-family-conjugate-update` · theorem — Conjugate update for an exponential-family likelihood
- `thm-dirichlet-multinomial-conjugate-update` · theorem — Dirichlet-Multinomial conjugate update
- `lem-normal-location-scale-density` · lemma — A positive-variance normal law has its location-scale density
- `thm-normal-normal-conjugate-update` · theorem — Known-variance Normal-Normal conjugate update

### `conjugate-families-and-posterior-prediction-examples` — Conjugate families and Gaussian conditioning — Examples

- `ex-multivariate-normal-conditioning-singular-state` · example — Gaussian conditioning with singular state covariance
- `ex-beta-binomial-update` · example — A Beta(2,3) prior updated by five Bernoulli trials
- `ex-exposure-gamma-poisson-update` · example — Gamma-Poisson updating with a zero exposure
- `ex-normal-normal-conjugate-update` · example — Normal precision pooling with two observations
- `ex-dirichlet-multinomial-update` · example — A three-category Dirichlet-Multinomial update

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `conjugate-families-and-posterior-prediction` requires `posterior-propriety-and-dominated-bayes-formula`
- `hierarchical-bayesian-models-and-partial-pooling` requires `conjugate-families-and-posterior-prediction`
- `gaussian-process-priors-and-posterior-laws` requires `conjugate-families-and-posterior-prediction`
- `dirichlet-process-priors-and-finite-partition-updates` requires `conjugate-families-and-posterior-prediction`
- `adaptive-empirical-bayes-credible-set-calibration` requires `conjugate-families-and-posterior-prediction`
- `hamiltonian-monte-carlo-and-leapfrog` requires `conjugate-families-and-posterior-prediction`
- `langevin-monte-carlo-mala-and-ula` requires `conjugate-families-and-posterior-prediction`
- `kalman-filtering` requires `conjugate-families-and-posterior-prediction`
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
