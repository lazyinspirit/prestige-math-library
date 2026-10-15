# Step 3a reader report — batch 27

Run: bayesian-computational-statistics-62  
Batch: 27  
Role: reader

## Inventory opened

Assigned pages:

- approximate-bayesian-computation-and-simulation-based-inference — library/bayesian-computational-statistics/approximate-bayesian-computation-and-simulation-based-inference.md
- approximate-bayesian-computation-and-simulation-based-inference-examples — library/bayesian-computational-statistics/approximate-bayesian-computation-and-simulation-based-inference-examples.md

Both page prerequisites were opened:

- numerical-optimization-for-statistical-computation — library/bayesian-computational-statistics/numerical-optimization-for-statistical-computation.md
- complete-sufficiency-exponential-families-and-basu — library/mathematical-statistics/complete-sufficiency-exponential-families-and-basu.md

All nine assigned items were opened. The A-page dependency order is: def-approximate-bayesian-computation, alg-abc-rejection, thm-abc-rejection-target-is-tolerance-conditioned-posterior, thm-abc-zero-tolerance-target-is-summary-posterior-under-density-regularity, and thm-sufficient-summary-recovers-full-posterior. The B-page items are cex-abc-zero-tolerance-limit-fails-without-integrable-envelope, cex-identifiable-model-with-insufficient-abc-summary, ex-abc-vanishing-acceptance-rate, and ex-abc-finite-sample-sufficient-summary.

I inspected the relevant Definition/Statement sections of these 53 direct suppliers:

cor-archimedean-reciprocal; def-axiom-of-choice; def-bayesian-model-as-prior-and-sampling-kernel; def-bayesian-posterior-as-regular-conditional-law; def-borel-sigma-algebra; def-conditional-law-given-a-random-element; def-countable; def-countable-choice; def-dirac-measure; def-dominated-statistical-experiment; def-estimand-on-a-statistical-model; def-identically-distributed-and-iid-random-variables; def-identifiability-of-an-estimand; def-lebesgue-measure-and-the-lebesgue-sigma-algebra; def-likelihood-density; def-measure-kernel-and-probability-kernel; def-measure-with-density; def-metric-ball; def-metric-topology; def-nonnegative-weighted-sum-of-measures; def-observational-equivalence; def-parametric-statistical-model; def-polish-space; def-posterior-evidence-normalizer-and-fiberwise-update; def-probability-measure; def-separable-space; def-standard-borel-space; def-statistic-and-estimator; def-sufficient-statistic; def-total-variation-distance-for-probability-laws; lem-metrics-on-rn; lem-prior-and-model-kernel-define-joint-law; lem-rat-embeds-dense; prop-dirac-measure-is-a-probability-measure; prop-fiberwise-posterior-propriety-iff-finite-positive-evidence; prop-measure-monotonicity; thm-arithmetic-and-lattice-operations-preserve-measurability; thm-bayes-formula-for-dominated-kernels; thm-borel-sets-are-lebesgue-measurable; thm-change-of-variables-for-expectation; thm-dominated-convergence; thm-geometric-series; thm-indefinite-integral-of-a-nonnegative-function-is-a-measure; thm-lebesgue-measure-of-a-box-of-every-kind; thm-measurability-of-integration-against-a-kernel; thm-metric-open-set-algebra; thm-monotone-convergence-for-the-integral; thm-nonnegative-weighted-sums-of-measures; thm-rationals-countable; thm-reals-cauchy-complete; thm-sequential-criterion-for-function-limits; thm-standard-borel-bayesian-posterior-kernel-exists; and thm-tonelli-theorem-for-sigma-finite-product-spaces.

The following in-run draft suppliers were read in full: def-bayesian-model-as-prior-and-sampling-kernel (batch 4), def-bayesian-posterior-as-regular-conditional-law (batch 4), thm-standard-borel-bayesian-posterior-kernel-exists (batch 4), def-posterior-evidence-normalizer-and-fiberwise-update (batch 5), and prop-fiberwise-posterior-propriety-iff-finite-positive-evidence (batch 5). For the posterior-kernel argument I also opened cor-posterior-r-c-d-exists-for-standard-borel-parameter (in-run batch 4), thm-existence-of-regular-conditional-distributions-for-standard-borel-targets, lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable, and thm-disintegration-of-a-joint-law-on-standard-borel-spaces. The Lebesgue-measure use was checked against thm-lebesgue-measure-is-a-complete-measure.

## Edits and evidence

