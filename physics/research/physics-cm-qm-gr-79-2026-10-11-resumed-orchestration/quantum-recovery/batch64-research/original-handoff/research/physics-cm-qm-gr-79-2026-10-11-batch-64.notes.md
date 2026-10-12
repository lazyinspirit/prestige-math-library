# Batch 64 notes — Qm Light Matter And Spectral Transitions

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **64**, covering the
pair `qm-light-matter-and-spectral-transitions` (A, order 207) and
`qm-light-matter-and-spectral-transitions-examples` (B, order 208), category
`non-relativistic-quantum-mechanics`, library `physics`. Both page carriers are
`status: draft`; this batch publishes nothing.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`README.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` (no
batch-64-specific override; its rules on draft-only content, carried physical
premises, choice assumptions and approved-claim preservation were applied), the
batch dependency levels
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch 64:
level 15, requires batches 60 and 63), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3436, the
reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`
(order 22, "R3, dipole coupling/regime, selection rules, absorption/stimulated
transitions; spontaneous emission only with field/environment assumptions
[M,D,P,T,R], 48" and "spectral energy differences versus detected photon,
finite mode coupling; primary emission evidence candidate [H,E pending], 24"),
the prose scaffold sections R1–R3 and R3a, `research/plan-spec.json`, the
scaffold audit `research/scaffold-audit-2026-10-11/quantum-mechanics/supplier-map.json`
(module M38 cutoff finite-level light–matter coupling and M39 dipole selection
rules; the three M38 mathematics items were already authored by batch 41), the
CM15/Fitzpatrick source-repair record (for the Fitzpatrick full-text reading),
and the current carriers of every in-run supplier before use.

## Plan and design conflicts (recorded)

- The design's `requires_physics` reservation is `NRQ-A16, NRQ-A18, NRQ-A21`
  (central potentials, driven dynamics, photons), while the plan and this
  dispatch declare the A page's prerequisites
  `["qm-driven-dynamics-and-adiabatic-limits", "qm-photons-and-radiation-modes"]`.
  The two are compatible: `qm-driven-dynamics-and-adiabatic-limits` requires
  `qm-controlled-approximations`, which requires
  `qm-central-potentials-and-hydrogen`, so NRQ-A16 lies in the declared
  transitive prerequisite closure. The hydrogenic bound states and the dipole
  matrix-element mathematics are consumed from that closure
  (`pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy`,
  `thm-nrqm-coulomb-atomic-dipole-matrix-element-domain`). No page `requires`
  entry had to be added or changed: `validate-plan` reports no finding naming
  either batch-64 page (in particular no `undeclared-prereq`).
- The design's B reservation is "spectral energy differences versus detected
  photon, finite mode coupling; primary emission evidence candidate [H,E
  pending]". No reported experiment item is authored in this batch: no
  authoritative complete report with apparatus, calibration, counts,
  resolution, background and uncertainty was retrieved and read for an
  emission or lifetime measurement, and the sources at hand (Binney §9.3,
  Tong §4.4, Pratt §14.3) supply model derivations and historical
  illustrations, not a trial-level record. The empirical candidate is recorded
  as pending in the page remark and in
  `rem-nrqm-light-matter-examples-scope-limits`; nothing is fabricated. This is
  an honest limitation, not a dropped promised claim: the design itself marks
  the experiment as `[E pending]`.
- The design's radiation-scope warnings were preserved item by item: no Maxwell
  derivation; no Lorentz transformation law for mode labels; no Galilean
  covariance of the radiation sector; not the m = 0 massive model; no photon
  position wavefunction; spontaneous emission only under the explicit
  quantized-field/vacuum-preparation assumption; a prescribed classical drive
  does not supply spontaneous emission.
- The design warns (Binney §9.3.1) that golden-rule rates are not exact
  long-time probabilities; the rate item states only the limit of the explicit
  single-vertex coefficient and records that no all-time decay law is claimed.

## Inventory

A page `qm-light-matter-and-spectral-transitions` (10 items; manifest
`dependency_level` in parentheses):

1. `lem-nrqm-light-matter-first-order-photon-energy-law` (9) — mathematics:
   the factorised single-vertex kernel, the normalised photon-energy law, its
   concentration at the transition energy for a continuous positive density,
   positivity on positive-density windows and tail concentration. Purely
   mathematical: all deps are mathematical items.
2. `def-nrqm-light-matter-framework-finite-level-coupled-model` (14) — the
   declared finite-level matter factor, its compressed dipole matrices, the
   cutoff mode data and the self-adjoint cutoff dipole Hamiltonian.
3. `def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength` (14) —
   the prescribed classical dipole-drive model and its long-wavelength regime.
4. `def-nrqm-light-matter-framework-spectral-transition-and-detection` (15) —
   transition energy, page dipole coefficients, photon density, single-vertex
   emission vector and coefficient, normalised energy law and ideal
   energy-window detection.
5. `post-nrqm-light-matter-vacuum-preparation-and-emission-assumption` (16) —
   the vacuum-preparation and quantized-field assumption, with the explicit
   absence of any environment, rate or decay from the postulate.
6. `pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients`
   (16) — the first-order Dyson component, the exact model probability of the
   one-photon level-b projection controlled by the explicit Dyson tail, and the
   exact emission/absorption mirror relation.
7. `pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading` (17) — the
   single-vertex coefficient per unit time, its resonant limit under a
   continuous positive density, the above-cutoff zero and the model rate
   coefficient.
8. `pthm-nrqm-light-matter-stimulated-dipole-drive-transitions` (15) — the
   prescribed-drive first-order amplitudes, the equal stimulated emission and
   absorption coefficients at opposite detunings, and the exact two-level
   identifications.
9. `pthm-nrqm-light-matter-dipole-selection-rules` (15) — the necessary
   angular conditions, the Laporte parity condition and the transfer to the
   compressed model matrices.
10. `rem-nrqm-light-matter-scope-and-empirical-status` (18) — page scope and
    empirical status.

B page `qm-light-matter-and-spectral-transitions-examples` (4 items):

1. `ex-nrqm-light-matter-two-level-dipole-drive-check` (16) — the two-level
   drive identification, the resonant first-order amplitude and its agreement
   with the leading term of the exact averaged Rabi probability.
2. `ex-nrqm-light-matter-hydrogen-dipole-angular-factors` (16) — explicit
   angular factors 1/√3 and 0 for the allowed and forbidden entries, and the
   oscillator contrast |Δn| = 1.
3. `texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison`
   (18) — equal-rate/different-energy-law discrimination of two declared
   models and the sharp-line idealisation.
4. `rem-nrqm-light-matter-examples-scope-limits` (19) — scope of the examples
   page.

Carriers `library/non-relativistic-quantum-mechanics/qm-light-matter-and-spectral-transitions.md`
and `...-examples.md`; manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-64.pages.json` (item order =
carrier order); contracts
`research/physics-cm-qm-gr-79-2026-10-11-batch-64.proof-contracts.json` (8
proof-bearing items: one lemma, four physics theorems, one thought experiment,
two examples); coverage
`research/physics-cm-qm-gr-79-2026-10-11-batch-64.coverage.json`; cross-batch
input `research/physics-cm-qm-gr-79-2026-10-11-batch-64.cross-batch-dependencies.json`
(168 rows, one per cross-batch edge of a batch-64 consumer).

