# Step 4 batch reviewer — batch **36**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **36**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["36"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 36 | `mcmc-clt-and-monte-carlo-standard-error` | A | mcmc-ergodicity-and-mixing, concentration-inequalities-and-tail-bounds, linear-prediction-for-dependent-data, temporal-point-process-intensity-and-likelihood, polyhedral-selective-inference, gaussian-process-priors-and-posterior-laws |
| 36 | `mcmc-clt-and-monte-carlo-standard-error-examples` | B | mcmc-clt-and-monte-carlo-standard-error |

## Your content, in full

### `mcmc-clt-and-monte-carlo-standard-error` — MCMC central limit theorems, MCSE, and long-run variance

- `def-flegal-jones-obm-batch-size-conditions` · definition — Flegal–Jones overlapping-batch size conditions
- `def-geometric-and-uniform-ergodicity-for-mcmc-clt` · definition — Geometric and uniform ergodicity for MCMC CLTs
- `def-long-run-variance-for-stationary-markov-chain` · definition — Long-run variance for a stationary Markov chain
- `def-mixing-coefficients-for-stationary-markov-chain` · definition — Strong, uniform, and maximal-correlation mixing coefficients
- `def-polynomial-ergodicity-with-integrable-rate-envelope` · definition — Polynomial ergodicity with an integrable rate envelope
- `def-state-dependent-one-step-minorization` · definition — State-dependent one-step minorization
- `lem-square-integrable-markov-transition-conditional-expectation` · lemma — Kernel conditional expectations for square-integrable Markov observables
- `lem-countably-generated-kernel-stable-sub-sigma-field` · lemma — A kernel has a countably generated stable sub-sigma-field containing a given observable
- `lem-gaussian-quadratic-form-centered-even-moment-bound` · lemma — Centered Gaussian quadratic forms have dimension-free even-moment bounds
- `thm-summable-l-two-projections-give-stationary-clt` · theorem — Summable conditional projections give a stationary martingale CLT
- `lem-finite-moment-moving-window-increments` · lemma — Finite moments control increments over short moving windows
- `lem-brownian-poisson-independent-clock-composition` · lemma — Independent Brownian motion straightens a Poisson clock
- `lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds` · lemma — Gaussian anchored bounded sums have uniform cumulant and Fourier bounds
- `alg-overlapping-batch-means-mcse` · algorithm — Overlapping batch means for MCMC standard errors
- `lem-geometric-total-variation-rate-controls-strong-mixing` · lemma — A total-variation rate bounds strong-mixing coefficients
- `lem-measurable-observation-does-not-increase-mixing-coefficients` · lemma — A measurable observation does not increase stationary mixing coefficients
- `lem-stationary-chain-tv-convergence-implies-strong-mixing` · lemma — Stationary Markov-chain total-variation convergence implies strong mixing
- `lem-uniform-ergodicity-controls-uniform-mixing` · lemma — Uniform ergodicity bounds the uniform-mixing coefficient
- `lem-zero-long-run-variance-gives-degenerate-clt` · lemma — Zero covariance long-run variance gives a degenerate CLT under absolute summability
- `thm-poisson-equation-martingale-decomposition-clt` · theorem — Poisson-equation martingale decomposition and MCMC CLT
- `lem-geometric-split-renewal-gives-integrable-hitting-time` · lemma — Geometric small-set renewal convergence gives an integrable exponential hitting moment
- `lem-strong-mixing-quantile-covariance-bound` · lemma — Strong-mixing covariance bound in terms of tail quantiles
- `lem-two-sided-stationary-extension-preserves-rho-mixing` · lemma — Two-sided stationary extension preserves maximal-correlation bounds
- `lem-gaussian-anchored-sum-density-moderate-deviation-bound` · lemma — Moderate deviation density bounds for Gaussian anchored sums
- `lem-geometrically-ergodic-chain-has-standard-borel-observation-factor` · lemma — A geometrically ergodic chain has an all-start standard-Borel observation factor
- `lem-geometric-reversible-chain-rho-mixing` · lemma — Geometric ergodicity and reversibility give exponential rho-mixing
- `thm-rho-mixing-clt-for-square-integrable-sequences` · theorem — A rho-mixing CLT for square-integrable stationary sequences
- `lem-obm-consistency-from-strong-brownian-approximation` · lemma — Strong Brownian approximation implies overlapping-batch consistency
- `thm-bounded-summable-strong-mixing-clt` · theorem — Bounded stationary CLT under summable strong mixing
- `lem-geometric-strong-mixing-gives-lp-poisson-solution` · lemma — Geometric strong mixing gives an Lp Poisson solution
- `lem-gaussian-anchored-conditional-quantile-coupling` · lemma — Conditional quantile couplings for Gaussian anchored sums
- `lem-harris-geometric-ergodicity-has-integrable-rate-envelope` · lemma — Harris geometric ergodicity admits an integrable total-variation envelope
- `thm-strong-mixing-clt-with-moment-conditions` · theorem — Strong-mixing CLTs under bounded, moment, and logarithmic-moment conditions
- `thm-uniform-mixing-clt-for-square-integrable-sequences` · theorem — A uniform-mixing CLT for square-integrable stationary sequences
- `lem-bounded-vector-log-cubed-gaussian-coupling` · lemma — Bounded independent vector rows admit a logarithmic cubed Gaussian coupling
- `lem-geometric-markov-chain-has-adjacent-iid-split-tours` · lemma — Geometric Markov chains admit delayed adjacent-iid split tours with spare moments
- `lem-heterogeneous-bounded-atom-vector-log-cubed-gaussian-coupling` · lemma — Heterogeneous bounded atom vector rows admit a logarithmic cubed Gaussian coupling
- `thm-mcmc-clt-sufficient-regimes` · theorem — Sufficient MCMC CLT regimes
- `lem-zero-variance-geometric-markov-sums-have-strong-rate` · lemma — Zero-variance geometric Markov sums have a uniform strong rate
- `lem-iid-finite-moment-vector-strong-approximation` · lemma — Finite-moment iid vectors admit a strong Gaussian approximation
- `lem-adjacent-iid-finite-moment-vector-strong-approximation` · lemma — Adjacent iid vector functionals admit a finite-moment strong approximation
- `thm-geometrically-ergodic-chain-strong-invariance-principle` · theorem — Strong invariance principle for geometrically ergodic chains
- `thm-overlapping-batch-means-strong-consistency` · theorem — Strong consistency of overlapping batch means

### `mcmc-clt-and-monte-carlo-standard-error-examples` — MCMC central limit theorems, MCSE, and long-run variance — Examples

- `cex-sticky-reducible-chain-has-no-root-n-clt` · counterexample — A stationary sticky chain with finite variance and no root-n CLT
- `ex-overlapping-batch-size-fails-a-source-condition` · example — A batch-size sequence fails the OBM consistency conditions
- `ex-poisson-equation-ar1-long-run-variance` · example — Poisson equation and long-run variance for a stationary AR(1) chain

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `mcmc-clt-and-monte-carlo-standard-error` requires `mcmc-ergodicity-and-mixing`
- `mcmc-clt-and-monte-carlo-standard-error` requires `gaussian-process-priors-and-posterior-laws`
- `mcmc-diagnostics-and-finite-run-limitations` requires `mcmc-clt-and-monte-carlo-standard-error`
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
