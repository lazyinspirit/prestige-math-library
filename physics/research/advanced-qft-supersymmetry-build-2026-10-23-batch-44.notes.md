# Batch 44 authoring notes — Heavy-Chiral Threshold and Anomaly EFT

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Pair: `aqft-eft-anomalies` / `aqft-eft-anomalies-examples`  
Batch dependency level: **8**, requiring batches 27, 41, and 42 according to `research/advanced-qft-supersymmetry-build-2026-10-23-batch-dependency-levels.json`. Local item levels follow the current declared edges: definition 6, theorem 7, example 8.

## Plan, design, and conflict record

The full design section in `research/plan-advanced-qft-and-supersymmetry-track.md`, lines 611–623, assigns one local anomaly/descent and heavy-chiral threshold treatment, one Wess–Zumino matching relation with representation, regulator, and counterterms fixed, and required pages `aqft-smeft-heft`, `qftx-thooft-anomalies`, and `qftx-global-anomalies-inflow`. `research/plan-spec.json` agrees on the A/B identities, order 1000, category/library, and required pages; its empty item arrays are planning placeholders, so this batch manifest supplies the assigned items. The A6 research contract proposes a `prop-` ID, while the current plan/dispatch uses the stable `physics-theorem` ID `pthm-aqft-heavy-chiral-threshold-wess-zumino-match`; the active canonical ID and kind are used.

The old batch-44 candidate text described an unrelated `U(1)_X` convention and directly cited the broader `def-qftx-chiral-anomaly-interface`. The inspected current batch-41 matching-data carrier instead fixes `H=SU(3)×U(1)_V`, a positive-chirality `(1,+1)` singlet, anti-Hermitian connection `+iB`, and `D=d+iB`. The local definition and theorem now use exactly that interface and explicitly convert to Bilal's Hermitian convention by `𝒜=-B`, `ε=-α`; the positive sign follows directly from Bilal's consistent formula. The `α`-to-ghost replacement is also checked against the current batch-41 BRST equations. The older algebraic interface was read but removed as a direct dependency because the active matching-data item supplies the exact selected representation and descent contract; it is broader and does not identify its cubic coefficient with a physical anomaly. No claim was weakened or omitted.

The two independent conflicts were recorded rather than silently blended: the plan's `pthm-` identity controls over the stale `prop-` research candidate; the current inspected matching-data interface controls the model's exact `U(1)_V` convention over the stale `U(1)_X` draft. The A6 scope warning is respected: the theorem is restricted to one Abelian charge representation and makes no non-Abelian generalization.

## Authored items and exact interfaces

- `def-aqft-heavy-chiral-u1-threshold-data` — A page, level 6; direct formulation dependencies `post-aqft-heft-model` and `def-aqft-anomaly-matching-data`. It specifies the trivial-bundle `H=SU(3)×U(1)_V` background on mostly-plus Minkowski space in natural units, zero SU(3) connection, real compactly supported nondynamical `B`, `G=dB`, a positive-chirality `(1,+1)` Weyl field, a neutral negative-chirality partner, a fixed-modulus charge-one phase `Φ=v e^{iθ}`, `M_H=|y|v`, and `B→B+dα`, `ψ+→e^{-iα}ψ+`, `θ→θ−α`. It fixes the three-regulator Pauli–Villars prescription, consistent representative, and allowed counterterms. It also records Preskill's source-backed field-redefinition/Jacobian premise only as a mass-independent local threshold interpretation; it asserts no full determinant construction or remainder bound. Bilal supports the gauge/regulator/convention choices; Preskill supports the Yukawa mass, phase redefinition, anomalous Jacobian, and mass independence.
- `pthm-aqft-heavy-chiral-threshold-wess-zumino-match` — A page, level 7; direct dependencies `def-aqft-heavy-chiral-u1-threshold-data`, `def-aqft-thooft-anomaly`, and `def-aqft-anomaly-matching-data`. Bilal's positive-chirality consistent formula is used in the explicit map `𝒜=-B`, `ε=-α`; with `tr_R(1)=1` and vanishing Abelian cubic term, it gives `𝒜_H=+(24π²)⁻¹∫αG∧G`. Since `δθ=−α` and `δG=0`, the local term `Γ_WZ=−(24π²)⁻¹∫θG∧G` has the same variation. The theorem conditionally compares any specified light functional plus this term with the ultraviolet light-plus-heavy local variation and notes the coefficient has no inverse-heavy-mass factor. It asserts no determinant existence, global phase, gauging consistency, gravitational term, or EFT remainder bound.
- `ex-aqft-heavy-fermion-anomaly-threshold` — B page, level 8; depends on the theorem. The cutoff potential is `B=λχ(x)(x⁰dx¹+x²dx³)` on a neighborhood of `supp α`, with `λ²∫α d⁴x=1`. Direct form algebra gives `G∧G=2λ²d⁴x`, integral `2`, and both variations `+1/(12π²)`. This is an exact conditional example, not empirical data or simulation.

