# Batch 24 — SI and geometric solution parameter identifications

Run: `physics-remaining-80-2026-10-17`  
Role: beta  
Owned pair: `emg-s01` / `emg-s01-examples`  
Status: all nine assigned carriers authored; draft mathematical suppliers are used conditionally.

## Inventory and placement

The A page `emg-s01` contains the seven planned items, ordered supplier-first:

1. `def-emg-xs-si-parameters` (level 3)
2. `pthm-emg-xs-rn-model` (level 7)
3. `pthm-emg-xs-kn-model` (level 7)
4. `pthm-emg-xs-dyonic-model` (level 8)
5. `pthm-emg-xs-static-redshift` (level 8)
6. `pthm-emg-xs-rn-horizons` (level 10)
7. `pthm-emg-xs-kn-horizons` (level 10)

The B page `emg-s01-examples` contains the two planned examples: `texp-emg-xs-photon-radius` (level 8) and `texp-emg-xs-rotating-ergoregion` (level 9). The pages remain below the 100-item cap. No local mathematical supplier item was needed: the SI conversion, horizon formulas, causal vocabulary, Killing identities, and null-geodesic equations have exact current carriers, so no missing result or definition was hidden inside a consumer proof.

## Direct dependencies and levels

`research/physics-remaining-80-2026-10-17-batch-24.pages.json` records each complete direct `deps` list and dependency role. The main in-run chains are:

| Item | Level | Same-batch suppliers | Other in-run suppliers |
|---|---:|---|---|
| `def-emg-xs-si-parameters` | 3 | — | `def-emg-geometry-units` (batch 1), `def-emg-xs-geometric-electrovac` (21) |
| `pthm-emg-xs-rn-model` | 7 | `def-emg-xs-si-parameters` | `post-emg-einstein-maxwell-equations` (5), `def-emg-xs-rn-data` and `thm-emg-xs-rn-verification` (21), `lem-emg-maxwell-current-forms` (3) |
| `pthm-emg-xs-kn-model` | 7 | `def-emg-xs-si-parameters` | `post-emg-einstein-maxwell-equations` (5), `def-emg-xs-kn-data`, `def-emg-xs-kn-full-sphere-exterior`, `thm-emg-xs-kn-verification` (21), `lem-emg-maxwell-current-forms` (3) |
| `pthm-emg-xs-dyonic-model` | 8 | `pthm-emg-xs-kn-model`, `def-emg-xs-si-parameters` | `lem-emg-maxwell-current-forms` (3); `thm-emg-xs-kn-verification`, `lem-emg-xs-duality`, `prop-emg-xs-kn-dyonic-flux`, `def-emg-xs-kn-data`, `def-emg-xs-rn-data` (21); `prop-emg-xs-rn-local-gauges` (22) |
| `pthm-emg-xs-static-redshift` | 8 | `pthm-emg-xs-rn-model`, `def-emg-xs-si-parameters` | `def-emg-geometry-units` (1), `def-emg-xs-rn-data` (21) |
| `pthm-emg-xs-rn-horizons` | 10 | `pthm-emg-xs-rn-model` | `def-emg-xs-ingoing-rn`, `thm-emg-xs-rn-crossing`, `thm-emg-xs-rn-escape` (22); causal vocabulary (6) |
| `pthm-emg-xs-kn-horizons` | 10 | `pthm-emg-xs-kn-model`, `def-emg-xs-si-parameters` | `thm-emg-xs-kn-extension`, `prop-emg-xs-kn-horizon-data`, `thm-emg-xs-kn-escape` (22); causal vocabulary (6) |
| `texp-emg-xs-photon-radius` | 8 | `pthm-emg-xs-rn-model`, `def-emg-xs-si-parameters` | `def-emg-xs-rn-data` (21) |
| `texp-emg-xs-rotating-ergoregion` | 9 | `pthm-emg-xs-kn-model`, `def-emg-xs-si-parameters` | `thm-emg-xs-kn-extension`, `prop-emg-xs-kn-ergoregion` (22); causal vocabulary (6) |

The explicitly changed A/B manifest was also checked with a scoped dependency calculation against all current run manifests: **9/9 declared levels match**, with levels `3, 7, 7, 8, 8, 10, 10, 8, 9`. Every same-batch edge points from a lower-level carrier to a consumer. The two page requirements are exactly `emg-g04` and `emg-ms02`; both page scopes and their current required inputs were inspected. The companion requires `emg-s01`.

## Plan comparison and conflicts

- The current `plan-spec.json` and batch-24 manifest require `emg-g04` and `emg-ms02`. The older reservation in the track design also lists `EMG-G01` and `EMG-MS01`; the current plan controls, so those stale page requirements were not copied.
- The old proposed item inventory routes the RN/KN physical models through the covariant-Maxwell/action branch. The current physical fork supplies the equation-based postulate `post-emg-einstein-maxwell-equations`; the authored model theorems use that exact adopted interface and do not import an action hypothesis.
- The old static-redshift and photon examples name `GR-OPTICS`, which is a research key, not an item ID. The complete local arguments use the published Killing/geodesic results and the actual adopted `post-gr-ideal-clocks-and-free-fall` interface. No pseudo-ID is declared.
- The source inventory calls the dyonic item “Dyonic rotating model and gauge obstruction.” Its proof covers the rotating full-sphere exterior obstruction by the nonzero magnetic sphere flux and finite Stokes; the RN north/south potentials are additionally stated only in the nonrotating limit, where their exact supplier applies.