## Dependency graph, levels and prerequisite inspection

The run-global levels were computed mechanically from the union of run
manifests including this batch
(`node tools/physics-support/item-dependency-levels.mjs check --run
physics-cm-qm-gr-79-2026-10-11`): no error, maximum batch-64 item level 19
(`rem-nrqm-light-matter-examples-scope-limits`), and every manifest label equals
the computed value. Out-of-run published mathematical suppliers (for instance
`def-countable-choice`, `def-axiom-of-choice`, `def-hilbert-space`,
`def-measure-with-density`, `prop-countable-subsets-of-rn-are-lebesgue-null`)
contribute level 0.

Every in-run dependency was inspected at its current authored carrier before
use, with attention to hypotheses, direction, conventions and choice strength:

- batch 41 `qm-math-fock-and-equilibrium` (the M38 mathematics):
  `thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound` supplies the
  self-adjointness and relative-bound-zero of the coupled operator;
  `thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence` supplies
  the graph-norm Dyson series identification and the explicit tail;
  `thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity`
  supplies the kernel, the approximate identity and the coefficient limit.
  These are mathematics items; their Axiom of Countable Choice and Axiom of
  Choice hypotheses are carried into every consuming statement (all batch-64
  items that cite them assume both axioms explicitly).
- batch 37 `qm-math-orbital-and-spin`:
  `thm-nrqm-orbital-and-spin-dipole-angular-selection-rules` (necessary
  angular conditions only) and the associated-polynomial/harmonic-polynomial
  items for the explicit harmonics and parity.