Both A/B page files are frontmatter-only and have no Markdown body. The canonical page requirements and inventories are preserved.

## Current supplier state and decisions

The current `loadStep1Record`/`step1Decision` audit finds the `qftx-thooft-anomalies` page and actual item carriers registered in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-41.pages.json`; the global-anomaly page and its four item carriers are registered in batch 42. The actual `def-aqft-thooft-anomaly`, `def-aqft-anomaly-matching-data`, and transitive `def-aqft-cubic-anomaly-polynomial` items now have current closed `ready` Step 1 records. The directly inspected HEFT, p-form, local BRST, non-Abelian BRST, and nilpotence suppliers also have current closed `ready` records.

The actual `def-aqft-thooft-anomaly` defines the local background class in `H^{1,4}(s|d_H)` modulo the model's admitted four-dimensional counterterms and distinguishes a background global symmetry from a dynamical gauge redundancy. The actual `def-aqft-anomaly-matching-data` specifies the matching group, representation and regulator/descent input as an adopted source-backed one-loop law, not a locally derived continuum theorem. Its displayed rules `B→B+dα`, `sB=dη`, and `sψ+=−iηψ+` for charge one determine the same real-parameter ghost replacement as the local model's `ψ+→e^{-iα}ψ+`; in Bilal's notation this is `ε=−α` and the anti-Hermitian variables are `iB`, `iα`. The coefficient is fixed directly from Bilal's consistent formula, while the matching-data descent remains a clearly labeled adopted input. The actual carrier statements and their current ready records were checked against the recorded uses.

The batch-42 global-anomaly statement is a conditional SU(2) mod-two test. Batch 44 imports no result from it and makes no global claim; its page-level dependency preserves the local/global scope boundary only.

The three local Step 1 records were first written as `escalated` at `2026-10-23T12:28:40Z` while the batch-41 readiness records were missing. After batch 41 authored ready records, an attempt to record the local definition as `ready` using the native `step1-decisions.mjs record` command failed with `Only the owner may resolve this record`. The helper treats any escalated row as owner-locked even though these local rows have `owner:false`; no record was changed and `--owner` was not used. The current external prerequisites are ready, but the local decision rows remain escalated. The final manifest statement correction made the stored hashes for all three rows differ from their current item/dependency inputs. Their records and reasons therefore need owner resolution to reach current readiness. This is the exact remaining Step 1 status blocker, rather than a mathematical or convention gap.

## Source harvest and fetch evidence

Two independent full-text lecture-note treatments were read for the A page, with complete relevant arguments:

- Adel Bilal, [*Lectures on Anomalies*](https://arxiv.org/pdf/0802.0634), full 108-page PDF. Read §8.2, Eqs. (8.20)–(8.25), for Hermitian/anti-Hermitian connection, parameter, and fermion conventions; §5.2.3, Eqs. (5.32)–(5.46), including the opposite-statistics PV fields, mass cancellation condition `M₂²=M₁²+M₃²`, regulated triangle, positive-chirality cubic trace, and anomaly coefficient; and §9.3, Eqs. (9.16)–(9.30), for the complete consistent-anomaly completion. These passages directly support the formula and its conversion used here.
- John Preskill, [*Gauge Anomalies in an Effective Field Theory*](https://preskill.caltech.edu/pubs/preskill-1991-effective.pdf), full 78-page PDF. Read the complete §6.3–6.4 route, Eqs. (6.34)–(6.45): the Goldstone-dependent Yukawa mass, chiral change of variables, anomalous Jacobian, mass-independent gauge variation after integrating out the heavy fermion, and local Wess–Zumino interpretation. Its broader gauged `G/H`, cutoff, and gauge-consistency conclusions are not imported into this nondynamical `U(1)_V` model.

The search also found D’Hoker–Farhi's 1984 electroweak decoupling paper. Only its abstract/opening scope was inspected; it was not harvested because its `SU(2)_L` electroweak/global-soliton model is not this selected Abelian background computation. No full reading is claimed. No source retrieval failed, so no `source_resolution` drop/escalation record was required. `batch-44.coverage.json` records each source URL, exact locator, per-item disposition and limitation, search, retrieval attempt, and fetch stamp. The `source-fetch-check --stamp` result is recorded after the final source metadata synchronization.

## Cross-batch dependency edges

The array in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-44.cross-batch-dependencies.json` has one row per current direct page/item edge. All seven page/item edges are now `verified` for their stated scoped interfaces, based on current carrier inspection and current ready upstream item records. These statuses record scoped dependency checks, not independent proof approval. The ghost conversion is checked from the actual BRST rules; no global anomaly item is used as a supplier.

