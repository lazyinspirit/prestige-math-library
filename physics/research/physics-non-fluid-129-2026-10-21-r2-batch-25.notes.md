# Batch 25 notes — Compatible discrete Maxwell constraints and finite algorithms

Run: physics-non-fluid-129-2026-10-21-r2  
Role: beta  
Owned pages: emg-fx10 and emg-fx10-examples  
Assigned A/B page count: 1 pair

## Plan and design comparison

The full emg-fx10 design section and the matching plan-spec.json rows agree
on page IDs, titles, category, mathematics-library placement, order 747/748,
companion relation, page prerequisites emg-cp02 and emg-fx09, the four
planned A interfaces, and the B leaf
cex-emg-fx-cfl-discrete-growth. No plan/design conflict was found. The A
page has four items and the B page one, within the 100-item cap. Both pages are
frontmatter-only.

The stored batch dependency graph places batch 25 at level 2 with batch 24 as
its in-run predecessor. This matches the planned emg-fx09 page edge; emg-cp02
is an external page, not a batch in this run. The A interface inventory is
preserved as planned:

- def-emg-fx-cochain-maxwell
- alg-emg-fx-leapfrog-cochains
- prop-emg-fx-discrete-gauss-preservation
- lem-emg-fx-finite-step-termination

The B inventory is cex-emg-fx-cfl-discrete-growth.

## Supplier inspection and readiness

The required current readiness check used loadStep1Record from
tools/physics-support/frontier-snapshot.mjs and step1Decision from
tools/physics-support/step1-decisions.mjs.

- emg-fx09 is batch 24. Its current four A item carriers and complete proofs
  were read: prop-emg-fx-affine-connection-sector,
  def-emg-fx-maxwell-presymplectic-current,
  lem-emg-fx-symplectic-current-boundary, and
  prop-emg-fx-finite-coisotropic-pairing. Their current Step 1 records are
  all ready, with owner:false; this records current authoring inputs only.
  The relevant exact statement is that the fixed-background Maxwell current is
  closed for two smooth normalized variations satisfying
  d★_g dα=d★_g dβ=0, and that an exact gauge variation
  changes it by an exact form whose integral is the boundary flux. The new
  finite cochain model cites this result only as context and proves no gauge
  degeneracy, current closure, or boundary-flux assertion.
- emg-cp02 is an existing external published page. All ten A-item statements
  and proofs were inspected, including the complete proof of
  thm-emg-maxwell-gauss-propagation and its relevant field-strength reduction.
  The exact local theorem
  assumes a C1 Lorentz metric, a C1 field, a C1 transverse normal,
  normal-slot evolution equations, and zero initial Gauss divergences; it
  concludes local continuum constraint propagation. Its proof records a draft
  source-free Cauchy-system definition as context. This pair does not use that
  theorem as a premise and makes no continuum-consistency, numerical-relativity,
  or convergence claim. The external page exists and its precise scope is
  recorded here; no missing carrier was found.
- The missing Step 1 records observed for emg-cp02 items are not current-run
  readiness records because those items are outside this run. Their status or
  pending precheck alone is not treated as a prerequisite defect. No escalation
  is raised for either page.

The new mathematical claims are conditional only on their explicit finite
cochain data and imported finite-dimensional linear-algebra results. No physical
postulate, observation, measurement, or empirical premise is used.

## Inventory, dependencies, and levels

All direct item dependencies are mathematical. The levels recomputed from
in-run logical item suppliers are:

| Item | Home | Direct item dependencies | In-run level |
| --- | --- | --- | ---: |
| def-emg-fx-cochain-maxwell | A | lem-cm-positive-definite-matrix-square-roots (external) | 0 |
| alg-emg-fx-leapfrog-cochains | A | def-emg-fx-cochain-maxwell | 1 |
| prop-emg-fx-discrete-gauss-preservation | A | def-emg-fx-cochain-maxwell; alg-emg-fx-leapfrog-cochains; lem-cm-positive-definite-matrix-square-roots; thm-operator-norm-is-the-largest-singular-value; thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces (last three external) | 2 |
| lem-emg-fx-finite-step-termination | A | def-emg-fx-cochain-maxwell; alg-emg-fx-leapfrog-cochains | 2 |
| cex-emg-fx-cfl-discrete-growth | B | def-emg-fx-cochain-maxwell; alg-emg-fx-leapfrog-cochains; prop-emg-fx-discrete-gauss-preservation | 3 |

