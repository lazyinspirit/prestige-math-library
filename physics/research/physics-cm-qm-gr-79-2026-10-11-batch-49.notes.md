# Batch 49 notes — Qm Interference And Local Detection

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **49**, covering the
pair `qm-interference-and-local-detection` (A, order 177) and
`qm-interference-and-local-detection-examples` (B, order 178), category
`non-relativistic-quantum-mechanics`, library `physics`. Both pages are
`status: draft`; this batch publishes nothing.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
batch dependency levels `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 49: level 9, requires batch 48 / page `qm-massive-particle-kinematics`),
the design section `research/plan-non-relativistic-quantum-mechanics-track.md`
L3082, the reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`
(order 07) and the prose scaffold line 59 of the same directory's
`prose-scaffold.md`, and `research/plan-spec.json`.

## Inventory

A page `qm-interference-and-local-detection` (8 items; manifest
`dependency_level` in parentheses):

1. `lem-nrqm-interference-component-cross-term-and-recorded-bin-laws` (0) —
   batch-local mathematical prerequisite (`domain: mathematics`): the pointwise
   and integrated cross-term identity for component readouts, weights and
   densities, the sub-probability sum of weighted probabilities, and the
   coherence criterion (the two laws coincide exactly when a displayed
   almost-everywhere relation holds).
2. `def-nrqm-interference-two-path-preparation-and-detection-model` (9) — the
   declared two-path preparation model: path components, admissibility, the
   coherent preparation of relative phase, the which-path preparation of
   declared weight, and the ideal detection bins of the model's joint position
   observable.
3. `def-nrqm-interference-recorded-detector-and-sampling-model` (10) — the
   declared recorded detector: measurable recorded weights and multiplication
   effects, the completed finite effect family with a no-record channel, the
   recorded and conditioned probabilities, and the declared IID N-trial
   sampling model with its fringe criterion.
4. `pthm-nrqm-interference-coherent-and-mixture-detection-laws` (10) — the
   coherent law with its cross term, the which-path law, the coherence
   criterion, and scope.
5. `pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning` (11) — the
   recorded coherent/which-path laws, loss and the no-record channel,
   conditioning, the ideal-bin reduction, and the coincidence sufficient
   condition.
6. `pthm-nrqm-interference-continuity-and-local-probability-balance` (9) — the
   pointwise continuity equation and integrated balance for componentwise C²
   solutions, global conservation under domination and vanishing surface flux,
   unconditional norm conservation of the assigned unitary flow, and units.
7. `texp-nrqm-interference-finite-sample-fringe-failure` (12) — concentration
   of empirical frequencies, positive failure probability of any declared
   nondegenerate fringe criterion, indistinguishability of coincident recorded
   laws, and scope.
8. `rem-nrqm-interference-scope-and-deferred-content` (13) — scope of the pair,
   the deferred marker-overlap theorem and which-path ontology, and the
   empirical status of the recorded model.

B page `qm-interference-and-local-detection-examples` (4 items):

1. `ex-nrqm-interference-ideal-flat-two-path-screen-distribution` (11) — exact
   coherent and which-path bin laws for product-form flat amplitudes, the dark
   overlap region at phase pi, and positivity on partially overlapping bins.
2. `ex-nrqm-interference-uniform-phase-averaging` (11) — a declared finite
   phase-averaging model over the n-th roots of unity reproduces the which-path
   law for orthogonal components.
3. `exp-nrqm-interference-bach-electron-double-slit` (8) — the source-backed
   reported electron double-slit experiment of Bach, Pope, Liou and Batelaan
   (arXiv:1210.6243v1), with apparatus, procedure, reported counts, source
   omissions and the qualified reading.
4. `rem-nrqm-interference-examples-scope-limits` (13) — scope of the examples
   page: what the two computations and the reported experiment establish, and
   what the page does not address.