## Final scoped validation

- `source-fetch-check --stamp`: 4/4 source records fetch-verified, 0 newly stamped, 0 retrieval failures, 0 documented drops.
- Explicit `proof-layout` on the three changed items: 3 items, 8 steps, 0 defects.
- Normative `precheck` on the theorem and example: 2 checked, 0 failing.
- `proof-contract --strict --json`: all 3 contracts checked, 0 errors, 0 warnings.
- `manifest-deps`: 3 manifest items, 0 missing dependency arrays, 0 errors.
- `content-policy`: 3 scoped items, 0 errors, 0 warnings.
- `rendercheck`: 3 items and 2 A/B page files, 0 errors, 0 warnings.
- Focused `depcheck` using this batch's item-scope file: 3 items and both pages checked; 0 errors and 0 warnings.
- A direct item-statement audit found no hyperlinks inside the three complete Definition/Statement/Example sections, and each manifest statement exactly matches its full local section. Both page files have empty bodies. The cross-batch JSON parses as an array of 7 valid one-edge rows.

The latest run-wide `item-dependency-levels.mjs check` exits 1 because other current inventories and supplier levels are inconsistent. It reports empty scaffold inventories for `qftx-s3-partition-functions`, `qftx-s3-partition-functions-examples`, `qftx-adhm-zero-fi-asd-correspondence`, and `qftx-adhm-zero-fi-asd-correspondence-examples`. It reports stale declared levels for `lem-aqft-local-counterterm-shift-is-relative-coboundary` (0 vs computed 3), `def-aqft-thooft-anomaly` (0 vs 3), `def-aqft-anomaly-matching-data` (1 vs 4), `pthm-aqft-selected-chiral-spectrum-anomaly-cancellation` (2 vs 5), `ex-aqft-single-chiral-fundamental-polynomial` (2 vs 5), `ex-aqft-mixed-background-counterterm-shift` (2 vs 5), and `ex-aqft-vectorlike-conjugate-chiral-pair` (3 vs 6). It reports no batch-44 item-level mismatch; local levels 6/7/8 agree with the current dependency closure.

`proof-contract-coverage` stops at the unrelated empty frontier inventory `qftx-s3-partition-functions` in batch 49. `statement-first-check --run ... --domain physics` stops at the same empty batch-49 inventory before evaluating this batch. The direct statement-link/page-body audit above covers these local requirements; the run-wide gates remain blocked by that external inventory.

## Current readiness decisions

The latest `loadStep1Record`/`step1Decision` check finds closed `ready` records for all required external suppliers: `post-aqft-heft-model`, `def-aqft-thooft-anomaly`, `def-aqft-anomaly-matching-data`, `def-aqft-cubic-anomaly-polynomial`, `def-aqft-p-form-global-symmetry`, `def-qftx-local-brst-cohomology`, `def-qftx-nonabelian-brst-complex`, and `lem-qftx-nonabelian-brst-nilpotence`. Their current statements were inspected and match the recorded use.

The three local records remain `escalated`, because they were authored earlier in the turn while the direct batch-41 readiness records were missing. After those upstream records became ready, a non-owner attempt to record `def-aqft-heavy-chiral-u1-threshold-data` as `ready` was rejected by `step1-decisions.mjs` with `Only the owner may resolve this record`. The rejection did not change any file. The helper treats escalated decisions as owner-locked, and the dispatch prohibits using `--owner` or overwriting an escalation, so no further record write was made. The final manifest statement correction made the stored hashes for all three rows differ from their current item/dependency inputs, and their escalation evidence predates the current ready supplier records. Those three native records need owner resolution to reflect the now-ready prerequisites and final item hashes. This is a workflow-state blocker, not a remaining mathematical or supplier-interface gap. Independent proof approval remains a later gate.

The local `step1-decisions.mjs record` commands originally created these three `escalated` rows at `2026-10-23T12:28:40Z`; subsequent native attempts did not mutate them. The latest batch-44 proof, manifest, source, rendering, and focused dependency checks still pass as listed above. The unresolved owner-locked readiness records and unrelated run-wide inventory/level errors are the remaining obligations.


## Owner scientific repair (2026-10-23)

See `advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/batch41-44-owner-resolution.md` for actual source/proof review, preserved preimages, focused checks and root-owned native recertification. Earlier author status statements above are historical, not current readiness certificates.
