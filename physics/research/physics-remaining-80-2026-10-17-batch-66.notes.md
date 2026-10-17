# Batch 66 authoring notes — `tgr-pet01`

Run: `physics-remaining-80-2026-10-17`  
Role: beta · batch 66 · category `thermodynamics-and-general-relativity`

## Scope and controlling plan

This batch owns the A/B pair `tgr-pet01` / `tgr-pet01-examples` only. The A page contains five items and the B page two examples; the exact inventory, per-item dependencies, roles, physical scopes, statements, sources, and dependency levels are in the batch manifest. The A page requires `tgr-et03` and `tgr-i01`; the B page requires `tgr-pet01`.

The task and current `research/plan-spec.json` agree on page IDs, order 629/630, category, and A-page requirements `tgr-et03` and `tgr-i01`. The shared plan’s item arrays remain empty scaffolding placeholders. The older reservation at `research/plan-thermodynamics-and-general-relativity-track.md` L480–505 records four A items and requires `tgr-i01`, `tgr-et01`, `tgr-et02`, and `tgr-et03`. Its older item inventory also lists the same two B examples. The current plan/task controls the page edge; no shared plan was edited. `tgr-et01` and `tgr-et02` remain item-level/transitive prerequisites through the exact current suppliers rather than page-level requirements.

The later category-local extension at plan L946–948 adds `def-tgr-juttner-kinetic-preparation` to A and describes it as a model definition using the exact mass-shell and normalization suppliers. It is included as the fifth A item, with the source’s warning preserved: it is neither an empirical assertion nor a collision-equilibration theorem. Thus the current batch inventory reconciles the old four-item reservation with the later extension without changing the shared plan. There is no unresolved placement conflict or page-capacity issue.

## Item dependency levels and batch schedule

The current run dependency-level file assigns batch 66 level 5 with direct page requirements on batches 54 and 64. This agrees with `max(2,4)+1=5`. Direct item edges also reach batches 53, 62, and 63 through the current prerequisite item graphs; the schedule records page edges, while each item’s level uses its highest direct in-run item supplier. The batch-level file was not changed.

| Item | Page | Level | Highest direct in-run supplier(s) |
|---|---|---:|---|
| `post-tgr-stationary-equilibrium` | A | 6 | `def-tgr-framework-units` (5) |
| `pthm-tgr-tolman-ehrenfest` | A | 7 | `post-tgr-stationary-equilibrium` (6) |
| `post-tgr-equilibrium-particle-exchange` | A | 7 | `post-tgr-local-material-thermodynamics` (6) |
| `pthm-tgr-tolman-klein` | A | 8 | `post-tgr-equilibrium-particle-exchange` (7) |
| `def-tgr-juttner-kinetic-preparation` | A | 6 | `def-tgr-framework-units` (5) |
| `ex-tgr-schwarzschild-static-bath` | B | 8 | `pthm-tgr-tolman-ehrenfest` (7) |
| `ex-tgr-rindler-rotating-equilibrium-domains` | B | 8 | `pthm-tgr-tolman-ehrenfest` (7) |

The full calculation and exact in-run supplier list are in `batch-66.dependency-inputs.json`. The cross-batch dependency array has one row for each of 18 actual in-run item/page edges; every row is `verified` only for the scoped interface check, not for independent proof acceptance. The direct page requirements are also checked there.

## Supplier interfaces and authoring readiness

All supplier statements and complete load-bearing proofs were inspected before use. Current `loadStep1Record` / `step1Decision` checks show current `ready` authoring records for the run-authored supplier interfaces used here: `def-tgr-framework-units`, `def-tgr-stationary-thermal-carriers`, `lem-tgr-killing-thermal-normalization`, `post-tgr-local-material-thermodynamics`, `def-tgr-charged-liouville-data`, `lem-tgr-gauge-killing-energy`, `thm-tgr-electrochemical-stationarity`, `thm-tgr-finite-entropy-exchange-equilibrium`, `def-tgr-future-mass-shell-measure`, `thm-tgr-juttner-partition-and-moments`, and `prop-tgr-rotating-mode-gibbs-obstruction`. The local-fluid state supplier from batch 53 also has a current ready record. These records establish current authoring interfaces only; they do not certify independent mathematical review.