Carriers
`library/non-relativistic-quantum-mechanics/qm-interference-and-local-detection.md`
and `...-examples.md`; manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-49.pages.json`; proof contracts
`research/physics-cm-qm-gr-79-2026-10-11-batch-49.proof-contracts.json` (8
in-scope items: the lemma, the three physics theorems, the thought experiment
and the two examples carry proof contracts; the two definitions and the two
remarks carry no proof section); coverage
`research/physics-cm-qm-gr-79-2026-10-11-batch-49.coverage.json`; cross-batch
input `research/physics-cm-qm-gr-79-2026-10-11-batch-49.cross-batch-dependencies.json`
(44 rows: 43 item edges + 1 page edge).

## Design versus plan (conflicts and deviations)

1. **`requires`.** The design section and the reservation declare
   `qm-massive-particle-kinematics` for the A page and the companion for the B
   page; `research/plan-spec.json` agrees (`requires`:
   `["qm-massive-particle-kinematics"]` and `["qm-interference-and-local-detection"]`),
   and the carriers and manifest match. No conflict.
2. **Reservation `requires_physics` codes.** The reservation's
   `requires_physics: [NRQ-A03, NRQ-A06]` are the inventory's A-page codes for
   the earlier observables/state-geometry page and the massive-particle
   kinematics page; plan-spec consolidates the declared page prerequisite as
   `qm-massive-particle-kinematics`, and the manifest and carriers declare that
   page. No conflict; recorded for completeness.
3. **A inventory delivery.** The reservation asks for "amplitudes/coherence,
   detector PVM/POVM bins, coherent cross term vs incoherent law, current under
   regularity, finite-sample theorem [M,D,T,H], 34". All five clusters are
   delivered: coherence and amplitudes by the two-path definition and the
   coherent/which-path theorem; detector bins by the ideal-bin reading (PVM
   position projections) and the recorded-detector model (bounded
   multiplication effects read through clause (iv) of P2, i.e. the unsharp
   finite-outcome reading; no general POVM theory and no instrument/state-update
   claim is made); the coherent cross term versus the incoherent law by the
   coherent/which-path and recorded-bin theorems; the current under regularity by
   the continuity theorem, explicitly restricted to componentwise C² solutions
   (the unitary-flow conservation is a separate unconditional clause); the
   finite-sample statement by the thought experiment, under the declared IID
   sampling model. The pair authors the mathematics it needs locally (item 1
   and the batch-local prerequisites of the earlier suppliers); no claim is
   weakened and no inventory content is declined.
4. **Marker-overlap deferral (design-directed).** Prose-scaffold line 59 states
   that "the reusable marker-overlap physical result is homed on 13A; 07 does
   not consume a future 13 theorem". The pair follows this direction: it does
   not state or prove any marker-overlap (which-path marker distinguishability)
   result, and `rem-nrqm-interference-scope-and-deferred-content` records the
   deferral to the composites/entanglement page. The pair also avoids
   which-path ontology: the coherent and which-path preparations are declared
   preparation models, and no item asserts that a particle took a path.
5. **B inventory delivery and the reported experiment.**
   `ex-nrqm-interference-ideal-flat-two-path-screen-distribution` delivers the
   "ideal two-path distribution". The electron data are delivered only after a
   primary-report audit: the item reports arXiv:1210.6243v1, read in full (all
   8 pages, both procedures and all figure captions), and it is limited to the
   preprint (the journal reference is noted separately). Photon data are **not**
   delivered: the reservation allows "electron/photon data only after primary
   report audit [H,E pending]", and the prose scaffold assigns optical
   interference to pair 21 `qm-photons-and-radiation-modes`; the examples
   remark records that no photon experiment is reported here.
6. **Source pointer reconciliation (deviation, recorded).** The reservation's
   source pointer line reads "Tong §1.3; Binney §1.2; Teschl Ch7; MIT Ch1".
   The page harvests the material actually used for this pair: Tong §§1.1–1.3
   (including the probability current and continuity equation of §1.2), Binney
   §§1.2, 1.4 and 2.3 (amplitudes and the cross term; coherent versus
   incoherent preparation; the probability current), and Teschl §2.1 and §3.1
   (the Schrödinger operator and its unitary group; conservation of probability
   and the current) rather than Teschl Ch. 7, which is the free-Schrödinger /
   Fourier material already consumed by the prerequisite kinematics page.
   MIT Ch. 1 was not harvested because the two lecture sets and the monograph
   already cover the same content at the needed rigor; the coverage file
   records the harvested locators. No plan was edited.
7. **`texp` as `thought-experiment`.** The finite-sample statement is classified
   as a thought experiment (`texp-`) because it is a hypothetical conditional
   sampling analysis, not a reported experiment; the only reported experiment on
   the pair is `exp-nrqm-interference-bach-electron-double-slit`. The distinction
   is carried by the item kinds, the empirical qualifications and the
   `physical_scope` fields.

## Source audit and repairs

Six source entries over the two pages (4 distinct works) were fetched as
complete documents and stamped; locators were verified by extracting and
inspecting the pages (PyMuPDF on the fetched PDFs):

- **D. Tong, *Quantum Mechanics* (author-hosted lecture set, 133 pp).** PDF
  page = printed page + 3. Harvested: §1.1–1.2 printed pp. 3–14 (PDF 6–17),
  including the probability current and continuity equation of §1.2
  (eqs. (1.5)–(1.7)); §1.3 printed pp. 14–18 (PDF 17–21), the two-slit
  probability density with its cross terms and the accumulation of single
  detections. Both pages cite it.
- **J. Binney and D. Skinner, *The Physics of Quantum Mechanics* (310 pp).**
  PDF page = printed page + 8. Harvested: §1.2 printed pp. 5–6 (PDF 13–14),
  amplitudes for alternative routes and the interference cross term; §1.4
  printed p. 15 (PDF 23), coherent versus incoherent preparation and the
  vanishing cross term; §2.3 printed pp. 32–33 (PDF 40–41), the probability
  current, the continuity equation and the surface-flux balance. An earlier
  draft of the pair's citations gave §1.4 PDF page 15; corrected to PDF 23.
- **G. Teschl, *Mathematical Methods in Quantum Mechanics* (1st ed. 2009,
  author-hosted full monograph, 317 pp).** PDF page = printed page + 12.
  Harvested: §2.1 printed pp. 55–58 (PDF 67–70), the Schrödinger operator,
  self-adjointness and the domain-qualified equation; §3.1 printed pp. 87–98
  (PDF 99–110), conservation of probability and the current. No locator claims
  Ch. 7 for this pair. It supports the model declaration, the model-equation
  reading and the flow/domain statements of the continuity theorem.
- **R. Bach, D. Pope, S.-H. Liou and H. Batelaan, "Controlled double-slit
  electron diffraction", arXiv:1210.6243v1 (22 October 2012, 8 pp).** Read in
  full from a fresh full-text retrieval. Reported: 600 eV electron beam,
  collimation 2x10 micrometres at 16.5 cm, nanofabricated double slit 30.5 cm
  beyond with 50 nm slits at 280 nm separation in a 100 nm silicon-nitride
  membrane with about 2 nm gold, a 5 micrometre movable mask 230 micrometres
  downstream, quadrupole magnification, and microchannel-plate/phosphor/CCD
  detection with blob localisation; the mask sweep with summed normalised image
  frames (P1, P12, P2) and the mask-centred accumulation at about 1 Hz over
  about 2 hours with reported accumulated localised-event counts 2, 7, 209,
  1004 and 6235 in the central five orders. The source's mask-height
  inconsistency (10 versus 20 micrometres between body and figure caption) is
  recorded as unresolved rather than repaired; the journal version is noted
  separately and the item is limited to the preprint. No independence test,
  occupancy bound, dead-time model, efficiency calibration or significance
  statement appears in the source, and the item says so.

All six coverage entries are fetch-verified with stamps
(`source-fetch-check --coverage … --stamp` earlier in construction; the check
mode now reports 6/6 resolved). The coverage checklist reports one
`coverage-low-yield` warning: 6 of 16 harvested result headings of the A page
are scaffolded; the remaining headings are declared `inline` or `out-of-scope`
with reasons in the coverage file (the which-path disturbance and collapse
discussion, and the classical particle/wave comparison, are out of scope of
this pair). This is a mechanical harvest-yield warning to confirm with Alpha,
not an error; the design clusters are fully delivered (item 3 of the previous
section). Every one of the 12 items is referenced by at least one disposition
in the coverage file (the four entries added for the recorded-bin theorem, the
finite-sample thought experiment and the two scope remarks are the A-page
Tong §1.2 detection-record entry, the A-page Binney §1.2 repeated-measurements
entry, the A-page Binney §1.4 scope entry and the B-page Bach summary entry).

## Dependency verification

- **In-batch order.** Authoring followed the computed item order (lemma 0;
  definitions 9/10; theorems 10/11/9; thought experiment 12; remarks 13 on A;
  examples 11/11 and experiment 8 with the scope remark 13 on B). Frontmatter,
  manifest and computed levels agree; `item-dependency-levels.mjs check --run`
  names no batch-49 item. `depcheck` reports page prerequisite depth 55 (A) and
  56 (B); no missing, circular or forward dependency; `fwdcheck` and `extcheck`
  are clean.
- **Actual proof dependencies.** Every fact of the eight contract-bearing items
  was cited at the step that uses it (proof contracts, 54 citations, 0 strict
  errors). Two dependency repairs were made while checking the actual
  transitive uses, both integrity fixes with no claim change:
  1. `pthm-nrqm-interference-continuity-and-local-probability-balance` declared
     `def-nrqm-kinematics-framework-massive-spin-s-model` and the model-equation
     facts but its step 1.1 applied the scalar supplier lemma without naming
     [F2]; the step now cites [F2] for the componentwise model equation (the
     contract's `uses` maps for all four F2 citations).
  2. `pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning` declared
     the Axiom of Choice as a prerequisite (via `thm-positive-square-root`,
     whose own dependency list contains `def-axiom-of-choice`) but its
     statement assumed only Countable Choice and never named AC. The statement
     and the proof's Given line now assume both, as the cited trace-class,
     rank-one and square-root suppliers require; this is a raising of the
     explicit hypothesis set, not a weakening.
  In addition, two declared dependencies of
  `def-nrqm-interference-recorded-detector-and-sampling-model`
  (`def-nrqm-framework-quantities-and-units` for the metre reading of the
  position sets, `def-bounded-linear-operator` for the boundedness of the
  multiplication effects) and one of
  `rem-nrqm-interference-examples-scope-limits`
  (`pthm-nrqm-interference-coherent-and-mixture-detection-laws`) were declared
  but not cited; each is now cited at the clause that uses it.
- **Cross-batch input.** `...-batch-49.cross-batch-dependencies.json` records 44
  `verified` rows: 43 item edges and 1 page edge
  (`qm-interference-and-local-detection → qm-massive-particle-kinematics`).
  Supplier batches: 35 (`qm-math-composites`), 42
  (`qm-math-magnetic-and-detection`), 43 (`qm-framework-and-quantities`), 44
  (`qm-state-geometry`), 45 (`qm-observables-and-born-probabilities`), 47
  (`qm-autonomous-dynamics`) and 48 (`qm-massive-particle-kinematics`). Each
  row states the dependency role, the exact required claim and hypotheses, and
  the use location; the claims were read at the suppliers' current carriers.
  Item-level rows cover every declared out-of-batch edge touching a batch-49
  consumer; no declared run edge is left unreviewed. Edges of other batches
  into this batch's items (e.g. `qm-one-dimensional-potentials` requiring this
  A page) are consumers owned elsewhere and are not reviewed here.
- **Marker overlap is not consumed.** No batch-49 item depends on
  `qm-composites-entanglement-and-reduced-states` or on any marker-overlap
  result; the deferral is stated in the A scope remark, following prose
  scaffold line 59.

## Recorded cross-batch defects (not repaired here)

These were found by the run-wide checks; they are outside batch 49's edit scope
and were not modified.

1. **Blocking defects in two other batches' cross-batch review inputs.**
   `tools/physics-support/frontier-dependency-ledger.mjs collect` accepts only
   `status` values `{open, verified, removed}`, and two review files carry rows
   outside that vocabulary, so the derived refresh
   (`frontier-dependency-ledger.mjs refresh --run physics-cm-qm-gr-79-2026-10-11`)
   aborts before merging any batch's reviews, including batch 49's (retried at
   the end of construction; first blocker `...-batch-39...`, and the same run
   also lists the batch-40 rows below):
   - `research/physics-cm-qm-gr-79-2026-10-11-batch-39.cross-batch-dependencies.json`:
     33 rows, 1 invalid — the page row `qm-math-coulomb →
     analyticity-liouville-and-morera` carries `status: prerequisite-context`.
   - `research/physics-cm-qm-gr-79-2026-10-11-batch-40.cross-batch-dependencies.json`:
     61 rows, 11 invalid — 3 rows use `prerequisite-context` (e.g. consumer
     `qm-math-controlled-dynamics`, supplier
     `lebesgue-stieltjes-measures-and-distribution-functions`) and 8 use
     `local-owning-premise-review` (e.g. consumer
     `lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus`, suppliers
     `def-countable-choice`, `thm-dominated-convergence`, `def-hilbert-space`, …).
   Smallest repair: map those 12 rows to `verified` (their evidence text already
   records the review) or to `open`; the batch-39/40 workers or the owner own
   the edit. Batch 49's own review file validates against the same rules
   independently (rows: 44, all `verified`, all with nonempty evidence, all
   consumers owned by batch 49, no duplicates, no orphans).
2. **Other batches' run-wide physics-content errors.** A scoped
   `validatePhysicsContent` over the batch-49 closure reports 27 errors, none
   naming a batch-49 item: 22 `role-supplier` errors naming
   `def-cm08-symmetry-of-the-mechanical-lagrangian`, 3 `item-cycle` errors
   naming `def-gr-future-and-past-sets`, 1 `edge-unresolved` error naming
   `lem-gr-schwarzschild-isotropic-coordinate-form`, and 1 `mathematical-role`
   error naming `thm-cm-liouville-arnold-action-angle-repaired`. They are
   recorded for the owner and other batches' repair; no batch-49 item consumes
   those items.
3. **Other batches' scaffold state.** `item-dependency-levels.mjs check --run`
   reports 43 errors run-wide (empty scaffold inventories of unauthored pairs
   such as `cm14-hamilton-jacobi-and-integrability`, `qm-one-dimensional-potentials`
   and others, plus one computed-level mismatch on
   `thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification`:
   declared 12, computed 11). No batch-49 item is named.

## Checks run (exact results)

Item and page checks:

- `precheck.mts` on all 12 items: 8 checked, 0 failing (the two definitions and
  two remarks are not proof-bearing).
- `rendercheck.mjs` on all 12 items + 2 page carriers: OK — 14 files, no
  wikilink inside math, no nested or unbalanced delimiters, no multiline
  display block, every math span parses under KaTeX, every frontmatter block
  parses.
- `proof-layout.mjs` on all 12 items: 12 items, 30 steps, 0 defects (run after
  the final edits).
- `depcheck.mjs --items-file`: OK; page dependency depth 55 (A) / 56 (B).
- `fwdcheck.mjs --items-file`: OK; prerequisite/forward cycle checks passed.
- `extcheck.mjs --items-file`: OK — 28289 items, 0 recorded-not-proved, 0
  resting on them.
- `manifest-deps.mjs`: 12 items, 0 normalized, 0 errors.
- `content-policy.mjs` (mathematics policy): 12 scoped items, 0 errors, 0
  warnings.
- Scoped `validatePhysicsContent` over the batch closure: 27 errors run-wide,
  **0 naming a batch-49 item** (the recorded other-batch findings above).
- `item-dependency-levels.mjs check --run`: no batch-49 line; remaining errors
  are other batches'.
- `manifest-integrity.mjs --run`: 158 pages owed, 158 in the manifests, no
  scope drift.
- `validate-plan.mjs research/plan-spec.json --run`: 1 run-wide error, naming
  `qm-math-controlled-dynamics` (an undeclared prerequisite on
  `square-integrable-kernels-and-hilbert-schmidt-compactness`), and **no
  finding naming a batch-49 page**; the run listing shows
  `qm-interference-and-local-detection` (8 items) after
  `qm-massive-particle-kinematics` and `...-examples` (4 items) after the A
  page.
- `proof-contract.mjs --strict` on the batch contract file: 8/8 items checked,
  0 errors, 0 warnings (54 citations with exact quotes from the suppliers'
  own Statement/Definition/Postulate sections; every proof step has a
  derivation with stated inputs; all eight standard boundary cases have a
  disposition per item).
- `citation-fidelity.mjs` (self-check): 54 citations, no quote-not-found, no
  widening candidate. One candidate found earlier (the texp [F2] restatement
  of the finite-sampling law omitted the supplier's `N>=1` bound) was repaired
  by stating `N>=1` in the fact line; the check is now clean.
- `boundary-audit.mjs` (self-check): 56 rows over the contract file, 10
  `not_applicable`; no template reuse at or above 3 members, no contradicted
  dispositions.
- `coverage-checklist.mjs --require-destination`: 2 pages, 26 harvested
  results, 0 errors, 1 warning (`coverage-low-yield` on the A page, 6/16
  headed results scaffolded; the remaining dispositions are `inline` /
  `out-of-scope` with reasons — confirm with Alpha). All 12 items appear in
  the coverage dispositions.
- `source-fetch-check.mjs --coverage … --stamp` (construction) and check mode
  (final): 6/6 source entries fetch-verified, 6/6 resolved, 0 documented drops.
- `frontier-dependency-ledger.mjs refresh --run`: **aborted** by the batch-39 /
  batch-40 review-input defects recorded above (not by any batch-49 row);
  batch 49's review file was validated independently against the same row
  rules.

## Empirical qualifications and scope

The pair distinguishes model deductions from observations throughout. The A
page is entirely conditional on P1, P2, P4, P5, P6, P7, the declared
preparation/detector/sampling models and the cited mathematics; it records no
count, rate or measured value. The two B-page computations are exact
probabilities in the declared flat/orthogonal models and say so. The one
reported experiment is limited to what the preprint states: its counts, rate
and apparatus parameters are reported observations with the source's own
omissions, the source's single-electron claim remains a reported inference
(no occupancy bound, independence test, dead-time model or efficiency
calibration is supplied), and the item states that agreement with a coherent
amplitude model is evidence about combined model and apparatus assumptions, not
a proof. The finite-sample thought experiment proves only conditional
probability statements under the declared IID sampling model: a nondegenerate
criterion fails with positive probability under the coherent model itself, a
visible pattern is not a proof, and a sample without a visible pattern is not a
falsification; no p-value, confidence level, power or sample size is computed,
and the coincident-law clause shows that no criterion distinguishes two
preparations whose recorded laws coincide. The reported experiment's counts
are not converted into a statistical test, and no competing model is claimed to
have been tested.

## Escalations

None held for a batch-49 item: all 12 items are authored with their
prerequisites, contracts, page placement and evidence, and no batch-49 claim is
blocked. The run-wide ledger refresh is blocked by the batch-39 and batch-40
review-input defects recorded above (exact evidence and smallest repair given);
the fixes are owned by those batches/the owner and were not applied here. The
derived ledger `research/physics-cm-qm-gr-79-2026-10-11-cross-batch-dependencies.json`
will include batch 49's 44 verified review rows on the first refresh after that
repair.

## Readiness

All 12 items were recorded `ready` with
`node tools/physics-support/step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item <ID> --decision ready --dependencies <JSON deps> --reason <evidence summary>`
**after** the final item carriers and the final manifest regeneration. The
dependency lists passed are the items' declared `deps`, including the
cross-batch and imported suppliers actually used. All 12 records were then
verified closed against the current inputs by a scoped
`step1-decisions.mjs check --run` run (other batches' records remain open as
expected during construction). Handoff artifacts: the A/B carriers, the
manifest, the coverage, the proof contracts, the cross-batch input and these
notes. Step 2/3 independent review follows; a readiness record is not
mathematical approval.
