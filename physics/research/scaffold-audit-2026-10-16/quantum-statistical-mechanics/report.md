# Quantum Statistical Mechanics scaffold audit and expansion

This is an owner-directed research audit and authoring supplement for the
Quantum Statistical Mechanics category. It does not certify production items,
physical truth, empirical applicability, or independent acceptance. The original
2026-10-04 report and structural/worker receipts remain intact and continue to
describe the original 139-item handoff.

The current category inventory has 144 proposed interfaces (117 A and 27 B)
across the same 14 A/B page pairs. Five new A proposals close two real
mathematical interfaces: the occupation-space construction is now proved to be
the symmetric/antisymmetric Hilbert Fock construction with actual CCR/CAR
domains, and the finite Gibbs preparation route now has a full conditional
connection to the published sparse-oracle Gibbs-purification algorithm.

## Repairs and additions

The original category already separated finite matrices, trace-class normal
states, and infinite quasi-local spin states. The audit retained those scopes
and checked every argument module in the active QSM scaffold. It also read the
current QFT finite-regulator, CSM Ising/Markov, NRQM tensor/trace, thermodynamics
trace-Gibbs and energy-shell suppliers listed in
[the supplier-consumer map](supplier-consumer-map.json).

The new [Fock development](../../extended-frameworks-2026-10-03/quantum-statistical-mechanics/workers/models-examples/fock-and-occupation.md)
defines the one-particle mode Hilbert space, Hilbert tensor powers, the ordinary
permutation representation, symmetrizing and antisymmetrizing projections, and
the Hilbert direct sums over particle number. It proves normalized occupation
bases for finite or countable modes, identifies the corresponding `ell²`
occupation representations, and gives the actual weighted domains and adjoint
relations for bosonic creation/annihilation. It proves CAR for bounded
fermionic creation/annihilation operators. The expanded diagonal-trace argument
then proves the multiplier domains for energy, number and grand energy, and
proves the bosonic/fermionic trace products under their explicit summability
conditions. Species-to-sector choice remains a physical assumption; no
nonrelativistic spin-statistics theorem is asserted.

The new [finite Gibbs circuit bridge](../../extended-frameworks-2026-10-03/quantum-statistical-mechanics/gibbs-circuit-bridge.md)
defines the normalized Gibbs density and its canonical purification and proves
the reduced density by the finite partial-trace trace pairing. Its algorithm
proposal delegates to the current published `alg-qa-30-sdp-gibbs-purification`
and uses `thm-qa-30-sdp-gibbs-state-error-cost`. A local finite-dimensional
argument transfers successful vector error to reduced trace-distance error.
The result requires the root algorithm's exact sparse-oracle, decoded-matrix,
block-encoding, reference-preparation, shift, precision, inverse/controlled
access and cost data. The bound is conditional on the certified energy-shift
success event. The algorithm approximates a finite Gibbs state; it does not
derive a bath, thermalization, a continuum trace, or an experimental result.

Two definition/proof clarifications repair existing interfaces. The normal
state definition now says that, within this dossier, “normal density state”
means a trace-class density represented by the trace pairing on `B(H)`; it does
not claim an unproved equivalence with every alternate topology-based
definition of normality. The trace-class relative-entropy argument now states
its support condition and exact domain: finite cross-log moment implies finite
entropy and the proved Klein inequality; finite entropy with infinite cross
moment gives `+infinity`; the `infinity - infinity` case is left undefined.
No general infinite-dimensional data-processing or strong-subadditivity result
is inferred from this restricted domain.

The finite-alphabet diagonal state embedding had asserted positivity on the
whole positive cone of a C*-completion while referring only to a square-limit
argument. It now proves exactly the positivity needed by the root C*-state
definition: local `omega(X*X) >= 0` passes to completed elements by continuity
of multiplication and the functional. The functional norm bound and
normalization are also stated explicitly. This avoids assuming an additional
positive-cone approximation result.

The current published finite density and partial-trace definitions and their
trace-pairing, basis-independence, positivity and trace clauses now supply the
finite QSM interfaces. The current published quantum algorithm and error/cost
theorem supply the new computational branch. The exact eight root item IDs,
clauses, statuses, consumers and import state are in the attached map.

## Mathematical and physical scope audit

The finite-dimensional entropy, Klein, Gibbs variational, tensor, partial-trace
and Kubo–Mori arguments remain finite matrix results. The trace-class branch
retains self-adjoint Hamiltonian domains, bounded-factor trace ideal rules,
scalar spectral moments, support conditions and actual trace-class
normalization. In particular `H >= a I` alone never supplies a Gibbs density:
`exp(-beta H)` must actually be trace class. The QFT supplier constructs one
specific finite-real-mode coercive polynomial form realization and proves its
Gibbs trace by oscillator eigenvalue comparison; the QSM use makes no cutoff
removal claim.