- batch 39 `qm-math-coulomb`:
  `thm-nrqm-coulomb-atomic-dipole-matrix-element-domain` (domain, factorisation
  and the oscillator recurrence).
- batch 43–47 framework pages: P1, P2, P3, P4, P6, P7, the state/observable
  readings and the units, used as formulation or physical assumptions only.
- batch 53–54 symmetries/angular momentum and batch 58
  `qm-central-potentials-and-hydrogen`: the declared two-body Coulomb model and
  the bound-state family used by the selection-rule item.
- batch 59 `qm-controlled-approximations`:
  `post-nrqm-approximations-static-finite-level-dipole-coupling` (the
  compressed dipole data $D_{j}=-qQ_{j}$ and the compressed Coulomb energy).
- batch 60 `qm-driven-dynamics-and-adiabatic-limits`: the declared driven model
  and its three regularity classes, the first-order transition amplitude with
  the Dyson remainder, the exact circular two-level Rabi populations and the
  linear-drive rotating-wave error contract; consumed in the prescribed-drive
  item and in the two-level example within their stated bounded-control
  hypotheses.
- batch 63 `qm-photons-and-radiation-modes`: the radiation extension postulate,
  the radiation-sector definition, the ideal counting/energy-window detection
  model and the transverse Fock mathematics; the batch-63 scope note that
  Pratt Chapter 14 emission content was deferred to this pair is discharged by
  the drive-model item and the empirical-status remark.

Convention note recorded in the items: this page's dipole coefficient is
$c_{j}=\langle v_{b},D^{W}_{j}v_{a}\rangle$, the complex conjugate of the
coefficient displayed in the batch-41 mathematics item; every cited clause of
that item is algebraic in an arbitrary coefficient vector $\sum_{j}c_{j}g_{j}$
and the measure built from $\|M\|^{2}$, and the items state the substitution
explicitly.

## Sources, retrieval and dispositions

The batch coverage file records six sources for the A page (Binney–Skinner
§§9.3.1–9.3.3 and Box 9.2; Tong §4.4; Pratt Chapter 6 and Chapter 14 §14.3;
MIT 8.05 Chapters 6 and 7; Fitzpatrick Chapter 13) and four for the B page
(Binney §9.3.1–9.3.3; MIT Chapter 7; NIST DLMF §14.7/§14.30; Axler–Bourdon–Ramey
Chapter 5). Each source carries a locator, a per-content disposition
(included/inline with a scaffolded item id, deferred with a resolving
destination, or out-of-scope with a specific reason) and a fetch stamp:
`source-fetch-check --stamp` reports 10/10 sources fetch-verified
(full bodies, page counts recorded), and check mode reports 10/10 resolved with
zero documented drops. The Binney and Pratt bodies were additionally read in
the local page extractions and the downloaded archive PDF (Pratt printed
pages 219–223, Binney printed pages 214–226), with the locators recorded in the
coverage file. The two independent treatments per A page are Binney (textbook)
plus the lecture-note sets (Tong, Pratt, MIT, Fitzpatrick); the mathematics
items are separately sourced by their own carriers.

Three harvested results whose content is authored on other pages of this run
(the Pratt §9.2 transverse second-quantisation material carried by batch 63's
`post-nrqm-photons-radiation-extension-and-transverse-mode-assignment`, the
Pratt/MIT mode-statistics material carried by batch 63's
`pthm-nrqm-photons-fixed-mode-number-and-energy-statistics`, and the MIT
ammonia two-state material carried by batch 60's
`def-nrqm-driven-dynamics-framework-driven-model`) were first written with
disposition `already-published`. Those carriers are draft in this run, so the
`coverage-checklist.mjs` rule `coverage-not-published` correctly rejected the
claim; the rows now read `deferred` with the item id as the resolving
`destination` (each id exists on disk), and the DLMF source kind was corrected
from the unrecognised `reference` to `reference-work`. The checklist then
reports 0 errors, 0 warnings under `--require-destination`.

## Checks run and actual results

- `precheck.mts` on the 14 items: 9 checked (5 non-proof structures pass), 0
  failing.
