# Batch 40 — Covariant phase space and boundary ambiguities

Run: physics-non-fluid-129-2026-10-21-r2; role: beta.

## Scope and plan comparison

Owned pair: gr-fx12-covariant-phase-space and
gr-fx12-covariant-phase-space-examples, category general-relativity,
library physics. The current plan and dispatch agree on page IDs, title,
category, library, A/B pairing, and all four A-page requires:
gr-einstein-and-matter, gr-local-and-global-energy,
hamiltonian-mechanics-and-completely-integrable-systems, and
symplectic-manifolds-moser-stability-and-darboux-weinstein-theory.
The B page requires the A page. The current plan orders the pair at 777/778;
the older detailed design section labels it 8023. The plan controls this
conflict, so the current manifest uses 777/778.

The six-item detailed design inventory is retained: four A-page items and
two B-page examples. Seven additional A-page suppliers were necessary to
define smooth field families, prove the local Poincare homotopy, establish
smooth differentiation of finite-chain integrals, derive the variation
commutator and field-space closedness identities, derive the diffeomorphism
Noether current, and state charge integrability precisely. The finite-chain
integral lemma is proved locally from the imported Jordan Riemann and
finite-chain definitions because its compact-simplex regularity argument is
an actual prerequisite to differentiating the integrated field-space form.
All thirteen item claims are mathematical; they have only mathematical item
prerequisites. The four page prerequisites remain exactly on the A page as
planned. The physical GR pages provide framework context at page level and
are not logical premises for these pure mathematical items.

## Supplier and dependency review

At dispatch, loadStep1Record read 258 current run pages in 129 A/B pairs
with zero item carriers; the twelve originally planned item readiness
records were therefore missing before authoring. This was the expected
pre-authoring state. One additional A-page analytic lemma was added after
checking the actual differentiation-under-integral obligation. Current
step1Decision checks for the published outside suppliers
also returned no run-local Step-1 record; those items are not owned by this
run and their actual published statements and proofs were inspected instead.
No readiness escalation was made on the basis of an absent record for an
outside published item.

The actual current source interfaces inspected were:

* thm-stokes-theorem-for-smooth-singular-chains (published): applies to
  every smooth manifold and arbitrary smooth form on finite smooth singular
  chains. Its full proof reduces to the standard simplex Stokes formula,
  pullback naturality, and finite chain additivity.
* def-integral-of-a-form-over-a-smooth-singular-simplex (published):
  defines each simplex integral by a Jordan-set Riemann integral and proves
  extension independence. The current definition uses finite smooth
  singular three-chains, not an unspecified improper or infinite integral.
* prop-symplectic-reduction-of-a-coisotropic-vector-subspace (published):
  its complete proof establishes the descended nondegenerate form on
  W/W^omega for a finite-dimensional coisotropic vector subspace only.
  It is cited for tangent linear models; it does not supply a smooth
  infinite-dimensional quotient.
* def-symplectic-form-and-symplectic-manifold,
  def-hamiltonian-vector-field-and-hamiltonian-function, and
  def-poisson-bracket-on-a-symplectic-manifold (published): their actual
  interfaces require closedness and nondegeneracy for a symplectic form,
  fix i_X omega = dH, and set
  {F,G}=omega(X_F,X_G)=X_G(F). The assigned definition preserves that sign.
* def-immersion-submersion-and-constant-rank-map (published): the strengthened
  finite-dimensional reduction definition requires an actual surjective
  submersion whose tangent kernel is exactly the presymplectic null space.
* thm-cartans-magic-formula and the exact imported differential-form
  definitions (published): their actual statements apply to smooth forms
  and local flows. They support the local current identity only under the
  explicitly stated covariance premise.

The older local prose inventory listed
thm-gr-density-divergence-and-finite-chain-flux as a prerequisite for the
general current definition and closure proposition. Its actual theorem
requires a time-oriented Lorentzian four-manifold, metric volume form, and a
current of the form i_J vol_g; it does not establish a Stokes identity for
an arbitrary three-form on an arbitrary oriented four-manifold. The current
plan preserves the broader covariant Lagrangian scope and does not declare
that item dependency. The items instead use the exact general Stokes theorem
for finite smooth singular chains and arbitrary forms. This resolves the
proof obligation without narrowing the claim or editing the published
supplier.

Current item levels, recomputed from the actual in-batch dependency graph:

