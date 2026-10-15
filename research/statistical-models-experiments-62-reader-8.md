# Step 3a reader report — batch 8

Run: `statistical-models-experiments-62`  
Role: reader  
Scope: batch `8`

## Inventory reviewed

Assigned pages:

- `finite-populations-and-sampling-designs` — `library/statistical-models-and-experiments/finite-populations-and-sampling-designs.md`
- `finite-populations-and-sampling-designs-examples` — `library/statistical-models-and-experiments/finite-populations-and-sampling-designs-examples.md`

Assigned items, read in dependency order:

1. `def-finite-population-and-sampling-design`
2. `lem-finite-population-design-law-is-a-probability-measure`
3. `thm-horvitz-thompson-total-is-design-unbiased`
4. `thm-zero-inclusion-probability-precludes-identification-and-universal-unbiasedness`
5. `ex-srswor-inclusion-probabilities-and-negative-covariance`
6. `ex-census-and-certainty-units-under-ht`
7. `ex-zero-inclusion-probability-and-unobserved-unit`

Page prerequisites read: `scientific-statistical-model-contracts`, `fixed-design-linear-regression-and-estimability`, `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `probability-spaces-random-variables-and-expectation`, `finite-probability-spaces-and-random-variables`, and `finite-sample-point-estimation-and-unbiased-optimality`.

Direct item dependencies opened to check definitions, law construction, estimators, and cited statements: `def-scientific-statistical-model-contract`, `def-fixed-design-linear-regression-model`, `def-finite-probability-space-and-event`, `def-expectation-on-a-finite-probability-space`, `def-measurable-space`, `def-probability-measure`, `def-measure-space`, `def-measure`, `def-statistical-experiment`, `def-parametric-statistical-model`, `def-estimand-on-a-statistical-model`, `def-sigma-algebra`, `def-statistic-and-estimator`, `def-unbiased-estimator-and-umvu`, `def-borel-sigma-algebra`, `def-indicator-random-variable`, `thm-linearity-of-expectation`, `lem-indicator-expectation-and-products`, `def-identifiability-of-an-estimand`, and `def-variance-and-covariance`.

The assigned proof contract `research/statistical-models-experiments-62-batch-8.proof-contracts.json` was checked against each current item. The batch-8 authoring notes were used only to locate current prerequisites and run context, not as a review verdict.

## Mathematical review and page verdicts

### `finite-populations-and-sampling-designs` — pass

The definition consistently fixes \(U=\{1,\ldots,N\}\), the real-valued population schedule, and a finite normalized design law on subsets. The empty sampled subset is allowed, while the population itself is nonempty. The common record space retains the selected labels, and its full power set makes every real-valued record statistic measurable for a Borel target. The induced law, parameter map, total and mean estimands, and distinction from a superpopulation model match the opened experiment and scientific-model definitions. The linked local lemma supplies the required probability-measure well-definedness.

The law lemma verifies that the record event family is a sigma-algebra, that the induced set function has mass zero on the empty event and mass one on the whole record space, and that it is countably additive: only finitely many disjoint preimages in the finite design support can be nonempty. The argument also covers a one-outcome design and an empty sampled subset.

The Horvitz–Thompson theorem states the necessary positivity hypothesis for every \(\pi_i\). Its record statistic is real-valued and measurable, is integrable under every induced law because each law has finite support, and has expectation \(\sum_i y_i E_d[I_i]/\pi_i=T(y)\). Scaling by positive \(N\) gives the mean result. No independence assumption is used.

The zero-inclusion theorem correctly uses positivity of weights on the support to infer that no supported sample contains the unit. Perturbing only that unit leaves every record and hence every observed-data law unchanged while changing the total. For any real-valued record estimator, its finite-support expectations are equal under the two schedules, so it cannot be unbiased for both totals. The Borel target and integrability conditions are accounted for.

The page summary accurately states these results and limits its scope: it makes no variance-estimation, normal-inference, or model-adequacy claim. Its fixed-design regression contrast agrees with the current prerequisite definition.

### `finite-populations-and-sampling-designs-examples` — pass

The SRSWOR example counts unit/sample and ordered-pair/sample incidences correctly, including \(n=1\) and \(n=N\). Substitution gives \(\pi_i=n/N\), \(\pi_{ij}=n(n-1)/(N(N-1))\) for distinct units, and \(\operatorname{Cov}(I_i,I_j)=-n(N-n)/(N^2(N-1))\). The Horvitz–Thompson mean reduces to \(n^{-1}\sum_{i\in s}y_i\).

In the certainty-unit design, \(\pi_1=1\), \(\pi_2=\pi_3=1/2\), the two Horvitz–Thompson totals are \(a+2b\) and \(a+2c\), and their expectation is \(a+b+c\). The census calculation gives the exact total and mean. The two-unit zero-inclusion example likewise gives one observed record and two distinct totals, matching the general theorem. The page summary faithfully describes these computations and keeps the population values fixed.

## Citation and source check

The assigned external references were opened at their relevant passages:

- Shalabh, *Sampling Theory*, Chapter 1, PDF pp. 1–2: finite populations, samples/censuses, sampling units, and probability sampling ([PDF](https://home.iitk.ac.in/~shalab/sampling/chapter1-sampling-introduction.pdf)).
- Shalabh, *Sampling Theory*, Chapter 2, PDF pp. 1–2 and 14: uniform subset probabilities and inclusion indicators/probabilities ([PDF](https://home.iitk.ac.in/~shalab/sampling/chapter2-sampling-simple-random-sampling.pdf)). The printed-p.14 covariance line appears to have a positive-sign typo; the displayed inclusion probabilities imply a negative covariance. The assigned example derives the negative formula directly and does not rely on that source line.
- Borkowski, *Horvitz–Thompson Estimators*, §6.2, printed pp. 141–142: first- and second-order inclusion probabilities and the unbiased Horvitz–Thompson total and mean ([PDF](https://math.montana.edu/jobo/st446/documents/ho6.pdf)).

The source typo does not make an assigned citation or computation inaccurate: no assigned proof cites that covariance line as a premise, and the assigned calculation is correct.

## Edits, remaining defects, and blocker

- Edits: none. No confirmed mathematical defect was found in an editable assigned item or assigned A-page prose.
- Defects that could not be edited: none in the assigned carriers or their opened library prerequisites.
- Page verdicts: `finite-populations-and-sampling-designs` — pass; `finite-populations-and-sampling-designs-examples` — pass.
- Blocker: none for this independent mathematical review. The run status was recomputed from `.autopilot/statistical-models-experiments-62`; it is live with no worker running. No reader-specific rendered evidence bundle was located in the current run state, so the review used the current manifest, authored carriers, proof contract, and direct dependency texts.
- No item changed; the repair-triggered reflow, precheck, and proof-layout commands were therefore not run.