- In thm-abc-zero-tolerance-target-is-summary-posterior-under-density-regularity, I made the kernel-measurability application explicit. Step 1.1 proves 0 < v_epsilon < infinity, so restricting Lebesgue measure to the closed tolerance ball gives a finite constant kernel. The cited integration-against-a-kernel theorem applies to finite kernels; the updated step identifies that kernel and uses the stated joint measurability of the density. This closes the application condition without strengthening the theorem.
- In thm-sufficient-summary-recovers-full-posterior, I made the dyadic approximation used with monotone convergence explicit. Step 2.1 now records that the approximants are finite-valued simple measurable functions, that their positive level sets lie in C, and that the nested grids increase to the integrand with error below 2^-n. Step 4.1 reuses that construction for the posterior-kernel evaluation.
- Updated both corresponding derivation entries and the F7 use in research/bayesian-computational-statistics-62-batch-27.proof-contracts.json. The changed items had no verification.judge record to remove.
- reflow.mts reported both items unchanged. precheck.mts passed both items. The final node tools/proof-layout.mjs run on both changed item paths reported 2 items, 10 steps, 0 defects.

## External source checks

- Lintusaari et al., “Fundamentals and Recent Developments in Approximate Bayesian Computation,” PDF pp. 13–15 (rejection ABC and its tolerance-conditioned target) and pp. 17–18 (summary-information loss and threshold trade-off): [source](https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf).
- Honkela, Computational Statistics I, Chapter 9 §§9.3–9.7 (prior-simulator rejection, summary-statistic ABC, and its example): [source](https://www.cs.helsinki.fi/u/ahonkela/teaching/compstats1/book/further-monte-carlo-techniques-and-approximate-bayesian-computation-abc.html).
- Beaumont, Zhang, and Balding, “Approximate Bayesian Computation in Population Genetics,” PDF pp. 1–2 (summary-based tolerance rejection instructions): [source](https://people.eecs.berkeley.edu/~jordan/sail/readings/beaumont-zhang-balding.pdf).
- Martin, Kumar, and Lao, Bayesian Modeling and Computation in Python, Chapter 8 §§8.1–8.4 (rejection sampling, tolerances, and information loss from nonsufficient summaries): [source](https://bayesiancomputationbook.com/markdown/chp_08.html).
- Fearnhead and Prangle, “Constructing Summary Statistics for Approximate Bayesian Computation: Semi-automatic ABC,” PDF pp. 2–7 (summary-based ABC construction and acceptance-rate discussion): [source](https://arxiv.org/pdf/1004.1112). The item supplies its zero-tolerance density-envelope theorem locally and does not attribute that theorem to this paper.
- Robert et al., “Lack of Confidence in Approximate Bayesian Computation Model Choice,” PDF pp. 1–4 (information loss from summary statistics in model choice): [source](https://arxiv.org/pdf/1102.4432). The binary counterexample is local.
- Fithian, “Stat 210a Reader: Sufficiency,” section on the Bernoulli count (conditional data law uniform on each count fibre): [source](https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html).
- Ryan Martin, Lecture Notes on Advanced Statistical Theory: sufficiency is discussed in §2.3 (PDF pp. 33–36), and conditional distributions in §1.3 (PDF pp. 14–15): [source](https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf). The batch manifest’s locator §§5.1–5.3, PDF pp. 100–107 points instead to statistical decision theory; the assigned item’s own bibliography has only the title and URL, so I found no inaccurate item-level locator.

## Page verdicts

- approximate-bayesian-computation-and-simulation-based-inference: sound. Its summary accurately states the prior-predictive tolerance target, positive-event condition, rejection result, density-version and envelope hypotheses, and sufficient-summary conclusion. The stated caveats distinguish the density-selected limit from pointwise values of arbitrary regular conditional versions.
- approximate-bayesian-computation-and-simulation-based-inference-examples: sound. Its summary matches the moving-spike counterexample, the identifiable binary model with constant summary, the adjacent-uniform acceptance calculation, and the finite Bernoulli sufficient-summary example.

## Unedited defects and blockers

No confirmed uneditable defect was found in an item or page dependency claim. I found no blocker. The Martin-note locator discrepancy is in the batch manifest, not in the assigned item’s bibliography; it is recorded above and was not routed as an item finding.

## Coverage note

I opened def-approximate-bayesian-computation before its direct suppliers, then inspected those suppliers before completing the dependency-based review. Thus the file-open order did not strictly follow the requested supplier-first sequence. No assigned item, assigned page, or directly relevant dependency claim section was omitted. No separate rendered batch-27 bundle was present under the run’s .autopilot state directory; I used the task manifest and current carriers.
