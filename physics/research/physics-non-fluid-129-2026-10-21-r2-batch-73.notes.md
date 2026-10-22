# Batch 73 notes — `qftx-photon-paraxial` / `qftx-photon-paraxial-examples`

Run `physics-non-fluid-129-2026-10-21-r2`, role beta, covers 73. Step 1
authoring is complete for the assigned pair. The five readiness records state
authoring readiness only; they are not independent proof approvals.

## Scope and plan reconciliation

- A page `qftx-photon-paraxial` (order 843) and B page
  `qftx-photon-paraxial-examples` (order 844) retain the plan's category,
  mathematics library, companion relation, and prerequisite pages
  `qftx-photon-angular-momentum` and `qftx-photon-helicity`. The B page remains
  a leaf requiring the A page. `plan-spec.json` has empty item arrays for both
  pages as pre-authoring scaffolds; the run manifest now contains the final
  authored inventory.
- The complete design section at
  `research/plan-quantum-field-theory-frontier-expansion-track.md` L1481–1496
  plans the cone definition and two spin/orbit propositions on A and a vortex
  example on B. A local A-page lemma, `lem-qftx-paraxial-vortex-packet-existence`,
  was added as the necessary intermediate construction of a finite-bandwidth,
  finite-angle, normalizable vortex vector with the stated rotation eigenvalue.
  This supports the planned arguments and follows the instruction to supply
  missing local prerequisites. Final inventory: A has four items; B has one.
  Both pages are well below the 100-item cap.
- The specified override file
  `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md`
  is absent. No page metadata, prerequisite, convention, or design-scope
  conflict with `plan-spec.json` was found. The local statements preserve the
  north-patch gauge, the `U(R_z(t)) = exp(-it J_z / hbar)` convention, the
  finite cone and radial-band hypotheses, and the warning that the winding
  label is patch-dependent rather than a global orbital label. The mathematical
  deductions remain conditional; no claim is made that an actual optical
  apparatus satisfies the unitary symmetry hypotheses.

## Authored carriers and dependency order

All five items are mathematical (`domain: mathematics`, `library: mathematics`,
`physical_scope: null`) and use mathematical prerequisites only. They are
placed on the assigned A/B pages. In-run suppliers were authored before their
consumers. Computed dependency levels match the manifest and item frontmatter:

| Item | Page | Level | Result |
| --- | --- | ---: | --- |
| `def-qftx-paraxial-cone` | A | 3 | Finite paraxial cone and regular north-patch helicity gauge |
| `lem-qftx-paraxial-vortex-packet-existence` | A | 4 | Existence and rotation eigenvalue of a finite-width vortex packet |
| `prop-qftx-paraxial-spin-error` | A | 6 | Exact projected-spin expectation and quadratic cone-error bound |
| `prop-qftx-spin-to-orbit-constraint` | A | 7 | Axial-commutant balance, helicity criterion, and swap counterexample |
| `ex-qftx-vortex-paraxial-label` | B | 7 | Finite-energy packet, paraxial labels, and measure-zero ideal limits |

The cross-batch dependency file has 14 direct verified rows (12 item, 2 page).
For each row the current supplier interface and consuming use were inspected;
the records explicitly describe scoped interface checks, not independent
proof approval. The required batch inputs are batches 71 and 72, so batch 73's
recorded scheduling dependency level is 2. Each of the five local Step 1
records is `ready`, has the exact declared dependency IDs, and was rechecked
with `loadStep1Record` / `step1Decision` as hash-current.

## Sources and coverage

