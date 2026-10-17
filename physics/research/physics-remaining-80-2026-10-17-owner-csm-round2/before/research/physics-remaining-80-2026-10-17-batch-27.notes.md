# Batch 27 authoring notes — Finite-range lattice interaction and conditional energy

Run: `physics-remaining-80-2026-10-17`  
Role: beta.  
Owner scope: `csm-gibbs-lattice` (A, order 489) and `csm-gibbs-lattice-examples` (B).  
Category/library: `classical-statistical-mechanics` / `physics`.

## Scope, inventory and plan reconciliation

- The assigned manifest contains 27 A items and 3 B examples. Both pages are
  below the 100-item cap. The B examples are represented in the B page's
  `items` array for dependency and readiness tooling and are rendered in its
  `examples` section.
- The complete design section in
  `research/plan-classical-statistical-mechanics-track.md` L57 was compared
  with `research/plan-spec.json` and the dispatch. The historical design lists
  only `csm-phase-ensembles` as an A-page prerequisite; the controlling task
  and plan-spec also require
  `outer-measure-and-the-caratheodory-extension-theorem` and
  `sigma-algebras-and-borel-sets`. The controlling plan/task requirements were
  followed and all three page prerequisites are present and published.
- The historical source inventory gives `def-csm-gibbs-physical-parameters`
  an incompatible `physical-result` dependency role. Its mathematical inputs
  are represented with the schema-valid `mathematical-premise` role; the
  physical conventions are stated in the item's scope and are not mathematical
  suppliers.
- No plan/spec conflict changes the assigned item inventory or page ownership.

## Supplier status and cross-batch interfaces

- Batch 26's `csm-phase-ensembles` A/B pair is now materialized as a complete
  draft page pair. Its six page-level prerequisites are present:
  `cm-math-canonical`,
  `improper-and-parameter-dependent-multiple-integrals`,
  `td-math-mixture-dynamics-and-shells`,
  `the-lebesgue-integral-and-the-convergence-theorems`,
  `em-potentials-and-gauge`, and
  `cm12-legendre-transformation-and-hamiltonian-mechanics`.
- The current draft postulate
  `post-csm-counting-and-physical-observables` assumes operationally
  indistinguishable particles by declared species, uses
  `m_N^phys = (prod_a N_a! a_0^(dN))^-1 dq dp` in canonical coordinates
  expressed in SI numerical units, takes `a_0 > 0` as the fixed action scale,
  omits the factorial for operationally distinguishable labels, and treats
  expectations only for integrable observables. It explicitly adopts this
  preparation/reference convention; it does not derive particle
  indistinguishability, a preparation mechanism, or a quantum exchange law.
  Its stated dependencies are the phase-space reference definition, the
  statistical-state/observable definition, and `def-cm01-units`. The local
  interacting-equilibrium postulate uses this as a conditional, draft premise;
  it does not report the postulate as a proved theorem.
- The phase-space and statistical-state definitions and counting postulate are
  draft carriers in batch 26. Their inspected statements and hypotheses are
  captured in
  `research/physics-remaining-80-2026-10-17-batch-27.cross-batch-dependencies.json`.
  They were available as current carriers when this batch was completed. The
  49-row cross-batch ledger records 36 direct external item edges, 4 direct
  page edges, the 6 transitive phase-page requirements and the phase-space,
  state and counting interfaces. All direct edges were checked for missing
  records; none are missing. Draft status remains explicit in the ledger.
- The mathematical measure prerequisites are the exact published
  outer-measure/Carathéodory and sigma-algebra/Borel items. The local proofs
  retain their hypotheses and use them only for the stated measure-extension
  and cylinder-measure construction.

## In-run dependency levels

Levels below are computed from logical item dependencies among the current
batch 26 and 27 manifests. External prerequisites do not raise item levels.
The scoped graph has 54 items, maximum level 7, and no cycles or assigned-level
errors.

