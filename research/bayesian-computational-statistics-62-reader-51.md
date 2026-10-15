# Step 3a reader report — batch 51

Run: **bayesian-computational-statistics-62**

## Scope and state

I checked the active run with the autopilot status command: it is running at Step 3a reader, and no worker was running when reviewed. The assigned manifest lists two pages and 19 items. I reviewed the current item and page files independently of the manifest statements and author decisions.

## Opened inventory

### Assigned pages

- **iid-bootstrap-and-jackknife-validity** (A)
- **iid-bootstrap-and-jackknife-validity-examples** (B)

### Assigned items

The A page’s 15 items:

- alg-lower-empirical-bootstrap-quantile
- def-iid-empirical-bootstrap-sample
- lem-iid-sample-covariance-converges
- alg-basic-bootstrap-interval
- alg-bias-corrected-bootstrap-interval
- alg-bootstrap-t-interval
- alg-percentile-bootstrap-interval
- lem-empirical-bootstrap-law-is-a-probability-measure
- thm-delete-one-jackknife-linearization-for-smooth-statistics
- lem-finite-bootstrap-cdf-supremum-is-measurable
- alg-delete-one-jackknife-acceleration
- lem-finite-index-bootstrap-sample-is-conditionally-iid
- alg-bca-bootstrap-interval
- thm-conditional-iid-bootstrap-clt-for-empirical-law
- thm-iid-bootstrap-validity-for-smooth-statistics

The B page’s four items:

- ex-delete-one-jackknife-for-sample-mean
- ex-discrete-median-bootstrap-ties
- cex-iid-bootstrap-inconsistency-at-absolute-mean-kink
- ex-iid-bootstrap-smooth-mean

### Required context pages opened

- resampling-algorithms-and-sampling-units
- delta-method-and-asymptotic-normality
- confidence-sets-pivots-and-test-inversion
- polyhedral-selective-inference

### Direct external item dependencies opened

All unique external item dependencies named by the assigned item contracts were published. I opened their statements and the proof clauses used by this batch:

- Probability, measurability, and finite-space items: def-statistic-and-estimator, def-identically-distributed-and-iid-random-variables, def-moments-variance-and-covariance, def-partial-sums-and-sample-means, def-measurable-function-between-measurable-spaces, def-borel-sigma-algebra, def-probability-measure, def-dirac-measure, def-finite-probability-space-and-event, def-measure, def-nonnegative-extended-series, thm-cardinality-of-a-set-of-functions, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-continuous-preimages-of-borel-sets-are-borel, prop-indicator-function-is-measurable-iff-its-set-is-measurable, lem-measurable-functions-preserve-independence, thm-finite-and-countable-subadditivity-of-measures.
- Limit laws and probability tools: def-axiom-of-choice, def-convergence-in-distribution-for-real-random-variables, def-cumulative-distribution-function-of-a-random-variable, def-standard-normal-and-normal-laws, lem-standard-normal-cdf-is-continuous-and-strictly-increasing, def-multivariate-normal-law, def-row-wise-independent-centered-triangular-array, def-total-row-variance-and-lindeberg-condition, thm-dominated-convergence, cor-markov-inequality-for-random-variables, thm-lindeberg-feller-central-limit-theorem-sufficiency, thm-lindeberg-levy-iid-central-limit-theorem, thm-multivariate-iid-central-limit-theorem, thm-slutsky-for-real-random-variables, thm-continuous-mapping-theorem, thm-almost-sure-convergence-implies-convergence-in-probability, thm-vector-stochastic-order-calculus, thm-first-and-second-order-delta-method-for-random-vectors, thm-khinchin-weak-law-for-iid-integrable-variables.
- Analysis and calculus items: def-frechet-derivative-between-banach-spaces, def-real-frechet-derivative-on-real-and-complex-matrix-spaces, thm-chain-sum-product-and-composition-rules-for-banach-derivatives, cor-mean-value-theorem, thm-heine-cantor-metric, thm-well-ordering-principle, cor-archimedean-reciprocal.

## Mathematical review and source checks

