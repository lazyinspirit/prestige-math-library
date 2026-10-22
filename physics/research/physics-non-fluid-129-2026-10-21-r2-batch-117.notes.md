# Batch 117 notes — `tgrx-noether-entropy`

Run: `physics-non-fluid-129-2026-10-21-r2`; batch 117; role beta; A/B pair orders 931/932; category `thermodynamics-and-general-relativity`; library `physics`.

## Plan and design comparison

`research/plan-spec.json` agrees with the assigned design on the A/B IDs, titles, order, category, library, companion link, and declared page prerequisites: `gr-fx12-covariant-phase-space`, `tgr-phs01`, and `tgr-phs03`. The plan and those page-level requirements were not edited.

The planned claim and scope are retained: a covariant stationary horizon Noether-charge identity, its conditional finite-boundary first-law form, the Einstein–Hilbert area coefficient, and the `f(R)` example. Four A-page items and one B-page example are now placed. Two local A-page results were added because the planned consumer proof needs them explicitly: the algebraic-curvature Noether-charge decomposition and the intermediate horizon-charge entropy-variation theorem. The A page has 4/100 items; no capacity problem or planned claim was removed.

The detailed design points to `prop-gr-fx-on-shell-current-closure` in its statement-reference route. That batch-40 item proves closure of the **presymplectic current** `omega`; it does not prove a primitive for the Noether current `J_xi`. The local decomposition lemma derives `dJ_zeta=-E_phi[Lie_zeta phi]` from covariance and the chosen first variation, then uses the stated canonical local charge construction. The other batch-40 Noether-current identity has a four-dimensional interface. Since this page's curvature theorem is stated for `n >= 2`, neither four-dimensional carrier is used as a general-n premise. The current plan still declares the gr-fx12 page as context; its actual in-run edge is recorded below.

## Inventory and dependency order

| Item | Page | Level | Direct dependencies | Role |
|---|---|---:|---|---|
| `def-tgrx-noether-horizon-data` | A | 0 | `def-lie-derivative-of-a-tensor-field`; `def-lie-derivative-of-a-differential-form` | Defines the finite-jet covariant theory, field variations, oriented bifurcation data, binormal, Noether residual, finite chains, and globally integrable boundary charge. |
| `lem-tgrx-noether-charge-decomposition` | A | 1 | `def-tgrx-noether-horizon-data`; `def-lie-derivative-of-a-tensor-field`; `def-lie-derivative-of-a-differential-form`; `thm-cartans-magic-formula` | Derives the `X=-P` coefficient for the canonical covariant first-variation and local charge representative, with its allowed ambiguities. |
| `pthm-tgrx-noether-horizon-entropy-variation` | A | 2 | `def-tgrx-noether-horizon-data`; `lem-tgrx-noether-charge-decomposition`; both Lie-derivative definitions; `thm-cartans-magic-formula`; `thm-stokes-theorem-for-smooth-singular-chains` | Varies the selected horizon charge at fixed generator and obtains the stationary Wald functional. |
| `pthm-tgrx-noether-first-law` | A | 3 | `def-tgrx-noether-horizon-data`; the decomposition lemma; entropy-variation theorem; `thm-cartans-magic-formula`; Stokes theorem | Uses the explicit residual-constraint and boundary-exactness assumptions, then evaluates Einstein–Hilbert. |
| `ex-tgrx-fR-stationary-entropy` | B | 4 | first-law theorem; entropy-variation theorem | Computes the algebraic curvature derivative for the stated `f(R)` model. |

The level rule is satisfied: the definition has no in-run item supplier; each later item is one above its greatest in-run prerequisite. A-page carriers precede consumers. The batch-level result is level 1 with batch 40 as its in-run page prerequisite.

The charge result is intentionally conditional on the canonical local representative class. The broad stationary-data definition still names a selected smooth `Q_xi`; the entropy theorem states the additional canonical first-variation/charge convention and excludes independent closed global shifts. The definition also fixes B's orientation relative to the spacetime volume form and the chosen binormal, so the sign in `X epsilon = -P epsilon epsilon dA_B` is explicit. The first law does not identify `S_W` with thermodynamic state entropy; `tgr-phs01` and `tgr-phs03` remain page-level context, including their restricted electromagnetic area-law and Kerr–Newman thermodynamic assumptions.

