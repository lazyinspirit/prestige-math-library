# Step 3a reader report — batch 17

Run: `bayesian-computational-statistics-62`  
Role: reader  
Batch: `17`

## Disposition

Reviewed the two assigned pages and all ten assigned items. I repaired one
overstrong sentence in the assigned remark. No defect remains unedited and no
blocker remains.

## Opened inventory

**Assigned pages**

- `library/bayesian-computational-statistics/dirichlet-process-priors-and-finite-partition-updates.md`
- `library/bayesian-computational-statistics/dirichlet-process-priors-and-finite-partition-updates-examples.md`

**Assigned items, in local dependency order**

- `lem-countable-discrete-space-is-standard-borel`
- `def-poisson-random-measure`
- `def-dirichlet-process`
- `thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure`
- `lem-dirichlet-aggregation-under-coarsening`
- `thm-dirichlet-process-posterior-update`
- `thm-dirichlet-process-polya-urn-predictive-law`
- `rem-dirichlet-process-support-does-not-imply-density-contraction`
- `ex-dirichlet-process-finite-partition-posterior-and-polya-urn`
- `ex-dirichlet-process-alpha-null-observation-fiber`

**Draft suppliers in other current-run batches, read as dependencies**

- Batch 4: `def-bayesian-model-as-prior-and-sampling-kernel`,
  `def-bayesian-posterior-as-regular-conditional-law`.
- Batch 6: `def-poisson-law`, `def-gamma-distribution-shape-rate`,
  `lem-gamma-density-normalization`, `def-dirichlet-density-kernel`,
  `def-dirichlet-distribution`, `thm-dirichlet-density-normalization`, and
  `thm-dirichlet-multinomial-conjugate-update`.

**Published dependencies consulted at the relevant statement or proof
sections**

`def-countable`, `def-sigma-algebra`, `def-metric-space`, `def-metric-ball`,
`def-metric-topology`, `def-cauchy-in-metric`, `def-complete-metric-space`,
`def-separable-space`, `def-polish-space`, `def-borel-sigma-algebra`,
`def-standard-borel-space`,
`lem-finite-products-of-standard-borel-spaces-are-standard-borel`,
`lem-borel-subspaces-admit-polish-presentations`,
`thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`,
`def-axiom-of-choice`, `def-countable-choice`,
`thm-choice-implies-dependent-implies-countable-choice`,
`lem-poisson-count-law-normalization-and-moments`,
`def-real-exponential-function-and-e`, `thm-exponential-addition-formula`,
`thm-binomial-theorem`, `def-real-gamma-function-by-the-euler-integral`,
`thm-real-gamma-euler-integral-convergence`,
`thm-real-power-continuity-and-derivatives`, `thm-derivative-of-exponential`,
`thm-integral-exponential-agrees-with-exponential`,
`thm-exponential-limits-and-range`, `thm-logarithm-derivative-and-integral`,
`lem-uniqueness-of-a-multivariate-exponential-transform`,
`thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`,
`thm-tonelli-theorem-for-sigma-finite-product-spaces`,
`thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`,
`thm-nonnegative-weighted-sums-of-measures`, `def-dirac-measure`,
`prop-dirac-measure-is-a-probability-measure`, `def-measure`,
`def-finite-sigma-finite-and-semifinite-measures`, `def-probability-measure`,
`def-random-element-and-real-random-variable`,
`def-measurable-function-between-measurable-spaces`,
`def-law-or-distribution-of-a-random-element`,
`def-expectation-of-a-nonnegative-or-integrable-random-variable`,
`thm-change-of-variables-for-expectation`,
`thm-monotone-convergence-for-the-integral`, `thm-dominated-convergence`,
`def-independent-random-elements`,
`thm-independent-random-elements-have-product-joint-law`,
`def-pi-system`, `thm-dynkin-pi-lambda`,
`lem-finite-measure-uniqueness-on-a-pi-system`,
`def-product-sigma-algebra-and-finite-product-sigma-algebras`,
`def-measure-kernel-and-probability-kernel`,
`lem-finite-products-of-probability-kernels`,
`lem-prior-and-model-kernel-define-joint-law`,
`def-conditional-law-given-a-random-element`,
`def-identically-distributed-and-iid-random-variables`,
`thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`,
`def-lebesgue-measure-and-the-lebesgue-sigma-algebra`,
`thm-euclidean-space-complete`, `thm-rationals-countable`, and
`lem-rat-embeds-dense`.