| Level | Items |
|---|---|
| 0 | def-gr-fx-covariant-field-variations, lem-gr-fx-star-shaped-poincare-homotopy, lem-gr-fx-differentiation-under-finite-chain-integral |
| 1 | def-gr-fx-covariant-presymplectic-current |
| 2 | lem-gr-fx-variation-commutator-identity, prop-gr-fx-field-space-closedness, prop-gr-fx-potential-ambiguity, prop-gr-fx-diffeomorphism-current-identity |
| 3 | prop-gr-fx-on-shell-current-closure, def-gr-fx-admissible-phase-reduction |
| 4 | def-gr-fx-surface-charge-integrability, ex-gr-fx12-1, ex-gr-fx12-2 |

No cycles were found. Batch-level dependency level is 0 with no in-run
supplier batches. The cross-batch dependency artifact is therefore an empty
array. Downstream plan observations, including the GR holonomy page and the
thermo-GR Noether-entropy page, are recorded here as interface context rather
than unsupported review rows.

## Scope and limitations

All proofs are conditional mathematical deductions. The diffeomorphism
current identity assumes a natural Lagrangian and an explicit infinitesimal
action; it is not a derivation of the Einstein equations. Local Noether
exactness is proved on star-shaped coordinate patches only. Global charge
existence requires separate cohomological and boundary analysis. A proposed
Hamiltonian charge is integrable only when its field-space one-form is
globally exact on the specified solution space. Nonzero boundary charge
variation is not a null direction. No global infinite-dimensional solution
manifold, quotient, boundary falloff, or asymptotic charge is asserted.
Thermodynamic first-law and entropy interpretations are assigned to the
thermodynamics-and-general-relativity page; topological quantum field theory
quantization is assigned to the quantum-field-theory page. No Hilbert space,
measure, anomaly-free quantization, measurement, or empirical observation is
constructed here.

## Sources and checks

The three full-text source carriers, exact read locators, per-result
dispositions, and fetch stamps are in
research/physics-non-fluid-129-2026-10-21-r2-batch-40.coverage.json and
research/physics-non-fluid-129-2026-10-21-r2-batch-40-sources/source-reading.md.
Each PDF is retained with its full SHA-256 under
research/physics-non-fluid-129-2026-10-21-r2-batch-40-sources/raw/.
Retrieval succeeded on the first attempt for all three sources. There are no
source-resolution drops or unresolved retrieval failures.

### Final scoped checks

* `source-fetch-check --coverage ... --stamp`: **3/3** full-text sources
  verified; no additional fetch was needed.
* `proof-layout.mjs` on the 13 explicitly changed items: **pass**, 31 proof
  steps, zero defects.
* `rendercheck.mjs` on the 13 items and both pages: **pass**, 15 files.
* Strict proof-contract check: **pass**, all 9 proof-bearing items, zero
  errors or warnings. Coverage checklist: **pass**, one A page and 16
  harvested results. Manifest dependency arrays: **pass**, 13 items.
* Scoped dependency calculation: **pass**, 13 items, no cycles, maximum
  level 4. The full-run dependency command reports empty inventories in other
  batches that are still in flight; those unrelated manifests were not
  changed. The scoped manifest, page inventory and item frontmatter agree.
* Scoped `depcheck`, `content-policy --manifest-only --authored`, and
  physics-content validation against the pinned local math snapshots: **pass**.
  The A/B pages and the cross-batch dependency array also match their
  manifests; there are no in-run cross-batch edges for this pair.

### Read-only imported-source finding for owner

The scoped `verifyMathematicsImports` check cannot pass against the current
root math source tree. It reports
`items/thm-invertible-matrix-theorem.md`: the physics copy is at SHA-256
`844a25666aedae99689109d9762f83891c50fbb6f82296b099464d3b8d4fc11e`, which
matches its pinned import receipt, while the read-only root original is now
`1286785cdca44b1faf70f2c24d971d1510c06a1ff97c98f2a2849af423a49d51`. The
current root source adds the explicit hypotheses that $F$ is a field and
$n\ge0$, and replaces an audit date with a repair receipt; its complete proof
block is unchanged from the pinned copy. This theorem lies in the transitive
proof-dependency path from the Stokes supplier used by the finite-chain flux
and potential-ambiguity items. The actual use is for finite-dimensional real
matrices, so the newly explicit hypotheses match the use and the inspected
proof supplies the same argument. This is an import-snapshot reconciliation
for the owner; no imported item or import receipt was edited. The scoped
physics-content check passed against the pinned local snapshot, while the
import-integrity check remains a recorded owner follow-up.

Before readiness recording, `loadStep1Record` showed 258 current pages and
218 run items; the 13 owned items had no Step-1 records. Published suppliers
were checked at their actual inspected statements and proofs. The final
per-item readiness records bind each item and its direct mathematical
dependencies. Post-record `step1Decision` checks returned **ready/current for
13/13 items**. The import-snapshot finding above is retained separately for
owner reconciliation.
