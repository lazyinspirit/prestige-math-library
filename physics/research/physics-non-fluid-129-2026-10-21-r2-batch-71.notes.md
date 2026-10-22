# Batch 71 authoring notes — `qftx-photon-helicity`

Run: `physics-non-fluid-129-2026-10-21-r2`; role: beta.

## Scope and plan reconciliation

The assigned pair is A page `qftx-photon-helicity` (order 839) and B page
`qftx-photon-helicity-examples` (order 840), category
`quantum-field-theory-mathematics`, library `mathematics`. The detailed design
at `research/plan-quantum-field-theory-frontier-expansion-track.md` §1421 and
`research/plan-spec.json` agree on the page IDs, title, order, category,
library, pairing, and A-page requirements `qft-mg01` and `qft-mf01`; B requires
the A page. The plan-spec item arrays were empty in the pre-authoring
scaffold, so the designed items were materialized in the manifest. This is
not a scope conflict. The requested owner-direction file
`research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md`
was absent when checked.

The detailed design's three planned A items and one B example are present.
One local A-page lemma, `lem-qftx-photon-invariant-measure-isometry`, was
added first to reconcile the design's mass-shell measure
`d^3 k/(2|k|)` with the existing published transverse-space supplier's
`d^3 k` realization. Its explicit multiplier `Wf=f/sqrt(2|k|)` is unitary;
the rotation theorem separately proves that `W` intertwines the rotation
actions. No published supplier was changed. The A page has four items and the
B page one, both below the 100-item cap.

The design uses the real Berry connection `A_sigma=-i e_sigma^dagger de_sigma`
and its flux `+2 sigma`. Palmerduca and Qin use the skew-Hermitian connection
`omega=e_sigma^dagger de_sigma=i A_sigma` and the Chern-Weil convention
`c1=(i/2pi) integral Omega`, giving `c1=-2 sigma`. The proposition states and
derives both convention-dependent values, and uses only their nonvanishing
for the obstruction. It keeps the rank-two transverse complex bundle distinct
from either helicity line. No design claim was weakened.

## Supplier and dependency review

The items are mathematical (`domain: mathematics`, `library: mathematics`,
`physical_scope: null`) and their item dependencies have
`mathematical-premise` roles. Direct published supplier statements and full
proofs were inspected, including the transverse-space and Fock pairing
definitions, the density and polar-measure results, smooth-bump construction,
Choice and Countable Choice interfaces, Stone's theorem, compactness and
uniform-continuity results, the sphere-area lemma, and the general Stokes
theorem. Hypotheses and conventions are stated at use: the Hilbert suppliers
require Countable Choice; the rotation theorem adopts Choice to obtain it and
to apply Stone's theorem; the Stokes argument assumes Countable Choice.

The local density proof uses componentwise `L^2` approximation, cuts off a
shrinking ball around the omitted momentum apex, projects by `P`, then pulls
back by `W^{-1}`. The cutoff error follows from the polar-coordinate volume
formula. The rotation proof establishes strong continuity on the common
dense domain before extending by unitarity, and identifies the total
generator only on that domain as the restriction of the Stone generator. It
makes no essential-self-adjointness claim for that restriction. The Berry
proof computes both pole gauges and their transition, then proves the
no-section result by Stokes. The B example checks the fixed Cartesian vector
at `k=kappa e1` and explicitly does not rule out every abstract Hilbert-space
tensor factorization.

The assigned inventory, direct dependencies, and computed levels are:

| Level | Item |
|---|---|
| 0 | `lem-qftx-photon-invariant-measure-isometry` |
| 1 | `def-qftx-photon-helicity-bundle` |
| 2 | `thm-qftx-photon-rotations-helicity`, `prop-qftx-helicity-chern-obstruction` |
| 3 | `cex-qftx-fixed-polarization-tensor-factor` |

The scoped graph has no cycles or level errors. The scheduling file records
batch 71 at level 0 with `requires: []`; the empty cross-batch dependency array
is correct because this pair has no item or page edge to another batch in this
run. The declared A-page requirements are external page context. The scoped
dependency checker inspected the five items and their current prerequisite
closure (1,882 items); the Step 1 records hash each item's actual dependency
closure and declared examined dependencies.

## Source harvest and disposition

The complete URLs, locators, supported item IDs, and dispositions for all
nine harvested results are recorded in
`research/physics-non-fluid-129-2026-10-21-r2-batch-71.coverage.json`.
Three independent full-text treatments were retrieved and inspected:

- David Tong, *Quantum Field Theory*, complete author-hosted Chapter 6 HTML,
  §6.2.1, equations 6.511–6.523. It supports the transverse fibers and
  projector; the local items give the weighted-space and helicity proofs.
- Eric Palmerduca and Hong Qin, *Photon topology*, complete 66-page PDF,
  §§II–III, including equations 5–15, Definition 14, Lemma 15, Theorem 18,
  and equations 59–63. It supports the mass-shell convention, line bundles,
  Chern calculation, and no-global-frame consequence.
- Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea
  Aiello, *Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in
  Free Space*, complete 8-page PDF, §I equation 1 and transversality
  discussion, and §II equations 6–9. Its `hbar=c=1` convention is not silently
  imported.

Retrieval succeeded on the first attempt for all three sources; there were no
failed-source recoveries or drops, so no `source_resolution` failure records
apply. Coverage reports nine harvested results, zero errors, and zero
warnings. `source-fetch-check --stamp` initially verified and stamped all
three sources; the final check verified 3/3 current stamps and 3/3 resolved
sources.

## Checks and readiness

- Final explicit `proof-layout.mjs` check: five changed items, 27 numbered
  steps, zero defects.
- Final scoped precheck: 5/5 pass. Rendercheck: five items and two pages,
  zero errors or warnings. Strict proof-contract check: 5/5 items, zero errors
  or warnings.
- Scoped dependency check: five assigned items and their prerequisite
  closure, zero errors or warnings. Forward-reference and extcheck also pass
  with zero errors or warnings. Declared item levels match the computed
  `0, 1, 2, 2, 3` graph.
- Coverage checklist: one A page, nine results, zero errors or warnings.
  Content policy checks all five items with zero errors or warnings.
- `loadStep1Record` and `step1Decision` showed the five records missing before
  authoring. All five are now recorded `ready`, non-owner, and hash-current;
  the dependencies examined are listed in each record. These are authoring
  readiness records, not independent proof approvals.
- The run-wide batch-level checker reports the shared scheduling file stale
  and asks for recomputation. The run-wide item-level checker encounters many
  other batches' intentionally empty scaffold inventories. Neither issue is
  in batch 71: the assigned graph was checked independently and passes. The
  shared scheduling file and other batches were left untouched for the owner
  join after the run is drained.