The finite empirical law and conditional IID lemmas correctly handle repeated observed values by retaining index multiplicities. The sample covariance lemma’s integrability argument follows from the finite second moment and 2|xy| ≤ x²+y². The conditional bootstrap CLT proves the projected Lindeberg condition in probability, selects an almost-sure subsequence for all rational tail cutoffs, applies the conditional triangular-array CLT, and upgrades pointwise CDF convergence to uniform convergence using continuity of the Gaussian CDF. The smooth-statistic theorem applies the multivariate CLT and delta method to the sampling root and controls the conditional bootstrap remainder using conditional second-moment tightness. The jackknife proof establishes deletion-secant control under the stated neighborhood C¹ hypothesis and proves both pseudovalue linearization and variance consistency. No hidden positivity, moment, or differentiability hypothesis was needed beyond those stated.

The examples’ computations were checked directly: the sample-mean pseudovalues equal the observations; for data (0,0,1), the bootstrap median is one with probability 7/27, giving quantiles 0 and 1 under the declared convention; the absolute-mean counterexample’s conditional probability at zero has random limit Φ(2|Z|)−1/2, not zero.

Relevant source passages checked:

- Efron and Tibshirani (1985), §4, equations (4.6)–(4.10), for the bootstrap-t construction; §7, percentile/BC/BCa formulas; §10, jackknife context: https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf.
- University of Washington STAT 581, Chapter 8, §2 for empirical resampling, §3 for delete-one definitions, §4 Theorem 4.1 and proof (PDF pp. 14–15), and §5 Theorem 5.1 (PDF pp. 25–26): https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf.
- Bickel, Götze, and van Zwet (1997), §2.3, Example 6 (PDF p. 7), states the absolute-value kink failure and its random conditional limit: https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf.
- Davison and Hinkley (1997), Chapter 5, §5.2, gives the reflected basic bootstrap quantile endpoints $[2\hat\theta-q_{1-\alpha/2},2\hat\theta-q_{\alpha/2}]$: https://www.cambridge.org/core/books/abs/bootstrap-methods-and-their-application/confidence-intervals/499FDF2036D956E7B7E7FB7F25D08B13.
- Efron and Tibshirani (1993), §14.3, p. 186, equation (14.15), gives $a=\sum_i(\bar\theta_{(.)}-\hat\theta_{(i)})^3/[6\{\sum_i(\bar\theta_{(.)}-\hat\theta_{(i)})^2\}^{3/2}]$, where $\hat\theta_{(i)}$ are delete-one estimates and $\bar\theta_{(.)}$ is their average: https://books.google.com/books?id=gLlpIUxRntoC.

## Edits made

1. In alg-basic-bootstrap-interval sources, added Davison and Hinkley, Chapter 5, §5.2. The existing Efron and Tibshirani §§4 and 7 reference did not state the reflected basic interval formula; the added chapter source identifies that exact method. No algorithm instruction changed.
2. In alg-delete-one-jackknife-acceleration sources, added Efron and Tibshirani (1993), §14.3, equation (14.15), p. 186, which gives the exact jackknife expression used. No algorithm instruction changed.
3. In thm-conditional-iid-bootstrap-clt-for-empirical-law, corrected Step 6.1’s invalid internal reference “steps 2.2–2.4” to the existing subsequence construction in Step 2.2 and consequences in Steps 3.1–5.1. Updated the Step 6.1 derivation claim in the batch proof-contract file. The edited items had no verification.judge records to remove.

Validation after the final edits:

- Reflow: all three changed items reported unchanged.
- Precheck: the conditional CLT passed directly; the two algorithms had zero proof checks and no failures.
- node tools/proof-layout.mjs items/alg-basic-bootstrap-interval.md items/alg-delete-one-jackknife-acceleration.md items/thm-conditional-iid-bootstrap-clt-for-empirical-law.md: 3 items, 8 steps, 0 defects.

## Unedited defects, page verdicts, and blocker

- Unedited defects: none found.
- iid-bootstrap-and-jackknife-validity: no remaining reader defect. Its summary accurately limits the bootstrap claim to first-order smooth-statistic validity and disclaims interval coverage; its jackknife summary states the additional neighborhood C¹ condition.
- iid-bootstrap-and-jackknife-validity-examples: no remaining reader defect. The four example claims and computations agree with their suppliers and stated conventions.
- Blocker: none.

The current alg-bias-corrected-bootstrap-interval file explicitly extends Φ to ±∞, so its endpoint cases are defined. The manifest summary omitted that extension; review followed the current item file.

Coverage note: all assigned items, both assigned pages, four required context pages, and the direct external item dependencies listed above were opened. Source review was limited to the cited passages relevant to the claims in this batch; unrelated transitive dependencies of published suppliers were not independently re-audited.
