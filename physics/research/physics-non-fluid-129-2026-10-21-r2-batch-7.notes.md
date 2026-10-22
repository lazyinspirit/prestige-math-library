# Batch 7 — Radiation asymptotics and controlled multipole expansion

Run: `physics-non-fluid-129-2026-10-21-r2` · role `beta` · batch `7`.

## Inputs and plan reconciliation

Read the workspace rules, the full physics content model, schema and workflow, the assigned batch task, the complete design section in `research/frontier-expansion-2026-10-19/classical-electromagnetism/prose-scaffold.md`, its item inventory in `research/frontier-expansion-2026-10-19/classical-electromagnetism/inventory.json`, `research/plan-spec.json`, the batch dependency-level file, current run touch/drift evidence, and the relevant supplier statements and proofs. The requested run-specific owner-authoring-direction file is absent. The dispatch task and current plan identify A/B pages `emx-radiation-multipoles` / `emx-radiation-multipoles-examples`, orders 711/712, category `classical-electromagnetism`, and the same three A-page prerequisites as the design.

The design inventories three A items and two B examples. `plan-spec.json` has empty item arrays for these two planned pages, so it supplies no competing item inventory. This batch authors the planned three A items and two B examples plus one local A-page theorem, `pthm-emx-retarded-history-localization`. The additional theorem closes the design's conditional retarded-potential prerequisite for arbitrary smooth time histories: near each observation event, a compactly supported time cutoff equals one at every sampled source and observation time, allowing the compact-support retarded-kernel result to be applied locally. The resulting integral convergence and field equations are proved without assuming compact temporal support. This stays within the fixed spatial-ball, bounded-retarded-interval scope and preserves the design's warning that no infinite-time history bound is asserted. The A page has four items, well below the 100-item cap.

The design's other routes and caveats are retained: continuity cancels the longitudinal radiation term; geometric and time-shift errors are uniform for `r >= 2a`; the dipole power estimate is absolute; every finite Taylor truncation has its own source-time derivative remainder; no infinite Taylor-series convergence, unconditional `ka` approximation, relative estimate at a dipole node, near-zone field hierarchy, singular source, self-force, radiation-reaction, or empirical claim is asserted. The planned compact-time dipole supplier is not used to support a wider arbitrary-history claim; the general result is proved from the retarded kernel and the exact model assumptions.

The A/B page `requires` arrays remain identical to the design and plan: A requires `em-electrostatic-multipoles`, `em-primitives-and-postulates`, and `em-retarded-fields-and-radiation`; B requires A. No shared plan, imported mathematics, published content, engine state, or verdict was edited.

## Authored inventory and dependency levels

A page items, in supplier-first order:

| Item | Level | In-run supplier |
|---|---:|---|
| `pthm-emx-retarded-history-localization` | 0 | none |
| `def-emx-radiation-data` | 1 | `pthm-emx-retarded-history-localization` |
| `pthm-emx-transverse-radiation-data` | 2 | `def-emx-radiation-data`, `pthm-emx-retarded-history-localization` |
| `pthm-emx-controlled-dipole-power` | 3 | `pthm-emx-transverse-radiation-data` |

B page examples:

| Item | Level | In-run supplier |
|---|---:|---|
| `ex-emx-retarded-versus-fixed-time` | 3 | A-page radiation-data definition and transverse theorem (plus the local history theorem) |
| `ex-emx-dipole-dark-direction` | 4 | A-page controlled dipole-power and transverse-radiation theorems |

The item-level dependency calculation on the two batch-7 pages returned exactly these levels and no cycle. The run-wide `item-dependency-levels.mjs check` cannot pass yet because other run manifests still contain empty scaffold inventories; its errors name pages outside this assignment. Batch 7's own scoped calculation passes.

## Mathematical interfaces and proof status

All six item carriers include exact item dependencies and roles. The proof contracts contain 27 derivations matching the final numbered steps, 84 exact fact-to-supplier citations, 96 direct supplier excerpts with the current statement/definition interface, actual hypotheses and proof-status notes, boundary worksheets, and applicable finite checks. Published mathematical supplier proofs and definitions were inspected at their actual interfaces; the new draft physical theorems are consumed conditionally at their present proofs. Draft status and Step 1 readiness do not amount to independent proof approval. The examples use explicit smooth compact sources: the axial construction has `p''(u)=2F e3` and `V_1(e3,u)=6F/c>0`, while the fixed-time pulse has a uniform pre-pulse margin and a nonzero fixed-retarded-time limit.

## Sources and retrieval history

