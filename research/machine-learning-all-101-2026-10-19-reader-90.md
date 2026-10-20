# Step 3a reader report — batch 90

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Verdict: no uneditable defects remain in the assigned batch.

## Inventory opened

### Assigned pages

- `library/machine-learning/constrained-mdps-and-policy-safety.md`
- `library/machine-learning/constrained-mdps-and-policy-safety-examples.md`

Both pages are metadata-only with empty Markdown bodies and preserve `page_layout: compact-v1`. The A page lists all twelve assigned A items and the B page lists all four assigned examples. All five A-page `requires` IDs resolve to pages in their respective categories.

### Assigned items

The A-page items were opened and reviewed in dependency order:

- `lem-finite-action-average-tv-controlled-by-kl`
- `def-constrained-markov-decision-process`
- `def-normalized-discounted-state-occupancy`
- `def-discounted-cost-constraint`
- `lem-normalized-discounted-state-occupancy-is-probability`
- `def-discounted-value-and-advantage-functions`
- `lem-discounted-occupancy-change-bounded-by-average-tv`
- `lem-mdp-performance-difference-identity-with-arbitrary-baseline`
- `thm-policy-performance-bound-by-average-divergence`
- `alg-constrained-policy-optimization`
- `lem-cpo-sample-update-well-defined-and-finite-search`
- `rem-cpo-implementation-is-approximate`

The B-page items were also opened:

- `ex-expected-discounted-cost-does-not-imply-pathwise-safety`
- `ex-empirical-cost-satisfaction-can-miss-population-violation`
- `ex-exact-trust-region-and-sampled-line-search-disagree`
- `cex-arbitrary-baseline-bound-without-old-policy-residual`

### Mathematical suppliers opened

`def-axiom-of-choice`, `def-kullback-leibler-divergence`, `def-total-variation-distance-for-probability-laws`, `thm-pinsker`, `def-finite-markov-decision-process`, `thm-geometric-series`, `lem-bounded-discounted-return-converges`, `thm-induction-principle`, `lem-geometric-sequence-null`, `def-differentiable-stochastic-policy`, `def-hessian-and-euclidean-critical-point`, `def-euclidean-inner-product`, `lem-definite-quadratic-forms-have-a-uniform-sphere-bound`, `thm-heine-borel-rn`, `thm-extreme-value-metric`, `lem-closed-subset-of-a-compact-space-is-compact`, `thm-invertible-matrix-theorem`, `thm-cauchy-schwarz-and-the-euclidean-norm`, and `thm-logarithm-derivative-and-integral`.

No TikZ or other diagrams occur in the assigned items.

## Repairs and evidence

- In `alg-constrained-policy-optimization`, the parameter domain is now named as an open set `U`, the current parameter is explicitly required to lie in `U`, and the sample surrogates are defined on all of `U`. Fixed common support and positive current probability for each sampled action make the ratios and KL terms defined for every in-domain line-search candidate. This resolves the mismatch between the former local “near” domain and the algorithm’s domain-wide candidate test. The Hessian branch now states symmetry and positive definiteness separately, so its condition is exact for a matrix. The direct consumers `lem-cpo-sample-update-well-defined-and-finite-search`, `rem-cpo-implementation-is-approximate`, and `ex-exact-trust-region-and-sampled-line-search-disagree` were checked against the clarified definition; no consumer repair was needed.
- In `lem-normalized-discounted-state-occupancy-is-probability`, proof step 2.1 now establishes convergence of each coordinate occupancy series from $0\le\mu_t^\pi(s)\le1$ and the geometric-series result before summing over the finite state set.
- In `lem-discounted-occupancy-change-bounded-by-average-tv`, proof step 1.1 now establishes convergence of the finite matrix series coordinatewise by comparison with the geometric series before using its resolvent identity.
- In `rem-cpo-implementation-is-approximate`, the opening sentence now states the precise limitation: a cost expectation bounds violation probability only when the cost signal is linked to that event; the generic expected-cost constraint alone does not give pathwise safety or safe exploration.
- The affected derivation and boundary entries were updated in `research/machine-learning-all-101-2026-10-19-batch-90.proof-contracts.json`. None of the four repaired items had a stale `verification.judge` record.

The cited primary CPO source was checked at [Achiam et al., *Constrained Policy Optimization*](https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf), §§5.1 and 6.1–6.3 (policy-return bound, sampled update, conjugate-gradient approximation, recovery direction, and cost shaping), and its [supplement](https://proceedings.mlr.press/v70/achiam17a/achiam17a-supp.pdf), §§10.1.1–10.1.2 (discounted occupancy, resolvent identity, and policy-performance lemmas). The local citations and scope claims match those locations. The logarithm integral identity used by the exact trust-region example was checked in `thm-logarithm-derivative-and-integral`, Statement and proof steps 1.1–2.1.

## Defects not repaired

None identified in the assigned items, pages, or mathematical suppliers opened for these checks.

## Page verdicts

- `constrained-mdps-and-policy-safety`: **clear**. Its metadata inventory matches the batch manifest; the required pages resolve; the page body is empty.
- `constrained-mdps-and-policy-safety-examples`: **clear**. Its four example IDs match the batch manifest; the page body is empty.

## Validation and blockers

- Reflow completed for all four repaired items and reported each unchanged.
- Precheck reported zero failing items: the two lemmas passed direct checks; the algorithm and remark returned “0 checked, 0 failing — all clean.”
- Final proof-layout check: `4 items, 7 steps, 0 defects`.
- No blocker affects batch 90. At review time, autopilot status showed an unrelated run-level `3a-collect` blocker: `collect-57` had failed three times.

This review checked all assigned items and the listed suppliers used directly in their arguments. It did not re-audit unrelated transitive dependency closures of every external supplier.
