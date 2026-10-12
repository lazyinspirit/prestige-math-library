# Batch 63 notes — Qm Photons And Radiation Modes

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **63**, covering the
pair `qm-photons-and-radiation-modes` (A, order 205) and
`qm-photons-and-radiation-modes-examples` (B, order 206), category
`non-relativistic-quantum-mechanics`, library `physics`. Both page carriers are
`status: draft`; this batch publishes nothing.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `README.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner
direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`
(no batch-63-specific override; its rules on draft-only content, carried
physical premises and choice assumptions were applied), the batch dependency
levels `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 63: level 13, requires batches 52 and 57), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3411, the
reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`
(order 21, "R1–R2, transverse fixed-mode polarization vs spatial massive psi,
mode/Fock definitions/domains, number/energy/Born detection [M,D,P,T], 48" and
"Malus/Jones amplitudes, single-mode number/coherent statistics, distinguish
classical optical interference [H,examples], 24"), and `research/plan-spec.json`.

## Plan and design conflicts (recorded)

- The design section and `plan-spec.json` both declare the A page requires
  `["qm-harmonic-oscillator", "qm-identical-particles-and-exclusion"]`.
  `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run ...`
  reports `[redundant-prereq] page qm-photons-and-radiation-modes requires
  qm-harmonic-oscillator directly, but already reaches it through
  qm-identical-particles-and-exclusion` (the identical-particles page requires
  `qm-harmonic-oscillator`). Following the batch-52 convention, the manifest
  and the carriers carry the transitive reduction
  `requires: ["qm-identical-particles-and-exclusion"]`; the harmonic-oscillator
  page remains in the declared prerequisite closure and the design's arrow
  `02,04,10,15 + radiation math -> 21` is preserved transitively. After the
  change `validate-plan` reports no finding naming either batch-63 page.
- No other design/plan conflict was found. The design's source anchors
  (Binney §1.3.6; MIT Ch6 §5.3; Tong §4.4.2 boundary only) and the scope
  warnings (no Maxwell derivation, no Lorentz transformation law for mode
  labels, no Galilean covariance of the radiation sector, not the m=0 massive
  model, no photon position wavefunction, spontaneous emission deferred) are
  preserved and recorded item by item.

## Inventory

A page `qm-photons-and-radiation-modes` (11 items; manifest
`dependency_level` in parentheses):

1. `lem-nrqm-photons-analyzer-projections-and-overlaps` (0) — mathematics:
   the analyser projections of a two-dimensional polarisation space, the
   overlap identities, complementarity and phase invariance.
2. `lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers` (4)
   — mathematics: the restrictions of the momentum and energy multipliers to
   the transverse one-particle space are self-adjoint with push-forward
   spectral laws, have no eigenvalues, and every unit vector has strictly
   positive variance.
3. `lem-nrqm-photons-fixed-mode-number-isometry` (8) — mathematics: the
   fixed-mode isometry into Fock space, the transfer of the number and ladder
   operators, and the mode energy moments (first and second).
4. `post-nrqm-photons-radiation-extension-and-transverse-mode-assignment` (9)
   — the adopted R1–R2 radiation extension with its scope and unit
   declarations.
5. `def-nrqm-photons-framework-radiation-sector-and-quantum-assignments` (10)
   — the sector, mode and observable readings with domains and units.
6. `def-nrqm-photons-framework-fixed-mode-polarization-model` (10) — the
   declared fixed-mode polarisation model and analyser family.
7. `pthm-nrqm-photons-fixed-mode-polarization-outcome-law` (11) — the Born
   law cos^2(theta - phi), affinity, phase invariance, conditional update and
   repeated ideal analyser.
8. `pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws` (11) — the
   one-photon number and energy laws and the momentum-component readouts,
   with strictly positive variances.
9. `def-nrqm-photons-framework-ideal-counting-and-detection-model` (11) — the
   ideal total-number, energy-window and analyser detection vocabulary with
   its limits (sampling, destructive detectors).
10. `pthm-nrqm-photons-fixed-mode-number-and-energy-statistics` (12) — sharp
    counts, the Poisson law and moments of the mode-coherent preparation, the
    energy means and variances, and the continuum free-field Gibbs
    non-trace-class limitation.
11. `rem-nrqm-photons-scope-and-empirical-status` (13) — page scope and
    empirical status.

B page `qm-photons-and-radiation-modes-examples` (4 items):

1. `ex-nrqm-photons-malus-and-jones-analyzer-ratios` (12) — the Born ratio
   and the declared classical transverse-amplitude ratio coincide.
2. `ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal` (13)
   — sharp, Poisson and declared effective-energy geometric count laws with
   their means and variances.
3. `texp-nrqm-photons-classical-field-and-quantized-detection-comparison` (13)
   — the declared classical and quantised models assign the same normalised
   two-bin law with the same cross-term, so that law is not a discriminator.
4. `rem-nrqm-photons-examples-scope-limits` (14) — scope of the examples page.

Carriers `library/non-relativistic-quantum-mechanics/qm-photons-and-radiation-modes.md`
and `...-examples.md`; manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-63.pages.json` (item order =
carrier order).

## Dependency graph, levels and prerequisite inspection

The run-global in-run levels were computed mechanically from the union of run
manifests (`node tools/physics-support/item-dependency-levels.mjs check --run
physics-cm-qm-gr-79-2026-10-11`): the maximum batch-63 level is 14
(`rem-nrqm-photons-examples-scope-limits`), and every manifest label equals the
computed value. Out-of-run suppliers (published canonical mathematical items
such as `def-hilbert-space`, `lem-unbounded-pvm-integral-is-well-defined-and-closed`,
`cor-graph-of-a-measurable-function-is-lebesgue-null`,
`thm-polar-coordinates-formula-for-lebesgue-measure`,
`prop-countable-subsets-of-rn-are-lebesgue-null`, `thm-geometric-series`,
`thm-tonelli-for-nonnegative-double-series`) contribute level 0 and were not
treated as run suppliers.

Every in-run dependency was inspected at its current authored carrier before
use, with attention to hypotheses, direction, conventions and choice strength:

- batch 35 (`qm-math-composites`): tensor construction, permutation-sector
  projections, Euclidean L2 product unitary, real multipliers and
  free-bounded-potential operators; used only as mathematical premises.
- batch 39/40: the published canonical PVM and spectral items consumed
  directly by the local lemmas.
- batch 41 (`qm-math-fock-and-equilibrium`): Hilbert direct sum, Fock sector
  projections, creation/contraction bounds, closed adjoint sector domains,
  number operator domain, fixed-mode number law, single-mode thermal trace,
  transverse continuum free Fock Hamiltonian. These items carry the Axioms of
  Countable Choice and of Choice; batch 63 reproduces both hypotheses in every
  consuming statement and carries them into consumers.
- batch 42/43 (`qm-framework-and-quantities`): P1, P2, P3, P5, P6, P7,
  Newtonian spacetime, inertial frames, quantities/units.
- batch 44 (`qm-state-geometry`): state space and pure/mixed vocabulary.
- batch 45 (`qm-observables-and-born-probabilities`): observable/outcome-law
  definition, spectral atoms, affinity, L2 multiplication spectral measure.
- batch 46 (`qm-measurement-and-instruments`): declared ideal sharp
  measurements, Lueders updates.
- batch 47/49 (`qm-interference-and-local-detection`): not consumed as an
  item-level prerequisite; the B-page comparison declares its own two-bin
  model, and the interference page's theorems are not used as premises.
- batch 52 (`qm-harmonic-oscillator`): the page is a declared page-level
  prerequisite, reached transitively; its oscillator mathematics reaches
  batch 63 through the batch-41 Fock items, which cite the oscillator diagonal
  lemma, and no batch-63 item asserts an oscillator result beyond the
  locally proved mode transfer.
- batch 55 (`qm-composites-entanglement-and-reduced-states`): no item-level
  consumption by this pair.
- batch 57 (`qm-identical-particles-and-exclusion`): the bosonic sector
  reading (species/sector vocabulary) is consumed for the Fock assignment; the
  local mathematics (exchange operator, occupation bases) is not a premise of
  any batch-63 item.

No missing, circular, forward or inadequate dependency is known: the
in-run graphs are acyclic (`audit-manifest` 0 defects; `item-dependency-levels`
0 batch-63 errors), same-page consumers have strictly larger levels, and the
three forward links from A-page Remarks to B-page items are declared in
`forward_refs` and are non-load-bearing.

## Design fidelity and scope

- R1–R2 are the postulate
  `post-nrqm-photons-radiation-extension-and-transverse-mode-assignment`: the
  fixed-mode two-dimensional transverse polarisation model, the quantised
  transverse bosonic Fock sector, and the assignments omega = c|k|,
  E = hbar*omega, p = hbar*k in a declared inertial chart, with c and hbar in
  SI units and with the explicit statements that these are separate model
  assignments, not Maxwell or special-relativity consequences, not the
  massive m -> 0 limit, with no Lorentz transformation law for mode labels and
  no Galilean covariance of the radiation sector.
- Mode/Fock definitions and domains are read in
  `def-nrqm-photons-framework-radiation-sector-and-quantum-assignments`, with
  the local mathematics of items 1–3 supplying the domains, self-adjointness,
  spectral laws and no-eigenvalue facts.
- Number/energy/Born detection is the pair items 7–10: the analyzer outcome
  law, the one-photon number/energy/momentum laws, the declared ideal
  detection models and the fixed-mode counting/energy statistics, including
  the counting and thermal limitations (no unregularised continuum Gibbs
  preparation; a thermal preparation requires a separately declared mode
  selection).
- The transverse fixed-mode polarisation versus the spatial massive psi is
  recorded in the model definition, the postulate scope and
  `rem-nrqm-photons-scope-and-empirical-status`: no position observable, no
  momentum observable, no localisation, no mass-zero Schroedinger limit and no
  photon position wavefunction.
- The B inventory is covered: Malus/Jones ratios in item B1, single-mode
  number/coherent statistics in B2, and the classical-interference
  distinction in B3 (both models exhibit the same cross-term and the same
  normalised two-bin law; the item states explicitly that a fringe law of
  this form is not a discriminator and that a discriminating comparison needs
  a declared detector, preparation and sampling model). The design's remark
  that a many-photon coherent state, an intensity field and a one-photon state
  are different objects is recorded in the examples scope remark.
- Deferred content is named, not hidden: light-matter coupling, dipole
  absorption/stimulated emission and spontaneous emission belong to
  `qm-light-matter-and-spectral-transitions` (order 207); relativistic matter,
  antiparticles, pair creation, covariant local field dynamics and full QED
  are named as a separate field-theory destination. Pratt Ch14.3 (coupling to
  a classical current) is disposed `deferred` to that later page in the
  coverage harvest.

## Sources

Coverage `research/physics-cm-qm-gr-79-2026-10-11-batch-63.coverage.json`
records six sources with exact locators and per-heading dispositions
(44 harvested results over the two pages, 0 errors / 0 warnings under
`coverage-checklist.mjs --require-destination`):

1. Binney–Skinner, *The Physics of Quantum Mechanics* (author-hosted full book,
   310 pages), §1.3.6 printed pp. 14–15 (PDF pp. 22–23): polarisation states,
   amplitudes cos/sin, transmitted fraction cos^2 and its agreement with the
   classical Malus law; the circular basis and the collapse discussion are
   out-of-scope with written reasons.
2. Zwiebach, MIT 8.05 Ch6 (OCW), §5.3 printed pp. 48–50 and §4 pp. 26–41:
   single-mode field amplitudes and oscillator Hamiltonian, number states with
   energy n*hbar*omega, coherent states with mean number |alpha|^2 and the
   Poisson number distribution; the field operator is out-of-scope.
3. Pratt, MSU PHY 851/852 notes (Internet Archive), Ch9 §9.2 printed
   pp. 135–138 and Ch14 §14.2 pp. 220–222: field-operator mode expansions,
   free-mode energy, coherent-state expectation and variance; Ch14.3 is
   deferred to the light-matter pair.
4. Essler, *Advanced Quantum Theory* notes, Ch1 §§1.1–1.4 printed pp. 3–9:
   Fock space, occupation-number states, creation/annihilation, second
   quantisation; interacting chapters out-of-scope.
5. Skinner, *Principles of Quantum Mechanics*, Ch5 printed p. 15 footnote 55
   (Internet Archive): the photon has two states and the massless case needs
   Lorentz-group representations.
6. Teschl, *Mathematical Methods in Quantum Mechanics* (full book), §1.3
   pp. 19–25 and §2.4 pp. 73–74: projection theorem/orthonormal bases and the
   spectrum of multiplication operators; the spectral theorem is consumed as
   a published canonical item and is out of the harvest.

`source-fetch-check.mjs --stamp` fetched and stamped **12/12** entries
(6 per page; 12 newly stamped, 0 documented drops); check mode reads
**12/12 fetch-verified**. No source-recovery escalation or drop record was
needed. Every item carries `sources.references` with HTTP(S) URLs, and all
reported provenance is `ai-altered` with `proof` `ai-altered` or
`not-applicable`.

## Checks run (exact results)

Item and page checks (final carriers):

- `precheck.mts` on the 15 items: **10 checked, 0 failing — all clean**
  (the three definitions, the postulate and the two remarks are non
  proof-bearing).
- `proof-layout.mjs` on all 15 items: **15 items, 46 steps, 0 defects**.
- `rendercheck.mjs` on the 15 items + 2 page carriers: **OK — 17 files**.
- `item-dependency-levels.mjs check --run ...`: run-wide errors are only
  "empty scaffold inventory" for later unauthored batches; **no batch-63
  line** (0 errors naming a batch-63 item).
- `depcheck.mjs --quiet` (run-wide): FAILs elsewhere in the corpus;
  **0 lines naming any batch-63 item or page**.
- `fwdcheck.mjs --quiet` (run-wide): FAILs elsewhere; **0 lines naming any
  batch-63 item or page** after declaring the three A-to-B forward links in
  `forward_refs`.
- `extcheck.mjs`: **OK — 28595 items, 0 recorded-not-proved, 0 resting on
  them**.
- `content-policy.mjs` (batch manifest): **15 scoped items, 0 errors,
  0 warnings**.
- `manifest-deps.mjs` (batch manifest): **15 items, 0 normalized, 0 errors**.
- Scoped `validatePhysicsContent` over the 15 items and 2 pages
  (`/tmp/b63-physics-scoped.mjs`): **0 errors, 15 items checked**.
- `proof-contract.mjs --strict` on the batch contract file: **0 errors,
  0 warnings, 9/9 proof-bearing items checked** — every declared fact is
  contracted with an exact quote from the supplier's citable section, every
  numbered step has a derivation with stated inputs, and all eight standard
  boundary cases have a disposition for each proof-bearing item.
- `citation-fidelity.mjs`: **77 citations over 9 authored items; no missing
  quote; no widening candidate** (the one initial candidate on
  `lem-nrqm-photons-fixed-mode-number-isometry` F1 was repaired by making the
  n = 0 vacuum case explicit, matching the cited item's own P_+(0) := id_C
  convention).
- `coverage-checklist.mjs --require-destination`: **2 pages, 44 harvested
  results, 0 errors, 0 warnings**.
- `source-fetch-check.mjs --stamp` / check mode: **12/12 stamped; 12/12
  fetch-verified**.
- `manifest-integrity.mjs --run ...`: **158 pages owed, 158 in the
  manifests, no scope drift** (run-wide).
- `audit-manifest.mjs` with the full run selection (all 79 batch manifests):
  **0 defects**; the post-repair re-run reads **18872 relationships over
  1468 items in 79 batches** (the count drifts as other batches are authored
  concurrently), and batch 63 appears with its two pages.

Internal mathematical-repair pass on three proof-bearing items
(`lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers`,
`pthm-nrqm-photons-fixed-mode-polarization-outcome-law`,
`pthm-nrqm-photons-fixed-mode-number-and-energy-statistics`): the lemma now
carries the explicit restricted domain, the restricted projection-valued
measure with its push-forward outcome law, and eigenvector exclusion from the
null level sets; the two theorems were rewritten with numbered steps, stated
inputs and boundary dispositions against the final supplier statements. The
whole batch battery was re-run on the resulting final text and is clean:
`precheck.mts` **10 checked, 0 failing — all clean**; `proof-layout.mjs`
**15 items, 46 steps, 0 defects** (the three changed paths alone: 3 items,
17 steps, 0 defects); `rendercheck.mjs` **OK — 17 files**;
`content-policy.mjs` **15 scoped items, 0 errors, 0 warnings**;
`manifest-deps.mjs` **15 items, 0 normalized, 0 errors**;
`proof-contract.mjs --strict` **0 errors, 0 warnings, 9/9**;
`citation-fidelity.mjs` **77 citations over 9 items, no missing quote, no
widening candidate**; `coverage-checklist.mjs --require-destination`
**2 pages, 44 harvested results, 0 errors, 0 warnings**;
`source-fetch-check.mjs` (check mode) **12/12 fetch-verified**; scoped
`validatePhysicsContent` **0 errors, 15 items checked**; `depcheck`/`fwdcheck`
**0 lines naming batch 63**; `item-dependency-levels.mjs check --run`
**0 errors naming a batch-63 item**. The eight in-batch consumers whose
transitive input hash changed were re-recorded `ready` with their unchanged
declared dependency lists, so all fifteen records are current again.

Run-wide checks failing only on other batches/environment (recorded, not
batch-63 defects):

- `validate-plan.mjs` (run-wide) FAILs with findings in other tracks;
  **0 findings naming either batch-63 page** after the transitive-reduction
  fix recorded above.
- `physics-check.mjs --run ...` aborts before content validation with
  `mathematics import changed: items/def-cardinal.md; reconcile and re-import
  before a new run`. This is run-level import state outside batch 63; the
  scoped re-run over this batch's items and pages is clean (above).

## Empirical qualifications and scope

Every item is conditional on its explicitly stated postulates and cited
mathematics. The pair records no experiment: there is no preparation
procedure, apparatus, calibration, sampling model, trial count, uncertainty
budget or measured value anywhere in it, and none is invented. The physical
statements are conditional consequences of P1, P2 and the adopted radiation
model; the identification of a laboratory source, polariser, counter,
interferometer or spectrometer with the declared models is a tested
identification with uncertainty under P7. The examples state explicitly that
the coincidence of the classical and quantised ratios is not evidence for
field quantisation, that classical waves also interfere, that a finite sample
of detections is a random object under any declared sampling model, and that a
p-value or confidence level is not the probability that a model is false. The
single-mode Gibbs-type preparation is a declared conditional model with a
declared parameter, not a thermal-equilibrium claim, and the unregularised
continuum free-field Gibbs operator is proved not trace class, so no
canonical-equilibrium preparation of the full continuum sector is asserted.

## Defects in published material and escalations

No published defect was found in any supplier read for this batch; every
consumed published mathematical item, published canonical item and in-run
draft item was inspected at its current carrier before use. No cross-batch
change, new prerequisite pair, capacity escalation or source-recovery
escalation arose, and none is held. The batch stays inside its owned pair; no
outside file was edited.

## Readiness

All fifteen items were recorded `ready` with
`node tools/physics-support/step1-decisions.mjs record --run
physics-cm-qm-gr-79-2026-10-11 --item <ID> --decision ready --dependencies
<declared deps> --reason <evidence summary>` **after** the final item
carriers, the final manifest regeneration, the final proof-contract revision
and the final page carriers, so each record's `sha256` is current for the item
text and dependency list that the reviewers will read. The three items of the
internal mathematical-repair pass were re-recorded first, and the eight
in-batch consumers whose transitive input hash then changed were re-recorded
`ready` with their unchanged declared dependency lists; unchanged records were
left intact. The final batch-63 `check --run` (last read at handoff) reports
**1243/1468 run items ready** with **0 open work entries naming a batch-63
item**; the run-wide figures drift while other batches are authored
concurrently, and at the last read the open entries were 146
worker-resolvable other-batch items with changed suppliers, 68 other-batch
items whose inputs changed under owner-authored records that a worker may not
overwrite, 11 owner-held escalations (GR) and 8 empty scaffolds (four
unauthored QM pairs later in this track). No record was overwritten and no
escalation was resolved by a worker.

Handoff artifacts: the carriers
`library/non-relativistic-quantum-mechanics/qm-photons-and-radiation-modes.md`
and `...-examples.md`; the manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-63.pages.json`; the coverage
`research/physics-cm-qm-gr-79-2026-10-11-batch-63.coverage.json`; the proof
contracts `research/physics-cm-qm-gr-79-2026-10-11-batch-63.proof-contracts.json`;
the cross-batch input
`research/physics-cm-qm-gr-79-2026-10-11-batch-63.cross-batch-dependencies.json`;
the fifteen `research/physics-cm-qm-gr-79-2026-10-11-step1-*.json` records; and
these notes. Step 2/3 independent review follows; owner/operator reconciliation
and the full engine gate follow construction, and neither a worker exit nor a
readiness record is independent mathematical approval.
