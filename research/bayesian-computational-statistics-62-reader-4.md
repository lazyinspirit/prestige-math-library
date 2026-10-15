# Step 3a reader report — batch 4

Run: `bayesian-computational-statistics-62`  
Batch: `4`  
Reader: `reader-4`

## Run and scope

The autopilot status reported the run as `running`, with Step 3a-read active and no workers in flight. The batch manifest assigns the A page `bayesian-models-priors-and-posterior-laws`, its examples B page, and eight items. All eight assigned items were draft pipeline items for this run.

## Opened inventory

Assigned pages:

- `library/bayesian-computational-statistics/bayesian-models-priors-and-posterior-laws.md`
- `library/bayesian-computational-statistics/bayesian-models-priors-and-posterior-laws-examples.md`

The A page's three required context pages were also opened:

- `library/mathematical-statistics/statistical-experiments-models-and-identifiability.md`
- `library/probability/conditional-distributions-and-regular-conditional-probability.md`
- `library/mathematical-statistics/losses-risk-and-decision-rules.md`

The A-page summary originally said fixed-data posterior propriety was developed “on the next page.” The manifest orders the companion B examples page immediately after this A page, then places `posterior-propriety-and-dominated-bayes-formula` as the next A page. I opened `library/bayesian-computational-statistics/posterior-propriety-and-dominated-bayes-formula.md` and confirmed that it develops the finite-positive-evidence criterion and distinguishes a fixed-fiber update from a prior-predictive law.

Assigned items, reviewed in supplier order:

1. `def-bayesian-model-as-prior-and-sampling-kernel`
2. `def-bayesian-posterior-as-regular-conditional-law`
3. `cor-posterior-r-c-d-exists-for-standard-borel-parameter`
4. `thm-standard-borel-bayesian-posterior-kernel-exists`
5. `ex-finite-bayesian-posterior-and-null-version`
6. `ex-omega-indexed-bayesian-posterior-r-c-d`
7. `ex-dominated-posterior-on-nonstandard-observation-space`
8. `ex-standard-borel-posterior-kernel-on-countable-data`

Direct dependencies opened for those items:

- Model and product-law foundations: `def-measurable-space`, `def-statistical-experiment`, `def-parametric-statistical-model`, `def-parameter-measurable-statistical-model-as-markov-kernel`, `def-probability-measure`, `def-measure-kernel-and-probability-kernel`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, and `lem-prior-and-model-kernel-define-joint-law`.
- Posterior and RCD interfaces: `def-random-element-and-real-random-variable`, `def-law-or-distribution-of-a-random-element`, `def-regular-conditional-distribution`, `def-conditional-law-given-a-random-element`, and `thm-bayes-formula-for-dominated-kernels`.
- Existence and factorization: `def-standard-borel-space`, `def-polish-space`, `def-axiom-of-choice`, `def-measurable-function-between-measurable-spaces`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`, and `thm-disintegration-of-a-joint-law-on-standard-borel-spaces`.
- Supporting RCD and coding facts consulted: `lem-rational-conditional-distribution-functions-produce-real-regular-kernels`, `lem-simultaneous-rational-conditional-distribution-function-versions`, `thm-probability-law-and-distribution-function-correspondence`, `lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions`, `thm-dynkin-pi-lambda`, `lem-bounded-remetrisation`, `def-product-topology`, `thm-reals-cauchy-complete`, `thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta`, `lem-hilbert-cube-has-a-bimeasurable-real-coding`, `thm-seven-generators-of-the-borel-sigma-algebra-on-r`, `thm-rationals-countable`, `thm-countable-union-of-countable`, `def-countable-choice`, `lem-rat-embeds-dense`, and `thm-geometric-series`.

The batch 4 proof contract was opened. Manifests and contracts were used as review aids; the authored statements, proofs, examples, and page prose were checked independently.

## Review and repair

The Bayesian-model definition correctly supplies a prior probability on a specified measurable parameter space and a parameter-measurable sampling kernel representing every sampling law. The posterior definition correctly separates a sample-point-indexed RCD from a data-indexed probability kernel and states the rectangle identity, null-set version freedom, and the separate dominated-density route.

The standard-Borel parameter existence corollary follows by applying the local RCD-existence theorem to the parameter coordinate and the sub-sigma-algebra `sigma(Y)`. Its hypotheses impose no standard-Borel requirement on the data space. The following kernel theorem correctly adds standard-Borel data to factor that RCD through the data coordinate, and its uniqueness claim is only almost everywhere.

I repaired one overstatement in `items/thm-standard-borel-bayesian-posterior-kernel-exists.md` (Statement, final sentence; Proof, step 4.1). The original sentence that posterior values at null data values “are not pointwise determined” was too broad if read as asserting distinct probability-valued versions for every such value. For example, with singleton parameter space and a data space having a null point, the probability-kernel condition allows only the point mass at the singleton at that null point. The conditional identities do permit replacing a kernel on a measurable marginal-null set by the prior, but a different probability section need not exist. The repaired statement says exactly that the identities do not select a pointwise value and records the prior replacement. Step 4.1 now explains that the sections must still be probability measures and cites the conditional-law definition. The existence and almost-everywhere uniqueness claims are unchanged.

The affected contract entry for this theorem was updated: step 4.1 now records the null-set modification argument, and the zero/one boundary evidence distinguishes identity freedom from the possible uniqueness forced by a singleton target. The item had no `verification.judge` record to remove.

I also clarified the assigned A-page summary to say “the next A page.” The original “next page” wording could refer to its immediately following companion B page, whose summary/examples do not develop the finite-positive-evidence criterion; the plan orders that criterion on the following A page, order 2050.

The downstream assigned consumer `ex-standard-borel-posterior-kernel-on-countable-data` was checked after the statement change. Every data point there has positive predictive mass, and its explicit posterior computations and rectangle identities do not use the null-fiber clause, so no consumer edit was needed.

Validation after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-standard-borel-bayesian-posterior-kernel-exists.md` — unchanged, exit 0.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-standard-borel-bayesian-posterior-kernel-exists.md` — pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-standard-borel-bayesian-posterior-kernel-exists.md` — 1 item, 4 steps, 0 defects.
- Updated proof-contract JSON parses successfully.

The finite example's joint masses and posteriors are correct: predictive masses are `7/12` and `5/12`, giving posterior masses `1/7` and `3/5`; the zero-mass data value admits distinct versions because the parameter space has two states. The symmetric binary-noise example has joint masses `3/8` on diagonal points and `1/8` off diagonal and verifies the sample-point RCD identity. The nonstandard-observation example correctly gives marginal density `9/4` on `U`, `3/4` on `V`, and `0` on `W`, with posterior masses `2/3`, `0`, and the prior filler `1/2`. The countable-data example uses normalized geometric laws and verifies its explicit rectangle formula term by term.

## Page verdicts

- `bayesian-models-priors-and-posterior-laws` (A): **sound after the item and summary repairs**. Its summary matches the proper-model definition, posterior interfaces, existence conditions, and dominated route. The fixed-data propriety pointer now names the next A page, which was opened and checked.
- `bayesian-models-priors-and-posterior-laws-examples` (B): **sound**. The summary accurately describes the finite update, sample-point RCD, countable standard-Borel kernel, and choice-free dominated construction. No B-page prose was edited.

## Uneditable defects and blocker

No confirmed defect was found in an assigned page's uneditable prose or in a published dependency. No blocker remains for this batch.

## Coverage note

All assigned items and pages, the A-page prerequisite context pages, all direct item dependencies of the assigned items, and the key RCD-existence, factorization, and disintegration suppliers were opened. I checked the statements of supporting real-analysis and topology dependencies used in those supplier proofs, but did not independently audit every deeper foundational proof beneath those published results. No external search was needed: the relevant posterior constructions and identities were supplied and checked locally.