- `proof-layout.mjs` on the 14 items: 14 items, 39 steps, 0 defects.
- `rendercheck.mjs` on the 14 items: OK, every math span parses and every
  frontmatter block parses.
- `content-policy.mjs research/...-batch-64.pages.json`: 14 scoped items, 0
  errors, 0 warnings.
- `proof-contract.mjs .../…-batch-64.proof-contracts.json --strict`: 0 errors,
  0 warnings, 8/8 items checked.
- `depcheck.mjs` run over the whole corpus: its failure findings
  (`published-unaudited`, etc.) name no batch-64 item — filtering the output
  for `light-matter` yields zero finding lines; the corpus currently fails the
  gate for unrelated pre-existing items elsewhere. `fwdcheck.mjs` likewise
  reports corpus-wide pre-existing `[forward-undeclared]` findings (12,796 at
  this revision, including one NRQM item outside batch 64), none of which
  names any of the 14 batch-64 items; the batch-64 lines in its informational
  inherit list are not findings. `extcheck.mjs`: OK, no
  recorded-not-proved statements involved.
- `coverage-checklist.mjs --require-destination` on the batch-64 coverage
  file: after the disposition corrections above, 2 pages, 26 harvested
  results, 0 errors, 0 warnings.
- `citecheck.mjs` on the 14 items: OK — every recognised elementary move
  cites a home that states it. `citation-fidelity.mjs` on the batch contract
  file: two widening candidates, both read and dismissed — the [F1] fact of
  `pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading` states the
  coefficient identity for $t>0$, which is exactly the range in which the
  cited clause (a) of the lemma and of the first-order emission theorem state
  it (the vectors $A_{b}(\cdot,t)$ are merely defined for $t\ge0$); nothing
  claims more than the sources give.
- `validate-plan.mjs research/plan-spec.json --run ...`: no finding names
  either batch-64 page; both pages show their authored item counts.
- `item-dependency-levels.mjs check --run ...`: labels match computed levels.
- `manifest-deps.mjs` on the batch manifest: 14 items, 0 normalized, 0
  errors. `manifest-integrity.mjs --run ...`: 158 pages owed, 158 in the
  manifests, no scope drift. `audit-manifest.mjs` over the full run selection
  (all 79 batch manifests): 20150 relationships over 1545 items in 79
  batches, 0 defects, exit 0.
- `source-fetch-check.mjs --coverage ... --stamp`: 10/10 fetch-verified;
  check mode 10/10 resolved.
- `frontier-dependency-ledger.mjs refresh --run ...`: refreshed and
  deduplicated after the batch-64 cross-batch input was written.
- `author-check.mts <run> 64` re-run at the final item bytes: `ok: true`
  (fingerprint `366bcff41a749ac74e8fe448db6e4a0c6ae1bbada19e255642a275852c7e893c`,
  unchanged from the earlier run), recorded in
  `research/physics-cm-qm-gr-79-2026-10-11-author-check-64.json`.
- `step1-decisions.mjs check --run ...`: 1545 items, 1406 ready, and zero
  batch-64 items remaining in the work list; the run is not globally closed
  only because of owner-held escalations in other batches, which this batch
  neither creates nor resolves.

## Readiness and honest limitations

Each of the 14 items has a Step-1 readiness record
(`research/physics-cm-qm-gr-79-2026-10-11-step1-<item>.json`) with `decision:
ready`, the examined dependency IDs and the batch evidence; each record was
written only after the final item bytes and its `sha256` binds those carriers
and their transitive in-run inputs, and `step1-decisions.mjs check` confirms
no batch-64 item is outstanding. No escalation was required: every
prerequisite used by this batch is either a published root
mathematics item or an authored, currently-ready in-run item from batches
37–63, and every statement of this batch is conditional on explicitly declared
model data, sources and choice hypotheses.

Recorded limitations: (i) no reported emission-spectrum or lifetime experiment
is authored, as the design itself marks `[E pending]`; (ii) the model rate
coefficient is a limit of the single-vertex coefficient and is not an observed
decay constant, and no exact exponential decay or Markov property is claimed;
(iii) the sharp observed line is treated only as a declared idealisation whose
relation to the model's finite-time law is a proved limit statement; (iv) the
identification of laboratory atoms, fields, modes and spectrometers with the
declared models is a tested identification with uncertainty under P7 and is not
established anywhere in this batch. These are mathematical and empirical
qualification limits, not missing proofs of the authored claims.
