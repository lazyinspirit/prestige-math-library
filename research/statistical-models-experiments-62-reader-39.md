# Step 3a reader report — batch 39

Run: `statistical-models-experiments-62`  
Role: reader  
Assignment: batch `39`

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/measurement-batch-and-process-variation.md`
- `library/statistical-models-and-experiments/measurement-batch-and-process-variation-examples.md`

Assigned items, read in dependency order:

- `items/def-batch-and-measurement-process-variation.md`
- `items/thm-nested-batch-repeatability-covariance-and-mean-variance.md`
- `items/ex-day-specific-calibration-slope-drift-and-check-standards.md`

Dependency items opened for the model, terminology, moment, and proof premises:

- `items/def-measurable-function-between-measurable-spaces.md`
- `items/def-borel-sigma-algebra.md`
- `items/def-probability-measure.md`
- `items/def-random-element-and-real-random-variable.md`
- `items/def-sigma-algebra-generated-by-a-function.md`
- `items/def-independent-sigma-algebras-and-events.md`
- `items/def-independent-random-elements.md`
- `items/def-expectation-of-a-nonnegative-or-integrable-random-variable.md`
- `items/def-moments-variance-and-covariance.md`
- `items/def-scientific-statistical-model-contract.md`
- `items/def-fixed-design-linear-regression-model.md`
- `items/def-real-frechet-derivative-on-real-and-complex-matrix-spaces.md`
- `items/def-linear-mixed-model.md`
- `items/def-measurand-calibration-and-measurement-uncertainty.md`
- `items/cor-expectation-linearity-monotonicity-and-modulus-bound.md` — frontmatter and Statement checked for the cited result.
- `items/thm-factorization-of-expectations-for-independent-variables.md` — frontmatter and Statement checked for the cited result.

Also read the batch manifest and `research/statistical-models-experiments-62-batch-39.proof-contracts.json`. The latter's two quotations of the batch definition were updated and checked against the current Definition text.

## Review, repair, and evidence

### Repaired: random-effect interpretation

In `def-batch-and-measurement-process-variation`, the paragraph beginning “Whether the batch term is random” made population sampling sound necessary for a random-effects specification and directed fixed effects whenever the observed batches were the whole target. That omitted the model-based working interpretation of random effects and could mislead readers about what the variance component means.

I revised the Definition to distinguish a design-based population interpretation from a random-effects distribution used as a working model for selected batches. The revised text says that the working model alone does not justify design-based extrapolation, and retains fixed batch parameters as the option when the observed batches are the whole target and no distributional model is intended. The revised paragraph also clarifies that the interpretation of `sigma_B^2` depends on the model and inferential target.

Evidence: Fan Li, *STA610 Lecture 5: Estimation of Group Effects*, §4.1, PDF p. 8, describes using a random-groups model as a working approximation although the 85 Minnesota counties are not a random sample, and distinguishes that from literal superpopulation sampling ([lecture PDF](https://stat.duke.edu/~fl35/teaching/610-26F/Lec5-GroupEffects.pdf)). Fan Li, *STA610 Lecture 6: Linear Mixed-Effects Models*, §2, PDF pp. 4–5, describes random effects as varying across groups or as arising from groups viewed as a random sample ([lecture PDF](https://stat.duke.edu/~fl35/teaching/610-26F/Lec6-LME.pdf)). These passages support the added modeling caveat; they do not justify design-based generalization without a sampling/target argument.

I updated the A-page summary to carry the same distinction. I also updated the theorem's F1 and example's F2 source quotations in the batch proof contract; both now match the current full Definition text. The edited definition had no `verification.judge` record to remove.

### Theorem review

`thm-nested-batch-repeatability-covariance-and-mean-variance` is sound under its stated finite-index, square-integrability, zero-mean, common-variance, and joint-independence hypotheses. The moment and expectation definitions give finite covariance and variance expressions; square-integrability implies integrability on a probability space by the displayed bound in step 1.1. For the cited factorization result, the relevant functions are identity maps on real random variables, hence Borel, and the variables are integrable. Joint independence therefore makes the cross-product expectations zero. Expanding the centered product gives within-batch covariance `sigma_B^2`; expanding the replicate-mean square leaves `sigma_B^2 + sigma_epsilon^2/m_ij`. The finite sums cover `m_ij = 1`, zero variance components, and non-Gaussian variables. No proof repair was needed.

### Example review

`ex-day-specific-calibration-slope-drift-and-check-standards` stipulates its values and does not claim empirical or inferential evidence. The two day lines are `1+2q` and `1+2.2q`. Across the six pairs, `qbar=5`, `rbar=11.5`, `S_qq=100`, and `S_qr=210`; the least-squares pooled line is uniquely `1+2.1q`. Its residuals at `q=5` are `-0.5` and `0.5`, and its inverse values are `100/21` and `110/21`. These calculations check. The cited JCGM Annex H.3.1–H.3.3 gives a least-squares linear-calibration example and explains using residual differences to check a linear model; the item's arithmetic is derived locally ([official JCGM 100:2008 PDF](https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf/cb0ef43f-baa5-11cf-3f85-4dcd86f77bd6)). NIST §2.1.2 describes stable artifacts measured over time as check standards, and §2.4.5.3 discusses drift monitoring with three or more check standards. The example explicitly does not claim that its two-day table detects drift or validates pooling ([NIST §2.1.2](https://www.itl.nist.gov/div898/handbook/mpc/section1/mpc12.htm), [NIST §2.4.5.3](https://www.itl.nist.gov/div898/handbook/mpc/section4/mpc453.htm)).

## Page verdicts

- `measurement-batch-and-process-variation`: sound after the summary repair. Its definition, theorem summary, fixed-versus-random operator caveat, and calibration-pooling qualification align.
- `measurement-batch-and-process-variation-examples`: sound. The summary matches the stipulated deterministic example and makes no empirical or general stability claim.

## Required checks

For the changed item `items/def-batch-and-measurement-process-variation.md`:

- `node tools/tsx-run.mjs tools/reflow.mts ...` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts ...` — `0 checked, 0 failing` (definition; no proof phase).
- `node tools/proof-layout.mjs items/def-batch-and-measurement-process-variation.md` — `1 items, 0 steps, 0 defects`.

## Unedited defects and blocker

None found. No blocker remains. No edits were made to the theorem, example, B-page prose, or out-of-batch dependencies.

## Coverage limitation

All assigned items and pages and the direct dependency statements needed to apply their results were reviewed. For the published expectation-linearity corollary and finite-product factorization theorem, I checked the cited Statements and their hypotheses for applicability; I did not independently re-prove their full transitive measure-theory proof closures.
