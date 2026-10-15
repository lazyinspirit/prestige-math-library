# Statistical Models and Experimental Methods — batch 37 notes

Run: `statistical-models-experiments-62`  
Pair: `detection-and-quantification-limits` / `detection-and-quantification-limits-examples`  
Role: beta  
Assigned batch dependency level: 0; prerequisite batches: none  
Supplied scheduling-input hash: `be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d`

## Plan, design, and conflicts

The complete SME-37 design at `research/plan-statistical-models-experiments-track.md:246`, the run plan-spec, and the assigned scaffold metadata agree on the A/B page IDs, titles, order (1990/1991), category, companion, and the four A-page requirements: `finite-sample-tests-neyman-pearson-and-valid-p-values`, `confidence-sets-pivots-and-test-inversion`, `weak-convergence-tightness-and-representation`, and `probability-spaces-random-variables-and-expectation`. These page-level requirements remain unchanged.

The design prose names normal/CDF definitions and MSF-08/10 only when an explicitly calibrated decision or interval is claimed. The item graph uses `def-test-size-and-power` (MSF-08) for the calibrated threshold test. No confidence interval, interval-coverage theorem, asymptotic claim, or weak-convergence result is asserted, so MSF-10 and weak convergence are not logical item dependencies. The required confidence-set and weak-convergence page prerequisites remain on the A page. This is a distinction between page organization and item-level logic, not a page-metadata conflict.

The design describes $L_D$ as the concentration giving false-negative probability $\beta$. The definition formalizes it as the least positive concentration attaining that equality and makes its existence conditional; this preserves the design’s scope while specifying behavior when a root is absent. No other conflict with the controlling plan was found. The plan-spec’s initially empty `items` arrays have been populated in the assigned manifest with the authored inventory.

## Inventory, dependencies, and item levels

| Item | Home | In-run suppliers | Level |
|---|---|---|---:|
| `def-critical-detection-and-quantification-levels` | A | none | 0 |
| `lem-standard-normal-cdf-quantiles-and-symmetry` | A | none | 0 |
| `lem-normal-location-scale-mean-and-variance` | A | none | 0 |
| `thm-known-normal-blank-detection-and-quantification-limits` | A | the definition and two local lemmas above | 1 |
| `ex-detection-limit-assumptions-and-left-censoring` | B | the definition and two local lemmas | 1 |
| `ex-known-blank-normal-detection-and-quantification-limits` | B | the definition, quantile lemma, and theorem | 2 |
| `ex-estimated-blank-variance-inflates-detection-limits` | B | the theorem | 2 |

The exact direct dependency arrays are synchronized across item frontmatter, `research/statistical-models-experiments-62-batch-37.pages.json`, and coverage `item_support`. The computed local graph is acyclic and has no batch-37 item-level errors. External direct suppliers are published items; their statements and relevant proof interfaces were inspected. The cross-batch dependency input is `[]`: this pair consumes no item authored by another batch in this run. The page-level requirements are existing prerequisites, not current-run batch edges. No supplier is unresolved.

The local quantile lemma proves CDF continuity, strict increase, tail limits, unique quantiles, symmetry, and absence of atoms. The location-scale moment lemma proves the needed mean and variance from the Gaussian even-moment supplier, Cauchy–Schwarz, symmetry, and dominated convergence. The main theorem verifies threshold measurability and randomized-test setup before deriving the exact $L_C$, $L_D$, and $L_Q$ formulas. The B examples substitute the five-percent/ten-percent targets, add only a declared normal blank-variance contribution in the estimated-blank comparison, and solve both existence conditions in the heteroscedastic model. The censoring example gives the probability of the recorded half-line event, not a point-density value.

Choice accounting: AC supplies the standard normal probability law and is declared on normal-dependent items. The quantile lemma also uses countable choice only through the zero-width-box Lebesgue-measure supplier to show singleton probability zero; countable choice is derived from AC. The Gaussian even-moment supplier uses the countable-choice compact-integration bridge under AC. No local threshold algebra or example makes a further choice.

