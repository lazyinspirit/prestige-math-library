# Batch 56 — authoring notes

Run: `physics-remaining-80-2026-10-17`  
Pair: `tgr-mc03` / `tgr-mc03-examples`

## Plan and design reconciliation

- Read the binding owner direction, the complete TGR-MC03 design section in `research/plan-thermodynamics-and-general-relativity-track.md` (L178–202), and `research/plan-spec.json`. The plan and design agree on order 609/610, category `thermodynamics-and-general-relativity-mathematics`, `library: mathematics`, the page IDs and requires edges, title, and the four-A-item/one-B-item scope. The empty `items: []` in the canonical plan is a reservation placeholder; the design/task inventory is the production inventory. No page-scope or proof-route conflict was found.
- The complete constant-coefficient theorem is narrowly about the displayed constant matrix systems: the proof establishes global smooth Schwartz evolution and periodic evolution, weighted Sobolev contraction, and finite propagation. The fluid lemmas derive and verify their own symmetrizers and characteristic speeds. They do not claim variable-coefficient or nonlinear evolution, measurements, or material-specific parameter estimates.
- The prescribed A-page inventory is `lem-tgr-constant-linear-energy-causality`, `lem-tgr-perfect-linear-causality`, `lem-tgr-bulk-relaxation-entropy`, and `lem-tgr-bulk-linear-causality`. The B page contains `ex-tgrmath-bulk-speed-parameters`. No new definition or local intermediate theorem was needed. Both pages are below the 100-item cap.
- The proposed inventory lists Gourgoulhon/Romatschke references on every MC03 item. The assigned claims split into two distinct source questions: those papers provide relativistic-fluid/entropy context but do not prove the constant-matrix Fourier evolution or finite-speed estimate. The current item references therefore use Bal and Tadmor for the linear-system claims and retain Gourgoulhon and Romatschke on the corrected bulk-entropy argument as context only. The A-page coverage records each source's exact supported items and limits; no custom bulk law or local proof is attributed to the literature. This source mapping supplements the design without changing the plan's scope or conclusions.

## Dependency inventory and levels

Actual dependency edges were read from supplier statements/proofs and the authored arguments. No cycle is present. Current item levels, with levels computed from in-run suppliers, are:

| Item | Level | In-run suppliers |
|---|---:|---|
| `lem-tgr-constant-linear-energy-causality` | 0 | none |
| `lem-tgr-perfect-linear-causality` | 3 | `lem-tgr-constant-linear-energy-causality` (0), `lem-tgr-local-gibbs-euler` (1), `lem-tgr-perfect-fluid-projection` (2) |
| `lem-tgr-bulk-relaxation-entropy` | 3 | `lem-tgr-perfect-fluid-projection` (2), `lem-tgr-dissipative-entropy-identity` (2) |
| `lem-tgr-bulk-linear-causality` | 4 | `lem-tgr-bulk-relaxation-entropy` (3), `lem-tgr-constant-linear-energy-causality` (0), and `lem-tgr-local-gibbs-euler` (1) |
| `ex-tgrmath-bulk-speed-parameters` | 5 | `lem-tgr-bulk-linear-causality` (4) |

The batch dependency level is 2, requiring batches 53 and 55. Exact direct dependencies and roles are in the page manifest and item frontmatter. The following mathematical prerequisites were added beyond the shorthand in the older design because the complete proof uses them: `def-countable-choice` for countable selections in the Schwartz/matrix evolution proof; `thm-divergence-theorem-for-bounded-c-one-euclidean-domains` for shrinking-cone energy; the Fourier inversion, Schwartz mapping, L1/L2 agreement, and Plancherel suppliers to construct and identify the Fourier solution; and `lem-tgr-local-gibbs-euler` to justify the exact adiabatic response `a_s=e_{vv}/(nh)` in both fluid linearizations. These are mathematical dependencies only. The inspected assumptions, definitions, and current carrier evidence are in `batch-56.cross-batch-dependencies.json`.

### Conditional MC02/MC01 prerequisite hold

The actual `tgr-mc02` carriers `lem-tgr-perfect-fluid-projection` and `lem-tgr-dissipative-entropy-identity`, their full proof bodies, the current local-state definition, and Gibbs–Euler lemma were inspected. The MC02 proofs are complete conditional arguments at their actual statements. The MC02 Step 1 records are escalated because their MC01 readiness inputs have stale hashes; `def-tgr-local-fluid-state` and `lem-tgr-local-gibbs-euler` have `ready` records whose stored content hashes are stale. Do not treat any of these status labels as a proof. Exact current MC02 hashes and interfaces, record states, and affected consumers are recorded in the cross-batch evidence.

All five new arguments were completed using the exact inspected supplier statements and hypotheses. The perfect-fluid linearization and bulk entropy identity remain explicitly conditional on their actual MC02 supplier interfaces. The bulk linear system also remains conditional on the Gibbs derivative interface. These are escalated readiness holds, not omitted proof steps or claims that absent readiness has been established. No upstream carrier or record was edited.