The A page has two independent full lecture-note treatments. The complete ETH Zürich 176-page script by Niklas Beisert was read, including §11.2 (printed pp. 11.4–11.7; PDF pp. 124–127) and §11.3 (printed pp. 11.7–11.13; PDF pp. 127–133). Richard Fitzpatrick's complete author-hosted notes were read at node 50 (retarded potentials), node 52 (retarded fields), and node 94 (Hertzian dipole). Steven Errede's official UIUC Physics 436 Lecture Notes 14.5 complete 44-page PDF was also inspected at printed pp. 6–8 (PDF pp. 5–7), which gives the E1 sin-squared angular distribution and defines the observation angle from the dipole axis.

Coverage records 15 harvested results: five included on the pages, eight inline in the authored items, one already covered by the published radiation-selection postulate, and one near-zone hierarchy explicitly out of scope because this pair proves far-zone limits and derivative-controlled expansions only. The coverage checklist's low-yield warning (`5/15` included) is accounted for by those inline and already-published dispositions; no harvested result is silently omitted.

The original Fitzpatrick node 95 URL returned the same 1,186-character error/wall response on all six verifier attempts (initial plus five recoveries). Four alternative searches were recorded. Node 95 is removed from the item's bibliography; its full attempt and search history remains in the coverage record as a certain `dropped` source. The coverage `source_resolution` records the complete local construction proof and its declared dependencies, and the full-text UIUC lecture note is the replacement angular-node source. No mathematical coverage is waived. Final source verification reports 5/6 URLs fetch-verified and 6/6 resolved, with one documented drop.

## Page-prerequisite escalation

The page-specific `validate-plan.mjs` check against the two assigned page IDs reports three `undeclared-prereq` edges from `emx-radiation-multipoles`: `pthm-emx-controlled-dipole-power` uses items homed on the pages `finite-counting-and-binomial-coefficients`, `banach-valued-integration-and-the-radon-nikodym-property`, and `analytic-semigroups-and-linear-evolution-equations`. The direct suppliers are respectively the factorial definition, the Bochner-integral norm bound, and the Banach-valued Taylor remainder theorem. These are existing mathematical suppliers; their actual interfaces and proofs were inspected and the item dependencies remain explicit. The assigned three-page `requires` list does not reach those three page IDs. Silently adding them here would conflict with the planned page interface and shared `plan-spec.json`, so owner action is required.

Affected claims: `pthm-emx-controlled-dipole-power` (all finite Taylor coefficients and the absolute dipole-power remainder) and its consuming example `ex-emx-dipole-dark-direction`. Proposed placement change: add the three exact mathematical page IDs above to the A page's `requires` after owner reconciliation; the B page already requires A, so it inherits the resolved prerequisite path. The item carriers and complete conditional arguments are authored; the Step 1 records for those two items are therefore `escalated` for this page-level plan conflict. The other four items have complete current item-level prerequisites and are recorded `ready`.

The scoped plan check also reports three redundant-prerequisite warnings among the planned A page's existing requirements. Those requirements are retained unchanged per the plan; no owner-directed plan correction was available. A run-wide `validate-plan --run` check is not a useful batch-7 gate at present: other batches contain unrelated prerequisite findings, and a later attempt stopped at an invalid current manifest in batch 58. No other-batch review rows were added. `research/physics-non-fluid-129-2026-10-21-r2-batch-7.cross-batch-dependencies.json` is the required JSON array `[]`: no declared dependency targets another batch within this run.

## Scoped checks

| Check | Result |
|---|---|
| `proof-layout.mjs` on the six authored items | 6 items, 27 steps, 0 defects |
| scoped `precheck.mts` | 5 proof-bearing items checked, 0 failing; definition not applicable |
| `rendercheck.mjs` on six items and both pages | 8 files, 0 errors, 0 warnings |
| `content-policy.mjs` on batch-7 manifest | 6 items, 0 errors, 0 warnings |
| `depcheck.mjs` on six items and their closure | 0 errors, 0 warnings |
| `manifest-deps.mjs` | 6 items, 0 normalized, 0 errors |
| strict `proof-contract.mjs` | 6/6 items, 0 errors, 0 warnings |
| `coverage-checklist.mjs --require-destination` | 1 page, 15 results, 0 errors, 1 explained low-yield warning |
| `source-fetch-check.mjs` final check | 5/6 fetch-verified; 6/6 resolved; 1 documented source drop |
| scoped batch-7 dependency calculation | levels 0, 1, 2, 3, 4, 3 in the inventory order above; no cycle |
| scoped plan check for pages 711/712 | 3 undeclared mathematical page prerequisites and 3 redundant-require warnings; owner action recorded above |

The Step 1 author risk-review notes in the proof contracts are author self-checks only. No independent review, verdict, or publication acceptance is claimed.
