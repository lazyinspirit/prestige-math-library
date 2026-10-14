# Step 3a reader report — batch 32

Run: `mathematical-statistics-foundations-37`  
Role: independent reader  
Assigned batch: `32`

## Inventory opened

Assigned pages:

- `library/mathematical-statistics/robust-influence-and-breakdown.md` (A page)
- `library/mathematical-statistics/robust-influence-and-breakdown-examples.md` (B page)

Assigned items under `items/`, reviewed in dependency order:

1. `def-finite-sample-replacement-breakdown`
2. `def-lower-median-functional`
3. `lem-finite-empirical-measure-is-a-probability-law`
4. `lem-lower-median-of-odd-empirical-sample-is-middle-order-statistic`
5. `thm-mean-and-median-replacement-breakdown`
6. `def-statistical-functional-and-influence-function`
7. `def-gross-error-sensitivity`
8. `thm-influence-function-for-m-location-estimator`
9. `thm-median-influence-function`
10. `ex-mean-influence-and-replacement-breakdown`
11. `ex-median-influence-and-replacement-breakdown`
12. `cex-bounded-influence-does-not-imply-positive-breakdown`

Prerequisite page context opened:

- `library/mathematical-statistics/contamination-models-and-robust-risk.md`
- `library/mathematical-statistics/pathwise-differentiability-influence-functions-and-efficient-scores.md`

Prerequisite items opened for the claims and interfaces used here:

- `def-gross-error-path`, `lem-convex-mixture-of-probability-laws`, `def-probability-measure`, `def-measure`, `def-dirac-measure`, and `prop-dirac-measure-is-a-probability-measure`
- `def-pathwise-differentiable-functional` and `def-asymptotically-linear-estimator-and-influence-function`
- `def-borel-sigma-algebra`, `def-countable-choice`, and `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`
- `thm-lebesgue-measure-is-a-complete-measure`, `thm-borel-sets-are-lebesgue-measurable`, and `thm-lebesgue-measure-of-a-box-of-every-kind`
- `cor-mean-value-theorem`, `thm-dominated-convergence`, and `thm-euclidean-implicit-function-theorem`

I also inspected `research/mathematical-statistics-foundations-37-batch-32.proof-contracts.json` and `research/mathematical-statistics-foundations-37-batch-32.cross-batch-dependencies.json`. The contract's cited local facts, proof-step mappings, and boundary records match the current items. The cross-batch sources used here are the batch-31 gross-error path and the batch-29 pathwise/estimator terminology definitions.

## Review and page verdicts

**A page `robust-influence-and-breakdown`: pass.** The summary matches the nine listed A-page items and accurately identifies the two prerequisite pages. Its distinction between pointwise influence and finite-sample replacement breakdown is reflected in the definitions and proofs.

**B page `robust-influence-and-breakdown-examples`: pass.** The summary matches its two examples and counterexample. Its only page dependency is the assigned A page, and the listed examples use the supplied definitions and results.

The replacement-breakdown definition is a fixed-sample coordinate-replacement quantity and correctly leaves the fraction undefined when no replacement count breaks the statistic. The sample mean proof gives first breaking count one. For an odd sample, at most `r` replacements leave at least `r+1` clean values to bound the median, while `r+1` replacements at a common diverging value break it; the stated fraction is therefore correct.

The empirical-law and odd-sample-median arguments cover repeated observations and `n=1`. The M-location proof supplies the local differentiation-under-the-integral argument from its common integrable derivative majorant, applies the Euclidean implicit-function theorem with nonzero derivative, and takes only the right contamination derivative. The median proof establishes the three pointwise branches, including the literal value zero at `x=m`, and the sensitivity supremum. The mean and median examples follow from those results.

The counterexample defines a total functional on compactly supported Borel laws. For the uniform law on `[-1,1]`, every point-contamination direction adds at most one atom, so the trigger remains false and the median's influence has supremum one. For every odd clean sample of size `n>=5`, one replacement leaves the statistic equal to the median with bounded displacement; two distinct replacements at `M` and `2M` trigger the atom rule and make the statistic `2M`. Thus its fixed-sample replacement breakdown is exactly `2/n`, which tends to zero. The law construction and the bounded-support/domain conditions are established by the listed Lebesgue and median dependencies.

## Repair made

I corrected citation support in two assigned items. In `def-lower-median-functional`, Stark's cited §1.2 pages discuss breakdown and do not state the lower-quantile convention, so I removed that reference and added Pavlo Mozharovskyi, *Introduction to Robust Statistics*, slide “Sample median: influence function” (PDF p. 32). The slide states `x_q = inf{x : F(x) >= q}` and identifies the median as `q=0.5`. In `thm-median-influence-function`, I added the same source because it gives the pointwise quantile influence branches, including value zero at `x=x_q`; specializing to `q=0.5` matches the theorem. The item proofs and mathematics were unchanged.

The existing proof contracts remain aligned because the proof bodies did not change. Neither edited draft had a `verification.judge` record to remove. Required checks after the metadata repair passed:

- `reflow` reported both items unchanged.
- `precheck` reported 0 failures for `def-lower-median-functional` and 0 failures for `thm-median-influence-function`.
- `node tools/proof-layout.mjs items/def-lower-median-functional.md items/thm-median-influence-function.md` reported 2 items, 7 steps, 0 defects.

The cited-source checks included Stark, [*Statistics 240 Lecture Notes*, Part 9](https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf) (the PDF labels itself a rough draft): §1.2 and Definition 27 for replacement breakdown; Definition 30 and §1.3.3 for influence and gross-error sensitivity; §1.4 for the M-location estimating equation. Ronchetti's [*Introduction to Robust Statistics* slides](https://orfe.princeton.edu/sites/g/files/toruqf1286/files/documents/ronchetti-lecture1.pdf) were checked for the influence-function definition, gross-error sensitivity, and breakdown convention. Van der Vaart's [*Semiparametric Statistics*](https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf), Definition 1.14, and Kennedy's [*Semiparametric theory*](https://arxiv.org/pdf/1709.06418), §§3–4, support the terminology distinction. The added source is Mozharovskyi, [*Introduction to Robust Statistics*](https://perso.telecom-paristech.fr/mozharovskyi/resources/ExtremeDepth_Lecture1.pdf), slide “Sample median: influence function” (PDF p. 32). The local proofs do not rely on the rough-draft derivation or on the pathwise source's Riesz/choice conclusions.

## Defects not edited

None found in assigned items or pages. No proposed withdrawal or uneditable dependency defect remains.

## Blocker

None.

## Coverage note

All 12 assigned items, both assigned pages, the two required prerequisite pages, and the direct supplier passages needed to check the claims were opened. I did not independently audit every upstream proof dependency behind the published analysis and measure-theory suppliers; I checked the exact supplier statements and relevant proof arguments used by this batch. No unresolved mathematical uncertainty remained in the reviewed claims.
