# Batch 76 authoring notes — Actual photon box trace and Planck energy/entropy flux

Run: physics-remaining-80-2026-10-17. Owner: beta. Scope: the assigned pair
tgr-mhs04 and tgr-mhs04-examples only.

## Plan and inventory reconciliation

The current plan-spec.json and dispatch agree on A page tgr-mhs04 (order
649), B page tgr-mhs04-examples (order 650), category
thermodynamics-and-general-relativity-mathematics, library mathematics, and
the earlier page requirements orthonormal-bases-parseval-and-fourier-series
and qsm-bose-fermi-gases.

The complete design section in
research/plan-thermodynamics-and-general-relativity-track.md preserves the
scope: an actual finite-box diagonal trace and entropy calculation, a
thermodynamic-volume Planck limit, a separately defined isotropic ray-flux
model, and a conditional fixed-reference mass ODE. Its original proposed
inventory lists the four planned theorem/proposition/counterexample/example
items. The current plan-spec records both A/B item arrays as empty planning
placeholders; the assigned batch manifest fills them with the four reserved
claims and three proved local prerequisite expansions. The older embedded
design inventory has `requires: []`, while the current task and plan-spec.json
both declare `orthonormal-bases-parseval-and-fourier-series` and
`qsm-bose-fermi-gases`. This is the plan/design conflict; under the owner
direction, the current plan controls it. The page files and manifest use those
two requirements.

The three local lemmas lem-tgr-photon-box-shell-summability,
lem-tgr-photon-box-riemann-limits, and lem-tgr-planck-integrals are recorded
as inventory expansions. They supply respectively the exponential lattice
bounds, the compact-test and singular-entropy Riemann limits, and the exact
Planck integrals. The previously present Planck-integral draft had no page home;
it is now placed on the assigned A page. No claim or premise was dropped to fit
the page. The A page has five items and remains below the 100-item cap; the B
page has one counterexample and one example.

## Argument and interface audit

The signed compact radial test in lem-tgr-photon-box-riemann-limits initially
used the nonnegative polar-coordinate theorem without separating signs. Its
proof now applies that theorem to the positive and negative parts and subtracts
their finite integrals. The Planck theorem uses this exact signed-test clause
directly. Its arbitrary inverse-temperature parameter `gamma` now carries SI
units of inverse joules, and its diagonal operators are explicitly defined on
occupation coordinates. The theorem's direct consumers, the effective-area
proposition and zero-mode counterexample, were checked against this clarification:
they use the Planck flux/base trace interfaces and do not rely on any changed
gamma convention.

The zero-mode counterexample now cites the published measure-theory result that
the singleton `{0}` in `R^3` is Lebesgue null. Its exact statement and proof were
inspected, and its local imported snapshot and root original match the
`research/math-imports.json` pin. It adds no in-run supplier, so the item level
remains 4. The other imported mathematical suppliers used by this pair were
also inspected at their actual statements/proofs or definitions; the selected
local snapshots and root originals match their import pins. The local published
sphere-integral lemma and the actual batch-45 Fock-basis and diagonal-trace
draft proofs were inspected. The two batch-45 suppliers still have current
Step-1-ready records; the argument remains conditional on their exact draft
interfaces, not on independent proof acceptance. Only `AC_omega` is used; no
full Axiom of Choice, empirical premise, or measurement is introduced. The
ray-transport and mass-balance clauses remain explicit mathematical model
assumptions, not physical findings.

The initial proof-contract derivations did not match the finished step numbers.
All seven contract entries were regenerated from the current facts and proof
paragraphs, then their boundary references and finite checks were aligned to
those exact steps. The contracts now contain the exact supplier excerpts and
step inputs checked by `proof-contract.mjs`.

## Dependencies and levels

The current full-run batch-dependency record gives batch 76 level 3 with batch
45 as its in-run supplier. The current item-level graph is:

| Item | Level | In-run supplier basis |
|---|---:|---|
| lem-tgr-photon-box-shell-summability | 0 | none |
| lem-tgr-planck-integrals | 0 | none |
| lem-tgr-photon-box-riemann-limits | 1 | shell-summability lemma (0) |
| thm-tgr-photon-planck-flux | 3 | QSM diagonal trace (2), QSM occupation basis (1), Riemann limits (1), shell lemma (0), Planck integrals (0) |
| prop-tgr-ideal-evaporation-accounting | 4 | Planck-flux theorem (3) |
| cex-tgr-photon-zero-mode-trace | 4 | Planck-flux theorem (3), QSM suppliers (2 and 1) |
| ex-tgr-ideal-cutoff-entropy | 5 | evaporation-accounting proposition (4) |

The item graph is acyclic. The exact direct inputs, current statuses, uses, and
page requirements are recorded in
physics-remaining-80-2026-10-17-batch-76.dependency-inputs.json; cross-batch
and page interfaces are in
physics-remaining-80-2026-10-17-batch-76.cross-batch-dependencies.json.