## Supplier examination and cross-batch input

The current batch-40 carriers were inspected at their actual statements, hypotheses, dimensions, and proofs. `loadStep1Record` and `step1Decision` report current `ready` records for `def-gr-fx-covariant-presymplectic-current`, `def-gr-fx-surface-charge-integrability`, `prop-gr-fx-on-shell-current-closure`, and `prop-gr-fx-diffeomorphism-current-identity`. The latter current identity is four-dimensional; the on-shell-current-closure item concerns `omega`. Neither is cited as proving the general-n charge decomposition. The exact general-n Noether steps are local here.

The batch cross-input file contains one verified row: page `tgrx-noether-entropy` requires page `gr-fx12-covariant-phase-space` (batch 40). The scope check confirms that declared edge is matched to its review row. Published context pages `tgr-phs01` and `tgr-phs03` are outside this run and are recorded in the plan and page metadata; no extra item dependency is inferred from them.

## Source reading

Three independent full-text treatments were inspected; Compère–Fiorucci is complete lecture notes. The retained retrieval history and verified stamps are reused from batch 40 of this run, where all three URLs succeeded on their first fetch. The batch-117 source-reading record and detailed per-item dispositions are in `research/physics-non-fluid-129-2026-10-21-r2-batch-117-sources/source-reading.md` and the coverage JSON.

| Source | Inspected locator | Disposition |
|---|---|---|
| Iyer & Wald (1994), complete 31-page paper | §3, eqs. 23–43; §4, eqs. 49–60; §6, eqs. 73–78 and 93–102 | Included for the covariant potential, charge decomposition/ambiguities, stationary boundary identity, and horizon binormal variation. Dynamical entropy and curvature-derivative extensions are out of scope. |
| Compère & Fiorucci (2019), complete 125-page lecture notes | Lecture 1, §§1.3.1–1.3.3 and §§1.4.1–1.4.2 | Independent derivation of local Noether construction, surface identity and charge integrability. Their presymplectic sign order is checked against the Iyer–Wald convention used here. Boundary-action-specific formulas are out of scope. |
| Harlow & Wu (2020), complete 61-page paper | §§2.2–2.4 and §4.4 | Independent boundary-term and Wald-charge comparison. Specialized boundary actions and falloff formulas are not imported. |

All 13 harvested source results have dispositions in coverage; `coverage-checklist` reports 0 errors and 0 warnings. `source-fetch-check --stamp` reports 3/3 verified, 0 newly stamped, and 3/3 resolved. There were no failed retrievals, drops, or invented observations, so no `source_resolution` entry is due.

## Cross-batch and run-wide dependency evidence

At the time of this review snapshot, the read-only aggregate collector matched batch 117's page edge to its `verified` row and reported 269 orphaned review rows elsewhere in the run; the assigned edge was not orphaned. No aggregate refresh was performed.