| Item | Level |
|---|---:|
| `def-csm-finite-range-lattice-interaction` | 0 |
| `def-csm-stable-superstable-continuum-interaction` | 0 |
| `def-csm-gibbs-physical-parameters` | 1 |
| `post-csm-interacting-equilibrium-gibbs` | 3 |
| `lem-csm-finite-gibbs-variational-identity` | 0 |
| `lem-csm-gibbs-response-covariance` | 1 |
| `lem-csm-lattice-product-and-measure-compactness` | 0 |
| `def-csm-lattice-gibbs-specification` | 1 |
| `lem-csm-lattice-specification-consistency` | 2 |
| `thm-csm-lattice-dlr-existence` | 2 |
| `lem-csm-stationary-dlr-construction` | 3 |
| `lem-csm-maximal-coupling-and-heat-bath` | 3 |
| `thm-csm-dobrushin-finite-range-uniqueness` | 4 |
| `lem-csm-ising-influence-bound` | 1 |
| `thm-csm-ising-high-temperature-state` | 5 |
| `thm-csm-lattice-van-hove-pressure` | 1 |
| `lem-csm-stationary-lattice-entropy-energy` | 1 |
| `thm-csm-lattice-dlr-variational-pressure` | 4 |
| `lem-csm-ising-parity-contours` | 1 |
| `lem-csm-peierls-energy-injection` | 2 |
| `thm-csm-ising-low-temperature-coexistence` | 4 |
| `thm-csm-ising-coexistence-pressure-cusp` | 5 |
| `thm-csm-ising-chain-convergent-series` | 0 |
| `lem-csm-chain-markov-bridge` | 1 |
| `thm-csm-chain-dlr-uniqueness` | 3 |
| `pthm-csm-ising-equilibrium-phases` | 6 |
| `pthm-csm-pressure-entropy-reference-units` | 5 |
| `cex-csm-gibbs-marginals-not-free` | 3 |
| `ex-csm-chain-analytic-interacting-model` | 4 |
| `ex-csm-high-low-temperature-regimes` | 7 |

The run-wide item-level calculation reported 104 errors, all outside batch 27;
the assigned batch 27 items have no discrepancy. The shared
`physics-remaining-80-2026-10-17-batch-dependency-levels.json` scheduler file
is stale against the current run inputs and its strict check fails. Its rows
still show batch 26 at level 0 and batch 27 at level 1 requiring batch 26. It
is shared scheduling evidence, so it was left unchanged; this does not alter
the scoped item-level result or the three current page requirements.

## Source reading and retrieval evidence

The A page uses two independent full-text treatments: the complete Friedli–
Velenik book and complete Princeton DLR/Peierls seminar notes. The complete
Ruelle paper was additionally inspected for the stability terminology. The B
page reuses the first two treatments. Exact source locators and item-level
support/dispositions are in the sibling `.coverage.json`.

- Friedli and Velenik, *Statistical Mechanics of Lattice Systems*, complete
  author PDF: <https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf>.
  Inspected Chapter 3, PDF pp. 127–132; Chapter 6, pp. 265–289; and Appendix,
  pp. 329–332.
- Princeton Junior Seminar, *Proofs from the Book: Ising, DLR, Dobrushin and
  Peierls*, complete notes:
  <https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf>.
  Inspected PDF pp. 20–24, 31–43 and 52–55.
- David Ruelle, *Superstable Interactions in Classical Statistical
  Mechanics*, complete paper:
  <https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf>. Inspected journal
  pp. 128–134 (PDF pp. 1–6) and PDF pp. 16–18 for the exact definitions and
  thermodynamic-limit scope.

The coverage ledger contains 21 harvested results, all marked `included`;
the five source records are fetch-verified. The prior failed Ruelle author
index route was replaced in the citation with the inspected official direct
PDF. No source was dropped. `source-fetch-check.mjs --stamp` verified 5/5
source records, recorded 0 new stamps and 0 drops; earlier successful stamps
were reused.

## Completed checks and readiness

Final scoped checks passed on the current item/page content:

- `proof-layout.mjs`: 30 items, 87 numbered steps, 0 defects.
- Normative precheck: 30 files, 26 applicable, 0 failures (four definitions
  are not proof-bearing; the postulate is structurally checked).
- `rendercheck.mjs`: 32 files (30 items and 2 pages), exit 0.
- `content-policy.mjs`: 30 scoped items, 0 errors and 0 warnings.
- Strict proof contracts: 30/30 items, 0 errors and 0 warnings.
- `coverage-checklist.mjs --require-destination`: 2 pages, 21 harvested
  results, 0 errors and 0 warnings.
- Two-batch scoped dependency levels: 54 items, maximum level 7, 0 errors or
  cycles. Batch 27's 30 item labels match the computed levels above.

`step1-decisions.mjs record` records `ready` for all 30 assigned items with
their examined direct dependencies and current item/dependency hashes; no
`--owner` option was used. Readiness means authoring, placement, prerequisites
and contracts are current. It is not independent mathematical approval or
proof acceptance. Independent review remains pending.
