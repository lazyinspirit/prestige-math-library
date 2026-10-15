# Batch 19 notes — Stochastic Protocols

Run: physics-td-qft-rpm-62-2026-10-14  
Role: beta, batch 19  
A page: td-stochastic-protocols (order 299)  
B page: td-stochastic-protocols-examples (order 300)

## Plan and reservation

The complete TD10 design section in research/plan-thermodynamics-track.md reserves ten named A items, with an A reserved cap of 24 and B cap of 8. The authored inventory keeps all ten named carriers and adds three A items required for the finite pathwise energy identity, the finite memory-reset model, and the conditional OU fluctuation calculation. The final inventory is A=13 and B=6, within both reserved caps and the 100-item hard page cap.

There is one plan conflict. The TD10 design text names td-finite-statistical-bridge as its earlier prerequisite. The assigned task and current plan-spec also require convexity. Both prerequisites are preserved in the A-page manifest. The mean-dissipation proof consumes the published finite Jensen theorem on convexity.

The current plan-spec rows for this pair are pre-authoring inventory rows with empty item arrays; the batch-19 manifest records the actual authored items. The existing batch-dependency-levels file records batch 19 at level 5 with requirements from batches 11, 12, and 15. Its current input hash is stale, so the required checker reports “Stale batch dependency levels”; that shared run-level file was left untouched.

## Item inventory and levels

All assigned item dependency_level values match the current run-manifest graph when checked for this batch:

- Level 0: def-td-detailed-balance-rate-model.
- Level 1: post-td-linear-ornstein-uhlenbeck-bath; def-td-finite-memory-reset-model; pthm-td-markov-relative-entropy-and-convergence.
- Level 2: pthm-td-ornstein-uhlenbeck-thermal-fluctuations; pthm-td-qualified-landauer-reset; ex-td-disconnected-markov-relaxation; ex-td-biased-bath-shannon-entropy-decreases.
- Level 3: ex-td-ornstein-uhlenbeck-spectrum; ex-td-biased-memory-reset-bound; ex-td-correlated-memory-zero-conditional-reset-cost.
- Level 4: def-td-driven-finite-path-model.
- Level 5: post-td-canonical-protocol-preparation; post-td-stationary-bath-kernel; pthm-td-finite-pathwise-first-law.
- Level 6: pthm-td-finite-jarzynski; pthm-td-finite-crooks.
- Level 7: pthm-td-mean-dissipation; ex-td-finite-quench-work-fluctuation.

The level rise for the finite protocol chain follows the current batch-15 finite microstate definition at level 3 and canonical-sampling postulate at level 4. Its stage-zero preparation, the stationary-kernel postulate, and the pathwise first-law theorem are consequently level 5; the finite work theorems are level 6. The finite mean bound and its quench example are level 7. The run-wide item-level command still reports unrelated empty QFT/RPM scaffold inventories and stale TD labels; none of its errors names a batch-19 item.

## Upstream interfaces and unresolved status

The initial batch-15 inventory and live local content changed during authoring. The current batch-15 manifest and library page do contain the finite statistical bridge carriers. In particular, post-td-canonical-sampling is present as a current draft postulate, with design_state “Complete draft carrier authored; scoped checks and prerequisite acceptance remain pending.” Its actual finite clause adopts P_beta(i)=exp(-beta E(i))/Z(beta) for a finite nonempty microstate set with 0<Z<infinity and beta=(k_B T)^-1. Its proof status is not-applicable because it is a postulate. The local finite-protocol preparation now states the exact T=T_b, E=E_0 specialization and uses no countable or measure-integral branch. The required td-finite-statistical-bridge page remains draft and lists qm-many-body-and-equilibrium-models, td-math-continuum-pressure, td-math-mixture-dynamics-and-shells, and td-potentials-and-responses as page prerequisites. The finite interface matches, but page acceptance is still pending.

The published convexity page and finite Jensen supplier were inspected; the finite-weight, nonnegative-weight, sum-one hypotheses match the mean-dissipation use.

The current batch-12 manifest records def-tdmath-ornstein-uhlenbeck-equation as a complete draft definition and thm-tdmath-ornstein-uhlenbeck-model as a complete draft proof carrier, with scoped checks and independent review pending. The definition explicitly asserts no existence or uniqueness. The OU physical postulate is conditional on that equation interface; the thermal theorem uses the inspected stationary covariance, spectrum convention, and time-average bound under the exact Gaussian and Brownian hypotheses. The item-level cross-batch records preserve the draft status.

