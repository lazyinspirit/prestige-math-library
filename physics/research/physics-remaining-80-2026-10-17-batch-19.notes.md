# Batch 19 — Separately adopted fixed-background Maxwell and charged probes

Run: `physics-remaining-80-2026-10-17`; role **beta**; owned pair: A `emg-mp03` and B `emg-mp03-examples`.

## Plan, scope, and inventory

The owner authoring direction, current plan specification, complete assigned track-design section, and workspace instructions were read before authoring. The current plan and batch manifest require `emg-mm03` and `emg-mp01` on the A page; the B page requires A. The track design at `research/plan-einstein-maxwell-models-track.md` L643 additionally reserves `emg-mm01`. This is a plan/design conflict: the current `plan-spec.json` controls, so the extra page requirement was not copied. `emg-mm01` remains reachable through the required MM03/MP01 interfaces. The exact conflict is retained here for the owner.

| Page | Item | Level | Direct dependencies |
|---|---|---:|---|
| A | `post-emg-background-maxwell-test` | 2 | `def-emg-matter-observables`; `post-rpm-external-charge-action`; `pthm-rpm-external-charge-action-equivalence`; `lem-emg-controlled-maxwell-wkb` |
| A | `pthm-emg-controlled-test-geometric-optics` | 3 | `post-emg-background-maxwell-test`; `lem-emg-controlled-maxwell-wkb`; `lem-emg-source-and-test-scaling` |
| A | `pthm-emg-source-test-backreaction-scope` | 3 | `post-emg-background-maxwell-test`; `def-emg-matter-observables`; `lem-emg-source-and-test-scaling` |
| A | `pthm-emg-weak-slow-test-motion` | 3 | `post-emg-background-maxwell-test`; `thm-emg-weak-slow-test-lorentz-limit` |
| B | `ex-emg-ml-b04` | 7 | `post-emg-background-maxwell-test`; `thm-emg-charged-symmetry-current` |
| B | `ex-emg-ml-b07` | 4 | `def-emg-matter-observables`; `def-emg-matter-formal-systems`; `lem-emg-observer-field-decomposition`; `pthm-emg-controlled-test-geometric-optics`; `pthm-emg-source-test-backreaction-scope` |
| B | `ex-emg-ml-b08` | 4 | `pthm-emg-weak-slow-test-motion` |

The item inventory is the planned four A items and three B examples, supplier-first within the A page. Both pages are far below the 100-item cap. No missing local definition or intermediate result was needed. B07 uses the published observer-field decomposition for the exact tetrad/Hodge convention; its field equations, stress tensor, and observer definitions use the current matter-observables definition. The complete B07 proof explicitly checks the Hodge sign, Bianchi component, all four Maxwell divergences, positive energy, and the unchanged-background Einstein residual.

## Supplier interfaces and proof status

The current carriers for `def-emg-matter-observables`, `def-emg-matter-formal-systems`, `lem-emg-controlled-maxwell-wkb`, `lem-emg-source-and-test-scaling`, `thm-emg-weak-slow-test-lorentz-limit`, and `thm-emg-charged-symmetry-current` were read at their complete current arguments and checked against their current Step 1 records using `loadStep1Record` and `step1Decision`. All are current and `ready`; the formal-system definition and charged-symmetry theorem's `verification.precheck: pending` do not erase their complete inspected content or current readiness records. The WKB, source/scaling, weak/slow, and charged-symmetry carriers remain draft and are used only under their exact stated hypotheses. The external charged-action postulate/equivalence are published and their local-potential, finite-curve, and inherited `ACω` clauses are preserved. The published observer-field decomposition's complete proof and exact convention were inspected; it is not an item in this run and has no run-local Step 1 record. B07 records the inherited `ACω` premise used by the exact observer/WKB interfaces and assumes no full or stronger choice axiom.

The Postulate adopts the fixed-background Maxwell and charged-probe model; the three A theorems are conditional deductions; B04/B07/B08 are exact idealized model examples. No experiment is treated as proof, and no observation, statistical inference, or empirical precision is claimed. Each mathematical item used by a physical item is an explicitly declared mathematical premise; no mathematical item takes a physical dependency.

## Sources and coverage

