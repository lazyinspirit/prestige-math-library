# Batch 22 — Selected ingoing RN extension and time orientation

Run: `physics-remaining-80-2026-10-17`  
Role: beta  
Owned pair: `emg-ms02` / `emg-ms02-examples`  
Status: authoring complete; all 15 Step 1 records escalated for the inspected upstream draft closure and the absent planned causal-vocabulary carrier.

## Inventory and placement

The A page contains 11 items and the B page contains 4 examples, matching the reserved inventory and remaining well below the 100-item A-page cap. A items are ordered supplier-first by current in-run dependency level:

- Level 4: `def-emg-xs-ingoing-rn`, `prop-emg-xs-rn-local-gauges`.
- Level 5: `prop-emg-xs-rn-horizon-data`.
- Level 7: `thm-emg-xs-rn-crossing`, `thm-emg-xs-kn-extension`.
- Level 8: `prop-emg-xs-kn-horizon-data`, `prop-emg-xs-kn-ergoregion`, `prop-emg-xs-charged-ring-obstruction`, `lem-emg-xs-null-barrier`.
- Level 9: `thm-emg-xs-rn-escape`, `thm-emg-xs-kn-escape`.

The B examples are ordered as level 5 `ex-emg-xs-superextremal-rn`, level 8 `ex-emg-xs-extremal-horizon` and `ex-emg-xs-topological-charge`, and level 9 `cex-emg-xs-ergo-is-not-horizon`. The rule applied is zero without an in-run item supplier, otherwise one plus the maximum in-run supplier level. The scoped calculation in `batch-22.dependency-inputs.json` matches all 15 declared levels.

The current dispatch and `plan-spec.json` require `emg-ms01` and `geodesics-the-exponential-map-completeness-and-hopf-rinow` for A, and `emg-ms02` for B. An older reservation block in the design says `EMG-MS01` and `EMG-MG02`; the source proposed inventory lists `EMG-MS01`, `EMG-MG01`, `EMG-CP01`, and `EMG-MG02`. The current plan row and dispatch control, so the pages retain the two current A requirements. The plan-spec item arrays are empty pre-scaffold placeholders; the assigned manifest now carries the 11/4 item inventory. The A/B page files and the run manifest are consistent.

## Conventions and scope

The pair fixes signature $(-,+,+,+)$, length units for $M,Q,a,q,r,v$, the RN orientation $dv\wedge dr\wedge\omega$, and a smooth global future timelike field on each selected ingoing product. The RN ingoing orientation agrees with the static choice on $f>0$ but is opposite to the separate static choice on $f<0$; the definition proves this convention difference explicitly. The KN metric uses the smooth global sphere one-form $\beta=X\,dY-Y\,dX$ and the full $S^2$ product, including the axes.

The RN simple-root chart is a local construction only; it extends across both chart axes and the bifurcation sphere. Its construction requires $\kappa>0$ and is not claimed for the extremal case. Escape means exactly the selected-model observable defined by future finite-piecewise-$C^1$ paths reaching arbitrarily large $r$. The RN/KN escape boundaries are not identified with event horizons relative to an unprovided conformal completion or maximal extension. The KN stationary-limit set is defined for $T=\partial_v$ and is distinct from the rotating horizon away from the axis. The RN local-potential result proves flux and the global exactness obstruction without charge quantization. All claims are mathematical deductions; no measurement, physical realization, censorship result, or distributional source is asserted.

## Supplier status and unresolved prerequisites

The exact direct interfaces, proof status, locations and item dependencies are recorded in `batch-22.dependency-inputs.json`. Current batch-21 item levels used here are: RN data 3, RN verification 6, KN data 3, KN verification 6, KN invariants 7, KN dyonic flux 7, and RN tensor identities 4. The RN/KN data carriers are present draft definitions (`proof: not-applicable`). The RN/KN verification, invariant and dyonic-flux carriers are present draft arguments with AI-altered proofs and no independent acceptance. The KN dyonic-flux proof also relies on current-form and finite-chain Gauss drafts; those actual interfaces and statuses were inspected. Consumers preserve the exact conditional statements and do not treat these labels as proof acceptance.

