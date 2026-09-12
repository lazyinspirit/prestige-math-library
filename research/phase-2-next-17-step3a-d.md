# Phase 2 next 17 — Step 3a scope review, group d

Run: `phase-2-next-17`  
Batches: 5, 6, 7  
Role: scope review only; no item-level proof approval or owner decision is made here.

## Evidence reviewed

I read the current A/B manifests, coverage files, construction notes, current
plan objects, scope ledger, controlling prose sections AT-7, AT-8, AT-12,
DG-17 and DG-20, the batch and unified dependency records, and the current
owner Step-1 decisions. The five pairs contain 209 planned items. Their 18
fetch-verified source records contain 117 harvested-result dispositions;
`coverage-checklist --require-destination` reports no errors or warnings, and
`manifest-deps` reports no errors.

The owner has already applied AT-8's missing direct requirement on
`simplicial-subdivision-and-simplicial-approximation` and recorded the two
affected items ready. The owner also recorded DG-17's wedge/cup comparison and
its AT-7/AT-8 consumers as in-run authoring obligations rather than missing
scope. The remaining open batch-7 dependency rows require the earlier pairs to
be authored and approved before DG-17; they are sequencing records, not scope
omissions.

## Scope decisions

### `cup-cap-cross-products-and-cohomology-rings` — sufficient

The 17-item A page covers Alexander--Whitney/Eilenberg--Zilber comparison,
cochain cup products and their descent, the cohomology ring, naturality,
associativity and graded commutativity, excisive relative cup and cap products
with signs and projection formulas, the multiplicative Kunneth theorem, cup
length, and suspension vanishing. The prerequisite cohomology page supplies the
chain cross product and additive external-product interfaces omitted locally.
The eight B items test torus, surface, real and complex projective-space rings,
cap signs, equal groups with unequal rings, coefficient-ring necessity, and
failure of strict cochain commutativity. Later characteristic-class operations
belong to AT-9, so their exclusion is a clean boundary rather than a gap.

### `orientations-poincare-lefschetz-and-alexander-duality` — sufficient

The 31-item A page covers topological manifolds and local homology, orientation
systems and general coefficient rings, compact orientation and fundamental
classes, noncompact top homology, compactly supported cohomology, the complete
local-to-global cap-duality spine, closed and boundary degree interfaces,
collars and relative fundamental classes, ordinary and fully relative
Poincare--Lefschetz duality, the ENR reduction for singular Alexander duality,
Jordan--Brouwer, invariance of domain, and the Hopf-trace/Lefschetz fixed-point
application. Its ten B items exercise orientable, nonorientable, noncompact,
boundary, Alexander and Lefschetz cases. Twisted duality is assigned to AT-23,
and arbitrary compacta in Alexander duality are correctly deferred to the
later Cech interface. The owner-applied simplicial prerequisite closes the only
page-level scope defect found during construction.

### `hurewicz-whitehead-freudenthal-and-cw-approximation` — sufficient

The 17-item A page supplies cellular and CW approximation, absolute and
relative Hurewicz comparison, homotopy excision, explicit homotopy pushout and
pullback models, Blakers--Massey, Freudenthal, weak equivalences, and a
cell-by-cell Whitehead proof. The design's sphere-degree classification is
present through the earlier published
`thm-based-sphere-maps-are-classified-by-geometric-degree`, while the local
homotopy-(co)limit definition is a justified enrichment. Six companion items
exercise first nonzero homotopy groups, the stable range, the simply connected
homology criterion, and both principal hypothesis failures. The general
fundamental-group-action form of relative Hurewicz belongs with local
coefficients, and stable spectra follow on AT-21.

### `the-de-rham-theorem-and-degree` — sufficient

The 45-item A page contains the full smooth-simplex integration and Stokes
interface, local-to-global Mayer--Vietoris comparison including connector
compatibility, smooth/continuous singular comparison, the explicit wedge/cup
compatibility obligation and graded-algebra de Rham theorem, compactly
supported top cohomology, proper pullback, proper-map degree, signed
regular-value formula, comparison with homological degree, composition,
proper-homotopy invariance, and standard degree computations. Its twelve B
items test simplex signs, local and angular classes, connectors, normalized
compactly supported forms, coverings, cancellation of local signs, and
properness. Poincare duality remains correctly supplied by AT-8 rather than
being duplicated here; the sheaf/Cech proof is an alternate route, not missing
subject matter.

### `geodesics-the-exponential-map-completeness-and-hopf-rinow` — sufficient

The 51-item A page distinguishes affine geodesics, local minimization,
exponential maps and global completeness as promised. It covers the spray and
maximal-flow construction, smooth dependence, exponential domain and normal
coordinates, injectivity radius, energy/length variation, Gauss's lemma,
radial and strongly convex minimization, continuation, all Hopf--Rinow
equivalences, proper-length consequences, products, local isometries, and
finite-time escape. The leading boundaryless convention repairs an important
scope ambiguity. Twelve companion items range over Euclidean, spherical,
product, hyperbolic, flat quotient and incomplete examples, including zero
global injectivity radius on a complete manifold. Jacobi fields, conjugate
points and the cut locus are assigned to DG-22; comparison geometry and
Cartan--Hadamard to DG-23; the covering conclusion for complete local
isometries remains at the declared covering-space seam.

## Non-scope warning

The current published page
`singular-cohomology-and-coefficient-theorems` names
`def-kronecker-evaluation-pairing`, but that item and its `justified_by` lemma
`lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives`
still have `status: draft` and `pipeline_run: phase-2-next-20`. This is a
publication-state/dependency defect relevant to the eventual closed-manifold
degree comparison, not an omission from DG-17's planned subject. This scope
review does not approve or repair it.

No pair needs enrichment or merger on scope grounds. No mathematical scope
uncertainty remains.