At the time of this review snapshot, the scoped item graph for batch 117 computed levels `0,1,2,3,4` with no errors. The full-run `item-dependency-levels.mjs check` covered 258 pages and 636 items and reported 75 errors outside batch 117: 72 empty inventories and 3 stored-level mismatches. The mismatches are `thm-nrqmx-periodic-flux-spectrum: dependency_level 1 differs from computed 3`; `pthm-nrqmx-flux-ring-spectrum: dependency_level 3 differs from computed 4`; `ex-nrqmx-flux-half-crossing: dependency_level 4 differs from computed 5`. The empty page IDs are: `emx-waveguide-scattering-channels`, `emx-waveguide-scattering-channels-examples`, `emg-fx07`, `emg-fx07-examples`, `emg-fx08`, `emg-fx08-examples`, `emg-fx13`, `emg-fx13-examples`, `gr-fx09-bootstrap-and-stability-boundaries`, `gr-fx09-bootstrap-and-stability-boundaries-examples`, `nrqmx-certified-spectral-computation`, `nrqmx-certified-spectral-computation-examples`, `nrqmx-quantum-optics-models`, `nrqmx-quantum-optics-models-examples`, `qftx-anomaly-cocycles`, `qftx-anomaly-cocycles-examples`, `qftx-ribbon-braid-representations`, `qftx-ribbon-braid-representations-examples`, `qftx-modular-tqft-sewing`, `qftx-modular-tqft-sewing-examples`, `qftx-chern-simons-bf-gravity`, `qftx-chern-simons-bf-gravity-examples`, `qftx-kz-chiral-interface`, `qftx-kz-chiral-interface-examples`, `qftx-hall-bps-wall-crossing`, `qftx-hall-bps-wall-crossing-examples`, `qftx-categorified-line-operators`, `qftx-categorified-line-operators-examples`, `csm-frontier-polymer-continuum`, `csm-frontier-polymer-continuum-examples`, `csm-frontier-critical-gaussian-rg`, `csm-frontier-critical-gaussian-rg-examples`, `csm-frontier-macroscopic-fluctuations`, `csm-frontier-macroscopic-fluctuations-examples`, `csm-frontier-fluctuation-theorems`, `csm-frontier-fluctuation-theorems-examples`, `csm-frontier-sampling-certificates`, `csm-frontier-sampling-certificates-examples`, `csm-frontier-inverse-gibbs`, `csm-frontier-inverse-gibbs-examples`, `csm-frontier-planar-critical-point`, `csm-frontier-planar-critical-point-examples`, `csm-frontier-rare-event-numerics`, `csm-frontier-rare-event-numerics-examples`, `qsmx-quantum-double`, `qsmx-quantum-double-examples`, `qsmx-hall-categorification-spin`, `qsmx-hall-categorification-spin-examples`, `qsmx-transport-and-drude`, `qsmx-transport-and-drude-examples`, `qsmx-quasifree-gases`, `qsmx-quasifree-gases-examples`, `qsmx-transverse-ising-spectral`, `qsmx-transverse-ising-spectral-examples`, `tgrx-gaussian-wedge`, `tgrx-gaussian-wedge-examples`, `tgrx-renormalized-stress`, `tgrx-renormalized-stress-examples`, `tgrx-regulated-second-law`, `tgrx-regulated-second-law-examples`, `tgrx-focusing-boundary`, `tgrx-focusing-boundary-examples`, `tgrx-finite-code-holography`, `tgrx-finite-code-holography-examples`, `tgrx-ads-effective-boundaries`, `tgrx-ads-effective-boundaries-examples`, `tgrx-topological-entropy-models`, `tgrx-topological-entropy-models-examples`, `tgrx-jt-disk-model`, `tgrx-jt-disk-model-examples`, `tgrx-research-boundaries`, `tgrx-research-boundaries-examples`.

At the same snapshot, `batch-dependency-levels.mjs check` reported a stale shared run input hash (recorded `477e4926f913bd61321482f4a18b9a05332cfe3f9495387ffc4f6bffc316b7d9`; recomputed `22dd7ba5df7f12fd085dd89ae31307e96da57792e87e27d41b2143a2dc91df98`). The recomputed graph still gives batch 117 level 1 and `requires: [40]`. The shared scheduling file was left for the owner to refresh.
## Scoped checks

- `manifest-deps.mjs` on batch 117: 5 items, 0 missing `deps`, 0 errors.
- Scoped item dependency calculation: 5 items, levels 0–4, 0 errors.
- `content-policy.mjs` on batch 117: 5 items, 0 errors, 0 warnings.
- `proof-layout.mjs` on the 5 changed items: 13 proof steps, 0 defects.
- Strict proof contracts: 4 proof-bearing items, 0 errors, 0 warnings.
- `coverage-checklist.mjs`: 1 A page, 13 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --stamp`: 3/3 verified, 0 newly stamped, 3/3 resolved.
- `manifest-integrity.mjs --run`: 258 pages owed, 258 present, no scope drift.

Completion/readiness records are separate from independent proof approval or publication.

## Step 1 readiness records

All five items have non-owner `ready` records written in supplier order. A fresh `step1Decision` inspection returned `closed: true` for every item; each record hashes the current item and exact direct dependency set. These are Step 1 prerequisite-readiness records only, not independent proof acceptance or publication.
