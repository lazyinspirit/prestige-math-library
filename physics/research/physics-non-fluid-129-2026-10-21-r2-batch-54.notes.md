# Batch 54 authoring notes — Single-particle Bloch bundles and band topology

Run: `physics-non-fluid-129-2026-10-21-r2` · role: beta · batch dependency level: 2.

## Plan and design comparison

The complete design section in `research/frontier-expansion-2026-10-19/non-relativistic-quantum-mechanics/prose-scaffold.md` and the corresponding `research/plan-spec.json` entries agree on page IDs, titles, category, order (A 805, B 806), companion, and all three A-page requirements. There is no design/plan conflict. `plan-spec.json` intentionally leaves item arrays empty; the design names four A items and two B items. Five local A prerequisites were added as permitted: the Bloch-fiber properties lemma, determinant-line definition and well-definedness lemma, determinant-curvature trace lemma, and normalized degree-area lemma. Final inventory is nine A items and two B items.

The finite-range discrete-lattice scope is preserved. The page does not claim a continuum periodic Schrödinger Bloch transform, many-body Hall conductance, interacting topological order, or bulk-edge correspondence. The velocity theorem treats the slow-force single-band Lagrangian as an adopted effective model and proves only its Euler–Lagrange equations; it supplies no wave-packet approximation error bound.

## Inventory and dependency levels

The batch graph lists batch 54 at level 2. The scoped item-level computation used predecessor batches 44 and 47 plus batch 54 (29 item carriers total) and returned no errors. Computed levels for this batch are:

| Item | Level |
|---|---:|
| `def-nrqmx-bloch-fiber-model` | 0 |
| `lem-nrqmx-bloch-fiber-model-properties` | 1 |
| `def-nrqmx-determinant-line-projector` | 1 |
| `lem-nrqmx-determinant-line-projector-well-defined` | 2 |
| `lem-nrqmx-determinant-curvature-is-trace` | 3 |
| `lem-nrqmx-degree-area-formula` | 0 |
| `thm-nrqmx-bloch-projector-chern` | 5 |
| `thm-nrqmx-two-band-degree-formula` | 6 |
| `thm-nrqmx-finite-band-adiabatic-velocity` | 7 |
| `ex-nrqmx-two-band-gap-closures` | 7 |
| `cex-nrqmx-smooth-frame-obstruction` | 8 |

The extra intermediate items are placed on the A page and proved before their consumers. The only well-definedness cycles are the schema-directed pairs `definition.justified_by` / `lemma.deps`; they do not create a `deps` cycle.

## Cross-batch inputs

All three cross-batch required-page edges and all four direct batch-47 item edges are recorded in `research/physics-non-fluid-129-2026-10-21-r2-batch-54.cross-batch-dependencies.json`. The present `loadStep1Record`/`step1Decision` check reports all six batch-44 form-spectral items current `ready` and all eight batch-47 adiabatic-holonomy items current `ready`. The published imported Fourier page and exact Fourier-basis theorem were inspected. Historical blocker notes that predate these current readiness records were not treated as current gaps. `verified` records interface and readiness checks only, not independent proof approval.

No direct argument uses a batch-44 unbounded form result as a theorem about finite lattice fibers. The planned page requirement remains explicit, and the separate continuum closure remains outside scope.

## Sources and sign conventions

The A page harvest records five independent full-text treatments: Asbóth–Oroszlány–Pályi, *A Short Course on Topological Insulators* (complete 164-page PDF); David Tong, *Applications of Quantum Mechanics* (complete 370-page lecture-note PDF); Xiao–Chang–Niu, “Berry Phase Effects on Electronic Properties” (complete 48-page review PDF); the University of Toronto differential-geometry course notes (complete 201-page PDF); and Keith Conrad, “Exterior Powers” (complete 47-page PDF). The first two provide independent book/lecture-note treatments for the main quantum-mathematics page. The B page harvest uses Asbóth–Oroszlány–Pályi, Xiao–Chang–Niu, and Tong.

`source-fetch-check --stamp` fetched and stamped all eight unique active URLs. The root-listed Robbin–Salamon PDF returned 404 and the official Salamon route returned 403; the complete Toronto notes were inspected as the active full-text alternative. The imported Conrad URL spelling `linmultialgl` was inaccessible; its corrected author-hosted `linmultialg` PDF was inspected. Both alternatives and per-item arguments/dependencies are retained in `coverage.json` under `source_resolution_history`; neither source is marked dropped.

