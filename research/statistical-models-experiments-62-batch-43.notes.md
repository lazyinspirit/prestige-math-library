# Batch 43 — Finite-history linear prediction

Run: `statistical-models-experiments-62`  
Assigned dependency level: 2; prerequisite batch: 40  
Scheduling input: `94c87259c6c21716f65338c78b9fd1d65f59dff9ef50728ba0ff60be01881775`

## Plan comparison and scope

- The controlling plan is `research/plan-statistical-models-experiments-track.md` §SME-43, L271–272. `research/plan-spec.json` agrees on the A/B page IDs, title, order 2002, category, companion and all four declared page requirements. Its pre-authoring `items: []` is not an item inventory conflict.
- The older models-05 dossier and audit record use the same substantive finite-history scope but carry a broader source locator (Wang pp.67–89, ETH pp.26–34) and describe Durbin–Levinson as optional. The controlling plan narrows Wang to §5 pp.67–75, names Dewei Wang's notes, and keeps the recursion optional. This batch follows the controlling scope and retains the recursion with its own complete induction proof.
- Source pagination was checked against the retrieved PDF: Wang's §5.2 equations appear at PDF markers 68–70 (printed pp.65–67), while §5.5.1 and its recursion proof appear at markers 76–79 (printed pp.72–75). The current plan's Wang pp.67–75 locator is therefore incomplete for the beginning of §5.2; the exact inspected PDF markers are recorded in `batch-43.coverage.json`. This locator discrepancy does not change the mathematics or its hypotheses.
- The declared `central-limit-theorems` page requirement remains in the manifest. The Gaussian branch uses its published multivariate-normal definition; no central-limit conclusion is claimed.

## Item inventory and dependency order

The inventory is recorded in `batch-43.pages.json`. The A page has seven items and the B page has three examples. Item levels are computed from logical dependencies whose suppliers are in this run; published suppliers add no in-run level.

| Item | Level | In-run logical supplier(s) |
|---|---:|---|
| `lem-uncorrelated-jointly-gaussian-blocks-are-independent` | 0 | — |
| `def-best-linear-forecast-from-a-finite-history` | 1 | `def-strict-and-weak-stationarity-for-time-series` |
| `thm-finite-history-best-linear-predictor-exists-uniquely` | 2 | `def-best-linear-forecast-from-a-finite-history`, `def-strict-and-weak-stationarity-for-time-series` |
| `alg-durbin-levinson-forecast-recursion` | 2 | `def-strict-and-weak-stationarity-for-time-series`, `def-autocovariance-and-sample-autocovariance` |
| `thm-forecast-normal-equations-and-error` | 3 | `def-best-linear-forecast-from-a-finite-history`, `thm-finite-history-best-linear-predictor-exists-uniquely`, `def-strict-and-weak-stationarity-for-time-series`, `def-autocovariance-and-sample-autocovariance` |
| `thm-gaussian-best-linear-forecast-equals-conditional-expectation` | 3 | `def-best-linear-forecast-from-a-finite-history`, `thm-finite-history-best-linear-predictor-exists-uniquely`, `lem-uncorrelated-jointly-gaussian-blocks-are-independent` |
| `ex-singular-history-covariance-unique-predictor-class` | 3 | `def-best-linear-forecast-from-a-finite-history`, `thm-finite-history-best-linear-predictor-exists-uniquely`, `def-strict-and-weak-stationarity-for-time-series` |
| `thm-durbin-levinson-solves-the-prediction-equations` | 4 | `alg-durbin-levinson-forecast-recursion`, `thm-forecast-normal-equations-and-error`, `def-strict-and-weak-stationarity-for-time-series`, `def-autocovariance-and-sample-autocovariance` |
| `ex-nongaussian-conditional-mean-not-best-affine-predictor` | 4 | `def-best-linear-forecast-from-a-finite-history`, `thm-forecast-normal-equations-and-error`, `def-strict-and-weak-stationarity-for-time-series` |
| `ex-ar1-one-step-and-multistep-forecast` | 2 | `def-best-linear-forecast-from-a-finite-history`, `def-strict-and-weak-stationarity-for-time-series` |

The cross-batch dependency input records all page requirements and every direct supplier outside batch 43. Batch 40's actual stationarity and ACVF definitions were inspected, along with their hash-valid `ready` Step 1 records; those records document authoring readiness and are not independent approval. The published affine-projection theorem and every other direct published supplier used in a fact or proof were inspected in its current body. No prerequisite supplier remains unresolved.

The affine projection, normal-equations theorem, Durbin–Levinson procedure/property and finite examples are choice-free. The Axiom of Choice is stated only for the multivariate-normal block-independence lemma and its conditional-expectation consequence; their contracts identify the use.

## Source reading and retrieval