alg-emg-fx-leapfrog-cochains records
lem-emg-fx-finite-step-termination in justified_by; the lemma depends on
the algorithm and proves its exact finite execution and inverse solve. This is
the ordinary definition-discharge relation, not an additional supplier for the
algorithm’s logical dependency level. No cycle is introduced.

The sole current-run cross-batch edge is the page edge emg-fx10 to emg-fx09.
It is recorded as verified in the batch cross-dependency array after inspecting
the current page and its actual item interfaces. emg-cp02 is outside the run,
so it is recorded as external context here rather than as an unsupported
cross-batch review row.

## Source harvest

Complete full-text reading, per-result dispositions, local raw hashes and fetch
stamps are in
research/physics-non-fluid-129-2026-10-21-r2-batch-25-sources/source-reading.md
and the coverage JSON. The A page has two independent full treatments, including
Hiptmair’s complete lecture notes. Four page/source records are
fetch-verified: 2 URLs across 2 pages, with no retrieval failures, recovery
retries, drops, or unresolved source-resolution records. The retrieved Hiptmair
incidence identities and Harutyunyan finite-element examples are contextual
sources; the new proofs are local. The coverage checklist returned 0 errors and
one advisory low-yield warning: 2 of 9 harvested A-page results are marked
included. Every other harvested result has a specific inline or out-of-scope
disposition; this warning records material for Alpha to confirm, not a source
drop or proof gap.

## Mathematical scope and limitations

The cochain definition makes explicit the finite spaces, dual coordinate
convention, maps, identities, positive mass maps, state type, continuous
equations and constraints. The algorithm admits rational data only and uses a
fixed-order, no-row-swap exact Gauss–Jordan elimination plus a finite loop. The
termination proof shows each pivot is positive by induction on the SPD Schur
complements, following the planned proof route. The proposition proves the
constraints, the semidiscrete quadratic energy, and the exact staggered
invariant directly. The B example uses the signed incidence matrices of one
tetrahedron; with τσ=4 it has a multiplier of magnitude greater than one
while both constraints stay zero.

The arbitrary finite model is not a theorem about continuum Maxwell solutions.
It contains no mesh family, shape regularity, commuting projections,
approximation bounds, coupled Einstein equations, uniform CFL estimate across
meshes, or floating-point error estimate. The termination result counts rational
arithmetic operations only and does not bound bit growth. Its storage bound
counts every supplied matrix $D_0,D_1,D_2,M_1,M_2$, the computed inverse, and
all $N+1$ stored states, including the $n_0$ and $n_3$ dimensions of the
incidence matrices.

## Scoped checks and readiness

Final scoped checks after the last carrier and manifest edits:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/author-check.mts physics-non-fluid-129-2026-10-21-r2 25` exited 0. Its precheck, rendercheck, content-policy and strict proof-contract gates all passed.
- `node tools/physics-support/proof-layout.mjs` on the five explicit changed item paths checked 11 numbered proof steps with 0 defects.
- Focused `depcheck` on the five items returned 0 errors and 0 warnings; it checked the item dependency closure and both owned pages.
- `content-policy.mjs --manifest-only --authored` reported 5 scoped items, 0 errors and 0 warnings; standalone `proof-contract.mjs --strict` reported 5/5 items, 0 errors and 0 warnings.
- Scoped item levels recomputed as 0, 1, 2, 2, 3 in supplier order, with no errors. The full current batch graph keeps batch 25 at level 2 with `requires: ["24"]`.
- `source-fetch-check --stamp` reported 4/4 page-source records fetch-verified, 0 newly stamped, and 4/4 resolved. `coverage-checklist` reported 2 pages, 11 harvested results, 0 errors and one advisory low-yield warning (2/9 A-page results included); all other harvested results have explicit dispositions.
- The current computed batch-graph input hash is `1df4a2ea11bcbb47570646002d70e329e4c579777e61d8dff0820b0efc92b824`, while the stored scheduling snapshot has `477e4926f913bd61321482f4a18b9a05332cfe3f9495387ffc4f6bffc316b7d9`. The dependency row itself is unchanged; the shared scheduling snapshot is left for its owner to refresh.

`step1-decisions.mjs record` wrote non-owner `ready` records for all five items
with their direct item dependencies. A fresh `loadStep1Record` and
`step1Decision` pass confirmed all five current and closed; the four batch-24
emg-fx09 suppliers also remain current and ready. These records certify
authoring-input readiness only, not independent proof approval.