The current batch-11 manifest records lem-tdmath-conditional-memory-entropy as a complete draft finite-sum proof with scoped checks and independent review pending. The local memory definition and Landauer theorem use its exact conditional entropy, chain rule, and nonnegativity interfaces; neither treats the draft as approved.

The exact statements, hypotheses, proof status, SHA-256 values, consumer uses, and open/verified interface decisions are recorded in research/physics-td-qft-rpm-62-2026-10-14-batch-19.cross-batch-dependencies.json.

## Source coverage and retrieval history

The A-page coverage records eight full-text source entries, 34 harvested results, exact locators, item dispositions, and source-specific support. The active primary treatments include Seifert’s survey, Jarzynski’s work-relations and Maxwell-demon lecture notes, the detailed-balance and relative-entropy lectures, Crooks’s paper, and Jarzynski’s 1997 paper. The sources distinguish adopted model postulates from derived finite-model predictions; no observation or measurement is claimed.

The two-page Jarzynski OU note was previously retrieved and both pages inspected. During source-fetch-check, its compressed-PDF body was retrieved on the initial attempt and all five recovery retries, but the checker could not verify the page count because mutool is unavailable. Its complete short-document receipt, six outcomes, searches, and item-specific alternatives are preserved in coverage.source_resolution. It was removed from active item bibliographies; Seifert’s independently retrieved full text and the complete conditional local OU argument cover every affected claim. No mathematical claim was dropped. The final source-fetch result is 7/8 fetch stamps and 8/8 resolved sources, including one justified documented drop.

The optional Pavliotis full-book URL returned HTTP 400 and was not cited; full-text alternatives were found in the Jarzynski OU note and Seifert review. The relative-entropy lecture’s page-image retrieval failed initially, then its complete 11-page PDF was retrieved, OCR-inspected, and visually checked at the relevant pages. That source concerns continuous diffusion and is explicitly out-of-scope for the local finite rate-graph proof. Both histories are recorded in coverage.searches.

## Scoped checks and actual blockers

- Scoped author-check, run/batch 19: pass. This runs the assigned-item precheck, rendercheck, scoped content policy, and strict proof-contract validation.
- Strict proof-contract check: 0 errors, 0 warnings, 19/19 items.
- Isolated proof-contract coverage for this batch: 19 items, 13/13 supplied proof arguments covered. The run-wide invocation is independently blocked by an unrelated empty rpm-external-charge-examples inventory.
- Coverage checklist with required destinations: 1 A page, 34 harvested results, 0 errors, 0 warnings.
- Source-fetch-check in check mode: 7/8 fetch stamps; all 8 sources resolved after the documented drop.
- Batch-scoped item dependency graph: all 19 declared levels equal their computed levels. The full-run dependency check reports unrelated empty QFT/RPM inventories and stale TD labels.
- Batch dependency level check: blocked because the shared dependency-level input hash is stale. No shared plan, run-level dependency file, engine state, or owner verdict was changed.
- Proof-layout on the explicitly authored 19 items: pass, 36 steps, 0 defects. The app renderer initially failed to resolve its @/ alias under the installed TSX loader. A temporary loader in /private/tmp mapped those aliases and extensionless TypeScript imports to the existing web checkout; the actual ItemBody renderer then completed. No app-repository files were edited.
- An attempted unscoped precheck invocation using --help ran the whole-corpus checker because that CLI has no help handler. It reported unrelated failures: def-qft-free-dirac-model and def-qft-free-field-observables were missing proof_strategy, def-qft-photon-transverse-space needed a proof-format repair, and a separate YAML parse error occurred in an unrelated item whose path was not retained in the truncated output. It made no file changes. The final scoped author-check above passes.

## Readiness records

All 19 assigned decisions are recorded as escalated, owner=false, through step1-decisions.mjs record. Each contains its current direct dependency list. The common unresolved input is the required td-finite-statistical-bridge page, whose actual draft carriers exist but whose scoped checks and prerequisite acceptance remain pending; item-specific draft suppliers are named in the relevant record and in the cross-batch evidence. The consumers and both pages are fully authored, and none of the draft suppliers is claimed as approved.

## Run-level status

The Step 1 checker now reports 19/19 assigned items as unresolved escalations; it reports 233 ready of 652 total run items and exit 1 because the run still has open work.

The autopilot live recomputation is unavailable because the stored workflow revision differs from the current stage numbering. The fallback status report says the run is still running at stage 1-scaffold, with 41/64 pairs covered, batch 19 listed in flight, and two existing blockers: owner repair/recertification requested by step1-blockers.json and a recorded scheduling-scope mismatch. No engine state or owner verdict was changed.
