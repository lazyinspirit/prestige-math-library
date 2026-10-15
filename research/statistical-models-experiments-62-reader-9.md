# Step 3a reader report — batch 9

Run: `statistical-models-experiments-62`  
Batch: `9`  
Review date: 2026-10-15

## Run and scope

The live autopilot status showed Step 3a read in progress with no worker
currently running. This review covers the two pages and nine items in batch 9.
The in-run supplier `def-finite-population-and-sampling-design` is assigned to
batch 8; it was read as dependency context and was not edited.

## Opened inventory

### Assigned pages

- `library/statistical-models-and-experiments/horvitz-thompson-variance-and-srswor.md`
- `library/statistical-models-and-experiments/horvitz-thompson-variance-and-srswor-examples.md`

### Assigned items, read in supplier-before-consumer order

- `def-inclusion-covariance-difference`
- `def-simple-random-sampling-without-replacement`
- `thm-horvitz-thompson-variance-and-pair-inclusion-estimator`
- `thm-sen-yates-grundy-variance-identity`
- `thm-srswor-mean-variance-and-finite-population-correction`
- `ex-srswor-ht-variance-and-yates-grundy`
- `ex-zero-pair-support-prevents-universal-unbiased-variance-estimation`
- `ex-srswor-census-and-singleton-boundaries`
- `ex-syg-sign-condition-and-negative-estimate`

### Dependency items opened

- `def-finite-population-and-sampling-design` (current-run batch 8)
- `def-finite-probability-space-and-event`
- `def-expectation-on-a-finite-probability-space`
- `def-moments-variance-and-covariance`
- `lem-variance-and-covariance-identities-for-random-variables`
- `thm-covariance-bilinearity-and-symmetry`
- `thm-variance-of-a-finite-sum`
- `cor-expectation-of-an-indicator-is-probability`
- `cor-expectation-linearity-monotonicity-and-modulus-bound`
- `def-statistic-and-estimator`

Also opened the batch contract file `research/statistical-models-experiments-62-batch-9.proof-contracts.json` and checked its nine-item scope, cited-fact mappings, derivation steps, and boundary entries against the current items.

## Mathematical review

### A page: `horvitz-thompson-variance-and-srswor`

**Verdict: pass; no confirmed defect.** The page summary accurately describes
the finite-design HT variance formula, its all-pairs positivity condition,
the fixed-size SYG identity and sufficient sign condition, and the SRSWOR
finite-population correction. Its caveat that these design moments do not
provide exact normal or t inference is sound.

- `def-inclusion-covariance-difference`: the ordered-pair definition follows
  the supplier's `pi_ii = pi_i` convention and gives the stated diagonal
  value.
- `def-simple-random-sampling-without-replacement`: the support and uniform
  mass are correct for `1 <= n <= N`, including singleton and census sizes.
- `thm-horvitz-thompson-variance-and-pair-inclusion-estimator`: the proof
  checks square-integrability on the finite design space, expands the finite
  sum variance, evaluates indicator moments, and uses pair positivity exactly
  where division by `pi_ij` is required. The zero-support caveat correctly
  distinguishes the undefined all-pairs formula from claims about other
  design-specific estimators.
- `thm-sen-yates-grundy-variance-identity`: fixed sample size gives zero row
  sums; symmetry and expansion yield the identity. Pair positivity makes the
  sample estimate defined, and pairwise nonpositive off-diagonal differences
  give the stated sufficient sign condition. The variance's nonnegativity
  does not depend on that condition.
- `thm-srswor-mean-variance-and-finite-population-correction`: the subset
  counts, distinct-unit covariance, and simplification to the centered
  finite-population sum are correct. The `n=1` and census cases are handled
  without using an undefined sample-variance denominator.

The theorem's source remark is accurate. Shalabh's *Sampling Theory*,
Chapter 2, printed p. 14, displays
`Cov(a_i,a_j) = + n(N-n)/(N^2(N-1))` for distinct units. Its inclusion
probability formula on the same page gives the negative value derived in the
item. Printed pp. 14–15 also give the sample-mean variance result. The SRS
definition's equal-subset probability is stated at printed pp. 11–12.

### B companion page: `horvitz-thompson-variance-and-srswor-examples`

**Verdict: pass; no confirmed defect.** The page summary matches its four
examples and correctly states that a valid unbiased SYG estimate can be
negative for one sample.

- `ex-srswor-ht-variance-and-yates-grundy`: all three sample totals, both
  variance estimates, the sample-mean variance, and their expectations are
  correctly calculated.
- `ex-zero-pair-support-prevents-universal-unbiased-variance-estimation`:
  the supported-pair truncation has expectation `a^2+b^2`; the four-point
  rectangle argument correctly rules out any estimator based only on the
  observed singleton record that is unbiased for every `(a,b)`.
- `ex-srswor-census-and-singleton-boundaries`: the mean, finite-population
  variance, census result, singleton variance, and denominator caveats are
  correct.
- `ex-syg-sign-condition-and-negative-estimate`: the six weights, inclusion
  probabilities, pair differences, sample estimates, and expectations for
  both fixed populations are correct. The examples establish the claimed
  sufficient-versus-not-necessary distinction for the sign condition.

## Source checks

- [Shalabh, *Sampling Theory*, Chapter 2](https://home.iitk.ac.in/~shalab/sampling/chapter2-sampling-simple-random-sampling.pdf): printed pp. 11–12 state the equal probability of each SRSWOR sample; printed p. 14 gives the inclusion-indicator moments and the positive-sign covariance typo noted above; printed pp. 14–15 give the sample-mean variance formula.
- [Shalabh, *Sampling Theory*, Chapter 7](https://home.iitk.ac.in/~shalab/sampling/chapter7-sampling-varying-probability-sampling.pdf): PDF pp. 25–27 derive the HT variance and its pair-inclusion estimate; the Yates–Grundy section starts at PDF p. 28 and derives the fixed-size identity.
- [Borkowski, *Horvitz–Thompson Estimators*, STAT 446 Lecture 6](https://math.montana.edu/jobo/st446/documents/ho6.pdf): printed pp. 142–143, equations (72)–(73), state the inverse pair-inclusion and SYG estimators, require positive pair support, and note that some designs can yield negative SYG estimates.

## Edits, uneditable defects, and blocker

- **Edits:** none. No confirmed defect required repair.
- **Uneditable defects:** none found in the reviewed assigned items or used
  supplier statements.
- **Blocker:** none.
- No item was changed, so reflow, precheck, proof-layout, and stale-judge
  removal were not applicable. The assigned current items have no
  `verification.judge` records to remove.

## Coverage note

All assigned pages and items, the listed direct mathematical suppliers needed
for their arguments, and the batch 9 contract artifact were opened. This was
an item-local review; it did not re-audit the full upstream dependency proofs
of the published foundational results.