`research/physics-remaining-80-2026-10-17-batch-19-sources/source-reading.md` records the complete relevant reading and source limitations; the coverage JSON records URLs, locators, all 14 harvested result dispositions, and the per-item arguments and dependencies. Reall and Tong provide two independent complete lecture-note treatments for the A page; Harte and Poisson–Pound–Vega provide detailed independent treatments of the Maxwell-wave and charged-probe contexts. The directly inspected passages include Reall §6.2, PDF pp. 61–64; Tong §§1.2.3–1.2.4, PDF pp. 23–26, plus the reused batch-18 record for §§4.5.2–4.5.7, PDF pp. 190–204; Poisson–Pound–Vega §18.1, PDF pp. 96–98; Harte §§3.1–3.3, PDF pp. 10–13 and Appendix A, pp. 33–34; Carroll §4.1, PDF pp. 112–114, plus the reused batch-18 Maxwell-stress reading; and Meinel–Hütten §2, PDF pp. 2–3. Source-specific units and signs are not silently imported.

All six complete PDFs and their fetch histories were reused from current-run records, and the relevant full-text sections were inspected directly. No selected retrieval failed; no recovery retry, source drop, alternative-proof disposition, or owner source escalation was needed. `source-fetch-check --stamp` reported **10/10 source entries fetch-verified and resolved, 0 newly stamped**. Coverage reported **2 pages, 14 harvested results, 0 errors, 0 warnings**.

## Cross-batch interfaces

`research/physics-remaining-80-2026-10-17-batch-19.cross-batch-dependencies.json` is a JSON array of **12 verified rows**: two page prerequisites and ten direct item edges to other batches in this run. Each row records only the scoped current-interface check, not independent proof approval. Same-batch supplier edges are represented in the item dependencies and levels; published mathematical suppliers outside this run are not misreported as cross-batch edges.

## Scoped checks and shared blockers

- `author-check.mts` passed for batch 19 with fingerprint `851e15e6db2117d0713702096d3cb2f7c0ac4906cf2f797981c01f08804314c1`: 7/7 items passed precheck; rendercheck covered all seven item files and both pages (9 files, 0 errors); content policy reported 7 items, 0 errors/warnings; strict proof contracts reported 7/7, 0 errors/warnings.
- Explicit `proof-layout.mjs` on the seven assigned items: **7 items, 18 numbered proof steps, 0 defects**.
- Focused `depcheck` on the seven assigned items: **1,632-item transitive closure and 387 pages, 0 errors/warnings**.
- Scoped authored-manifest content policy: **7 items, 0 errors/warnings**. `manifest-deps` found all seven item dependency arrays and **0 errors**. Run-wide `manifest-integrity` reported **160 pages owed, 160 in manifests, no scope drift**.
- Coverage checklist: **2 pages, 14 harvested results, 0 errors/warnings**. Source fetch check: **10/10 resolved, 0 newly stamped**.
- Current item-level recomputation gives levels **2, 3, 3, 3, 7, 4, 4** in the inventory order above; no owned item has a level error. The run-wide item-level command remains nonzero only for **20 empty scaffold inventories** outside this batch: `emg-ms03`, `emg-ms03-examples`, `emg-s02`, `emg-s02-examples`, `qsm-dt-relaxation`, `qsm-dt-relaxation-examples`, `tgr-pet01`, `tgr-pet01-examples`, `tgr-pet02`, `tgr-pet02-examples`, `tgr-g02`, `tgr-g02-examples`, `tgr-phs01`, `tgr-phs01-examples`, `tgr-phs02`, `tgr-phs02-examples`, `tgr-phs03`, `tgr-phs03-examples`, `tgr-phs04`, and `tgr-phs04-examples`.
- The shared `batch-dependency-levels.json` is stale and was left unchanged. Current recomputation gives batch 19 level **5**, `requires: [15,16,18]`; the recorded row is level 5 with `[16,18]`. Current batch-15 item inputs include B04's `thm-emg-charged-symmetry-current` and B07's `def-emg-matter-formal-systems`; page prerequisites also include batches 16 and 18. The run currently differs from the shared record in 36 batch rows. Owner action: refresh the shared graph after the run's batch writers drain. This is scheduling metadata, not a missing item carrier.

## Step 1 readiness

All seven assigned items have native Step 1 records with `decision: ready`, `owner: false`, their exact direct dependency IDs, and hashes current against the final item text, page manifest, and transitive supplier inputs. A fresh `loadStep1Record`/`step1Decision` check confirmed all seven records current. These records establish authoring readiness and do not constitute independent proof review or approval.