Three full-text treatments were retrieved and inspected. The two independent
optics treatments are Bliokh et al., *Angular Momenta and Spin-Orbit
Interaction of Nonparaxial Light in Free Space*
(<https://arxiv.org/pdf/1006.3876>), and Bekshaev, Soskin, and Vasnetsov,
*Paraxial Light Beams with Angular Momentum*
(<https://arxiv.org/pdf/0801.2309>). The QFT treatment is Tong, *Quantum Field
Theory*, Chapter 6 (<https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html>).
Locators and per-item dispositions are in the batch coverage file. In
particular, the full 8-page Bliokh PDF was inspected at §I Eq. 1, §II Eqs. 2–9,
and §IV Eqs. 24–26; the full 87-page Bekshaev PDF at §§2–3, pp. 6–10, and
pp. 26–27; and Tong §6.2.1 Eqs. 6.511–6.523 in full. Source formulas for ideal
cones and classical SAM/OAM splits are contextual only; the local Hilbert-space
claims are proved for finite-width packets under explicit hypotheses.

`source-fetch-check --stamp` verified all six page/source entries (the three
sources appear on both pages); its subsequent check also resolved 6/6. There
were no retrieval failures, recovery retries, drops, or unresolved source
dispositions. `source_resolution` and its history are therefore empty; all six
harvested results have item-specific `inline` dispositions and support notes.

## Proofs and scoped checks

The five proof contracts were generated from the final numbered arguments and
include exact supplier excerpts, step inputs, boundary cases, and the finite
2-by-2 helicity-swap check. Scoped checks completed successfully:

- `precheck.mts`: 5 items passed, 0 failures.
- `proof-layout.mjs` on the five changed items: 5 items, 21 steps, 0 defects.
- `rendercheck.mjs` on five items and two pages: 7 files valid.
- `content-policy.mjs` on batch 73: 5 scoped items, 0 errors, 0 warnings.
- Focused `depcheck`: 0 errors, 0 warnings; closure 1,915 items / 392 pages.
- `proof-contract.mjs --strict`: 5/5, 0 errors, 0 warnings.
- `source-fetch-check`: 6/6 verified and resolved.
- Current `step1Decision` checks: all five records are ready and current.

## Run-wide blockers left with the owner

These checks inspect the shared run. No other batch, shared plan, engine state,
published content, or verdict was edited for batch 73.

- `item-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2`
  still fails outside this batch. The current run manifests have 44 empty
  scaffold inventories:
  `emx-waveguide-scattering-channels`, `emx-waveguide-scattering-channels-examples`,
  `emg-fx08`, `emg-fx08-examples`, `emg-fx13`, `emg-fx13-examples`,
  `gr-fx09-bootstrap-and-stability-boundaries`,
  `gr-fx09-bootstrap-and-stability-boundaries-examples`,
  `nrqmx-certified-spectral-computation`,
  `nrqmx-certified-spectral-computation-examples`,
  `qftx-ribbon-braid-representations`,
  `qftx-ribbon-braid-representations-examples`, `qftx-modular-tqft-sewing`,
  `qftx-modular-tqft-sewing-examples`, `qftx-chern-simons-bf-gravity`,
  `qftx-chern-simons-bf-gravity-examples`, `qftx-kz-chiral-interface`,
  `qftx-kz-chiral-interface-examples`, `qftx-hall-bps-wall-crossing`,
  `qftx-hall-bps-wall-crossing-examples`, `qftx-categorified-line-operators`,
  `qftx-categorified-line-operators-examples`,
  `csm-frontier-sampling-certificates`,
  `csm-frontier-sampling-certificates-examples`, `csm-frontier-inverse-gibbs`,
  `csm-frontier-inverse-gibbs-examples`, `csm-frontier-planar-critical-point`,
  `csm-frontier-planar-critical-point-examples`,
  `csm-frontier-rare-event-numerics`,
  `csm-frontier-rare-event-numerics-examples`, `qsmx-quantum-double`,
  `qsmx-quantum-double-examples`, `qsmx-transverse-ising-spectral`,
  `qsmx-transverse-ising-spectral-examples`, `tgrx-focusing-boundary`,
  `tgrx-focusing-boundary-examples`, `tgrx-ads-effective-boundaries`,
  `tgrx-ads-effective-boundaries-examples`,
  `tgrx-topological-entropy-models`,
  `tgrx-topological-entropy-models-examples`, `tgrx-jt-disk-model`,
  `tgrx-jt-disk-model-examples`, `tgrx-research-boundaries`, and
  `tgrx-research-boundaries-examples`. The same check reports 10 item slots,
  all missing IDs, on `csm-frontier-critical-gaussian-rg` and one on
  `csm-frontier-critical-gaussian-rg-examples`. It reports no dependency-level
  mismatch among the identified items; batch 73's levels remain 3, 4, 6, 7, 7.
- `batch-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2`
  currently stops with `Duplicate item undefined`, consistent with the
  malformed unnamed entries above. The shared scheduling record was not
  rewritten; the owner should repair/rebuild it after shared manifests are
  valid.
- Run-wide `proof-contract-coverage.mjs` with the batch-73 contracts stops at
  `Empty or invalid frontier page inventory qsmx-quantum-double`, an unrelated
  empty inventory. The strict batch-scoped contract check passes.

These are live shared-state findings at the final check; earlier run-wide
diagnostics differed as other manifests changed. The batch-73 carrier levels,
contracts, and readiness records are complete and current, but the run-wide
derived-level and coverage refresh remains for the owner after the other
inventories are repaired.
