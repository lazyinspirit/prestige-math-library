# Statistical Models and Experimental Methods — batch 34 notes

Run: `statistical-models-experiments-62`  
Pair: `cox-ph-and-partial-likelihood` / `cox-ph-and-partial-likelihood-examples`  
Role: beta  
Assigned dependency level: 2; prerequisite batches: 28, 30, 31  
Dispatch scheduling-input hash: `faec1a3fc9d06abc104f346b25cd79e5dee37bcd620ce4e2783332aff896fd1d`

## Plan, design, and conflict record

The complete SME-34 design in `research/plan-statistical-models-experiments-track.md` at L236 and the assigned page records in `research/plan-spec.json` agree on the A/B IDs, order 1984/1985, category, title, companion, and page-level prerequisite list. The complete canonical `requires` list is retained in the batch manifest: `event-time-censoring-and-truncation`, `counting-process-compensators-and-integrals`, `independent-subject-terminal-influence-limits`, `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `chaining-uniform-laws-and-empirical-process-limits`, `dominated-experiments-likelihood-and-sufficiency`, `likelihood-asymptotics-wald-score-and-likelihood-ratio`, and `the-ito-integral-with-respect-to-brownian-motion`.

The design prose summarizes required SME suppliers as SME-28/30/31, MSF-01/02, and MSF-20 conditionally when its exact hypotheses hold; the canonical page-level `requires` also lists the Brownian Ito page and the other MSF prerequisite pages above. I preserved the full page-level list. No Cox item directly depends on a Brownian Ito item: those suppliers integrate against Brownian motion, whereas the proofs here use the exact jump-counting-process contract, bracket, and L2 integral items from batch 30. This records a page-level/design prose difference without treating Brownian Ito results as jump-process results.

There is one material hypothesis reconciliation for owner review. The design asks for uniform risk-set convergence under bounded predictable covariates, fixed finite dimension, compact parameter set, and positive risk support, and allows MSF-20 only when its actual hypotheses are verified. Boundedness and predictability alone do not establish a uniform law over arbitrary time-indexed covariate classes. The local item `lem-cox-uniform-risk-set-convergence` therefore states pointwise measurability and finite L1(P) bracketing numbers for each risk-set coordinate class, exactly matching `thm-gc-by-bracketing-entropy`. This is a sound sufficient condition, but narrows the design's stated model class. I did not infer the condition from boundedness; the risk lemma and every dependent inference claim are escalated for owner reconciliation. Affected claims: the uniform risk-sum/mean law; the Hessian limit; the random-risk-mean score replacement; the score-root linearization; and its terminal normal corollary. The current proposed placement is the A-page `lem-cox-uniform-risk-set-convergence` at level 2, after the Cox definition, using the published `thm-gc-by-bracketing-entropy` plus its exact pointwise-measurability and finite-bracketing hypotheses. Proposed resolution is owner confirmation of this additional regularity hypothesis or a different local uniform-law supplier with hypotheses proved from the intended model; if the intended class remains arbitrary bounded predictable paths, a new local uniform-law result and its own hypotheses are needed before the Hessian and score consumers.

The counting-process supplier explicitly says an intensity density alone does not imply that `N-A` is a martingale. The score and Hessian items therefore state the square-integrable martingale model contract on one common filtration, continuous predictable compensators with finite expectation, and no simultaneous failures where the aggregate process is used. This is an explicit model assumption, not an inference from the hazard display.

The partial likelihood is stated only for untied event times and is expressly not identified with the full censored-data likelihood. Exact tied-event likelihoods are separated by their discrete/grouped-time and coarsened continuous-order conventions from Breslow/Efron approximations. The continuous ordered-tie formula explicitly assumes that only the recorded failures depart the risk set during that interval. The discrete-time proportional-integrated-hazards caveat is retained. The B example verifies the risk-set term, the fixed hazard ratio versus cumulative event-risk ratio using the true parameter `beta_0`, and a predictable time-varying contrast. The score proof does not call the random-risk-mean score summands IID; it first proves the martingale replacement by an IID subject-level influence sum.

## Item inventory, dependencies, and levels

The A page has six items and the B page one example (7 total, below the 100-item page cap). Local suppliers appear before consumers in the A-page manifest. Direct dependencies are mirrored between each item frontmatter and `research/statistical-models-experiments-62-batch-34.pages.json`.

| Item | Home | Level | Dependency role / argument |
|---|---|---:|---|
| `def-cox-proportional-hazards-model-and-partial-likelihood` | A | 1 | Defines the censored subject record, predictable Cox intensity, baseline cumulative hazard, fixed/time-varying hazard ratios, untied partial likelihood, explicit tie conventions, and scope caveats; depends on the batch-28 observation definition and published model/filtration/predictability interfaces. |
| `lem-cox-uniform-risk-set-convergence` | A | 2 | Applies the published bracketing Glivenko–Cantelli theorem to finitely many risk-sum coordinates, then proves denominator bounds and ratio convergence. Its explicit finite-bracketing condition is the unresolved design reconciliation above. |
| `lem-cox-partial-likelihood-hessian-convergence` | A | 6 | Differentiates finite risk-set likelihoods; uses uniform risk laws, expected event-count bounds, aggregate bracket isometry, a compact finite-net argument, and compensator decomposition to obtain the uniform Hessian limit. |
| `lem-cox-score-martingale-replacement` | A | 6 | Cancels the compensator part of the score, decomposes with the aggregate martingale, proves the random-risk-mean correction has vanishing normalized L2 energy, and computes the IID influence covariance as I. |
| `thm-cox-score-limit-and-estimator-linearization` | A | 7 | Taylor-integrates the Hessian on the consistent score root's segment, inverts the limiting positive-definite information, and substitutes the separately established score representation. |
| `cor-cox-partial-likelihood-asymptotic-normality` | A | 8 | Defines the subject influence function, computes covariance I^-1, and applies the terminal IID influence theorem only after the expansion. |
| `ex-cox-risk-set-likelihood-and-model-checks` | B | 2 | Computes the finite risk-set contribution and both hazard/risk contrasts using the A-page definition. |

The in-run levels use the actual batch-28, batch-30, and batch-31 manifest item levels: the observation-scheme definition is level 0; the counting-process contract is level 0, elementary integral level 1, bracket theorem level 3, and L2 isometry level 5; the terminal IID influence theorem is level 0. The resulting computed batch-34 labels are 1, 2, 6, 6, 7, 8, and 2 respectively. A scoped recomputation across batches 28/30/31/34 after final edits found 33 items and zero dependency errors. No cycle was found.

## Supplier inspection and status

The actual batch-28 `def-event-time-observation-schemes` body and proof were inspected; its Step-1 record is `ready`, `owner:false`. It supplies the conditional right-censoring convention `U=min(T,C)`, `delta=1{T<=C}`, covariate-history conditioning, and stated kernel/independence assumptions. The Cox definition keeps these as model assumptions.

The actual batch-30 bodies and current Step-1 records for `def-counting-process-intensity-and-compensator-contract`, `def-elementary-predictable-counting-process-integral`, `thm-compensated-counting-process-brackets`, and `thm-l2-counting-process-integral-isometry` were inspected. Each current record is `ready`, `owner:false`. The counting-process contract expressly assumes `M=N-A` is square-integrable; the bracket result assumes a simple unit-jump process and continuous compensator; the L2 theorem is limited to predictable integrands with finite `E integral H^2 dA`. The score and Hessian statements explicitly carry the relevant conditions. The transitive contract proof chain inspected includes the martingale, stopping, finite-variation, predictable-step-density, elementary-isometry, L2-completion, conditional-L2, and Riesz-Fischer suppliers. These batch-30 bodies remain draft authoring evidence, not independent acceptance.

The actual batch-31 `thm-iid-terminal-influence-limit` body and current Step-1 record were inspected. Its present record is `ready`, `owner:true` after owner resolution; it requires AC, IID subject records, a centered finite-second-moment influence function, and an independently established expansion. The corollary uses it only after the Cox linearization and asserts no functional/process CLT. This is owner authoring readiness, not independent acceptance, and the record was not altered.

Published direct suppliers inspected for the local proofs include the Cox model dependencies; empirical-process, pointwise-measurability, bracketing-number and Glivenko–Cantelli definitions; the exact bracketing GC theorem; Tonelli; predictable-process measurability; estimator and covariance definitions; and stochastic-order notation. The probability branch of the GC theorem is used; its almost-sure branch separately requires Countable Choice and is not invoked. The generic regular-MLE theorem, full-likelihood interfaces, and Brownian Ito integral are not used to prove the Cox result.

## Source reading and retrieval evidence

The complete relevant PDFs were retrieved and inspected, rather than relying on dossier summaries. Exact URLs, PDF locators, result-level dispositions, attempt history, page counts, byte counts, and content hashes are recorded in `research/statistical-models-experiments-62-batch-34.coverage.json`.

| Source | Full text inspected / relevant locators | Items and disposition |
|---|---|---|
| Lu Tian, STAT331 Unit 5: Cox's Proportional Hazards Model — https://web.stanford.edu/~lutian/coursepdf/unit7.pdf | Entire 24-page handout; Units 7.1–7.4, PDF pp. 1–14, and appendix p. 23. | Included for the Cox model, risk sets, no-tie likelihood, tied-event conventions, score/Hessian formulas; p. 23 rank-statistic identity marked out-of-scope. |
| Lu Tian, STAT331 Unit 7: Cox's Model: Extensions — https://web.stanford.edu/~lutian/coursepdf/Coxextensionunit9.pdf | Entire 20-page handout; Unit 9.3, PDF pp. 8–11; Unit 9.5, p. 16. | Included for predictable time-varying covariates and B examples; informative-censoring/MAR material marked out-of-scope. |
| Lu Tian, STAT331 Example of Martingale CLT with Cox's Model — https://web.stanford.edu/~lutian/coursepdf/stat331-cox.pdf | Entire 12-page handout; PDF pp. 1–7 and 8–11. | Included for subject-martingale score/bracket calculations; a functional martingale-CLT result whose proof is referred elsewhere marked out-of-scope. |
| Lu Tian, STAT331 Revisiting Cox's PH Model: Asymptotic Theory — https://web.stanford.edu/~lutian/coursepdf/stat331-cox2.pdf | Entire 12-page handout; PDF pp. 1–8. | Included for risk-sum, score, observed-information and estimator-linearization calculations. |
| Qiqing Yu, Survival Analysis (Lecture Notes) — https://people.math.binghamton.edu/qyu/ftp/surv5.pdf | Entire 87-page note retrieved; complete relevant §5.1–5.3, PDF pp. 58–63. | Included for proportional versus integrated hazards, discrete/grouped ties, and no-tie partial likelihood; interval-censoring extension marked out-of-scope. |

The source set supplies independent treatments for the A-page Cox likelihood and asymptotic arguments: the complete Stanford handouts and Yu's full lecture notes. Coverage records 18 harvested results (14 included and 4 out-of-scope), with source history preserved. There were no failed retrievals, retries, or dropped sources; `source-fetch-check --stamp` verified 5/5 sources, and the coverage checklist passed all 18 dispositions. No `source_resolution` failure record was needed.

## Scoped checks and current blockers

Final scoped checks after all item edits reported:

- `node tools/content-policy.mjs research/statistical-models-experiments-62-batch-34.pages.json`: 7 items, 0 errors, 0 warnings.
- `node tools/rendercheck.mjs` on all seven items and both assigned pages: 9 files passed; no malformed delimiters or displays; KaTeX and renderer YAML parsing passed.
- `node tools/tsx-run.mjs tools/precheck.mts` on the six proof-bearing items: 6 checked, 0 failing.
- `node tools/proof-layout.mjs` on all seven explicitly changed items: 23 steps, 0 defects.
- Strict proof-contract check: 7/7 items, 0 errors, 0 warnings.
- `manifest-deps`: 7 items, 0 normalizations, 0 errors. Scoped `depcheck` with a JSON item-scope file passed; no warnings remained after adding the estimator theorem's two cited direct suppliers.
- Scoped item dependency recomputation across batches 28/30/31/34: 33 items, 0 errors; batch-34 levels are 1, 2, 6, 6, 7, 8, and 2.
- Coverage checklist: 1 A page, 18 harvested results, 0 errors, 0 warnings. `source-fetch-check --stamp`: 5/5 sources fetch-verified and 5/5 resolved, with 0 new stamps and 0 documented drops.
- The batch-34 cross-batch file was compared read-only against current run manifests: 13 review rows for 13 declared in-run edges, 0 errors. Whole-run `frontier-dependency-ledger.mjs` collection currently fails on unrelated in-run item frontmatter at `items/lem-translation-invariant-locally-finite-borel-measure-on-rd.md`: invalid YAML (`BAD_DQ_ESCAPE`, line 3, column 66, `\m` in a double-quoted scalar). No shared ledger refresh was attempted.

`node tools/step1-decisions.mjs record` wrote all seven records in dependency order, without `--owner`. The Cox definition and B example are `ready`; the risk-set lemma, Hessian lemma, score lemma, estimator-linearization theorem, and normality corollary are `escalated` for the owner reconciliation above. Each record names its direct dependencies and the specific evidence or blocker. A read-only `step1Decision` check confirmed both ready records' hashes are current and all five escalation records are present. The first record attempt failed because the unrelated batch-33 manifest was temporarily invalid JSON at line 245, column 9; a later attempt succeeded after it became parseable. No batch-33 file was edited.

An initial `depcheck` call used an unsupported `--items` flag and therefore ran the repository-wide check, which reported unrelated existing published-audit findings. The correct `--items-file` invocation passed. The read-only disk-derived autopilot status remains at `1-scaffold` (39/62 covered). Batch 34 is counted artifact-incomplete because its five escalated Step-1 records require owner reconciliation; the separate run-wide owner hold lists units 20, 21, 8, 13, and 32 in `research/statistical-models-experiments-62-step1-blockers.json`. No full-run gate was attempted. No published content, shared plan, engine state, owner verdict, or other pair was edited.
