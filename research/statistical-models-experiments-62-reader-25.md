# Step 3a reader report — batch 25

Run: `statistical-models-experiments-62`  
Reader assignment: `reader-25`  
Review date: 2026-10-15

## Verdicts

- **A page `missingness-mechanisms-and-identification`: pass.** The summary accurately describes the observation-pattern setup, the finite equivalent-reference construction and product-reference integrals, MAR factorization under a Cartesian parameter space, and the binary identified set. Its final caveat about outcomes undefined after death matches the example.
- **B page `missingness-mechanisms-and-identification-examples`: pass.** The summary accurately previews the response-mechanism classifications, the two observationally equivalent laws, and the distinction between an unrecorded value and an outcome undefined after death.

No confirmed mathematical or editorial defect was found in either page or the assigned items. No blocker remains.

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/missingness-mechanisms-and-identification.md`
- `library/statistical-models-and-experiments/missingness-mechanisms-and-identification-examples.md`

Assigned items, reviewed in supplier order:

- `def-full-observed-and-missing-data`
- `def-mcar-mar-and-mnar`
- `lem-observed-data-likelihood-under-response-model`
- `thm-binary-outcome-mnar-nonidentification`
- `thm-mar-ignorable-likelihood-factorization`
- `ex-death-is-not-missingness`
- `ex-missingness-mechanisms-and-nonidentification`

Direct dependency items opened to verify the assigned definitions and arguments:

- `def-measurable-space`
- `def-product-sigma-algebra-and-finite-product-sigma-algebras`
- `def-random-element-and-real-random-variable`
- `def-law-or-distribution-of-a-random-element`
- `def-measure-kernel-and-probability-kernel`
- `def-conditional-law-given-a-random-element`
- `def-parametric-statistical-model`
- `def-finite-sigma-finite-and-semifinite-measures`
- `def-dominated-statistical-experiment`
- `def-axiom-of-choice`
- `def-likelihood-density`
- `def-observational-equivalence`
- `def-estimand-on-a-statistical-model`
- `def-identifiability-of-an-estimand`
- `thm-monotone-convergence-for-the-integral`
- `thm-nonnegative-measurable-functions-admit-increasing-simple-approximations`
- `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`
- `lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative`
- `thm-tonelli-theorem-for-sigma-finite-product-spaces`
- `thm-integration-against-a-radon-nikodym-derivative`

Also opened `research/statistical-models-experiments-62-batch-25.proof-contracts.json` and `research/statistical-models-experiments-62-batch-25.cross-batch-dependencies.json`. The latter is empty. Contracts' citations, derivation inputs, and boundary cases were checked against the current items and suppliers; they were treated as evidence, not as verdicts.

## Mathematical review

- The full/observed-data definition keeps missing values in the full-data vector, retains the pattern label, and gives empty coordinate blocks a one-point space. The observed-record construction is measurable by the finite pattern decomposition and coordinate projections.
- The MCAR/MAR/MNAR definition correctly states the conditions relative to a supplied kernel and full-data law, including almost-sure equality and the shared factor required across a family of laws. MCAR is a special case of MAR.
- The observed-data likelihood lemma constructs a finite measure equivalent to the sigma-finite dominator, pushes it forward patternwise, and obtains finite nonnegative densities for the full-data marginals and observed sublaws. The probability-kernel normalization gives total observed mass one. In the product-reference case, Tonelli supplies the displayed missing-coordinate integrals; empty blocks use the stated unit mass. No unsupported density or domination step was found.
- The binary theorem's four-cell construction realizes every mean in `[b,b+1-a]` and its bounds exclude every other mean. Its common observed law proves nonidentifiability for `a<1`; the MAR argument correctly handles `a>0` and `a=0`, including null-state kernel choices.
- The MAR factorization proof uses the common observed-value factor and the Cartesian parameter space as stated. Its density identity follows from pushforward integration, simple approximation, monotone convergence, and the Radon–Nikodym formula. The likelihood-ratio and profile conclusions retain their support and parameter-space caveats; the remarks correctly avoid asserting common null sets across an uncountable family.
- The death example's partial score is not a real random variable on the full population when it is undefined on a positive-probability death event. The conclusion concerns the stated target and does not assign a post-death value. The finite examples' response kernels, probability tables, observed laws, means, and MAR/MNAR classifications check directly.

## Source checks

- Lu Mao, *Missing Data: Foundations and Methods*, Chapter 1: §1.1 (lines 44–46) distinguishes outcomes after death from ordinary unrecorded measurements; §1.2 (lines 57–75) gives the observed-data likelihood and MCAR/MAR setup; §§1.3–1.5 (lines 74–104) discuss mechanism definitions and likelihood ignorability; §§1.6–1.7 (lines 127–196) cover identifiability and the binary identified interval. URL: <https://lmaowisc.github.io/missing_data/chapter-1.html>.
- National Research Council, *The Prevention and Treatment of Missing Data in Clinical Trials*, Chapter 4: pp. 48–49 (web lines 77–95) says whether a post-death measure is a meaningful hidden value must be decided and ties the analysis to a well-defined estimand; pp. 51–52 (lines 119–159) describe patterns and MCAR/MAR; pp. 60–61 (lines 395–419) derive observed likelihood integration and ignorability under MAR and distinct parameter spaces. URL: <https://www.nationalacademies.org/read/12955/chapter/6>.
- The cited Hernán–Robins *Causal Inference: What If* PDF URL for the death example could not be fetched by the web reader because the file exceeded its content limit. The claim was independently checked against the National Research Council and Lu Mao passages above; no citation defect is established.

## Edits and remaining defects

- **Edits:** none. No item proof contract or verification record changed. No reflow, precheck, or proof-layout command was required because no item was edited.
- **Confirmed defects not editable:** none.
- **Blocker:** none.

## Coverage note

All seven assigned items, both assigned pages, their 20 direct dependency items, the batch proof contract, the cross-batch dependency record, and the listed relevant source sections were opened. Deeper transitive prerequisite closures were not re-audited independently where the direct supplier statement already supplied the exact result used. The Hernán–Robins PDF fetch limitation is recorded above; the relevant death-related claim was supported by the two other opened authoritative sources.