The current batch-45 carriers
lem-qsm-fock-occupation-basis-and-car-relations and
lem-qsm-models-diagonal-occupation-trace were read at their actual Statements
and Proofs. Their current per-item Step-1 records say ready; their content
remains draft and readiness is not independent review or proof acceptance.
The target theorem uses the former for the enumerated occupation basis and the
latter for self-adjointness on the exact diagonal domain, trace-class
normalization, product trace, and one-mode means. The separate QSM lattice
theorem and its M17 supplier gap are not in this pair's dependency closure and
are not used.

The published Parseval, polar-coordinate, monotone-convergence,
nonnegative-integral, countable-choice, and trace-class imports were read at
their current Statements/Proofs or Definitions as applicable. Their local
physics snapshots and root originals match the hashes in
research/math-imports.json. The local published sphere-integral supplier was
read at its current Statement and Proof. AC_omega is the strongest choice
principle used; no full Axiom of Choice is assumed by these arguments.

## Source reading and disposition

The full relevant photon-gas sections of both independent full-text lecture
treatments were read:

- MIT OpenCourseWare 8.333, Lecture 20, complete photon-gas section, equations
  VI.49–VI.61 (PDF pp. 12–14; printed pp. 128–131).
- University of Mississippi PHY 727, Lecture 18, The Photon Gas, both pages
  of the complete note, including its material-wall equilibration qualification.

The local source record gives the search queries, full-text paths and hashes,
exact locators, support, limitations, and disposition of every harvested
result. coverage.json maps the photon mode/product formulas, continuum
energy/entropy formulas, angular c/4 factor, and the two Planck integrals to
the authored items. The lecture sources motivate the conventional formulas;
they do not prove countable trace convergence, the exact finite-box diagonal
entropy, the singular Riemann limit, or the effective-area mass ODE. Those
arguments and their qualifications are local. No measurements or empirical
claims are used. There was no retrieval failure, retry, drop, or unresolved
source requiring a source_resolution record.

The required source-fetch-check --stamp command reported 2/2 sources
fetch-verified and 2/2 resolved; both existing stamps matched the full-text
source records, so no new stamp was written.

## Scoped checks

Final scoped checks after the last item edit and contract generation:

- `source-fetch-check --stamp`: 2/2 sources fetch-verified and resolved; 0 newly
  stamped. Both full-text PDF records remained current.
- `content-policy` on batch 76: 7 items, 0 errors, 0 warnings.
- `depcheck --items-file` for the seven assigned items: passed selected item and
  page checks plus prerequisite-cycle checks (1,617 dependency items, 425 pages).
- `rendercheck` on seven items and both pages: 9 files, YAML and KaTeX passed.
- Normative `precheck`: 7 items checked, 0 failing.
- `proof-contract --strict`: 7/7 items checked, 0 errors, 0 warnings.
- `proof-layout`: 7 items, 29 steps, 0 defects.
- `coverage-checklist`: 1 page, 9 harvested results, 0 errors, 0 warnings.
- The assigned page inventory, item `deps`, `dependency_roles`, and levels match
  both page carriers and the batch manifest. The cross-batch file parses as a
  five-row JSON array with valid batch-owned consumers.
- Recomputed item levels for all seven batch-76 items matched their manifests:
  0, 0, 1, 3, 4, 4, and 5 in supplier order. No assigned item had a level error.
  The current full-run batch graph still gives batch 76 level 3 with supplier
  batch 45.
- `step1-decisions.mjs record` now has current `ready` records for all seven
  assigned items, written supplier-first with `owner: false`. The Planck theorem
  and zero-mode counterexample explicitly retain their conditional reliance on
  current batch-45 draft inputs.

Two full-run level checks remain owner-level blockers and were not repaired
outside this assignment. `batch-dependency-levels.mjs check` reports the stored
global graph stale: current requirements add batch 6 to batch 22, batch 34 to
batch 46, and batches 36 and 38 to batch 47. Batch 76 itself still computes to
level 3 with `requires: ["45"]`. `item-dependency-levels.mjs check` reports 51
unassigned errors: empty inventories on `emg-mm03`, `emg-mm02`, `emg-mp03`,
`emg-mp02`, `emg-ms03`, `emg-s01`, `emg-s02`, `qsm-commuting-quantum-phases`,
`qsm-nonnormal-thermal-states`, `qsm-infinite-spin-physical-models`,
`qsm-dt-channels`, `qsm-dt-relaxation`, `tgr-c04`, `tgr-et03`, `tgr-pet01`,
`tgr-pet02`, `tgr-pet03`, `tgr-mg01`, `tgr-g01`, `tgr-g02`, `tgr-mhs01`,
`tgr-phs01`, `tgr-phs02`, `tgr-phs03`, and `tgr-phs04`, each with its
`-examples` companion; plus `pthm-emg-matter-symmetry-charges` at manifest
level 5 versus computed level 7. None of these subjects belongs to batch 76.
The shared run-wide level receipt is left for the owner to recompute after the
other batches drain.
