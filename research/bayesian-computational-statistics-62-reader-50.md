# Step 3a reader report — batch 50

Run: `bayesian-computational-statistics-62`  
Role: reader  
Assigned batch: `50`

## Opened inventory

Assigned pages:

- `library/bayesian-computational-statistics/resampling-algorithms-and-sampling-units.md` — “Resampling schemes and the sampling-unit contract”.
- `library/bayesian-computational-statistics/resampling-algorithms-and-sampling-units-examples.md` — companion examples page.

Assigned items, reviewed supplier-first by dependency level:

- Level 0: `def-resampling-sampling-unit-contract`, `def-empirical-measure`, `lem-uniform-law-on-finite-subset-families`.
- Level 1: `lem-empirical-measure-is-a-probability-measure`, `alg-delete-d-jackknife-replicates`, `alg-uniform-subsampling-without-replacement`.
- Level 2: `alg-n-out-of-n-bootstrap-from-empirical-law`, `ex-delete-d-and-subsampling`.
- Level 3: `thm-bootstrap-draws-are-conditionally-iid-empirical-law`.
- Level 4: `ex-two-point-bootstrap-sample-mean`, `ex-cluster-resampling-unit`, `cex-pointwise-bootstrap-does-not-preserve-dependent-pair-law`, `ex-assignment-randomization-versus-bootstrap`.

Direct supplier items opened to check the assigned claims:

- Experiment, measurable-space, and measure foundations: `def-statistical-experiment`, `def-measurable-space`, `def-dirac-measure`, `def-probability-measure`, `prop-dirac-measure-is-a-probability-measure`.
- Finite counting and probability: `def-finite-cardinality`, `def-finite-probability-space-and-event`, `thm-cardinality-of-a-set-of-functions`, `thm-subset-of-a-finite-set`, `thm-product-rule`.
- Statistics and probability: `def-statistic-and-estimator`, `def-identically-distributed-and-iid-random-variables`, `def-law-or-distribution-of-a-random-element`, `def-random-element-and-real-random-variable`, `def-independent-random-elements`, `def-independent-sigma-algebras-and-events`, `def-partial-sums-and-sample-means`, `def-moments-variance-and-covariance`.
- Assignment-randomization support: `def-finite-randomized-treatment-assignment-model`, `def-finite-population-average-treatment-effect-and-weak-null`, `def-fisher-sharp-null-and-predeclared-test-orderings`, `def-p-value`, `lem-finite-weighted-upper-tail-pvalues-and-randomized-ties`, `thm-fisher-sharp-null-randomization-pvalues-are-valid`.
- Required published page: `library/statistical-models-and-experiments/randomized-treatment-assignment-and-sharp-null-tests.md`, including its five listed items above.

I also consulted `research/bayesian-computational-statistics-62-batch-50.proof-contracts.json`, the batch coverage and notes, and the live autopilot status as supporting evidence only. The assigned carriers were untracked before this review; no prior committed versions were listed by the targeted `git log` query.

## Review and verdicts

The definitions specify their domains and boundary conditions. The empirical measure counts repeated values by index, and the Dirac-measure argument establishes countable additivity and total mass one. The subset-family lemma proves finiteness, nonemptiness, and equal weights for both endpoint cases. The jackknife and subsampling procedures enumerate the declared index subsets and avoid asserting a validity result. The bootstrap theorem constructs a finite index-vector probability space and counts constrained vectors to obtain the product of empirical probabilities; its independence conclusion follows from the opened definitions of independent random elements and IID families.

The four examples were checked directly. The delete-two complement means are `11/2, 9/2, 3, 4, 5/2, 3/2`, with average `7/2`; complementation is a bijection on the six two-subsets. For the fixed sample `(0,2)`, the bootstrap mean law puts probabilities `1/4, 1/2, 1/4` on means `0, 1, 2`. The cluster example resamples complete two-coordinate records. In the stationary binary Markov example, the original covariance is `1/8`, while the conditional pointwise-bootstrap covariance is zero. In the two-unit sharp-null example, assignment randomization yields scores `-2` and `2`, whereas the pointwise bootstrap with assignment fixed also puts mass `1/2` at zero; the sharp-null and weak-null distinction is supported by the opened published definitions and theorem.

I checked the Efron–Tibshirani bibliographic detail against the linked Stanford report copy: its cover page (PDF p. 1) labels it Technical Report No. 19, October 1985. Stanford's catalog record lists March 1985, while the Springer journal record identifies *Behaviormetrika* volume 12, pages 1–35. The item citation identifies the full-text report copy and its cover date, so this difference is not a citation defect. [Stanford report copy](https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf), [Stanford catalog record](https://statistics.stanford.edu/technical-reports/bootstrap-method-assessing-statistical-accuracy), [Springer journal record](https://link.springer.com/article/10.2333/bhmk.12.17_1).

**A-page verdict:** No defect found in `resampling-algorithms-and-sampling-units`. Its summary matches the definitions and finite-law results. The “any finite index set” wording is supplied by relabeling the lemma's standard index set `[n]` through a bijection.

**B-page verdict:** No defect found in `resampling-algorithms-and-sampling-units-examples`. Its summaries agree with the checked example calculations and do not claim general bootstrap validity.

## Edits and unresolved defects

- Edits: none. No assigned item or page required a repair.
- Defects not editable: none identified.
- No item changed, so reflow, precheck, and proof-layout were not run.

## Blockers and coverage limits

No blocker. The review covered all 13 assigned items, both assigned pages, their direct supplier items, and the required assignment-randomization page and its listed items. It was not a wholesale re-audit of every transitive item in the library's 315-item dependency closure. No external cited statement was needed to complete the finite proofs; bibliographic locators beyond the Efron–Tibshirani report/journal records above were not independently rechecked.
