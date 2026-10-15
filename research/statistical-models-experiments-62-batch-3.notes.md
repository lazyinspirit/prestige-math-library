# Statistical Models and Experimental Methods — batch 3 notes

Run: `statistical-models-experiments-62`  
Pair: `exact-gaussian-linear-regression-inference` / `exact-gaussian-linear-regression-inference-examples`  
Current batch-level input recorded by dispatch: `be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d`.

## Plan comparison and scope

- The assigned task, current `research/plan-spec.json` page entry, and the complete SME-03 section in `research/plan-statistical-models-experiments-track.md` agree on page IDs, title, category, and page-level `requires`; no plan/task conflict was found.
- The plan's exact scope is retained: fixed deterministic full-column-rank $X$, $1\le p<n$, independent $N(0,\sigma^2)$ errors with $\sigma^2>0$, nonzero-contrast exact $t$, nested reduced/full exact $F$ under the reduced-space null, Gaussian MLE $RSS_F/n$ distinguished from $s^2=RSS_F/(n-p)$, test calibration, mean-response intervals, one independent future response with the added $1$, and a non-Gaussian counterexample. The $x_0=0$ mean-response boundary is stated separately; $q=p$ and positive residual degrees of freedom are retained.
- The topic-to-source table in `research/statistics-scaffolds-2026-10-11/models/models-01/dossier.md` labels the exact Gaussian regression row “SME-02.” This is a stale numeric label: its named page IDs and source evidence match current SME-03 at plan line 143, and the current plan/task IDs control.
- The pair's page-level `requires` retains `central-limit-theorems`; no CLT or asymptotic calibration is used for these exact finite-sample results. The required page edge is preserved as planning context.

## Item inventory and dependency levels

The inventory and item dependencies were recorded in `research/statistical-models-experiments-62-batch-3.pages.json` before writing item carriers. Levels were recomputed against the current run manifests, including batch 2's declared item interfaces:

| Item | Home | In-run logical suppliers | `dependency_level` |
|---|---|---|---:|
| `lem-full-column-rank-matrix-has-economy-qr` | A | none | 0 |
| `cex-rademacher-errors-do-not-give-exact-regression-t` | B | none | 0 |
| `thm-exact-gaussian-linear-regression-inference` | A | local QR lemma at 0; batch-2 row-space theorem at level 3 and its reviewed suppliers | 4 |
| `thm-gaussian-regression-confidence-and-prediction-intervals` | A | exact-regression theorem | 5 |
| `ex-gaussian-regression-mean-and-prediction-intervals` | B | interval theorem | 6 |

The assigned A page has three items and the B page has two, below the 100-item A-page cap. The batch-level dependency remains batch 3 → batch 2, at dependency level 2.

## Supplier review and assumptions

- The published MSF suppliers used by the proofs were read in their current item bodies, including the orthogonal Gaussian transform theorem, Gaussian product-law result, normal/chi-square/$t/F$ definitions and regularity lemmas, pivot/test-inversion results, and statistical experiment/test definitions. The pre-existing QR exact-$t/F$ theorem was inspected as a comparison but is not a premise of the new theorem: this pair derives those laws directly from orthogonal Gaussian coordinates and the nested-subspace decomposition. The Axiom of Choice assumption is stated on the Gaussian inference results and carried to the interval and counterexample consumers. The finite Rademacher enumeration and rectangular-QR construction are choice-free.
- The current SME-02 A-page shell declares `def-fixed-design-linear-regression-model`, `def-least-squares-solution-set`, `thm-least-squares-fitted-vector-and-solution-set`, `def-linear-estimability-in-fixed-design`, `thm-linear-estimability-iff-row-space`, and `thm-ols-unbiasedness-and-covariance-full-rank`. This pair directly consumes the first two definitions, the least-squares fitted-vector theorem, and the row-space theorem; their actual item carriers and complete theorem proofs were read. The Gaussian model meets the fixed first-moment and full-rank hypotheses; its independent centered Gaussian errors supply the additional normal law used here. The row-space result makes all contrasts estimable at full rank. No planned-only source excerpt was used.
- The transitive `def-linear-estimability-in-fixed-design` supplier was also inspected through the row-space theorem's proof. The batch-2 OLS moment theorem was reviewed during the initial derivation but is not a final dependency: the Gaussian-coordinate proof establishes the distribution and covariance directly.
- The direct SME-02 theorem carriers `thm-least-squares-fitted-vector-and-solution-set` and `thm-linear-estimability-iff-row-space` still show `verification.precheck: pending`; the two directly used definitions are `n/a`. This records their current workflow state, not a mathematical rejection or owner acceptance. Their actual statements and complete arguments were checked for the hypotheses used here; this pair's Step-1 readiness does not approve them independently.
- The fixed-design page and the SME-02 carriers remain draft. The required page dependency is retained in the A-page manifest and the exact supplier item edges are included in the theorem manifest. No SME-02 files were edited.
- The broader page prerequisites other than the in-run fixed-design pair are present in the named current library homes. The exact proofs make no causal, empirical-adequacy, or scientific-applicability claim.