The dated owner-authoring direction was read and followed. In-run suppliers whose carriers were absent in historical batch notes were checked on disk: the seven EMG foundations, the batch-6 causal vocabulary, and the current observer-stress scaling interface are present at their current statements. Earlier batch-21 notes about missing foundations/alpha scaling and batch-22 notes about absent causal vocabulary are historical, not current blockers. The actual theorem/proposition proofs that remain draft are explicitly identified in item Facts & Assumptions and are consumed only conditionally; an authoring-ready or `ready` record is not proof acceptance.

## Conventions and mathematical scope

The parameter map fixes the model-local meanings of SI mass, angular momentum, electric charge, and magnetic flux and converts them to length parameters. It makes no ADM/Komar identification, magnetic-charge relabeling, or quantization assumption. The RN and KN theorems are conditional solutions of the adopted zero-source, $\Lambda=0$ equation-based model on their exact stated domains. The local potential obstruction uses the nonzero flux through a sphere-containing region and finite smooth-chain Stokes, without asserting a regular center source.

The horizon items distinguish local Killing-horizon geometry and SI factors from the selected escape boundary. They do not assert maximality, conformal infinity, formation, uniqueness, censorship, or observation. The redshift result is a phase-frequency ratio under an explicit local $C^2$ eikonal phase and the adopted ideal-clock/geometric-optics postulates. The photon-radius item constructs an actual future circular null geodesic; it makes no stability claim. The rotating example concerns only the $T=\partial_v$ stationary field and does not infer an extraction process or rule out trajectories with angular motion. No item reports measurements or experimental precision.

## Source reading and dispositions

`batch-24.coverage.json` records the exact locators, item support, limitations, and disposition of all 19 harvested results. Four complete authoritative texts support the A-page conventions and solution context: Carroll’s 238-page *Lecture Notes on General Relativity*; Adamo–Newman’s 30-page Kerr–Newman review; the official 214-page BIPM SI Brochure version 4.01; and David Tong’s 236-page *Electromagnetism* notes. Carroll and Adamo–Newman are independent full-text treatments; Carroll/Tong provide complete lecture notes. The complete PDFs and the item locators were inspected. Source conventions are compared, not copied without conversion. There was no retrieval failure or dropped source in this batch; the existing exact fetch attempts/stamps were reused. `source-fetch-check --stamp` reports **4/4 fetch-verified, 0 newly stamped**.

## Cross-batch dependency review

`batch-24.cross-batch-dependencies.json` is a JSON array with one row per direct in-run edge: **32 item edges and 2 page edges**. Each is `verified` at the scoped interface level. Draft theorem/proposition proof status remains explicit; a verified row records only the checked consumer/supplier interface and grants no independent proof approval. No transitive observation about another batch is represented as a consumer-owned edge.

## Scoped check results and blockers

- Normative precheck: 9 files, 8 proof-bearing items, **0 failures**; the SI definition is not proof-bearing.
- Proof layout on the explicitly changed items: **9 items, 43 steps, 0 defects**.
- Rendercheck on all 9 item files and both pages: **11 files, 0 errors**.
- Full scoped content policy and authored-manifest policy: **9 items each, 0 errors and 0 warnings**.
- Focused dependency/cycle check: **9 selected items, 1,786-item transitive closure, 398 prerequisite pages, 0 errors/warnings**.
- Coverage checklist: **1 A page, 19 harvested results, 0 errors/warnings**.
- Strict proof contracts: **8/8 proof-bearing items, 0 errors/warnings**. Every numbered step is mapped, every linked fact has an exact supplier excerpt, and all eight standard boundary cases have a checked or justified not-applicable disposition.
- Scoped level calculation: **9/9 match**, as listed above. The run-wide `item-dependency-levels` check still reports 38 empty scaffold inventories in other batches; it reports no mismatch for an owned item.
- The run-wide `proof-contract-coverage` check stops at the unrelated empty frontier inventory `emg-mp03`. The local strict contract check above passes for all eight assigned proof-bearing items.
- `batch-dependency-levels.mjs check --run` reports the shared batch-level artifact stale. That shared artifact was left unchanged under the owner-only shared-state rule; its recorded batch-24 level remains 4 with page prerequisites in batches 5 and 22.
- The scoped path check selected only `emg-s01` and its companion; no category pathway file is currently present for that draft category, so it checked 0 pathway files and returned 0 errors/warnings. This does not alter the authored page requirements.

## Readiness

All nine Step-1 records are `ready` and their hashes are current against the final items, manifests and transitive supplier inputs. Each record examined the full direct dependency list. The direct dependency carriers all exist and their exact current interfaces were inspected. Draft mathematical proofs remain conditional, with that status in the consumers and the cross-batch evidence. Readiness records completion of authoring, placement and contracts only; it is not independent review, adjudication or publication.