## Sources, retrieval, and disposition

The A page uses two independent complete treatments. Coverage records the exact locators, per-item arguments and dependencies, and disposition of each harvested result.

| Source | Inspected locator and use | Retrieval evidence |
|---|---|---|
| NIST SP 958, *A Century of Excellence in Measurements, Standards, and Technology* | Complete 399-page PDF retrieved previously; this pass inspected PDF pp. 177–179 / printed pp. 164–166, including Table I’s known-blank assumptions and rounded 1.64, 3.29, and 10 row. | Prior acquisition: 34,530,693 bytes, 399 pages; current coverage fetch stamp verified. |
| Eurachem Guide, *The Fitness for Purpose of Analytical Methods*, 3rd ed. (2025) | Complete 86-page guide; read §§5.3.1–5.3.5, PDF pp. 31–36, and Annex B, p. 64, including blank correction, averaging, false-positive/false-negative calibration, precision criteria, varying blanks, and the approximate 3.3s caveat. | Current coverage fetch stamp verified. |

The A-page formulas are proved locally; these sources document model conventions and measurement-science caveats. The Currie/IUPAC PDF returned HTTP 403 at the prior official URL and again at the old mirror. Searches found no open IUPAC-hosted full text; the independent full Eurachem guide was retrieved and read. Currie was not relied upon. The attempts, searches, and not-relied-upon disposition are preserved in `coverage.source_search_log`; the local proofs retain complete mathematical coverage. `source-fetch-check --stamp` verifies all 4/4 page-source entries (the two sources are listed on both pages), with no documented source drops.

## Scoped checks and readiness

| Check | Result |
|---|---|
| Local item dependency calculation | Pass: seven items; levels 0, 0, 0, 1, 1, 2, 2; no cycles or item-level label errors in batch 37. |
| `proof-contract.mjs ... --strict` | Pass: 7 contracts, 53 exact supplier citations, 18 step records; 0 errors and 0 warnings. |
| Scoped `precheck.mts` | Pass: 6 proof-bearing items, 0 failures; the definition is not applicable. |
| `proof-layout.mjs` on all seven changed items | Pass: 7 items, 18 steps, 0 defects. |
| `rendercheck.mjs` on seven items and two pages | Pass: 9 files, 0 errors, 0 warnings. |
| `manifest-deps.mjs` on batch 37 | Pass: seven items, all dependency arrays explicit. |
| Focused `depcheck.mjs` | Pass: seven items and two pages, 0 errors and 0 warnings. |
| Focused `fwdcheck.mjs` | Pass: 0 errors and 0 warnings; six items inherit the corpus’s forward marker. |
| `content-policy.mjs` on batch 37 | Pass: seven items, 0 errors and 0 warnings. |
| `source-fetch-check.mjs --stamp` | Pass: 4/4 coverage entries fetch-verified and resolved; the final rerun reused existing stamps. |
| Run-wide `item-dependency-levels.mjs check` | Still exits 1 on 52 empty inventories outside batch 37 and five stale levels: `thm-standardization-identifies-a-causal-mean`, `thm-inverse-probability-weighting-identifies-a-causal-mean`, `ex-standardization-and-ipw-two-strata-calculation`, `ex-extreme-ipw-weights-under-poor-overlap`, and `ex-weight-truncation-changes-the-ipw-target`. It reports no batch-37 error; these other batches were not edited. |
| Run-wide `step1-decisions.mjs check` | Reports 288 items, 120 ready, and `closed: false` because other assigned items and empty inventories remain. The seven batch-37 records are current and hash-bound. |

The seven assigned items are recorded as `ready` with `owner: false` and their exact direct dependency IDs. These are hash-bound authoring-readiness records, not independent proof approval or publication. Run-wide readiness remains open for the other assigned batches and empty inventories.