## Source reading and dispositions

`research/statistical-models-experiments-62-batch-3.coverage.json` records four inspected full-text sources and each harvested result's disposition. The MIT Section 15 and MIT multivariate-normal PDFs (11 and 4 pages) were read in full; the relevant pp. 1–7 of Wickham's retrieved 19-page PDF were read; and the Stanford Stats 203 lecture page was inspected in full. The MIT regression note's proof establishes the coefficient/residual orthogonal-coordinate route and states its exact contrast/partial-$F$ laws. Wickham independently states normal-theory $t/F$ inference but does not prove the independence bridge; this pair supplies the local bridge and law derivations. MIT Lecture 4 proves the orthogonal transform fact and explicitly separates its stated CLT from the finite-sample Gaussian argument. Stanford states the mean-response and prediction variance factors; the A-page proof supplies the full general-vector exact coverage argument. Stanford's table entry suggesting a mean-response $t$ interval without normality is not imported as a finite-sample exact claim.

- `node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-3.coverage.json --stamp`: **PASS**, 4/4 full-text sources fetched and stamped; 0 drops.
- `node tools/coverage-checklist.mjs research/statistical-models-experiments-62-batch-3.coverage.json --require-destination --json`: **PASS**, 1 A page, 27 harvested entries, 0 errors, 0 warnings.
- No source retrieval failed, so no `source_resolution` alternative-proof record was needed.

## Handoff and check record

The active run remains at Step 1 scaffolding. The current shared batch-level artifact still records batch 3 at level 2 requiring batch 2, but its input digest is stale: the file records `f44a63775dd68759c41c2fbc1304c8cc5f627d9d0d84ffaf1aa0227b5b330879`, while read-only recomputation from current manifests yields `7bfe8573adcea8335ec58f10ec596edbcd4ffcfeba08448c685a80d85c4bcb4b`. `node tools/batch-dependency-levels.mjs check --run statistical-models-experiments-62` therefore fails as stale. The shared derived scheduling artifact and engine state are left for the owner to recompute.

Final scoped checks:

- `node tools/tsx-run.mjs tools/author-check.mts statistical-models-experiments-62 3`: **PASS**; precheck passed all 5 proof items, rendercheck checked 7 files, content policy found 0 errors/warnings, and proof-contract check passed all 5.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-3.proof-contracts.json --strict --json`: **PASS**, 5/5 items, 0 errors/warnings.
- `node tools/proof-layout.mjs` on the five changed items: **PASS**, 5 items, 16 numbered steps, 0 defects.
- `node tools/manifest-deps.mjs research/statistical-models-experiments-62-batch-3.pages.json`: **PASS**, 5 items with explicit dependency arrays, 0 errors.
- Focused `depcheck` on the five assigned items: **PASS**, 0 errors/warnings over the 1,592-item and 372-page prerequisite closure.
- `node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-3.coverage.json --stamp`: **PASS**, 4/4 sources fetch-verified; 0 newly stamped. The coverage checklist passed with 27 harvested entries and 0 errors/warnings.
- The inline finite smoke check passed all four Rademacher outcomes and the numeric regression quantities to tolerance $10^{-12}$. Its first run used strict floating-point equality for $0.9$ and exposed machine rounding ($0.9000000000000004$); the corrected tolerance check passed.
- Assigned item levels match recomputation exactly: QR lemma 0, exact inference 4, interval theorem 5, Rademacher counterexample 0, numerical example 6. The run-wide item-level check still returns 51 out-of-scope errors: 46 empty scaffold inventories and 5 stale labels on other items. No assigned item has a level error.
- All five `step1-decisions record` entries are `ready`, use `owner: false`, and revalidate closed against their item/dependency hashes. These are author readiness records, not independent approval. The directly used batch-2 theorem suppliers remain `verification.precheck: pending`; their actual statements and proofs were checked, and no acceptance is inferred.
- After the successful final precheck, all five proof-bearing item carriers record `verification.precheck: pass`. Revalidation leaves the existing five ready records closed; verification metadata is excluded from their canonical content hash, so the records were preserved unchanged.

No retrieval failed, so no `source_resolution` alternative-proof record was needed. The shared batch graph and workflow state remain unchanged for owner reconciliation.
