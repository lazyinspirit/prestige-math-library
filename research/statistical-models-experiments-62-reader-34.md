# Step 3a reader report — batch 34

Run: `statistical-models-experiments-62`  
Role: reader  
Dispatch label: `reader-34`

## Status and scope

The live run was `running` when checked. Stage `3a-read` showed 22/62 batches covered; batch 34 had no reader artifact yet. I reviewed the two assigned pages and all eight assigned items independently of their authors. I also opened the cited item interfaces and the draft supplier chain needed to check their uses. Manifests and proof contracts were used as navigation and citation evidence, not as verdicts.

## Opened assigned pages

- `library/statistical-models-and-experiments/cox-ph-and-partial-likelihood.md` — draft A page.
- `library/statistical-models-and-experiments/cox-ph-and-partial-likelihood-examples.md` — draft B page.

## Opened assigned items, in dependency order

1. `def-cox-proportional-hazards-model-and-partial-likelihood`
2. `lem-cox-uniform-risk-set-convergence`
3. `lem-bounded-predictable-counting-integral-pathwise-identity`
4. `lem-cox-partial-likelihood-hessian-convergence`
5. `lem-cox-score-martingale-replacement`
6. `thm-cox-score-limit-and-estimator-linearization`
7. `cor-cox-partial-likelihood-asymptotic-normality`
8. `ex-cox-risk-set-likelihood-and-model-checks`

I read the assigned items in full and checked their proof-contract citations, derivation steps, boundary records, statements, and remarks. The assigned carriers had no `verification.judge` record requiring removal.

## Supporting dependencies opened

The following in-run draft suppliers were read in the portions needed by the assigned claims. Their current owners are outside batch 34, so I made no edits to them.

- Batch 28: `def-event-time-observation-schemes`.
- Batch 30: `def-counting-process-intensity-and-compensator-contract`; `def-elementary-predictable-counting-process-integral`; `lem-predictable-step-processes-dense-in-compensator-l2`; `def-l2-counting-process-integral`; `lem-elementary-counting-integral-preserves-martingales`; `lem-continuous-finite-variation-martingale-is-zero`; `lem-bounded-stopping-preserves-cadlag-square-integrable-martingales`; `def-optional-and-predictable-brackets-for-counting-processes`; `lem-continuous-predictable-bracket-uniqueness`; `lem-finite-variation-integration-by-parts-for-counting-process-martingales`; `thm-compensated-counting-process-brackets`; `lem-elementary-counting-process-integral-isometry`; `thm-l2-counting-process-integral-isometry`.
- Batch 31: `thm-iid-terminal-influence-limit`.

Published dependency interfaces opened for the cited uses: `def-axiom-of-choice`; `def-conditional-independence-given-a-sigma-algebra`; `def-continuous-time-filtration-and-all-pairs-martingale`; `def-continuous-time-adapted-process-and-martingale`; `def-progressively-measurable-and-predictable-process`; `def-covering-packing-bracketing-number-and-metric-entropy`; `def-empirical-process-and-rademacher-process`; `def-glivenko-cantelli-class`; `thm-gc-by-bracketing-entropy`; `thm-dominated-convergence`; `thm-tonelli-theorem-for-sigma-finite-product-spaces`; `thm-monotone-convergence-for-the-integral`; `thm-dynkin-pi-lambda`; `cor-cauchy-schwarz-inequality-for-l-two`; `cor-cauchy-schwarz-for-random-variables`; `thm-cauchy-schwarz-finite`; `def-op-and-little-op-stochastic-bounds`; `def-statistic-and-estimator`; `def-covariance-matrix-of-a-random-vector`; `def-asymptotically-linear-estimator-and-influence-function`; `def-identically-distributed-and-iid-random-variables`; `def-independent-families-of-event-classes`; `thm-multivariate-iid-central-limit-theorem`; `thm-vector-slutsky`; `def-conditional-expectation-as-an-ae-class`; `thm-taking-out-what-is-known`; `thm-basic-algebra-and-order-properties-of-conditional-expectation`; `cor-conditional-lp-contraction`; `thm-riesz-fischer-completeness-of-l-p`; `def-l-p-space-as-a-quotient-by-null-functions`; `def-product-measure-on-sigma-finite-spaces`; `thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p`; `def-bounded-variation-and-total-variation`; `def-law-modification-and-indistinguishability-of-processes`; `def-continuous-time-stopping-time`; `cor-absolute-value-and-powers-of-a-martingale-are-submartingales`; `thm-doob-lp-maximal-inequality`; `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`; `thm-heine-borel-r`; and `thm-heine-cantor-r`.