- Dewei Wang, *STAT 720 Time Series Analysis*, complete 150-page faculty-hosted PDF. The relevant Section 5.2 and 5.5.1 reasoning was inspected directly at the PDF markers recorded in the coverage file. Wang leaves predictor-class uniqueness as a homework exercise; the local argument uses the published affine $L^2$ theorem. Wang's Durbin–Levinson proposition assumes covariance decay to obtain positive definiteness; the local theorem proves the recursion under the stated positive-definite leading-block condition.
- Nicolai Meinshausen, *Time Series Analysis: Notes for the course HS 2022*, complete 57-page ETH notes read in full. Section 2.7 was inspected for normal equations, residual variance, singular-matrix caveat, the AR(1) forecast and the Durbin–Levinson context. Its Gaussian interval and large-horizon statements are outside the assigned scope.
- For the Gaussian-block lemma, Rick Durrett's complete 490-page *Probability: Theory and Examples*, 5th ed., was inspected at Section 3.10, printed pp. 202–203 (PDF markers 208–210). It constructs multivariate-normal laws from positive-semidefinite covariance matrices, discusses degenerate laws, and states the zero-off-diagonal coordinate criterion as Exercise 3.10.7. That exercise is not a proof and does not cover within-block dependence; the assigned block statement is proved locally.
- J. R. Norris's complete 54-page *Probability and Measure* lecture-notes PDF was retrieved; Sections 8.1–8.2 were read in full. Theorem 8.2.1(e) and its proof state and prove that jointly Gaussian vector blocks with zero cross-covariance are independent, with no covariance-invertibility assumption. This directly supports the singular-covariance scope of the local lemma.
- `node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-43.coverage.json --stamp` succeeded: six page-source records are fetch-verified, zero failures and zero drops; two new Gaussian-lemma sources were stamped in the final pass. The coverage file records 18 harvested results, exact locators, supported items and dispositions. `coverage-checklist` reports zero errors and one advisory: 5/13 A-page results are marked `included`; six are integrated inline with item-specific reasons and two are out of scope with reasons. No retrieval failed, so `source_resolution` was not applicable.

## Run context and final checks

The live status was recomputed after recording readiness: the run remains at `1-scaffold`, with 42/62 batches covered, no work in flight, and owner repair/recertification required by `research/statistical-models-experiments-62-step1-blockers.json`. Native result artifacts are currently missing for all 62 batches, including batch 43. Other batches remain incomplete; this task writes no native dispatch receipts, shared engine state or owner verdicts. No owner gate was attempted.

Final scoped results:

- `precheck.mts`: all 10 item files; 8 proof-bearing items passed, and the definition and algorithm were not applicable.
- `proof-layout.mjs`: 10 explicitly named items, 26 numbered steps, 0 defects.
- `rendercheck.mjs`: 10 item and 2 page files, 0 errors.
- `proof-contract.mjs --strict`: all 10 items covered, 0 errors and 0 warnings; contracts contain 26 derivations and 48 exact supplier excerpts.
- `finite-smoke.mjs`: the singular-history example's symmetric Rademacher covariance check passed.
- `content-policy.mjs`: all 10 manifest items passed with 0 errors and 0 warnings.
- Focused `depcheck.mjs`: all 10 assigned items passed; prerequisite cycle checks covered 1,575 items and 166 pages, with 0 errors or warnings.
- A CLI-usage probe with `depcheck.mjs --help` invoked its default corpus-wide scan because the tool has no help handler; it emitted unrelated repository findings and is not treated as a batch result. The focused 10-item command above is the applicable dependency check.
- `source-fetch-check.mjs`: all 6 page-source records fetch-verified; 0 drops.
- Item dependency levels recomputed over the assigned batch and supplier batch 40: 16 items, no cycles or label mismatches. Batch 43 levels are 0, 1, 2, 2, 3, 3, 4, 2, 3, 4 as listed in the manifest. The cross-batch file has 47 direct external item edges and 4 external page requirements, all with inspected supplier evidence.
- The batch-43 item filter returned 10/10 hash-valid `ready` records before the later batch-42 manifest parse defect appeared. Nine stale or missing records were refreshed in ascending item dependency level; the unchanged Gaussian-block lemma record was preserved. These records document authoring readiness only, not independent approval; the current whole-run check cannot load every manifest.

The shared batch-level artifact currently lists batch 40 at level 1 (requires batch 1) and batch 43 at level 2 (requires batch 40), with input fingerprint `7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6`; the dispatch assignment names scheduling input `94c87259c6c21716f65338c78b9fd1d65f59dff9ef50728ba0ff60be01881775`. The latest run-wide `node tools/batch-dependency-levels.mjs check --run statistical-models-experiments-62` is blocked by another pair's batch-42 pages manifest: item `cor-stable-ar-long-run-variance-plug-in-consistency` has no comma after its JSON `statement` at line 243, so the `deps` field at line 244 cannot be parsed. A separate current frontmatter inspection also confirms item `lem-translation-invariant-locally-finite-borel-measure-on-rd` in batch 49 has the invalid YAML escape `\m` at line 3, column 66. Those pairs and the shared scheduling artifact were left untouched. The scoped batch-43 item calculation passes with the declared level 2 and prerequisite batch 40. Owner reconciliation of these run-wide source defects and the artifact fingerprint, plus native dispatch for batch 43, is required before the held scaffold stage can consume this batch.