## Source reading and qualifications

- Guillaume Bal, [*Waves in Random Media: Lecture Notes*](https://www.stat.uchicago.edu/~guillaumebal/COURSES/LecturesWavesRandomMedia.pdf), full 102-page PDF inspected; read §§1.3.1–1.3.2 (PDF pp. 7–8) for Fourier modes and constant-coefficient energy, and §1.3.4 (PDF pp. 11–12) for shrinking-cone finite propagation. The source leaves parts of existence and regularity as exercises; the local proof supplies the matrix exponential, Duhamel estimates, Schwartz seminorm control, and complete construction.
- Eitan Tadmor, [*Spectral Methods for Hyperbolic Problems*](https://www.math.umd.edu/~tadmor/lecture-notes/hyperbolic/node6.html), the complete “Hyperbolic systems with constant coefficients” section in the full lecture notes was inspected, including the Fourier symbol, positive symmetrizer, and weighted mode energy. Its periodic, undamped scope is context; the local proof supplies damping, regularity, and the exact fluid systems.
- Éric Gourgoulhon, [*An Introduction to Relativistic Hydrodynamics*](https://arxiv.org/pdf/gr-qc/0603009), full 37-page PDF and relevant pp. 16–20 (§4.3 and §§5.2–5.4) inspected for Gibbs variables and perfect-stress projection. It does not provide the corrected bulk law; that is an explicit adopted premise proved through its entropy consequence locally.
- Paul Romatschke, [*Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy*](https://arxiv.org/pdf/0906.4787), full 25-page PDF inspected, including §§3, 4.1, and 4.2 (PDF pp. 7–11 and 13–14). Its zero-charge/gradient-expansion scope is context only. The printed Landau sign on PDF p. 7 is not used; local sign and projector conventions are stated and derived independently.
- Coverage records each harvested result, locator, read extent, supported items, and limitations. The initial Bal and Tadmor fetches were stamped; the Gourgoulhon and Romatschke stamps are reused from batch 55 after reinspection. `source-fetch-check --stamp` verified 6/6 listed source records, with 4 newly stamped and 0 documented drops. A non-required Evans mirror candidate failed retrieval during source search; it was not cited or harvested, and its content was not claimed read. It is not a dropped source. The two independent constant-coefficient treatments and two independent thermodynamic treatments succeeded, so no source failure remains unresolved for this batch.

## Scoped checks and readiness

Final scoped checks on the current batch carriers:

- `precheck`: 5 items passed; `proof-layout`: 5 items, 20 steps, 0 defects; `proof-contract --strict`: all 5 entries passed.
- `rendercheck`: all 5 items and 2 pages checked, 0 errors and 0 warnings. Selected `physics-check --plan` on `tgr-mc03` and `tgr-mc03-examples`: 5 items, 0 errors.
- Focused `depcheck --items-file` passed for all 5 assigned items, with 1,385 dependency-closure items and 231 prerequisite pages checked, 0 errors and 0 warnings. `content-policy --manifest-only --authored` passed for the 5 manifest items with 0 errors and 0 warnings. The first invocations stopped on an `ENOENT` for the unrelated in-progress `ex-emg-adopted-parallel-field-model`; after that carrier appeared, both focused checks were rerun and passed.
- `source-fetch-check --stamp`: 6/6 listed sources fetch-verified; 0 newly stamped because all current stamps were already present. No source was dropped.
- All five assigned item levels match their computed values (0, 3, 3, 4, 5), with no target dependency error. The full-run item-level check still reports 170 out-of-batch errors: 56 empty page inventories, 11 missing level fields, and 103 mismatched levels; examples include empty `emg-pcp01`, `qsm-kms-equilibrium`, and `tgr-c03`, missing level on `def-emg-finite-real-supremum-domain`, and a mismatch on `def-emg-local-potentials-and-circle-data`. No cycle was reported.
- Recomputing the batch graph finds no cycle and keeps batch 56 at level 2 with `requires: [53, 55]`. The shared `research/physics-remaining-80-2026-10-17-batch-dependency-levels.json` is stale after current manifest-byte changes, including this batch's statement/source synchronization; recomputation also finds changed prerequisite rows for batches 11, 15, 41, 9, 18, and 60. It is owner-scoped shared evidence and is left unchanged; the other batches and the shared scheduling record require owner reconciliation.

Final Step 1 readiness records: `lem-tgr-constant-linear-energy-causality` is `ready`. The other four items are `escalated` because their actual batch-53/55 mathematical carriers exist and their conditional proofs are complete, but the inspected `lem-tgr-local-gibbs-euler`, `lem-tgr-perfect-fluid-projection`, and `lem-tgr-dissipative-entropy-identity` readiness remains stale/escalated as detailed above. No upstream carrier, readiness record, shared plan, published item, or imported mathematics was edited. These readiness records are not independent approval.