**External source passages opened**

- David Marker, *Descriptive Set Theory*, §1, Example 1.2, PDF p. 2:
  [course notes](https://homepages.math.uic.edu/~marker/math512/dst.pdf).
- Günter Last and Mathew Penrose, *Lectures on the Poisson Process*, §3.1,
  Definition 3.1; §3.2, Proposition 3.5 and Theorem 3.6, PDF pp. 19–22:
  [2017 text](https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf).
- Thomas S. Ferguson, “A Bayesian Analysis of Some Nonparametric Problems,”
  §3, Theorem 1 (printed pp. 217–218), and §4, normalized-gamma construction:
  [1973 paper](https://users.wpi.edu/~balnan/Ferguson1973.pdf).
- Subhashis Ghosal and Aad van der Vaart, “Posterior convergence rates of
  Dirichlet mixtures at smooth densities,” §7, Lemma 10, and §8, Lemma 11,
  PDF pp. 19–21:
  [paper](https://arxiv.org/pdf/0708.1885).

## Review and edit record

- The countable-discrete lemma's discrete metric is complete, induces the
  power-set topology, and has the required countable dense subset. The
  Poisson-random-measure and Dirichlet-process definitions retain their stated
  finite-intensity, zero-cell, and evaluation-measurability conventions.
- In the normalized-gamma construction, the strip intensities are finite and
  positive; the marked Poisson counts have the claimed independent Poisson
  laws; the weighted total is finite and positive almost surely; the Laplace
  transform identifies the Gamma increments; and the change of variables
  gives the normalized Dirichlet laws. The cited standard-Borel product,
  product-measure, Tonelli, change-of-variables, and transform-uniqueness
  statements match the uses made in the proof.
- The coarsening proof groups independent Gamma increments and handles its
  one-cell case. The posterior-update proof establishes measurability on
  finite evaluation cylinders, the disintegration identity on data rectangles,
  and both extensions by finite-measure uniqueness. The predictive proof
  covers zero-cell and one-cell boundaries. Both examples' finite arithmetic,
  null-fiber changes, and kernel measurability are valid.
- **Repair — `rem-dirichlet-process-support-does-not-imply-density-contraction`,
  Remarks, final paragraph.** The prior text grouped weak support with
  posterior contraction and required both a truth class and a
  posterior-contraction proof. I separated the claims: weak support now calls
  for a topology and positive prior mass in each neighborhood; a density
  posterior theorem additionally requires a specified model and truth class
  and its own model-specific argument. Ghosal–van der Vaart §7, Lemma 10 gives
  a finite-dimensional prior-mass estimate, while §8, Lemma 11 addresses a
  separate mixture-posterior tail-mass bound under stated assumptions. Ferguson
  §3, Theorem 1 gives the finite-partition update; it does not assert a
  topology-dependent support or density-contraction result.
- Updated the assigned proof-contract entry with an open risk-review note. The
  item had no `verification.judge` record to remove.
- Checks after the repair: reflow reported unchanged; precheck reported `0
  checked, 0 failing`; scoped proof-contract validation reported `0 errors, 0
  warnings`; proof-layout reported `1 items, 0 steps, 0 defects`.

## Page verdicts

- **`dirichlet-process-priors-and-finite-partition-updates`: clear after the
  remark repair.** Its summary accurately states the construction, posterior
  update, predictive law, and limits of the finite-partition results.
- **`dirichlet-process-priors-and-finite-partition-updates-examples`: clear.**
  Its summary matches both the finite-partition calculation and the
  prior-predictive null-fiber example.

## Unedited defects and blockers

None.

## Coverage note

All ten assigned items and both assigned pages were read. The relevant direct
supplier statements and the construction-critical published proofs listed
above were checked. This was a batch review, not a recursive audit of every
proof in the published transitive foundational dependency closure.
