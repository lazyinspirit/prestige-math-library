# Batch 18 — authoring notes

Run: physics-remaining-80-2026-10-17  
Role: beta  
Assigned pair: emg-mp01 only  
Batch dependency level: 4, requiring batches 1, 4, 5, and 15 in research/physics-remaining-80-2026-10-17-batch-dependency-levels.json.

## Plan and design reconciliation

The selected current page row in research/plan-spec.json and the current batch assignment require emg-g04 and emg-mm01. The older research reservation at research/plan-einstein-maxwell-models-track.md L618–637 and research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json additionally list emg-g01 and emg-mg04 as direct page prerequisites. The current plan controls the conflict: emg-g04 itself requires emg-g01 and emg-mg04, and emg-mm01 also requires emg-mg04. Those older prerequisites therefore remain in the transitive page closure. No current page requirement was removed, and the seven A items plus one B example match the reserved item inventory.

Necessary item-level prerequisites are explicit: pthm-emg-matter-symmetry-charges uses the same-page pthm-emg-dust-mass-force-reduction for matter exchange and directly declares the curved-Maxwell postulate, Maxwell-stress lemma, charged-symmetry theorem, and the published RPM model/action/equivalence plus def-countable-choice for its separate test-body clause. The B example depends on def-emg-matter-observables for the tensor formula it evaluates. The symmetry page manifest and cross-batch ledger were reconciled to these current item dependencies; no shared plan or supplier was edited.

The selected inventory had assigned physical-assumption roles to the Einstein and curved-Maxwell postulates in two postulate items. The physics schema treats preceding postulates as formulation prerequisites, so those two roles are recorded as formulation-prerequisite. Their adopted formulations remain explicitly present in the Postulate text. Other planned dependency roles are preserved.

## Item inventory and levels

Item-level dependency_level is computed using only current-run item suppliers; external mathematical and published RPM suppliers do not raise the item level. Current inspected supplier item levels and the authored graph give:

| Item | Level | In-run supplier levels controlling it |
|---|---:|---|
| def-emg-matter-observables | 1 | def-emg-geometry-units 0; def-emg-matter-formal-systems 0 |
| post-emg-transported-charged-dust | 3 | def-emg-matter-observables 1; post-emg-einstein-maxwell-equations 2; post-emg-covariant-maxwell 1; thm-emg-charged-dust-projection 1 |
| post-emg-charged-fluid-balance | 3 | def-emg-matter-observables 1; post-emg-einstein-maxwell-equations 2; post-emg-covariant-maxwell 1; thm-emg-charged-fluid-projections 1 |
| pthm-emg-dust-mass-force-reduction | 4 | post-emg-transported-charged-dust 3; thm-emg-charged-dust-projection 1 |
| pthm-emg-fluid-work-heating | 4 | post-emg-charged-fluid-balance 3; thm-emg-charged-fluid-projections 1 |
| pthm-emg-matter-symmetry-charges | 7 | thm-emg-charged-symmetry-current 6; lem-emg-maxwell-stress-divergence 5; pthm-emg-dust-mass-force-reduction 4; dust postulate 3; curved-Maxwell postulate 1 |
| pthm-emg-matter-energy-conditions | 2 | def-emg-matter-observables 1; thm-emg-selected-matter-energy-conditions 1 |
| ex-emg-ml-b03 | 3 | pthm-emg-matter-energy-conditions 2; def-emg-matter-observables 1 |

The batch level remains 4 from the immutable run dependency-level record. The item graph was recomputed after current batch-15 materialization: thm-emg-charged-symmetry-current is now level 6 and lem-emg-maxwell-stress-divergence level 5, so the assigned symmetry theorem is level 7. Other assigned item levels remain as listed. Item levels count current-run suppliers only; published RPM and mathematical imports are context.

## Supplier inspection and readiness

The current emg-mm01 and emg-mm01-examples page carriers and the batch-15 manifest now exist; the A page lists eight current items. The exact draft files def-emg-matter-formal-systems, thm-emg-charged-dust-projection, thm-emg-charged-fluid-projections, thm-emg-selected-matter-energy-conditions and thm-emg-charged-symmetry-current were inspected at their complete statements, Facts and proofs, along with their consuming interfaces. Their batch-15 Step-1 records are current and `ready` for authoring; their proof carriers remain draft with `verification.precheck: pending`, and this batch does not represent them as independently accepted. I checked signature, SI conventions, source sign, tensor index placement, regularity, positive-density restriction, finite side-flux condition, local potential and ACω use. The current emg-g04 page and batch-5 manifest are also present. Every cross-batch item/page edge in this batch was checked at its exact current interface; verified rows record that scoped check only.

All assigned prerequisites are now present and current, so the eight final Step-1 decisions are `ready` for authoring/review handoff. The physical proofs remain conditional on draft mathematical suppliers at the exact stated interfaces. This does not certify those proofs, grant independent acceptance, or imply publication.

## Source reading

Two independent full lecture-note treatments were retrieved and inspected for the A page: Carroll’s complete 238-page GR notes and Tong’s complete 290-page GR notes. The complete 8-page Meinel–Hütten article was also inspected. Exact locators, supported claims, local convention conversions, source dispositions and successful source-fetch-check stamps are in batch-18.coverage.json. Carroll and Tong use conventions that differ from the local SI signs/normalizations; all statements here follow the local suppliers and formulas. Meinel–Hütten covers only its static ECD branch, including its fixed ratio and c=G=1 Gaussian units; those restrictions are not generalized. No empirical source or experiment is used. Harte’s previously harvested WKB material was marked not selected for this matter page because it does not support any assigned matter claim; it was not dropped for a retrieval failure. No selected source retrieval failed and no source was dropped.

## Scoped checks and run-wide observations

`source-fetch-check --stamp` confirmed 3/3 selected sources with 0 new stamps. `content-policy` passed for all 8 items; focused `depcheck` passed for all 8 items and both pages with 0 errors or warnings; proof-contract strict validation passed for all 8 entries; `precheck` passed 7 applicable items; `proof-layout` passed 5 proof-bearing items and 12 steps; `rendercheck` passed all 8 items and 2 pages; and `manifest-deps` found all 8 inventory entries explicitly declare dependencies. The current item/manifest audit found no dependency or role mismatches, all 8 item levels match the recomputed current graph, and the 16 cross-batch rows exactly cover the current declared item/page edges. All 8 Step-1 readiness records are current and closed as `ready`.

The run-wide `proof-contract-coverage` command remains blocked by the empty, unassigned `emg-mm03` inventory. The run-wide item dependency-level command reports 46 other empty A/B inventories across Einstein–Maxwell Models, Quantum Statistical Mechanics, and Thermodynamics/General Relativity, with no nonempty-graph errors and no batch-18 level mismatch. Those other pairs were left untouched. Full outputs and exact page IDs are in `author-check-18.json`.

## Completion

All eight assigned items, both page carriers, the manifest, proof/nonproof contracts, source coverage, cross-batch dependency evidence and final readiness records are complete. The source fetch check confirms all three selected documents; scoped content, dependency, proof-format, proof-layout and render checks are recorded in author-check-18.json. The run-wide dependency/contract-coverage commands still report unrelated empty inventories; the exact scoped results and blockers are recorded there. Completion is not independent review or proof acceptance.