The planned `def-emg-causal-solution-and-horizon-vocabulary` carrier has no item file and is absent from the current run manifest. Its planned home is `emg-cp01` in batch 6, with proof status `proposed-prerequisite-local-argument-production-authoring-required`. Its exact inspected interface for Killing horizons, surface gravity, ergoregions, the selected escape observable, and extension obstructions is transcribed under `planned_missing_inputs`. Affected items continue with complete conditional arguments: RN horizon data and escape, KN horizon data and escape, KN ergoregion, charged-ring obstruction, and the superextremal escape example. `lem-emg-xs-null-barrier` does not depend on this absent carrier; it proves the local cone estimate from existing GR future-cone definitions and the exact selected metrics.

An older batch-21 note/dependency record calls seven typed EMG foundations absent. The current batch-2 manifest and files show them present as drafts. The current actual statuses include draft definitions for finite-real suprema, real-metric conventions, powers, boundaryless completeness and set-size conventions, and draft proofs for metric nonnegativity and the countable-sequence limit criterion. Their statements, hypotheses and available proofs were inspected; presence does not confer independent acceptance. The assigned dependency closure contains 1,998 supplier nodes: 1,954 published items, 43 present draft items, and the one planned causal-vocabulary item absent. The full machine-enumerated closure and current draft statuses are recorded in `transitive_dependency_audit`; no producer outside this owned pair was edited.

## Full-text sources and dispositions

Two independent full texts were read. Carroll’s complete 238-page *Lecture Notes on General Relativity* supports the RN parameter, coordinate and rotating-root context. Adamo–Newman’s complete 30-page *The Kerr-Newman Metric: A Review* supports the RN seed, KN advanced chart, horizon, stationary-limit and ring context. Their signature $+---$ and natural/geometrized units are not imported. Exact locators, result-by-result support, limitations and all 22 dispositions are in `batch-22.coverage.json`: 20 named results are included in assigned items and two new local results (the all-angle cone collar estimate and the RN orientation comparison) are absorbed inline. Both active PDFs passed `source-fetch-check --stamp` and the subsequent fetch check; no retrieval failure occurred in this batch and no source was dropped.

A prior batch-21 Carroll HTML mirror attempt timed out. Its failed URL and timestamp were not preserved, so the batch-22 coverage repeats those fields as unknown rather than inventing them and points to the prior batch-21 evidence. The complete arXiv PDF is the active source and was re-inspected and fetch-stamped.

## Scoped checks

- Precheck: 15 assigned items, 0 failures.
- Proof layout: 15 items, 58 numbered steps, 0 defects.
- Rendercheck: 17 item/page files, 0 errors; display blocks, math spans and frontmatter parse under the renderer.
- Content policy: 15 manifest items, 0 errors, 0 warnings.
- Coverage checklist with destination requirement: 1 A page, 22 harvested results, 0 errors, 0 warnings.
- Source fetch: 2/2 active sources fetch-verified, 0 source drops.
- Strict proof contracts: 15/15 entries checked; 7 `citation-source-missing` errors, all the same exact absent `def-emg-causal-solution-and-horizon-vocabulary` prerequisite used by its seven assigned consumers. No other proof-contract errors or warnings remain.
- Scoped dependency calculation: 15/15 declared item levels match the current in-run supplier graph.
- `depcheck` on the 15 owned items reports 20 unresolved diagnostics, all for that one absent planned vocabulary ID (7 dependency edges and their wikilinks); no other unresolved ID or cycle is reported.
- The run-wide `item-dependency-levels` check reports empty inventories on unowned scaffold pages and one unrelated level mismatch (`pthm-emg-matter-symmetry-charges`, declared 5, computed 7). It reports no owned-item level mismatch.
- The run-wide `batch-dependency-levels` check reports the shared artifact stale after current run manifests changed. It remains owner-maintained and was not edited.

## Readiness

`step1-decisions.mjs record` was used without `--owner`; all 15 assigned items are `escalated`, with the direct and transitive dependency closure examined and the exact upstream status/missing carrier stated. Existing escalations were preserved. The global Step 1 check is not closed: 475 run items, 415 ready, 60 unready item decisions, and 54 empty unowned page inventories. Of the 60 unready items, 15 are this batch’s recorded escalations and 45 are outside this assignment.

Draft completion and Step 1 records do not constitute independent proof approval or publication.