The design fixes `C=(i/2π)∫tr(P dP∧dP)`. Asbóth–Oroszlány–Pályi's Q convention has the opposite sign and its table was translated only after the local Pauli calculation. Tong uses `−i⟨u|∂u⟩` in the inspected Berry discussion; a spin-half display omits a factor `1/2` and adjacent signs are inconsistent, so no factor or sign is copied. Xiao–Chang–Niu's anomalous-velocity discussion is an effective wave-packet result; this batch proves only the stated conditional finite-dimensional variational consequence.

## Scoped checks and wider-run diagnostics

- `precheck` via `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts ...`: 9 proof-bearing items pass; the two definition items are not proof-bearing.
- `proof-layout.mjs` on all 11 changed items: 30 steps, 0 defects.
- `proof-contract.mjs --strict`: 11/11 entries, 0 errors, 0 warnings.
- `coverage-checklist.mjs`: 2 pages, 21 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --stamp` fetched/stamped 8/8 active sources; check mode confirms all 8 remain fetch-verified.
- `rendercheck.mjs` on all 11 items and both pages: 13 files, all math/frontmatter rendered.
- `manifest-deps.mjs` on the batch manifest: 11 item entries, 0 missing dependency lists, 0 errors.
- Scoped `depcheck`, `fwdcheck`, `extcheck`, and content-policy all pass (content-policy: 11 items, 0 errors/warnings).
- Scoped item-level dependency computation on batches 44, 47, and 54: 29 items, 0 errors; the batch-54 levels above match the computed values.

The read-only batch scheduling check reports the shared `batch-dependency-levels.json` snapshot as stale. Its recomputed batch-54 row remains level 2 with prerequisites 44 and 47, exactly matching the recorded row; the only changed row is batch 121, whose current requirements add batch 58. The shared scheduling file was not rewritten.

The whole-run `item-dependency-levels.mjs check --run ...` currently reports 62 empty page inventories (31 unrelated A/B pairs) and 10 level mismatches. Empty pairs: `csm-frontier-critical-gaussian-rg`, `csm-frontier-inverse-gibbs`, `csm-frontier-planar-critical-point`, `csm-frontier-polymer-continuum`, `csm-frontier-rare-event-numerics`, `csm-frontier-sampling-certificates`, `emg-fx07`, `emg-fx08`, `emg-fx13`, `emx-waveguide-scattering-channels`, `gr-fx09-bootstrap-and-stability-boundaries`, `nrqmx-certified-spectral-computation`, `qftx-anomaly-cocycles`, `qftx-categorified-line-operators`, `qftx-chern-simons-bf-gravity`, `qftx-hall-bps-wall-crossing`, `qftx-kz-chiral-interface`, `qftx-modular-tqft-sewing`, `qftx-ribbon-braid-representations`, `qsmx-quantum-double`, `qsmx-quasifree-gases`, `qsmx-transport-and-drude`, `qsmx-transverse-ising-spectral`, `tgrx-ads-effective-boundaries`, `tgrx-finite-code-holography`, `tgrx-focusing-boundary`, `tgrx-gaussian-wedge`, `tgrx-jt-disk-model`, `tgrx-regulated-second-law`, `tgrx-research-boundaries`, and `tgrx-topological-entropy-models` (each also has its `-examples` page empty). Its exact item mismatches are `thm-nrqmx-periodic-flux-spectrum` (1 vs. 3), `pthm-nrqmx-flux-ring-spectrum` (3 vs. 4), `ex-nrqmx-flux-half-crossing` (4 vs. 5), `post-nrqmx-finite-mode-light-matter-model` (5 vs. 1), `def-nrqmx-finite-mode-g2-statistic` (6 vs. 2), `pthm-nrqmx-jaynes-cummings-blocks` (6 vs. 2), `pthm-nrqmx-beam-splitter-count-statistics` (6 vs. 2), `pthm-nrqmx-finite-mode-loss-channel` (7 vs. 2), `ex-nrqmx-jc-vacuum-rabi` (7 vs. 3), and `ex-nrqmx-single-photon-antibunching` (7 vs. 3). None is in batch 54, and no unrelated page or item was edited.
