# Step 3a reader report — batch 9

Run: `bayesian-computational-statistics-62`  
Role: reader  
Batch: `9`

## Opened inventory

Read the assigned A page and B examples page:

- `library/bayesian-computational-statistics/marginal-likelihoods-bayes-factors-and-empirical-bayes.md`
- `library/bayesian-computational-statistics/marginal-likelihoods-bayes-factors-and-empirical-bayes-examples.md`

Read all assigned items in dependency order:

1. Level 0: `thm-balanced-one-way-random-effects-expected-mean-squares`.
2. Level 1: `ex-negative-balanced-anova-moment-estimate`.
3. Level 2: `def-marginal-likelihood-and-bayes-factor`.
4. Level 3: `thm-finite-model-posterior-odds-from-marginal-evidence`, `def-type-ii-marginal-likelihood-and-empirical-bayes-posterior`, `ex-diffuse-normal-prior-changes-bayes-factor`, and `ex-improper-flat-prior-arbitrary-evidence-scale`.
5. Level 4: `ex-hyperparameter-uncertainty-can-induce-group-dependence` and `ex-point-null-needs-a-model-atom`.

Read the page prerequisites `hierarchical-bayesian-models-and-partial-pooling`, `posterior-propriety-and-dominated-bayes-formula`, and `detection-and-quantification-limits` (the latter is in `library/statistical-models-and-experiments/`). The assigned A page and both prerequisite pages state the needed model and evidence scopes; the detection-limits page is a listed design prerequisite and supplies no premise to these proofs.

Opened the direct item suppliers used by the assigned items: `cor-expectation-linearity-monotonicity-and-modulus-bound`, `cor-variance-adds-for-pairwise-independent-random-variables`, `def-axiom-of-choice`, `def-countable-choice`, `def-dominated-statistical-experiment`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-hierarchical-bayesian-model`, `def-independent-random-elements`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-likelihood-density`, `def-measure-kernel-and-probability-kernel`, `def-moments-variance-and-covariance`, `def-posterior-evidence-normalizer-and-fiberwise-update`, `def-probability-measure`, `def-standard-borel-space`, `def-statistical-experiment`, `lem-measurable-functions-preserve-independence`, `lem-normal-location-scale-density`, `lem-normal-location-scale-mean-and-variance`, `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-bayes-formula-for-dominated-kernels`, `thm-choice-implies-dependent-implies-countable-choice`, `thm-finite-bayes-theorem`, `thm-hierarchical-posterior-normalization-on-positive-finite-evidence`, and `thm-lebesgue-measure-of-a-box-of-every-kind`. I checked supplier statements and the relevant proofs where a consumer's calculation depended on them; this was not a re-audit of every remote dependency below each supplier.

## Independent mathematical review

- The balanced one-way theorem's variance calculations follow from independent block means with variance `tau^2 + sigma^2/r`, the centered-sum identity, and the within-group residual identity. The stated raw moment estimates follow by solving the two expectation equations. The assumptions cover degenerate `tau^2 = 0` and keep `sigma^2 > 0` for the normal-density examples.
- The negative-estimate example computes `MSB = 0`, `MSW = 2`, and the raw estimate `-1`. Continuity of the statistic and positive normal densities give a positive-probability neighborhood under every `tau^2, sigma^2 > 0` in the stated model.
- The marginal-likelihood definition requires proper within-model priors, a common sigma-finite data measure, and specified jointly measurable densities; evidence may be extended-valued, and the Bayes factor is defined only for finite positive evidences. The finite-model theorem's disjoint-union construction and dominated-kernel formula give the displayed posterior weights and odds on the stated fibers.
- The Type-II definition restricts selection to an attained positive finite maximum, requires a measurable selection for a data-indexed rule, forms the plug-in update only at finite positive evidence, and makes no generic performance guarantee. The finite hierarchy example correctly retains the two-point hyperparameter posterior and gives joint group probability `1/2`, versus product of marginals `1/4`; its plug-in posterior is the point mass at `(0,0)`.
- The diffuse-normal example's Gaussian integral gives `BF_10(0) = sqrt(sigma^2/(sigma^2 + tau^2))`. The improper-flat example integrates the likelihood against `c lambda` to `c`, so model-specific constants give an arbitrary formal ratio. The point-null example gives evidences `1` and `1/2` after its setup repair.

## Repairs

1. In `items/ex-point-null-needs-a-model-atom.md`, the example invoked the finite-model evidence theorem without specifying its common data measure and jointly measurable likelihood density. I made the model spaces and priors explicit, chose the common data space `{0,1}` with counting measure, and specified the Bernoulli densities `f_i(theta,0)=1-theta` and `f_i(theta,1)=theta`. These now meet the hypotheses of `def-marginal-likelihood-and-bayes-factor` and `thm-finite-model-posterior-odds-from-marginal-evidence`; the evidence calculation is unchanged. I updated the step 1.1 derivation in `research/bayesian-computational-statistics-62-batch-9.proof-contracts.json`. The item had no `verification.judge` record to remove.

2. In the assigned A page summary, I added the common sigma-finite data measure and jointly measurable-density hypotheses, positive model weights for the odds identity, and the finite-valued/attained positive maximum and measurable-selection conditions for Type-II rules. This matches the definitions and statements in `def-marginal-likelihood-and-bayes-factor` and `def-type-ii-marginal-likelihood-and-empirical-bayes-posterior`.

After the item repair, `reflow` succeeded, `precheck` passed (`1 checked, 0 failing`), and final `proof-layout` reported `1 item, 2 steps, 0 defects`.

## Source checks

- NIST/SEMATECH e-Handbook §7.4.4, lines 12 and 31–45, states the one-way random-effects expected mean squares, the method-of-moments equations, and that the variance-component estimate can be negative: <https://itl.nist.gov/div898/handbook/prc/section4/prc44.htm>.
- Bayes Rules! Chapter 8 §§8.2.1–8.2.2, lines 145–168 and 175–188, defines the Bayes factor as posterior odds divided by prior odds, rejects a universal cutoff, and explains the zero prior and posterior mass of an exact point under a continuous prior: <https://www.bayesrulesbook.com/chapter-8.html>.
- Bayes Rules! Chapter 16 §16.3.1 and §§16.4.1–16.4.3, lines 229–264 and 306–409, describes the group/global hierarchy and posterior treatment of global and group-specific parameters: <https://www.bayesrulesbook.com/chapter-16.html>.
- The author-hosted BDA3 PDF search index returned the relevant printed-page excerpts: §5.4 p. 118 gives the raw variance-component moment estimate and discusses plug-in uncertainty and negative estimates; §7.4 p. 184 discusses improper-prior Bayes factors and sensitivity to proper prior spread: <https://sites.stat.columbia.edu/gelman/book/BDA3.pdf>. Direct web opening of the 55.9 MB PDF failed on size, so I used those indexed excerpts and cross-checked the corresponding mathematical claims against NIST, Bayes Rules!, and the local derivations above.

## Defects not repaired and page verdicts

- No uneditable defect remains. The B page prose was read-only; its summary accurately describes the assigned examples.
- A page `marginal-likelihoods-bayes-factors-and-empirical-bayes`: **pass after the summary repair**.
- B page `marginal-likelihoods-bayes-factors-and-empirical-bayes-examples`: **pass**.

## Blocker

None specific to batch 9. At the initial disk-recomputed status check, the run was `running` in Step 3a read, with no active workers; batch 9's reader result was still listed as missing at that point. After writing this report, the latest status recognized its artifact, but still counted batch 9 as missing coverage pending structured-result collection.