The exact interfaces retained are: the connected smooth stationary carrier with positive proper temperature and selected future timelike Killing flow; the iff normalization lemma for a Killing inverse-temperature vector; the full-energy state convention for material chemical potential; two separate exchange protocols; the charged full-mass-shell stationarity theorem and its global potential-compensator requirement; the finite (C^1) concave entropy theorem with an interior stationary point and no existence/attainment claim; the tetrad-independent future-shell measure; and the complete finite Jüttner partition/moment theorem. The finite-cell branch now states $r\ge1$, matching its supplier. A focused `depcheck` also caught that the Tolman–Klein statement uses the charged Liouville definition directly; `def-tgr-charged-liouville-data` is now an explicit formulation prerequisite with matching manifest, dependency-input, and cross-batch records. Its level remains 8. The one-mode rotating proposition is used only for its exact single-mode trace threshold.

Published mathematical geometry/observer definitions and the imported `def-probability-measure` were inspected at their exact statements. The imported math snapshot remains read-only and pinned by `research/math-imports.json`; its missing Step 1 readiness record alone is not a prerequisite gap. No source status label was treated as proof, and no unresolved supplier argument or interface gap remains.

## Source retrieval and harvested results

Full source records are in `batch-66.coverage.json`, including URL, exact locator, supported items, every harvested result’s disposition, fetch stamp, and convention limitations.