I checked the assigned batch proof-contract file for all eight assigned items. I also read the relevant authoritative passages below where the Cox and counting-process arguments benefit from source verification.

## Mathematical review

- The Cox definition distinguishes the conditional event-intensity specification from the nuisance covariate and censoring laws, does not claim that the risk-set expression is a full censored-data likelihood, and explicitly leaves the martingale contract to the estimator result. The no-tie and tied-time expressions have separate conventions and hypotheses; the two exact tie conventions are not conflated with Breslow or Efron approximations.
- The risk-set lemma's fixed-time and integrated expected-error conclusions follow from boundedness, finite-dimensional parameter nets, and dominated convergence. Its denominator lower bound follows from positive risk support at the horizon and the monotone unweighted risk count. The stronger uniform-in-time conclusion is separately conditioned on pointwise measurability and finite bracketing entropy; the proof does not silently use that condition for the integrated claims.
- The counting-process contract is an explicit assumption. The local supplier proofs establish the bracket and isometry results under that contract, then establish compensation and the pathwise identity for bounded predictable integrands by finite-measure and (L^2)-approximation arguments. The Cox score proofs use these results with bounded predictable integrands and integrable baseline hazard.
- The Hessian proof controls its martingale term by finite parameter nets and the pathwise counting-process bound, then uses integrated risk-set convergence for the compensator term. The score proof cancels the compensator term exactly and controls random-risk-mean replacement in (L^2). Its deterministic influence vectors are subject-record measurable, IID, centered, and have covariance (I).
- The estimator theorem assumes a measurable consistent score root and positive-definite (I); the uniform Hessian limit and score representation give the stated linearization with the correct sign. The corollary applies the IID terminal limit only after that expansion. The worked risk-set fraction, survival-risk ratio (1+e^{-1}<2), and time-varying hazard ratio (2^t) are correct.
- No proof-contract citation or boundary entry contradicted the carrier proofs.

## Authoritative source checks

- Lu Tian, [“Revisiting Cox’s PH Model: Asymptotic Theory”](https://web.stanford.edu/~lutian/coursepdf/stat331-cox2.pdf), PDF pp. 1–4 for the independent-subject, bounded-covariate, positive-risk setup, score representation and information limit; pp. 6–9 for the consistent-root expansion and vector-covariate extension. This confirms the structure of the local claims; the library supplies additional proof detail and states its own counting-process contract explicitly.
- Andersen, Borgan, Gill and Keiding, [“Censoring, truncation and filtering in statistical models based on counting processes”](https://ir.cwi.nl/pub/5993/5993D.pdf), §3, PDF pp. 14–19 for right censoring and preservation of partial-likelihood form under their independent-censoring conditions; §7, PDF pp. 32–33 for partial modelling with time-dependent covariates. Their parameter-distinct censoring/filtration conditions are not used as a substitute for the library's separately stated martingale contract.
- Richard F. Bass, [“SDEs with Jumps”](https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf), §2.5, PDF p. 5 for bounded predictable step integrals and (L^2) completion. Bass states the usual right-continuous complete-filtration setting earlier in §2.1; the Cox supplier claims under the library's filtration convention were checked against their local proofs rather than inferred from that broader source.

## Edits and uneditable defects

- Edits: none. No confirmed defect required a repair in an assigned item or A-page prose, so no proof contract changed and no reflow, precheck, or proof-layout command was needed.
- Defects outside edit scope: none found among the dependency statements/proofs reviewed for these claims.
- Blocker: none.

## Page verdicts

- `cox-ph-and-partial-likelihood`: **sound as drafted for the claims reviewed.** Its summary accurately states the integrated-versus-uniform risk-set distinction, the separate counting-process contract, and the dependency order of score expansion before the terminal limit.
- `cox-ph-and-partial-likelihood-examples`: **sound as drafted for the claims reviewed.** Its summary matches the worked likelihood and hazard-ratio comparisons and correctly requires an explicit convention for tied-event contributions.

## Coverage limitation

I reviewed the full assigned carriers and the claim interfaces and draft proof chain needed for their dependencies. I did not audit unrelated page content or the full transitive proofs behind published foundational dependencies beyond the cited interfaces.