The infinite spin branch uses a norm-completed local matrix algebra and
positive normalized algebraic states. It never requires a global density
matrix or infinite Gibbs trace. The finite-range interaction bounds and
van-Hove/translation assumptions are retained. Existence of pressure, KMS
states, and a stationary variational maximizer remain separate conclusions;
the variational maximizer set is not identified with all KMS states. The full
KMS–DLR equivalence and transferred uniqueness/coexistence statements remain
limited to the explicitly diagonal Ising interaction and the checked CSM
hypotheses. The 2D coexistence condition `beta J >= 2` is the conservative
proved sufficient bound, not an exact critical value.

The ideal Bose results remain for the homogeneous quadratic periodic-box model
at fixed positive temperature and fixed mean density in the grand family.
Extensive ground-mode occupation occurs only for spatial dimension `d > 2`;
the ground-density fluctuations in that family do not concentrate at the
excess-density mean. Traps, interactions, BKT behavior, superfluidity,
fixed-number equivalence and material predictions are not supplied.

The response branches keep finite-time unitary response, static Kubo–Mori
susceptibility, discrete trace-class correlation measures, zero-frequency
deltas, and Abel-regularized transforms distinct. The pure-point recurrence
argument rules out generic absolutely integrable dc response in finite
isolated systems. The open-system gap and Green–Kubo results require their
specified finite GKSL detailed-balance model. No time/volume/energy limit is
interchanged without its own convergence hypothesis.

No QSM claim consumes a classical-electromagnetism or Einstein–Maxwell result,
and no curved-spacetime KMS, Hawking-temperature or black-hole-entropy claim is
made. The old GR G6/Q1 source reading remains a nonloadbearing boundary
disposition. Root Hopf–Hecke and braid representation Fock modules are not
identified with physical Hilbert Fock spaces; the relevant finite permutation
representation is constructed in the new local proof. No experimental items,
measurements, counts, uncertainty estimates or empirical premises are added.

## Reading extent

The complete current QSM arguments were read in `state-proofs.md` Q0–Q7 and
B1–B3; `proof-modules.md` I0–I9, I1a, I4a and I5a;
`workers/models-examples/proofs.md` M0–M2, P0 and E1–E8;
`equilibrium-response.md` T0–T6; `detailed-balance-models.md` G0–G5;
`channels-and-generators.md` C0–C5; and `ensemble-bridge.md` Q0–Q6.

The exact current supplier passages read for this audit include NRQM M1/M9;
thermodynamics M7, M32, M33 and L13; classical-statistical-mechanics G2–G4,
G6, G9a, finite-ring example E4, nonadditive example E7 and CTMC construction
D14; and quantum-field-theory IR00–IR02. The current root published finite
quantum-computing density, partial-trace, trace-distance/trace-norm interfaces
and the root published quantum-algorithm Gibbs procedure/error theorem were
read at their exact item text. The source extents above identify claims only;
they do not certify original root or imported proofs beyond their recorded
status.

## Current blockers and preserved evidence

The eight new root quantum-computing/algorithm items are not present in
`physics/research/math-imports.json`. Their current source text is mapped and
consumed as research evidence, but production prerequisite resolution remains
pending Root's import refresh. No imported snapshot was edited and no hash was
computed by this category audit.

The old plan-track pins for `pathway-and-inventory.md`, `prose-scaffold.md`,
`paired-inventory.json` and `supplier-map.json` point to the 2026-10-04
pre-audit versions and are now stale. They remain visible as historical values;
Root owns their rebinding. The old `structural-check.json` proof-file hashes,
the integrating-read records for the edited `state-proofs.md` and
`ensemble-bridge.md`, and the models/examples worker check receipt no longer
bind the expanded current arguments/inventory. Those frozen records were not
rewritten. The old `report.md`, `closure-ledger.json`, specialist worker
receipts and original source-reading records remain historical and do not
certify the five new proposals. The current active QSM supplier map has 68
mapped external suppliers; its historical supplier hashes were not refreshed
here.

The research scaffold has no remaining mathematical proof obligation inside
the stated finite matrix, trace-class Gibbs, bounded finite-range spin, exact
ideal-gas, or finite response claims. The expressly excluded continuum,
interacting thermodynamic-limit, generic KMS/phase, general infinite entropy,
unbounded Lindblad, weak-coupling, ETH and universal dc claims remain
prospective and are not logical suppliers.

## Files changed

- Active category prose, arguments, local inventories, the canonical proposed
  inventory and its supplier/coverage maps under
  `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/`.
- `research/plan-quantum-statistical-mechanics-track.md`.
- This report and `supplier-consumer-map.json`.

No published item, physics import snapshot, shared plan, engine control, frozen
receipt or other physics category was edited. No production build, workflow
gate or test suite was run. A focused read-only JSON/DAG/path/anchor audit
passed: 144 unique items, every direct dependency resolved and supplier-first,
28 pages placing all items exactly once, 117 A/27 B, maximum page size 20, all
argument paths and anchors present, worker/canonical occupation dependencies
agree, 19 active local proposals, and 144 claim-coverage rows. This structural
check validates the research inventory only; it is not mathematical acceptance
or a replacement for Root's import/hash refresh.