- Acuña-Cárdenas, Gabarrete, and Sarbach, *An introduction to the relativistic kinetic theory on curved spacetimes*, [arXiv PDF](https://arxiv.org/pdf/2106.09235), full 79 pages: §III.C supports the Jüttner model definition; §VI.B supports context for the stationary charged result; §VI.C is explicitly out of scope because no nonstationary local Jüttner ansatz is claimed. Its cotangent/geometrized conventions are not imported.
- Csernai, *Introduction to Relativistic Heavy Ion Collisions*, [full textbook PDF](https://www.csernai.no/Csernai-textbook.pdf), full 329 pages: §§2.4–2.4.1, printed pp. 53–54 (PDF pp. 52–53), support the observer-energy exponential form and $K_2$ normalization of the one-species model definition. Its $k_B=1$ convention and normalization are not imported; the assigned SI shell normalization is proved by the local mathematical supplier.
- Becattini, “Thermodynamic equilibrium in relativity: four-temperature, Killing vectors and Lie derivatives,” [arXiv PDF](https://arxiv.org/pdf/1606.06605), full 13 pages: §4 supports the selected proper-temperature/four-temperature distinction; §6 supports context for the Killing condition and neutral chemical-potential ratio. The curved-QFT density-operator caveat is recorded inline, not asserted as a generic trace-class state.
- Santiago and Visser, “Tolman temperature gradients in stationary spacetimes,” [arXiv PDF](https://arxiv.org/pdf/1807.02915), full 7 pages: §§III–IV and VII.A support the selected-flow context, static Tolman relation, and rotating timelike-domain discussion. Displayed acceleration/Taylor and rotating-denominator formulas that are not relied on are recorded out of scope; the examples recompute their formulas from the explicit metrics.
- Rueda, Ruffini, and Xue, “The Klein first integrals…,” [arXiv PDF](https://arxiv.org/pdf/1104.4062), full 12 pages: §4 supports the charged Klein-potential context. The paper’s Eq. (65) summed-species inference is explicitly out of scope; independent cell variations and the complete charged transport proof supply the actual arguments.
- MIT OpenCourseWare 8.033, *Introduction to Relativity and Spacetime Physics*, [full lecture notes PDF](https://ocw.mit.edu/courses/8-033-introduction-to-relativity-and-spacetime-physics-fall-2024/mit8_033_f24_lec_full.pdf), full 197 pages: §§14.5–14.6 support the Rindler metric/coordinates; §§18.2.2 and 19.1 support the Schwarzschild metric and static-clock context.

The selected Oxford Chapter X source was read in the browser, but `source-fetch-check --stamp` returned HTTP 403 on the first fetch and all five allowed recovery retries. Four targeted searches found the accessible Csernai textbook and the already-inspected independent Acuña-Cárdenas review. The source record remains in coverage with the exact six attempts, searches, and an item-specific alternative/dependency argument in `source_resolution`; it is dropped from active item citations, not treated as false, and no mathematical coverage is waived. The optional original Tolman-paper retrievals also failed (expired signed redirect, APS PDF unavailable/404, and a 401 from the alternate fetch); no claim relies on that unselected source.

The active source-fetch check is 7/7 stamped sources; the eighth record is the validated documented withdrawal. At least two independent A-page treatments remain, including the full textbook and full survey/lecture-note sources.

## Physical and mathematical scope decisions

The A page adopts one selected comoving stationary bath and derives conditional Tolman–Ehrenfest normalization. Particle exchange is split into a finite independent-cell protocol and a charged full-shell Liouville protocol; the latter requires the supplied global smooth potential compensator for a global electrochemical constant. The two protocols are not identified without an additional model premise. The Jüttner item is an exactly normalized classical model definition whose moment results are supplied by the declared exact theorem; no collision law, material equation of state, quantum-statistical claim, or empirical realization is inferred.

The B page computes exact lapse, temperature, acceleration, and stated weak-field/domain conditions in the Schwarzschild exterior, Rindler wedge, and rigidly rotating Minkowski domain. It excludes horizon states, differential rotation, and generic rotating-field trace claims. The mode calculation is limited to the cited one-mode model. No experiment or measurement is reported; no Hawking or Unruh temperature is inferred. All diagrams are explanatory domain sketches; the proofs use the displayed metric calculations.

## Scoped checks

- `node tools/physics-support/tsx-run.mjs tools/physics-support/author-check.mts physics-remaining-80-2026-10-17 66`: passed. The batch report `research/physics-remaining-80-2026-10-17-author-check-66.json` records clean precheck, rendercheck (all nine assigned item/page files), content policy (seven items), and strict proof-contract results.
- `node tools/physics-support/proof-layout.mjs` on the seven explicit item paths: 7 items, 18 steps, 0 defects.
- Focused `depcheck` over the seven assigned IDs: passed with no warnings; prerequisite-cycle context covered 1,600 items and 533 pages.
- `coverage-checklist.mjs`: 2 pages, 21 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs`: 7/8 full-text source records fetch-stamped; the eighth is the validated Oxford withdrawal, so all 8/8 are resolved.
- Cross-batch comparison: all 18 current in-run page/item edges have exactly one row, all `verified`, with no missing or extra edge.
- Current Step 1 record check: all seven assigned items are hash-current and `ready` with `owner:false`. These records establish authoring readiness only, not independent proof acceptance.
- `item-dependency-levels.mjs check --run physics-remaining-80-2026-10-17` exited 1 because twelve other planned pages still have empty scaffold inventories: `emg-s02`, `emg-s02-examples`, `tgr-pet02`, `tgr-pet02-examples`, `tgr-phs01`, `tgr-phs01-examples`, `tgr-phs02`, `tgr-phs02-examples`, `tgr-phs03`, `tgr-phs03-examples`, `tgr-phs04`, and `tgr-phs04-examples`. No batch-66 item level was reported erroneous; the seven levels above match the current supplier levels. Those other inventories were left untouched.

The final authored content remains draft. No independent proof approval or publication is recorded.
