# Published consumer → prerequisite supplier ledger

This ledger separates the three owner-defined phases:

1. repair prose scaffolds;
2. build every and only unpublished A/B pair in the prerequisite closure of a
   published consumer repair;
3. repair the published consumers after that closure is published.

Published pages and items are read-only during Phases 1 and 2. “Direct” means
the Phase-3 item will cite the supplier. “Transitive” means the item depends on
a direct consumer and must be included in the Phase-3 impact review. Page-level
prerequisite closure will be recomputed from the reconciled `plan-spec.json`
before Phase 2; this file does not waive a supplier's own prerequisites.

**Live invariant:** before another category audit is dispatched after a
scaffold lands, add every new or repaired planned supplier, its Phase-2
eligibility, every direct published consumer, and the complete transitive
published impact cone here. Reconcile changed suppliers against all earlier
entries immediately; never defer ledger maintenance to the end of a wave.

The current executable Phase-2 pair closure and its publication-sensitive
readiness states are recorded in `research/phase-2-build-manifest.md`. Update
that manifest whenever this ledger, `research/plan-spec.json`, or page
publication status changes.

**Reconciliation checkpoint (2026-09-08):** Differential Geometry, PDE,
Fourier Analysis, Functional Analysis, Differential Topology, Measure Theory,
Abstract Algebra, Algebraic Geometry, Category Theory, Algebraic Topology,
Commutative Algebra, Combinatorics, Complex Analysis, Computability Theory,
Foundations/Set Theory, Linear Algebra, and Lie Theory are landed and
reconciled below. Number Theory and Group Theory are also landed and reconciled
below. Probability Theory and Real Analysis are also landed and reconciled
below. Representation Theory of Groups, Scheme Theory, and Topology are also
landed and reconciled below. All included category audits are now ledgered;
future integration changes must update this ledger in the same transaction.

**Plan-integration checkpoint (2026-09-08):** `research/plan-spec.json` now
registers 65 audit-added A/B pairs (130 empty page shells) across 18 included
categories. All have reciprocal companions, collision-free orders, strictly
earlier A-page prerequisite arrays, and singleton B requirements. Twenty-six
are direct new-pair Phase-2 roots: two PDE, two Fourier, two Functional
Analysis, two Measure Theory, one Abstract Algebra, one Algebraic Geometry,
one Algebraic Topology, one Combinatorics, five Group Theory, one Lie Theory,
one finite-group Representation Theory, five Computability Theory, and two
Foundations replacement pairs. The other 39 are planned-only or may enter
Phase 2 only through a root's prerequisite closure. Their exact item
inventories and impact classes remain binding in the category sections below
until workflow hydration.

The validator passes with 1,616 pages and 719 empty planned pages. No included
empty A page requires a B page; the three remaining empty A-to-B edges are all
inside excluded Homological Algebra. The Algebraic Geometry, Complex Analysis,
Group Theory, and Foundations replacement designs are registered. The two new
Foundations A-page closures have zero direct or transitive path to
`deferred-set-theory-beyond-choice`. Published SET-6, GT-22, and GT-23 remain
unchanged; their documented prerequisite cutovers are Phase 3. No published
Phase-3 edit has been applied.

## Differential geometry

No new DG A/B pair identified by this audit directly supplies a currently
published consumer. DG-17M and the relocated RG-18 supply planned pages.

Phase-3 local suppliers to add inside the published DG-1 A page:

- `lem-a-topological-manifold-has-a-countable-topology-detecting-family-of-coordinate-bumps`
- `thm-a-topological-manifold-has-an-explicit-compatible-metric`

Direct published consumers:

- `thm-topological-manifolds-are-metrizable-and-paracompact` —
  `smooth-manifolds-and-smooth-maps`

Transitive published consumers:

- `rem-manifold-conventions-and-the-role-of-second-countability` —
  `smooth-manifolds-and-smooth-maps`

Separate Phase-3 proof-only repair, with no new A/B supplier:
`thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic` on
`whitney-embedding-tubular-neighbourhoods-and-approximation`.

## PDE

### `analytic-majorants-and-the-cauchy-kovalevskaya-theorem`

Phase-2 eligible: yes.

Direct published consumers, both on
`quasilinear-characteristics-and-cauchy-kovalevskaya`:

- `rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem`
- `rem-cauchy-kovalevskaya-proof-boundary`

Exact item edges to add in Phase 3:

| planned supplier item | published consumer |
|---|---|
| `thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem` | `rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem` |
| same | `rem-cauchy-kovalevskaya-proof-boundary` |

Current transitive published impact beyond those two direct consumers: zero.
The first direct consumer is itself cited by the second; neither reaches any
additional published item.

### `euclidean-surface-measure-divergence-and-green-identities`

Phase-2 eligible: yes.

Direct published consumers:

- `lem-radial-derivative-of-a-spherical-average` —
  `harmonic-functions-and-mean-values-in-rn`

Exact Phase-3 edge: planned
`thm-divergence-theorem-for-bounded-c-one-euclidean-domains` → published
`lem-radial-derivative-of-a-spherical-average`.

Current transitive impact cone:

- `thm-spherical-mean-value-property-for-harmonic-functions`
- `cor-ball-mean-value-property-for-harmonic-functions`
- `thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic`
- `thm-weyl-lemma-for-the-laplacian`
- `cor-locally-integrable-weakly-harmonic-functions-are-smooth`
- `lem-derivatives-of-harmonic-functions-are-harmonic`
- `lem-classical-subharmonic-mean-value-inequalities`
- `thm-strong-maximum-principle-for-classical-subharmonic-functions`
- `lem-smooth-sphere-data-have-a-harmonic-replacement`
- `cor-entire-harmonic-functions-with-bounded-gradient-are-affine`
- `cor-removable-singularity-for-bounded-harmonic-functions`
- `lem-derivative-estimate-proof-of-one-sided-harmonic-liouville`
- `thm-harnack-inequality-on-a-ball`
- `thm-strong-maximum-principle-for-harmonic-functions`
- `cor-harnack-inequality-on-compact-subsets`
- `thm-liouville-theorem-for-bounded-harmonic-functions`
- `cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes`
- `rem-maximum-principles-need-domain-and-boundary-hypotheses`
- `thm-harnack-convergence-principle`
- `cor-positive-entire-harmonic-functions-are-constant`
- `ex-harnack-constant-from-the-poisson-kernel-ratio`
- `cex-unbounded-punctured-harmonic-singularity-is-not-removable`
- `cex-strong-maximum-principle-needs-connectedness`
- `ex-subharmonic-quartic-and-harmonic-saddle`
- `ex-distributional-harmonicity-removes-an-apparent-corner`
- `cex-liouville-needs-one-sided-boundedness`

The Weyl-lemma proof also needs two Phase-3 local lemmas recorded in the PDE
scaffold; they are not separate Phase-2 A/B pairs.

## Fourier analysis

### `kolmogorov-block-construction-and-almost-everywhere-divergence`

Phase-2 eligible: yes.

Direct published consumers on the FR-5 A/B pair:

- `rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima`
- `rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere`
- `rem-lone-fourier-series-can-diverge-almost-everywhere`
- `rem-the-lone-endpoint-is-excluded-from-carleson-hunt`

Exact planned-item mapping:

| planned supplier item | published consumer |
|---|---|
| `lem-kolmogorov-block-polynomial-with-large-partial-sums` | `rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima` |
| `thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere` | `rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere` |
| same | `rem-lone-fourier-series-can-diverge-almost-everywhere` |
| same | `rem-the-lone-endpoint-is-excluded-from-carleson-hunt` |

Current transitive published impact: zero. The four direct consumers have no
other published item consumer in the repository graph.

### `carleson-hunt-time-frequency-theorem`

Phase-2 eligible: yes.

Direct published consumers on the FR-5 A/B pair:

- `rem-carleson-hunt-almost-everywhere-convergence`
- `cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one`
- `rem-proof-cost-of-the-carleson-hunt-theorem`
- `rem-lone-fourier-series-can-diverge-almost-everywhere`
- `rem-the-lone-endpoint-is-excluded-from-carleson-hunt`

Exact planned-item mapping:

| planned supplier item | published consumer |
|---|---|
| `thm-carleson-hunt-maximal-inequality-on-the-torus` | `rem-carleson-hunt-almost-everywhere-convergence` |
| same | `lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence` |
| same | `cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one` |
| same | `rem-lone-fourier-series-can-diverge-almost-everywhere` |
| same | `rem-the-lone-endpoint-is-excluded-from-carleson-hunt` |
| FR-4C proof-spine items 1–10 | `rem-proof-cost-of-the-carleson-hunt-theorem` |

The closure lemma in the second row is already published on FR-5 and stays
there; FR-4C does not duplicate its stable ID during Phase 2.

Current transitive published impact: zero. The six distinct direct consumers
have no other published item consumer in the repository graph.

### `banach-algebras-spectrum-and-holomorphic-functional-calculus`

This is an existing unpublished FA pair, not a newly invented Fourier pair.
Phase-2 eligible: yes, because FR-3 will consume its maximal-ideal and
holomorphic-calculus interfaces.

Direct published consumers on `absolute-convergence-and-the-wiener-algebra`:

- `thm-wiener-lemma-for-absolutely-convergent-fourier-series`
- `cor-holomorphic-functional-calculus-in-the-wiener-algebra`

Exact planned-item mapping:

| planned supplier item | published consumer |
|---|---|
| `thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra` | `thm-wiener-lemma-for-absolutely-convergent-fourier-series` |
| `thm-holomorphic-functional-calculus-homomorphism` | `cor-holomorphic-functional-calculus-in-the-wiener-algebra` |

Current transitive published impact: zero. Neither direct consumer has another
published item consumer in the repository graph.

FR-13 Hardy–Littlewood–Sobolev and FR-15 character-group foundations currently
have only planned consumers, so they are not Phase-2 roots. They may enter
Phase 2 only if required transitively by one of the eligible pairs above.

## Functional analysis

### `norming-and-separation-under-hahn-banach`

Phase-2 eligible: yes.

Direct published consumers:

- `thm-hahn-banach-norm-preserving-extension`
- `thm-complex-hahn-banach-norm-preserving-extension`
- `thm-dual-norms-every-vector`
- `cor-dual-separates-points`
- `cor-norm-recovered-from-the-dual-unit-ball`
- `thm-norm-preserving-extension-from-any-subspace`
- `thm-separation-of-an-open-convex-set-and-a-point`
- `lem-transpose-is-bounded-and-has-the-same-norm`
- `lem-elementary-kernel-range-annihilator-identities`
- `thm-canonical-bidual-map-is-an-isometry`

The first six are on `the-analytic-hahn-banach-theorem`; the seventh is on
`geometric-hahn-banach-and-convex-separation`; the final three are on
`dual-spaces-adjoint-operators-and-annihilators`.

Exact planned-item mapping:

| planned supplier item | published consumer |
|---|---|
| `thm-relative-hahn-banach-norm-preserving-extension` | `thm-hahn-banach-norm-preserving-extension` |
| same | `thm-complex-hahn-banach-norm-preserving-extension` |
| same | `thm-norm-preserving-extension-from-any-subspace` |
| `cor-relative-hahn-banach-dual-norming` | `thm-dual-norms-every-vector` |
| same | `cor-dual-separates-points` |
| same | `cor-norm-recovered-from-the-dual-unit-ball` |
| same | `lem-transpose-is-bounded-and-has-the-same-norm` |
| same | `lem-elementary-kernel-range-annihilator-identities` |
| `thm-relative-hahn-banach-geometric-separation` | `thm-separation-of-an-open-convex-set-and-a-point` |
| `cor-relative-hahn-banach-bidual-isometry` | `thm-canonical-bidual-map-is-an-isometry` |

Current transitive published impact (30 distinct items), grouped by home page:

- `dual-spaces-adjoint-operators-and-annihilators`:
  `cor-dense-range-iff-transpose-is-injective`,
  `cor-distance-to-annihilator-is-restriction-norm`,
  `cor-distance-to-subspace-by-annihilating-functionals`,
  `cor-transpose-preserves-invertibility`, `def-reflexive-banach-space`,
  `lem-canonical-map-is-natural`,
  `lem-finite-evaluations-separate-from-a-dual-subspace`,
  `lem-transpose-lower-bound-gives-image-ball-density`,
  `lem-transpose-range-membership-by-domination`,
  `thm-banach-closed-range-theorem`,
  `thm-bipolar-closure-for-linear-subspaces`,
  `thm-bounded-below-iff-transpose-is-surjective`,
  `thm-dual-of-a-closed-subspace-is-a-dual-quotient`,
  `thm-kernel-range-annihilator-identities`, and
  `thm-surjective-iff-transpose-is-bounded-below`.
- `dual-spaces-adjoint-operators-and-annihilators-examples`:
  `cex-canonical-bidual-map-need-not-be-surjective`.
- `geometric-hahn-banach-and-convex-separation`:
  `cor-annihilator-detects-closure`,
  `cor-closed-convex-set-is-an-intersection-of-closed-half-spaces`,
  `cor-density-characterised-by-annihilator-zero`,
  `cor-finite-dimensional-subspaces-are-complemented`,
  `thm-closed-hyperplanes-are-kernels-of-nonzero-functionals`,
  `thm-geometric-hahn-banach-for-subspaces`,
  `thm-mazur-weak-and-norm-closure-of-convex-sets`,
  `thm-separation-of-disjoint-convex-sets-one-open`, and
  `thm-strong-separation-of-closed-and-compact-convex-sets`.
- `geometric-hahn-banach-and-convex-separation-examples`:
  `ex-distance-to-a-subspace-via-annihilating-functionals` and
  `rem-two-results-called-mazurs-lemma`.
- `the-analytic-hahn-banach-theorem-examples`:
  `cex-hahn-banach-extension-need-not-be-unique`,
  `ex-many-extensions-from-a-codimension-one-subspace`, and
  `ex-norming-functionals-in-lp-from-the-measure-duality-page`.

The other four new FA pairs—sequential uniform boundedness, locally convex
separation, square-integrable Hilbert–Schmidt kernels, and Fredholm
determinants/Lidskii—currently have only planned consumers. They are not
Phase-2 roots, but may enter the Phase-2 prerequisite closure of another
eligible supplier.

The bounded-operator within-page reorder and the five extcheck findings are
Phase-3 metadata/proof repairs with no separate A/B supplier.

## Differential topology

### `banach-space-differential-calculus-and-banach-manifolds`

Phase-2 eligible: yes. This is an FA-owned pair required by published DT-4.

Direct published consumers on
`stable-unstable-manifolds-and-morse-smale-transversality`:

- `thm-sard-smale-residual-regular-values-for-fredholm-maps`
- `lem-universal-metric-trajectory-projection-is-fredholm`

Exact planned-item mapping required by the deferred repairs:

| planned supplier item | published consumer |
|---|---|
| `def-countable-base-banach-manifold-and-smooth-map` | `thm-sard-smale-residual-regular-values-for-fredholm-maps` |
| `def-fredholm-map-between-banach-manifolds` | same |
| `lem-local-finite-dimensional-reduction-for-a-fredholm-map` | same |
| `thm-regular-value-theorem-for-banach-manifolds` | same |
| `thm-implicit-function-theorem-for-banach-spaces` | `lem-universal-metric-trajectory-projection-is-fredholm` |
| `def-smooth-banach-vector-bundle-and-section` | same |
| `thm-a-transverse-banach-bundle-section-has-a-split-zero-submanifold` | same |
| `def-fredholm-map-between-banach-manifolds` | same |

Current transitive impact cone:

- `lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics`
- `thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function`
- `rem-morse-smale-residuality-does-not-assert-simultaneous-genericity-for-all-data`

The linearized-flow theorem needs new DT-4 local Fredholm lemmas in Phase 3;
those lemmas then join the same cone.

### `riemannian-metrics-length-distance-and-volume` and
`connections-levi-civita-and-parallel-transport`

These are existing unpublished DG-18/DG-19 pairs. Phase-2 eligible: yes,
because published DT-1 and DT-3 must replace duplicated DG material with their
interfaces.

Direct published consumers:

- `lem-critical-hessian-agrees-with-the-levi-civita-hessian`
- `def-negative-gradient-trajectory-of-a-morse-function`
- `lem-adapted-descending-field-near-a-compact-morse-band`
- `lem-negative-gradient-energy-identity`
- `lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time`
- `lem-riemannian-gradient-vanishes-exactly-at-critical-points`

Exact planned-item mapping required by the ownership cutover:

| planned supplier item | published consumer |
|---|---|
| DG-18 `def-riemannian-gradient` | `lem-critical-hessian-agrees-with-the-levi-civita-hessian` |
| DG-18 `prop-gradient-hessian-and-divergence-connection-formulas` | same |
| DG-19 `def-levi-civita-connection` | same |
| DG-19 `thm-fundamental-theorem-of-riemannian-geometry` | same |
| DG-18 `def-riemannian-gradient` | `def-negative-gradient-trajectory-of-a-morse-function` |
| same | `lem-adapted-descending-field-near-a-compact-morse-band` |
| same | `lem-negative-gradient-energy-identity` |
| same | `lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time` |
| same | `lem-riemannian-gradient-vanishes-exactly-at-critical-points` |
| DG-18 `prop-the-gradient-is-characterized-by-inner-products` | the preceding five gradient consumers as used in their proofs |

Current transitive impact cone:

- `def-morse-trajectory-from-p-to-q`
- `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant`
- `prop-proper-morse-slabs-give-complete-connecting-trajectories`
- `cor-unstable-disk-is-the-handle-core`
- `lem-gradient-flow-identifies-the-local-and-global-attaching-regions`
- `prop-simultaneous-attachment-at-a-morse-critical-value`
- `cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function`
- `lem-a-limit-point-of-a-gradient-trajectory-is-critical`
- `lem-morse-trajectories-have-positive-energy-drop`
- `cor-regular-sublevels-are-diffeomorphic`
- `prop-deformation-lemma-for-a-critical-point-free-slab`
- `thm-regular-interval-diffeomorphism`
- `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits`
- `rem-noncompact-flow-completeness-is-an-extra-hypothesis`
- `cor-one-critical-point-cell-attachment-homotopy-type`
- `thm-one-critical-point-handle-attachment`
- `ex-simultaneous-handles-at-a-repeated-critical-value`
- `cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits`
- `cex-a-critical-point-free-noncompact-band-need-not-be-a-global-product`
- `lem-local-morse-sublevel-pair-is-a-handle-pair`
- `rem-compact-critical-band-is-the-local-handle-theorem-hypothesis`
- `cex-an-index-one-moduli-space-can-be-infinite-without-compactness`
- `cor-relative-homology-of-a-single-handle-pair`
- `ex-sublevels-of-height-on-the-sphere`
- `ex-torus-from-one-handle-of-each-index`
- `ex-relative-homology-of-a-handle-by-excision`

AT-21, AT-22, and DG-38 currently supply only planned DT pages and are not
Phase-2 roots unless they enter another eligible supplier's prerequisite
closure.

Other published DT defects—global stable-manifold parametrization, compact
critical-point persistence, choice-cost annotations, and local Fredholm/Sard–
Smale completion—need Phase-3 local lemmas or proof amendments, not standalone
Phase-2 pairs.

## Measure theory

### `complex-lp-spaces-and-test-function-conventions`

Phase-2 eligible: yes.

Direct published consumer:

- `thm-riesz-thorin-interpolation` —
  `the-maximal-function-and-lebesgue-differentiation`

Exact planned-item edges: `def-complex-lp-and-euclidean-test-function-conventions`,
`thm-complex-holder-minkowski-and-the-quotient-norm`,
`thm-complex-lp-completeness-and-almost-everywhere-subsequences`, and
`lem-complex-lq-norm-from-finite-simple-dual-tests` → published
`thm-riesz-thorin-interpolation`.

There is no current published transitive consumer of that theorem. The theorem
also needs the later three-lines interface; its final home/order must be
reconciled before Phase 2 so Phase 3 does not create a forward edge.

### `complex-riesz-thorin-endpoint-interpolation`

Phase-2 eligible: yes. The repaired scaffold places this pair after the
complex-analysis three-lines page and gives it a new finite-simple-core
interpolation lemma. The published `thm-riesz-thorin-interpolation` is its direct
semantic consumer. Phase 2 publishes the new pair without duplicating that
stable ID; Phase 3 atomically moves and repairs the stable theorem onto the new
A page after the core lemma. This creates neither a temporary forward dependency
nor two items with the same ID. No other current published item consumes this
pair directly.

Exact planned-item edge: `lem-riesz-thorin-bound-on-the-finite-simple-core` →
published `thm-riesz-thorin-interpolation`.

MT-21a–MT-23 have no current published consumers. The four Measure Theory
extcheck findings and MT-4's missing `def-metric-compactness` declaration are
Phase-3-only repairs unless a later audit identifies a new supplier pair.

## Abstract algebra

### `finite-averaging-and-character-theory-prerequisites`

Phase-2 eligible: yes. Add its A/B pages at 144.2/144.4 before Maschke. The B
page is a leaf. Eleven distinct published items directly consume its nine
lemmas (thirteen supplier-to-consumer edges):

| new supplier lemma | published direct consumer |
|---|---|
| `lem-characteristic-divisibility-and-invertibility-of-a-natural-scalar-in-a-field` | `thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order` |
| same | `thm-augmentation-ideal-has-no-complement-when-char-k-divides-group-order` |
| `lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice` | `thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order` |
| `lem-trace-of-an-idempotent-is-the-dimension-of-its-image` | `lem-averaging-operator-projects-onto-the-fixed-subspace` |
| `lem-indicator-basis-for-invariant-functions-on-a-finite-orbit-partition` | `def-class-function-and-the-space-of-complex-class-functions` |
| same | `thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions` |
| same | `thm-second-column-orthogonality-relation-for-irreducible-complex-characters` |
| `lem-standard-hermitian-form-on-functions-on-a-nonempty-finite-set-is-an-inner-product` | `def-standard-inner-product-on-complex-class-functions` |
| `lem-equality-case-for-a-finite-sum-of-unit-complex-numbers` | `prop-basic-value-properties-of-a-complex-character` |
| same | `lem-an-algebraic-integer-average-of-roots-of-unity-is-zero-or-constant` |
| `lem-conjugates-of-an-average-of-roots-of-unity-are-averages-of-roots-of-unity` | `lem-an-algebraic-integer-average-of-roots-of-unity-is-zero-or-constant` |
| `lem-kernel-of-a-direct-sum-of-representations-is-the-intersection` | `thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters` |
| `lem-a-group-is-abelian-iff-every-conjugacy-class-is-a-singleton` | `thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one` |

The complete current transitive impact cone contains 166 published items in
Abstract Algebra, Group Theory, Number Theory, and Representation Theory. The
exact snapshot follows and must be regenerated after any graph change. The six
previously repaired scaffolds introduce no additional consumer of this pair.

### Transitive consumers (166), grouped by home page

`abstract-algebra/maschkes-theorem-and-complete-reducibility` (8):
`cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero`,
`cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order`,
`cor-group-algebra-is-not-semisimple-when-char-k-divides-group-order`,
`cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order`,
`cor-sum-of-squares-formula-for-irreducible-degrees`,
`thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree`,
`thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field`,
`thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order`.

`abstract-algebra/maschkes-theorem-and-complete-reducibility-examples` (7):
`ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c`,
`ex-the-complex-group-algebra-of-z-mod-three-is-c-times-c-times-c`,
`ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition`,
`ex-the-regular-representation-of-z-mod-four-over-c-splits-into-four-characters`,
`fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r`,
`fs-not-every-finite-dimensional-algebra-over-a-field-is-semisimple`,
`fs-the-sum-of-the-irreducible-degrees-equals-the-group-order`.

`abstract-algebra/characters-and-the-orthogonality-relations` (10):
`cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one`,
`cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product`,
`cor-the-character-table-is-square-and-invertible`,
`cor-the-regular-character-gives-the-sum-of-squares-formula`,
`cor-the-sum-of-squared-irreducible-character-values-at-g-is-the-centralizer-size`,
`thm-character-inner-product-computes-intertwiner-dimension`,
`thm-characters-of-direct-sums-tensor-products-and-duals`,
`thm-complex-representations-are-determined-by-their-characters`,
`thm-first-orthogonality-relation-for-irreducible-complex-characters`,
`thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel`.

`abstract-algebra/characters-and-the-orthogonality-relations-examples` (14):
`ex-decomposing-the-square-of-the-two-dimensional-s-three-character`,
`ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two`,
`ex-the-character-table-of-a-finite-cyclic-group-over-c`,
`ex-the-character-table-of-a-four`, `ex-the-character-table-of-dih-c-four`,
`ex-the-character-table-of-q-eight`,
`ex-the-character-table-of-s-four-and-its-normal-subgroups`,
`ex-the-character-table-of-s-three`,
`ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one`,
`fs-a-complex-character-of-a-finite-group-is-always-a-homomorphism`,
`fs-distinct-irreducible-complex-characters-of-a-finite-group-have-distinct-degrees`,
`fs-every-complex-class-function-with-self-inner-product-one-is-a-character`,
`fs-every-value-of-an-irreducible-complex-character-is-real`,
`fs-nonisomorphic-finite-groups-can-have-the-same-character-table`.

`abstract-algebra/induced-representations-and-frobenius-reciprocity` (15):
`cor-a-finite-group-with-an-irreducible-complex-character-of-degree-greater-than-one-is-nonabelian`,
`cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction`,
`cor-frobenius-reciprocity-for-complex-characters`,
`def-central-character-of-an-irreducible-complex-character`,
`def-virtual-character-and-character-ring-of-a-finite-group`,
`prop-class-sums-act-by-central-character-scalars`,
`prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings`,
`thm-a-prime-power-conjugacy-class-forces-a-proper-nontrivial-normal-subgroup`,
`thm-burnsides-p-a-q-b-theorem`,
`thm-central-characters-are-algebraic-integers`,
`thm-coprime-conjugacy-class-size-forces-zero-character-or-scalar-action`,
`thm-frobenius-formula-for-induced-characters`,
`thm-mackeys-irreducibility-criterion-for-finite-groups`,
`thm-the-degree-of-an-irreducible-complex-character-divides-the-group-order`,
`thm-the-degree-of-an-irreducible-complex-character-divides-the-index-of-the-center`.

`abstract-algebra/induced-representations-and-frobenius-reciprocity-examples` (9):
`ex-c-four-shows-divisibility-of-irreducible-degrees-by-the-group-order-is-not-an-equivalence`,
`ex-frobenius-reciprocity-for-the-two-preceding-s-three-inductions`,
`ex-inducing-a-nontrivial-character-of-a-three-cycle-subgroup-of-s-three-gives-an-irreducible-degree-two-character`,
`ex-inducing-the-trivial-character-of-a-subgroup-of-order-two-in-s-three-gives-one-plus-an-irreducible-degree-two-character`,
`ex-restricting-that-degree-two-s-three-character-to-the-three-cycle-subgroup-gives-the-two-nontrivial-linear-characters`,
`fs-an-induced-irreducible-complex-character-is-always-irreducible`,
`fs-every-divisor-of-the-group-order-is-an-irreducible-character-degree`,
`fs-induction-followed-by-restriction-is-the-identity-on-complex-representations`,
`fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible`.

`group-theory/modular-representations-and-projective-covers` (2):
`fs-maschkes-theorem-still-gives-semisimplicity-when-p-divides-the-group-order`,
`rem-maschke-failure-in-defining-characteristic`.

`group-theory/modular-representations-and-projective-covers-examples` (1):
`cex-an-ordinary-irreducible-with-reducible-mod-p-reduction`.

`group-theory/brauer-characters-and-decomposition-matrices` (15):
`cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes`,
`def-decomposition-numbers-and-decomposition-matrix`,
`def-projective-indecomposable-characters-and-cartan-invariants`,
`fs-every-block-has-one-ordinary-and-one-brauer-irreducible-character`,
`fs-modular-representations-are-determined-by-ordinary-characters`,
`fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible`,
`fs-the-cartan-matrix-equals-the-decomposition-matrix`,
`lem-decomposition-numbers-are-nonnegative-integers`,
`prop-decomposition-matrix-is-block-diagonal-after-block-ordering`,
`rem-defect-groups-and-brauer-main-theorems`,
`thm-blocks-partition-ordinary-and-brauer-irreducible-characters`,
`thm-brauer-nesbitt-module-determination`, `thm-brauer-reciprocity`,
`thm-cartan-matrix-is-d-transpose-d`,
`thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions`.

`group-theory/brauer-characters-and-decomposition-matrices-examples` (4):
`ex-a-block-with-one-ordinary-and-one-brauer-character`,
`ex-brauer-characters-of-a-p-group`,
`ex-cartan-matrix-from-d-transpose-d`,
`ex-decomposition-matrix-of-s-three-in-characteristic-two`.

`number-theory/dirichlet-characters-l-functions-and-primes-in-progressions` (9):
`cor-dirichlet-character-residue-class-indicator`,
`lem-nonreal-dirichlet-l-nonzero-at-one`,
`thm-dirichlet-character-orthogonality`,
`thm-dirichlet-l-nonvanishing-line-one`,
`thm-dirichlet-l-nonzero-at-one`,
`thm-dirichlet-primes-arithmetic-progressions`,
`thm-mertens-primes-arithmetic-progressions`,
`thm-primes-residue-class-dirichlet-density`,
`thm-product-dirichlet-l-nonvanishing-line-one`.

`number-theory/dirichlet-characters-l-functions-and-primes-in-progressions-examples` (4):
`cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion`,
`cex-dirichlet-density-does-not-mean-integer-natural-density`,
`ex-dirichlet-character-orthogonality-table`,
`ex-dirichlet-density-of-primes-in-a-small-progression`.

`number-theory/classical-zero-free-region-and-the-prime-number-theorem` (2):
`lem-dirichlet-character-chebyshev-laplace-transform`,
`thm-prime-number-theorem-arithmetic-progressions`.

`number-theory/classical-zero-free-region-and-the-prime-number-theorem-examples` (4):
`cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic`,
`ex-newman-tauberian-prime-number-theorem`,
`ex-prime-number-theorem-in-a-small-progression`,
`rem-the-classical-zeta-region-is-not-a-uniform-dirichlet-l-region`.

`number-theory/hilbert-symbols-and-the-quadratic-local-global-principle` (2):
`lem-global-square-class-approximation`, `thm-hasse-minkowski-over-the-rationals`.

`number-theory/hilbert-symbols-and-the-quadratic-local-global-principle-examples` (2):
`cex-rational-isotropy-is-not-integral-representation`,
`ex-hasse-minkowski-for-a-quaternary-form`.

`representation-theory/artin-induction-and-rational-characters` (9):
`cor-cyclic-fixed-points-detect-rational-representations`,
`cor-cyclic-local-integrality-criterion`,
`cor-rank-of-the-rational-representation-ring`,
`def-cyclic-induction-subgroup`, `def-rational-character-ring`,
`lem-artin-cyclic-permutation-relation`,
`lem-cyclic-generator-class-functions-by-moebius-inversion`,
`lem-induction-image-is-an-ideal-in-the-representation-ring`,
`thm-artin-induction-for-rational-characters`.

`representation-theory/artin-induction-and-rational-characters-examples` (4):
`cex-rational-valued-character-need-not-be-defined-over-the-rationals`,
`ex-artin-induction-for-a-cyclic-group`, `ex-artin-permutation-relation-for-a5`,
`ex-cyclic-fixed-point-detection-for-s3`.

`representation-theory/brauer-induction-and-elementary-subgroups` (13):
`cor-cyclotomic-field-splits-a-finite-group`,
`cor-elementary-local-integrality-criterion`,
`cor-elementary-restriction-detects-generalized-characters`,
`def-induction-ideal-of-a-family-of-subgroups`,
`lem-banaschewski-prime-obstruction`,
`lem-elementary-detection-at-a-fixed-element`,
`lem-hyperelementary-permutation-subring-reduction`,
`lem-induction-ideal-of-a-subgroup-family-is-an-ideal`,
`lem-p-elementary-characters-are-induced-from-linear-characters`,
`lem-p-primary-character-value-congruence`,
`prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup`,
`thm-brauer-induction`, `thm-finite-supersolvable-groups-are-monomial`.

`representation-theory/brauer-induction-and-elementary-subgroups-examples` (2):
`cex-cyclic-subgroups-do-not-give-integral-induction-in-general`,
`ex-brauer-induction-for-s3`.

`representation-theory/clifford-theory-over-normal-subgroups` (13):
`cor-clifford-ramification-squares-sum-to-inertia-index`,
`cor-normal-subgroup-induction-irreducibility-criterion`,
`def-clifford-ramification-index`,
`def-conjugate-representation-and-inertia-group`,
`lem-inducing-an-irreducible-inertia-module-is-irreducible`,
`lem-induction-from-the-inertia-group-recovers-the-module`,
`lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces`,
`lem-normal-isotypical-component-is-inertia-stable`,
`lem-normal-isotypical-components-are-permuted-by-translation`,
`lem-normal-restriction-constituents-form-one-conjugacy-orbit`,
`thm-clifford-correspondence`,
`thm-clifford-homogeneous-restriction-formula`,
`thm-gallagher-correspondence-for-an-extendible-character`.

`representation-theory/clifford-theory-over-normal-subgroups-examples` (3):
`ex-clifford-boundaries-n-equals-one-and-n-equals-g`,
`ex-clifford-theory-for-s3-over-a3`,
`ex-gallagher-correspondence-for-a-direct-product`.

`representation-theory/schur-indices-and-fields-of-definition` (10):
`cor-schur-index-divides-the-representation-degree`,
`def-schur-index-of-an-irreducible-character`,
`lem-character-field-is-the-stabilizer-fixed-field`,
`lem-galois-conjugates-have-equal-scalar-extension-multiplicity`,
`lem-schur-index-is-independent-of-the-chosen-splitting-field`,
`thm-absolute-irreducibility-via-the-endomorphism-division-algebra`,
`thm-character-of-an-irreducible-over-a-nonsplitting-field`,
`thm-scalar-extension-of-an-irreducible-finite-group-representation`,
`thm-schur-index-as-minimal-realization-multiplicity`,
`thm-schur-index-equals-division-algebra-index`.

`representation-theory/schur-indices-and-fields-of-definition-examples` (4):
`ex-galois-conjugate-characters-of-c3`,
`ex-quaternion-character-has-schur-index-two`,
`ex-s3-is-split-over-the-rationals`, `ex-trivial-character-has-schur-index-one`.

The direct and transitive lists are item lists, not page `requires` lists. They
therefore do not license using any example item as a supplier. The mandatory
Galois repair in §III.7 is a statement-hypothesis amendment using an already
published supplier and creates no new supplier pair; its reverse closure is
not part of the Phase-2 build set.

The B-leaf audit also requires four cross-category A-for-B page-edge cutovers:
Number Theory's `primitive-roots-and-unit-groups-modulo-n`, Group Theory's
`frattini-subgroups-and-the-burnside-basis-theorem` and
`modular-representations-and-projective-covers`, and Commutative Algebra's
`noetherian-rings-and-hilbert-basis`. Reconcile these when those category
scaffolds land; they do not add Phase-2 supplier pairs.


## Algebraic geometry

AV-1 and AV-2 are already-published page pairs, so their 59 draft items are
ineligible for Phase 2.  The sole AG Phase-2 root is the wholly new classical
affine replacement pair specified below.  AV-3 and AV-4 remain Phase-3
published repairs; AV-5 has only planned consumers.

### Publication gate and measured defect

The ten AG pages AV-1 through AV-5 are marked `published`, but the 29 items on
the AV-1 pair (22 A, 7 B) and all 30 items on the AV-2 pair (23 A, 7 B) are
still `draft`.  AV-3, AV-4, and AV-5 contain 32, 33, and 56 published items,
respectively.  Page publication therefore cannot be used as evidence that an
AV-1/AV-2 theorem is available.  In particular, the published AV-3--AV-5
items contain the following **32 direct published-item -> draft-item edges**:

| published home | published consumer | draft supplier |
|---|---|---|
| AV-3 A | `lem-standard-projective-opens-are-affine-spaces` | `def-affine-algebraic-set` |
| AV-3 A | `def-projective-closure-affine-set` | `def-affine-algebraic-set` |
| AV-3 A | `thm-ideal-projective-closure-saturation` | `thm-affine-nullstellensatz-correspondence` |
| AV-3 A | `lem-projective-irreducibility-homogeneous-prime` | `thm-affine-nullstellensatz-correspondence` |
| AV-3 A | `def-regular-function-projective-variety` | `def-function-field-variety` |
| AV-3 A | `def-regular-function-projective-variety` | `def-regular-function-classical-variety` |
| AV-3 A | `thm-global-regular-functions-projective-variety` | `thm-global-regular-functions-affine-variety-coordinate-ring` |
| AV-3 A | `def-morphism-to-projective-space-homogeneous-coordinates` | `def-morphism-classical-varieties` |
| AV-3 A | `lem-projective-variety-cone-irreducible` | `thm-affine-variety-prime-coordinate-ring` |
| AV-4 A | `def-product-varieties-universal-property` | `def-affine-algebraic-set` |
| AV-4 A | `thm-affine-variety-product-coordinate-ring` | `def-affine-variety-classical` |
| AV-4 A | `thm-affine-variety-product-coordinate-ring` | `cor-affine-algebraic-set-coordinate-duality-complete` |
| AV-4 A | `thm-affine-variety-product-coordinate-ring` | `thm-affine-algebraic-sets-coordinate-duality` |
| AV-4 A | `thm-affine-variety-product-coordinate-ring` | `thm-affine-morphisms-coordinate-ring-anti-equivalence` |
| AV-4 A | `thm-affine-variety-product-coordinate-ring` | `thm-affine-variety-prime-coordinate-ring` |
| AV-4 A | `lem-fibre-as-base-change-to-point-classical` | `def-regular-map-image-and-fibre-classical` |
| AV-5 A | `lem-classical-variety-noetherian-components` | `lem-algebraic-set-finite-irreducible-components` |
| AV-5 A | `thm-affine-variety-dimension-coordinate-ring` | `thm-affine-nullstellensatz-correspondence` |
| AV-5 A | `lem-general-variety-function-field-charts` | `thm-function-field-independent-affine-open` |
| AV-5 A | `lem-general-variety-function-field-charts` | `lem-dominant-map-pullback-function-fields` |
| AV-5 A | `cor-dimension-birational-invariant` | `thm-birational-equivalence-function-fields` |
| AV-5 A | `thm-principal-subvariety-codimension-one` | `thm-affine-nullstellensatz-correspondence` |
| AV-5 A | `lem-dimension-local-ring-codimension-closure` | `thm-local-ring-affine-variety-localization` |
| AV-5 A | `lem-zero-dimensional-classical-variety-finite` | `thm-affine-nullstellensatz-correspondence` |
| AV-5 A | `lem-dominant-affine-map-normalization-over-open` | `thm-coordinate-ring-principal-open` |
| AV-5 A | `lem-dominant-affine-image-contains-principal-open` | `thm-affine-nullstellensatz-correspondence` |
| AV-5 A | `def-fibre-dimension-at-point-classical` | `def-morphism-classical-varieties` |
| AV-5 A | `def-fibre-dimension-at-point-classical` | `thm-affine-nullstellensatz-correspondence` |
| AV-5 A | `lem-relative-projective-homogeneous-equations` | `thm-affine-nullstellensatz-correspondence` |
| AV-5 A | `def-projective-morphism-classical` | `def-morphism-classical-varieties` |
| AV-5 A | `def-module-finite-affine-classical-map` | `thm-affine-morphisms-coordinate-ring-anti-equivalence` |
| AV-5 A | `cor-module-finite-affine-map-quasi-finite` | `thm-affine-nullstellensatz-correspondence` |

No status flip is an acceptable repair.  Phase 2 may not hydrate, move, judge,
or publish any AV-1/AV-2 item because its home page is already published.
Phase 2 builds the wholly new replacement pair below.  Phase 3 cuts the
published consumers over to it and cleans up the stranded memberships.  B
items are leaves and are never suppliers.  Until that gate is met, all 32
edges above remain publication blockers.

The transitive item closure of the five live pairs contains 736 item nodes and
exactly the 59 draft AV-1/AV-2 items above.  The draft theorem
`thm-affine-algebraic-sets-coordinate-duality` is explicitly
`not-supplied`; it may not remain in any published dependency closure.  The
replacement merges it with the later completion corollary into one proved
antiequivalence theorem.  The 46 inherited `forward_refs` flags elsewhere are
orientation metadata, not logical dependencies.  The page-level path through
the Chern/Pontryagin examples page is a placement accident, not mathematics.

### Binding new-pair contract

#### AG-P2-1 — classical affine replacement (Phase-2 root)

| field | binding value |
|---|---|
| A | `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface`, category `algebraic-geometry`, order **366.0403** |
| A `requires` | `ideals-and-quotient-rings`, `the-field-of-fractions-and-localisation`, `prime-spectra-and-radicals`, `noether-normalisation-and-nullstellensatz` (all A pages, all earlier) |
| B | `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface-examples`, category `algebraic-geometry`, order **366.0404** |
| B `requires` | singleton A id above; reciprocal companions; B is a leaf |
| inventory / phase | 44 A + 1 B = **45 new items**; independent Phase-2 root |

The exact A inventory, in binding proof order, is:

1. `def-classical-affine-algebraic-set-with-empty-boundaries`
2. `lem-classical-zero-locus-ideal-radical-invariance`
3. `thm-classical-affine-zero-loci-form-zariski-closed-sets`
4. `def-classical-vanishing-ideal`
5. `lem-classical-zero-locus-vanishing-ideal-galois-connection`
6. `thm-classical-affine-nullstellensatz-correspondence`
7. `def-classical-affine-variety-interface`
8. `lem-classical-irreducible-space-open-intersection-criterion`
9. `lem-classical-affine-variety-nonempty-opens-dense`
10. `def-classical-affine-coordinate-ring`
11. `thm-classical-affine-variety-prime-coordinate-ring`
12. `thm-classical-polynomial-functions-equal-coordinate-ring`
13. `def-classical-principal-open`
14. `lem-classical-principal-opens-form-affine-basis`
15. `thm-classical-principal-open-coordinate-ring-localization`
16. `lem-classical-affine-algebraic-set-finite-irreducible-components`
17. `def-reduced-finitely-generated-k-algebra-interface`
18. `lem-classical-affine-closed-points-are-maximal-ideals`
19. `def-classical-regular-function-on-open-set`
20. `lem-classical-regular-functions-locality-and-gluing`
21. `thm-classical-affine-global-regular-functions-coordinate-ring`
22. `def-classical-affine-variety-morphism`
23. `def-classical-regular-map-image-and-set-theoretic-fibre`
24. `lem-classical-morphism-inverse-image-of-closed-is-closed`
25. `thm-classical-affine-morphisms-coordinate-ring-antiequivalence`
26. `thm-classical-affine-algebraic-sets-reduced-algebras-antiequivalence`
27. `lem-classical-affine-morphisms-equal-on-dense-open`
28. `def-classical-germ-and-local-ring`
29. `thm-classical-affine-local-ring-is-localization`
30. `thm-classical-principal-open-is-affine-variety`
31. `def-classical-affine-open-subset`
32. `def-classical-variety-function-field`
33. `thm-classical-function-field-independent-of-affine-open`
34. `def-classical-rational-map`
35. `lem-classical-rational-map-equivalence-transitive`
36. `def-classical-rational-map-domain-union`
37. `def-classical-dominant-morphism-and-rational-map`
38. `lem-classical-open-source-morphisms-equal-on-dense-open`
39. `lem-classical-morphisms-glue-on-open-cover`
40. `thm-classical-rational-map-maximal-domain-affine-target`
41. `lem-classical-dominant-map-pulls-back-function-fields`
42. `thm-classical-dominant-rational-maps-function-field-embeddings`
43. `def-classical-birational-equivalence`
44. `thm-classical-birational-equivalence-iff-function-fields-isomorphic`

The exact B inventory is the zero-consumer leaf
`ex-classical-affine-line-coordinate-local-and-function-field-dictionary`.
The five new proof steps are rows 24, 30, and 38--40. Row 26 merges and proves
the content formerly split between the `not-supplied` old duality theorem and
its completion corollary. Exact statements, proof edges, titles, and source
locators are binding in the AG scaffold's “Binding Phase-2 replacement pair”
section.

The old-root cutover is exact:

| old draft root | new supplier root |
|---|---|
| `def-affine-algebraic-set` | `def-classical-affine-algebraic-set-with-empty-boundaries` |
| `thm-affine-nullstellensatz-correspondence` | `thm-classical-affine-nullstellensatz-correspondence` |
| `def-function-field-variety` | `def-classical-variety-function-field` |
| `def-regular-function-classical-variety` | `def-classical-regular-function-on-open-set` |
| `thm-global-regular-functions-affine-variety-coordinate-ring` | `thm-classical-affine-global-regular-functions-coordinate-ring` |
| `def-morphism-classical-varieties` | `def-classical-affine-variety-morphism` |
| `thm-affine-variety-prime-coordinate-ring` | `thm-classical-affine-variety-prime-coordinate-ring` |
| `def-affine-variety-classical` | `def-classical-affine-variety-interface` |
| `cor-affine-algebraic-set-coordinate-duality-complete` | `thm-classical-affine-algebraic-sets-reduced-algebras-antiequivalence` |
| `thm-affine-algebraic-sets-coordinate-duality` | `thm-classical-affine-algebraic-sets-reduced-algebras-antiequivalence` |
| `thm-affine-morphisms-coordinate-ring-anti-equivalence` | `thm-classical-affine-morphisms-coordinate-ring-antiequivalence` |
| `def-regular-map-image-and-fibre-classical` | `def-classical-regular-map-image-and-set-theoretic-fibre` |
| `lem-algebraic-set-finite-irreducible-components` | `lem-classical-affine-algebraic-set-finite-irreducible-components` |
| `thm-function-field-independent-affine-open` | `thm-classical-function-field-independent-of-affine-open` |
| `lem-dominant-map-pullback-function-fields` | `lem-classical-dominant-map-pulls-back-function-fields` |
| `thm-birational-equivalence-function-fields` | `thm-classical-birational-equivalence-iff-function-fields-isomorphic` |
| `thm-local-ring-affine-variety-localization` | `thm-classical-affine-local-ring-is-localization` |
| `thm-coordinate-ring-principal-open` | `thm-classical-principal-open-coordinate-ring-localization` |

This map replaces every supplier in the 32-edge table and the additional
published Scheme edge from
`def-classical-algebraic-prevariety-regular-maps-and-varieties`. The distinct
replacement impact is **26 direct + 79 transitive = 105 published items**.
The 26 direct items are the set-theoretic union of the two historical Direct
lists below; the 79 transitive items are the union of both historical Direct
and Transitive lists minus those 26. Thus every member is enumerated by home
page below without duplicating a 105-item table. The new B item is zero/zero.

All 59 old AV-1/AV-2 draft items are Phase-3-only cleanup/cutover. The five A
items outside the replacement closure have zero published impact:
`def-quasi-affine-algebraic-set`,
`cor-zariski-topology-cofinite-on-affine-line`,
`rem-classical-affine-register-limit`, `def-residue-field-classical-point`,
and `def-rational-function-regular-at-point`. All fourteen old B items are
also zero-impact leaves and may not enter Phase 2.

#### AG-LIE-1 — smooth-projective duality and flag geometry (planned-only)

| field | binding value |
|---|---|
| A | `smooth-projective-serre-duality-and-flag-variety-line-bundles`, category `algebraic-geometry`, order **510.0161** |
| A `requires` | `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`, `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `sheaf-cohomology-cech-cohomology-and-comparison`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `ext-and-balanced-resolutions`, `derived-categories`, `spectral-sequences`, `lie-subgroups-actions-and-homogeneous-spaces`, `cartan-subalgebras-and-root-space-decompositions`, `root-systems-dynkin-diagrams-and-cartan-killing-classification` (all A pages, all earlier) |
| B | `smooth-projective-serre-duality-and-flag-variety-line-bundles-examples`, category `algebraic-geometry`, order **510.0162**, singleton A requirement and reciprocal companion |
| inventory / phase | 17 A + 3 leaf B = **20 new items**; planned-only, zero published impact |

Exact A ids, in proof order:
`def-smooth-projective-dualizing-line-bundle-and-trace`,
`lem-projective-space-top-cohomology-residue-pairing`,
`thm-serre-duality-projective-space-twisting-sheaves`,
`lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space`,
`thm-serre-duality-projective-space-coherent-sheaves`,
`lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction`,
`thm-serre-duality-smooth-projective-variety-locally-free-sheaves`,
`def-complex-semisimple-algebraic-group-borel-and-flag-variety`,
`thm-semisimple-flag-variety-smooth-projective`,
`thm-flag-variety-bruhat-cell-decomposition`,
`def-borel-character-equivariant-line-bundle`,
`thm-borel-characters-classify-equivariant-line-bundles-simply-connected`,
`lem-flag-variety-canonical-bundle-weight-minus-two-rho`,
`thm-minimal-parabolic-flag-projection-is-p1-bundle`,
`lem-flag-line-bundle-degree-on-minimal-parabolic-fibre`,
`lem-minimal-parabolic-relative-canonical-line-bundle-root-weight`, and
`thm-relative-p1-line-bundle-cohomology-shift`.

Exact zero/zero B ids:
`ex-sl2-flag-variety-line-bundles`,
`ex-sl3-two-minimal-parabolic-projections`, and
`ex-serre-duality-projective-space-twist-pairing`.

Future empty-shell bindings:

- `borel-weil-and-borel-weil-bott` replaces its B prerequisite with A pages
  `tensor-product-multiplicities-and-littlewood-richardson` and
  `smooth-projective-serre-duality-and-flag-variety-line-bundles`.
- `primitive-ideals-and-duflo-theorem` drops
  `borel-weil-and-borel-weil-bott-examples` and adds
  the exact A-only array
  `harish-chandra-isomorphism-casimir-and-central-characters`,
  `verma-modules-and-shapovalov-forms`,
  `homomorphisms-between-verma-modules-and-linkage`,
  `category-o-finiteness-duality-and-blocks`,
  `projectives-standard-filtrations-and-bgg-reciprocity`,
  `lie-algebra-representations-enveloping-algebras-and-pbw`, and
  `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface`.
  Its Duflo/localization theorem remains prose-only, not a dependency claim.

AG-LIE-1 has one direct planned consumer (RL-9), no published consumer, and a
zero-item published transitive closure. AG-P2-1 has RL-10 as an additional
planned consumer without changing its published impact. Authoritative full
text: Milne Chs. 2, 3, 5; Arapura Chs. 1, 3; Artin Chs. 2, 3; Brion §§1.2--1.4,
2.1--2.2; Lurie complete pp. 1--3; and Stacks *Duality for Schemes* §27,
tags 0FVV--0FW0. All texts were retrieved in full; there is no source blocker.

### New future supplier pairs

Each B page below requires only its companion A page and is a dependency leaf.
Commutative Algebra §11.4 is the canonical proof contract; its 8/3, 11/3, and
10/4 inventories supersede the insufficient provisional lists from the AG
audit.

| proposed A / B page ids | canonical inventory | intended planned consumers |
|---|---|---|
| `normalization-finiteness-for-affine-domains` / `normalization-finiteness-for-affine-domains-examples` | CA-19, 8 A / 3 B | AV-7 A: normalization existence/finite morphism and chart gluing |
| `algebraic-zariski-main-for-quasi-finite-morphisms` / `algebraic-zariski-main-for-quasi-finite-morphisms-examples` | CA-20, 11 A / 3 B | AV-7 A: classical Zariski Main and openness near quasi-finite points; AV-7 owns the classical gluing step |
| `homogeneous-resultants-and-projective-intersection-length` / `homogeneous-resultants-and-projective-intersection-length-examples` | CA-21, 10 A / 4 B | AV-8 A: resultant items and the global graded/length steps of Bézout |

Every A item below has zero direct and zero transitive published consumers at
this checkout:

- CA-19: `lem-integral-closure-unchanged-across-an-integral-intermediate-domain`,
  `lem-finite-purely-inseparable-rational-extension-envelope`,
  `lem-integral-closure-in-a-purely-inseparable-rational-envelope-is-finite`,
  `lem-normal-extension-separable-over-maximal-purely-inseparable-subextension`,
  `thm-polynomial-algebras-over-fields-have-finite-integral-closures`,
  `thm-integral-closure-finite-finite-type-domain-over-field`,
  `cor-affine-normalization-is-finite`, and
  `lem-finite-normalization-compatible-with-principal-opens`.
- CA-20: `def-quasi-finite-at-a-prime-for-finite-type-algebras`,
  `lem-zmt-polynomial-relation-leading-coefficient-is-integral`,
  `lem-zmt-one-variable-integral-correction`,
  `def-strongly-transcendental-element`,
  `lem-strong-transcendence-descends-to-minimal-prime-quotients`,
  `lem-strongly-transcendental-finite-one-variable-algebra-is-nowhere-quasi-finite`,
  `lem-zmt-one-generator-local-integrality`,
  `thm-algebraic-zariski-main-localization`,
  `cor-quasi-finite-locus-open-finite-type-algebra`,
  `thm-quasi-finite-algebra-open-finite-factorization`, and
  `cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra`.
- CA-21: `def-sylvester-resultant-of-binary-forms`,
  `lem-binary-resultant-scaling-specialization-and-dehomogenization`,
  `thm-binary-resultant-zero-iff-common-geometric-projective-root`,
  `lem-coprime-plane-forms-form-a-homogeneous-regular-sequence`,
  `lem-complete-intersection-hilbert-series-two-plane-forms`,
  `cor-no-common-component-projective-plane-intersection-is-zero-dimensional`,
  `def-total-length-of-a-zero-dimensional-projective-scheme`,
  `lem-eventual-hilbert-function-equals-zero-dimensional-projective-length`,
  `thm-projective-plane-complete-intersection-total-length`, and
  `cor-projective-plane-bezout-length-form`.

The three new pairs have **no currently published consumers**; their consumers
are the planned AV-7/AV-8 A items just identified. AV-5a likewise has no
currently published consumer; planned AV-6 is its first consumer. None is an
independent Phase-2 root; include one only if it lies in the final prerequisite
closure of a supplier needed by a published consumer.

The three newly inserted Commutative Algebra pairs and AV-5a have no currently
published consumers, so they are not independent Phase-2 roots. They may enter
Phase 2 only through the prerequisite closure of an eligible supplier. Their
ownership, exact inventories, A-only requirements, and placements are now
reconciled with Commutative Algebra §§11.4--11.5.

### Published-consumer map and historical impact partitions

The following maps are computed from live item dependencies.  “Direct” means
the consumer declares at least one item of the repaired pair; “transitive”
means it reaches the pair only through another item.  Every named consumer is
currently published.  Example-page homes are shown separately so Phase 3 can
edit the correct page and item file.

#### AV-1 draft-page impact partition (Phase 3 only)

**Direct (17).**

- `dimension-constructible-images-and-dimensions-of-fibres`: `cor-module-finite-affine-map-quasi-finite`, `def-fibre-dimension-at-point-classical`, `lem-classical-variety-noetherian-components`, `lem-dominant-affine-image-contains-principal-open`, `lem-dominant-affine-map-normalization-over-open`, `lem-relative-projective-homogeneous-equations`, `lem-zero-dimensional-classical-variety-finite`, `thm-affine-variety-dimension-coordinate-ring`, `thm-principal-subvariety-codimension-one`.
- `products-segre-and-veronese-embeddings-and-grassmannians`: `def-product-varieties-universal-property`, `thm-affine-variety-product-coordinate-ring`.
- `projective-algebraic-sets-projective-morphisms-and-cones`: `def-projective-closure-affine-set`, `lem-projective-irreducibility-homogeneous-prime`, `lem-projective-variety-cone-irreducible`, `lem-standard-projective-opens-are-affine-spaces`, `thm-ideal-projective-closure-saturation`.
- `schemes-subschemes-and-morphisms-locally-of-finite-type`: `def-classical-algebraic-prevariety-regular-maps-and-varieties`.

**Transitively blocked (88).**

- `dimension-constructible-images-and-dimensions-of-fibres`: `cor-closed-family-irreducible-equal-dimensional-fibres`, `cor-dimension-affine-and-projective-space`, `cor-dimension-birational-invariant`, `cor-dimension-of-image-plus-generic-fibre`, `cor-dominant-morphism-image-contains-open`, `cor-maximal-chains-irreducible-variety-dimension`, `cor-projective-equations-dimension-bound`, `def-codimension-irreducible-subvariety`, `def-constructible-subset-variety`, `def-dimension-classical-variety`, `def-module-finite-affine-classical-map`, `def-projective-morphism-classical`, `def-quasi-finite-morphism-classical`, `lem-affine-cone-dimension-projective-variety`, `lem-affine-intersection-dimension-bound`, `lem-classical-point-cut-out-by-dimension-many-functions`, `lem-constructible-boolean-operations`, `lem-constructible-dense-contains-open`, `lem-dimension-local-ring-codimension-closure`, `lem-dimension-nonempty-open-subset`, `lem-general-variety-function-field-charts`, `lem-projective-dimension-linear-avoidance`, `lem-projective-hypersurface-dimension-drop`, `lem-variety-equations-dimension-bound`, `rem-equidimensionality-hypotheses`, `thm-chevalley-constructible-image-varieties`, `thm-classical-projective-projection-closed`, `thm-dimension-equals-transcendence-degree`, `thm-dimension-product-varieties`, `thm-dimension-theorem-intersection-projective`, `thm-dominant-equal-dimension-generically-finite`, `thm-fibre-dimension-lower-bound`, `thm-generic-fibre-dimension`, `thm-upper-semicontinuity-fibre-dimension-projective`.
- `dimension-constructible-images-and-dimensions-of-fibres-examples`: `cex-affine-intersection-bound-singular-ambient`, `cex-dimension-empty-set-minus-infinity-needed`, `cex-finite-fibres-not-finite-morphism`, `cex-image-morphism-not-closed`, `ex-dimensions-coordinate-cross-components`, `ex-family-hyperbolas-degenerate-fibre`, `ex-fibre-dimension-jump`, `ex-fibres-hyperbola-projection`, `ex-intersection-two-projective-curves`, `ex-linear-system-fibre-dimension-rank-loci`.
- `fibre-products-base-change-and-scheme-theoretic-fibres`: `thm-classical-product-agrees-scheme-product`.
- `products-segre-and-veronese-embeddings-and-grassmannians`: `cor-grassmannian-smooth-irreducible-dimension`, `cor-homogeneous-polynomial-becomes-hyperplane-section`, `cor-projective-variety-product-exists`, `cor-segre-veronese-embedding`, `def-base-change-classical-varieties`, `def-incidence-correspondence-varieties`, `def-segre-map`, `def-veronese-map`, `lem-affine-product-topology-not-product-topology`, `lem-diagonal-affine-variety-cut-out-by-coordinate-differences`, `lem-fibre-as-base-change-to-point-classical`, `lem-grassmannian-standard-affine-charts`, `lem-incidence-locus-is-closed`, `lem-segre-map-well-defined-injective`, `lem-veronese-map-well-defined-closed-immersion`, `rem-products-need-scheme-fibre-products`, `thm-graph-closed-for-classical-variety-morphism`, `thm-multihomogeneous-map-to-projective-space`, `thm-plucker-image-closed`, `thm-segre-image-rank-one-minors`.
- `products-segre-and-veronese-embeddings-and-grassmannians-examples`: `cex-tensor-product-of-domains-not-domain`, `cex-zariski-product-topology-too-coarse`, `ex-grassmannian-lines-in-projective-three-space`, `ex-incidence-point-hyperplane`, `ex-quadratic-veronese-conic`, `ex-segre-p1-times-p1-quadric`, `ex-segre-veronese-bidegree-two-three`.
- `projective-algebraic-sets-projective-morphisms-and-cones`: `def-morphism-to-projective-space-homogeneous-coordinates`, `def-regular-function-projective-variety`, `lem-projective-closure-dense-affine-chart`, `lem-projective-coordinate-morphisms-well-defined`, `lem-projective-hypersurface-affine-pieces`, `lem-projective-regular-function-chart-compatibility`, `rem-projective-coordinate-ring-not-function-ring`, `thm-closed-projective-embedding-by-homogeneous-generators`, `thm-global-regular-functions-projective-variety`.
- `projective-algebraic-sets-projective-morphisms-and-cones-examples`: `cex-naive-homogenization-adds-component`, `ex-affine-cone-over-conic`, `ex-morphism-projective-line-power-map`, `ex-projective-closure-parabola`, `ex-projective-conic-standard-charts`, `ex-projective-line-two-affine-charts`.
- `schemes-subschemes-and-morphisms-locally-of-finite-type`: `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes`.

#### AV-2 draft-page impact partition (Phase 3 only)

**Direct (11).**

- `dimension-constructible-images-and-dimensions-of-fibres`: `cor-dimension-birational-invariant`, `def-fibre-dimension-at-point-classical`, `def-module-finite-affine-classical-map`, `def-projective-morphism-classical`, `lem-dimension-local-ring-codimension-closure`, `lem-general-variety-function-field-charts`.
- `products-segre-and-veronese-embeddings-and-grassmannians`: `lem-fibre-as-base-change-to-point-classical`, `thm-affine-variety-product-coordinate-ring`.
- `projective-algebraic-sets-projective-morphisms-and-cones`: `def-morphism-to-projective-space-homogeneous-coordinates`, `def-regular-function-projective-variety`, `thm-global-regular-functions-projective-variety`.

**Transitively blocked (66).**

- `dimension-constructible-images-and-dimensions-of-fibres`: `cor-closed-family-irreducible-equal-dimensional-fibres`, `cor-dimension-affine-and-projective-space`, `cor-dimension-of-image-plus-generic-fibre`, `cor-dominant-morphism-image-contains-open`, `cor-maximal-chains-irreducible-variety-dimension`, `cor-module-finite-affine-map-quasi-finite`, `cor-projective-equations-dimension-bound`, `def-quasi-finite-morphism-classical`, `lem-affine-cone-dimension-projective-variety`, `lem-affine-intersection-dimension-bound`, `lem-classical-point-cut-out-by-dimension-many-functions`, `lem-dimension-nonempty-open-subset`, `lem-dominant-affine-image-contains-principal-open`, `lem-dominant-affine-map-normalization-over-open`, `lem-projective-dimension-linear-avoidance`, `lem-projective-hypersurface-dimension-drop`, `lem-relative-projective-homogeneous-equations`, `lem-variety-equations-dimension-bound`, `rem-equidimensionality-hypotheses`, `thm-chevalley-constructible-image-varieties`, `thm-classical-projective-projection-closed`, `thm-dimension-equals-transcendence-degree`, `thm-dimension-product-varieties`, `thm-dimension-theorem-intersection-projective`, `thm-dominant-equal-dimension-generically-finite`, `thm-fibre-dimension-lower-bound`, `thm-generic-fibre-dimension`, `thm-upper-semicontinuity-fibre-dimension-projective`.
- `dimension-constructible-images-and-dimensions-of-fibres-examples`: `cex-affine-intersection-bound-singular-ambient`, `cex-dimension-empty-set-minus-infinity-needed`, `cex-finite-fibres-not-finite-morphism`, `cex-image-morphism-not-closed`, `ex-dimensions-coordinate-cross-components`, `ex-family-hyperbolas-degenerate-fibre`, `ex-fibre-dimension-jump`, `ex-fibres-hyperbola-projection`, `ex-intersection-two-projective-curves`, `ex-linear-system-fibre-dimension-rank-loci`.
- `fibre-products-base-change-and-scheme-theoretic-fibres`: `thm-classical-product-agrees-scheme-product`.
- `products-segre-and-veronese-embeddings-and-grassmannians`: `cor-homogeneous-polynomial-becomes-hyperplane-section`, `cor-projective-variety-product-exists`, `cor-segre-veronese-embedding`, `def-base-change-classical-varieties`, `def-incidence-correspondence-varieties`, `def-segre-map`, `def-veronese-map`, `lem-affine-product-topology-not-product-topology`, `lem-diagonal-affine-variety-cut-out-by-coordinate-differences`, `lem-incidence-locus-is-closed`, `lem-segre-map-well-defined-injective`, `lem-veronese-map-well-defined-closed-immersion`, `rem-products-need-scheme-fibre-products`, `thm-graph-closed-for-classical-variety-morphism`, `thm-multihomogeneous-map-to-projective-space`, `thm-segre-image-rank-one-minors`.
- `products-segre-and-veronese-embeddings-and-grassmannians-examples`: `cex-tensor-product-of-domains-not-domain`, `cex-zariski-product-topology-too-coarse`, `ex-incidence-point-hyperplane`, `ex-quadratic-veronese-conic`, `ex-segre-p1-times-p1-quadric`, `ex-segre-veronese-bidegree-two-three`.
- `projective-algebraic-sets-projective-morphisms-and-cones`: `lem-projective-coordinate-morphisms-well-defined`, `lem-projective-regular-function-chart-compatibility`, `rem-projective-coordinate-ring-not-function-ring`.
- `projective-algebraic-sets-projective-morphisms-and-cones-examples`: `ex-morphism-projective-line-power-map`.
- `schemes-subschemes-and-morphisms-locally-of-finite-type`: `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes`.

#### AV-3 repaired supplier pair

**Direct (12).**

- `dimension-constructible-images-and-dimensions-of-fibres`: `cor-dimension-affine-and-projective-space`, `lem-affine-cone-dimension-projective-variety`, `lem-relative-projective-homogeneous-equations`.
- `products-segre-and-veronese-embeddings-and-grassmannians`: `cor-homogeneous-polynomial-becomes-hyperplane-section`, `cor-projective-variety-product-exists`, `def-product-varieties-universal-property`, `def-segre-map`, `def-veronese-map`, `lem-veronese-map-well-defined-closed-immersion`, `thm-multihomogeneous-map-to-projective-space`, `thm-plucker-image-closed`, `thm-segre-image-rank-one-minors`.

**Transitively blocked (39).**

- `dimension-constructible-images-and-dimensions-of-fibres`: `cor-projective-equations-dimension-bound`, `def-projective-morphism-classical`, `lem-affine-intersection-dimension-bound`, `lem-projective-dimension-linear-avoidance`, `lem-projective-hypersurface-dimension-drop`, `rem-equidimensionality-hypotheses`, `thm-classical-projective-projection-closed`, `thm-dimension-product-varieties`, `thm-dimension-theorem-intersection-projective`, `thm-upper-semicontinuity-fibre-dimension-projective`.
- `dimension-constructible-images-and-dimensions-of-fibres-examples`: `cex-affine-intersection-bound-singular-ambient`, `ex-dimensions-coordinate-cross-components`, `ex-family-hyperbolas-degenerate-fibre`, `ex-fibre-dimension-jump`, `ex-fibres-hyperbola-projection`, `ex-intersection-two-projective-curves`, `ex-linear-system-fibre-dimension-rank-loci`.
- `fibre-products-base-change-and-scheme-theoretic-fibres`: `thm-classical-product-agrees-scheme-product`.
- `products-segre-and-veronese-embeddings-and-grassmannians`: `cor-grassmannian-smooth-irreducible-dimension`, `cor-segre-veronese-embedding`, `def-base-change-classical-varieties`, `def-incidence-correspondence-varieties`, `lem-affine-product-topology-not-product-topology`, `lem-diagonal-affine-variety-cut-out-by-coordinate-differences`, `lem-fibre-as-base-change-to-point-classical`, `lem-grassmannian-standard-affine-charts`, `lem-incidence-locus-is-closed`, `lem-segre-map-well-defined-injective`, `rem-products-need-scheme-fibre-products`, `thm-affine-variety-product-coordinate-ring`, `thm-graph-closed-for-classical-variety-morphism`.
- `products-segre-and-veronese-embeddings-and-grassmannians-examples`: `cex-tensor-product-of-domains-not-domain`, `cex-zariski-product-topology-too-coarse`, `ex-grassmannian-lines-in-projective-three-space`, `ex-incidence-point-hyperplane`, `ex-quadratic-veronese-conic`, `ex-segre-p1-times-p1-quadric`, `ex-segre-veronese-bidegree-two-three`.
- `schemes-subschemes-and-morphisms-locally-of-finite-type`: `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes`.

#### AV-4 repaired supplier pair

**Direct (4).**

- `dimension-constructible-images-and-dimensions-of-fibres`: `lem-affine-intersection-dimension-bound`, `thm-dimension-product-varieties`.
- `fibre-products-base-change-and-scheme-theoretic-fibres`: `thm-classical-product-agrees-scheme-product`.
- `schemes-subschemes-and-morphisms-locally-of-finite-type`: `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes`.

**Transitively blocked (13).**

- `dimension-constructible-images-and-dimensions-of-fibres`: `cor-projective-equations-dimension-bound`, `def-projective-morphism-classical`, `lem-affine-cone-dimension-projective-variety`, `lem-projective-dimension-linear-avoidance`, `lem-projective-hypersurface-dimension-drop`, `lem-relative-projective-homogeneous-equations`, `rem-equidimensionality-hypotheses`, `thm-classical-projective-projection-closed`, `thm-dimension-theorem-intersection-projective`, `thm-upper-semicontinuity-fibre-dimension-projective`.
- `dimension-constructible-images-and-dimensions-of-fibres-examples`: `cex-affine-intersection-bound-singular-ambient`, `ex-intersection-two-projective-curves`, `ex-linear-system-fibre-dimension-rank-loci`.

#### AV-5 repaired supplier pair

There are no currently published direct or transitive consumers.  Its first
planned consumer is AV-5a A.

#### Published scheme-pair repair

For `thm-affine-closed-immersions-quotient-rings`, current **direct** consumers
are `lem-base-change-affine-morphisms`,
`lem-base-change-open-closed-immersions`, and
`lem-immersions-and-localizations-monomorphisms` on
`fibre-products-base-change-and-scheme-theoretic-fibres`;
`ex-graph-polynomial-map-closed-subscheme` on its examples page;
`thm-quasi-coherent-ideal-closed-subscheme-correspondence` on
`schemes-subschemes-and-morphisms-locally-of-finite-type`; and
`cex-closed-subset-does-not-determine-closed-subscheme` plus
`ex-closed-subscheme-double-origin-point` on that pair's examples page.
The **transitively blocked** consumers are
`def-scheme-theoretic-inverse-image-subscheme` and
`lem-subscheme-intersection-fibre-product` on the fibre-products A page, and
`thm-scheme-theoretic-image-quasi-compact-morphism` on the schemes A page.
That last theorem is also the sole current direct consumer of
`thm-quasi-coherent-ideal-closed-subscheme-correspondence`.

This mapping is the execution contract: Phase 2 builds AG-P2-1, never an item
on published AV-1/AV-2. AG-LIE-1 is planned-only. Phase 3 cuts over the 26
direct published consumers, then rechecks the 79 transitively blocked items
and cleans the 59 stranded draft memberships. No B-page item may be introduced
as a shortcut supplier in either phase.

---

## Category theory

There is no unpublished Category Theory supplier and therefore no Category
Theory Phase-2 root. All 21 A/B pairs and all 1,095 items are published. The
repaired Abstract Algebra, Algebraic Geometry, Differential Geometry,
Differential Topology, Fourier Analysis, Functional Analysis, Measure Theory,
and PDE scaffolds add no item edge in either direction with Category Theory.

The sole recorded-not-proved edge is a Phase-3-only published repair:

| forbidden recorded item | published direct consumer | transitive published impact |
|---|---|---|
| `rem-the-freyd-mitchell-embedding-theorem` | `fs-the-diagram-lemmas-in-an-abelian-category-follow-from-the-module-case-by-the-embedding-theorem` | the same singleton; it has no published consumer |

The repair removes that edge and uses the already-published
`rem-why-the-diagram-lemmas-are-not-proved-by-the-embedding-theorem` and
`thm-the-connecting-morphism-exists-and-is-unique`. It creates no Phase-2
supplier.

Seventeen page-level B-for-A prerequisite cutovers and three same-page ordering
repairs are recorded exactly in Category Theory §§II.2 and II.5. They affect
only already-published suppliers and consumers; no B-page item is a supplier.


## Algebraic topology

AT-24 `simplicial-subdivision-and-simplicial-approximation` at
366.0021/366.0022 is Phase-2 eligible. Its B page is a leaf. AT-21 spectra,
AT-23 local coefficients, and AT-22 simple homotopy currently have only planned
consumers and are not independent Phase-2 roots. AT-22's canonical orders are
366.0401/366.0402; 366.043/366.044 are occupied by Algebraic Geometry.

### 13.5 Supplier-pair to consumer map

The map distinguishes already-published consumers from planned consumers so
Phase 2 does not silently repair Phase 3 material.

**AT-24, direct published consumers.**

- `lem-finite-simplicial-approximation-for-homology-comparison` — home
  `homology-axioms-degree-and-classical-applications` (AT-5 A).
- `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes` — home
  `relative-homology-excision-and-mayer-vietoris` (AT-3 A).

Exact planned-item mapping:

| planned AT-24 supplier item | published consumer |
|---|---|
| `def-barycentric-subdivision-of-an-abstract-simplicial-complex` | `lem-finite-simplicial-approximation-for-homology-comparison` |
| `lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero` | same |
| `def-open-and-closed-stars-in-a-subdivision` | same |
| `lem-the-open-star-criterion-produces-a-simplicial-map` | same |
| `thm-relative-simplicial-approximation-after-subdivision` | same |
| `lem-compact-subsets-of-an-arbitrary-simplicial-realization-meet-finitely-many-open-simplices` | `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes` |
| `lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement` | same |

**AT-24, transitively blocked published consumers (60).**

- Home `homology-axioms-degree-and-classical-applications-examples`:
  `cex-degree-is-not-defined-by-top-homology-for-self-maps-of-s-zero`,
  `cex-degree-zero-does-not-imply-a-sphere-map-is-constant`,
  `cex-finite-additivity-alone-does-not-prove-infinite-cw-uniqueness`,
  `ex-degree-of-a-coordinate-reflection-on-a-sphere`,
  `ex-degree-of-the-antipodal-map-in-low-dimensions`,
  `ex-degree-of-the-circle-power-map`,
  `ex-local-degrees-of-a-polynomial-map-on-the-riemann-sphere`, and
  `ex-two-homology-theories-with-different-coefficient-groups`.
- Home `relative-homology-excision-and-mayer-vietoris-examples`:
  `cex-relative-homology-is-not-the-homology-of-the-set-difference`,
  `ex-mayer-vietoris-computation-of-the-torus-first-homology`, and
  `ex-relative-homology-of-a-disk-and-its-boundary`.
- Home `cw-complexes-and-cellular-homology`:
  `cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary`,
  `def-cellular-boundary-from-three-consecutive-skeleta`,
  `def-cellular-homology`, `def-incidence-number-of-two-cw-cells`,
  `def-oriented-cellular-chain-group`,
  `lem-skeletal-homology-stabilizes-away-from-the-cell-dimension`,
  `lem-the-cellular-boundary-squares-to-zero`,
  `prop-cellular-maps-induce-cellular-chain-maps`,
  `thm-cellular-boundary-is-the-incidence-degree-matrix`,
  `thm-cellular-homology-computes-singular-homology`,
  `thm-euler-poincare-formula-for-finite-cw-complexes`,
  `thm-relative-cellular-homology-computes-relative-singular-homology`, and
  `thm-relative-homology-of-consecutive-cw-skeleta`.
- Home `homology-axioms-degree-and-classical-applications`:
  `cor-a-fixed-point-free-sphere-map-has-antipodal-degree`,
  `cor-a-group-acting-freely-on-a-positive-even-sphere-has-at-most-two-elements`,
  `def-degree-of-a-self-map-of-an-oriented-sphere`,
  `def-local-degree-at-an-isolated-preimage`,
  `lem-a-map-of-nonzero-degree-between-spheres-is-surjective`,
  `lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit`,
  `lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients`,
  `lem-coefficient-comparison-on-finite-cw-pairs`,
  `lem-finite-cw-pairs-admit-finite-simplicial-homotopy-models`,
  `lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support`,
  `lem-local-sphere-orientations-and-finite-puncture-excision`,
  `lem-oriented-simplex-comparison-for-an-ordinary-homology-theory`,
  `lem-sphere-endomorphisms-act-by-the-same-integer-in-every-ordinary-theory`,
  `lem-subdivision-compatible-continuous-polyhedral-homology-comparison`,
  `prop-degree-is-homotopy-invariant-and-multiplicative-under-composition`,
  `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps`,
  `prop-every-integer-occurs-as-the-degree-of-a-sphere-map`,
  `prop-suspension-preserves-sphere-map-degree`,
  `thm-a-sphere-has-a-nowhere-zero-tangent-vector-field-iff-its-dimension-is-odd`,
  `thm-brouwer-fixed-point-theorem`,
  `thm-eilenberg-steenrod-uniqueness-on-all-cw-pairs`,
  `thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs`,
  `thm-global-sphere-degree-is-the-sum-of-local-degrees`,
  `thm-invariance-of-dimension-for-euclidean-spaces`,
  `thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere`, and
  `thm-no-retraction-from-a-disk-onto-its-boundary`.
- Home `relative-homology-excision-and-mayer-vietoris`:
  `cor-homology-of-spheres`.
- Home `sublevel-deformation-and-the-handle-attachment-theorem` (published
  Differential Topology A): `cor-relative-homology-of-a-single-handle-pair`
  and `lem-relative-homology-of-the-standard-handle-pair`.
- Home `cw-complexes-and-cellular-homology-examples`:
  `ex-cellular-boundary-matrix-of-a-closed-orientable-surface`,
  `ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space`,
  `ex-cellular-homology-of-a-lens-space`,
  `ex-cellular-homology-of-an-infinite-dimensional-projective-space`,
  `ex-cellular-homology-of-real-projective-space`, and
  `ex-two-cw-structures-on-the-circle-have-the-same-euler-characteristic`.
- Home `sublevel-deformation-and-the-handle-attachment-theorem-examples`
  (published Differential Topology B):
  `ex-relative-homology-of-a-handle-by-excision`.

**Other new or repaired supplier pairs.**  None has a currently published
consumer, hence none has a transitively blocked published consumer at this
checkout.  Their planned direct consumers are:

- HA `kunneth-exactness-and-splittings-over-principal-ideal-domains` -> AT-6
  `thm-topological-kunneth-short-exact-sequence-for-homology` (exactness) and
  `prop-the-homology-kunneth-sequence-splits-nonnaturally` (splitting), home
  `singular-cohomology-and-coefficient-theorems`.  AT-6 examples and all later
  cohomology/duality pages are transitively blocked until these direct rows are
  repaired.
- AT-21 -> AT-16 `def-external-product-in-complex-k-theory`, home
  `complex-k-theory-bott-periodicity-and-the-chern-character`; DT-17
  `thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems`,
  home `framed-cobordism-and-the-pontryagin-thom-construction`; and DT-19
  `lem-pontryagin-thom-converts-bordism-detection-to-a-thom-space-homotopy-problem`,
  home `unoriented-bordism-and-stiefel-whitney-number-detection`.
- AT-23 -> AT-13 `def-primary-cellular-obstruction-cochain`,
  `thm-the-primary-obstruction-cochain-is-a-cocycle`,
  `thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton`,
  and `def-postnikov-k-invariant`, home
  `obstruction-theory-postnikov-towers-and-classifying-spaces`; AT-14
  `def-fiber-homology-local-system-of-a-serre-fibration`,
  `lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients`,
  `thm-homological-serre-spectral-sequence`,
  `thm-cohomological-serre-spectral-sequence`, and
  `thm-wang-sequence-for-a-fibration-over-the-circle`, home
  `serre-spectral-sequences-gysin-wang-and-applications`.

Exact AT-23 cross-category planned-item mapping:

| planned AT-23 supplier item | planned direct consumer item |
|---|---|
| `prop-the-manifold-orientation-system-is-a-local-system` | DT-14 `lem-diagonal-class-expansion-gives-the-alternating-trace` |
| `thm-poincare-duality-with-the-orientation-local-system` | DT-14 `lem-diagonal-class-expansion-gives-the-alternating-trace` |
| `thm-local-systems-on-a-connected-cw-complex-correspond-to-modules-over-its-group-ring` | DT-24 `def-based-handle-chain-complex-over-the-fundamental-group-ring` |
| `def-right-group-ring-action-on-the-chains-of-a-universal-cover` | DT-24 `def-based-handle-chain-complex-over-the-fundamental-group-ring` |
| `def-singular-and-cellular-chain-complexes-with-local-coefficients` | DT-24 `def-based-handle-chain-complex-over-the-fundamental-group-ring` |
| `lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases` | DT-24 `def-based-handle-chain-complex-over-the-fundamental-group-ring`; `thm-whitehead-torsion-of-an-h-cobordism-is-well-defined` |

Exact AT-22 cross-category planned-item mapping:

| planned AT-22 supplier item | planned direct consumer item |
|---|---|
| `def-simple-homotopy-equivalence` | DT-24 `rem-simple-homotopy-and-the-vanishing-criterion-are-at-owned` |
| `def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group` | DT-24 `def-whitehead-torsion-of-an-h-cobordism`; `cor-h-cobordism-theorem-when-the-whitehead-group-vanishes`; `rem-whitehead-group-construction-remains-at-owned` |
| `def-finite-based-free-chain-complex-and-its-contraction-torsion` | DT-24 `def-whitehead-torsion-of-an-h-cobordism` |
| `lem-contraction-torsion-is-independent-of-the-contracting-homotopy` | DT-24 `thm-whitehead-torsion-of-an-h-cobordism-is-well-defined` |
| `lem-basis-change-and-direct-sum-formulas-for-chain-torsion` | DT-24 `lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion`; `thm-whitehead-torsion-of-an-h-cobordism-is-well-defined` |
| `lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group` | DT-24 `lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion`; `thm-whitehead-torsion-of-an-h-cobordism-is-well-defined` |
| `def-based-cellular-chain-complex-of-a-universal-cover` | DT-24 `def-based-handle-chain-complex-over-the-fundamental-group-ring` |
| `lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone` | DT-24 `lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring` |
| `thm-composition-and-sum-formulas-for-whitehead-torsion` | DT-24 `lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion`; `lem-product-h-cobordisms-have-zero-whitehead-torsion` |
| `lem-an-elementary-expansion-has-zero-whitehead-torsion` | DT-24 `lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion`; `lem-product-h-cobordisms-have-zero-whitehead-torsion` |
| `thm-simple-homotopy-equivalences-have-zero-whitehead-torsion` | DT-24 `lem-product-h-cobordisms-have-zero-whitehead-torsion`; `rem-simple-homotopy-and-the-vanishing-criterion-are-at-owned` |
| `lem-zero-torsion-is-realized-by-elementary-expansions-collapses-and-cellular-basis-moves` | DT-24 `lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves` |
| `thm-a-finite-cw-homotopy-equivalence-is-simple-if-and-only-if-its-whitehead-torsion-vanishes` | DT-24 `rem-simple-homotopy-and-the-vanishing-criterion-are-at-owned`; `thm-smooth-s-cobordism-theorem` |

These AT-22/AT-23 consumers are planned, not published, so neither supplier is
an independent Phase-2 root at this checkout. DT-24's geometric handle and
Whitney rows are downstream consumers, not substitute suppliers.


## Commutative algebra

No new A/B supplier is needed for the live Dependent Choice defect, so this is
not a Phase-2 root. Phase 3 must rehome the already-published
`def-dependent-choice` from `compactness-in-metric-spaces` (order 120) to
`countability-and-uncountability` (order 18), immediately after
`def-countable-choice`; add the latter A page to CA-1's requirements. It must
also replace that item's inapplicable `def-sequence` dependency and its two
matching body links with `def-function`, because the published sequence item
only defines real-valued sequences. Then add `def-dependent-choice` to the
published Abstract Algebra item
`thm-equivalent-characterizations-of-noetherian-modules`, whose proof already
uses it while its current Facts block denies that dependency. Published files
remain read-only until Phase 3.

### Other deferred published repairs

These 19 page-level B-for-A cutovers use already-published suppliers. They add
no Phase-2 pair, but remain exact Phase-3 dependency work:

| consumer page | replace B supplier | with A supplier |
|---|---|---|
| `noetherian-rings-and-hilbert-basis` | `modules-over-a-pid-and-canonical-forms-examples` | `modules-over-a-pid-and-canonical-forms` |
| `localisation-of-modules-and-support` | `noetherian-rings-and-hilbert-basis-examples` | `noetherian-rings-and-hilbert-basis` |
| `prime-spectra-and-radicals` | `localisation-of-modules-and-support-examples` | `localisation-of-modules-and-support` |
| `artinian-rings-and-length` | `prime-spectra-and-radicals-examples` | `prime-spectra-and-radicals` |
| `associated-primes-and-primary-decomposition` | `artinian-rings-and-length-examples` | `artinian-rings-and-length` |
| `integral-extensions-and-going-up` | `associated-primes-and-primary-decomposition-examples` | `associated-primes-and-primary-decomposition` |
| `noether-normalisation-and-nullstellensatz` | `integral-extensions-and-going-up-examples` | `integral-extensions-and-going-up` |
| `valuation-rings-and-discrete-valuation-rings` | `noether-normalisation-and-nullstellensatz-examples` | `noether-normalisation-and-nullstellensatz` |
| `dedekind-domains-and-ideal-classes` | `valuation-rings-and-discrete-valuation-rings-examples` | `valuation-rings-and-discrete-valuation-rings` |
| `krull-dimension-and-height-theorems` | `dedekind-domains-and-ideal-classes-examples` | `dedekind-domains-and-ideal-classes` |
| `rees-modules-artin-rees-and-hilbert-samuel-theory` | `krull-dimension-and-height-theorems-examples` | `krull-dimension-and-height-theorems` |
| `flatness-and-faithful-flatness` | `rees-modules-artin-rees-and-hilbert-samuel-theory-examples` | `rees-modules-artin-rees-and-hilbert-samuel-theory` |
| `inverse-limits-and-noetherian-completion` | `flatness-and-faithful-flatness-examples` | `flatness-and-faithful-flatness` |
| `henselian-rings-and-equicharacteristic-cohen-structure` | `inverse-limits-and-noetherian-completion-examples` | `inverse-limits-and-noetherian-completion` |
| `zariski-topology-on-prime-spectra` | `henselian-rings-and-equicharacteristic-cohen-structure-examples` | `henselian-rings-and-equicharacteristic-cohen-structure` |
| `koszul-complexes-and-regular-sequences` | `zariski-topology-on-prime-spectra-examples` | `zariski-topology-on-prime-spectra` |
| `depth-and-cohen-macaulay-modules` | `koszul-complexes-and-regular-sequences-examples` | `koszul-complexes-and-regular-sequences` |
| `regular-local-rings-and-homological-dimension` | `depth-and-cohen-macaulay-modules-examples` | `depth-and-cohen-macaulay-modules` |
| `absolute-values-completions-and-p-adic-numbers` | `regular-local-rings-and-homological-dimension-examples` | `regular-local-rings-and-homological-dimension` |

CA-11 must move `thm-dimension-and-parameters-for-modules` and then
`thm-additivity-of-hilbert-samuel-multiplicity` immediately before
`thm-hilbert-samuel-dimension-theorem`. CA-11 and CA-12 must remove only their
duplicated seven-item A-page `examples` memberships, retaining the companion B
pages and item homes. The future machine-plan splice must also resynchronize
the 187 dependency arrays and 104 titles from immutable item frontmatter.

Thus the semantic direct-consumer set has five published items: the one
undeclared Abstract Algebra consumer above plus the four declared Commutative
Algebra consumers below. The 139-item closure below excludes the four CA roots
and the Abstract Algebra direct consumer; it is the additional transitive
published impact after the Phase-3 rehome and metadata repair.

### Item-exact impact of the Dependent Choice rehome

`def-dependent-choice` is itself **published**.  Its four declared direct CA
consumers are
`lem-noetherian-ring-maximal-element-annihilator-exists`,
`thm-lasker-noether-primary-decomposition`,
`cor-radical-ideals-as-intersections-of-minimal-primes-noetherian`, and
`thm-complete-nakayama-lemma`.  The first three are homed on CA-5 A and the
fourth on CA-13 A.  Excluding those four roots, their complete distinct
transitive published consumer closure has 139 items, grouped by home page as
follows.

- `associated-primes-and-primary-decomposition` (15):
  `cor-associated-primes-empty-iff-module-zero-noetherian`,
  `cor-support-is-union-of-closures-of-associated-primes`,
  `lem-associated-primes-from-a-minimal-primary-decomposition`,
  `lem-contraction-recovers-primary-component-after-localising-away-from-radical`,
  `lem-localisation-of-a-primary-submodule`,
  `lem-zero-divisor-annihilator-contained-in-associated-prime`,
  `thm-existence-of-associated-primes`,
  `thm-finiteness-of-associated-primes`,
  `thm-first-uniqueness-theorem-primary-decomposition`,
  `thm-isolated-primary-components-are-unique`,
  `thm-minimal-support-primes-are-associated`,
  `thm-primary-submodule-characterisations`,
  `thm-prime-filtration-of-a-finite-module`,
  `thm-second-uniqueness-theorem-primary-decomposition`, and
  `thm-zero-divisors-on-a-module`.
- `associated-primes-and-primary-decomposition-examples` (2):
  `ex-embedded-component-varies-but-radical-does-not` and
  `ex-primary-localisation-kills-a-component`.
- `depth-and-cohen-macaulay-modules` (49):
  `cor-cohen-macaulay-modules-have-no-embedded-associated-primes`,
  `cor-cohen-macaulayness-localises`,
  `cor-completion-preserves-cohen-macaulayness-two-directions`,
  `cor-depth-as-first-nonzero-ext`,
  `cor-depth-bounded-by-number-of-ideal-generators`,
  `cor-depth-depends-only-on-radical`,
  `cor-depth-lemma-unequal-depth-equalities`,
  `cor-depth-of-a-finite-local-module-at-most-its-dimension`,
  `cor-depth-zero-iff-ideal-contained-in-an-associated-prime`,
  `cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module`,
  `cor-flat-local-cohen-macaulay-fibre-criterion`,
  `cor-flat-local-depth-additivity`,
  `cor-one-regular-system-of-parameters-implies-cohen-macaulay`,
  `cor-polynomial-extension-preserves-cohen-macaulayness`,
  `cor-regular-quotient-cohen-macaulay-equivalence`,
  `cor-zero-dimensional-local-modules-are-cohen-macaulay`,
  `lem-associated-prime-after-power-regular-quotient`,
  `lem-associated-primes-of-cohen-macaulay-module-have-full-dimension`,
  `lem-cohen-macaulay-parameter-first-element-regular`,
  `lem-cohen-macaulay-parameter-sequence-induction`,
  `lem-completion-reflects-depth`,
  `lem-depth-at-a-prime-bounded-by-local-dimension`,
  `lem-depth-bounded-by-associated-prime-quotient-dimension`,
  `lem-depth-lemma-lower-bound-left`,
  `lem-depth-lemma-lower-bound-middle`,
  `lem-depth-lemma-lower-bound-right`,
  `lem-depth-localisation-inequality`,
  `lem-depth-quotient-by-regular-element`,
  `lem-depth-radical-invariance-via-ext`,
  `lem-koszul-depth-first-nonzero-cohomology`,
  `lem-localisation-of-cohen-macaulay-module-depth-dimension-equality`,
  `lem-maximal-regular-sequence-stops-at-associated-prime`,
  `lem-maximal-regular-sequences-have-common-length-ext`,
  `lem-polynomial-extension-depth-increases-by-one`,
  `lem-regular-element-exists-by-prime-avoidance`,
  `lem-regular-quotient-preserves-depth-dimension-gap`,
  `thm-associated-primes-of-cohen-macaulay-modules`,
  `thm-completion-preserves-cohen-macaulayness`,
  `thm-depth-bounded-by-support-dimension`,
  `thm-depth-equals-maximal-regular-sequence-length`,
  `thm-depth-formula-for-flat-local-homomorphisms`, `thm-depth-lemma`,
  `thm-depth-zero-associated-prime-criterion`,
  `thm-koszul-characterisation-of-depth`,
  `thm-localisation-of-cohen-macaulay-modules`,
  `thm-parameters-and-regular-sequences-in-cohen-macaulay-modules`,
  `thm-polynomial-extension-of-cohen-macaulay-rings`,
  `thm-radical-localisation-and-regular-quotient-properties-of-depth`, and
  `thm-regular-quotients-and-cohen-macaulayness`.
- `depth-and-cohen-macaulay-modules-examples` (12):
  `ex-cohen-macaulay-associated-primes-unmixed`,
  `ex-cohen-macaulay-ring-with-zero-divisors`,
  `ex-completion-depth-computation`, `ex-depth-lemma-three-inequalities`,
  `ex-depth-of-a-hypersurface`, `ex-depth-of-a-union-of-planes`,
  `ex-maximal-cohen-macaulay-module`, `ex-non-cohen-macaulay-local-ring`,
  `ex-parameter-sequence-fails-in-a-non-cm-ring`,
  `ex-parameter-sequence-regular-in-a-hypersurface`,
  `ex-polynomial-rings-cohen-macaulay`, and
  `ex-zero-dimensional-rings-cohen-macaulay`.
- `henselian-rings-and-equicharacteristic-cohen-structure` (3):
  `cor-complete-local-domain-finite-over-a-regular-power-series-ring`,
  `lem-parameter-power-series-map-injective-by-dimension`, and
  `lem-parameter-power-series-subring-makes-ring-finite`.
- `inverse-limits-and-noetherian-completion` (1):
  `thm-completion-preserves-dimension-and-hilbert-samuel-data`.
- `krull-dimension-and-height-theorems` (4):
  `cor-dimension-drops-under-a-parameter`,
  `lem-parameter-dimension-drop-is-exact`,
  `lem-parameter-ideal-equivalent-m-primary`, and
  `thm-dimension-as-minimal-number-of-radical-generators`.
- `krull-dimension-and-height-theorems-examples` (1):
  `ex-system-of-parameters-not-a-minimal-generating-set`.
- `rees-modules-artin-rees-and-hilbert-samuel-theory` (3):
  `thm-dimension-and-parameters-for-modules`,
  `thm-hilbert-samuel-dimension-theorem`, and
  `thm-multiplicity-under-reduction-by-a-parameter`.
- `regular-local-rings-and-homological-dimension` (36):
  `cor-localisations-of-regular-local-rings-are-regular`,
  `cor-regular-local-hilbert-samuel-multiplicity-one`,
  `cor-regular-local-residue-field-projective-dimension-dimension`,
  `cor-regular-local-ring-satisfies-r-one`,
  `cor-regular-local-ring-satisfies-s-two`,
  `cor-serre-normality-criterion-two-directions`,
  `lem-auslander-buchsbaum-base-case-free-module`,
  `lem-auslander-buchsbaum-first-syzygy-depth`,
  `lem-auslander-buchsbaum-projective-dimension-one`,
  `lem-depth-two-excludes-finite-punctured-extension`,
  `lem-finite-residue-field-projective-dimension-forces-depth-equals-dimension`,
  `lem-flat-local-ascent-of-regularity`, `lem-normal-domain-implies-r-one`,
  `lem-normal-domain-implies-s-two`,
  `lem-polynomial-local-regularity-fibre-step`,
  `lem-positive-depth-ring-has-regular-minimal-generator`,
  `lem-r-one-s-two-integral-element-membership`,
  `lem-r-one-s-two-intersection-of-height-one-localisations`,
  `lem-reduced-noetherian-total-fractions-and-normal-components`,
  `lem-regular-local-domain-induction`,
  `lem-regular-local-graded-surjection-has-zero-kernel`,
  `lem-regular-local-parameter-is-nonzerodivisor`,
  `lem-regular-local-quotient-by-parameter-is-regular`,
  `lem-regular-local-regular-quotient-ideal-is-parameter-generated`,
  `lem-regular-local-residue-field-koszul-resolution`,
  `lem-serre-r-zero-s-one-characterises-reducedness`,
  `thm-associated-graded-ring-of-a-regular-local-ring`,
  `thm-auslander-buchsbaum-formula`,
  `thm-auslander-buchsbaum-serre-regularity-criterion`,
  `thm-completion-preserves-regular-local-rings`,
  `thm-localisation-and-polynomial-extension-of-regular-rings`,
  `thm-one-dimensional-regular-local-rings-are-dvrs`,
  `thm-quotient-and-lifting-regularity-across-a-regular-element`,
  `thm-regular-local-rings-are-domains-and-cohen-macaulay`,
  `thm-regular-local-rings-are-normal`, and
  `thm-serre-normality-criterion`.
- `regular-local-rings-and-homological-dimension-examples` (13):
  `ex-associated-graded-polynomial-map-singular-kernel`,
  `ex-auslander-buchsbaum-first-syzygy`,
  `ex-betti-numbers-from-a-koszul-resolution`,
  `ex-betti-numbers-residue-field-regular-ring`,
  `ex-completion-regularity-invariance`, `ex-cusp-local-ring-not-regular`,
  `ex-dvrs-as-regular-local-rings`,
  `ex-finite-regular-local-base-cohen-macaulay-freeness`,
  `ex-formal-power-series-ring-regular`,
  `ex-hypersurface-regularity-at-a-rational-point`,
  `ex-localised-polynomial-ring-regular`,
  `ex-regular-flat-local-map-with-singular-closed-fibre`, and
  `ex-regular-local-ambient-cover-minimal-dimension`.


## Combinatorics

All 49 published Combinatorics B pages and their B-only items have zero
outside consumers. The new quantitative induced-density A/B pair is Phase-2
eligible because two of its interface items have published consumers. The new
finite-abelian-character interface has no published consumer and is not an
independent Phase-2 root. Skolem, weak-perfect, substitution-perfect, and
plane-dual changes below are Phase-3 insertions or metadata repairs on published
pages. The Strong Perfect Graph Theorem seam remains blocked, and planned rows
441/442 remain frozen.

### Scaffold III.4 — exact deferred published-content repairs

The recorded-source defects begin at exactly six published `rem-` suppliers:

| recorded supplier | direct published consumer(s) |
|---|---|
| `rem-skolem-construction-produces-a-steiner-triple-system` | `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six` |
| `rem-fox-sudakov-quantitative-density-theorem` | `ex-choosing-x-for-the-classical-erdos-hajnal-bound`; `thm-classical-erdos-hajnal-bound` |
| `rem-loglog-quantitative-density-theorem` | `ex-choosing-x-for-the-loglog-erdos-hajnal-bound`; `thm-loglog-erdos-hajnal-bound` |
| `rem-weak-perfect-graph-theorem-for-the-bull-route` | `thm-basic-bull-free-graphs-are-two-narrow` |
| `rem-strong-perfect-graph-theorem-for-the-bull-route` | `thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect` |
| `rem-substituting-perfect-graphs-preserves-perfection-for-the-bull-route` | `thm-alpha-narrowness-is-preserved-under-substitution` |

Their complete published closures are given in §§III.4.2--III.4.4.  These six
sources account for all 19 Combinatorics consequences reported by `extcheck`;
the plane-dual defect is separate because its supplier is proved locally.

#### Scaffold III.4.1 — plane dual dependency

`thm-plane-dual-exists-and-double-dual-recovers-primal` uses
`def-plane-graph-face-and-boundary` in its statement and proof but omits it from
`deps`.  When the published-content gate is lifted, add exactly that dependency
to the item and to its spec entry.  No prose or proof change is needed.  This
existing definition is the repaired supplier.  Its complete direct published
consumer set after the repair is:

`cex-a-wild-arc-drawing-is-not-a-plane-graph`;
`cor-planar-graphs-have-no-kuratowski-subdivision`;
`def-maximal-plane-and-maximally-planar-graph`;
`def-plane-dual-multigraph`;
`lem-alternating-kempe-paths-cannot-both-occur`;
`lem-face-containment-under-plane-subgraphs`;
`lem-plane-edge-face-incidence`;
`lem-plane-graph-faces-are-finite-with-one-unbounded-face`;
`lem-plane-triangulation-is-connected`;
`prop-maximal-plane-triangulation-characterisation`;
`thm-euler-formula-for-connected-plane-graphs`; and
`thm-plane-dual-exists-and-double-dual-recovers-primal`.

Its complete transitive published consumer closure is:

`cex-a-wild-arc-drawing-is-not-a-plane-graph`;
`cex-k-four-is-planar-but-not-three-colourable`;
`cex-k-three-three-satisfies-the-planar-edge-bound`;
`cor-euler-formula-for-disconnected-plane-graphs`;
`cor-k-five-and-k-three-three-are-nonplanar`;
`cor-planar-graph-has-low-degree-vertex`;
`cor-planar-graphs-have-no-kuratowski-subdivision`;
`cor-planar-simple-graph-edge-bound`;
`cor-triangle-free-planar-edge-bound`;
`def-maximal-plane-and-maximally-planar-graph`;
`def-plane-dual-multigraph`;
`ex-euler-formula-on-a-tree-cycle-and-k-four`;
`ex-five-colouring-by-a-kempe-swap`;
`ex-one-planar-graph-two-nonisomorphic-duals`;
`ex-petersen-graph-nonplanar-by-kuratowski`;
`lem-alternating-kempe-paths-cannot-both-occur`;
`lem-edge-maximal-kuratowski-free-is-three-connected`;
`lem-equal-plane-face-boundaries-force-a-cycle`;
`lem-face-containment-under-plane-subgraphs`;
`lem-plane-edge-face-incidence`;
`lem-plane-face-handshake-by-girth`;
`lem-plane-graph-faces-are-finite-with-one-unbounded-face`;
`lem-plane-triangulation-is-connected`;
`lem-three-connected-kuratowski-free-is-planar`;
`prop-face-boundaries-in-three-connected-plane-graphs`;
`prop-face-boundaries-in-two-connected-plane-graphs`;
`prop-maximal-plane-triangulation-characterisation`;
`prop-maximally-planar-edge-characterisation`;
`prop-plane-forest-has-one-face`;
`thm-euler-formula-for-connected-plane-graphs`;
`thm-five-colour-theorem`;
`thm-kuratowski-wagner-planarity-characterisation`;
`thm-plane-dual-exists-and-double-dual-recovers-primal`; and
`thm-six-colour-theorem-for-planar-graphs`.

#### Scaffold III.4.2 — Skolem construction

The old §29.3 blocker is resolved.  Meszka's full 22-page design-theory lecture
notes give the complete Skolem construction on printed pp. 9--10, including all
blocks.  Before the published existence theorem on
`block-designs-and-finite-projective-planes`, insert, in this order:

1. `def-half-idempotent-commutative-quasigroup`;
2. `lem-cyclic-even-set-carries-a-half-idempotent-commutative-quasigroup`;
3. `thm-skolem-construction-produces-a-steiner-triple-system`.

For $v=6k+1$, take $Q=\{0,\ldots,2k-1\}$, a half-idempotent commutative
quasigroup, and $V=(Q\times\{1,2,3\})\cup\{\infty\}$.  The proof must check
pair coverage for the vertical blocks
`{(i,1),(i,2),(i,3)}` for $0\le i<k$, the three infinity blocks
`{∞,(k+i,1),(i,2)}`, `{∞,(k+i,2),(i,3)}`,
`{∞,(k+i,3),(i,1)}`, and, for $i<j$, the three cyclic layer blocks
`{(i,1),(j,1),(i∘j,2)}` and its $1\to2\to3\to1$ rotations.  Replace the
dependency of
`thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six`
on `rem-skolem-construction-produces-a-steiner-triple-system` by the new theorem.
The old remark may remain only as non-load-bearing history.

The quasigroup-existence lemma is elementary and must be proved, not imported:
start with the addition table of $\mathbb Z/(2k)$.  Its diagonal entries are
$2i$, so each even residue occurs exactly twice, at $i$ and $i+k$.  Relabel the
even output $2r$ by $r$ for $0\le r<k$, and relabel the odd outputs bijectively
by $k,\ldots,2k-1$.  Output relabelling preserves the Latin and commutative
properties and gives diagonal entries $r$ at both $r$ and $r+k$.  Thus every
input used by the Skolem verification is local and proved.

For the three new supplier items, the currently published consumer ledger is:

| supplier | direct published consumers | full transitive published consumer closure |
|---|---|---|
| `def-half-idempotent-commutative-quasigroup` | zero (its immediate consumers are new repair items) | `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six` |
| `lem-cyclic-even-set-carries-a-half-idempotent-commutative-quasigroup` | zero (its immediate consumer is a new repair item) | `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six` |
| `thm-skolem-construction-produces-a-steiner-triple-system` | `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six` | same singleton |

Sources checked as complete texts: A. Meszka, *Combinatorial Designs* lecture
notes, pp. 4 and 9--10,
`https://home.agh.edu.pl/~meszka/cd_lecturenotes.pdf` (full
22-page text); R. Gardner, *Design Theory*, §1.3, the full six-page Skolem
section,
`https://faculty.etsu.edu/gardnerr/Design-Theory/notes-Design-Theory-LR2/Design-Theory-LR2-1-3.pdf`.

#### Scaffold III.4.3 — quantitative induced density

The two published remarks
`rem-fox-sudakov-quantitative-density-theorem` and
`rem-loglog-quantitative-density-theorem` currently support proof-bearing
results.  Author the full proof chain in §III.5, then replace dependencies as
follows:

- `thm-classical-erdos-hajnal-bound`: replace the Fox--Sudakov remark with
  `cor-fox-sudakov-quantitative-induced-density-bound`;
- `ex-choosing-x-for-the-classical-erdos-hajnal-bound`: make the same
  replacement;
- `thm-loglog-erdos-hajnal-bound`: replace the log-log remark with
  `thm-loglog-quantitative-induced-density-bound`;
- `ex-choosing-x-for-the-loglog-erdos-hajnal-bound`: make the same replacement.

The old remarks then remain orientation only.  Current published consumers are:

| repaired supplier | direct published consumers | full transitive published consumer closure |
|---|---|---|
| `cor-fox-sudakov-quantitative-induced-density-bound` | `ex-choosing-x-for-the-classical-erdos-hajnal-bound`; `thm-classical-erdos-hajnal-bound` | `cor-the-loglog-bound-eventually-dominates-the-classical-bound`; `ex-choosing-x-for-the-classical-erdos-hajnal-bound`; `ex-p-three-free-graphs-have-much-larger-homogeneous-sets`; `thm-classical-erdos-hajnal-bound` |
| `thm-loglog-quantitative-induced-density-bound` | `ex-choosing-x-for-the-loglog-erdos-hajnal-bound`; `thm-loglog-erdos-hajnal-bound` | `cor-the-loglog-bound-eventually-dominates-the-classical-bound`; `ex-choosing-x-for-the-loglog-erdos-hajnal-bound`; `ex-p-three-free-graphs-have-much-larger-homogeneous-sets`; `thm-loglog-erdos-hajnal-bound` |

#### Scaffold III.4.4 — perfect-graph inputs on the bull route

Two bounded repairs can be made on the published bull A page, strictly before
their present consumers:

- insert `thm-weak-perfect-graph-theorem`, proved by the bounded Lovász
  argument already researched for GT-13, and replace the dependency of
  `thm-basic-bull-free-graphs-are-two-narrow` on
  `rem-weak-perfect-graph-theorem-for-the-bull-route`;
- insert `thm-substitution-preserves-perfect-graphs`, proved by the standard
  colouring/clique-number argument, and replace the dependency of
  `thm-alpha-narrowness-is-preserved-under-substitution` on
  `rem-substituting-perfect-graphs-preserves-perfection-for-the-bull-route`.

Their exact published consumer ledgers are:

| repaired supplier | direct published consumers | full transitive published consumer closure |
|---|---|---|
| `thm-weak-perfect-graph-theorem` | `thm-basic-bull-free-graphs-are-two-narrow` | `cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter`; `cor-the-bull-graph-has-the-erdos-hajnal-property`; `cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property`; `ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit`; `ex-the-five-cycle-is-not-one-narrow`; `fs-two-narrow-implies-one-narrow`; `lem-the-e-graph-and-the-bird-graph-are-wonderful`; `thm-basic-bull-free-graphs-are-two-narrow`; `thm-bull-free-graphs-are-two-narrow`; `thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property` |
| `thm-substitution-preserves-perfect-graphs` | `thm-alpha-narrowness-is-preserved-under-substitution` | `cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter`; `cor-the-bull-graph-has-the-erdos-hajnal-property`; `cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property`; `ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit`; `ex-the-five-cycle-is-not-one-narrow`; `fs-two-narrow-implies-one-narrow`; `lem-the-e-graph-and-the-bird-graph-are-wonderful`; `thm-alpha-narrowness-is-preserved-under-substitution`; `thm-bull-free-graphs-are-two-narrow`; `thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property` |

The third input is a genuine hard blocker.  Chudnovsky--Safra's full bull-free
paper, Theorem 4.3, explicitly invokes the Strong Perfect Graph Theorem; it does
not supply a bounded replacement.  The full Annals proof of SPGT is 178 pages,
and GT-13 correctly denies it as a subject-scale theorem.  Therefore
`thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect`
cannot be repaired within this scaffold.  The unrepaired supplier
`rem-strong-perfect-graph-theorem-for-the-bull-route` has the direct published
consumer
`thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect`;
its full transitive published consumer closure is:

`cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter`;
`cor-the-bull-graph-has-the-erdos-hajnal-property`;
`cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property`;
`ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit`;
`ex-the-five-cycle-is-not-one-narrow`;
`fs-two-narrow-implies-one-narrow`;
`lem-the-e-graph-and-the-bird-graph-are-wonderful`;
`thm-basic-bull-free-graphs-are-two-narrow`;
`thm-bull-free-graphs-are-two-narrow`;
`thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property`;
`thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect`.

The unpublished 441/442 E-graph/Bird pair reaches this closure through
`lem-the-e-graph-and-the-bird-graph-are-wonderful`.  It is frozen: do not author
or splice it as buildable unless a separate, proved SPGT supplier is undertaken.
Recording SPGT again does not discharge the blocker.

Sources checked in full: Chudnovsky and Safra, *The Erdős--Hajnal conjecture for
bull-free graphs*, JCTB 98 (2008), Theorem 4.3; Chudnovsky, Robertson, Seymour,
and Thomas, *The strong perfect graph theorem*, Annals of Mathematics 164
(2006), pp. 51--229.

### Scaffold III.5 — new pair QID: quantitative induced density and the log-log step

**Placement:** A at 408.1, B at 408.2, after
`blockades-combs-and-pattern-graphs-examples`.  The A page requires only the A
pages `induced-subgraphs-and-hereditary-graph-classes`,
`regular-pairs-and-induced-counting`,
`sparse-restricted-subgraphs-and-rodl-nikiforov`,
`blockades-combs-and-pattern-graphs`,
`the-logarithm-and-general-powers`, and
`finite-counting-and-binomial-coefficients`.  The B page requires QID-A only and
is a dependency leaf.

**A slug:** `quantitative-induced-density-and-the-loglog-step`.

**A items, in dependency order:**

1. `def-induced-copy-density-and-homogeneous-restriction-parameter`;
2. `def-labelled-blowup-and-good-induced-copy`;
3. `lem-good-copy-extension-count`;
4. `lem-few-induced-copies-exclude-a-fixed-labelled-blowup`;
5. `lem-local-special-copy-trichotomy`;
6. `lem-special-copy-trichotomy-produces-a-restricted-blockade`;
7. `def-subreciprocal-function-and-ell-divisibility`;
8. `lem-subreciprocal-functions-close-under-the-density-recursion`;
9. `lem-ell-divisibility-amplifies-through-a-blockade`;
10. `thm-quantitative-density-theorem-for-ell-divisive-graphs`;
11. `cor-fox-sudakov-quantitative-induced-density-bound`;
12. `thm-loglog-quantitative-induced-density-bound`.

Items 3--6 reconstruct Sections 3--4 of the source: the local special-copy
trichotomy, extension count, blowup exclusion, and the restricted-blockade
induction.  Items 7--10 reconstruct the subreciprocal-function and
\(\ell\)-divisibility recursion of Section 5.  Items 11--12 are separate because
they are the exact interfaces consumed by the two published bounds.  Neither may
be proved by citing the old `rem-` items.

**B slug:** `quantitative-induced-density-and-the-loglog-step-examples`.
Its items are local numerical checks only:

1. `ex-a-labelled-blowup-and-its-good-copies`;
2. `ex-checking-the-subreciprocal-condition-for-the-quadratic-log-bound`;
3. `ex-checking-the-subreciprocal-condition-for-the-loglog-bound`;
4. `ex-comparing-the-two-quantitative-density-scales`.

Each of QID-A items 1--10 has **zero currently published direct consumers**: its
immediate consumers are new items on QID-A.  Because item 10 feeds both
interfaces, the full transitive *published* consumer closure of each of items
1--10 is exactly
`cor-the-loglog-bound-eventually-dominates-the-classical-bound`,
`ex-choosing-x-for-the-classical-erdos-hajnal-bound`,
`ex-choosing-x-for-the-loglog-erdos-hajnal-bound`,
`ex-p-three-free-graphs-have-much-larger-homogeneous-sets`,
`thm-classical-erdos-hajnal-bound`, and
`thm-loglog-erdos-hajnal-bound`.  The two interface items have the split,
nonzero ledgers in §III.4.3.  The B items have zero outside direct or transitive
consumers by construction.

Primary source checked as a complete text: Bucić, Nguyen, Scott, and Seymour,
*Induced subgraph density. I. A loglog step towards Erdős--Hajnal*, arXiv
2301.10147v3, especially §§3--5, `https://arxiv.org/html/2301.10147`.

### Scaffold III.6 — superseded, continued, and reordered future CB work

The following corrections replace the earlier “new pair” descriptions.  Each
named B page requires only its companion A plus genuinely necessary earlier A
background and is a leaf.  Unless a nonzero ledger is stated below, every new
item in these future continuations has **zero currently published direct
consumers and zero currently published transitive consumers**.

- **Withdraw duplicate cores.** CB-15, CB-16, CB-6, CB-7, CB-8, CB-10, CB-13,
  CB-12, and substantial parts of CB-14 are now published.  Do not mint a second
  finite-counting, symbolic-method, recurrence, lattice-path, partition,
  algebraic/spectral, probabilistic-method, or plane-graph spine.  Retain only
  genuinely new continuation items after their published A-page prerequisites.
- **CB-23 becomes** `polynomial-method-chevalley-warning-and-finite-field-kakeya`
  (and its examples page), containing Chevalley--Warning, Erdős--Ginzburg--Ziv,
  and Dvir's finite-field Kakeya theorem.  It requires the published
  `linear-algebra-methods-in-combinatorics` A page and the appropriate published
  finite-field A page.  The combinatorial Nullstellensatz, polynomial identity
  lemma, Cauchy--Davenport, Alon--Füredi, multilinearisation, and the nonuniform
  Frankl--Wilson theorem are already published and must not be duplicated.
- CB-23's EGZ item is
  `thm-erdos-ginzburg-ziv-via-chevalley-warning`.  If CB-33 retains its sumset
  proof, that later item is
  `thm-erdos-ginzburg-ziv-via-sumset-induction` and explicitly cites the first
  in an agreement remark; neither page mints a second unqualified canonical id.
- **Move Alon--Tarsi to GT-12**, on or after the list-colouring definitions.  Its
  planar bipartite corollary moves to GT-23, after the plane-graph prerequisite.
  No theorem may cite list colouring before GT-12 defines it.
- **CB-24 becomes** `uniform-and-modular-intersection-theorems` (and examples):
  uniform Ray--Chaudhuri--Wilson, modular Frankl--Wilson, and the distance-graph
  application to Borsuk.  It requires the published linear-algebra methods page
  and explicit earlier Euclidean and finite-field suppliers.  It must not repeat
  the published nonuniform theorem.
- **GT-7a is withdrawn as a duplicate.** Adjacency/Laplacian matrices,
  Matrix--Tree, Binet--Cauchy, and the basic spectral-gap material already live
  on `algebraic-and-spectral-graph-theory`.  GT-7b remains a continuation for
  interlacing, Hoffman's bound, and strongly regular graphs.  The actual item id
  is `thm-binet-cauchy-formula`; the obsolete promised
  `thm-cauchy-binet-formula` must never be cited.
- **GT-19 becomes** `triangle-removal-and-roths-theorem` (and examples), requiring
  `regular-pairs-and-induced-counting`.  That published page already proves the
  regularity, counting, removal, and induced-removal lemmas, and
  `extremal-graph-theory` already proves Erdős--Stone--Simonovits; GT-19 mints
  neither again.
- **CB-22 species is source-complete, not blocked.** Use Yorgey's full
  dissertation, Chapter 3 (206-page text), and the independent full treatment
  in arXiv:1312.0542 §3.  It requires the published Category Theory A page
  `categories-functors-and-natural-transformations`, never its examples page.
  Sources: `https://www.cis.upenn.edu/~sweirich/papers/yorgey-thesis.pdf` and
  `https://arxiv.org/abs/1312.0542`.

### Additive-character correction and new interface pair

The old §17.3.1 claim that Abstract Algebra would mint
`def-character-of-a-finite-abelian-group` is false.  The live interface is the
published A page `characters-and-the-orthogonality-relations`, whose characters
are characters of complex representations.  Insert a small shared A/B interface
at 222.1/222.2, before the earliest coding, quasirandomness, or Fourier consumer:

- A `finite-abelian-characters-for-combinatorics` requires the A pages
  `characters-and-the-orthogonality-relations`, `cyclic-groups-and-direct-products`,
  `the-complex-exponential-and-eulers-formula`, and
  `finite-counting-and-binomial-coefficients`.  In order it mints
  `def-additive-character-of-a-finite-abelian-group`,
  `lem-additive-characters-are-one-dimensional-complex-representations`, and
  `lem-additive-character-orthogonality-from-representation-orthogonality`.
- B `finite-abelian-characters-for-combinatorics-examples` requires only its A
  companion, writes out the characters of $\mathbb Z/5\mathbb Z$, and is a leaf.

The three A suppliers have **zero currently published direct consumers and zero
currently published transitive consumers**.  CB-14c, CB-31, and CB-27 are later
future consumers and must name the exact items they use.  The B items have zero
outside consumers.  No future Combinatorics page cites the Abstract Algebra B
page.

The repaired Abstract Algebra scaffold's
`finite-averaging-and-character-theory-prerequisites` pair may be cited only for
the particular proved lemmas it actually supplies; its existence is not a
licence to cite the nonexistent old id.  Algebraic Geometry creates no new
Combinatorics dependency: it owns classical algebraic geometry, while this track
continues to own the already-published combinatorial Nullstellensatz and finite
polynomial method.  Thus the cross-track direct and transitive published
consumer counts introduced by the Algebraic Geometry reconciliation are both
**zero**.

The old future inventories also use the stale page id
`cyclic-groups-and-orders`.  In every retained CB `requires` list, replace it
with the live A-page id `cyclic-groups-and-direct-products`; never substitute
the examples page.  This is a page-edge correction only and introduces no new
item.  Apply the same deterministic repairs everywhere in retained §§22--25:

| stale prerequisite id | live A-page id |
|---|---|
| `convexity-and-jensen` | `convexity` |
| `the-axiom-of-choice-and-its-equivalents` | `order-zorn-and-the-axiom-of-choice` |
| `the-natural-logarithm` | `the-logarithm-and-general-powers` |
| `vector-spaces-and-linear-independence` | `linear-independence-bases-and-dimension` |

The last page already requires the vector-space spine, so the replacement loses
no prerequisite.  The old §27.2 build-frontier table is also obsolete:
`inner-product-spaces-and-orthogonality`,
`the-spectral-theorem-and-singular-value-decomposition`, and
`algebraic-extensions-degree-and-finite-fields` are now populated and published,
and `graph-colouring` has six live A items rather than four.  Retained future
pairs cite those live A pages and never their B companions.

### Scaffold III.7 — recorded results that must remain non-load-bearing

The following clauses supersede any earlier item list that derived a theorem or
corollary from a merely recorded result:

- **GT-15:** the grid theorem and Graph Minor Theorem may remain `rem-`
  orientation only.  Remove the proposed proof-bearing corollaries that inherit
  them, and do not restore those corollaries until a separate proved supplier
  exists.  A full graph-minors proof is a subject-scale blocker.
- **GT-22:** the Four Colour Theorem remains recorded only.  Any translation or
  consequence that uses it is also a remark, not a proof-bearing item.
- **GT-23:** Voigt's example and any conditional Grötzsch statement remain
  recorded orientation unless a complete source-backed proof is scaffolded.
  Crossing-lemma and Szemerédi--Trotter items may be proof-bearing only after
  their full authoritative sources and complete prerequisite proofs are fixed.
- **GT-24:** Tutte's 4-connected planar Hamiltonicity theorem remains recorded
  and has no proof-bearing consumer.
- **GT-17a:** the hard direction of Whitney's 2-isomorphism theorem remains
  recorded and has no proof-bearing consumer.
- **GT-20:** recorded automorphism results remain without proof-bearing
  consumers.
- The unproved clauses retained in CB-14/CB-24 are historical remarks only and
  may not support later applications.

Every supplier contemplated solely inside these still-future GT/CB pairs has
**zero currently published direct consumers and zero currently published
transitive consumers**.  The sole future pair known to reach a polluted
published closure is 441/442; it is blocked explicitly in §III.4.4 rather than
being allowed to inherit the defect.

## Complex analysis

The audit covers all 27 published A/B pairs, 54 pages, and 886 items. Its
**Phase-2 root set is empty**: every published defect uses an already-published
supplier or needs only a local Phase-3 ordering/proof repair. Complex Analysis
therefore adds no A/B pair to the dependency-only build queue.

All items on the 20 planned enrichment pairs below have **zero direct
published consumers and zero transitive published impact**:

- `green-functions-harmonic-measure-and-conformal-invariance`;
- `logarithmic-potential-capacity-and-riesz-decomposition`;
- `harmonic-hardy-classes-and-fatou-boundary-limits`;
- `analytic-hardy-spaces-and-canonical-factorisation`;
- `jensen-theory-and-nevanlinnas-first-main-theorem`;
- `nevanlinna-second-main-theorem-and-defects`;
- `elliptic-functions-and-complex-tori`;
- `level-one-modular-forms-and-the-j-invariant`;
- `riemann-surfaces-branched-maps-and-differentials`;
- `hodge-theory-on-compact-riemann-surfaces`;
- `divisors-riemann-roch-and-duality`;
- `periods-jacobians-and-abel-jacobi-theory`;
- `hyperbolic-riemann-surfaces-and-uniformization`;
- `extremal-length-and-planar-quasiconformality`;
- `beltrami-equation-and-measurable-riemann-mapping`;
- `quasisymmetry-welding-and-conformal-removability`;
- `the-dbar-complex-and-integral-solutions`;
- `hormander-estimates-and-the-levi-problem`;
- `bergman-and-szego-kernels`;
- `analytic-hypersurfaces-and-local-parametrisation`.

This zero is item-level: no item proposed on those A or B pages occurs in a
published item's `deps`, `justified_by`, or load-bearing body link. Their B
pages are singleton-A dependency leaves. They are planned-only and are not
Phase-2 eligible.

### Exact future integration coordinates (binding 2026-09-08)

Complex Analysis scaffold §M is the machine-actionable authority for this
future-only splice. It assigns the 20 A pages the odd orders 831, 833, ..., 869
and their reciprocal `-examples` B companions the following even orders 832,
834, ..., 870. The splice contains exactly **40 page objects**, **200 A item
objects**, **121 B item objects**, and **321 distinct item ids**. Every A uses
the exact direct prerequisite set in scaffold §E, expanded to stable page ids;
all are adequate, A-kind, and strictly earlier. Every B requires only its A,
reciprocally names that A as companion, has reverse degree zero, and is a leaf.

All 321 items have **zero direct published consumers and zero complete
transitive published impact**, item by item. Therefore all 20 pairs remain
planned-only enrichment and are not Phase-2 eligible. Their integration must
not apply any of the separately deferred published Phase-3 repairs.

The previously missing CA-RS-H companion inventory is now fixed as five stable
items: `ex-flat-torus-dolbeault-harmonic-representatives`,
`ex-dolbeault-h-zero-one-of-the-riemann-sphere-vanishes`,
`ex-dolbeault-cohomology-is-independent-of-hermitian-metric`,
`ex-nonharmonic-exact-dbar-form`, and
`ex-one-dimensional-constant-zero-mode-of-dolbeault-laplacian`. All five have
zero published impact and are non-suppliers.

The topology-owned pair, now present in the live plan at orders 444.1/444.2,
`classification-of-compact-connected-surfaces` and its B companion
also have zero direct and zero transitive published consumers. Exact planned
consumers are:

| planned supplier | planned direct consumer |
|---|---|
| topology compact-surface classification interface | `thm-topological-classification-compact-riemann-surfaces` on `riemann-surfaces-branched-maps-and-differentials` |
| same | `def-genus-and-euler-characteristic-compact-riemann-surface` on the same page |
| same | `thm-symplectic-homology-basis-compact-riemann-surface` on `periods-jacobians-and-abel-jacobi-theory` |
| `hodge-theory-on-compact-riemann-surfaces` | `thm-finiteness-cohomology-compact-riemann-surface` on `divisors-riemann-roch-and-duality` |
| same | `thm-nondegeneracy-of-the-residue-pairing` on the same page |
| same | `thm-serre-duality-compact-riemann-surfaces` on the same page |
| AV-21 Čech/cohomology interface | `def-cech-cohomology-holomorphic-line-bundle-sections` on `divisors-riemann-roch-and-duality` |
| same | `thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces` on the same page |

The planned Measure Theory supplier
`complex-lp-spaces-and-test-function-conventions` has planned Complex Analysis
consumer homes CA-HP-1, CA-HP-2, CA-QC-1, CA-RS-H, SC-6, and SC-7. These
planned-to-planned edges do not change its published-consumer count or Phase-2
eligibility.

### Existing published suppliers consumed by published Complex Analysis

These are Phase-3 metadata or proof repairs, not new Phase-2 suppliers:

| existing published supplier item/page | published direct consumer item/home |
|---|---|
| `lem-algebra-of-continuous-real-maps-on-a-space` / `partitions-of-unity-and-paracompactness` | `thm-complex-exponential-is-entire-with-derivative-itself` / `complex-differentiability-and-cauchy-riemann` |
| same, inherited through CA-1 | `lem-holomorphic-difference-quotient-is-jointly-continuous` / `the-winding-number-and-the-global-cauchy-theorem` |
| `thm-gaussian-integral` / `improper-and-parameter-dependent-multiple-integrals` | `ex-residue-evaluates-the-gaussian-cosine-integral-by-a-rectangle` / `the-residue-theorem-examples` |
| `thm-fundamental-theorem-of-algebra-exact-degree` / `the-fundamental-theorem-of-algebra` | `rem-fundamental-theorem-of-algebra-via-rouche` / `the-argument-principle-and-rouche` |
| same, inherited through CA-10 | `thm-rational-map-fibre-count-degree` / `the-riemann-sphere-and-mobius-transformations` |
| `prop-retracts-inject-fundamental-groups` / `applications-of-the-fundamental-group` | `cor-winding-number-classifies-loops-in-the-punctured-plane` / `simply-connected-plane-domains` |
| CA-7 circle/winding interface | `thm-cauchy-integral-formula-on-a-polydisc` / `holomorphic-functions-of-several-variables` |
| CA-7 segment-integral interface | `lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz` / the same page |
| module definitions on `modules-and-module-homomorphisms` | `def-noetherian-ring-and-module` and `lem-finite-modules-over-noetherian-rings-are-noetherian` / `holomorphic-inverse-and-weierstrass-preparation` (six exact item edges specified in the CA scaffold) |

The same audit records seven exact A-page requirement patches, singleton-A
normalization for two B pages, 325 dependency-array resynchronizations, 66
title resynchronizations, and ten local Phase-3 proof/order repairs. None
creates a planned supplier or a published-to-planned dependency.
## Computability theory

## 50. Supplier classes, cross-category seams, and validation

### Phase-2-eligible supplier closure

There are 55 direct published-to-draft edges from 47 distinct published
consumer items to 29 draft supplier roots.
Closing their draft prerequisites produces exactly 55 Phase-2-eligible items
on ten A pages.  §52 gives, for every one of the 55 items, the exact direct
published consumers and the complete transitive published consumer closure,
grouped by home page; it explicitly records zero direct consumers where
appropriate.  This is the repair set that removes all current
published-to-draft item edges.  A supplier with zero direct published
consumers can still be Phase-2 eligible when it lies on a draft path to a
published consumer.

### Planned-only suppliers with zero published impact

Every planned-only supplier id in §§45--49, whether preserved from the earlier
unbuilt inventory or newly inserted, has **0 direct published consumers** and
a **0-item complete transitive published consumer closure** in the current
graph.  This applies individually to the four DPDA ids in §45 and all A-page
ids in the following exact sets:

- `TC-32`: `def-qbf-arithmetization-operators`,
  `lem-quantifier-polynomials-agree-on-booleans`,
  `def-multilinearization-operator`,
  `lem-multilinearization-preserves-boolean-values`,
  `lem-efficient-prime-field-for-a-polynomial-soundness-budget`,
  `def-shamir-protocol-for-tqbf`,
  `lem-honest-prover-maintains-the-claim-invariant`,
  `lem-each-round-has-polynomial-communication`,
  `lem-shamir-protocol-has-perfect-completeness`,
  `lem-first-false-claim-survives-with-root-bound-probability`,
  `lem-total-soundness-follows-by-union-bound`,
  `lem-shamir-qbf-verifier-runs-in-polynomial-time`,
  `thm-tqbf-has-a-polynomial-round-interactive-proof`,
  `thm-pspace-is-contained-in-ip`, `thm-ip-equals-pspace`,
  `cor-ip-is-closed-under-complement`,
  `thm-ip-can-be-given-perfect-completeness`,
  `fs-ip-equals-pspace-needs-no-degree-reduction`,
  `fs-the-verifier-trusts-the-final-field-value`.
- `TC-34`: `def-gap-preserving-csp-reduction`,
  `lem-complete-linear-blowup-reductions-compose`,
  `def-degree-reduction-by-expander-clouds`,
  `lem-cloud-consistency-forces-near-constant-labels`,
  `thm-degree-reduction-preserves-unsatisfaction`,
  `def-constraint-graph-powering`,
  `lem-canonical-local-view-lift-preserves-perfect-satisfiability`,
  `def-plurality-decoding-of-powered-local-views`,
  `lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws`,
  `lem-plurality-consistency-along-middle-walk-positions`,
  `lem-expander-walk-violated-edge-collision-bound`,
  `lem-overlap-controlled-union-lower-bound`,
  `lem-powering-preserves-perfect-satisfiability`,
  `lem-powering-amplifies-small-gaps`, `thm-gap-amplification-step`,
  `def-explicit-constant-rate-constant-distance-code`,
  `def-reed-solomon-outer-code-and-binary-linear-inner-code`,
  `lem-reed-solomon-outer-code-has-constant-rate-and-distance`,
  `lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation`,
  `lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time`,
  `lem-concatenated-code-multiplies-rate-and-distance`,
  `thm-explicit-code-construction-and-distance`,
  `def-assignment-tester-and-rejection-ratio`,
  `def-hadamard-linearity-constraint-system`,
  `thm-linearity-test-rejects-proportionally-to-distance`,
  `def-quadratic-consistency-test`, `lem-quadratic-test-soundness`,
  `lem-circuit-satisfaction-is-linear-quadratic-consistency`,
  `thm-constant-query-assignment-tester`,
  `lem-tester-size-and-construction-time-are-polynomial`,
  `fs-repeating-constraints-amplifies-the-gap`.
- `TC-35`: `def-pcp-verifier-randomness-query-and-proof-length`,
  `def-pcp-class-with-completeness-and-soundness`,
  `lem-two-query-pcps-and-constraint-graphs-are-equivalent`,
  `def-walsh-hadamard-encoding-and-relative-distance`,
  `lem-walsh-hadamard-code-has-distance-one-half`,
  `lem-random-subsum-detects-a-nonzero-binary-vector`,
  `def-quadratic-equation-instance-and-tensor-code-oracles`,
  `lem-boolean-circuits-reduce-to-quadratic-equation-systems-with-a-fixed-input-prefix`,
  `lem-blr-testing-supplies-nearby-linear-decoders`,
  `lem-tensor-consistency-test-soundness`,
  `lem-random-subsum-verifies-all-quadratic-equations-with-constant-error`,
  `thm-constant-query-exponential-pcp-for-quadratic-equations`,
  `def-pcp-of-proximity-and-concatenation-test`,
  `lem-concatenation-test-enforces-a-shared-prefix`,
  `thm-two-piece-pcp-of-proximity`,
  `def-composition-with-an-assignment-tester`,
  `lem-composition-preserves-perfect-completeness`,
  `lem-composition-transfers-rejection-ratio`,
  `thm-alphabet-reduction-step`,
  `lem-alphabet-reduction-controls-size-and-degree`,
  `def-dinur-pcp-transformation`,
  `lem-one-transformation-preserves-satisfiability`,
  `lem-one-transformation-amplifies-gap`,
  `lem-one-transformation-has-constant-factor-growth`,
  `lem-logarithmically-many-iterations-reach-constant-gap`,
  `thm-gap-csp-is-np-hard`,
  `thm-pcp-theorem-np-equals-pcp-log-n-o-one`,
  `thm-pcp-error-amplification`,
  `fs-gap-amplification-alone-controls-alphabet`,
  `fs-pcp-proofs-are-randomized-strings`.
- `TC-36`: `def-optimization-problem-and-approximation-ratio`,
  `def-ptas-fptas-and-apx`,
  `thm-maximal-matching-is-a-two-approximation-for-vertex-cover`,
  `def-greedy-set-cover`, `def-harmonic-number-for-set-cover-analysis`,
  `lem-greedy-set-cover-charging-bound`,
  `thm-greedy-set-cover-is-an-h-n-approximation`,
  `thm-random-cut-has-expected-half-the-edges`,
  `thm-conditional-expectation-derandomizes-max-cut-half-approximation`,
  `def-metric-tsp`,
  `lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp`,
  `lem-euler-double-tree-shortcutting-does-not-increase-cost`,
  `thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp`,
  `def-gap-problem-and-gap-preserving-reduction`,
  `lem-pcp-verifier-reduces-to-gap-max-three-sat`,
  `thm-max-three-sat-has-no-ptas-unless-p-equals-np`,
  `lem-gap-three-sat-reduces-to-gap-independent-set`,
  `thm-independent-set-has-no-ptas-unless-p-equals-np`, `def-l-reduction`,
  `def-apx-hardness-and-apx-completeness`,
  `lem-l-reductions-transfer-apx-hardness`,
  `fs-exact-np-hardness-implies-no-constant-approximation`.

The B-page items in §§46--49 are leaves, not suppliers, and likewise have zero
published consumers.

### Cross-category reconciliation

- Category Theory has zero direct item edges and zero page-requirement edges
  in either direction.  No Category Theory scaffold amendment is owed.
- Foundations/Set Theory supplies only earlier published relations, functions,
  ZFC, and the legacy natural-number construction.  No path reaches the
  deferred beyond-choice page.  No Foundations/Set Theory scaffold amendment
  is owed; only the central legacy-plan hydration in §44 is needed.
- Abstract Algebra supplies polynomial and finite-field material;
  Combinatorics supplies graphs, probability, counting, trees, and Euler
  tours; Linear Algebra supplies spectral machinery.  The only omitted live
  interface is the exact randomized-complexity edge recorded in §44.  The
  unbuilt approximation page additionally needs the two graph edges in §49.
- No currently repaired outside scaffold or published page consumes a
  Computability item.  Therefore no reverse seam amendment is owed elsewhere.

### Validation gates

Before applying these instructions, rerun stable-id collision checks against
all item files, aliases, the live plan, and all prose scaffolds: the assertion
in §42 that every proposed id was new is stale.  Then require: unique item
homes; A-only, strictly earlier page requirements; B-only companion
requirements and zero B consumers; no published-to-draft item edge after the
55-item Phase-2 closure; no forward item edge; no path to recorded/unproved or
deferred-choice material; and exact equality between plan item metadata and
item frontmatter for every existing id.  The read-only audit passed all of
these structural checks except the expressly recorded metadata drift,
duplicate homes, uncovered randomized-complexity page edge, legacy-plan
hydration, and published-to-draft edges.

## 51. Exact live-plan metadata resynchronization set

The following generated inventory is binding for the current snapshot.  Each
line gives a home page and the exact ids whose plan metadata must be replaced
from item frontmatter.

- `formal-languages-encodings-and-decision-problems`: dependency arrays (7) `def-language-concatenation-powers-and-kleene-star`, `lem-language-concatenation-is-associative`, `lem-reversal-is-an-involution-and-reverses-concatenation`, `lem-induced-word-map-has-the-free-extension-property`, `def-effective-binary-encoding-and-decoder`, `def-decision-search-and-function-problem`, `fs-a-language-is-a-set-of-symbols`; titles (0) .
- `deterministic-finite-automata-and-regular-languages`: dependency arrays (2) `def-extended-dfa-transition-function`, `def-dfa-acceptance-and-recognized-language`; titles (0) .
- `myhill-nerode-theory-and-dfa-minimization`: dependency arrays (2) `thm-myhill-nerode-characterization`, `thm-pumping-lemma-for-regular-languages`; titles (0) .
- `context-free-grammars-and-normal-forms`: dependency arrays (0) ; titles (1) `def-language-generated-by-a-cfg`.
- `context-free-grammars-and-normal-forms-examples`: dependency arrays (1) `ex-elimination-of-useless-symbols`; titles (3) `ex-elimination-of-useless-symbols`, `ex-cfl-closure-under-union-concatenation-star-and-homomorphism`, `cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language`.
- `pushdown-automata-and-context-free-languages`: dependency arrays (1) `thm-pda-to-cfg-construction`; titles (0) .
- `context-free-pumping-ogden-and-parsing`: dependency arrays (2) `thm-ogdens-lemma`, `fs-the-cfl-pumping-lemma-characterizes-cfls`; titles (0) .
- `context-free-pumping-ogden-and-parsing-examples`: dependency arrays (1) `cex-the-cfl-pumping-lemma-characterizes-cfls`; titles (0) .
- `turing-machines-configurations-and-computation`: dependency arrays (3) `def-nondeterministic-accepting-computation`, `prop-valid-computation-histories-are-decidable`, `lem-acceptance-is-configuration-reachability`; titles (0) .
- `robust-machine-models-and-universal-computation`: dependency arrays (1) `lem-step-by-step-interpreter-for-machine-codes`; titles (0) .
- `diagonalization-and-the-halting-problem`: dependency arrays (1) `thm-machine-acceptance-is-recognizable`; titles (0) .
- `computable-reductions-and-rices-theorem`: dependency arrays (1) `thm-rice-shapiro-positive-information-direction`; titles (0) .
- `computable-reductions-and-rices-theorem-examples`: dependency arrays (0) ; titles (1) `ex-many-one-reductions-transfer-decidability-and-recognizability`.
- `post-correspondence-and-language-undecidability`: dependency arrays (1) `thm-proper-inclusions-in-the-chomsky-hierarchy`; titles (2) `def-chomsky-hierarchy`, `thm-proper-inclusions-in-the-chomsky-hierarchy`.
- `post-correspondence-and-language-undecidability-examples`: dependency arrays (1) `ex-proper-inclusions-in-the-chomsky-hierarchy`; titles (0) .
- `primitive-recursive-and-partial-computable-functions`: dependency arrays (3) `def-kleene-t-predicate-and-output-function`, `thm-partial-recursive-iff-turing-computable`, `thm-lambda-definable-iff-partial-recursive`; titles (0) .
- `acceptable-numberings-smn-and-the-recursion-theorem`: dependency arrays (4) `def-universal-and-acceptable-numbering`, `thm-nonhalting-is-productive-and-halting-is-creative`, `thm-myhill-isomorphism-theorem-for-creative-sets`, `fs-program-indices-are-unique`; titles (0) .
- `the-arithmetical-hierarchy-and-posts-theorem`: dependency arrays (1) `thm-halting-is-sigma-one-complete`; titles (0) .
- `oracle-computability-the-jump-and-turing-degrees`: dependency arrays (3) `def-turing-jump`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-relative-halting-is-oracle-ce-complete`; titles (23) `def-oracle-turing-machine`, `def-turing-reducibility-and-equivalence`, `lem-turing-reducibility-is-a-preorder`, `def-turing-degree-and-degree-order`, `lem-degree-order-is-representative-independent`, `def-tagged-join-of-oracles`, `thm-turing-degrees-form-an-upper-semilattice`, `def-turing-jump`, `lem-jump-is-well-defined-on-degrees`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `def-oracle-ce-completeness`, `thm-relative-halting-is-oracle-ce-complete`, `cor-finite-jumps-match-arithmetical-levels`, `def-truth-table-reduction`, `lem-total-oracle-functional-has-computable-use-bound`, `prop-truth-table-implies-turing-reduction`, `def-computably-dominated-oracle`, `lem-halting-oracle-is-not-computably-dominated`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`.
- `oracle-computability-the-jump-and-turing-degrees-examples`: dependency arrays (0) ; titles (3) `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`, `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`.
- `resource-bounds-and-machine-invariance`: dependency arrays (3) `thm-universal-simulation-with-logarithmic-overhead`, `prop-polynomial-time-and-space-are-model-invariant`, `fs-model-invariance-means-equal-step-counts`; titles (1) `thm-universal-simulation-with-logarithmic-overhead`.
- `resource-bounds-and-machine-invariance-examples`: dependency arrays (1) `cex-model-invariance-means-equal-step-counts`; titles (1) `cex-model-invariance-means-equal-step-counts`.
- `the-cook-levin-theorem`: dependency arrays (0) ; titles (5) `def-local-tableau-window`, `lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal`, `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs`, `lem-cook-levin-map-is-polynomial-time`, `fs-cook-levin-enumerates-all-branches`.
- `the-cook-levin-theorem-examples`: dependency arrays (1) `cex-cook-levin-enumerates-all-branches`; titles (0) .
- `space-complexity-savitch-and-tqbf`: dependency arrays (2) `lem-space-bounded-machines-have-exponentially-many-configurations`, `thm-tqbf-is-pspace-complete`; titles (0) .
- `time-and-space-hierarchy-theorems`: dependency arrays (1) `thm-read-only-workspace-space-hierarchy`; titles (0) .
- `logarithmic-space-nl-and-reachability`: dependency arrays (0) ; titles (1) `lem-logspace-reductions-compose`.
- `logarithmic-space-nl-and-reachability-examples`: dependency arrays (1) `cex-nl-equals-conl-follows-by-state-swapping`; titles (0) .
- `boolean-circuits-and-nonuniform-complexity`: dependency arrays (1) `thm-undecidable-languages-exist-in-p-poly`; titles (1) `fs-shannon-counting-gives-an-explicit-hard-function`.
- `the-polynomial-hierarchy-and-relativization`: dependency arrays (0) ; titles (25) `def-polynomial-hierarchy-levels`, `def-relativized-complexity-class`, `lem-ph-quantifier-block-closure`, `prop-np-and-conp-are-the-first-levels`, `lem-ph-circuit-matrix-final-block-encoding`, `thm-bounded-alternation-qbf-is-level-complete`, `lem-ph-adaptive-oracle-transcript-normal-form`, `thm-quantifier-and-oracle-characterizations-of-ph`, `prop-ph-containments-and-polynomial-space`, `lem-collapse-at-one-level-propagates`, `thm-sigma-k-equals-pi-k-implies-ph-collapse`, `cor-ph-complete-language-forces-collapse`, `lem-standard-containments-relativize`, `def-relativizing-proof-technique`, `lem-oracle-diagonalization-finite-extension`, `thm-an-oracle-separates-p-from-np`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `def-lowness-and-highness`, `prop-elementary-high-low-identities`, `def-promise-problem`, `def-promise-preserving-reduction`, `rem-oracle-and-promise-conventions-are-distinct`, `fs-relativized-separations-prove-unrelativized-separations`.
- `the-polynomial-hierarchy-and-relativization-examples`: dependency arrays (0) ; titles (4) `ex-np-and-conp-are-the-first-levels`, `ex-relativization-alone-cannot-resolve-p-versus-np`, `cex-relativized-separations-prove-unrelativized-separations`, `ex-promise-oracle-off-promise-answers`.
- `randomized-complexity-and-amplification`: dependency arrays (6) `thm-zpp-equals-rp-intersection-corp`, `lem-majority-error-bound-from-chebyshev`, `thm-adleman-bpp-is-contained-in-p-poly`, `thm-freivalds-matrix-product-verification`, `def-polynomial-identity-testing`, `thm-schwartz-zippel-lemma`; titles (1) `thm-freivalds-matrix-product-verification`.
- `counting-complexity-and-sharpp`: dependency arrays (1) `def-p-with-a-sharpp-oracle`; titles (0) .
- `expander-graphs-and-constraint-graphs`: dependency arrays (0) ; titles (31) `def-regular-multigraph-and-normalized-adjacency`, `lem-constant-vector-is-a-top-eigenvector`, `def-spectral-edge-and-vertex-expansion`, `thm-expander-mixing-lemma`, `lem-cheeger-indicator-and-positive-part-energy`, `lem-cheeger-sweep-and-layer-cake`, `thm-cheeger-inequalities-for-finite-regular-graphs`, `cor-expander-independent-sets-coloring-and-diameter`, `def-margulis-gabber-galil-graph`, `lem-margulis-family-is-constant-degree-and-neighbor-computable`, `def-finite-torus-fourier-transform`, `lem-finite-torus-fourier-orthogonality-and-affine-change`, `lem-fourier-analysis-of-margulis-adjacency`, `lem-margulis-diamond-weight-bound`, `thm-margulis-family-has-uniform-spectral-gap`, `lem-expander-size-adjustment-and-laziness`, `cor-explicit-polynomial-time-constant-degree-expanders-exist`, `def-constraint-graph-and-labeling-value`, `def-constraint-graph-regularization`, `lem-cloud-plurality-rounding`, `lem-regularization-preserves-value-quantitatively`, `lem-constraint-expander-overlay`, `def-graph-power-and-walk-constraint`, `lem-expander-walk-contraction`, `lem-expander-walk-restricted-operator`, `thm-expander-walk-hits-dense-bad-sets`, `prop-expander-walk-sampled-and-moving-sets`, `lem-expander-walk-bad-edge-return`, `prop-expander-walk-hits-bad-edges`, `def-gap-csp`, `fs-nonconstructive-expanders-suffice-for-uniform-reductions`.
- `expander-graphs-and-constraint-graphs-examples`: dependency arrays (0) ; titles (4) `ex-expander-mixing-lemma`, `ex-expander-walk-hits-dense-bad-sets`, `cex-nonconstructive-expanders-suffice-for-uniform-reductions`, `ex-constraint-cloud-rounding-and-loop-counts`.
- `kolmogorov-complexity-and-algorithmic-randomness`: dependency arrays (3) `lem-basic-conditional-complexity-inequalities`, `thm-symmetry-of-information-up-to-logarithmic-terms`, `thm-levin-schnorr-characterization`; titles (0) .

## 52. Exact draft-supplier-to-published-consumer map

**Binding integration correction (2026-09-08):** the 55 items below are draft
items homed on ten already-published pages. They are not Phase-2 eligible under
the owner's rule that Phase 2 builds new A/B pairs only. Do not hydrate,
publish, move, or repair those published-page memberships in Phase 2. Their
exact maps remain the controlling Phase-3 impact record while the Computability
scaffold is repaired to provide a compliant new-pair supplier design, or until
the owner explicitly changes the phase boundary.

For each of the 55 draft supplier items, this appendix records the
exact direct published consumers and the complete distinct transitive
published consumer closure.  Transitive reachability is allowed to pass
through draft intermediates; results are grouped by the published consumer's
home page.  A displayed zero is literal, not an omitted search result.

#### `def-computable-program-transformer` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (3):
- `oracle-computability-the-jump-and-turing-degrees` (2): `lem-halting-oracle-is-not-computably-dominated`, `thm-some-turing-reductions-are-not-truth-table-reductions`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (1): `ex-some-turing-reductions-are-not-truth-table-reductions`.

#### `def-numbering-of-partial-computable-functions` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (42):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (9): `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (2): `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-parameter-specialization-function` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (4):
- `oracle-computability-the-jump-and-turing-degrees` (2): `lem-halting-oracle-is-not-computably-dominated`, `thm-some-turing-reductions-are-not-truth-table-reductions`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (1): `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (1): `thm-totality-is-pi-two-complete`.

#### `def-universal-and-acceptable-numbering` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (4): `def-relative-computability-and-enumerability`, `lem-universal-martin-lof-test-exists`, `thm-halting-is-sigma-one-complete`, `thm-invariance-for-prefix-complexity`.

Complete transitive published consumer closure (42):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (9): `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (2): `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `lem-self-reference-construction-from-smn` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (3):
- `oracle-computability-the-jump-and-turing-degrees` (2): `lem-halting-oracle-is-not-computably-dominated`, `thm-some-turing-reductions-are-not-truth-table-reductions`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (1): `ex-some-turing-reductions-are-not-truth-table-reductions`.

#### `thm-kleenes-second-recursion-theorem` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (1): `lem-halting-oracle-is-not-computably-dominated`.

Complete transitive published consumer closure (3):
- `oracle-computability-the-jump-and-turing-degrees` (2): `lem-halting-oracle-is-not-computably-dominated`, `thm-some-turing-reductions-are-not-truth-table-reductions`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (1): `ex-some-turing-reductions-are-not-truth-table-reductions`.

#### `thm-smn-parameter-theorem` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (1): `thm-totality-is-pi-two-complete`.

Complete transitive published consumer closure (4):
- `oracle-computability-the-jump-and-turing-degrees` (2): `lem-halting-oracle-is-not-computably-dominated`, `thm-some-turing-reductions-are-not-truth-table-reductions`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (1): `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (1): `thm-totality-is-pi-two-complete`.

#### `def-computable-many-one-reduction` (home: `computable-reductions-and-rices-theorem`)

Direct published consumers (3): `def-arithmetical-level-completeness`, `def-oracle-ce-completeness`, `thm-totality-is-pi-two-complete`.

Complete transitive published consumer closure (7):
- `oracle-computability-the-jump-and-turing-degrees` (3): `cor-finite-jumps-match-arithmetical-levels`, `def-oracle-ce-completeness`, `thm-relative-halting-is-oracle-ce-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem` (3): `def-arithmetical-level-completeness`, `thm-halting-is-sigma-one-complete`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (1): `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-turing-reduction` (home: `computable-reductions-and-rices-theorem`)

Direct published consumers (1): `def-relative-computability-and-enumerability`.

Complete transitive published consumer closure (34):
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (7): `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (1): `ex-shoenfield-limit-lemma`.

#### `def-epsilon-closure-of-a-state-set` (home: `nondeterministic-finite-automata-and-subset-construction`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (3):
- `nondeterministic-finite-automata-and-subset-construction` (3): `cor-dfas-and-nfas-recognize-the-same-languages`, `def-nfa-acceptance-and-recognized-language`, `thm-subset-construction-preserves-language`.

#### `def-extended-nfa-transition` (home: `nondeterministic-finite-automata-and-subset-construction`)

Direct published consumers (1): `def-nfa-acceptance-and-recognized-language`.

Complete transitive published consumer closure (3):
- `nondeterministic-finite-automata-and-subset-construction` (3): `cor-dfas-and-nfas-recognize-the-same-languages`, `def-nfa-acceptance-and-recognized-language`, `thm-subset-construction-preserves-language`.

#### `def-subset-construction-dfa` (home: `nondeterministic-finite-automata-and-subset-construction`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (2):
- `nondeterministic-finite-automata-and-subset-construction` (2): `cor-dfas-and-nfas-recognize-the-same-languages`, `thm-subset-construction-preserves-language`.

#### `lem-subset-construction-state-invariant` (home: `nondeterministic-finite-automata-and-subset-construction`)

Direct published consumers (1): `thm-subset-construction-preserves-language`.

Complete transitive published consumer closure (2):
- `nondeterministic-finite-automata-and-subset-construction` (2): `cor-dfas-and-nfas-recognize-the-same-languages`, `thm-subset-construction-preserves-language`.

#### `prop-every-dfa-is-an-nfa` (home: `nondeterministic-finite-automata-and-subset-construction`)

Direct published consumers (1): `cor-dfas-and-nfas-recognize-the-same-languages`.

Complete transitive published consumer closure (1):
- `nondeterministic-finite-automata-and-subset-construction` (1): `cor-dfas-and-nfas-recognize-the-same-languages`.

#### `def-composition-and-primitive-recursion-schemes` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (51):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (17): `cor-delta-one-sets-are-exactly-decidable`, `def-arithmetical-level-completeness`, `def-bounded-arithmetic-formula`, `def-relative-computability-and-enumerability`, `def-sigma-n-pi-n-and-delta-n-sets`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-bounded-quantifiers-preserve-primitive-recursiveness`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `lem-prenex-normalization-preserves-level`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.


#### `def-initial-accepting-and-rejecting-configurations` (home: `turing-machines-configurations-and-computation`)

Direct published consumers (2): `def-halting-computation-and-divergence`, `def-nondeterministic-accepting-computation`.

Complete transitive published consumer closure (253):
- `arithmetization-and-the-sum-check-protocol` (8): `cor-sum-check-field-size-error-budget`, `def-sum-check-instance-and-protocol`, `fs-sum-check-computes-all-exponential-summands`, `lem-first-false-round-is-caught-by-root-bound`, `lem-sum-check-perfect-completeness`, `lem-sum-check-verifier-is-polynomial-time-given-point-evaluation`, `prop-arithmetized-formula-counting-sum`, `thm-sum-check-soundness`.
- `arithmetization-and-the-sum-check-protocol-examples` (2): `cex-sum-check-computes-all-exponential-summands`, `ex-sum-check-three-variable-transcript`.
- `boolean-circuits-and-nonuniform-complexity` (7): `def-ac-zero-nc-one-and-nc`, `fs-polynomial-size-implies-uniform-generation`, `prop-nc-one-is-contained-in-l-and-l-in-nc-two`, `thm-circuit-sat-is-np-complete`, `thm-p-is-contained-in-p-poly`, `thm-p-poly-equals-p-with-polynomial-advice`, `thm-undecidable-languages-exist-in-p-poly`.
- `boolean-circuits-and-nonuniform-complexity-examples` (2): `cex-polynomial-size-implies-uniform-generation`, `ex-p-poly-equals-p-with-polynomial-advice`.
- `classical-np-completeness-reductions` (14): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `def-reduction-gadget-and-interface-invariant`, `fs-gadget-correctness-needs-only-one-direction`, `fs-pseudopolynomial-is-polynomial-in-bit-length`, `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible`, `thm-directed-reduces-to-undirected-hamiltonian-cycle`, `thm-subset-sum-reduces-to-partition`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`, `thm-vertex-cover-reduces-to-set-cover`.
- `classical-np-completeness-reductions-examples` (3): `cex-gadget-correctness-needs-only-one-direction`, `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (8): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `fs-every-many-one-reduction-is-parsimonious`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`, `thm-pp-is-closed-under-complement`, `thm-pp-is-sign-testing-gap-p`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.
- `decidable-recognizable-and-enumerable-languages` (4): `def-computable-and-partial-computable-function`, `def-decidable-and-recognizable-language`, `prop-machine-descriptions-form-a-decidable-language`, `thm-decidable-iff-language-and-complement-are-recognizable`.
- `diagonalization-and-the-halting-problem` (14): `cor-busy-beaver-is-not-computable`, `cor-nonhalting-is-not-recognizable`, `def-busy-beaver-function`, `def-halting-problem`, `fs-diagonalization-needs-literal-source-self-reading`, `fs-undecidable-means-no-instance-can-be-answered`, `lem-diagonal-self-application-machine`, `thm-an-unrecognizable-language-exists`, `thm-busy-beaver-dominates-every-total-computable-function`, `thm-halting-is-recognizable-and-undecidable`, `thm-machine-acceptance-is-recognizable`, `thm-machine-acceptance-is-undecidable`, `thm-machine-equivalence-is-undecidable`, `thm-totality-is-not-recognizable`.
- `diagonalization-and-the-halting-problem-examples` (3): `cex-undecidable-means-no-instance-can-be-answered`, `ex-diagonal-self-application-machine`, `ex-machine-equivalence-is-undecidable`.
- `interactive-proof-systems-and-public-coins` (16): `def-completeness-and-soundness`, `def-graph-nonisomorphism-protocol`, `def-interactive-proof-transcript-round-and-strategy`, `def-ip`, `def-private-coin-public-coin-and-arthur-merlin-protocol`, `def-protocol-game-tree-and-value`, `fs-soundness-quantifies-only-over-honest-provers`, `fs-the-prover-must-run-in-polynomial-time`, `lem-hashing-commits-public-randomness`, `lem-optimal-prover-may-be-deterministic`, `lem-protocol-value-is-computable-in-polynomial-space`, `lem-sequential-repetition-amplifies-error`, `prop-np-is-contained-in-ip`, `thm-graph-nonisomorphism-is-in-ip`, `thm-ip-is-contained-in-pspace`, `thm-private-coin-ip-equals-public-coin-ip`.
- `interactive-proof-systems-and-public-coins-examples` (3): `cex-soundness-quantifies-only-over-honest-provers`, `ex-graph-nonisomorphism-is-in-ip`, `ex-sequential-repetition-amplifies-error`.
- `kolmogorov-complexity-and-algorithmic-randomness` (21): `def-conditional-kolmogorov-complexity`, `def-description-machine-and-plain-kolmogorov-complexity`, `def-effective-hausdorff-dimension`, `def-effectively-open-set-in-cantor-space`, `def-incompressibility-method`, `def-martin-lof-test-and-random-sequence`, `def-optimal-description-machine`, `def-prefix-free-machine-and-prefix-complexity`, `fs-kolmogorov-complexity-is-an-absolute-integer`, `fs-normality-implies-algorithmic-randomness`, `lem-basic-conditional-complexity-inequalities`, `lem-most-strings-are-incompressible`, `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-invariance-theorem-for-plain-complexity`, `thm-kolmogorov-complexity-is-not-computable`, `thm-kraft-inequality`, `thm-levin-schnorr-characterization`, `thm-martin-lof-randomness-implies-computable-randomness`, `thm-symmetry-of-information-up-to-logarithmic-terms`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (3): `cex-kolmogorov-complexity-is-an-absolute-integer`, `ex-effective-dimension-is-liminf-prefix-complexity-rate`, `ex-most-strings-are-incompressible`.
- `logarithmic-space-nl-and-reachability` (17): `cor-nspace-is-closed-under-complement-above-logspace`, `def-l-and-nl`, `def-logspace-many-one-reduction`, `def-logspace-uniform-circuit-family`, `def-p-complete-under-logspace-reductions`, `def-read-only-input-logspace-machine`, `fs-nl-equals-conl-follows-by-state-swapping`, `lem-logspace-machines-have-polynomially-many-configurations`, `lem-logspace-reductions-compose`, `lem-nonreachability-has-an-inductive-counting-certificate`, `lem-polynomial-time-computations-have-logspace-uniform-circuits`, `lem-reachability-count-is-verifiable-in-nl`, `thm-circuit-value-is-p-complete`, `thm-directed-st-connectivity-is-nl-complete`, `thm-immerman-szelepcsenyi-nl-equals-conl`, `thm-nl-is-contained-in-dspace-log-squared-n`, `thm-read-only-input-savitch-simulation`.
- `logarithmic-space-nl-and-reachability-examples` (3): `cex-nl-equals-conl-follows-by-state-swapping`, `ex-circuit-value-is-p-complete`, `ex-logspace-reductions-compose`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `p-np-conp-and-polynomial-reductions` (17): `def-conp`, `def-exp-and-nexp`, `def-np-by-verifiers`, `def-np-hard-and-np-complete`, `def-p`, `def-polynomial-time-many-one-reduction`, `def-polynomially-balanced-verifier`, `def-search-version-of-an-np-relation`, `fs-np-complete-means-known-not-in-p`, `fs-np-means-not-polynomial`, `lem-polynomial-reductions-compose`, `prop-an-np-complete-language-in-p-implies-p-equals-np`, `prop-np-is-contained-in-pspace-and-pspace-in-exp`, `prop-p-is-contained-in-np-intersection-conp`, `thm-polynomial-reductions-transfer-p-np-and-conp-membership`, `thm-sat-search-reduces-to-sat-decision`, `thm-verifier-and-nondeterministic-definitions-of-np-agree`.
- `p-np-conp-and-polynomial-reductions-examples` (3): `cex-np-means-not-polynomial`, `ex-np-is-contained-in-pspace-and-pspace-in-exp`, `ex-p-is-contained-in-np-intersection-conp`.
- `resource-bounds-and-machine-invariance` (3): `def-dtime-ntime-dspace-and-nspace`, `def-worst-case-time-and-space-complexity`, `lem-time-at-least-input-length-permits-complete-input-reading`.
- `robust-machine-models-and-universal-computation` (4): `def-universal-turing-machine`, `lem-multitape-simulation-has-quadratic-time-overhead`, `thm-existence-of-a-universal-turing-machine`, `thm-multitape-machines-have-one-tape-simulations`.
- `the-arithmetical-hierarchy-and-posts-theorem` (14): `cor-delta-one-sets-are-exactly-decidable`, `def-arithmetical-level-completeness`, `def-limit-computable-function`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.
- `the-polynomial-hierarchy-and-relativization` (23): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `def-lowness-and-highness`, `def-polynomial-hierarchy-levels`, `def-relativized-complexity-class`, `def-relativizing-proof-technique`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-collapse-at-one-level-propagates`, `lem-oracle-diagonalization-finite-extension`, `lem-ph-adaptive-oracle-transcript-normal-form`, `lem-ph-circuit-matrix-final-block-encoding`, `lem-ph-quantifier-block-closure`, `lem-polynomial-space-oracle-absorption`, `lem-standard-containments-relativize`, `prop-elementary-high-low-identities`, `prop-np-and-conp-are-the-first-levels`, `prop-ph-containments-and-polynomial-space`, `rem-oracle-and-promise-conventions-are-distinct`, `thm-an-oracle-collapses-p-and-np`, `thm-an-oracle-separates-p-from-np`, `thm-bounded-alternation-qbf-is-level-complete`, `thm-quantifier-and-oracle-characterizations-of-ph`, `thm-sigma-k-equals-pi-k-implies-ph-collapse`.
- `the-polynomial-hierarchy-and-relativization-examples` (4): `cex-relativized-separations-prove-unrelativized-separations`, `ex-np-and-conp-are-the-first-levels`, `ex-promise-oracle-off-promise-answers`, `ex-relativization-alone-cannot-resolve-p-versus-np`.
- `time-and-space-hierarchy-theorems` (19): `cor-l-is-properly-contained-in-pspace`, `cor-p-is-properly-contained-in-exp`, `def-efficient-universal-simulation-with-clock`, `def-read-only-input-workspace-classes`, `fs-unrestricted-diagonalization-respects-any-bound`, `lem-effective-enumeration-of-clocked-machines`, `lem-padding-transfers-time-bounds`, `lem-read-only-workspace-diagonal-machine-halts`, `lem-read-only-workspace-simulates-in-all-tapes-space`, `lem-read-only-workspace-universal-simulation`, `lem-space-bounded-universal-simulation`, `lem-space-diagonal-machine-halts`, `lem-time-diagonal-language-respects-its-budget`, `prop-hierarchy-theorems-do-not-separate-p-from-np`, `thm-deterministic-space-hierarchy`, `thm-deterministic-time-hierarchy`, `thm-gap-and-union-theorems-for-complexity-bounds`, `thm-nondeterministic-time-hierarchy`, `thm-read-only-workspace-space-hierarchy`.
- `time-and-space-hierarchy-theorems-examples` (3): `cex-unrestricted-diagonalization-respects-any-bound`, `ex-hierarchy-theorems-do-not-separate-p-from-np`, `ex-time-diagonal-language-respects-its-budget`.
- `turing-machines-configurations-and-computation` (4): `def-halting-computation-and-divergence`, `def-language-recognized-and-decided`, `def-nondeterministic-accepting-computation`, `def-partial-function-computed-by-a-machine`.
#### `def-boolean-formula-cnf-and-sat` (home: `the-cook-levin-theorem`)

Direct published consumers (2): `def-arithmetization-of-a-boolean-formula`, `def-number-sat`.

Complete transitive published consumer closure (28):
- `arithmetization-and-the-sum-check-protocol` (5): `def-arithmetization-of-a-boolean-formula`, `lem-arithmetization-agrees-on-boolean-inputs`, `lem-degree-under-arithmetized-quantifiers`, `lem-formula-arithmetization-degree-and-evaluation-cost`, `prop-arithmetized-formula-counting-sum`.
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (10): `cor-majority-sat-is-pp-complete`, `def-majority-sat`, `def-number-sat`, `def-p-with-a-sharpp-oracle`, `fs-every-many-one-reduction-is-parsimonious`, `fs-sharpp-is-a-language-class`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `prop-number-sat-is-in-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (3): `cex-sharpp-is-a-language-class`, `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `def-bounded-computation-tableau` (home: `the-cook-levin-theorem`)

Direct published consumers (1): `lem-cook-levin-can-be-made-parsimonious`.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `def-local-tableau-window` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `def-tseitin-extension-variable` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (9):
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.

#### `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs` (home: `the-cook-levin-theorem`)

Direct published consumers (1): `lem-cook-levin-can-be-made-parsimonious`.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `lem-cook-levin-map-is-polynomial-time` (home: `the-cook-levin-theorem`)

Direct published consumers (1): `lem-cook-levin-can-be-made-parsimonious`.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `lem-exactly-one-symbol-constraints-have-polynomial-size` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `lem-start-accept-and-transition-constraints-have-polynomial-size` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `lem-tableau-cell-alphabet-is-constant` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `lem-tseitin-transformation-is-linear-size-and-equisatisfiable` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (9):
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.

#### `prop-sat-is-in-np` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (10):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.

#### `thm-cook-levin-sat-is-np-complete` (home: `the-cook-levin-theorem`)

Direct published consumers (1): `thm-circuit-sat-is-np-complete`.

Complete transitive published consumer closure (10):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.

#### `thm-three-sat-is-np-complete` (home: `the-cook-levin-theorem`)

Direct published consumers (5): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-three-colourability`.

Complete transitive published consumer closure (9):
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
#### `def-pairwise-independent-hash-family` (home: `randomized-complexity-and-amplification`)

Direct published consumers (1): `lem-hashing-commits-public-randomness`.

Complete transitive published consumer closure (2):
- `interactive-proof-systems-and-public-coins` (2): `lem-hashing-commits-public-randomness`, `thm-private-coin-ip-equals-public-coin-ip`.

#### `def-probabilistic-polynomial-time-machine` (home: `randomized-complexity-and-amplification`)

Direct published consumers (2): `def-interactive-proof-transcript-round-and-strategy`, `def-ip`.

Complete transitive published consumer closure (32):
- `arithmetization-and-the-sum-check-protocol` (8): `cor-sum-check-field-size-error-budget`, `def-sum-check-instance-and-protocol`, `fs-sum-check-computes-all-exponential-summands`, `lem-first-false-round-is-caught-by-root-bound`, `lem-sum-check-perfect-completeness`, `lem-sum-check-verifier-is-polynomial-time-given-point-evaluation`, `prop-arithmetized-formula-counting-sum`, `thm-sum-check-soundness`.
- `arithmetization-and-the-sum-check-protocol-examples` (2): `cex-sum-check-computes-all-exponential-summands`, `ex-sum-check-three-variable-transcript`.
- `counting-complexity-and-sharpp` (3): `cor-majority-sat-is-pp-complete`, `thm-pp-is-closed-under-complement`, `thm-pp-is-sign-testing-gap-p`.
- `interactive-proof-systems-and-public-coins` (16): `def-completeness-and-soundness`, `def-graph-nonisomorphism-protocol`, `def-interactive-proof-transcript-round-and-strategy`, `def-ip`, `def-private-coin-public-coin-and-arthur-merlin-protocol`, `def-protocol-game-tree-and-value`, `fs-soundness-quantifies-only-over-honest-provers`, `fs-the-prover-must-run-in-polynomial-time`, `lem-hashing-commits-public-randomness`, `lem-optimal-prover-may-be-deterministic`, `lem-protocol-value-is-computable-in-polynomial-space`, `lem-sequential-repetition-amplifies-error`, `prop-np-is-contained-in-ip`, `thm-graph-nonisomorphism-is-in-ip`, `thm-ip-is-contained-in-pspace`, `thm-private-coin-ip-equals-public-coin-ip`.
- `interactive-proof-systems-and-public-coins-examples` (3): `cex-soundness-quantifies-only-over-honest-provers`, `ex-graph-nonisomorphism-is-in-ip`, `ex-sequential-repetition-amplifies-error`.

#### `def-rp-corp-zpp-bpp-and-pp` (home: `randomized-complexity-and-amplification`)

Direct published consumers (1): `thm-pp-is-sign-testing-gap-p`.

Complete transitive published consumer closure (3):
- `counting-complexity-and-sharpp` (3): `cor-majority-sat-is-pp-complete`, `thm-pp-is-closed-under-complement`, `thm-pp-is-sign-testing-gap-p`.

#### `lem-chernoff-bound-for-bernoulli-trials` (home: `randomized-complexity-and-amplification`)

Direct published consumers (1): `lem-sequential-repetition-amplifies-error`.

Complete transitive published consumer closure (4):
- `interactive-proof-systems-and-public-coins` (2): `lem-sequential-repetition-amplifies-error`, `thm-graph-nonisomorphism-is-in-ip`.
- `interactive-proof-systems-and-public-coins-examples` (2): `ex-graph-nonisomorphism-is-in-ip`, `ex-sequential-repetition-amplifies-error`.

#### `thm-schwartz-zippel-lemma` (home: `randomized-complexity-and-amplification`)

Direct published consumers (1): `rem-polynomial-identity-bounds-for-sum-check`.

Complete transitive published consumer closure (1):
- `arithmetization-and-the-sum-check-protocol` (1): `rem-polynomial-identity-bounds-for-sum-check`.

#### `def-asymptotic-resource-comparison` (home: `resource-bounds-and-machine-invariance`)

Direct published consumers (5): `def-dtime-ntime-dspace-and-nspace`, `def-read-only-input-workspace-classes`, `thm-deterministic-space-hierarchy`, `thm-deterministic-time-hierarchy`, `thm-read-only-workspace-space-hierarchy`.

Complete transitive published consumer closure (122):
- `boolean-circuits-and-nonuniform-complexity` (5): `def-ac-zero-nc-one-and-nc`, `prop-nc-one-is-contained-in-l-and-l-in-nc-two`, `thm-circuit-sat-is-np-complete`, `thm-p-is-contained-in-p-poly`, `thm-p-poly-equals-p-with-polynomial-advice`.
- `boolean-circuits-and-nonuniform-complexity-examples` (1): `ex-p-poly-equals-p-with-polynomial-advice`.
- `classical-np-completeness-reductions` (13): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `def-reduction-gadget-and-interface-invariant`, `fs-gadget-correctness-needs-only-one-direction`, `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible`, `thm-directed-reduces-to-undirected-hamiltonian-cycle`, `thm-subset-sum-reduces-to-partition`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`, `thm-vertex-cover-reduces-to-set-cover`.
- `classical-np-completeness-reductions-examples` (3): `cex-gadget-correctness-needs-only-one-direction`, `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (6): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `fs-every-many-one-reduction-is-parsimonious`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.
- `interactive-proof-systems-and-public-coins` (3): `lem-protocol-value-is-computable-in-polynomial-space`, `prop-np-is-contained-in-ip`, `thm-ip-is-contained-in-pspace`.
- `logarithmic-space-nl-and-reachability` (17): `cor-nspace-is-closed-under-complement-above-logspace`, `def-l-and-nl`, `def-logspace-many-one-reduction`, `def-logspace-uniform-circuit-family`, `def-p-complete-under-logspace-reductions`, `def-read-only-input-logspace-machine`, `fs-nl-equals-conl-follows-by-state-swapping`, `lem-logspace-machines-have-polynomially-many-configurations`, `lem-logspace-reductions-compose`, `lem-nonreachability-has-an-inductive-counting-certificate`, `lem-polynomial-time-computations-have-logspace-uniform-circuits`, `lem-reachability-count-is-verifiable-in-nl`, `thm-circuit-value-is-p-complete`, `thm-directed-st-connectivity-is-nl-complete`, `thm-immerman-szelepcsenyi-nl-equals-conl`, `thm-nl-is-contained-in-dspace-log-squared-n`, `thm-read-only-input-savitch-simulation`.
- `logarithmic-space-nl-and-reachability-examples` (3): `cex-nl-equals-conl-follows-by-state-swapping`, `ex-circuit-value-is-p-complete`, `ex-logspace-reductions-compose`.
- `p-np-conp-and-polynomial-reductions` (17): `def-conp`, `def-exp-and-nexp`, `def-np-by-verifiers`, `def-np-hard-and-np-complete`, `def-p`, `def-polynomial-time-many-one-reduction`, `def-polynomially-balanced-verifier`, `def-search-version-of-an-np-relation`, `fs-np-complete-means-known-not-in-p`, `fs-np-means-not-polynomial`, `lem-polynomial-reductions-compose`, `prop-an-np-complete-language-in-p-implies-p-equals-np`, `prop-np-is-contained-in-pspace-and-pspace-in-exp`, `prop-p-is-contained-in-np-intersection-conp`, `thm-polynomial-reductions-transfer-p-np-and-conp-membership`, `thm-sat-search-reduces-to-sat-decision`, `thm-verifier-and-nondeterministic-definitions-of-np-agree`.
- `p-np-conp-and-polynomial-reductions-examples` (3): `cex-np-means-not-polynomial`, `ex-np-is-contained-in-pspace-and-pspace-in-exp`, `ex-p-is-contained-in-np-intersection-conp`.
- `resource-bounds-and-machine-invariance` (1): `def-dtime-ntime-dspace-and-nspace`.
- `the-polynomial-hierarchy-and-relativization` (23): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `def-lowness-and-highness`, `def-polynomial-hierarchy-levels`, `def-relativized-complexity-class`, `def-relativizing-proof-technique`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-collapse-at-one-level-propagates`, `lem-oracle-diagonalization-finite-extension`, `lem-ph-adaptive-oracle-transcript-normal-form`, `lem-ph-circuit-matrix-final-block-encoding`, `lem-ph-quantifier-block-closure`, `lem-polynomial-space-oracle-absorption`, `lem-standard-containments-relativize`, `prop-elementary-high-low-identities`, `prop-np-and-conp-are-the-first-levels`, `prop-ph-containments-and-polynomial-space`, `rem-oracle-and-promise-conventions-are-distinct`, `thm-an-oracle-collapses-p-and-np`, `thm-an-oracle-separates-p-from-np`, `thm-bounded-alternation-qbf-is-level-complete`, `thm-quantifier-and-oracle-characterizations-of-ph`, `thm-sigma-k-equals-pi-k-implies-ph-collapse`.
- `the-polynomial-hierarchy-and-relativization-examples` (4): `cex-relativized-separations-prove-unrelativized-separations`, `ex-np-and-conp-are-the-first-levels`, `ex-promise-oracle-off-promise-answers`, `ex-relativization-alone-cannot-resolve-p-versus-np`.
- `time-and-space-hierarchy-theorems` (18): `cor-l-is-properly-contained-in-pspace`, `cor-p-is-properly-contained-in-exp`, `def-efficient-universal-simulation-with-clock`, `def-read-only-input-workspace-classes`, `fs-unrestricted-diagonalization-respects-any-bound`, `lem-effective-enumeration-of-clocked-machines`, `lem-padding-transfers-time-bounds`, `lem-read-only-workspace-diagonal-machine-halts`, `lem-read-only-workspace-simulates-in-all-tapes-space`, `lem-read-only-workspace-universal-simulation`, `lem-space-bounded-universal-simulation`, `lem-space-diagonal-machine-halts`, `lem-time-diagonal-language-respects-its-budget`, `prop-hierarchy-theorems-do-not-separate-p-from-np`, `thm-deterministic-space-hierarchy`, `thm-deterministic-time-hierarchy`, `thm-nondeterministic-time-hierarchy`, `thm-read-only-workspace-space-hierarchy`.
- `time-and-space-hierarchy-theorems-examples` (3): `cex-unrestricted-diagonalization-respects-any-bound`, `ex-hierarchy-theorems-do-not-separate-p-from-np`, `ex-time-diagonal-language-respects-its-budget`.

#### `def-time-and-space-constructible-function` (home: `resource-bounds-and-machine-invariance`)

Direct published consumers (6): `def-dtime-ntime-dspace-and-nspace`, `def-efficient-universal-simulation-with-clock`, `lem-space-bounded-universal-simulation`, `lem-space-diagonal-machine-halts`, `lem-time-diagonal-language-respects-its-budget`, `thm-nondeterministic-time-hierarchy`.

Complete transitive published consumer closure (121):
- `boolean-circuits-and-nonuniform-complexity` (5): `def-ac-zero-nc-one-and-nc`, `prop-nc-one-is-contained-in-l-and-l-in-nc-two`, `thm-circuit-sat-is-np-complete`, `thm-p-is-contained-in-p-poly`, `thm-p-poly-equals-p-with-polynomial-advice`.
- `boolean-circuits-and-nonuniform-complexity-examples` (1): `ex-p-poly-equals-p-with-polynomial-advice`.
- `classical-np-completeness-reductions` (13): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `def-reduction-gadget-and-interface-invariant`, `fs-gadget-correctness-needs-only-one-direction`, `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible`, `thm-directed-reduces-to-undirected-hamiltonian-cycle`, `thm-subset-sum-reduces-to-partition`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`, `thm-vertex-cover-reduces-to-set-cover`.
- `classical-np-completeness-reductions-examples` (3): `cex-gadget-correctness-needs-only-one-direction`, `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (6): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `fs-every-many-one-reduction-is-parsimonious`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.
- `interactive-proof-systems-and-public-coins` (3): `lem-protocol-value-is-computable-in-polynomial-space`, `prop-np-is-contained-in-ip`, `thm-ip-is-contained-in-pspace`.
- `logarithmic-space-nl-and-reachability` (17): `cor-nspace-is-closed-under-complement-above-logspace`, `def-l-and-nl`, `def-logspace-many-one-reduction`, `def-logspace-uniform-circuit-family`, `def-p-complete-under-logspace-reductions`, `def-read-only-input-logspace-machine`, `fs-nl-equals-conl-follows-by-state-swapping`, `lem-logspace-machines-have-polynomially-many-configurations`, `lem-logspace-reductions-compose`, `lem-nonreachability-has-an-inductive-counting-certificate`, `lem-polynomial-time-computations-have-logspace-uniform-circuits`, `lem-reachability-count-is-verifiable-in-nl`, `thm-circuit-value-is-p-complete`, `thm-directed-st-connectivity-is-nl-complete`, `thm-immerman-szelepcsenyi-nl-equals-conl`, `thm-nl-is-contained-in-dspace-log-squared-n`, `thm-read-only-input-savitch-simulation`.
- `logarithmic-space-nl-and-reachability-examples` (3): `cex-nl-equals-conl-follows-by-state-swapping`, `ex-circuit-value-is-p-complete`, `ex-logspace-reductions-compose`.
- `p-np-conp-and-polynomial-reductions` (17): `def-conp`, `def-exp-and-nexp`, `def-np-by-verifiers`, `def-np-hard-and-np-complete`, `def-p`, `def-polynomial-time-many-one-reduction`, `def-polynomially-balanced-verifier`, `def-search-version-of-an-np-relation`, `fs-np-complete-means-known-not-in-p`, `fs-np-means-not-polynomial`, `lem-polynomial-reductions-compose`, `prop-an-np-complete-language-in-p-implies-p-equals-np`, `prop-np-is-contained-in-pspace-and-pspace-in-exp`, `prop-p-is-contained-in-np-intersection-conp`, `thm-polynomial-reductions-transfer-p-np-and-conp-membership`, `thm-sat-search-reduces-to-sat-decision`, `thm-verifier-and-nondeterministic-definitions-of-np-agree`.
- `p-np-conp-and-polynomial-reductions-examples` (3): `cex-np-means-not-polynomial`, `ex-np-is-contained-in-pspace-and-pspace-in-exp`, `ex-p-is-contained-in-np-intersection-conp`.
- `resource-bounds-and-machine-invariance` (1): `def-dtime-ntime-dspace-and-nspace`.
- `the-polynomial-hierarchy-and-relativization` (23): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `def-lowness-and-highness`, `def-polynomial-hierarchy-levels`, `def-relativized-complexity-class`, `def-relativizing-proof-technique`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-collapse-at-one-level-propagates`, `lem-oracle-diagonalization-finite-extension`, `lem-ph-adaptive-oracle-transcript-normal-form`, `lem-ph-circuit-matrix-final-block-encoding`, `lem-ph-quantifier-block-closure`, `lem-polynomial-space-oracle-absorption`, `lem-standard-containments-relativize`, `prop-elementary-high-low-identities`, `prop-np-and-conp-are-the-first-levels`, `prop-ph-containments-and-polynomial-space`, `rem-oracle-and-promise-conventions-are-distinct`, `thm-an-oracle-collapses-p-and-np`, `thm-an-oracle-separates-p-from-np`, `thm-bounded-alternation-qbf-is-level-complete`, `thm-quantifier-and-oracle-characterizations-of-ph`, `thm-sigma-k-equals-pi-k-implies-ph-collapse`.
- `the-polynomial-hierarchy-and-relativization-examples` (4): `cex-relativized-separations-prove-unrelativized-separations`, `ex-np-and-conp-are-the-first-levels`, `ex-promise-oracle-off-promise-answers`, `ex-relativization-alone-cannot-resolve-p-versus-np`.
- `time-and-space-hierarchy-theorems` (17): `cor-l-is-properly-contained-in-pspace`, `cor-p-is-properly-contained-in-exp`, `def-efficient-universal-simulation-with-clock`, `fs-unrestricted-diagonalization-respects-any-bound`, `lem-effective-enumeration-of-clocked-machines`, `lem-padding-transfers-time-bounds`, `lem-read-only-workspace-diagonal-machine-halts`, `lem-read-only-workspace-simulates-in-all-tapes-space`, `lem-read-only-workspace-universal-simulation`, `lem-space-bounded-universal-simulation`, `lem-space-diagonal-machine-halts`, `lem-time-diagonal-language-respects-its-budget`, `prop-hierarchy-theorems-do-not-separate-p-from-np`, `thm-deterministic-space-hierarchy`, `thm-deterministic-time-hierarchy`, `thm-nondeterministic-time-hierarchy`, `thm-read-only-workspace-space-hierarchy`.
- `time-and-space-hierarchy-theorems-examples` (3): `cex-unrestricted-diagonalization-respects-any-bound`, `ex-hierarchy-theorems-do-not-separate-p-from-np`, `ex-time-diagonal-language-respects-its-budget`.

#### `thm-stay-put-moves-can-be-eliminated` (home: `robust-machine-models-and-universal-computation`)

Direct published consumers (1): `thm-multitape-machines-have-one-tape-simulations`.

Complete transitive published consumer closure (5):
- `diagonalization-and-the-halting-problem` (2): `fs-diagonalization-needs-literal-source-self-reading`, `thm-machine-acceptance-is-recognizable`.
- `robust-machine-models-and-universal-computation` (3): `lem-multitape-simulation-has-quadratic-time-overhead`, `thm-existence-of-a-universal-turing-machine`, `thm-multitape-machines-have-one-tape-simulations`.

#### `def-pspace-and-npspace` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (4): `cor-l-is-properly-contained-in-pspace`, `lem-polynomial-space-oracle-absorption`, `lem-protocol-value-is-computable-in-polynomial-space`, `prop-ph-containments-and-polynomial-space`.

Complete transitive published consumer closure (12):
- `interactive-proof-systems-and-public-coins` (2): `lem-protocol-value-is-computable-in-polynomial-space`, `thm-ip-is-contained-in-pspace`.
- `the-polynomial-hierarchy-and-relativization` (7): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `lem-standard-containments-relativize`, `prop-ph-containments-and-polynomial-space`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.
- `time-and-space-hierarchy-theorems` (1): `cor-l-is-properly-contained-in-pspace`.

#### `def-quantified-boolean-formula-and-tqbf` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (7):
- `the-polynomial-hierarchy-and-relativization` (5): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.

#### `def-reachable-configuration-formula` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (7):
- `the-polynomial-hierarchy-and-relativization` (5): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.

#### `lem-quantifier-reuse-keeps-reachability-formulas-polynomial` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (7):
- `the-polynomial-hierarchy-and-relativization` (5): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.

#### `lem-space-bounded-machines-have-exponentially-many-configurations` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (1): `lem-space-diagonal-machine-halts`.

Complete transitive published consumer closure (9):
- `the-polynomial-hierarchy-and-relativization` (5): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.
- `time-and-space-hierarchy-theorems` (2): `lem-space-diagonal-machine-halts`, `thm-deterministic-space-hierarchy`.

#### `prop-tqbf-is-in-pspace` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (7):
- `the-polynomial-hierarchy-and-relativization` (5): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.

#### `thm-tqbf-is-pspace-complete` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (2): `cor-ph-complete-language-forces-collapse`, `lem-polynomial-space-oracle-absorption`.

Complete transitive published consumer closure (7):
- `the-polynomial-hierarchy-and-relativization` (5): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.


#### `def-initial-arithmetic-functions` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (51):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (17): `cor-delta-one-sets-are-exactly-decidable`, `def-arithmetical-level-completeness`, `def-bounded-arithmetic-formula`, `def-relative-computability-and-enumerability`, `def-sigma-n-pi-n-and-delta-n-sets`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-bounded-quantifiers-preserve-primitive-recursiveness`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `lem-prenex-normalization-preserves-level`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-kleene-t-predicate-and-output-function` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (1): `thm-totality-is-pi-two-complete`.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-mu-minimization-and-partial-recursive-function` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-natural-number-coding-of-finite-sequences` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-primitive-recursive-function` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (2): `def-bounded-arithmetic-formula`, `lem-bounded-quantifiers-preserve-primitive-recursiveness`.

Complete transitive published consumer closure (51):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (17): `cor-delta-one-sets-are-exactly-decidable`, `def-arithmetical-level-completeness`, `def-bounded-arithmetic-formula`, `def-relative-computability-and-enumerability`, `def-sigma-n-pi-n-and-delta-n-sets`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-bounded-quantifiers-preserve-primitive-recursiveness`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `lem-prenex-normalization-preserves-level`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `lem-turing-step-coding-is-primitive-recursive` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `thm-kleene-normal-form` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (1): `thm-sigma-one-sets-are-exactly-ce-sets`.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `thm-partial-recursive-iff-turing-computable` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (42):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (9): `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (2): `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `thm-sequence-length-and-coordinate-functions-are-primitive-recursive` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.


## 53. Compliant Computability Phase-2 replacement pairs

Binding source: `research/plan-computability-theory-track.md` §53. Phase 2 now
uses five new A/B pairs at orders 584.2/.4, 596.2/.4, 598.2/.4, 612.2/.4,
and 620.2/.4. Their 30 A items replace all 29 direct old roots plus one internal
verifier interface; their 13 B items each have zero direct and zero transitive
published impact. Every B is a leaf. All 55 old draft IDs remain Phase-3
cleanup on their ten published pages.

For an old ID `x`, `Impact(x)` means its exact direct and complete transitive
published-consumer row in §52 above; unions are deduplicated by item ID. This
keeps the existing 47-consumer/55-edge map exact. The replacement map is:

| new Phase-2 A item | old §52 interfaces replaced | exact direct published consumers after Phase 3 | complete impact |
|---|---|---|---|
| `def-epsilon-nfa-word-transition` | `def-epsilon-closure-of-a-state-set`; `def-extended-nfa-transition` | `def-nfa-acceptance-and-recognized-language` | union of those two `Impact` rows |
| `thm-subset-construction-reachability-invariant` | `def-subset-construction-dfa`; `lem-subset-construction-state-invariant` | `thm-subset-construction-preserves-language` | union of those two rows |
| `prop-deterministic-automata-are-special-nondeterministic-automata` | `prop-every-dfa-is-an-nfa` | `cor-dfas-and-nfas-recognize-the-same-languages` | `Impact(prop-every-dfa-is-an-nfa)` |
| `def-turing-machine-initial-and-halting-configuration-interface` | `def-initial-accepting-and-rejecting-configurations` | `def-halting-computation-and-divergence`; `def-nondeterministic-accepting-computation` | corresponding `Impact` row |
| `thm-stay-put-elimination-with-explicit-simulation-interface` | `thm-stay-put-moves-can-be-eliminated` | `thm-multitape-machines-have-one-tape-simulations` | corresponding `Impact` row |
| `def-uniform-asymptotic-time-space-comparison` | `def-asymptotic-resource-comparison` | `def-dtime-ntime-dspace-and-nspace`; `def-read-only-input-workspace-classes`; `thm-deterministic-space-hierarchy`; `thm-deterministic-time-hierarchy`; `thm-read-only-workspace-space-hierarchy` | corresponding `Impact` row |
| `def-machine-time-and-space-constructibility` | `def-time-and-space-constructible-function` | `def-dtime-ntime-dspace-and-nspace`; `def-efficient-universal-simulation-with-clock`; `lem-space-bounded-universal-simulation`; `lem-space-diagonal-machine-halts`; `lem-time-diagonal-language-respects-its-budget`; `thm-nondeterministic-time-hierarchy` | corresponding `Impact` row |
| `def-primitive-recursive-functions-by-initial-functions-and-schemes` | `def-composition-and-primitive-recursion-schemes`; `def-initial-arithmetic-functions`; `def-primitive-recursive-function`; `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive`; `thm-sequence-length-and-coordinate-functions-are-primitive-recursive` | `def-bounded-arithmetic-formula`; `lem-bounded-quantifiers-preserve-primitive-recursiveness` | union of those five rows |
| `def-kleene-computation-predicate-and-output-map` | `def-kleene-t-predicate-and-output-function`; `def-natural-number-coding-of-finite-sequences`; `lem-turing-step-coding-is-primitive-recursive` | `thm-totality-is-pi-two-complete` | union of those three rows |
| `thm-kleene-normal-form-for-the-fixed-machine-coding` | `def-mu-minimization-and-partial-recursive-function`; `thm-kleene-normal-form`; `thm-partial-recursive-iff-turing-computable` | `thm-sigma-one-sets-are-exactly-ce-sets` | union of those three rows |
| `def-computable-many-one-reducibility-interface` | `def-computable-many-one-reduction` | `def-arithmetical-level-completeness`; `def-oracle-ce-completeness`; `thm-totality-is-pi-two-complete` | corresponding `Impact` row |
| `def-oracle-turing-reducibility-interface` | `def-turing-reduction` | `def-relative-computability-and-enumerability` | corresponding `Impact` row |
| `def-acceptable-numbering-with-universal-evaluation` | `def-numbering-of-partial-computable-functions`; `def-universal-and-acceptable-numbering` | `def-relative-computability-and-enumerability`; `lem-universal-martin-lof-test-exists`; `thm-halting-is-sigma-one-complete`; `thm-invariance-for-prefix-complexity` | union of those two rows |
| `thm-smn-for-the-fixed-acceptable-numbering` | `def-parameter-specialization-function`; `thm-smn-parameter-theorem` | `thm-totality-is-pi-two-complete` | union of those two rows |
| `thm-kleene-fixed-point-theorem-for-program-indices` | `def-computable-program-transformer`; `lem-self-reference-construction-from-smn`; `thm-kleenes-second-recursion-theorem` | `lem-halting-oracle-is-not-computably-dominated` | union of those three rows |
| `def-polynomial-time-verifier-and-reduction-interface` | no old root; internal only | none | union of the nine SAT/space-interface impacts below |
| `def-probabilistic-polynomial-time-machine-interface` | `def-probabilistic-polynomial-time-machine` | `def-interactive-proof-transcript-round-and-strategy`; `def-ip` | corresponding `Impact` row |
| `def-rp-corp-zpp-bpp-and-pp-classes` | `def-rp-corp-zpp-bpp-and-pp` | `thm-pp-is-sign-testing-gap-p` | corresponding `Impact` row |
| `def-pairwise-independent-hash-family-interface` | `def-pairwise-independent-hash-family` | `lem-hashing-commits-public-randomness` | corresponding `Impact` row |
| `lem-chernoff-bound-for-independent-bernoulli-trials` | `lem-chernoff-bound-for-bernoulli-trials` | `lem-sequential-repetition-amplifies-error` | corresponding `Impact` row |
| `thm-schwartz-zippel-over-finite-fields` | `thm-schwartz-zippel-lemma` | `rem-polynomial-identity-bounds-for-sum-check` | corresponding `Impact` row |
| `def-boolean-formulas-cnf-and-satisfiability-interface` | `def-boolean-formula-cnf-and-sat` | `def-arithmetization-of-a-boolean-formula`; `def-number-sat` | corresponding `Impact` row |
| `def-bounded-turing-computation-tableau-interface` | `def-bounded-computation-tableau`; `def-local-tableau-window` | `lem-cook-levin-can-be-made-parsimonious` | union of those two rows |
| `lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations` | `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs`; `lem-exactly-one-symbol-constraints-have-polynomial-size`; `lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal`; `lem-start-accept-and-transition-constraints-have-polynomial-size`; `lem-tableau-cell-alphabet-is-constant` | `lem-cook-levin-can-be-made-parsimonious` | union of those five rows |
| `lem-tableau-to-cnf-map-has-polynomial-size-and-time` | `def-tseitin-extension-variable`; `lem-cook-levin-map-is-polynomial-time`; `lem-tseitin-transformation-is-linear-size-and-equisatisfiable` | `lem-cook-levin-can-be-made-parsimonious` | union of those three rows |
| `thm-cook-levin-sat-completeness-interface` | `prop-sat-is-in-np`; `thm-cook-levin-sat-is-np-complete` | `thm-circuit-sat-is-np-complete` | union of those two rows |
| `thm-three-sat-completeness-interface` | `thm-three-sat-is-np-complete` | `cor-clique-is-np-complete`; `cor-hamiltonian-path-and-cycle-are-np-complete`; `thm-three-sat-reduces-to-clique`; `thm-three-sat-reduces-to-directed-hamiltonian-cycle`; `thm-three-sat-reduces-to-three-colourability` | corresponding `Impact` row |
| `def-polynomial-space-and-nondeterministic-polynomial-space` | `def-pspace-and-npspace` | `cor-l-is-properly-contained-in-pspace`; `lem-polynomial-space-oracle-absorption`; `lem-protocol-value-is-computable-in-polynomial-space`; `prop-ph-containments-and-polynomial-space` | corresponding `Impact` row |
| `lem-space-bounded-machine-configuration-count` | `lem-space-bounded-machines-have-exponentially-many-configurations` | `lem-space-diagonal-machine-halts` | corresponding `Impact` row |
| `thm-tqbf-pspace-completeness-interface` | `def-quantified-boolean-formula-and-tqbf`; `def-reachable-configuration-formula`; `lem-quantifier-reuse-keeps-reachability-formulas-polynomial`; `prop-tqbf-is-in-pspace`; `thm-tqbf-is-pspace-complete` | `cor-ph-complete-language-forces-collapse`; `lem-polynomial-space-oracle-absorption` | union of those five rows |

Phase 3 performs the exact 55-edge cutover and adds the eight A-page
requirements listed in source §53.3. No old draft item is published in Phase 2.
All new IDs and orders are collision-free; no new closure reaches recorded or
deferred material, and no source blocker remains.


## Foundations / Set Theory

## 7.1 Recorded-Not-Proved closure and prose defects

The 402-item published Foundations graph has **zero direct and zero transitive**
`deps`/`justified_by` paths to the 22 deferred catalogue items; zero published-
to-draft dependencies; and zero cross-page forward dependencies. The only
nonempty well-definedness fields are legitimate same-page forward justifiers:
`def-filter-base -> lem-filter-base-generates`,
`def-first-uncountable-ordinal ->
thm-omega-one-is-the-least-uncountable-ordinal`, and
`def-cofinality -> thm-cofinality-basics`.

The prose scan nevertheless found three direct catalogue uses. These are
defects, not exemptions:

| published item | forbidden use | exact deferred repair |
|---|---|---|
| `def-well-order` | `external_refs: [rem-cohen-first-model]` plus the Dedekind-finite-model paragraph | remove the ref and paragraph; retain only the positive definition and locally proved well-order facts |
| `def-ultrafilter` | `external_refs: [rem-feferman-no-free-ultrafilter-in-zf, rem-blass-model-without-ultrafilters]` plus both model paragraphs | remove both refs and both quoted conclusions; retain the definition and locally proved principal/free distinction |
| `fs-every-ultrafilter-principal` | `external_refs` cites both `rem-blass-model-without-ultrafilters` and the Recorded-Not-Proved `rem-sierpinski-ultrafilter-not-measurable`; its remarks quote both | remove the entire `external_refs` field and both model/regularity paragraphs; its refutation already closes from `thm-ultrafilter-lemma` |

Do not repoint these definitions to late SET-19/20 results: that would make the
entire downstream library consume late consistency machinery. The later
theorems remain separate destinations with zero current published consumers.

The catalogue may not be laundered through another category or orientation
ledger. The following non-catalogue-ID model claims are also exact deferred
repairs:

- `def-countable-choice`: delete both `external_refs` and its Cohen,
  Feferman--Levy and DC-separation paragraphs; keep definitions and locally
  proved implication directions.
- `thm-ultrafilter-lemma`: delete the unproved claims that UFL is unprovable in
  ZF and strictly weaker than AC; `rem-choice-strengths` remains the honest
  proved upper-bound ledger.
- `fs-transfinite-induction-needs-choice`: delete the unproved final DC
  separation claims; the refutation itself is choice free.
- `thm-countable-subsets-of-omega-one-are-bounded` and
  `cex-omega-one-has-no-at-most-countable-cofinal-subset`: retain their explicit
  `AC_omega` hypothesis but delete the unproved Feferman--Levy sharpness claim.
  `rem-omega-one-and-the-cost-of-choice` may record only the positive cost of
  the written proof.
- `thm-omega-one-is-the-least-uncountable-ordinal`: remove the CH-independence
  sentence; say only that no continuum comparison is proved.
- `lem-omega-least-limit-ordinal`: replace consistency wording by the internal
  implication that a limit ordinal supplies an inductive set, hence implies
  Infinity over the remaining axioms.
- `def-axiom-schema-of-separation`: replace “keeps the schema consistent” by
  the internal fact that bounded separation blocks Russell's displayed
  contradiction.

No future item may use any of these claims through `deps`, `justified_by`,
well-definedness, or a load-bearing forward reference. Section 4 is only a
target specification.

## 7.2 Page prerequisites, DC, and B-leaf repairs

The owner must make these exact machine-plan amendments:

1. Add `countability-and-uncountability` and
   `linear-independence-bases-and-dimension` to
   `ordinals-and-transfinite-recursion.requires`. The first supplies
   `lem-nat-order-is-membership`, `lem-pigeonhole`, `def-countable-choice` and
   the corrected DC home; the second supplies
   `thm-every-independent-set-extends-to-a-basis` and
   `cor-every-vector-space-has-a-basis`, all already consumed by the page.
2. Preserve the commissioned `def-dependent-choice` repair: move it from
   `compactness-in-metric-spaces` to `countability-and-uncountability`
   immediately after `def-countable-choice`; replace its inapplicable
   real-valued `def-sequence` dependency and both body links by `def-function`.
   In SET-6, replace the prerequisite `compactness-in-metric-spaces` by
   `countability-and-uncountability`. Do not add metric compactness to the
   ordinal page.
3. Move `cantor-set-baire-and-measure-zero` from the B page
   `cardinal-arithmetic-and-cofinality-examples.requires` to its A companion;
   the B must require only `cardinal-arithmetic-and-cofinality`.
4. The B item `ex-the-cardinality-of-the-continuum` is consumed externally by
   `ex-cardinal-functions-of-the-lower-limit-line`. Add the A supplier
   `thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero` immediately
   before the companion, using the same ZF bijection proof, and repoint only
   that external topology dependency. The three local B consumers may remain.

Every other published and planned Foundations B row requires only its A
companion, and no other B-homed item is a dependency target outside its B.

## 7.3 Exact supplier-consumer impact

`def-dependent-choice` has 83 direct published consumers. The exact sorted set
is: `cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous`,
`cor-a-compact-hausdorff-space-is-tychonoff`, `cor-bolzano-weierstrass-in-rn`,
`cor-categories-of-models-for-algebraic-theories-are-complete-and-cocomplete`,
`cor-countable-independent-copies-exist`,
`cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence`,
`cor-euclidean-compactness-equivalence-chart`,
`cor-radical-ideals-as-intersections-of-minimal-primes-noetherian`,
`cor-separated-uniformizable-iff-tychonoff`,
`cor-tietze-for-unbounded-and-open-interval-valued-maps`,
`cor-topological-groups-are-completely-regular`,
`cor-urysohns-lemma-closes-the-separation-chain`,
`def-multiple-and-dependent-multiple-choice`,
`ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set`,
`ex-distance-functions-form-a-compact-family-in-c01`,
`ex-iid-sequence-with-a-prescribed-law`, `ex-infinite-coin-toss-space`,
`ex-integration-by-parts-for-absolutely-continuous-functions`,
`ex-the-metric-urysohn-function-costs-no-choice`,
`lem-bounded-above-complexes-admit-projective-replacements`,
`lem-bounded-below-complexes-admit-injective-replacements`,
`lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition`,
`lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice`,
`lem-countable-product-cylinder-premeasure-is-countably-additive`,
`lem-dependent-choice-along-a-sequence-of-relations`,
`lem-dependent-choice-riesz-separated-unit-sequence`,
`lem-finitary-monad-algebras-have-coequalizers-under-dependent-choice`,
`lem-finite-refining-small-diameter-covers-of-compact-metric-spaces`,
`lem-noetherian-ring-maximal-element-annihilator-exists`,
`lem-normal-sequences-of-entourages`,
`lem-parameter-power-series-map-injective-by-dimension`,
`lem-parameter-power-series-subring-makes-ring-finite`,
`lem-samuel-uniformity-preserves-the-induced-topology-under-dependent-choice`,
`lem-starting-point-free-dependent-choice`,
`lem-totally-bounded-uniformities-equal-their-samuel-uniformity`,
`lem-uniformizable-spaces-are-completely-regular`, `rem-choice-ledger`,
`rem-compactness-choice-ledger-metric`,
`rem-compactness-conventions-and-choice-ledger`,
`rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem`,
`thm-a-bounded-above-complex-of-projectives-is-homotopically-projective`,
`thm-a-bounded-below-complex-of-injectives-is-homotopically-injective`,
`thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras`,
`thm-a-locally-compact-hausdorff-space-is-completely-regular`,
`thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set`,
`thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant`,
`thm-baire-category-for-complete-metric-spaces`,
`thm-baire-category-locally-compact-hausdorff`,
`thm-bounded-below-iff-injective-with-closed-range`,
`thm-bounded-left-inverse-iff-range-is-complemented`,
`thm-bounded-right-inverse-iff-kernel-is-complemented`,
`thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space`,
`thm-cech-complete-spaces-are-baire`,
`thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis`,
`thm-change-of-variables-for-an-increasing-absolutely-continuous-function`,
`thm-choice-implies-dependent-implies-countable-choice`,
`thm-closability-sequential-criterion`, `thm-compactness-variants-hierarchy`,
`thm-complete-nakayama-lemma`,
`thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta`,
`thm-countable-product-of-probability-spaces`,
`thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity`,
`thm-dependent-choice-detects-non-well-orders`,
`thm-entourage-uniformities-are-generated-by-gauges`,
`thm-every-nonempty-polish-space-is-a-continuous-image-of-baire-space`,
`thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`,
`thm-horseshoe-lemma-for-projective-resolutions`,
`thm-integration-by-parts-for-absolutely-continuous-functions`,
`thm-lasker-noether-primary-decomposition`,
`thm-lipschitz-characterisation-within-absolutely-continuous-functions`,
`thm-metric-compactness-equivalences`,
`thm-mini-vitali-fine-cover-characterisation-of-null-sets`,
`thm-projective-comparison-map-exists`,
`thm-projective-comparison-maps-are-unique-up-to-chain-homotopy`,
`thm-sequentially-compact-implies-totally-bounded`,
`thm-sokal-gliding-hump-uniform-boundedness`,
`thm-subordinate-partitions-of-unity-exist`,
`thm-three-definitions-of-uniform-space-are-equivalent`,
`thm-tietze-extension-theorem`,
`thm-total-variation-function-of-an-absolutely-continuous-function`,
`thm-uniformizable-iff-completely-regular`, `thm-urysohn-lemma`, and
`thm-vitali-covering-theorem-for-fine-covers-on-the-line`.

Its complete transitive published closure is 3,522 items grouped over 297 page
homes, plus 24 currently unhomed published items. Since the repair changes only
the home and spelling of the definition dependency, no consumer edge changes.
The exact closure is therefore the reverse `deps + justified_by` reachability
set of the 83 IDs above; the sorted `page-id<TAB>item-id` serialization has
SHA-256 `088790f25754324deb44aa4c3b6d3f21ebf58a5864a5beeb9c43b52352eb7346`.
The root list, grouping rule, cardinalities and digest are the binding exact map
without embedding a generated 3,522-row appendix in prose.

The new continuum A theorem has the exact direct published consumer
`ex-cardinal-functions-of-the-lower-limit-line`. Its complete published closure,
all on `countability-axioms-and-cardinal-functions-examples`, is that item plus
`ex-countability-profile-of-the-lower-limit-plane`,
`cex-lindelofness-is-not-productive-worked`, and
`cex-separability-is-not-hereditary-worked`.

Exactly three deferred catalogue roots have a published non-catalogue YAML
consumer. They are Phase-2 roots, though none of their consumers is Foundations-
homed:

| exact planned supplier | direct published consumers | complete published impact by home |
|---|---|---|
| `thm-basic-cohen-symmetric-model-satisfies-bpi-and-not-ac` (SET-21) | `rem-choice-strength-of-hahn-banach` | `the-analytic-hahn-banach-theorem`: that item; its B: `rem-hahn-banach-open-choice-questions` |
| `thm-complete-metric-baire-is-equivalent-to-dependent-choice-over-zf` (SET-22) | `thm-banach-space-no-countably-infinite-hamel-basis`, `rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost` | `finite-dimensional-normed-spaces-and-riesz-lemma`: those two; its B: `cex-polynomial-space-admits-no-complete-norm` |
| `thm-suslin-hypothesis-is-independent-relative-to-zfc` (SET-17) | `rem-suslin-line-non-ccc-square-unverified` | `open-problems-and-research-frontier`: that item only |

Every other deferred-target supplier has **zero direct and zero transitive
published consumers**. Fix these exact planned IDs now:
`thm-l-is-an-inner-model-of-zfc-and-gch`,
`thm-relative-consistency-of-ac-and-not-ac-over-zf`,
`thm-relative-independence-of-ch-and-gch-over-zfc`,
`thm-arbitrary-set-gch-implies-choice-over-zf`,
`thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals`,
`thm-fraenkel-socks-model-and-jech-sochor-transfer`,
`thm-feferman-levy-model-has-singular-omega-one-and-a-countable-union-of-countable-reals`,
`thm-feferman-model-has-no-free-ultrafilter-on-omega`,
`thm-blass-model-has-only-principal-ultrafilters`,
`thm-solovay-model-regularity-relative-to-an-inaccessible`,
`thm-shelah-baire-property-model-and-inner-model-lower-bound`,
`thm-gitik-model-has-all-uncountable-cardinals-singular`,
`thm-urysohn-choice-strength-bounds-and-separations`,
`thm-stone-paracompactness-choice-strength-bounds-and-separations`,
`thm-tychonoff-product-forms-and-their-choice-strengths`,
`thm-martins-axiom-relative-consistency-and-standard-consequences`,
`thm-normal-moore-space-conjecture-consistency-bounds`,
`thm-l-spaces-and-s-spaces-zfc-and-pfa-results`, and
`thm-dowker-space-existence-and-size-results`.

These zero-consumer items must not be wired into published definitions or
orientation remarks merely to manufacture replacement links.

## 7.4 Published metadata snapshot amendments

For every registered published Foundations item, the owner must set the spec
`deps` array to the current item-frontmatter `deps` array, preserving order.
There are 149 such mismatches, grouped exactly as follows:

| page | dependency-array replacements | title replacements |
|---|---:|---:|
| `the-zfc-axioms-and-basic-set-constructions` | 11 | 0 |
| its B companion | 5 | 0 |
| `relations-functions-and-quotients` | 16 | 4 |
| its B companion | 8 | 0 |
| `order-zorn-and-the-axiom-of-choice` | 10 | 0 |
| its B companion | 8 | 0 |
| `filters-and-ultrafilters` | 11 | 0 |
| its B companion | 0 | 2 |
| `ordinals-and-transfinite-recursion` | 14 | 0 |
| `ordinal-arithmetic` | 20 | 0 |
| its B companion | 8 | 1 |
| `cardinal-arithmetic-and-cofinality` | 25 | 10 |
| its B companion | 8 | 7 |
| `formal-set-theoretic-syntax-structures-and-satisfaction` | 1 | 0 |
| `well-founded-relations-rank-and-the-cumulative-hierarchy` | 4 | 0 |

The 24 exact title-replacement IDs are
`thm-reflexive-and-irreflexive-orders-correspond`,
`cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse`,
`def-product-of-an-indexed-family`, `prop-products-over-small-index-sets`,
`ex-frechet-filter`, `ex-free-ultrafilter-on-naturals`,
`ex-an-increasing-sequence-in-omega-one-has-a-countable-supremum`,
`lem-cardinal-operations-are-well-defined`, `lem-cardinal-arithmetic-basic-laws`,
`thm-cardinal-arithmetic-agrees-with-finite-counting`,
`thm-cardinal-power-set-and-cantor`, `lem-successor-cardinal-exists`,
`cor-the-aleph-and-beth-hierarchies-are-well-defined`, `thm-tarski-square`,
`thm-cofinality-basics`, `thm-konig`, `cor-cofinality-of-a-cardinal-power`,
`ex-cardinal-absorption-computed`, `ex-the-cardinality-of-the-continuum`,
`ex-aleph-one-is-at-most-the-continuum`,
`ex-a-singular-cardinal-of-uncountable-cofinality`, `ex-an-aleph-fixed-point`,
`ex-the-beth-hierarchy-computed`, and
`ex-counting-functions-and-subsets-of-the-continuum`.

The dependency replacement is exact by value, not merely by count: the source
of truth for each of the 149 values is that same ID's published frontmatter at
the audit commit. This prevents copying a second stale array into prose.
`construction-of-the-natural-numbers` remains a legacy empty spec inventory
despite 34 live A items and five displayed example items. Do not silently
change its category or breach the 30-item ceiling; the owner must grant an
explicit legacy exception or split/register a companion before populating it.

## 7.5 Cross-category ownership seams

- Category Theory owns accessible/presentable categories and accessibility
  machinery. SET-4's “accessible pointed graph” is only the membership-graph
  notion. Its Grothendieck-universe items neither assert an inaccessible exists
  nor supply a category-theoretic universe-change theorem.
- Abstract Algebra owns rings, ideals, quotients and homomorphism algebra.
  SET-7 defines Boolean algebras and Boolean ideals for Stone/BPI and must prove
  its bridge explicitly; a commutative-ring prime-ideal theorem is not BPI.
  Algebraic Geometry owns `Spec` and schemes; Stone spectrum is not scheme
  spectrum.
- `fs-ordinals-form-a-set` has exactly two direct and transitive published
  consumers, both on
  `reflective-subcategories-and-the-adjoint-functor-theorems-examples`:
  `cex-a-category-that-is-not-well-powered` and
  `cex-a-complete-category-whose-coseparating-sets-are-never-small`.
  `fs-every-ultrafilter-principal` has exactly one direct/transitive consumer,
  `ex-the-ultrafilter-monad-on-a-finite-set`, on
  `monads-comonads-and-their-algebras-examples`. These suppliers are A-homed in
  the canonical spec and therefore do not violate B-leaf discipline.
- The real-analysis home of DC and the topology continuum repair are binding
  interfaces. A missing A input must never be patched by adding it directly to
  a Foundations B page.

## 7.6 Full-text evidence and source blockers

- S. Feferman, *Some applications of the notions of forcing and generic sets*,
  Fundamenta Mathematicae 56 (1964/65), 325--345, DOI
  `10.4064/fm-56-3-325-345`: the full publisher scan was recovered. Theorem
  4.12 and proof, printed pp. 343--344, use finitely many generic-set parameters
  and a tail-complement transform of the next generic set to contradict a
  supposed nonprincipal prime ideal. This is the authoritative correction to
  the invalid finite-bit-flip summary.
- M. Morillon, *The power of DMC*, full author PDF, p. 6, records that DMC plus
  countable choice for finite sets implies DC. The full Japanese note *On
  dependent choice*, Definition and Propositions 6--7, PDF pp. 4--5, confirms
  the finite-level formulation and prescribed-start equivalence. The published
  SET-6 proof supplies the easy converse directions directly.
- A. Blass, *A model without ultrafilters*, Bull. Acad. Polon. Sci. 25 (1977),
  329--331: bibliographic identity and a later primary-author confirmation were
  recovered, but no authoritative full text of the proof was accessible.
  `thm-blass-model-has-only-principal-ultrafilters` remains **blocked**;
  secondary summaries are not proof sources.
- Andretta--Notaro, *Does DC imply AC_omega uniformly?*, JSL (2024), full
  Cambridge PDF, §5.2, printed pp. 1560--1561, confirms the Feferman--Levy
  consequence used for orientation but does not replace the required original
  symmetric-model construction. SET-20 remains gated on full construction.

## 7.9 SET-21/22 Phase-2 replacement cut (binding 2026-09-08)

The two SET-21/22 rows in §7.3 are superseded as Phase-2 classifications.  The
old roots remain planned-only/Phase-3 cleanup with zero published impact after
cutover: SET-21 reaches source-blocked SET-20, while SET-22 reaches SET-21/20
and contains the separately unresolved `DMC < DC` claim.  They do not unblock
published consumers.

The shared live plan now contains exactly these two new pairs as four empty
`items: []` page shells; this audit did not edit `plan-spec.json`.  At final
validation the plan has 1,616 pages.  The seventeen binding hydration item ids
remain unused, and the four fractional orders below are occupied only by the
matching shells.

| order | kind | page id | exact title | requires | companion |
|---:|---|---|---|---|---|
| 664.1 | A | `dependent-choice-and-the-complete-metric-baire-theorem` | Dependent Choice and the Complete-Metric Baire Theorem | `relations-functions-and-quotients`, `completeness-and-uniform-continuity` | `dependent-choice-and-the-complete-metric-baire-theorem-examples` |
| 664.2 | B | `dependent-choice-and-the-complete-metric-baire-theorem-examples` | Dependent Choice and the Complete-Metric Baire Theorem — Examples | only `dependent-choice-and-the-complete-metric-baire-theorem` | reciprocal A |
| 692.1 | A | `boolean-prime-ideal-theorem-in-the-basic-cohen-model` | The Boolean Prime Ideal Theorem in the Basic Cohen Model | `symmetric-extensions-and-basic-choice-failure-models` | `boolean-prime-ideal-theorem-in-the-basic-cohen-model-examples` |
| 692.2 | B | `boolean-prime-ideal-theorem-in-the-basic-cohen-model-examples` | The Boolean Prime Ideal Theorem in the Basic Cohen Model — Examples | only `boolean-prime-ideal-theorem-in-the-basic-cohen-model` | reciprocal A |

The DC pair is strictly between SET-5 B at 664 and SET-6 A at 665; the BPI pair
is strictly between SET-19 B at 692 and SET-20 A at 693.  Every A requirement
is an adequate strictly earlier A page.  Each B has the singleton requirement
consisting of its companion A and is a leaf.  The inventory below binds later
hydration; it is not part of the empty-shell integration patch.

Exact first-pair inventory, in proof order:

1. `lem-basic-cohen-model-schema-of-continuity` (lemma), “Schema of continuity
   in the basic Cohen model.”
2. `cor-basic-cohen-model-finite-set-continuity` (corollary), “Finite parameter
   sets admit disjoint clopen supports.”
3. `lem-ordinal-definable-maximal-proper-ideal-in-the-basic-cohen-model`
   (lemma), “A supported Boolean algebra has an ordinal-definable maximal
   proper ideal.”
4. `lem-basic-cohen-continuity-forces-the-maximal-ideal-to-be-prime` (lemma),
   “Continuity forces the supported maximal ideal to be prime.”
5. `thm-basic-cohen-model-satisfies-bpi-and-fails-choice` (theorem), “The basic
   Cohen model satisfies BPI and fails Choice.”
6. `cor-relative-consistency-of-bpi-without-choice-over-zf` (corollary),
   “Relative consistency of BPI without Choice over ZF.”  This must prove the
   formal `Con(ZF) -> Con(ZF+BPI+not AC)` using SET-14 through SET-19, not infer
   it from a countable transitive model.
7. B singleton `ex-continuity-contradiction-for-a-supported-boolean-algebra`
   (example), “The finite Boolean expansion contradiction in the supported-
   ideal proof.”

The dependency order is 1 -> 2, `(2,3) -> 4`, `(4, SET-19 choice failure) ->
5`, and `(5, SET-14 formal transfer) -> 6`.  SET-19's closure already supplies
SET-7 Boolean algebra vocabulary, forcing/symmetry machinery and the exact
first Cohen model.

Exact second-pair inventory, in proof order:

1. `def-serial-relation-dependent-choice-principle-over-zf` (definition), “The
   serial-relation Dependent Choice principle over ZF.”
2. `lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf`
   (lemma), “Prescribed-start and starting-point-free serial choice are
   equivalent in ZF,” proved by tagged finite paths.
3. `def-complete-metric-baire-principle-over-zf` (definition), “The complete-
   metric Baire principle over ZF,” locally defining nowhere dense, meagre and
   Baire without the published `complete-metrizability-and-baire` page.
4. `lem-open-dense-and-closed-nowhere-dense-baire-forms-are-equivalent-in-zf`
   (lemma), “Open-dense and closed-nowhere-dense Baire forms are equivalent in
   ZF.”
5. `thm-serial-dependent-choice-implies-complete-metric-baire-over-zf`
   (theorem), “Serial Dependent Choice implies the complete-metric Baire
   principle over ZF,” with the nested closed-ball proof internal.
6. `lem-discrete-sequence-spaces-are-complete-in-zf` (lemma), “Discrete
   sequence spaces are complete in ZF.”  Limiting coordinates use least
   stabilization stages, so no choice is hidden.
7. `lem-serial-relation-successor-sets-are-open-dense` (lemma), “Successor-
   occurrence sets of a serial relation are open and dense.”
8. `thm-complete-metric-baire-principle-implies-dependent-choice-over-zf`
   (theorem), “The complete-metric Baire principle implies Dependent Choice
   over ZF.”  It uses least indices in the countable range and the local
   starting-point equivalence.
9. `thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf`
   (theorem), “Dependent Choice is equivalent to the complete-metric Baire
   principle over ZF.”
10. B singleton `ex-blair-sequence-space-for-a-serial-relation` (example),
   “Blair's sequence space for a serial relation.”

The implication direction is `1,2,3,4 -> 5`; the converse direction is
`1,2,3,6 -> 7 -> 8`; and `(5,8) -> 9`.  This pair requires only the clean
published A pages `relations-functions-and-quotients` and
`completeness-and-uniform-continuity`.  It has no page or item edge to SET-6,
SET-20/21/22, `complete-metrizability-and-baire`, or any DMC claim.

Exact old-root and Phase-3 mapping:

| old supplier role | replacement | exact Phase-3 direct published consumers | complete transitive published impact by home |
|---|---|---|---|
| `thm-basic-cohen-symmetric-model-satisfies-bpi-and-not-ac` | semantic part: `thm-basic-cohen-model-satisfies-bpi-and-fails-choice`; consistency interface: `cor-relative-consistency-of-bpi-without-choice-over-zf` | in `rem-choice-strength-of-hahn-banach`, replace dependency/body link to `rem-halpern-levy-bpi-not-ac` with the new consistency corollary | `the-analytic-hahn-banach-theorem`: `rem-choice-strength-of-hahn-banach`; its B: `rem-hahn-banach-open-choice-questions` |
| `thm-complete-metric-baire-is-equivalent-to-dependent-choice-over-zf` | `thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf` | in both `thm-banach-space-no-countably-infinite-hamel-basis` and `rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost`, replace dependency/body links to `rem-baire-category-choice-strength` with the new theorem | `finite-dimensional-normed-spaces-and-riesz-lemma`: those two; its B: `cex-polynomial-space-admits-no-complete-norm` |

Item-level consumer classification is exact.  In the first pair, items 1--5
each have zero direct published consumers and the same two-item transitive
published closure through item 6; item 6 has one direct published consumer and
a two-item total published closure (one additional transitive consumer); the B
item has zero direct and zero transitive.  In the second pair, items 1--8 each
have zero direct published consumers and the same three-item total published
closure through item 9; item 9 has two direct published consumers and a three-
item total published closure (one additional transitive consumer); the B item
has zero direct and zero transitive.

Exact later-page amendments are not part of the four-empty-shell integration
patch.  SET-6 is published and read-only; its following dependency/body
cutover is Phase 3.  The binding target arrays are
`SET-6.requires = [cardinal-arithmetic-and-cofinality,
filters-and-ultrafilters, countability-and-uncountability,
well-founded-relations-rank-and-the-cumulative-hierarchy,
dependent-choice-and-the-complete-metric-baire-theorem]`,
`SET-21.requires = [symmetric-collapse-and-ultrafilter-free-models,
boolean-prime-ideal-theorem-in-the-basic-cohen-model]`, and
`SET-22.requires = [halpern-lauchli-and-bpi-without-choice,
dependent-choice-and-the-complete-metric-baire-theorem]`.  SET-6 then cites the
new serial-DC definition/equivalence rather than redefining DC; SET-21 retains
SET-20 only for planned strict-separation enrichment; and SET-22 drops the
broad `complete-metrizability-and-baire` requirement.

Full-text gate is closed for the replacements: Repický, CMUC 56 (2015),
543--546, DOI `10.14712/1213-7243.2015.138`, full journal PDF, Lemma 2,
Corollary 3 and pp. 545--546; Andretta--Notaro, JSL 90 (2025), 1538--1562,
DOI `10.1017/jsl.2024.33`, full open publisher text, §3, Theorem 3.2 and
Proposition 3.3; and A. W. Miller, *Axiom of Choice* notes (2008), full
26-page Wisconsin PDF, Proposition 5.4, printed pp. 10--11.  The two new A
closures have zero direct/transitive route to
`deferred-set-theory-beyond-choice` or any of its 22 items.  SET-20's Blass
source and SET-22's `DMC < DC` source remain blockers only for the planned-only
enrichment pages, not for either Phase-2 replacement.


## Linear algebra

## 14. Binding live-state audit (2026-09-08)

This section supersedes the 2026-08-28 build-state claims above. It does not
change the mathematical scope of §§1--13. The canonical Linear Algebra prose
owner is this file: unlike `plan-algebra-track.md`, it explicitly owns the
`linear-algebra` expansion lane. The latter file is read-only cross-category
evidence for this audit.

All twenty-two Linear Algebra A/B pairs are now published: 44 pages and 749
plan-listed items, with 749 item files present and published. The original
thirteen pairs occupy orders 72--95 and 141; LA-14--LA-20 occupy
107.001--107.004 and 168.001--168.010; LA-21 occupies
288.000021--288.000022; and LA-22 occupies 288.000061--288.000062. Page
frontmatter agrees with the live plan on id, kind, category, companion,
requirements, item membership and item order. Item kind also agrees for all
749 items. No Linear Algebra page or item is draft or missing.

The dependency closure has no unresolved item id, cycle, A-page dependency on
a B page, later-page prerequisite, direct dependency on a draft item, or direct
or transitive route to `proved_here: false`, an id containing
`not-proved-here`, or `deferred-set-theory-beyond-choice`. No item id has two
Linear Algebra homes. Thus there is no new theorem supplier to build before a
published Linear Algebra proof. The defects that remain are published-byte
repairs and plan/frontmatter resynchronisation, recorded below for Phase 3.

## 15. Phase-2 and planned-only supplier classification

- **Phase-2-eligible unpublished supplier pairs:** zero.
- **Phase-2-eligible unpublished supplier items:** zero.
- **Planned-only enrichment pairs/items with zero published impact:** zero.
- **New or repaired planned supplier items:** zero. Consequently their direct
  published-consumer map and complete transitive published-consumer closure
  are both the empty map; the required item-level zero-consumer declaration is
  exact, not an omission.

LA-14--LA-22 must no longer be described as proposed, unbuilt or Phase-2
roots. They are published inputs. All repairs in §§16--18 are Phase-3 repairs
to published consumers using already-published material; they must not be
implemented while the workflow is paused.

## 16. Exact Phase-3 proof-order repairs

The live item graph has sixteen same-page forward edges once `justified_by` is
treated as a real proof dependency. No new result is needed.

Delete a non-load-bearing `justified_by` edge from each of these definition
items. Its target proves a later property rather than the existence of the
defined data:

- `def-kernel-and-image-of-a-linear-map` ->
  `thm-linear-kernel-image-and-injectivity`;
- `def-vector-space-of-linear-maps` ->
  `prop-linear-maps-form-a-vector-space`;
- `def-invertible-matrix-and-general-linear-group` ->
  `cor-general-linear-group-is-a-group`;
- `def-cyclic-subspace-vector-and-vector-annihilator` ->
  `prop-vector-annihilator-is-well-defined`;
- `def-lanczos-process-as-hermitian-arnoldi` ->
  `thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence`.

For `def-conjugate-gradient-recurrence`, state the recurrence conditionally
for the indices at which its displayed denominators are nonzero, then remove
its forward `justified_by` edge. The later
`prop-conjugate-gradient-denominators-are-positive-before-convergence` proves
that the guard holds until convergence.

For each remaining pair below, move and rewrite the existing theorem before
the definition. The theorem must construct the indicated data directly, with
no dependency on the later definition; the definition then names the proved
construction:

| theorem moved first | definition moved after it | construction proved without the definition |
|---|---|---|
| `thm-operator-determinant-is-basis-independent` | `def-determinant-of-a-linear-operator` | equality of coordinate-matrix determinants under change of ordered basis |
| `thm-minimal-polynomial-is-well-defined-and-controls-annihilators` | `def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism` | the nonzero ideal `{p in F[x] : p(T)=0}` has a unique monic generator |
| `prop-quotient-vector-space-operations-and-projection` | `def-quotient-vector-space-and-canonical-projection` | coset operations and the projection are independent of representatives |
| `prop-induced-quotient-operator-is-well-defined` | `def-invariant-subspace-and-induced-quotient-operator` | `v+W -> T(v)+W` is independent of representatives when `T(W) subseteq W` |
| `thm-sylvesters-law-of-inertia` | `def-definiteness-inertia-and-signature-data-over-the-reals` | diagonal sign counts are invariant under real congruence |
| `thm-gram-inner-product-on-exterior-powers-is-positive-definite` | `def-gram-inner-product-on-kth-exterior-power` | the determinant formula defines a positive-definite inner product |
| `thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula` | `def-hodge-star-on-an-oriented-inner-product-space` | the unique operator satisfying the wedge/volume identity exists |
| `thm-interior-product-is-adjoint-to-exterior-multiplication` | `def-interior-product-on-the-exterior-algebra` | the unique adjoint operator exists and obeys the contraction formula |
| `prop-reduced-resolvent-identities-for-a-simple-eigenvalue` | `def-reduced-resolvent-or-group-inverse-at-a-simple-eigenvalue` | the complementary inverse exists uniquely and has the displayed identities |

Finally move
`thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors`
before `cor-the-kth-exterior-power-vanishes-above-dimension`; the corollary has
a direct forward `deps` edge to that theorem. Preserve all stable ids and
rewrite any local prose made stale by these moves.

## 17. Exact B-leaf and body-link repairs

No outside item consumes a Linear Algebra B item. Nevertheless twelve B items
currently supply seventeen later B items on the same companion page. Delete
each edge below and make the consumer's counterexample or calculation local,
using only its A-page theory and earlier A prerequisites. The supplier's direct
published consumers and complete transitive published closure coincide exactly
in every row:

| B supplier | direct published consumers = complete transitive published closure (home page) |
|---|---|
| `ex-basis-of-the-eventually-zero-families` | `linear-independence-bases-and-dimension-examples`: `cex-independent-set-that-does-not-span`, `cex-proper-subspace-with-an-equinumerous-basis` |
| `cex-spanning-set-that-is-not-independent` | `linear-independence-bases-and-dimension-examples`: `fs-union-of-two-independent-sets-is-independent` |
| `cex-subset-closed-under-addition-but-not-scaling` | `vector-spaces-and-subspaces-examples`: `cex-subset-closed-under-scaling-but-not-addition` |
| `ex-two-by-two-determinant-formula` | `determinants-of-matrices-over-a-commutative-ring-examples`: `cex-naive-quaternion-determinant-is-not-row-alternating`, `ex-integer-determinant-two-is-invertible-over-q-not-z`, `fs-determinant-is-additive-on-matrices` |
| `ex-singular-value-decomposition-of-a-two-by-three-matrix` | `the-spectral-theorem-and-singular-value-decomposition-examples`: `ex-rank-one-svd-truncation` |
| `ex-orientation-reversal-negates-the-hodge-star` | `exterior-powers-orientation-and-hodge-duality-examples`: `fs-an-inner-product-determines-an-orientation`, `fs-hodge-star-needs-only-the-vector-space-structure` |
| `ex-complex-symmetric-nilpotent-matrix` | `the-spectral-theorem-and-singular-value-decomposition-examples`: `fs-complex-symmetric-matrices-are-unitarily-diagonalizable` |
| `ex-quarter-turn-diagonalises-after-complexification` | `complexification-realification-and-real-structures-examples`: `fs-complexification-creates-a-real-eigenvector-whenever-it-creates-a-complex-one` |
| `ex-canonical-embedding-of-r-n-into-c-n` | `complexification-realification-and-real-structures-examples`: `fs-complexification-doubles-finite-dimension` |
| `cex-a-complex-linear-map-can-fail-to-preserve-a-chosen-real-form` | `complexification-realification-and-real-structures-examples`: `fs-every-complex-linear-operator-descends-to-every-chosen-real-form` |
| `ex-quarter-turn-real-normal-form` | `the-spectral-theorem-and-singular-value-decomposition-examples`: `fs-nonnegative-quadratic-values-force-self-adjointness`, `fs-normal-operators-are-diagonalisable-over-the-base-field` |
| `ex-polar-decomposition-of-a-singular-matrix` | `the-spectral-theorem-and-singular-value-decomposition-examples`: `fs-polar-isometry-is-unique-for-singular-operators` |

After those deletions every B item is a dependency leaf. Separately,
`ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix` cites
`def-rayleigh-quotient-iteration` load-bearingly in proof step 2.1 but omits it
from frontmatter. Add that A-item id to `deps`; this is the sole Linear
Algebra `cited-not-in-deps` finding from the repository dependency checker.

## 18. Published semantic reconciliation

The current bytes were checked against all available Linear Algebra reader
reports, not their stale pre-repair conclusions. Previously reported defects
in diagonalisation, adjoints/Gram determinants, Jordan power ranks,
generalised eigenspaces, Wilkinson shifting and the two-by-two Rayleigh example
are already repaired in the published bodies. In particular, the Wilkinson
item now proves tridiagonal preservation rather than unsupported local
deflation, and the Rayleigh example explicitly treats the undefined `t=0`
step. No remaining mathematical supplier gap or blocker was found. Phase 3
must preserve those repaired bodies while applying §§16--17.

## 19. Cross-category ownership and consumer seams

The live plan has 39 direct page-level edges from other categories to a Linear
Algebra A page. Grouped by Linear Algebra supplier, they are:

| Linear Algebra A supplier | direct outside page consumers |
|---|---|
| `determinants-of-matrices-over-a-commutative-ring` | Category Theory `categories-functors-and-natural-transformations`; Combinatorics `algebraic-and-spectral-graph-theory`; Real Analysis `fubini-and-change-of-variables` |
| `dual-spaces-bilinear-forms-and-inertia` | Abstract Algebra `solvability-by-radicals-and-kummer-theory`, `tensor-products-of-modules`; Differential Geometry `tangent-cotangent-and-the-differential`; Kazhdan--Lusztig Theory `soergel-intersection-forms-and-hodge-theory` (planned page, zero items) |
| `eigenvalues-eigenvectors-and-the-characteristic-polynomial` | Abstract Algebra `algebraic-closure-embeddings-and-separability`; Combinatorics `block-designs-and-finite-projective-planes`, `linear-recurrences-and-rational-generating-functions` |
| `exterior-powers-orientation-and-hodge-duality` | Algebraic Geometry `products-segre-and-veronese-embeddings-and-grassmannians`; Differential Geometry `manifolds-with-boundary-collars-and-orientations` |
| `gaussian-elimination-and-row-reduction` | Combinatorics `linear-algebra-methods-in-combinatorics`; Real Analysis `fubini-and-change-of-variables` |
| `inner-product-spaces-and-orthogonality` | Abstract Algebra `characters-and-the-orthogonality-relations`; Combinatorics `linear-algebra-methods-in-combinatorics`; Real Analysis `areas-of-elementary-plane-figures`, `constant-rank-submersions-and-regular-level-sets`, `regular-surfaces-and-surface-integrals` |
| `linear-independence-bases-and-dimension` | Abstract Algebra `algebraic-extensions-degree-and-finite-fields`, `modules-and-module-homomorphisms`; Real Analysis `monotone-functions-and-discontinuities` |
| `linear-maps-rank-nullity-and-quotient-spaces` | Category Theory `categories-functors-and-natural-transformations`; Real Analysis `constant-rank-submersions-and-regular-level-sets` |
| `matrices-and-the-matrix-of-a-linear-map` | Abstract Algebra `the-group-algebra-and-representations`; Category Theory `categories-functors-and-natural-transformations`; Number Theory `positive-definite-binary-quadratic-forms-and-reduction` |
| `the-determinant-of-a-linear-operator` | Abstract Algebra `free-modules-and-exact-sequences`; Differential Geometry `tangent-cotangent-and-the-differential`; Real Analysis `the-inverse-function-theorem-completed` |
| `the-spectral-theorem-and-singular-value-decomposition` | Combinatorics `algebraic-and-spectral-graph-theory`; Computability Theory `expander-graphs-and-constraint-graphs`; PDE `partial-differential-equations-and-characteristics` |
| `triangularisation-and-jordan-canonical-form` | Abstract Algebra `finite-fields-and-cyclotomic-extensions`, `modules-over-a-pid-and-canonical-forms`; Measure Theory `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| `vector-spaces-and-subspaces` | Category Theory `categories-functors-and-natural-transformations`; Real Analysis `monotone-functions-and-discontinuities`, `uniform-convergence-of-functions` |

The Computability seam named in its repaired scaffold belongs to Combinatorics,
not to this category: published A page
`linear-algebra-methods-in-combinatorics` already requires the Linear Algebra
A pages `gaussian-elimination-and-row-reduction` and
`inner-product-spaces-and-orthogonality`. Its published item
`def-monomials-multidegree-and-total-degree` directly supplies the draft
Computability items `def-polynomial-identity-testing` and
`thm-schwartz-zippel-lemma`. Root must amend
`randomized-complexity-and-amplification.requires` to include
`linear-algebra-methods-in-combinatorics`. No Linear Algebra amendment or new
supplier is warranted.

## 20. Exact plan-spec amendments and validation gate

Phase 3 must make the published-item repairs in §§16--17 and then copy the
canonical published title, `deps`, and `justified_by` arrays into
`research/plan-spec.json` for every id in §21. Do not blindly copy a forward or
B-to-B edge: first apply §§16--17 to the item, then record the repaired array.
There are 103 title drifts, 181 `deps` drifts and 15 `justified_by` drifts.
There is no kind, membership, order, page-requirements or publication-status
amendment.

The full texts and locators in §13 remain adequate authoritative evidence for
all affected mathematics: Axler chapters 1--9 (especially §§6C, 7E--7F and
chapter 9), Hefferon's systems-through-canonical-form text and answer volume,
Treil's duality/Jordan/spectral chapters, Driscoll--Braun chapters 1--3 and
7--8, Cornell CS 4220's complete eighteen-note sequence, Cambridge Part IB's
96 pages, Conrad's complete “Complexification” and “Exterior Powers” notes,
Eliashberg Part I, and Greenbaum--Li--Overton's complete perturbation paper.
All were available in full; no source-access blocker arose.

After Phase 3, rerun the plan validator, renderer, dependency checker and a
custom closure audit that includes both `deps` and `justified_by`. Acceptance
requires: zero unresolved ids, zero cycles/forward item edges, zero B-item
consumers, zero published-to-draft edges, zero direct/transitive recorded-only
paths, zero body-link dependency omissions, and exact plan/frontmatter parity.


## Lie theory

## 2026-09-08 binding dependency audit

This section is the canonical execution contract for Lie Theory. It supersedes
the original census, the original `requires` table, the claims that there are
no blockers, the former recorded-without-proof policy, every such inventory
row, the old forward-reference table, and the old measurements. The remaining
historical sections are useful as a source harvest and mathematical outline only.
Neither it nor this audit changes a published file.

### Live census and audit result

The live plan contains 15 A/B pairs (30 pages). RL-1--RL-4 are published:

| pair | A items | B items | state |
|---|---:|---:|---|
| RL-1 | 45 | 6 | published |
| RL-2 | 17 | 6 | published |
| RL-3 | 20 | 5 | published |
| RL-4 | 31 | 8 | published |
| RL-5--RL-15 | 0 | 0 | planned, no page file |

Thus the published census is eight pages and 138 items. All 138 direct item
references resolve to published items. The complete transitive closure of all
138 items has zero Recorded/Not-Proved-Here hits, zero unpublished-item hits,
and zero missing ids. All 113 proof-bearing items pass the focused precheck.
All item-id wikilinks in published Lie bodies occur in `deps` or
`justified_by`; there is no unrecorded load-bearing item link. The exceptions
below are proof prose importing unnamed facts, not recorded-item closure hits.

The original 21/17/14/17 A-page inventories drifted from the published
45/17/20/31 inventories. The 24, 0, 6, and 14 added A items respectively are
real published prerequisite decompositions and remain stable. RL-4 also has
eight rather than six published B items. No published id is to be renamed or
deleted.

### Binding page order and B-leaf contract

Every B page requires exactly its A companion. No A page, later B page, or
item on another page may require a B page or a B item. Replace the live and
future page requirements with the following A-only contract (transitive
requirements need not be repeated):

| page | binding `requires` | disposition |
|---|---|---|
| RL-1 A | after Phase 2, `finite-weyl-invariants-bruhat-and-kostant-harmonics` | remove the published-to-draft DG-34-B edge; use `[]` only during the pre-Phase-2 repair window |
| RL-2 A | `harish-chandra-isomorphism-casimir-and-central-characters` | never RL-1 B; insert the four local-analysis items below before the determinant theorem in Phase 3 |
| RL-3 A | `verma-modules-and-shapovalov-forms`, `harish-chandra-isomorphism-casimir-and-central-characters` | never RL-2 B |
| RL-4 A | `homomorphisms-between-verma-modules-and-linkage`, `chain-complexes-and-homology` | never RL-3 B |
| RL-5 A | `category-o-finiteness-duality-and-blocks`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `projective-and-injective-resolutions`, `ext-and-balanced-resolutions`, `yoneda-extensions-and-homological-dimension` | build-held until every named A supplier is published |
| RL-6 A | `homomorphisms-between-verma-modules-and-linkage`, `finite-weyl-invariants-bruhat-and-kostant-harmonics`, `chain-complexes-and-homology` | never RL-5 B |
| RL-7 A | `harish-chandra-isomorphism-casimir-and-central-characters`, `verma-modules-and-shapovalov-forms`, `the-bgg-resolution` | never RL-6 B |
| RL-8 A | `weyl-character-and-multiplicity-formulas`, `semisimple-lie-algebras-cohomology-and-levi-theory` | never RL-7 B; held while DG is unpublished |
| RL-9 A | exact future AG-owned A suppliers for $G/B$, associated line bundles, coherent cohomology, projective-line fibres, and Serre duality | whole pair build-held; emit no item before suppliers exist |
| RL-10 A | `harish-chandra-isomorphism-casimir-and-central-characters`, `verma-modules-and-shapovalov-forms`, `homomorphisms-between-verma-modules-and-linkage`, `category-o-finiteness-duality-and-blocks`, `projectives-standard-filtrations-and-bgg-reciprocity`, plus exact future localisation/$D$-module A suppliers | algebraic prefix may later split; Duflo landmarks remain non-items until a full proof route exists |
| RL-11 A | `harish-chandra-isomorphism-casimir-and-central-characters`, `the-bgg-resolution`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `derived-functors`, `ext-and-balanced-resolutions`, `spectral-sequences`, `double-complexes-exact-couples-and-convergence` | build-held until every A supplier is published |
| RL-12 A | `harish-chandra-isomorphism-casimir-and-central-characters` | no B prerequisite |
| RL-13 A | `kac-moody-algebras-from-generalized-cartan-matrices`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `root-systems-dynkin-diagrams-and-cartan-killing-classification` | no RL-12 B prerequisite |
| RL-14 A | `kac-moody-algebras-from-generalized-cartan-matrices`, `verma-modules-and-shapovalov-forms`, `root-systems-dynkin-diagrams-and-cartan-killing-classification` | no RL-13 B prerequisite |
| RL-15 A | `kac-moody-algebras-from-generalized-cartan-matrices`, `integrable-highest-weight-kac-moody-modules` | no RL-14 B prerequisite |

Apply the same rule to the new Phase-2 pair below: its B page requires only its
companion and has no consumers. The published RL-3 B page must
drop `permutation-statistics-inversions-and-eulerian-numbers`; its only reason
for that edge is repaired by the Lie-owned Bruhat definition below.

The exact current published-to-draft page defect is RL-1 A requiring
`real-forms-and-real-semisimple-lie-algebras-examples`. That DG-34 B page has
no live file/items. RL-1's published item graph is self-contained, so the
Phase-3 amendment is `requires: []` until the earlier Phase-2 invariant A is
published. This is the only such edge whose consumer is a published Lie page.
Sequential RL-2-through-RL-15 requirements on preceding B pages are all
invalid even when the B page happens to be published. There is also one
incoming cross-category defect: published Representation Theory A page
`artin-induction-and-rational-characters` requires draft RL-15 B
`the-weyl-kac-character-formula-examples`. Its nine published items have zero
Lie item dependencies, so root must remove that page edge rather than replace
it. In total the live plan has 15 consumers of Lie B pages: the 14 sequential
RL edges plus this Artin-induction edge.

### Phase-2 eligible Lie-owned supplier pair

Insert the new pair strictly before RL-1. Its stable page and item ids were
collision-checked against `plan-spec.json`, `items/`, and the current scaffold.

#### `finite-weyl-invariants-bruhat-and-kostant-harmonics`

Its B companion is
`finite-weyl-invariants-bruhat-and-kostant-harmonics-examples`. The A page
has title “Finite Weyl Invariants, Bruhat Order, and Kostant Harmonics”, kind
`A`, category `lie-theory`, and order `510.0002`; its B companion has the same
title followed by “: Examples”, kind `B`, category `lie-theory`, and order
`510.0004`. The A `requires` exactly
`semisimple-lie-algebras-cohomology-and-levi-theory`,
`cartan-subalgebras-and-root-space-decompositions`,
`root-systems-dynkin-diagrams-and-cartan-killing-classification`, and
`highest-weight-theory-for-complex-semisimple-lie-algebras`; never their B
companions. The B `requires` exactly its A. Author in this order:

1. `def-bruhat-order-on-a-finite-weyl-group` (subword/cover definition and
   equivalence needed by the $A_2$ Verma example).
2. `def-weyl-orbit-sum-in-a-group-algebra`.
3. `lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants`.
4. `lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums`.
5. `lem-finite-linear-group-invariant-polynomials-separate-orbits` (finite
   product followed by Reynolds averaging, including the empty/stabilizer
   cases).
6. `def-weyl-discriminant-and-reflecting-hyperplane-arrangement`.
7. `lem-weyl-anti-invariants-are-divisible-by-the-discriminant`.
8. `lem-weyl-coinvariant-hilbert-series-has-order-w-dimension`.
9. `thm-chevalley-shephard-todd-for-finite-weyl-groups`.
10. `def-kostant-harmonic-subspace-of-the-symmetric-algebra`.
11. `lem-kostant-harmonics-give-an-invariant-polynomial-complement`.
12. `thm-kostant-harmonic-decomposition-of-the-symmetric-algebra`.
13. `lem-filtered-freeness-lifts-from-associated-graded-algebras`.

The B page may contain only
`ex-s3-bruhat-order-and-inversion-sets`,
`ex-a2-coinvariant-algebra-and-basic-invariants`, and
`ex-sl2-kostant-harmonic-decomposition`; each has zero direct published
consumers and zero transitive published impact.

### Phase-3 local Shapovalov suppliers (not Phase 2)

These items depend only on RL-2 items that already precede
`thm-shapovalov-determinant-formula`. Place them after
`def-shapovalov-determinant-on-a-weight-space` and before that theorem, in this
order:

1. `lem-shapovalov-determinant-factors-on-affine-root-hyperplanes`.
2. `lem-determinant-vanishing-order-from-a-perfect-first-derivative-pairing`.
3. `lem-generic-root-hyperplane-has-the-expected-simple-verma-radical`.
4. `lem-transverse-shapovalov-pairing-is-perfect-on-the-generic-radical`.

These four are local published-page repairs, not Phase-2 work: Phase 2 builds
new A/B pairs only and RL-2 is already published. The official full text gives
the factor, generic-radical, derivative-pairing, order-of-vanishing, and
exponent steps separately. In Phase 3 rewrite
`thm-shapovalov-determinant-formula` to consume all four lemmas and removes its
unproved `[L1]` import.

### Supplier-to-published-consumer map

The following named closures are computed in the current published item graph.
Each closure includes its direct published consumer. These lists are complete,
not samples.

**SD (19 items).** `verma-modules-and-shapovalov-forms`:
`thm-shapovalov-determinant-formula`,
`cor-verma-irreducibility-criterion-from-shapovalov-determinants`;
`verma-modules-and-shapovalov-forms-examples`:
`ex-sl2-reducible-and-generic-verma-modules`,
`ex-finite-dimensional-sl2-quotient-of-a-verma-module`;
`homomorphisms-between-verma-modules-and-linkage`:
`thm-jantzen-sum-formula-for-a-verma-module`,
`cor-generic-verma-modules-are-simple`,
`thm-strong-linkage-principle-for-verma-modules`,
`lem-verma-embedding-implies-strong-linkage`,
`thm-bgg-verma-homomorphism-criterion`,
`cor-antidominant-verma-modules-are-simple`;
`homomorphisms-between-verma-modules-and-linkage-examples`:
`ex-sl2-verma-embedding-chain`,
`ex-a2-regular-dominant-verma-embedding-poset`,
`cex-equal-central-character-does-not-give-every-verma-embedding-direction`;
`category-o-finiteness-duality-and-blocks`:
`lem-extensions-between-distinct-o-linkage-classes-split`,
`thm-central-character-summands-split-into-linkage-blocks`,
`cor-restricted-duality-preserves-linkage-blocks`;
`category-o-finiteness-duality-and-blocks-examples`:
`ex-the-regular-integral-sl2-block-of-category-o`,
`ex-a-generic-sl2-block-is-semisimple`,
`ex-a-singular-a2-central-character-summand`.

For each of the four Shapovalov suppliers above, the direct published consumer
set is `{thm-shapovalov-determinant-formula}` and the complete transitive
published impact is SD. This declaration is item-specific for all four; the
theorem records every load-bearing proof input rather than relying only on the
last lemma's transitivity.

**HC-EXT (32 items).** `harish-chandra-isomorphism-casimir-and-central-characters`:
`lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants`,
`thm-symmetric-invariants-restrict-to-weyl-invariants`,
`thm-harish-chandra-isomorphism-for-the-center`,
`thm-enveloping-algebra-is-free-over-its-center`,
`prop-harish-chandra-map-is-injective`,
`cor-central-characters-are-dot-weyl-orbits`,
`cor-the-center-is-a-polynomial-algebra-of-rank-many-generators`;
RL-1 B: `ex-dot-conjugate-weights-have-the-same-central-character`,
`cex-unshifted-weyl-orbits-do-not-classify-central-characters`,
`ex-the-zero-weight-singular-central-character`,
`ex-sl3-harish-chandra-center-generators`;
RL-3 A: `prop-verma-composition-multiplicities-are-finite`,
`thm-strong-linkage-principle-for-verma-modules`,
`lem-verma-embedding-implies-strong-linkage`,
`thm-bgg-verma-homomorphism-criterion`,
`cor-antidominant-verma-modules-are-simple`;
RL-3 B: `cex-equal-central-character-does-not-give-every-verma-embedding-direction`,
`ex-sl2-verma-embedding-chain`,
`ex-a2-regular-dominant-verma-embedding-poset`;
RL-4 A: `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients`,
`thm-central-character-summands-split-into-linkage-blocks`,
`prop-the-grothendieck-group-of-o-has-simple-and-standard-bases`,
`thm-every-category-o-object-has-finite-length`,
`cor-restricted-duality-preserves-linkage-blocks`,
`lem-extensions-between-distinct-o-linkage-classes-split`,
`prop-restricted-duality-is-an-exact-involution-on-category-o`,
`lem-o-modules-split-across-separated-simple-classes`,
`def-standard-and-costandard-objects-in-category-o`,
`prop-costandard-objects-have-simple-socles`;
RL-4 B: `ex-a-generic-sl2-block-is-semisimple`,
`ex-a-singular-a2-central-character-summand`,
`ex-the-regular-integral-sl2-block-of-category-o`.

**HC-ORBIT (25 items).** This is HC-EXT with the RL-1 A prefix replaced by
only `cor-central-characters-are-dot-weyl-orbits` and with the RL-1 B item
`ex-sl3-harish-chandra-center-generators` omitted; all RL-3 and RL-4 groups
listed in HC-EXT remain. **HC-POLY (2 items)** is
`cor-the-center-is-a-polynomial-algebra-of-rank-many-generators` and RL-1 B
`ex-sl3-harish-chandra-center-generators`. **HC-FREE (1 item)** is
`thm-enveloping-algebra-is-free-over-its-center`. **BRUHAT (1 item)** is RL-3
B `ex-a2-regular-dominant-verma-embedding-poset`.

The item-specific map for the 13 invariant/Bruhat/harmonic A suppliers is:

| supplier | direct published consumers | complete transitive published impact |
|---|---|---|
| `def-bruhat-order-on-a-finite-weyl-group` | `ex-a2-regular-dominant-verma-embedding-poset` | BRUHAT |
| `def-weyl-orbit-sum-in-a-group-algebra` | zero | HC-EXT |
| `lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants` | zero | HC-EXT |
| `lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums` | `lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants` | HC-EXT |
| `lem-finite-linear-group-invariant-polynomials-separate-orbits` | `cor-central-characters-are-dot-weyl-orbits` | HC-ORBIT |
| `def-weyl-discriminant-and-reflecting-hyperplane-arrangement` | zero | HC-POLY |
| `lem-weyl-anti-invariants-are-divisible-by-the-discriminant` | zero | HC-POLY |
| `lem-weyl-coinvariant-hilbert-series-has-order-w-dimension` | zero | HC-POLY |
| `thm-chevalley-shephard-todd-for-finite-weyl-groups` | `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators` | HC-POLY |
| `def-kostant-harmonic-subspace-of-the-symmetric-algebra` | zero | HC-FREE |
| `lem-kostant-harmonics-give-an-invariant-polynomial-complement` | zero | HC-FREE |
| `thm-kostant-harmonic-decomposition-of-the-symmetric-algebra` | `thm-enveloping-algebra-is-free-over-its-center` | HC-FREE |
| `lem-filtered-freeness-lifts-from-associated-graded-algebras` | `thm-enveloping-algebra-is-free-over-its-center` | HC-FREE |

The three invariant-pair B items have the exact zero/zero declarations given
above. Therefore every new planned supplier is
covered individually.

### Cross-category Phase-2 roots and their published impact

These are not Lie-owned duplicates. Root must reconcile them in the owning DG
scaffold and schedule their A pages before the Lie Phase-3 consumer rewrite:

For compact exactness, define **ROOT-70** as the following complete published
Lie closure. RL-1 A:
`thm-the-root-set-is-a-reduced-crystallographic-root-system`,
`def-root-reflections-and-the-weyl-group-action`,
`def-fundamental-weights-for-a-chosen-simple-root-system`,
`thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights`,
`lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions`,
`lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants`,
`thm-harish-chandra-isomorphism-for-the-center`,
`thm-symmetric-invariants-restrict-to-weyl-invariants`,
`prop-harish-chandra-map-is-injective`,
`cor-central-characters-are-dot-weyl-orbits`,
`cor-the-center-is-a-polynomial-algebra-of-rank-many-generators`,
`thm-enveloping-algebra-is-free-over-its-center`; RL-1 B:
`cex-unshifted-weyl-orbits-do-not-classify-central-characters`,
`ex-the-zero-weight-singular-central-character`,
`ex-dot-conjugate-weights-have-the-same-central-character`,
`ex-sl3-harish-chandra-center-generators`; RL-2 A:
`thm-shapovalov-determinant-formula`,
`cor-verma-irreducibility-criterion-from-shapovalov-determinants`; RL-2 B:
`ex-sl2-reducible-and-generic-verma-modules`,
`ex-finite-dimensional-sl2-quotient-of-a-verma-module`; RL-3 A:
`lem-simple-root-singular-vector-in-a-verma-module`,
`thm-verma-embedding-for-an-arbitrary-positive-root`,
`def-strong-linkage-order-on-weights`,
`thm-jantzen-sum-formula-for-a-verma-module`,
`prop-simple-reflection-embedding-of-verma-modules`,
`thm-bgg-verma-homomorphism-criterion`,
`thm-strong-linkage-principle-for-verma-modules`,
`cor-antidominant-verma-modules-are-simple`,
`cor-generic-verma-modules-are-simple`,
`lem-verma-embedding-implies-strong-linkage`,
`prop-verma-composition-multiplicities-are-finite`; RL-3 B:
`ex-a2-regular-dominant-verma-embedding-poset`,
`ex-a2-singular-dot-orbit-collapses`, `ex-sl2-verma-embedding-chain`,
`cex-equal-central-character-does-not-give-every-verma-embedding-direction`;
RL-4 A: `def-bgg-category-o`, `def-integral-weyl-group-of-a-weight`,
`thm-central-character-summands-split-into-linkage-blocks`,
`lem-integral-reflection-orbits-are-linkage-equivalence-classes`,
`lem-finite-b-stable-generators-and-weight-flags-in-category-o`,
`prop-equivalent-support-description-of-category-o`,
`prop-verma-and-finite-dimensional-modules-lie-in-category-o`,
`thm-category-o-is-abelian-and-extension-closed`,
`lem-the-center-has-finite-dimensional-image-on-an-o-object`,
`def-generalized-central-character-subcategory-of-o`,
`prop-hom-spaces-in-category-o-are-finite-dimensional`,
`prop-tensoring-with-a-finite-dimensional-module-preserves-category-o`,
`cor-restricted-duality-preserves-linkage-blocks`,
`lem-extensions-between-distinct-o-linkage-classes-split`,
`lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation`,
`lem-n-plus-invariants-exist-in-every-nonzero-o-module`,
`lem-finite-dot-orbit-weight-spaces-detect-o-subquotients`,
`thm-every-category-o-object-has-finite-length`,
`def-grothendieck-group-and-character-of-category-o`,
`thm-simple-objects-of-category-o-are-highest-weight-modules`,
`lem-generalized-central-character-submodules-are-direct-summands`,
`prop-restricted-duality-is-an-exact-involution-on-category-o`,
`lem-o-modules-split-across-separated-simple-classes`,
`lem-verma-self-extensions-in-category-o-split`,
`prop-the-grothendieck-group-of-o-has-simple-and-standard-bases`,
`thm-category-o-decomposes-by-generalized-central-character`,
`def-standard-and-costandard-objects-in-category-o`,
`prop-costandard-objects-have-simple-socles`; RL-4 B:
`ex-a-singular-a2-central-character-summand`,
`cex-an-infinite-direct-sum-of-verma-modules-is-not-in-category-o`,
`cex-a-weight-module-with-unbounded-upward-support-is-not-in-o`,
`cex-category-o-is-not-extension-closed-in-all-g-modules`,
`cex-tensor-products-of-two-verma-modules-need-not-lie-in-o`,
`ex-the-regular-integral-sl2-block-of-category-o`, and
`ex-a-generic-sl2-block-is-semisimple`.

1. DG-30
   `thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate`
   directly supplies published
   `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra`.
   Its complete published Lie impact is the exact 35-item set
   `{thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra,
   lem-regular-semisimple-elements-form-a-dense-open-subset,
   lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction}` union
   HC-EXT. This is an owning-DG
   Phase-2 root, not planned-only Lie enrichment.
2. DG-30
   `thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system`
   directly supplies published
   `thm-the-root-set-is-a-reduced-crystallographic-root-system`. Its complete
   published Lie impact is ROOT-70 exactly. The machine-recomputed closure
   count, rather than the older estimate, is controlling.
3. DG-32
   `thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`
   directly supplies published
   `thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights`.
   Its complete published Lie impact is exactly that theorem union HC-EXT (33
   items).

The adequate DG proof chain for root (1) includes
`thm-centralizer-of-a-regular-semisimple-element-is-a-cartan-subalgebra`; it
has zero direct published consumers and the same 35-item transitive impact as
root (1). The adequate DG proof chain for root (2) must include, strictly earlier,
`thm-weyls-complete-reducibility`, `thm-root-sl-two-triple`,
`thm-finite-dimensional-representations-of-sl-two`,
`thm-root-string-property`, and
`thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional`.
Each of these five earlier supplier items has zero direct published consumers
and complete transitive published impact ROOT-70; the final root-system theorem
alone directly supplies the published Lie interface theorem.
The adequate DG-32 chain for root (3) must include
`lem-every-finite-dimensional-irreducible-representation-has-a-highest-weight-vector`,
`lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral`,
`lem-integrability-relations-for-a-dominant-highest-weight`,
`def-dominant-integrable-highest-weight-cyclic-module`,
`lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives`,
`lem-simple-root-integrability-bounds-the-dominant-cyclic-module`,
`lem-a-dominant-cyclic-highest-weight-module-has-a-unique-simple-quotient`,
`thm-finite-dimensionality-of-lambda-highest-weight-simple-modules-for-dominant-integral-lambda`,
and `thm-simple-highest-weight-modules-are-classified-by-their-highest-weight`.
Each of these nine earlier DG-32 supplier items has zero
direct published consumers and the exact 33-item transitive impact of root (3);
the final classification theorem alone directly supplies the published Lie
interface. Phase 3 turns the three published Lie
theorems into short compatibility/interface results using the DG suppliers; it
does not retain hidden `[F]` facts or duplicate the DG proofs.

### Exact Phase-3 published repairs

1. In RL-1, move
   `lem-the-casimir-element-is-independent-of-dual-bases` before
   `def-quadratic-casimir-element`. State and prove basis-independence of the
   canonical inverse-form tensor and its multiplication image without using
   the definition. Its deps become
   `def-killing-form-of-a-semisimple-lie-algebra`,
   `prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra`,
   and `def-universal-enveloping-algebra-as-a-tensor-quotient`. The definition
   keeps `justified_by` pointing strictly backward to the lemma. Remove the
   present two-node definition/lemma SCC. Its direct published consumers after
   repair are `def-quadratic-casimir-element` and (retaining its current explicit
   proof input) `prop-the-quadratic-casimir-element-is-central`; its complete
   published impact is the definition plus the current 44-item downstream
   closure, hence 45 Lie items.
2. Move `prop-harish-chandra-map-is-injective` immediately after
   `thm-harish-chandra-isomorphism-for-the-center`; its current dependency on
   that theorem is a forward edge. No statement/id changes.
3. Rewrite `lem-regular-elements-form-a-connected-dense-open-subset` and
   `lem-regular-semisimple-elements-form-a-dense-open-subset` from the complete
   regular-element/Cartan argument cited below. Delete the unnamed “standard
   structure” and `[A1]` imports. The latter consumes the repaired DG Cartan
   interface.
4. Repoint the published Cartan, root-system, and finite-dimensional
   highest-weight theorem items to the exact DG roots above and rewrite each as
   a convention/interface corollary. Remove `[F1]`, `[F2]`, Lie's theorem,
   unrecorded complete reducibility, and unrecorded root-string imports from
   their bodies.
5. Add the invariant supplier dependencies exactly as in the item-specific
   table. Rewrite the extension lemma, dot-orbit corollary, polynomial-centre
   corollary, and freeness theorem so no character-triangularity,
   orbit-separation, CST, Kostant-harmonic, or filtered-lifting fact remains
   unnamed.
6. Insert the four local Shapovalov lemmas in RL-2 A strictly before
   `thm-shapovalov-determinant-formula`, rewrite that theorem to use all four,
   and remove `[L1]`. This is Phase 3 only; the published theorem remains
   blocked until then.
7. Repoint RL-3 B
   `ex-a2-regular-dominant-verma-embedding-poset` from
   `def-bruhat-order-on-the-symmetric-group` to
   `def-bruhat-order-on-a-finite-weyl-group`, including the body link. Then the
   B page requires only RL-3 A and is a page leaf.
8. The published theorem
   `thm-verma-embedding-for-an-arbitrary-positive-root` is blocked. Its proof
   cites Etingof Theorem 15.11, whose general case says only “taking the limit.”
   A candidate supplier id,
   `lem-verma-singular-vector-specializes-from-the-generic-root-hyperplane`, is
   reserved but is **not Phase-2 eligible and not a planned item** until an
   authoritative full proof is obtained. If obtained, its direct published
   consumer is the theorem and its complete impact is 10 items: RL-3 A that
   theorem and `thm-bgg-verma-homomorphism-criterion`; RL-3 B
   `ex-sl2-verma-embedding-chain`,
   `ex-a2-regular-dominant-verma-embedding-poset`, and
   `cex-equal-central-character-does-not-give-every-verma-embedding-direction`;
   RL-4 A `thm-central-character-summands-split-into-linkage-blocks` and
   `cor-restricted-duality-preserves-linkage-blocks`; RL-4 B the regular,
   generic, and singular examples. Do not schedule the rewrite while blocked.

### Recorded/not-proved elimination and future build holds

The recorded catalogue is not a theorem source. No draft, future, or published
Lie proof, well-definedness argument, `deps`, `justified_by`, or load-bearing
body link may consume a Recorded/Not-Proved-Here item, directly or through
another category. Source citation does not convert a result into a supplier.

The following old inventory ids are revoked as planned items and retained only
as prose target names: `thm-duflo-annihilator-theorem-for-verma-modules`,
`lem-duflo-reduction-to-a-regular-integral-central-character`,
`lem-localization-identifies-simple-modules-with-highest-weight-annihilators`,
`thm-duflo-every-primitive-ideal-is-highest-weight`,
`cor-kostants-theorem-feeds-borel-weil-bott`,
`prop-the-loop-central-extension-is-universal-for-simple-g`,
`thm-twisted-loop-central-extensions-give-the-twisted-affine-types`,
`cex-an-integrable-module-outside-kac-moody-o-need-not-have-the-stated-decomposition`,
`cex-weyl-kac-is-not-asserted-for-nonsymmetrizable-gcms`, and
`cex-formal-character-equality-does-not-imply-q-series-convergence`. They must
not enter `plan-spec.json`, and no later item may cite them. The last three are
orientation sentences, not mathematical items. Universal/twisted loop and
Duflo become items only after complete proof decompositions have strictly
earlier proved suppliers.

RL-9 is wholly build-held until the AG-owned geometry A pages are published;
there is no recorded-without-proof emission. RL-10's Duflo/localisation portion is
wholly build-held. Its purely algebraic prefix can be split into a separate A/B
pair only after each item has a complete proof and no later item is allowed to
depend on the held targets. RL-11's BWB bridge is prose orientation. The
remaining RL-13--RL-15 proofs must be fully supplied before scheduling; the
revoked orientation/counter-scope rows cannot serve as leaves that excuse a
missing proof.

### Planned-only inventory and exact zero-consumer declaration

After the ten revocations above, every one of the 219 remaining ids individually
enumerated in the RL-5--RL-15 A/B tables is planned-only: for **each such id**,
the exact direct published consumer set is empty and the complete transitive
published consumer closure is empty. This quantified declaration is item-level:
it applies separately to each table id, not merely to its page. None is a
Phase-2 root for a published consumer. RL-5 has 21 zero/zero ids; RL-6 17;
RL-7 23; RL-8 22; RL-9 18; RL-10 16 after four revocations; RL-11 18 after one;
RL-12 23; RL-13 21 after two; RL-14 21 after one; and RL-15 19 after two.
The totals are 219 and zero published impact. The three new Phase-2-pair B items
have their separate zero/zero declarations above.

### Ownership and cross-category seams

- DG owns complete reducibility, Cartan conjugacy, root-$\mathfrak{sl}_2$ and
  root strings, the reduced crystallographic root-system theorem, and the
  finite-dimensional highest-weight classification. Lie owns Verma modules,
  category $\mathcal O$, Harish--Chandra centre consequences, finite-Weyl
  invariant tools used by those consequences, and the finite-Weyl Bruhat
  definition used by its Verma example.
- HA owns complexes, resolutions, Ext/derived functors, exact couples, and
  spectral-sequence convergence. Future Lie pages require exact HA A pages;
  no HA B page is a supplier.
- AG owns $G/B$, associated line bundles, coherent cohomology, Serre duality,
  localisation, and $D$-modules. The old generic geometry placeholder must be replaced by
  actual AG page ids only after those pages exist. No geometry claim is
  laundered through a Lie orientation remark.
- RG may consume algebraic Harish--Chandra-centre results but Lie consumes no
  analytic RG result. Analytic globalisation and convergence remain RG-owned.
- The published graph has zero Lie-to-Computation, Computation-to-Lie,
  Lie-to-Linear-Algebra, and Linear-Algebra-to-Lie item edges. Therefore the
  active Computability incoming Linear Algebra interface is disjoint from this
  audit: Lie neither consumes it nor claims its Linear Algebra suppliers.
- The old symmetric-group Bruhat dependency is the only Combinatorics seam and
  is removed by the Lie-owned finite-Weyl definition. No other repaired
  scaffold is overridden.
- Published Representation Theory page `artin-induction-and-rational-characters`
  has an accidental incoming edge from RL-15 B but no Lie item dependency.
  Remove the page edge in the owning scaffold/central amendment. This is the
  finite-group/Abstract-Algebra-side interface; it must not make a Lie examples
  page into a supplier.

### Authoritative full-text evidence and blocker

- Pavel Etingof, MIT 18.757 complete notes,
  <https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf>:
  Exercise 8.15(iv)--(x), printed pp.45--47, gives the leading term,
  affine-root-hyperplane factors, generic radical/submodule/quotient,
  transverse perfect derivative pairing, vanishing order, and determinant
  exponent used by the four Phase-3 Shapovalov lemmas. Sections 10--13,
  especially Theorem 13.5 on printed pp.74--75 and its §§13.1--13.2 setup on
  pp.71--74, give the finite reflection-invariant and Kostant harmonic/freeness
  chain. This is full text, not a snippet.
- Pavel Etingof, complete Lie groups/algebras notes,
  <https://math.mit.edu/~etingof/lnlg.pdf>: §§18.1--18.2, printed pp.83--86
  (Lemma 18.5, Proposition 18.6, Theorems 18.7 and 18.10), give the
  regular-element/Cartan-conjugacy argument; §§24.2--24.3, printed pp.107--109
  (Propositions 24.10/24.12, Lemmas 24.15/24.16, Theorem 24.17), give the
  finite-dimensional highest-weight existence, dominance, integrability,
  finite-dimensionality, and uniqueness chain.
- The same official 18.757 notes, Theorem 15.11 on printed p.82, prove the
  generic positive-root Verma embedding from the determinant but give the
  arbitrary case only by the phrase “taking the limit.” No authoritative full
  proof of that specialization was retrieved. This is a blocker, not
  permission to record the claim or to infer it from the theorem statement.

### Exact central amendments and validation contract

Root must make, outside this file and in the appropriate phase, these exact
amendments: insert the invariant/Bruhat/harmonics A/B pair in Phase 2; in
Phase 3 add the four Shapovalov items to RL-2 A before their consumer; schedule the three
DG-owned A roots first; apply the page `requires` matrix; remove every B-page
consumer; remove the RL-15-B requirement from
`artin-induction-and-rational-characters`; apply the eight Phase-3 published
repairs; delete the ten revoked ids from any
future central inventory; keep RL-9, the Duflo/localisation portion of RL-10,
and the Verma-specialization repair on build hold. No stable published id or
published file path changes.

Before any build, re-run: plan validation; global item-id and page-id collision
checks; direct and transitive Recorded/Not-Proved-Here closure from every Lie
item; published-to-draft and forward-edge scans; B-page `requires` and B-item
consumer scans; body-link versus `deps`/`justified_by`; and a scoped diff check.
Any nonzero recorded closure, B consumer, unresolved id, or forward edge blocks
the build.

---


## Number theory

## 14. Dependency-closure binding audit (2026-09-08)

This section supersedes any contrary ordering, status, choice, or dependency
claim above.  The audited live census is 54 Number Theory pages: 48 published
pages forming 24 A/B pairs, and the six absent shells forming NT-22--NT-24.
All 672 items listed on the published pages exist and are published.  The
three absent pairs contain 81 repaired candidates (57 A items and 24 B items),
none of which exists in `items/` or in the JSON plan.  Their stable ids are
collision-free.  Published pages and items remain read-only in this phase.

The current published item graph has no missing dependency, no
published-to-draft edge, no duplicate home, and no direct or transitive route
from a Number Theory item to `proved_here: false`, a “Recorded, Not Proved
Here” item, or `deferred-set-theory-beyond-choice`.  Current depcheck also
reports zero Number-Theory-specific body-link warnings.  The repairs below
are nevertheless mandatory because page `requires`, same-page ordering, and
B-leaf discipline are separate invariants.

## 15. Exact A-for-B page cutover ledger

Every B page requires its A companion and is a dependency leaf.  Accordingly,
replace each left-hand A-page dependency on the middle B page by the right-hand
A page.  The first and seventeenth rows are externally owned seams; the ninth
is the already-recorded CA-18 seam.

| consuming A page | remove B dependency | add A dependency |
|---|---|---|
| `primitive-roots-and-unit-groups-modulo-n` | `splitting-fields-examples` | `splitting-fields` |
| `quadratic-residues-and-the-legendre-symbol` | `primitive-roots-and-unit-groups-modulo-n-examples` | `primitive-roots-and-unit-groups-modulo-n` |
| `quadratic-reciprocity-and-the-jacobi-symbol` | `quadratic-residues-and-the-legendre-symbol-examples` | `quadratic-residues-and-the-legendre-symbol` |
| `sums-of-two-squares` | `quadratic-reciprocity-and-the-jacobi-symbol-examples` | `quadratic-reciprocity-and-the-jacobi-symbol` |
| `lagrange-four-square-theorem` | `sums-of-two-squares-examples` | `sums-of-two-squares` |
| `positive-definite-binary-quadratic-forms-and-reduction` | `lagrange-four-square-theorem-examples` | `lagrange-four-square-theorem` |
| `regular-continued-fractions-and-diophantine-approximation` | `positive-definite-binary-quadratic-forms-and-reduction-examples` | `positive-definite-binary-quadratic-forms-and-reduction` |
| `pell-equations-and-generalized-pell-orbits` | `regular-continued-fractions-and-diophantine-approximation-examples` | `regular-continued-fractions-and-diophantine-approximation` |
| `absolute-values-completions-and-p-adic-numbers` | `regular-local-rings-and-homological-dimension-examples` | `regular-local-rings-and-homological-dimension` |
| `hilbert-symbols-and-the-quadratic-local-global-principle` | `absolute-values-completions-and-p-adic-numbers-examples` | `absolute-values-completions-and-p-adic-numbers` |
| `number-fields-rings-of-integers-and-discriminants` | `hilbert-symbols-and-the-quadratic-local-global-principle-examples` | `hilbert-symbols-and-the-quadratic-local-global-principle` |
| `prime-ideal-decomposition-ramification-and-the-different` | `number-fields-rings-of-integers-and-discriminants-examples` | `number-fields-rings-of-integers-and-discriminants` |
| `decomposition-inertia-and-frobenius` | `prime-ideal-decomposition-ramification-and-the-different-examples` | `prime-ideal-decomposition-ramification-and-the-different` |
| `minkowski-theory-and-number-field-class-groups` | `decomposition-inertia-and-frobenius-examples` | `decomposition-inertia-and-frobenius` |
| `dirichlets-unit-theorem-regulators-and-s-units` | `minkowski-theory-and-number-field-class-groups-examples` | `minkowski-theory-and-number-field-class-groups` |
| `cyclotomic-arithmetic-and-reciprocity-via-frobenius` | `dirichlets-unit-theorem-regulators-and-s-units-examples` | `decomposition-inertia-and-frobenius` |
| `arithmetic-functions-and-dirichlet-convolution` | `bloch-schottky-and-picard-examples` | `bloch-schottky-and-picard` |
| `average-orders-divisor-sums-and-representation-counts` | `arithmetic-functions-and-dirichlet-convolution-examples` | `arithmetic-functions-and-dirichlet-convolution` |
| `chebyshev-bounds-and-mertens-theorems` | `average-orders-divisor-sums-and-representation-counts-examples` | `average-orders-divisor-sums-and-representation-counts` |
| `dirichlet-series-and-euler-products` | `chebyshev-bounds-and-mertens-theorems-examples` | `chebyshev-bounds-and-mertens-theorems` |
| `dirichlet-characters-l-functions-and-primes-in-progressions` | `dirichlet-series-and-euler-products-examples` | `dirichlet-series-and-euler-products` |
| `primitive-dirichlet-l-functions-and-functional-equations` | `dirichlet-characters-l-functions-and-primes-in-progressions-examples` | `dirichlet-characters-l-functions-and-primes-in-progressions` |
| `perron-inversion-and-the-explicit-formula` | `primitive-dirichlet-l-functions-and-functional-equations-examples` | `primitive-dirichlet-l-functions-and-functional-equations` |
| `classical-zero-free-region-and-the-prime-number-theorem` | `perron-inversion-and-the-explicit-formula-examples` | `perron-inversion-and-the-explicit-formula` |

Rows 1--13 and 17--24 are Phase-3 published page-frontmatter repairs; rows
14--16 bind the future NT-22--NT-24 plan.  NT-23 additionally requires
`pell-equations-and-generalized-pell-orbits` for its Pell worked example.

## 16. Exact published same-page proof-order repairs

Three current edges point forward.  They require Phase-3 prose and metadata
repairs, not new suppliers.

1. On `quadratic-reciprocity-and-the-jacobi-symbol`, remove
   `def-jacobi-symbol`'s `justified_by:
   [prop-jacobi-symbol-well-defined]`.  Define the symbol by canonical prime
   factorisation and a commutative finite product; leave independence and the
   zero convention to the later proposition.
2. On `number-fields-rings-of-integers-and-discriminants`, move
   `lem-discriminant-change-of-basis` before
   `def-discriminant-of-a-number-field-basis-and-order`, state and prove the
   lemma first for the raw trace-Gram determinant, then let the definition
   name basis/order/field discriminants.  Remove the definition's forward
   `justified_by` edge.
3. On `chebyshev-bounds-and-mertens-theorems`, move
   `thm-second-mertens-theorem-for-primes` before
   `def-meissel-mertens-constant`; first prove existence of a constant in the
   asymptotic, then define the displayed limit and name that constant.  Remove
   the forward justification from the definition.

## 17. Exact B-item leaf repairs and published impact

No item outside a Number Theory B page depends on any Number Theory B item.
Delete the following B-to-B dependencies in Phase 3 and make the consumer's
calculation self-contained from A-page facts.  Each closure shown is the
complete distinct published consumer closure, grouped by its single home page.

| B supplier | direct published consumer(s) | complete published closure by home page |
|---|---|---|
| `ex-euclidean-algorithm-worked` | `ex-bezout-coefficients-not-unique` | `divisibility-gcd-and-bezout-examples`: `ex-bezout-coefficients-not-unique` |
| `ex-zero-divisors-modulo-composites` | `fs-zero-product-property-modulo-n` | `congruences-and-the-chinese-remainder-theorem-examples`: `fs-zero-product-property-modulo-n` |
| `ex-primes-dividing-x-squared-plus-three` | `cor-infinitely-many-primes-congruent-to-one-modulo-three` | `quadratic-reciprocity-and-the-jacobi-symbol-examples`: `cor-infinitely-many-primes-congruent-to-one-modulo-three` |
| `ex-reduced-forms-of-discriminant-minus-eight` | `ex-primes-represented-by-x-squared-plus-two-y-squared` | `positive-definite-binary-quadratic-forms-and-reduction-examples`: `ex-primes-represented-by-x-squared-plus-two-y-squared` |
| `cex-same-represented-integers-do-not-imply-proper-equivalence` | `ex-proper-versus-improper-equivalence-of-forms` | `positive-definite-binary-quadratic-forms-and-reduction-examples`: `ex-proper-versus-improper-equivalence-of-forms` |
| `ex-ring-of-integers-of-q-sqrt-five` | `ex-nonmaximal-quadratic-order` | `number-fields-rings-of-integers-and-discriminants-examples`: `ex-nonmaximal-quadratic-order`, `ex-index-obstructs-naive-polynomial-factorization` |
| `ex-nonmaximal-quadratic-order` | `ex-index-obstructs-naive-polynomial-factorization` | `number-fields-rings-of-integers-and-discriminants-examples`: `ex-index-obstructs-naive-polynomial-factorization` |
| `ex-decomposition-inertia-in-a-quadratic-field` | `ex-gaussian-and-eisenstein-frobenius` | `decomposition-inertia-and-frobenius-examples`: `ex-gaussian-and-eisenstein-frobenius`, `cex-ramified-frobenius-has-no-canonical-lift` |
| `ex-frobenius-in-a-small-cyclotomic-field` | `ex-decomposition-groups-in-a-tower` | `decomposition-inertia-and-frobenius-examples`: `ex-decomposition-groups-in-a-tower` |
| `ex-gaussian-and-eisenstein-frobenius` | `cex-ramified-frobenius-has-no-canonical-lift` | `decomposition-inertia-and-frobenius-examples`: `cex-ramified-frobenius-has-no-canonical-lift` |
| `ex-dirichlet-characters-modulo-three-four-and-five` | `ex-dirichlet-character-orthogonality-table`, `ex-the-character-chi-four-and-leibniz-series` | `dirichlet-characters-l-functions-and-primes-in-progressions-examples`: both direct consumers |
| `ex-gauss-sum-for-chi-four` | `cex-gauss-sum-sign-is-not-canonical-without-conventions`, `ex-trivial-zeros-of-a-dirichlet-l-function` | `primitive-dirichlet-l-functions-and-functional-equations-examples`: both direct consumers |

## 18. Planned suppliers: eligibility and exact zero-consumer ledger

There are **zero Phase-2-eligible Number Theory roots**.  Every item below is
planned-only enrichment, absent from disk and from `plan-spec.json`, and has
zero direct published consumers and therefore zero transitive published
consumers.  This item-level declaration is exhaustive.

- NT-22 A (24; each direct = 0, transitive = 0):
  `def-minkowski-embedding-of-a-number-field`,
  `def-full-euclidean-lattice-and-covolume`,
  `lem-full-lattice-fundamental-domain-and-bounded-points`,
  `lem-blichfeldt-lattice-point-principle`,
  `thm-minkowski-convex-body-theorem`,
  `cor-minkowski-convex-body-theorem-at-equality`,
  `def-successive-minima-of-a-convex-body-with-respect-to-a-lattice`,
  `lem-successive-minima-attainment-and-adapted-flag`,
  `lem-triangular-borel-maps-scale-euclidean-volume`,
  `lem-minkowski-successive-minima-volume-deformation`,
  `thm-minkowski-second-theorem-on-successive-minima`,
  `thm-ring-of-integers-and-ideals-are-full-lattices`,
  `thm-covolume-of-an-ideal-lattice`, `lem-archimedean-norm-bound`,
  `thm-small-element-in-a-number-field-ideal`,
  `thm-minkowski-bound-for-ideal-classes`,
  `lem-finitely-many-number-field-ideals-of-bounded-norm`,
  `thm-finiteness-of-the-number-field-class-group`,
  `cor-class-group-generated-by-small-primes`,
  `cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one`,
  `cor-no-nontrivial-number-field-is-unramified-over-q`,
  `lem-bounded-conjugates-give-finitely-many-integral-polynomials`,
  `lem-hermite-minkowski-bounded-primitive-integral-element`,
  `thm-hermite-minkowski-finiteness`.
- NT-22 B (7; each direct = 0, transitive = 0):
  `ex-minkowski-bound-for-gaussian-integers`,
  `ex-class-group-of-q-sqrt-minus-five`,
  `ex-class-group-of-q-sqrt-ten`,
  `ex-class-group-from-small-prime-ideals`,
  `ex-discriminant-lower-bound`,
  `ex-no-everywhere-unramified-extension-of-q`,
  `cex-minkowski-constants-change-under-scaled-embedding`.
- NT-23 A (16; each direct = 0, transitive = 0):
  `lem-roots-of-unity-in-a-number-field-are-finite`,
  `thm-kronecker-root-of-unity-criterion`,
  `lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one`,
  `thm-product-formula-for-number-fields`,
  `def-logarithmic-unit-embedding`,
  `lem-unit-logarithms-lie-in-the-product-formula-hyperplane`,
  `lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity`,
  `lem-logarithmic-unit-image-is-discrete`,
  `thm-logarithmic-unit-image-is-a-full-lattice`,
  `thm-dirichlet-unit-theorem`, `def-fundamental-units`,
  `def-number-field-regulator`,
  `thm-number-field-regulator-is-well-defined`,
  `cor-unit-ranks-by-number-field-signature`,
  `def-s-integers-and-s-units-of-a-number-field`, `thm-s-unit-theorem`.
- NT-23 B (7; each direct = 0, transitive = 0):
  `ex-units-of-q-and-imaginary-quadratic-fields`,
  `ex-real-quadratic-units-and-pell`,
  `ex-units-in-a-real-cubic-field`,
  `ex-regulator-of-a-real-quadratic-field`,
  `ex-change-of-fundamental-units-preserves-regulator`,
  `ex-s-units-of-q`, `cex-z-sqrt-d-units-need-not-equal-ok-units`.
- NT-24 A (17; each direct = 0, transitive = 0):
  `def-conductor-of-a-cyclotomic-field`,
  `thm-cyclotomic-ring-of-integers`,
  `thm-discriminant-of-a-cyclotomic-field`,
  `cor-total-ramification-in-a-prime-power-cyclotomic-field`,
  `thm-prime-factorisation-in-a-cyclotomic-field`,
  `cor-cyclotomic-ramification-criterion`,
  `thm-conductor-of-a-full-cyclotomic-field`,
  `cor-unramified-prime-decomposition-in-a-cyclotomic-field`,
  `cor-complete-splitting-in-a-cyclotomic-field`,
  `def-quadratic-gauss-sum-in-a-cyclotomic-field`,
  `lem-galois-action-on-the-quadratic-gauss-sum`,
  `thm-quadratic-gauss-sum-square`,
  `thm-quadratic-subfield-of-a-prime-cyclotomic-field`,
  `thm-quadratic-frobenius-restriction-identity`,
  `cor-quadratic-reciprocity-via-frobenius`,
  `cor-first-supplement-via-cyclotomic-frobenius`,
  `cor-second-supplement-via-cyclotomic-frobenius`.
- NT-24 B (10; each direct = 0, transitive = 0):
  `ex-reduced-conductor-of-q-zeta-six`,
  `ex-arithmetic-of-q-zeta-five`,
  `ex-prime-decomposition-in-q-zeta-eight`,
  `ex-prime-decomposition-in-q-zeta-twelve`,
  `ex-quadratic-gauss-sum-for-three`,
  `ex-quadratic-gauss-sum-for-five`,
  `ex-quadratic-subfield-of-q-zeta-seven`,
  `ex-frobenius-restriction-for-p-five-q-three`,
  `ex-second-supplement-from-q-zeta-eight`,
  `cex-gauss-sum-sign-without-a-complex-embedding`.

The withdrawn
`cor-ramification-support-of-an-abelian-number-field` likewise has zero direct
and zero transitive published consumers, but is not part of the 81-item plan.

## 19. Cross-category ownership and recorded-only seams

- Commutative Algebra owns CA-18
  `regular-local-rings-and-homological-dimension`; Number Theory's
  `absolute-values-completions-and-p-adic-numbers` must require its A page,
  never its B page.  This preserves the incoming CA reconciliation recorded
  near the top of this scaffold.
- Commutative Algebra CA-9 owns the ideal-class-group, invertible-fractional-
  ideal, Dedekind, and unique-ideal-factorisation interface.  NT-22 must use
  the proved `thm-unique-factorisation-of-ideals-in-dedekind-domains`, not
  `thm-number-field-integral-ideal-factorisation-in-zf`, whose stronger
  choice claim is separately recorded and is inadequate as a proof supplier.
- Abstract Algebra owns `splitting-fields`; Complex Analysis owns
  `bloch-schottky-and-picard`.  Their B companions are leaves and the two
  external cutovers are exact in §15.
- Galois Algebra owns the cyclotomic-field structure used by NT-24.  Its
  `rem-kronecker-weber` is published but `proved_here: false`; it is not a
  prerequisite.  The abelian-field ramification consequence is withdrawn,
  not deferred through a hidden body link.
- Combinatorics' planned CB-32 `sumset-calculus` pair is the planned (not
  published) consumer of NT-22's
  `thm-minkowski-second-theorem-on-successive-minima`.  Its owner must add
  `minkowski-theory-and-number-field-class-groups` to the CB-32 A page's
  `requires` and make the future full-Freiman theorem item cite that exact A
  supplier.  This planned seam does not change NT-22's zero published impact.
- Published Number Theory A pages are direct external prerequisites of these
  pages (there are no external consumers of a Number Theory B page):
  `congruences-and-the-chinese-remainder-theorem` feeds Abstract Algebra's
  `cosets-and-lagranges-theorem` and
  `semidirect-products-and-automorphism-groups`, plus Combinatorics'
  `block-designs-and-finite-projective-planes`,
  `combinatorial-classes-and-the-symbolic-method`,
  `finite-probability-and-the-probabilistic-method`, and B page
  `incidence-algebras-and-mobius-inversion-examples` (a separate downstream
  B-leaf defect for its owner); `divisibility-gcd-and-bezout` feeds Abstract
  Algebra's `rings-subrings-and-integral-domains`; and
  `primes-and-the-fundamental-theorem-of-arithmetic` feeds Abstract Algebra's
  `ideals-and-quotient-rings` and `sylow-theorems-and-nilpotent-groups`,
  Combinatorics' `incidence-algebras-and-mobius-inversion` and B page
  `chains-antichains-sperner-and-dilworth-examples`, and Complex Analysis'
  `the-riemann-zeta-function`.  Finally,
  `primitive-roots-and-unit-groups-modulo-n` feeds Group Theory's B page
  `frattini-subgroups-and-the-burnside-basis-theorem-examples`, another
  downstream owner repair.  These are consumers of existing published A
  suppliers, not Phase-2 roots.

The three downstream B-page repairs are exact: Combinatorics must move
`primes-and-the-fundamental-theorem-of-arithmetic` from
`chains-antichains-sperner-and-dilworth-examples` to its A companion, and move
`congruences-and-the-chinese-remainder-theorem` from
`incidence-algebras-and-mobius-inversion-examples` to its A companion; Group
Theory must move `primitive-roots-and-unit-groups-modulo-n` from
`frattini-subgroups-and-the-burnside-basis-theorem-examples` to its A
companion.  Each B page then requires only its A companion.  Independently,
that Group Theory A page currently requires
`sylow-theorems-and-nilpotent-groups-examples`; its owner must replace that
with `sylow-theorems-and-nilpotent-groups`.

## 20. Exact plan/status drift amendments

After the §15--§17 repairs land on published files in Phase 3, amend
`plan-spec.json` as follows; do not attempt these changes during this prose
audit.

1. Apply all 24 page-requires replacements in §15.  Add the three absent
   pairs with the exact prerequisite bindings in NT-22--NT-24 above, and add
   their 81 items in displayed order.  Do not add the withdrawn
   abelian-field ramification corollary.
2. Copy the current published item `title`, `deps`, and `justified_by` fields
   into the corresponding 672 plan items, then apply the three deliberate
   order/justification changes in §16 and the 14 dependency deletions in §17.
   The pre-repair drift is exactly 227 title fields, 157 dependency arrays,
   two `justified_by` arrays, and zero kinds; this deterministic full-field
   reconciliation is item-exact and avoids retaining stale arrays not listed
   by a partial patch.
3. On `classical-zero-free-region-and-the-prime-number-theorem-examples`,
   make plan order match the published semantic order by placing
   `rem-the-classical-zeta-region-is-not-a-uniform-dirichlet-l-region` first.
4. Repair the four published B-page titles to the plan's em-dash form:
   `absolute-values-completions-and-p-adic-numbers-examples`,
   `hilbert-symbols-and-the-quadratic-local-global-principle-examples`,
   `dirichlet-series-and-euler-products-examples`, and
   `dirichlet-characters-l-functions-and-primes-in-progressions-examples`.
   This is Phase 3; the plan titles are already canonical.

The two stale plan `justified_by` arrays named in item-exact form are
`def-jacobi-symbol -> prop-jacobi-symbol-well-defined` and
`def-discriminant-of-a-number-field-basis-and-order ->
lem-discriminant-change-of-basis`.  The third forward edge,
`def-meissel-mertens-constant -> thm-second-mertens-theorem-for-primes`, is
present in both plan and disk and is removed by §16 rather than classified as
drift.

## Group theory

## 30. Binding post-publication dependency and proof audit (2026-09-08)

This section supersedes every conflicting readiness, count, ordering,
dependency, and blocker statement in §§0--29. Published pages and items are
immutable evidence in this pass. Nothing below authorises a change to
`library/`, `items/`, generated output, or `research/plan-spec.json`.

### 30.1 Immutable snapshot and audit method

The live Group Theory band consists of **23 A pages, 23 B pages, and 842/842
present item files**, all with `status: published`: 171 definitions, 103
lemmas, 57 propositions, 139 theorems, 61 corollaries, 35 remarks, 132
examples, 30 counterexamples, and 114 false statements. The first pair is
stored under `library/abstract-algebra/`; the other 22 are under
`library/group-theory/`. The live item graph is acyclic. It has 22 edges to a
B-page item, but all 22 stay inside the same B page; no B item supplies an A
page or a different B page. Thus the item graph respects page-level leafness,
whereas the page graph does not: it contains B-as-supplier `requires` edges.
This does **not** certify mathematical closure: 20 Group Theory items are explicitly
`proof: not-supplied`/`proved_here: false`, and several nominally proved items
merely invoke their own conclusion as an unlinked source assumption.

The comparison used the page and item frontmatter actually on disk, not the
historical inventories above. Against the current plan ledger, 161 published
GT items disagree on `deps`: published headers contain 306 edges missing from
the ledger, while the ledger contains 176 edges missing from published
headers. Phase 3 must first repair the mathematical edges specified here and
then replace the ledger dependency list of each GT item verbatim by its repaired
published header. It must not take either side of the present drift as
authoritative merely because the syntactic validators accept it.

### 30.2 Binding A/B page requirements

Every B page requires only its own A page. Every A page uses the following
adequate earlier **A-page** closure. This table replaces §3 and the current live
page requirements.

| A page | binding `requires` after the repair pairs land |
|---|---|
| `frattini-subgroups-and-the-burnside-basis-theorem` | `sylow-theorems-and-nilpotent-groups`; `composition-series-and-solvable-groups`; `primitive-roots-and-unit-groups-modulo-n` |
| `extraspecial-p-groups-and-central-products` | preceding Frattini A page; `dual-spaces-bilinear-forms-and-inertia` |
| `blocks-primitivity-and-multiple-transitivity` | `group-actions-and-cayleys-theorem`; `semidirect-products-and-automorphism-groups` |
| `socles-and-the-onan-scott-landscape` | preceding blocks A page; `composition-series-and-solvable-groups`; preceding Frattini A page |
| `subgroups-of-free-groups-and-schreier-rewriting` | `free-groups-and-presentations`; `group-actions-and-cayleys-theorem`; `free-products-and-amalgamation` |
| `hnn-extensions-and-brittons-lemma` | preceding subgroup A page; `free-products-and-amalgamation` |
| `decision-problems-for-finitely-presented-groups` | `free-groups-and-presentations`; preceding subgroup A page; `free-products-and-amalgamation` |
| `small-cancellation-and-dehn-algorithms` | preceding decision A page; preceding HNN A page; `small-cancellation-disc-diagrams-and-torsion-toolkit` |
| `group-extensions-complements-and-schur-zassenhaus` | `semidirect-products-and-automorphism-groups`; `sylow-theorems-and-nilpotent-groups` |
| `modular-representations-and-projective-covers` | `induced-representations-and-frobenius-reciprocity`; `modules-over-a-pid-and-canonical-forms`; `chain-conditions-and-semisimple-modules`; `valuation-rings-and-discrete-valuation-rings`; `inverse-limits-and-noetherian-completion`; `the-group-algebra-and-representations`; `maschkes-theorem-and-complete-reducibility` |
| `brauer-characters-and-decomposition-matrices` | preceding modular-representation A page; `characters-and-the-orthogonality-relations`; `modular-traces-and-brauer-character-independence` |
| `the-finite-simple-group-classification-landscape` | preceding socle A page; `composition-series-and-solvable-groups`; `sylow-theorems-and-nilpotent-groups` |
| `cayley-graphs-word-metrics-and-quasi-isometry` | `free-groups-and-presentations`; `metric-spaces`; `graphs-walks-and-connectivity`; `trees-forests-and-spanning-trees`; `semidirect-products-and-automorphism-groups`; `completeness-and-uniform-continuity`; `limits-of-real-functions` |
| `geometric-actions-svarc-milnor-and-growth` | preceding Cayley-graph A page; `composition-series-and-solvable-groups`; `modules-over-a-pid-and-canonical-forms`; `hall-malcev-coordinates-and-bass-guivarch-growth` |
| `hyperbolic-spaces-and-hyperbolic-groups` | preceding geometric-actions A page; `quantitative-hyperbolic-geometry-toolkit`; preceding small-cancellation A page; `sylow-theorems-and-nilpotent-groups` |
| `amenable-groups-and-folner-criteria` | preceding Cayley-graph A page; `free-products-and-amalgamation`; preceding hyperbolic A page; `matchings-covers-menger-and-network-flows`; `filters-and-ultrafilters` |
| `simplicial-trees-and-group-actions` | `trees-forests-and-spanning-trees`; preceding Cayley-graph A page |
| `graphs-of-groups-and-bass-serre-theory` | preceding simplicial-tree A page; preceding HNN A page; `free-products-and-amalgamation`; preceding subgroup A page |
| `inverse-systems-profinite-groups-and-completion` | `uniform-spaces`; `normal-subgroups-and-quotient-groups`; `free-groups-and-presentations`; preceding Cayley-graph A page; `hereditary-and-productive-separation` |
| `pro-p-groups-and-the-p-adic-integers` | preceding profinite A page; preceding Frattini A page; `cyclic-groups-and-direct-products` |
| `crossed-homomorphisms-complements-and-first-cohomology` | preceding extensions A page; `group-cohomology-as-a-derived-functor`; `algebraic-extensions-degree-and-finite-fields` |
| `group-homology-transfer-and-low-degree-exact-sequences` | `chain-complexes-and-homology`; `group-cohomology-as-a-derived-functor`; `free-groups-and-presentations`; `group-extensions-complements-and-schur-zassenhaus` |
| `second-cohomology-and-abelian-kernel-extensions` | `group-cohomology-as-a-derived-functor`; `group-homology-transfer-and-low-degree-exact-sequences` |
| `schur-multipliers-and-universal-central-extensions` | preceding second-cohomology A page; `group-cohomology-as-a-derived-functor`; `group-homology-transfer-and-low-degree-exact-sequences`; `ext-and-balanced-resolutions`; `tensor-products-of-modules`; `universal-coefficients-and-kunneth-theorems` |

The current ledger instead makes 23 GT A pages consume the immediately
preceding B page and additionally makes the Schur-multiplier A page consume
`group-cohomology-as-a-derived-functor-examples`. The 24 forbidden edges are
therefore the B targets after `sylow-theorems-and-nilpotent-groups`, GT-1
through GT-8, `induced-representations-and-frobenius-reciprocity`, GT-18,
GT-19, `applications-of-the-fundamental-group`, GT-10 through GT-17,
`grothendieck-spectral-sequences-and-computations`, GT-21, GT-22, and
`group-cohomology-as-a-derived-functor`. Delete all 24 and install the table;
never redirect one B edge to a different B page.

### 30.3 Published item-order and metadata repairs (Phase 3)

The published-header item graph has nine forward edges, although it has no
cycle. Repair the page order as follows.

1. On the Brauer page, move
   `def-decomposition-map-from-ordinary-to-modular-grothendieck-groups` and
   `thm-decomposition-map-is-independent-of-stable-lattice-choice` immediately
   after the first eight definition/setup items. Place
   `thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions`
   next, then `thm-brauer-nesbitt-module-determination` and
   `cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes`.
   This removes the two forward edges in that chain.
2. On the amenability page, move `def-folner-set-and-folner-condition`, its
   boundary lemma, and `thm-folner-criterion-for-amenability` immediately after
   `prop-finite-groups-are-amenable`. Then prove finitely generated abelian
   groups by boxes and arbitrary abelian groups by the directed-union lemma.
   Place subgroup/quotient, extension, local-amenability, and direct-union
   closure only afterwards. This removes the three forward uses of the Følner
   criterion and avoids using the general abelian theorem to prove itself.
3. On Bass--Serre, move
   `thm-fundamental-groups-from-different-maximal-trees-are-isomorphic` after
   `thm-bass-serre-structure`. Its present proof consumes the later Bass--Serre
   tree, quotient graph of groups, action, and structure theorem (four forward
   edges).

The 161-item header/ledger drift must be repaired after these moves. Per A/B
page, the nonzero drift census is: GT-1 A 2/2/0; GT-2 A 41/168/52 and B
6/13/14; GT-3 A 9/10/10 and B 3/4/3; GT-4 A 2/2/0 and B 1/0/1; GT-5 A
4/7/2 and B 1/1/0; GT-6 A 3/0/8; GT-7 B 1/1/0; GT-8 A 1/0/2 and B 2/3/0;
GT-9 A 1/4/3; GT-18 A 5/5/5 and B 2/0/2; GT-19 A 2/2/0; GT-10 A 22/9/41
and B 5/5/6; GT-11 A 11/17/3 and B 5/6/3; GT-12 A 1/1/0 and B 1/1/0;
GT-13 A 8/12/4 and B 1/2/0; GT-15 A 9/17/1 and B 1/1/1; GT-16 A 5/7/14
and B 2/3/0; GT-17 A 1/1/0; GT-22 A 1/0/1; GT-23 A 2/2/0. Each triple is
`items differing / published-only edges / ledger-only edges`. Zero rows are
omitted.

### 30.4 Recorded-result isolation and other Phase-3 repairs

All 20 explicitly recorded items may remain valuable survey leaves, but no
recorded item may be a dependency target. The exact present violations and
binding repairs are:

| recorded supplier | direct published consumers | complete additional transitive impact | repair |
|---|---|---|---|
| `rem-cfsg-refinements-of-the-onan-scott-reduction` | `fs-onan-scott-is-the-classification-of-finite-simple-groups`; `fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups` | none | Remove both edges; refute by the proved structural theorem's scope and page metadata, without asserting an unproved classification theorem. |
| `rem-finitely-generated-abelian-groups-admit-invariant-factor-normal-form` | `thm-word-problem-for-finitely-generated-abelian-groups` | `ex-word-problem-in-a-finite-cyclic-presentation` on its B page | Repoint to the published invariant-factor theorem for finitely generated abelian groups/modules and make the algorithm explicit. |
| `rem-novikov-boone-undecidability-of-the-word-problem` | `fs-every-finitely-presented-group-has-solvable-word-problem`; `fs-recursively-enumerable-trivial-words-form-a-decision-algorithm`; `fs-the-novikov-boone-theorem-proves-the-uniform-problem-only`; `fs-unsolvable-word-problem-means-no-word-can-be-decided`; `rem-adian-rabin-undecidability-for-markov-properties` | `rem-triviality-and-finiteness-are-undecidable-for-finite-presentations` | Remove all five edges. The deep undecidability remarks and any false statement whose only counterwitness is one of them must be recorded leaves; no local proof is claimed. |
| `rem-adian-rabin-undecidability-for-markov-properties` | `rem-triviality-and-finiteness-are-undecidable-for-finite-presentations` | none | Remove the edge; both remarks are leaves. |
| `rem-nonabelian-extension-obstruction-and-h-two-torsor` | `rem-nonabelian-extension-obstruction-in-h-three` | `fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel` | Remove the edge and leave both obstruction remarks recorded leaves. Refute the false statement definitionally: ordinary $H^2(G,M)$ requires an abelian $G$-module, whereas an arbitrary nonabelian kernel is not such a coefficient object. |
| `rem-nonabelian-extension-obstruction-in-h-three` | `fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel` | none | Remove the edge and use the preceding coefficient-type refutation. |
| `rem-schur-zassenhaus-conjugacy-in-full-generality` | `fs-schur-zassenhaus-conjugacy-needs-no-solvability-or-deeper-input` | none | Refute from the proved solvability-qualified theorem and its printed hypothesis; remove the survey edge. |
| `rem-classification-of-finite-simple-groups` | `fs-the-library-proves-the-classification-of-finite-simple-groups` | none | Refute from `proved_here: false` metadata without a mathematical dependency edge. |
| `rem-bass-guivarch-growth-degree-formula` | `cor-finitely-generated-nilpotent-groups-have-polynomial-growth`; `ex-growth-degree-of-the-discrete-heisenberg-group` | none | After repair pair BG lands, turn this into a proved agreement remark depending on BG-9; the two consumers then have proved closure. |
| `rem-gromov-polynomial-growth-theorem` | `fs-gromovs-polynomial-growth-theorem-is-proved-on-this-page` | none | Remove the edge and use page metadata only. |
| `rem-grigorchuk-groups-of-intermediate-growth` | `fs-every-subexponential-growth-group-has-polynomial-growth` | none | Remove the edge; without a full local construction the false statement is itself a recorded leaf. |
| `rem-nonamenable-groups-without-nonabelian-free-subgroups` | `fs-every-nonamenable-group-contains-a-rank-two-free-subgroup` | none | Remove the edge; without a full local counterexample the false statement is itself a recorded leaf. |

The remaining recorded leaves already have zero consumers:
`rem-higman-neumann-neumann-embedding-theorem`,
`rem-triviality-and-finiteness-are-undecidable-for-finite-presentations`,
`rem-undecidability-of-the-isomorphism-problem-for-finitely-presented-groups`,
`rem-groups-with-unsolvable-conjugacy-problem`,
`rem-defect-groups-and-brauer-main-theorems`,
`rem-feit-thompson-odd-order-theorem`,
`rem-stallings-theorem-on-ends-and-splittings`, and
`rem-malcev-finitely-generated-linear-groups-are-residually-finite`.

Additional nominal-proof repairs are mandatory:

- `thm-onan-scott-classification-of-finite-primitive-groups` was designed in
  §GT-4 as `[LS]`, `proved_here: false`, and “never a dependency target,” but
  the published file was changed to `proof: ai-altered` and its `[A2]` is the
  whole O'Nan--Scott conclusion. Restore it to a recorded leaf. Remove its six
  outgoing supplier edges: `ex-simple-diagonal-action` must verify its action
  directly from the type definition; the two O'Nan--Scott `fs-` items and
  `rem-algorithmic-role-of-onan-scott` become metadata/source-summary leaves;
  `rem-cfsg-refinements-of-the-onan-scott-reduction` remains a recorded leaf;
  and `prop-two-transitive-groups-have-affine-or-almost-simple-socle-type`
  returns to the `[LS]`, `proved_here: false` leaf promised in §GT-4. No one of
  those items may supply another result. A complete, readable copy of the
  primary Liebeck--Praeger--Saxl proof was not obtained in this pass; the
  search endpoint exposed proof fragments and then failed full retrieval.
  That is a proof-source blocker, and incorporating the classification is in
  any event outside this scaffold's deliberately bounded elementary socle
  page. This is a Phase-3 restoration of intended status, not a Phase-2
  supplier request.
- `thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups`
  must replace its unlinked `[A2]` by the short local argument: automorphic
  images of a minimal normal subgroup are minimal normal, distinct images
  centralize by `lem-distinct-minimal-normal-subgroups-centralize-one-another`,
  their finite product is characteristic, and irredundancy makes the
  intersections trivial. Add that existing lemma to its header. This is a
  Phase-3 proof expansion with no new supplier.
- `lem-distinct-components-commute` and
  `thm-generalized-fitting-subgroup-contains-its-centralizer` currently cite
  precisely those results as assumptions. The available Smith full text states
  them but does not supply the omitted proof. Until an accessible full proof is
  obtained and audited, mark both as not-proved-here dependency leaves and
  remove the edge from the first to the second and from the second to
  `rem-what-the-library-does-and-does-not-prove-about-cfsg`. The latter becomes
  a metadata-only survey leaf. This is a source blocker, not a Phase-2 root.
- `thm-finitely-generated-free-groups-are-subgroup-separable` must depend on
  the proved `thm-marshall-hall-free-factor-theorem` and reproduce the finite
  covering completion while retaining a lifted path for $g\notin H$ with
  distinct endpoints. Its present `[F1]` is exactly its conclusion. It has zero
  published consumers, so this is Phase 3 only.
- `prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic` must prove
  the grid rectangle is geodesic by coordinate lower bounds. The two boundary
  examples (`ex-the-hyperbolic-plane-is-hyperbolic` and the Cantor-boundary
  clause) remain B-page leaves unless their local proofs are expanded.
- `cor-abelian-subgroups-of-hyperbolic-groups-are-virtually-cyclic` imports
  without proof that torsion abelian subgroups are finite, and
  `thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups` imports the
  bounded-orbit theorem and its counting consequence. The full texts obtained
  in this pass either state these facts with a reference or treat only the
  torsion-free case. Both items have zero downstream consumers after the
  former's edge from the centralizer theorem is removed. Restore them as
  recorded leaves pending an accessible complete proof; they are not Phase-2
  roots. The centralizer, infinite-order, and non-elementary free-subgroup
  theorems remain locally provable from HG and the full Hamann/Canary ranges.
- `ex-a-five-as-the-smallest-nonabelian-simple-group` and
  `ex-psl-two-seven-and-a-low-rank-coincidence` currently use source assertions
  as proof steps. They have zero consumers; either prove the finite claims from
  earlier finite-group items or mark them recorded B leaves.
- `ex-the-binary-icosahedral-cover-of-a-five` invokes Weibel's example as its
  universal-central-extension proof. It has zero downstream consumers; until
  the matrix presentation and universal property are checked locally, mark it
  a recorded B leaf even after the Hopf-formula supplier closure lands.

### 30.5 Phase-2-eligible repair pairs

These four A/B pairs, and only these new GT pairs, are in Phase 2. Every A item
is needed in the prerequisite closure of a published consumer. Every B item is
planned-only enrichment with item-level zero published consumers.

#### SC. Small-cancellation disc diagrams and torsion toolkit

**A page** `small-cancellation-disc-diagrams-and-torsion-toolkit`

**requires** `free-groups-and-presentations`,
`free-products-and-amalgamation`, `hnn-extensions-and-brittons-lemma`

**placement** immediately before the published
`small-cancellation-and-dehn-algorithms` A page.

1. `def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram`.
2. `lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces`.
3. `lem-c-prime-one-sixth-interior-faces-have-at-least-seven-arcs`.
4. `lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram`.
5. `lem-boundary-spur-or-at-most-three-shell-from-curvature`.
6. `thm-greendlinger-shell-existence-from-the-curvature-count`.
7. `def-minimal-cyclic-power-diagram-and-relator-root`.
8. `lem-minimal-power-diagram-has-a-periodic-boundary-shell`.
9. `thm-c-prime-one-sixth-torsion-elements-come-from-relator-roots`.

SC-4 must print the Euler identity and account separately for boundary
valence-one spurs; SC-5 may suppress a spur only because the outer word is
freely reduced. SC-8 chooses a conjugate of minimum cyclic length and a
minimum-area diagram for its least positive power; it must prove, rather than
assume, that the shell overlaps force cyclic periodicity. SC-9 states
“conjugate to a power of a root of a cyclic conjugate of a defining relator,”
with symmetrisation and proper-power conventions explicit.

**B page** `small-cancellation-disc-diagrams-and-torsion-toolkit-examples`,
requiring only the A page: `ex-curvature-ledger-for-a-two-cell-diagram`,
`ex-a-three-shell-after-arc-reduction`,
`ex-relator-root-versus-proper-power`, and
`cex-a-boundary-spur-when-free-reduction-is-omitted`. Each has zero published
consumers.

#### BR. Modular traces and Brauer-character independence

**A page** `modular-traces-and-brauer-character-independence`

**requires** `modular-representations-and-projective-covers`,
`the-group-algebra-and-representations`, `chain-conditions-and-semisimple-modules`

**placement** immediately before the published Brauer-character A page.

1. `lem-a-finite-dimensional-algebra-separates-its-simple-modules`.
2. `lem-modular-trace-functions-of-simple-modules-are-linearly-independent`.
3. `lem-reduction-of-teichmuller-lifted-traces-recovers-modular-traces`.
4. `thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements`.

BR-1 is proved from the already published Wedderburn--Artin decomposition (or
the finite-dimensional density corollary proved from it), not cited as an
unproved Jacobson-density theorem. BR-2 isolates one simple at a time by an
algebra element and an endomorphism of trace one. BR-3 states the splitting
modular-system and Teichmüller-lift hypotheses exactly. BR-4 is the missing
independence half; the published basis theorem retains its own spanning proof.

**B page** `modular-traces-and-brauer-character-independence-examples`,
requiring only the A page: `ex-modular-traces-for-a-cyclic-p-prime-group`,
`ex-brauer-character-independence-for-s-three-in-characteristic-two`, and
`cex-ordinary-traces-on-p-singular-elements-do-not-define-brauer-characters`.
Each has zero published consumers.

#### BG. Hall--Mal'cev coordinates and Bass--Guivarc'h growth

**A page** `hall-malcev-coordinates-and-bass-guivarch-growth`

**requires** `cayley-graphs-word-metrics-and-quasi-isometry`,
`composition-series-and-solvable-groups`,
`modules-over-a-pid-and-canonical-forms`

**placement** immediately before the published geometric-actions A page.

1. `lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian`.
2. `def-bass-guivarch-dimension`.
3. `def-lower-central-generators-and-weighted-coordinate-length`.
4. `lem-finite-lower-central-coordinate-systems-exist`.
5. `lem-weighted-collection-in-lower-central-coordinates`.
6. `lem-growth-is-unchanged-by-quotienting-a-finite-normal-subgroup`.
7. `thm-last-lower-central-term-has-exact-weighted-distortion`.
8. `lem-weighted-coordinate-boxes-give-matching-growth-bounds`.
9. `thm-bass-guivarch-growth-degree-formula-with-proof`.

The rank in BG-2 is the torsion-free rank of
`gamma_i(G)/gamma_{i+1}(G)`, and the degree is
`sum_i i rank(...)`. BG-4 first passes to a finite-index torsion-free
nilpotent subgroup or explicitly quotients finite torsion; it may not silently
assert unique integral Mal'cev coordinates for a group with torsion. BG-7
proves both inequalities in the distortion exponent. BG-9 proves upper and
lower polynomial bounds, so the word “growth” means equivalence class and not
an unsupported exact asymptotic constant.

**B page** `hall-malcev-coordinates-and-bass-guivarch-growth-examples`,
requiring only the A page: `ex-bass-dimension-of-a-free-abelian-group`,
`ex-bass-dimension-of-the-discrete-heisenberg-group`,
`ex-central-distortion-in-the-discrete-heisenberg-group`,
`ex-bass-dimension-of-unitriangular-four-by-four-integers`,
`ex-hirsch-length-and-growth-degree-need-not-agree`, and
`cex-counting-every-lower-central-generator-with-weight-one`. Each has zero
published consumers.

#### HG. Quantitative hyperbolic-geometry toolkit

**A page** `quantitative-hyperbolic-geometry-toolkit`

**requires** `cayley-graphs-word-metrics-and-quasi-isometry`,
`geometric-actions-svarc-milnor-and-growth`,
`small-cancellation-and-dehn-algorithms`, `free-groups-and-presentations`

**placement** immediately before the published hyperbolic-spaces A page.

1. `lem-geodesic-triangles-in-trees-are-tripods`.
2. `lem-slim-triangles-imply-the-gromov-product-inequality`.
3. `lem-the-gromov-product-inequality-implies-the-four-point-condition`.
4. `lem-the-four-point-condition-implies-slim-triangles`.
5. `lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics`.
6. `thm-morse-stability-with-explicit-parameter-dependence`.
7. `lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse`.
8. `lem-hyperbolicity-is-transported-by-a-quasi-isometry`.
9. `lem-short-loop-relators-give-a-finite-dehn-presentation`.
10. `lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons`.
11. `lem-infinite-order-elements-have-positive-stable-translation-length`.
12. `lem-axis-fellow-travelling-controls-the-centralizer`.
13. `lem-asymptotic-gromov-sequences-form-an-equivalence-relation`.
14. `lem-boundary-products-are-independent-of-representative-and-basepoint`.
15. `lem-quasi-isometries-extend-to-boundary-homeomorphisms`.
16. `lem-independent-loxodromics-have-disjoint-pole-neighbourhoods`.
17. `lem-loxodromic-elements-have-north-south-boundary-dynamics`.
18. `thm-quantitative-hyperbolic-geometry-toolkit`.

HG-18 packages the preceding clauses with their constants and hypotheses so
published agreement theorems can depend on one earlier result. Properness is
used only for compact boundary statements; local finiteness is stated where a
finite ball is counted. “Elementary” means finite or virtually cyclic. The
centralizer conclusion is for finitely generated hyperbolic groups, not
arbitrary groups acting on a hyperbolic space. The Dehn clause
attaches every null loop of length at most `10 delta` and proves both finite
presentability and the shortening property. The boundary clauses specify the
Gromov-product convention and all additive constant changes.

**B page** `quantitative-hyperbolic-geometry-toolkit-examples`, requiring only
the A page: `ex-morse-stability-in-a-tree`,
`ex-a-local-geodesic-constant-in-a-cayley-graph`,
`ex-boundary-extension-of-a-tree-quasi-isometry`,
`ex-ping-pong-for-two-loxodromics`, and
`cex-properness-is-needed-for-the-compact-boundary-package`. Each has zero
published consumers.

### 30.6 Exact new-supplier consumer map

“Transitive” below excludes the direct consumer. Home pages are printed even
when all consumers lie on one page. Internal A items have no direct published
consumer; their listed impact is reached through the later item of their new A
page. There are no hidden consumers outside the sets printed here.

#### SC consumer map

SC-1 through SC-5 have zero direct published consumers and the complete
transitive published impact is the following curvature set:

- `small-cancellation-and-dehn-algorithms`: `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams`, `thm-greendlinger-lemma-for-c-prime-one-sixth-presentations`, `cor-finite-c-prime-one-sixth-presentations-have-solvable-word-problem`, `cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations`, `thm-dehn-algorithm-solves-the-word-problem`, `fs-greendlinger-lemma-applies-to-every-finitely-presented-group`;
- its B page: `ex-a-greendlinger-cell-in-a-van-kampen-diagram`, `ex-a-dehn-reduction-sequence`.

SC-6 directly supplies
`lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams`; its transitive
impact is the preceding set minus that direct item. SC-7 and SC-8 have zero
direct published consumers and transitively affect the torsion set below.
SC-9 directly supplies `thm-torsion-theorem-for-c-prime-one-sixth-groups`; its
complete transitive impact is:

- `small-cancellation-and-dehn-algorithms`:
  `cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free`,
  `fs-no-proper-power-relators-alone-implies-torsion-free`;
- its B page: `ex-a-torsion-free-small-cancellation-group`,
  `cex-a-no-proper-power-presentation-with-torsion-outside-small-cancellation`.

Every SC B item has zero direct and zero transitive published consumers.

#### BR consumer map

BR-1 through BR-3 have zero direct published consumers and transitively affect
all 19 items below. BR-4 directly supplies
`thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions`.
Its complete transitive published impact is the same list with that direct item
omitted:

- `brauer-characters-and-decomposition-matrices`:
  `cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes`,
  `def-decomposition-numbers-and-decomposition-matrix`,
  `def-projective-indecomposable-characters-and-cartan-invariants`,
  `lem-decomposition-numbers-are-nonnegative-integers`,
  `thm-brauer-nesbitt-module-determination`, `thm-brauer-reciprocity`,
  `thm-blocks-partition-ordinary-and-brauer-irreducible-characters`,
  `prop-decomposition-matrix-is-block-diagonal-after-block-ordering`,
  `thm-cartan-matrix-is-d-transpose-d`,
  `rem-defect-groups-and-brauer-main-theorems`,
  `fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible`,
  `fs-modular-representations-are-determined-by-ordinary-characters`,
  `fs-every-block-has-one-ordinary-and-one-brauer-irreducible-character`,
  `fs-the-cartan-matrix-equals-the-decomposition-matrix`;
- its B page: `ex-brauer-characters-of-a-p-group`,
  `ex-decomposition-matrix-of-s-three-in-characteristic-two`,
  `ex-a-block-with-one-ordinary-and-one-brauer-character`,
  `ex-cartan-matrix-from-d-transpose-d`.

Every BR B item has zero direct and zero transitive published consumers.

#### BG consumer map

BG-1 and BG-3 through BG-8 have zero direct published consumers and complete
transitive impact on these four items:

- `geometric-actions-svarc-milnor-and-growth`:
  `def-homogeneous-dimension-of-a-finitely-generated-nilpotent-group`,
  `rem-bass-guivarch-growth-degree-formula`,
  `cor-finitely-generated-nilpotent-groups-have-polynomial-growth`;
- its B page: `ex-growth-degree-of-the-discrete-heisenberg-group`.

BG-2 directly supplies the published homogeneous-dimension definition; its
transitive impact is the other three items. BG-9 directly supplies the
published Bass--Guivarc'h agreement remark; its transitive impact is the
corollary and Heisenberg example. Every BG B item has zero direct and zero
transitive published consumers.

#### HG consumer map

HG-1 through HG-17 have zero direct published consumers and transitively
affect the complete current 29-item set below through HG-18. HG-18 directly
supplies these 11 published items on `hyperbolic-spaces-and-hyperbolic-groups`:
`prop-cayley-trees-are-zero-hyperbolic`,
`thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants`,
`thm-morse-stability-of-quasi-geodesics`,
`thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces`,
`thm-hyperbolic-groups-admit-finite-dehn-presentations`,
`thm-linear-isoperimetric-characterisation-of-hyperbolic-groups`,
`thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted`,
`thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic`,
`thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup`,
`lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences`, and
`thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant`.

Its complete transitive impact is:

- `hyperbolic-spaces-and-hyperbolic-groups`:
  `prop-finite-and-free-groups-are-hyperbolic`,
  `prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic`,
  `thm-hyperbolic-group-definition-is-independent-of-finite-generating-set`,
  `cor-hyperbolic-groups-have-solvable-word-problem`,
  `thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups`,
  `cor-abelian-subgroups-of-hyperbolic-groups-are-virtually-cyclic`,
  `thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups`,
  `fs-hyperbolic-group-means-a-group-with-a-hyperbolic-plane-subgroup`,
  `fs-the-same-delta-works-after-every-change-of-generating-set`,
  `fs-every-abelian-group-is-hyperbolic`,
  `fs-all-quasi-geodesics-in-all-metric-spaces-stay-close-to-geodesics`, and
  `fs-the-boundary-definition-needs-no-properness-or-equivalence-check`;
- its B page: `ex-a-tree-is-zero-hyperbolic`,
  `ex-free-groups-and-their-cantor-boundaries`,
  `ex-surface-groups-as-hyperbolic-groups`,
  `ex-a-small-cancellation-hyperbolic-group`,
  `cex-product-of-two-infinite-groups-need-not-be-hyperbolic`, and
  `cex-z-squared-is-not-hyperbolic`.

Every HG B item has zero direct and zero transitive published consumers.

### 30.7 Group-owned low-degree (co)homology Phase-2 supplier

The former HA-12/HA-16/HA-17 Phase-2 proposal is withdrawn. HA-12 is already
published and nonempty, while the empty HA-16 and HA-17 A pages still require
B pages. None is in this audit's Phase 2.

Insert the single Group-Theory pair
`group-homology-transfer-and-low-degree-exact-sequences` /
`group-homology-transfer-and-low-degree-exact-sequences-examples` at
365.0721/.0722, immediately after GT-21 and before GT-22. The A page requires
only the earlier A pages `chain-complexes-and-homology`,
`group-cohomology-as-a-derived-functor`, `free-groups-and-presentations`, and
`group-extensions-complements-and-schur-zassenhaus`. It expressly does not
require GT-21, whose live page still requires the empty HA-17 B page. The B
page requires only its A and is a dependency leaf.

The A inventory, in order, is:

1. `def-finite-index-transfer-on-normalized-bar-chains`;
2. `lem-bar-transfer-is-a-chain-map-and-choice-independent-up-to-chain-homotopy`;
3. `lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology`;
4. `thm-positive-degree-integral-homology-of-a-finite-group-is-annihilated-by-its-order`;
5. `def-free-presentation-lyndon-bar-bicomplex-and-edge-maps`;
6. `lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree`;
7. `thm-free-presentation-homology-five-term-sequence`;
8. `def-crossed-homomorphisms-principal-coboundaries-and-first-cohomology`;
9. `def-degree-one-restriction-inflation-and-quotient-action`;
10. `lem-degree-one-maps-and-quotient-action-are-well-defined`;
11. `thm-degree-one-inflation-restriction-exact-sequence`;
12. `def-low-degree-transgression-for-a-group-extension`;
13. `lem-transgression-kernel-is-the-image-of-restriction`;
14. `lem-kernel-of-degree-two-inflation-is-the-transgression-image`;
15. `thm-inflation-restriction-transgression-five-term-sequence`.

Items 1--4 implement normalized-bar transfer, its transversal-change homotopy,
the corestriction composite, and the `H=1` annihilation argument. Items 5--7
construct the free-presentation Lyndon bar bicomplex, prove its low-degree
collapse, identify `H_1(R;Z)_G=R/[F,R]`, and track all edge maps and signs.
Items 8--11 locally construct the crossed-homomorphism model, restriction,
inflation, quotient action, and the degree-one exact sequence, without GT-21.
Items 12--15 construct transgression both by complements/pullback/pushout and
by normalized cocycles and prove exactness at the final two terms. The B items
are `ex-transfer-annihilation-for-a-cyclic-group`,
`ex-free-presentation-five-term-sequence-for-a-cyclic-group`, and
`ex-transgression-for-the-integral-heisenberg-extension`; each has zero direct
and zero transitive published consumers.

| withdrawn HA supplier | new GT supplier | direct published consumer |
|---|---|---|
| `thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence` | `thm-free-presentation-homology-five-term-sequence` | `lem-five-term-homology-sequence-for-a-free-presentation` |
| `thm-positive-degree-homology-of-a-finite-group-is-annihilated-by-its-order` | `thm-positive-degree-integral-homology-of-a-finite-group-is-annihilated-by-its-order` | `lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion` |
| `thm-five-term-exact-sequence-in-group-cohomology-from-lhs` | `thm-inflation-restriction-transgression-five-term-sequence` | `thm-five-term-exact-sequence-as-extension-and-transgression-data` |

Items 1--3 have zero direct consumers and inherit item 4's complete published
impact. Item 4's additional transitive impact is, on the Schur A page,
`lem-schur-multiplier-of-a-finite-group-is-finite`,
`def-schur-covering-group-of-a-finite-group`,
`thm-existence-of-schur-covering-groups-for-finite-groups`, and
`fs-schur-covering-groups-are-unique-for-all-finite-groups`, and on its B page
`cex-nonuniqueness-of-schur-covering-groups`.

Items 5--6 have zero direct consumers and inherit item 7's complete published
impact. Item 7's additional transitive impact is, on the Schur A page,
`thm-hopf-formula-for-the-schur-multiplier`,
`cor-hopf-formula-is-independent-of-the-free-presentation`,
`prop-schur-multiplier-of-a-free-group-is-trivial`,
`prop-schur-multiplier-of-a-cyclic-group-is-trivial`,
`cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier`,
`prop-universal-central-extension-group-is-superperfect`,
`cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated`,
`lem-schur-multiplier-of-a-finite-group-is-finite`,
`def-schur-covering-group-of-a-finite-group`,
`thm-existence-of-schur-covering-groups-for-finite-groups`,
`fs-hopfs-formula-is-obviously-independent-of-the-presentation`,
`fs-the-universal-coefficient-short-exact-sequence-splits-naturally`, and
`fs-schur-covering-groups-are-unique-for-all-finite-groups`; on its B page,
`ex-hopf-formula-from-a-one-relator-presentation`,
`ex-the-binary-icosahedral-cover-of-a-five`,
`ex-schur-multiplier-of-a-cyclic-group`, and
`cex-nonuniqueness-of-schur-covering-groups`.

Items 8--14 have zero direct consumers and the singleton published impact of
item 15. Item 15's direct consumer is
`thm-five-term-exact-sequence-as-extension-and-transgression-data`, with zero
further published consumers. All fifteen A items are Phase-2 eligible.

Full-text proof routes: Loeh, *Group Cohomology*,
<https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf>,
Definition 1.7.13,
Theorem 1.7.15 and Corollary 1.7.16, printed pp. 63--65; §§3.2.1--3.2.4,
especially Theorems 3.2.9--3.2.12 and 3.2.18, pp. 118--132. Dekimpe--Hartl--
Wauters, <https://arxiv.org/abs/1103.4052> (v2), §§3--6 and §§9--10, gives the elementary
complement/pullback/pushout exactness proof and cocycle formulas. Weibel,
Chapter 6,
<https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf>,
Definition 6.4.1, Example 6.4.2, and Theorem 6.4.5, printed pp. 174--175;
§§6.7.3 and 6.7.6--6.7.9, printed pp. 189--191; Theorem 6.5.8; and
§§6.8.2--6.8.3, printed pp. 195--196, independently control the crossed-
homomorphism quotient, all three degree-one maps and the quotient action, and
the two low-degree sequences. All three complete texts were retrieved and the
cited proof ranges read; no source blocker remains.

Remaining cross-category seams:

1. The already published HA-12 derived-functor definition assumes Dependent
   Choice and supplied injective-resolution data. Any GT-21--GT-23 theorem
   identifying explicit cochains or factor sets with that derived theory must
   inherit those hypotheses, or instead cite the proved bar-resolution
   comparison with its exact hypotheses. No choice-free conclusion may be
   inferred merely from a finite group or finite cochain degree.
2. Algebra owns `chain-conditions-and-semisimple-modules`; it must expose the precise
   finite-dimensional separation/density consequence used by BR-1, or approve
   BR-1's derivation from its matrix-factor theorem. Representation Theory must
   not mint a competing Brauer-character definition; GT-18/GT-19 retain
   ownership of modular systems, Brauer characters, and decomposition maps.
3. Algebraic Topology must replace the page edge
   `simplicial-complexes-and-simplicial-homology` ->
   `schur-multipliers-and-universal-central-extensions-examples` by the exact
   earlier A-page supplier(s) it actually uses. A GT B page is never an
   admissible cross-category prerequisite.
4. Number Theory's published `primitive-roots-and-unit-groups-modulo-n` is an
   existing adequate supplier, not a new Phase-2 root. Phase 3 moves that A-page
   edge from
   `frattini-subgroups-and-the-burnside-basis-theorem-examples.requires` to
   `frattini-subgroups-and-the-burnside-basis-theorem.requires`, replaces the
   latter's `sylow-theorems-and-nilpotent-groups-examples` edge by the Sylow A
   page, and leaves the Frattini B page requiring only the Frattini A page. The
   primitive-roots edge is needed directly at item level by
   `ex-frattini-subgroup-of-a-cyclic-p-group`, through
   `lem-order-of-a-power-in-a-finite-cyclic-group`. Its complete additional
   transitive GT impact, all on the same Frattini B page, is
   `cex-frattini-image-under-a-nonsurjective-homomorphism`,
   `ex-hall-burnside-detects-a-nontrivial-coprime-automorphism`, and
   `fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms`. Because
   both Number Theory and Sylow A pages are already published, the change is
   Phase 3 and creates no supplier item or Phase-2 root.

HA-12's discarded draft insertion and every HA-16/HA-17 item have zero GT
Phase-2 role. Published GT-21 also has zero supplier role for the new pair,
GT-22, or GT-23; its live HA-17-B prerequisite defect is reserved for Phase 3.
HA's own page-prerequisite repairs remain outside this audit.

### 30.8 Authoritative full-text evidence and blockers

- Cornelia Druţu and Michael Kapovich, *Geometric Group Theory*, complete
  author-hosted manuscript,
  <https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf>: Chapter 9,
  especially Theorem 9.38 (Morse), Theorems 9.83--9.89 (boundary extension),
  §§9.11--9.13 and Theorem 9.108/Proposition 9.109/Lemma 9.112 (hyperbolic
  groups, linear filling, and Dehn presentations); §12.5, Definition 12.42,
  Proposition 12.43, Lemma 12.44, Proposition 12.45 and Theorem 12.48 (the
  complete Bass--Guivarc'h proof). The whole 585-page text was obtained and
  the cited proof ranges read.
- Matthias Hamann, *Geometric Group Theory*, complete author text,
  <https://www.math.uni-hamburg.de/home/hamann/Lehre/GeoGrTh/GeoGrThEn.pdf>:
  Proposition 5.2.5 and Theorem 5.2.6 prove undistortion and the virtually
  cyclic centralizer; Theorems 5.3.7--5.3.8 prove the general (torsion-allowed)
  boundary trichotomy and rank-two free-subgroup conclusion.
- Richard Canary, *Anosov Representations: Informal Lecture Notes*, complete
  author-hosted text, <https://websites.umich.edu/~canary/lecnotespublic.pdf>:
  Proposition 4.3/Corollary 4.4 and Proposition 5.1 prove infinite cyclic
  undistortion and north--south dynamics; Theorem 7.3 gives the ping-pong
  proof. Its subgroup corollaries explicitly impose torsion-freeness, which is
  why it is not used to certify the two finite-torsion claims isolated in
  §30.4.
- Clara Löh, *Geometric Group Theory: An Introduction*, complete author text,
  <https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf>:
  the growth and quasi-isometry sections were used as independent convention
  control. Its Bass theorem is a statement with a reference, not the proof
  source for BG, and this edition was not used for small cancellation.
- Nicholas Touikan, *An Introduction to Combinatorial and Geometric Group
  Theory*, complete author HTML, §3.5,
  <https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html>:
  arc reduction, pieces, shells, and Proposition 3.5.5. This supports SC-1--SC-6.
- Roger C. Lyndon and Paul E. Schupp, *Combinatorial Group Theory*, Chapter V,
  §10, Theorem 10.1 and Lemma 10.2, Springer (1977/2001), complete searchable
  scan, pp. 281--282: the relator-power piece criterion, shortest-conjugate
  argument, Greendlinger application, repeated-period case, and shorter-
  conjugate contradiction close SC-7--SC-9. The earlier source blocker is
  resolved.
- Peter Webb, *A Course in Finite Group Representation Theory*, complete
  author-hosted text,
  <https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf>, and the
  complete Meier Brauer-character notes,
  <https://users.math.msu.edu/users/meierfra/Classnotes/MTH912F04/913S05notes.pdf>,
  §6.4, especially Lemma 6.4.3. The latter prints the separation-and-trace
  proof of linear independence used by BR-1--BR-4.
- Clara Löh, *Group Cohomology*, complete author text,
  <https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf>,
  and Weibel Chapter 6 full-text excerpt,
  <https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf>,
  control the low-degree homology and order-annihilation seams. The new
  Group-Theory-owned pair in §30.7 contains the proofs; HA-12/HA-16/HA-17 do
  not supply Phase-2 items to this audit.
- Stephen D. Smith, *CFSG---A User's Manual*, complete author-hosted text,
  <https://homepages.math.uic.edu/~smiths/talkv.pdf>, states the component and
  generalized-Fitting facts in §1 but does not provide the missing elementary
  proof. Consequently those two published nominal proofs are blocked and must
  be isolated as recorded leaves, as §30.4 requires.
- Liebeck--Praeger--Saxl, “On the O'Nan--Scott theorem for finite primitive
  permutation groups,” is the primary self-contained source cited in §GT-4.
  The search index exposed part of §2's proof, but full retrieval returned an
  access error. Under the full-text rule this does not license a local proof;
  §30.4 therefore restores the published theorem and two-transitive
  consequence to their intended recorded-leaf status.

The inaccessible monograph citations in §§0--29 are corroborating
bibliography only. They do not license a proof claim. In particular, the Jay
Williams descriptive-set-theory paper currently cited by the published
small-cancellation torsion item is not an acceptable proof source merely
because it restates the classical theorem.

### 30.9 Final phase partition

- **Phase 2 GT roots:** SC-6 and SC-9 with SC-1--SC-5/SC-7--SC-8 closure;
  BR-4 with BR-1--BR-3 closure; BG-2 and BG-9 with BG-1/BG-3--BG-8 closure;
  HG-18 with HG-1--HG-17 closure; and the three interface theorems with their
  twelve-item internal closure on
  `group-homology-transfer-and-low-degree-exact-sequences`. Publish all five
  A/B pairs because build units are pairs, while preserving every B as a leaf.
- **Phase 2 cross-category roots:** none. The superseded HA-12 insertion and
  HA-16/HA-17 pairs have zero GT Phase-2 role.
- **Planned-only enrichment:** exactly the 18 B-page items enumerated in §30.5
  plus the three B items in §30.7. Every one has zero direct and zero
  transitive published consumers. There is no planned-only A item.
- **Phase 3 using existing suppliers:** all page-require rewrites in §30.2;
  all item reorders and header/ledger reconciliation in §30.3; all recorded
  isolation and local proof repairs in §30.4; the DC/supplied-resolution
  hypothesis propagation in §30.7(4), including removal of GT-21 from the
  GT-22/GT-23 prerequisite closure.

Until the supplier roots land, the affected published consumers remain
transitively blocked. The earlier claims “Forward references: NONE,” “no
blocker,” “every theorem is locally proved,” and “no survey item is a dependency
target” are historical and false for the live snapshot.

## Probability theory

## 0A. Binding dependency audit amendment (2026-09-08)

This is the canonical Probability Theory scaffold.  Sections 0 and 2--13
below remain the historical source/proof design, but this section supersedes
their obsolete claims that all pages are merely proposed, that the whole
block follows a Functional Analysis B page, that predecessor pages are empty,
that B pages may be chained as prerequisites, that the arbitrary-index
extension supplied here costs only BPI, and that there are no blockers.
`research/plan-spec.json` and all published files were inspected but not
edited.

### 0A.1 Live census and hard invariants

The live plan has 44 Probability pages.  PT-1--PT-5 are ten published pages
with 166 items: respectively A/B counts 30/11, 22/6, 21/8, 23/9, and 27/9
(123 A items and 43 B items).  PT-6--PT-22 are 34 empty planned pages.  All
134 published proof-bearing Probability items pass the scoped precheck.  Every
declared direct item dependency resolves to a published item, and the complete
transitive closure of all 166 published items contains zero
`proved_here: false` items and zero unresolved items.

These invariants are binding for every later build:

1. No definition, theorem, proof, `deps`, `justified_by`, or load-bearing body
   link may directly or transitively use a recorded-but-unproved or
   not-proved-here claim.  An orientation sentence cannot launder such a claim.
2. Every B page requires only its A companion.  No item may depend on a B item,
   and no page or item may consume a B page or item.  Thus every B page is a
   dependency leaf, not a bridge to the next pair.
3. Every A input must be adequate, published at build time, and strictly
   earlier.  A later or empty page supplies nothing.
4. Phase 2 may add new A/B supplier pairs only.  Nothing placed on an already
   published PT-1--PT-5 page is Phase-2 work.

### 0A.2 Exact Phase-3 defects in published content

The following are deferred edits to published content, not permission to
change it during this audit.

1. On `modes-of-convergence-for-random-variables`, move
   `lem-almost-sure-convergence-event-is-measurable` before
   `def-almost-sure-convergence-of-random-variables`; replace the lemma's
   circular dependency on that definition by the adequate earlier inputs
   `def-random-element-and-real-random-variable` and `def-real-limit`.  Retain
   the definition's `justified_by` edge to the now-earlier lemma.  Also repair
   the typo “real random. variable” in the lemma.
2. On the same page, insert immediately before
   `def-probability-convergence-metric` the new Phase-3 A item
   `lem-bounded-expectation-distance-is-well-defined-and-characterizes-probability-convergence`.
   It states the candidate formula
   $D(X,Y)=E[1\wedge|X-Y|]$, proves representative-independence,
   positive-definiteness on a.s. classes, symmetry and the triangle inequality,
   and proves $D(X_n,X)\to0$ iff $X_n\to X$ in probability.  Its adequate
   earlier dependencies are
   `def-convergence-in-probability`,
   `def-expectation-of-a-nonnegative-or-integrable-random-variable`,
   `lem-expectation-is-independent-of-the-ae-representative`, and
   `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`.  Point
   `def-probability-convergence-metric.justified_by` to this lemma.  Rewrite
   `thm-probability-convergence-is-metrized-by-d-zero` as the immediate
   corollary depending on the definition and the lemma.  Remove the present
   definition/theorem two-cycle.
3. Add
   `def-expectation-of-a-nonnegative-or-integrable-random-variable` to the
   declared `deps` of
   `cor-expectation-agrees-with-the-finite-weighted-sum`; its statement already
   uses that definition as a load-bearing body link.
4. On `infinite-product-measures-and-kolmogorov-extension-examples`, remove the
   two B-to-B edges.  Replace
   `ex-canonical-random-walk-from-product-increments -> ex-infinite-coin-toss-space`
   by direct A inputs `thm-countable-product-of-probability-spaces` and
   `cor-coordinate-random-elements-on-a-countable-product-are-independent`.
   Replace
   `cex-a-noncylinder-path-functional-may-fail-measurability -> ex-uncountable-bernoulli-coordinate-process`
   by direct A inputs
   `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces` and
   `cor-canonical-process-realizes-consistent-finite-dimensional-laws`.
5. Preserve `thm-doob-dynkin-factorization-for-real-random-variables` as a
   Phase-3 local insertion on published PT-1, not Phase 2.  It is required by
   the planned conditional-law factorization in PT-11.  The old planned
   `def-probability-space-and-event` is retired as an exact duplicate of the
   published Measure Theory item `def-probability-measure`, which already
   defines probability spaces and events.  The absent PT-2 enrichment IDs
   `cor-variance-adds-for-independent-square-integrable-sums`,
   `ex-pairwise-independent-but-not-mutually-independent-events`,
   `ex-infinitely-many-successes-in-independent-trials`, and
   `ex-pairwise-independent-events-satisfy-the-frequency-law` are optional
   Phase-3 local enrichment with zero published consumers, never Phase 2.
   The absent `lem-random-series-convergence-is-a-tail-event` is retired:
   its measurability and tail-invariance proof is already contained in the
   published `def-almost-sure-convergence-of-a-random-series`.

The published/scaffold drift is otherwise exact: PT-2 additionally published
`cex-independent-events-need-not-be-closed-under-unions-of-overlapping-pairs`;
PT-3 additionally published
`lem-finite-coordinate-cylinder-sets-form-an-algebra`,
`lem-countable-product-cylinder-premeasure-is-countably-additive`,
`lem-finite-products-of-standard-borel-spaces-are-standard-borel`,
`thm-borel-probability-measures-on-polish-spaces-are-inner-regular`, and
`lem-cylinder-sigma-events-depend-on-countably-many-coordinates`; PT-5
additionally published `def-symmetric-real-random-variable`,
`lem-bounded-centered-convergent-series-have-summable-variances`,
`lem-independent-copy-symmetrization-tail-bounds`,
`thm-truncation-weak-law-for-independent-arrays`,
`lem-vanishing-tail-control-implies-small-truncated-second-moment`,
`lem-largest-summand-bound-for-symmetric-independent-variables`,
`lem-levy-maximal-inequality-for-independent-tail-sums`,
`lem-cauchy-in-probability-sequences-have-a-measurable-limit`,
`thm-independent-series-probability-and-almost-sure-convergence-agree`,
`cex-iid-cauchy-averages-have-no-deterministic-weak-centering`, and
`ex-truncated-centering-weak-law-with-infinite-mean`.  These published IDs,
not the older shorter inventories, are canonical.

The live plan-spec dependency arrays also lag the published frontmatter on 21
items.  Root must mirror the published files exactly with these amendments
(all additions are already-published earlier items):

* `thm-probability-law-and-distribution-function-correspondence`: add
  `prop-measure-of-a-set-difference`,
  `thm-continuity-from-below-for-measures`,
  `thm-continuity-from-above-for-measures`, `prop-measure-monotonicity`.
* `thm-change-of-variables-for-expectation`: add
  `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`,
  `thm-monotone-convergence-for-the-integral`,
  `prop-the-nonnegative-integral-agrees-with-the-simple-integral`,
  `def-integral-of-a-nonnegative-simple-function`,
  `def-integrable-real-and-complex-functions-and-their-integrals`,
  `thm-linearity-of-the-lebesgue-integral-on-l-one`, and
  `prop-closure-properties-of-measurable-functions-used-by-the-integral`.
* `cor-expectation-of-an-indicator-is-probability`: add
  `prop-the-nonnegative-integral-agrees-with-the-simple-integral` and
  `def-integral-of-a-nonnegative-simple-function`.
* `lem-variance-and-covariance-identities-for-random-variables`: add
  `thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces`.
* `thm-normal-equations-for-best-affine-l2-prediction`: add
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`.
* `ex-exponential-random-variable-from-its-tail` and
  `ex-discrete-continuous-and-mixed-distribution-functions`: add
  `def-countable-choice` to each.
* `cex-a-random-variable-need-not-have-a-finite-expectation`: add
  `def-integral-of-a-nonnegative-simple-function`,
  `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, and
  `thm-monotone-convergence-for-the-integral`.
* `thm-independent-random-elements-have-product-joint-law`: add
  `def-product-sigma-algebra-and-finite-product-sigma-algebras`.
* `thm-factorization-of-expectations-for-independent-variables`: add
  `lem-measurable-functions-preserve-independence`,
  `def-product-sigma-algebra-and-finite-product-sigma-algebras`, and
  `thm-arithmetic-and-lattice-operations-preserve-measurability`.
* `thm-pairwise-independent-borel-cantelli-frequency-law`: add
  `prop-indicator-function-is-measurable-iff-its-set-is-measurable`,
  `thm-arithmetic-and-lattice-operations-preserve-measurability`,
  `cor-expectation-linearity-monotonicity-and-modulus-bound`, and
  `lem-variance-and-covariance-identities-for-random-variables`; remove the
  stale non-frontmatter entries `def-indicator-random-variable`,
  `thm-event-independence-and-indicator-independence`, and
  `cor-variance-adds-for-pairwise-independent-random-variables`.
* `thm-kolmogorov-zero-one-law`: add
  `def-tail-sigma-algebra-of-a-sequence` and
  `lem-probability-measure-basic-identities`.
* `cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event`:
  add `thm-arithmetic-and-lattice-operations-preserve-measurability`.
* `ex-functions-of-disjoint-independent-coordinate-blocks`: add
  `lem-measurable-functions-preserve-independence`.
* `def-coordinate-maps-and-cylinder-sigma-algebra`: add
  `def-generated-sigma-algebra`.
* `def-consistent-family-of-finite-dimensional-distributions`: add
  `def-coordinate-maps-and-cylinder-sigma-algebra`.
* `lem-countable-product-cylinder-premeasure-is-countably-additive`: add
  `def-product-measure-on-sigma-finite-spaces` and
  `prop-sigma-finite-section-measure-functions-are-measurable`.
* `cor-countable-independent-copies-exist`: add
  `thm-countable-product-of-probability-spaces`.
* `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`: add
  `thm-compact-implies-the-other-compactness-forms`.
* `ex-infinite-coin-toss-space`: add `def-countable-choice` and
  `def-dependent-choice`.
* `thm-almost-sure-convergence-implies-convergence-in-probability`: add
  `def-random-element-and-real-random-variable`.

After the Phase-3 body-link repair above, add
`def-expectation-of-a-nonnegative-or-integrable-random-variable` to both the
published frontmatter and plan-spec array for
`cor-expectation-agrees-with-the-finite-weighted-sum`.

### 0A.3 Exact page-requirement amendments

For PT-1--PT-5, replace the current B-chain requirements by these exact A-page
requirements.  Each row is the union needed by its A and B item inventories;
each B itself continues to require only the A named in the row.

| pair | exact A `requires` |
|---|---|
| PT-1 | `vector-spaces-and-subspaces`; `inner-product-spaces-and-orthogonality`; `finite-probability-spaces-and-random-variables`; `sigma-algebras-and-borel-sets`; `measures-and-their-basic-properties`; `lebesgue-stieltjes-measures-and-distribution-functions`; `measurable-functions-and-simple-approximation`; `the-lebesgue-integral-and-the-convergence-theorems`; `product-measures-and-the-fubini-tonelli-theorems`; `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| PT-2 | `finite-probability-spaces-and-random-variables`; `sigma-algebras-and-borel-sets`; `measures-and-their-basic-properties`; `measurable-functions-and-simple-approximation`; `product-measures-and-the-fubini-tonelli-theorems`; `probability-spaces-random-variables-and-expectation` |
| PT-3 | `relations-functions-and-quotients`; `countability-and-uncountability`; `metric-spaces`; `completeness-and-uniform-continuity`; `compactness-in-metric-spaces`; `compactness`; `complete-metrizability-and-baire`; `sigma-algebras-and-borel-sets`; `measures-and-their-basic-properties`; `outer-measure-and-the-caratheodory-extension-theorem`; `lebesgue-measure-on-euclidean-space`; `product-measures-and-the-fubini-tonelli-theorems`; `probability-spaces-random-variables-and-expectation`; `independence-borel-cantelli-and-zero-one-laws` |
| PT-4 | `measures-and-their-basic-properties`; `the-lebesgue-integral-and-the-convergence-theorems`; `modes-of-convergence-egorov-and-lusin`; `the-lp-spaces-holder-minkowski-and-riesz-fischer`; `probability-spaces-random-variables-and-expectation`; `independence-borel-cantelli-and-zero-one-laws` |
| PT-5 | `roots-and-rational-powers`; `series-and-nonnegative-tests`; `absolute-convergence-and-rearrangement`; `properties-of-the-integral-and-the-working-ftc`; `the-logarithm-and-general-powers`; `finite-probability-spaces-and-random-variables`; `measures-and-their-basic-properties`; `measurable-functions-and-simple-approximation`; `the-lebesgue-integral-and-the-convergence-theorems`; `product-measures-and-the-fubini-tonelli-theorems`; `the-lp-spaces-holder-minkowski-and-riesz-fischer`; `probability-spaces-random-variables-and-expectation`; `independence-borel-cantelli-and-zero-one-laws`; `infinite-product-measures-and-kolmogorov-extension`; `modes-of-convergence-for-random-variables` |

For PT-6--PT-22, delete every sequential B predecessor.  Resolve the exact
page IDs in each pair's `Requires` paragraph and §2, use only those earlier A
pages, and keep every B at `[its A companion]`.  In particular the exact
reserved cross-category IDs are
`sigma-algebras-and-borel-sets`,
`measures-and-their-basic-properties`,
`measurable-functions-and-simple-approximation`,
`the-lebesgue-integral-and-the-convergence-theorems`,
`modes-of-convergence-egorov-and-lusin`,
`product-measures-and-the-fubini-tonelli-theorems`,
`the-radon-nikodym-theorem-and-lebesgue-decomposition`,
`the-lp-spaces-holder-minkowski-and-riesz-fischer`,
`radon-measures-and-the-riesz-markov-kakutani-theorem`,
`the-ergodic-theorems-of-von-neumann-and-birkhoff`,
`complete-metrizability-and-baire`,
`continuous-functional-calculus-for-self-adjoint-and-normal-operators`, and
`fourier-transform-convolution-and-approximate-identities`.  The Measure pages
through MT-20 and the topology page are published.  Reconciled Measure Theory
still marks MT-23 empty/planned, and reconciled Functional Analysis still
marks FA-19 and FA-22 empty/planned and blocked; they supply nothing now and
must never be cited through companions.  PT-17 therefore remains blocked on
MT-23, and PT-8 remains blocked on FA-22.  PT-9 does **not** wait for FA-19:
replace that stale requirement by the already-published Linear Algebra A page
`the-spectral-theorem-and-singular-value-decomposition`, specifically
`thm-non-negative-square-root-exists-and-is-unique` for its finite-dimensional
covariance operator.

The exact Probability-side A requirements for the empty pages are as follows;
the named foreign A pages are added where their items are used.  This table
supersedes the one-B-page chain in the live plan.

| A page | exact `requires` |
|---|---|
| `strong-laws-of-large-numbers` | PT-1 A through PT-5 A; `the-lebesgue-integral-and-the-convergence-theorems`; `product-measures-and-the-fubini-tonelli-theorems`; `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| `weak-convergence-tightness-and-representation` | PT-1 A, PT-3 A, PT-4 A; `metric-spaces`; `compactness-in-metric-spaces`; `complete-metrizability-and-baire`; `radon-measures-and-the-riesz-markov-kakutani-theorem` |
| `characteristic-functions-inversion-and-continuity` | PT-1 A, PT-4 A, PT-7 A; `product-measures-and-the-fubini-tonelli-theorems`; `fourier-transform-convolution-and-approximate-identities` |
| `central-limit-theorems` | PT-1 A through PT-8 A; `the-lebesgue-integral-and-the-convergence-theorems`; `product-measures-and-the-fubini-tonelli-theorems`; `the-lp-spaces-holder-minkowski-and-riesz-fischer`; `the-spectral-theorem-and-singular-value-decomposition`; `darboux-lhopital-and-taylor` |
| `conditional-expectation` | PT-1 A, PT-4 A; `measurable-functions-and-simple-approximation`; `the-lebesgue-integral-and-the-convergence-theorems`; `modes-of-convergence-egorov-and-lusin`; `the-radon-nikodym-theorem-and-lebesgue-decomposition`; `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| `conditional-distributions-and-regular-conditional-probability` | PT-1 A, PT-3 A, PT-7 A, PT-10 A; `standard-borel-real-codings-and-determining-classes`; `sigma-algebras-and-borel-sets`; `product-measures-and-the-fubini-tonelli-theorems`; `the-radon-nikodym-theorem-and-lebesgue-decomposition`; `complete-metrizability-and-baire` |
| `discrete-time-martingales` | PT-1 A, PT-2 A, PT-10 A; `the-lebesgue-integral-and-the-convergence-theorems`; `modes-of-convergence-egorov-and-lusin`; `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| `martingale-inequalities-and-convergence` | PT-4 A, PT-9 A, PT-10 A, PT-12 A; `the-lebesgue-integral-and-the-convergence-theorems`; `modes-of-convergence-egorov-and-lusin`; `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| `stopping-times-and-optional-stopping` | PT-10 A, PT-12 A, PT-13 A |
| `markov-kernels-and-markov-chains` | PT-3 A, PT-10 A, PT-11 A, PT-14 A; `product-measures-and-the-fubini-tonelli-theorems` |
| `recurrence-transience-and-hitting-times-for-markov-chains` | PT-1 A, PT-2 A, PT-14 A, PT-15 A |
| `stationary-markov-chains-and-ergodic-limits` | PT-6 A, PT-10 A through PT-16 A; `the-ergodic-theorems-of-von-neumann-and-birkhoff` |
| `brownian-motion-construction-and-continuity` | PT-1 A through PT-3 A, PT-7 A, PT-9 A, PT-15 A; `product-measures-and-the-fubini-tonelli-theorems`; `complete-metrizability-and-baire`; `function-space-topologies` |
| `brownian-motion-markov-properties-and-hitting-times` | PT-2 A, PT-7 A, PT-10 A, PT-11 A, PT-14 A, PT-15 A, PT-18 A |
| `brownian-path-properties` | PT-2 A, PT-4 A, PT-18 A, PT-19 A; `the-lebesgue-integral-and-the-convergence-theorems`; `product-measures-and-the-fubini-tonelli-theorems`; `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` |
| `the-ito-integral-with-respect-to-brownian-motion` | PT-4 A, PT-10 A, PT-12 A through PT-14 A, PT-18 A through PT-20 A; `product-measures-and-the-fubini-tonelli-theorems`; `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| `itos-formula-and-brownian-martingales` | PT-10 A, PT-13 A, PT-14 A, PT-18 A through PT-21 A; `mixed-partials-taylor-and-extrema`; `fubini-and-change-of-variables` |

Here “PT-$m$ A through PT-$n$ A” is an exact inclusive list of the existing A
page IDs in §0, never their B companions.  At authoring time minimize only an
edge proved redundant by transitive A closure; do not add a new requirement.

Remove the spurious published external requirements
`dirichlet-kernel-localisation-and-pointwise-fourier-convergence ->
itos-formula-and-brownian-martingales-examples` and
`partial-differential-equations-and-characteristics ->
itos-formula-and-brownian-martingales-examples`.  Neither published consumer
has any Probability item dependency; the complete item-level impact is zero.

### 0A.4 Missing standard-Borel proof machinery

Insert a planned-only A/B pair after PT-7 and before PT-8.  Against the
2026-09-08 plan its exact requested orders are 288.1101/288.1102; recompute
them if that interval changes before splice:

* A `standard-borel-real-codings-and-determining-classes`, requiring
  `infinite-product-measures-and-kolmogorov-extension` and
  `complete-metrizability-and-baire`, with this proof order:
  `lem-hilbert-cube-has-a-bimeasurable-real-coding`;
  `thm-standard-borel-spaces-admit-bimeasurable-real-codings`;
  `cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras`.
* B `standard-borel-real-codings-and-determining-classes-examples`, requiring
  only its A, with
  `ex-countable-discrete-spaces-are-standard-borel`,
  `ex-euclidean-borel-spaces-are-standard-borel`, and
  `ex-borel-subspaces-of-polish-spaces-are-standard-borel`.  Every B item is a
  leaf.

Durrett Theorem 2.1.22 (pp. 53--54) supplies the explicit Hilbert-cube/digit
coding route.  The proof must spell out the canonical-expansion convention,
the Borel description of the code image, and measurability of the inverse;
the book itself warns that its printed proof is light on those details.  The
published topology embedding and Polish-$G_\delta$ theorems supply the needed
Borel-image step.  Do not build PT-11 unless those details pass proof review.

Before PT-11 item 8 add
`lem-simultaneous-rational-conditional-distribution-function-versions` and
`lem-rational-conditional-distribution-functions-produce-real-regular-kernels`.
They must follow Durrett Theorem 4.1.17 (pp. 214--215): select conditional CDF
versions only at rational cuts; discard one countable union of null sets;
right-regularize by an infimum over rationals; invoke the proved
CDF-to-measure correspondence; then use a pi--lambda argument for measurable
kernel evaluation.  Pull the real kernel back through the earlier
bimeasurable coding.  Before disintegration add
`lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`,
using the Phase-3 Doob--Dynkin theorem and the countable determining algebra,
as in Durrett Theorem 4.1.18 (p. 215).  The old sentence “choose versions on a
countable algebra and extend” is not an adequate proof: arbitrary separately
chosen versions do not automatically give countably additive sections.

Retire both planned pathology remarks
`rem-regular-conditional-probability-existence-boundary` and
`rem-nonstandard-space-failure-of-regular-conditionals` as items.  Preserve
only the non-load-bearing, unlinked scope sentence that PT-11 proves existence
under its stated standard-Borel hypothesis and makes no claim beyond it.
Likewise rewrite PT-6 item 13 to say only that the stated strong law contains
no rate assertion, PT-8 item 11 to say only that the derivative lemma has no
converse in this track, and PT-22 item 15 to say that Stratonovich integration
and any conversion theorem are not developed.  These formulations record no
unproved mathematical result.

### 0A.5 Choice-strength correction and Foundations seam

The supplied published countable-product proof explicitly assumes both
`def-countable-choice` and `def-dependent-choice`; its actual upper bound is
ZF + DC + $\mathsf{AC}_\omega$, not the stale “$\mathsf{AC}_\omega$ inherited
from MT-3” row.  The published arbitrary-index standard-Borel theorem
explicitly assumes full `def-axiom-of-choice` to select one Polish
presentation for every coordinate and to fill inactive coordinates.  Its
actual supplied upper bound is AC, not BPI.  Consequently PT-15's path-law
route inherits DC + $\mathsf{AC}_\omega$, and PT-18's presently planned
arbitrary-time-index Brownian construction inherits AC.  No lower bound or
reverse implication is asserted.

The Foundations-owned Phase-3 repair must rehome `def-dependent-choice` to
`countability-and-uncountability` immediately after `def-countable-choice`,
replace its inapplicable `def-sequence` dependency/body link by `def-function`,
and reconcile the consumers below.  It must also remove the stronger
`def-axiom-of-choice` dependency from the *definitions* of the weaker choice
principles unless a statement genuinely assumes AC; descriptive comparison
remarks are not hypotheses.  Probability may consume the axiom definitions
but may not consume the recorded relative-consistency remarks in their
bodies.  Until a proved implication item exists, a theorem using both DC and
$\mathsf{AC}_\omega$ must state both rather than cite an unproved orientation
claim that DC implies countable choice.

Direct published Probability consumers of `def-dependent-choice` are
`lem-countable-product-cylinder-premeasure-is-countably-additive`,
`thm-countable-product-of-probability-spaces`,
`cor-countable-independent-copies-exist`, and
`ex-infinite-coin-toss-space` and
`ex-iid-sequence-with-a-prescribed-law`.  Its complete transitive published
Probability impact is:

* `infinite-product-measures-and-kolmogorov-extension`:
  `lem-countable-product-cylinder-premeasure-is-countably-additive`,
  `thm-countable-product-of-probability-spaces`,
  `cor-countable-independent-copies-exist`,
  `cor-coordinate-random-elements-on-a-countable-product-are-independent`,
  `rem-kolmogorov-extension-state-space-boundary`;
* its B companion: `ex-iid-sequence-with-a-prescribed-law`,
  `ex-infinite-coin-toss-space`,
  `ex-independent-but-not-identically-distributed-coordinate-sequence`,
  `ex-canonical-random-walk-from-product-increments`, and
  `cex-modification-need-not-be-indistinguishable`;
* `weak-laws-and-series-of-independent-random-variables-examples`:
  `ex-weak-law-for-independent-nonidentical-variables`,
  `ex-three-series-with-rare-large-jumps`,
  `cex-sum-of-variances-condition-is-sufficient-not-necessary-without-further-hypotheses`,
  `ex-weak-law-for-bernoulli-sample-means`,
  `ex-rademacher-series-convergence-threshold`,
  `ex-a-random-series-that-converges-conditionally-almost-surely`,
  `cex-weak-law-can-fail-without-tail-control`,
  `cex-iid-cauchy-averages-have-no-deterministic-weak-centering`, and
  `ex-truncated-centering-weak-law-with-infinite-mean`.

### 0A.6 Planned-supplier consumer ledger and phase classification

There are **zero Phase-2 Probability supplier roots**: no published item
depends on an unpublished Probability item.  The new standard-Borel A/B pair,
all PT-6--PT-22 items (after the three PT-11 support insertions and two remark
retirements), and their internal supplier edges are planned-only enrichment.
For each individual item ID enumerated in those exact inventories, direct
published consumers = **0** and complete transitive published consumer closure
= **0**.  This is an item-level zero declaration; no future page-level edge is
being counted as published impact.  The same 0/0 declaration applies
individually to all six items in the new standard-Borel pair and to each of the
three new PT-11 support lemmas.

For the new Phase-3 metric supplier
`lem-bounded-expectation-distance-is-well-defined-and-characterizes-probability-convergence`,
the exact direct published consumers are
`def-probability-convergence-metric` and
`thm-probability-convergence-is-metrized-by-d-zero`; its complete transitive
published closure is exactly those same two items, both on
`modes-of-convergence-for-random-variables`.

For repaired
`lem-almost-sure-convergence-event-is-measurable`, the exact direct published
consumers after cycle removal are
`def-almost-sure-convergence-of-random-variables`,
`thm-almost-sure-convergence-implies-convergence-in-probability`, and
`thm-almost-sure-subsequence-from-convergence-in-probability`.  Its complete
transitive published impact, grouped by home page, is:

* `modes-of-convergence-for-random-variables`:
  `def-almost-sure-convergence-of-random-variables`,
  `thm-almost-sure-convergence-implies-convergence-in-probability`,
  `thm-almost-sure-subsequence-from-convergence-in-probability`,
  `thm-limits-in-probability-are-unique-almost-surely`,
  `thm-dominated-convergence-in-lp`,
  `thm-subsequence-characterization-of-convergence-in-probability`, and
  `rem-complete-convergence-implication-diagram`;
* its B companion: `cex-convergence-in-probability-need-not-be-almost-sure`,
  `cex-almost-sure-convergence-need-not-imply-lp-convergence`,
  `cex-lp-convergence-need-not-imply-almost-sure-convergence`,
  `cex-almost-sure-convergence-does-not-imply-convergence-of-expectations`, and
  `ex-a-probability-convergent-sequence-with-a-prescribed-fast-as-subsequence`;
* `weak-laws-and-series-of-independent-random-variables`:
  `def-almost-sure-convergence-of-a-random-series`,
  `thm-kolmogorov-convergence-criterion`,
  `lem-cauchy-in-probability-sequences-have-a-measurable-limit`,
  `thm-independent-series-probability-and-almost-sure-convergence-agree`,
  `cor-kolmogorov-two-series-sufficiency`,
  `lem-symmetrization-for-independent-random-series`,
  `lem-bounded-centered-convergent-series-have-summable-variances`,
  `thm-kolmogorov-three-series-theorem`,
  `lem-three-series-necessity-for-truncated-means-and-variances`,
  `thm-kolmogorov-strong-law-under-summable-normalized-variances`,
  `lem-independent-copy-symmetrization-tail-bounds`,
  `thm-truncated-centering-criterion-for-an-iid-weak-law`, and
  `cor-independent-nonidentical-finite-variance-strong-law`;
* its B companion:
  `cex-sum-of-variances-condition-is-sufficient-not-necessary-without-further-hypotheses`,
  `ex-rademacher-series-convergence-threshold`,
  `ex-a-random-series-that-converges-conditionally-almost-surely`,
  `ex-three-series-with-rare-large-jumps`,
  `cex-iid-cauchy-averages-have-no-deterministic-weak-centering`, and
  `ex-truncated-centering-weak-law-with-infinite-mean`.

The Phase-3 Doob--Dynkin insertion has direct published consumers = **0** and
complete transitive published closure = **0**; its consumer is planned PT-11.
Each optional absent PT-2 enrichment item listed in §0A.2 likewise has 0/0
published impact.  The retired duplicate/absorbed IDs are not suppliers.

### 0A.7 Cross-category ownership seams

Measure Theory owns sigma-algebras, measures, measurable functions, Lebesgue
integration, convergence in measure/a.e., finite products and Fubini--Tonelli,
Radon--Nikodym, scalar $L^p$, Radon regularity, and the ergodic theorems.
Probability owns laws, independence, infinite probability products,
conditional expectation as the RN application, conditional kernels,
martingales, Markov chains, Brownian motion, and Brownian Ito calculus.  The
new standard-Borel coding pair uses topology's Polish/Hilbert-cube machinery
but remains Probability-owned because it supplies Probability's existing
`def-standard-borel-space` interface.  Functional Analysis owns finite-measure
Fourier uniqueness and continuous functional calculus; Probability only
specializes them.  Combinatorics owns the finite probability pages.  No seam
is allowed to route through an examples companion.

Authoritative full text inspected for the nonroutine repair: Rick Durrett,
*Probability: Theory and Examples*, 5th ed., Theorem 2.1.22, pp. 53--54
(standard-Borel/“nice” coding), and Theorems 4.1.17--4.1.18, pp. 214--215

## Real analysis

## 9. Binding post-publication audit (2026-09-08)

This section is the canonical Real Analysis binding.  It supersedes the stale
pre-publication claims in the status banner, **Authority boundary**, R1, §1 and
§8 above, and every conflicting unmet-dependency claim in the historical,
read-only `plan-realanalysis-pages.md`.  The mathematical descriptions in
§§2--7 remain useful provenance, but RC-1--RC-13 have been published and are no
longer proposed supplier pairs.  This audit changes only this prose file;
published pages and items remain immutable until Phase 3.

### 9.1 Live census and phase classification

The 2026-09-08 disk/spec census is exact:

* `plan-spec.json` has 109 Real Analysis page rows: 54 A, 54 B, and the legacy P
  page `formal-laurent-series-field`, containing 1,589 item memberships.
* Disk has 106 Real Analysis pages and 1,614 published memberships (1,598
  distinct published item ids).  There are no draft memberships, no unresolved
  declared item dependencies, and no published-to-draft item edges.
* There are 51 complete published A/B pairs.  The only absent page files are
  `roots-and-rational-powers-examples`,
  `countability-and-uncountability-examples`, and
  `sequences-and-limits-examples`.  Their six intended items are already
  published, but presently sit on their A pages.
* All thirteen RC pairs described above are published.  Therefore the exact
  **Phase-2-eligible unpublished supplier set is empty**, and the exact
  **planned-only enrichment set is empty**.  No new item id is licensed by this
  audit.  Everything below is a Phase-3 repair to already-published material or
  an exact future `plan-spec.json` reconciliation.

Phase 3 must create the three missing B page files, move the following
memberships from A to B, and make each B require only its A companion:

| B page | published items moved to it |
|---|---|
| `roots-and-rational-powers-examples` | `fs-negative-has-square-root`; `fs-rational-power-of-negative-base` |
| `countability-and-uncountability-examples` | `fs-uncountable-contains-interval` |
| `sequences-and-limits-examples` | `fs-bounded-implies-convergent`; `fs-limit-preserves-strict-inequality`; `fs-subsequence-convergence-implies-convergence` |

These are page repairs, not Phase-2 roots.  Their item-exact published impact is:

* `fs-negative-has-square-root`: direct and complete transitive published
  impact, both on `roots-and-rational-powers`, is
  `{fs-rational-power-of-negative-base}`.  Remove that edge and make the latter
  refutation self-contained before moving both items to B.
* `fs-rational-power-of-negative-base`, `fs-uncountable-contains-interval`,
  `fs-limit-preserves-strict-inequality`, and
  `fs-subsequence-convergence-implies-convergence`: **zero direct published
  consumers and zero transitive published impact**, item by item.
* `fs-bounded-implies-convergent` has six direct published consumers, grouped by
  home: `equivalent-forms-of-completeness`:
  `{fs-cesaro-converse}`; `equivalent-forms-of-completeness-examples`:
  `{cex-irregular-summability-matrix, cex-stolz-cesaro-converse-fails,
  ex-cesaro-means-of-alternating}`; `sequences-and-limits`:
  `{fs-subsequence-convergence-implies-convergence,
  rem-sequence-conventions}`.  Its complete 27-item transitive published impact
  is: `equivalent-forms-of-completeness`:
  `{fs-cesaro-converse, lem-of-sequence-basics, lem-bw-implies-archimedean,
  lem-bw-implies-cauchy-complete, lem-mct-implies-archimedean,
  lem-mct-implies-lub, rem-where-the-archimedean-hypothesis-is-needed,
  thm-completeness-equivalences, fs-cauchy-complete-implies-lub,
  fs-nested-intervals-implies-lub}`;
  `equivalent-forms-of-completeness-examples`:
  `{cex-irregular-summability-matrix, cex-stolz-cesaro-converse-fails,
  ex-cesaro-means-of-alternating, ex-cauchy-complete-not-complete-field}`;
  `modes-of-convergence-egorov-and-lusin`:
  `{cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function}`;
  `sequences-and-limits`:
  `{fs-subsequence-convergence-implies-convergence,
  rem-sequence-conventions}`; `urysohn-lemma-and-tietze`:
  `{lem-a-uniformly-approximable-real-valued-map-is-continuous,
  thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set,
  thm-tietze-extension-theorem,
  rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem,
  cor-tietze-for-unbounded-and-open-interval-valued-maps,
  fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends}`;
  `urysohn-lemma-and-tietze-examples`:
  `{ex-every-closed-subset-of-the-line-is-a-zero-set,
  cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension,
  cex-tietze-fails-in-a-t1-space-that-is-not-normal,
  ex-tietze-extension-from-a-closed-interval-of-the-line}`.  Before the item is
  moved to B, remove all six direct dependency edges.  Each consumer must state
  the false assertion it refutes locally and depend only on the corresponding
  true A-page definitions/theorems.  The stable id remains unchanged.

### 9.2 Recorded-not-proved quarantine and the DC rehome

`extcheck --json` finds exactly two Real Analysis consequence items in the
recorded/not-proved cone.

1. `rem-continuum-hypothesis` directly cites recorded forcing/independence
   remarks.  Phase 3 must remove every `external_refs` entry and every assertion
   or load-bearing link saying CH is independent.  Retitle and rewrite it only
   to define CH and record that this library does not decide it.  This is a
   scope statement, not an independence theorem.
2. `rem-integral-conventions-and-scope` directly cites recorded
   `rem-ftc-absolutely-continuous` and
   `rem-dominated-convergence-theorem`.  Remove both `external_refs` and use the
   now-published proved A suppliers
   `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`
   and `thm-dominated-convergence`.  Put any reading-order cross-links in a
   non-load-bearing Remarks section.

The Real Analysis recorded item
`rem-sine-period-arc-length-integrand-is-nonelementary` has zero direct and zero
transitive published consumers.  It may remain isolated on its B page, but no
future item or page may consume it.  After the two repairs above, Real Analysis
has zero direct or transitive paths to recorded/not-proved material.

The Foundations binding owns one compulsory Phase-3 rehome.  Move the published
`def-dependent-choice` from `compactness-in-metric-spaces` to the Real Analysis
A page `countability-and-uncountability`, immediately after
`def-countable-choice`.  Replace its inapplicable real-valued `def-sequence`
dependency and both body links by `def-function`; retain the stable id.  Then
`thm-arzela-ascoli-for-real-ck` and `thm-perfect-set-uncountable-r` may add the
exact dependency.  This definition is already published: it is not a Phase-2
root.  The authoritative Foundations impact ledger gives 83 direct published
consumers and a complete 3,522-item published closure over 297 page homes plus
24 unhomed items, with serialization digest
`088790f25754324deb44aa4c3b6d3f21ebf58a5864a5beeb9c43b52352eb7346`;
the rehome changes neither set.

### 9.3 Page-level B-leaf repair

No Real Analysis A page currently requires a B page.  Nine Real Analysis B
pages nevertheless have thirteen forbidden extra prerequisites.  Move each
listed prerequisite to the A companion, then leave the B with exactly its A:

| B page | prerequisites moved to A |
|---|---|
| `equivalent-forms-of-completeness-examples` | `the-field-of-fractions-and-localisation` |
| `monotone-functions-and-discontinuities-examples` | `absolute-convergence-and-rearrangement` |
| `mixed-partials-taylor-and-extrema-examples` | `the-exponential-function` |
| `inverse-and-implicit-function-theorems-examples` | `sine-cosine-and-the-definition-of-pi` |
| `fubini-and-change-of-variables-examples` | `the-exponential-function`; `sine-cosine-and-the-definition-of-pi` |
| `the-inverse-function-theorem-completed-examples` | `sine-cosine-and-the-definition-of-pi`; `fundamental-trigonometric-identities` |
| `improper-and-parameter-dependent-multiple-integrals-examples` | `further-trigonometric-identities-and-inverses` |
| `picard-lindelof-and-first-order-odes-examples` | `darboux-lhopital-and-taylor`; `the-logarithm-and-general-powers` |
| `the-gauge-integral-and-cousins-lemma-examples` | `improper-integrals`; `darboux-lhopital-and-taylor` |

Eight external B pages also consume Real Analysis A pages directly.  Their
owners must move these requirements to their own A companions:

* Foundations `cardinal-arithmetic-and-cofinality-examples`:
  `cantor-set-baire-and-measure-zero`.
* Topology `subspaces-products-and-quotients-examples`:
  `cantor-set-baire-and-measure-zero`, `limits-of-real-functions`;
  `connectedness-examples`: `rn-as-a-normed-space`; `compactness-examples`:
  `cantor-set-baire-and-measure-zero`; `the-fundamental-group-examples`:
  `the-total-derivative`.
* Measure Theory `product-measures-and-the-fubini-tonelli-theorems-examples`:
  `further-trigonometric-identities-and-inverses`.
* Complex Analysis `isolated-singularities-and-laurent-series-examples`:
  `the-complex-exponential-and-eulers-formula`,
  `sine-cosine-and-the-definition-of-pi`; and
  `harmonic-functions-and-the-poisson-integral-examples`:
  `the-complex-exponential-and-eulers-formula`.

### 9.4 Published B-item suppliers: exact repair ledger

There are 57 published Real Analysis B-homed supplier items, with 81 direct
same-B consumer edges and 80 distinct published items in their within-page
transitive closure.  Every edge below must be removed in Phase 3: rewrite the
consumer self-contained from its companion A facts and local computation.
Notation `D=C` means the direct and complete transitive sets are identical;
otherwise both are displayed.  The page heading is the home of every item in
that group.

* `absolute-convergence-and-rearrangement-examples`:
  `ex-alternating-harmonic-series` D=C
  `{ex-abel-test-applied, ex-alternating-harmonic-rearranged-to-three-halves,
  ex-riemann-rearrangement-to-a-prescribed-sum}`.
* `bounded-variation-and-riemann-stieltjes-examples`:
  `ex-step-integrator-evaluates-at-the-jump` D=C
  `{ex-finite-step-integrator-weighted-jump-sum,
  ex-unbounded-integrand-stieltjes-integrable}`.
* `cantor-set-baire-and-measure-zero-examples`: `ex-cantor-set-in-ternary`
  D=C `{cex-cantor-point-that-is-not-an-endpoint,
  ex-cantor-function-values}`.
* `constant-rank-submersions-and-regular-level-sets-examples`:
  `ex-sphere-as-a-regular-level-set` D=C
  `{ex-lagrange-multipliers-on-the-sphere}`;
  `ex-graph-as-a-regular-level-set` D=C
  `{cex-critical-value-can-have-a-smooth-level-set,
  fs-a-critical-value-has-a-singular-level-set}`;
  `ex-x-xy-has-nonconstant-rank-on-every-neighborhood-of-origin` D=C
  `{fs-continuity-of-the-derivative-implies-constant-rank}`.
* `continuity-ivt-evt-and-uniform-continuity-examples`:
  `cex-dirichlet-is-nowhere-continuous` D=C
  `{ex-x-times-dirichlet-is-continuous-exactly-at-zero}`;
  `cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval` has
  D `{cex-x-squared-is-not-uniformly-continuous-on-r}` and
  C `{cex-x-squared-is-not-uniformly-continuous-on-r,
  cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous}`;
  `cex-x-squared-is-not-uniformly-continuous-on-r` D=C
  `{cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous}`.
* `convex-and-semicontinuous-functions-on-rn-examples`:
  `ex-euclidean-norm-and-squared-norm-are-convex` D=C
  `{fs-a-convex-function-is-differentiable}`;
  `cex-convex-function-on-closed-convex-set-discontinuous-at-the-boundary`
  D=C `{fs-a-convex-function-on-a-convex-set-is-continuous}`;
  `ex-characteristic-functions-of-open-and-closed-sets-are-semicontinuous`
  D=C `{fs-semicontinuity-implies-continuity-on-a-compact-set}`;
  `cex-positive-semidefinite-hessian-without-strict-convexity` D=C
  `{fs-a-positive-semidefinite-hessian-gives-strict-convexity}`;
  `cex-strictly-convex-function-with-a-singular-hessian` D=C
  `{fs-strict-convexity-gives-a-positive-definite-hessian}`.
* `darboux-lhopital-and-taylor-examples`:
  `ex-piecewise-polynomial-periodic-oscillator` D=C
  `{cex-lhopital-converse, ex-differentiable-function-with-discontinuous-derivative,
  ex-positive-derivative-at-zero-with-no-local-monotonicity}`.
* `equivalent-forms-of-completeness-examples`:
  `ex-rational-function-field-order` D=C
  `{cex-q-not-dense-in-an-ordered-field}`;
  `cex-evt-and-ivt-fail-over-a-non-complete-field` D=C
  `{cex-rolle-fails-over-a-non-complete-field}`.
* `improper-integrals-examples`: `ex-one-over-square-root-improper-integral`
  D=C `{ex-rational-p-integrals-at-both-endpoints}`.
* `limits-of-real-functions-examples`: `ex-distance-to-the-integers` D=C
  `{cex-psi-of-one-over-x-has-no-limit-at-zero,
  ex-x-times-psi-tends-to-zero,
  rem-classical-oscillator-is-sine-of-one-over-x}`;
  `cex-limit-differs-from-the-value` D=C
  `{cex-composition-of-limits-fails}`;
  `cex-dirichlet-has-no-limit-anywhere` D=C
  `{ex-x-times-dirichlet-has-a-limit-only-at-zero}`.
* `monotone-functions-and-discontinuities-examples`:
  `ex-hamel-basis-additive-function` D=C
  `{ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous}`.
* `picard-lindelof-and-first-order-odes-examples`:
  `ex-quadratic-ode-finite-time-blowup` D=C
  `{fs-a-local-ode-solution-exists-on-the-whole-domain-of-the-vector-field}`;
  `cex-continuous-ode-with-nonunique-delayed-solutions` D=C
  `{fs-continuity-of-the-right-hand-side-guarantees-unique-ode-solutions}`;
  `cex-uniqueness-does-not-require-local-lipschitz-continuity` D=C
  `{fs-local-lipschitz-continuity-is-necessary-for-ode-uniqueness}`.
* `properties-of-the-integral-and-the-working-ftc-examples`:
  `cex-an-integrable-function-with-no-primitive` D=C
  `{fs-the-integral-function-is-always-a-primitive}`;
  `cex-a-function-with-a-primitive-that-is-not-integrable` D=C
  `{fs-integration-by-parts-needs-no-integrability-hypothesis}`.
* `regular-surfaces-and-surface-integrals-examples`:
  `cex-schwarz-lantern-polyhedral-areas-diverge` D=C
  `{fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas}`.
* `rn-as-a-normed-space-examples`:
  `cex-mean-value-equality-fails-for-a-vector-valued-function` D=C
  `{cex-the-mean-value-inequality-is-attained}`;
  `ex-gamma-and-its-complement-computed-for-a-plane-series` D=C
  `{fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space}`;
  `fs-all-norms-on-any-real-vector-space-are-equivalent` D=C
  `{fs-heine-borel-holds-in-every-normed-space}`.
* `series-and-nonnegative-tests-examples`: `ex-harmonic-series-diverges`
  D=C `{cex-comparison-needs-nonnegativity,
  cex-limit-comparison-l-zero-one-directional,
  ex-abel-dini-pair-for-the-harmonic-series, ex-telescoping-sum-computed}`.
* `suprema-and-infima-examples`: `ex-sup-of-open-interval` D=C
  `{cex-sup-not-attained, ex-sup-of-closed-interval,
  ex-sup-of-sum-of-sets}`; `cex-unbounded-set-has-no-sup` D=C
  `{cex-empty-set-has-no-sup}`.
* `the-derivative-and-mean-value-theorems-examples`:
  `ex-derivative-of-the-nth-root-by-the-inverse-rule` D=C
  `{cex-differentiable-with-unbounded-derivative-is-not-lipschitz,
  ex-mean-value-theorem-bounds-the-square-root-increment}`.
* `the-divergence-theorem-and-classical-stokes-examples`:
  `ex-the-closed-unit-box-is-an-elementary-solid-region` D=C
  `{ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes,
  ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes,
  ex-the-divergence-theorem-on-the-closed-unit-box}`;
  `ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation`
  has D `{ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin,
  ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field}`
  and C equal to D plus
  `fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface`;
  `ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin`
  D=C `{fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface}`;
  `ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin`
  D=C `{fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface}`;
  `ex-the-mobius-band-presented-by-two-regular-patches` D=C
  `{fs-a-finite-patch-presentation-can-always-be-oriented-compatibly}`.
* `the-exponential-function-examples`: `ex-flat-exponential-function` D=C
  `{cex-smooth-function-not-equal-to-its-maclaurin-series,
  ex-smooth-compactly-supported-bump}`.
* `the-gauge-integral-and-cousins-lemma-examples`:
  `ex-dirichlet-function-is-henstock-kurzweil-integrable` D=C
  `{fs-every-henstock-kurzweil-integrable-function-is-a-derivative,
  fs-henstock-kurzweil-integrable-implies-riemann-integrable}`;
  `ex-unbounded-derivative-evaluated-by-henstock-kurzweil` D=C
  `{cex-henstock-kurzweil-integrability-is-not-absolute,
  fs-every-derivative-is-riemann-integrable,
  fs-henstock-kurzweil-integrable-functions-are-bounded}`.
* `the-inverse-function-theorem-completed-examples`:
  `cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism` D=C
  `{fs-a-c-one-bijection-has-a-c-one-inverse,
  fs-an-open-c-one-map-has-invertible-derivative}`;
  `cex-zero-derivative-on-a-disconnected-open-set-without-constancy` D=C
  `{fs-zero-derivative-on-an-open-set-forces-constancy}`.
* `the-real-gamma-and-beta-functions-examples`:
  `ex-positive-non-log-convex-solution-of-gamma-functional-equation` D=C
  `{fs-the-functional-equation-determines-gamma}`.
* `the-riemann-integral-examples`:
  `ex-thomae-is-riemann-integrable-with-integral-zero` D=C
  `{cex-nonnegative-integrable-with-zero-integral-need-not-vanish}`;
  `cex-dirichlet-is-not-riemann-integrable` D=C
  `{cex-riemann-sums-along-one-sequence-of-tagged-partitions-do-not-suffice}`.
* `the-riemann-integral-in-rn-and-jordan-content-examples`:
  `ex-unit-box-volume-and-integral` D=C
  `{cex-rational-points-in-unit-square-have-no-jordan-content}`;
  `cex-compact-set-without-jordan-content` D=C
  `{cex-bounded-open-set-with-nonnull-boundary,
  ex-cantor-slab-has-content-zero}`.
* `trigonometric-and-oscillatory-examples-in-one-variable-examples`:
  `ex-x-squared-sine-of-one-over-x-squared` D=C
  `{fs-a-differentiable-function-has-a-continuous-derivative}`;
  `ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence` D=C
  `{fs-a-pointwise-bounded-sequence-of-continuous-functions-has-a-uniformly-convergent-subsequence}`;
  `lem-topologists-sine-curve-is-connected` D=C
  `{cex-topologists-sine-curve-connected-not-path-connected}`;
  `ex-sine-period-arc-length-as-a-complete-elliptic-integral` D=C
  `{rem-sine-period-arc-length-integrand-is-nonelementary}`.
* `trigonometric-and-oscillatory-examples-in-several-variables-examples`:
  `cex-circular-curve-defeats-vector-valued-mean-value-equality` D=C
  `{fs-the-mean-value-equality-holds-for-vector-valued-maps}`.
* `uniform-convergence-of-functions-examples`:
  `cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly` D=C
  `{cex-dini-needs-a-continuous-limit}`.
* `volumes-of-elementary-solids-and-solids-of-revolution-examples`:
  `cex-compact-solid-without-jordan-volume` D=C
  `{fs-every-compact-solid-has-a-volume}`.

After these rewrites, every Real Analysis B item is a dependency leaf.  This
ledger is distinct from the six-item missing-page ledger in §9.1; the latter
also records consumers outside the destination B page.

### 9.5 Forward order and load-bearing body links

Twenty-five declared same-page forward edges need Phase-3 treatment.  Move
nonlogical commentary to Remarks or after its target for the exact seven edges:
`rem-where-the-archimedean-hypothesis-is-needed ->
fs-nested-intervals-implies-lub`, the same remark `->
fs-cauchy-complete-implies-lub`, `rem-classical-oscillator-is-sine-of-one-over-x
-> ex-distance-to-the-integers`, `rem-sequence-conventions ->
fs-bounded-implies-convergent`, `rem-strength-order-of-the-nonnegative-tests ->
fs-universal-comparison-series`, `rem-sup-conventions ->
fs-every-set-has-sup`, and `rem-r-native-topology-scope ->
fs-closed-bounded-compact-without-completeness`.

The exact eighteen forward `justified_by` edges are:
`def-cantor-function -> thm-cantor-function-properties`;
`def-formal-laurent-series -> lem-laurent-series-ring`, `->
thm-laurent-series-field`, and `-> thm-laurent-ordered-field`;
`def-support-and-compactly-supported-riemann-integral-in-rn ->
lem-compactly-supported-riemann-integral-is-well-defined`;
`def-function-limit -> lem-function-limit-unique`;
`def-scalar-and-vector-line-integrals-along-piecewise-c1-paths ->
lem-line-integrals-are-independent-of-the-piecewise-c1-partition`;
`def-integer-power -> lem-power-laws`;
`def-rational-power -> lem-rational-power-well-defined`;
`def-sine-and-cosine-by-power-series ->
lem-sine-and-cosine-series-converge-everywhere`;
`def-infimum -> lem-sup-unique`;
`def-complex-exponential ->
lem-complex-exponential-series-converges-everywhere`;
`def-real-exponential-function-and-e ->
lem-exponential-series-has-infinite-radius`;
`def-henstock-kurzweil-integral-on-a-compact-interval ->
prop-henstock-kurzweil-integral-is-unique`;
`def-real-gamma-function-by-the-euler-integral ->
thm-real-gamma-euler-integral-convergence`;
`def-real-beta-integral -> thm-real-beta-integral-convergence`;
`def-riemann-integral-over-a-jordan-set ->
lem-jordan-set-integral-well-defined`; and
`def-classical-weierstrass-function ->
thm-classical-weierstrass-series-converges-uniformly`.  Remove a forward
justification when it is merely commentary.  Where convergence, uniqueness or
well-definedness is genuinely constitutive, put a raw lemma first, stated
without the not-yet-defined object, then the definition.  On
`formal-laurent-series-field`, state and prove the coefficient operations and
order facts before the final packaging definition, or remove its three
nonlogical justification edges.  `def-infimum -> lem-sup-unique` is not a valid
justification: define infimum by reflection from the already-defined supremum,
then prove uniqueness.

`depcheck --json` reports 93 Real Analysis `cited-not-in-deps` warnings.  The
following is the exact disposition ledger.

**Add an earlier-A dependency (29):**
`cex-dirichlet-is-nowhere-continuous -> thm-sequential-criterion-for-continuity`;
`cex-psi-of-one-over-x-has-no-limit-at-zero -> lem-limit-implies-local-boundedness`;
`cex-the-one-norm-comes-from-no-inner-product -> rem-rn-conventions-and-scope`;
`cor-bolzano-weierstrass-in-rn -> rem-compactness-choice-ledger-metric`;
`cor-countably-many-discontinuities-integrable -> thm-cantor-set-properties`;
`ex-cauchy-complete-not-complete-field -> fs-nested-intervals-implies-lub`;
`fs-continuity-implies-uniform-continuity -> thm-heine-cantor-metric`;
`fs-heine-borel-holds-in-every-normed-space -> thm-all-norms-on-rn-are-equivalent`;
`lem-cauchy-complete-and-archimedean-imply-mct -> thm-laurent-cauchy-complete`;
`lem-cauchy-complete-and-archimedean-imply-mct -> lem-laurent-non-archimedean`;
`lem-real-and-metric-notions-agree -> thm-continuous-image-of-a-compact-space-is-compact`;
`lem-real-and-metric-notions-agree -> thm-extreme-value-metric`;
`lem-real-and-metric-notions-agree -> thm-heine-cantor-metric`;
`lem-real-and-metric-notions-agree -> thm-heine-borel-characterisation-r`;
`lem-real-and-metric-notions-agree -> thm-compact-iff-sequentially-compact-r`;
`thm-algebra-of-function-limits -> thm-algebra-of-limits`;
`thm-arzela-ascoli-for-real-ck -> def-countable-choice`;
`thm-arzela-ascoli-for-real-ck -> def-dependent-choice`;
`thm-cantor-function-properties -> def-monotone-sequence`;
`thm-continuity-preimage-characterisation -> def-isometry-and-metric-embedding`;
`thm-continuous-image-of-a-compact-set-r -> thm-continuous-image-of-a-compact-space-is-compact`;
`thm-continuous-inverse -> thm-connected-subsets-of-r-are-intervals`;
`thm-extreme-value-r -> thm-extreme-value-metric`;
`thm-heine-cantor-r -> thm-heine-cantor-metric`;
`thm-monotone-implies-integrable -> thm-monotone-with-prescribed-discontinuity-set`;
`thm-monotonicity-of-the-integral -> fs-nonnegative-integrable-with-zero-integral-vanishes`;
`thm-nonnegative-continuous-with-zero-integral-vanishes -> fs-nonnegative-integrable-with-zero-integral-vanishes`;
`thm-perfect-set-uncountable-r -> def-dependent-choice`;
`thm-sequential-criterion-for-function-limits -> lem-sequential-characterisation-of-closure-r`.
For the B-homed consumers in this list, ensure the companion A reaches the
supplier page.  Separately, remove or inline the one B-consumer/external-A link
`cex-dirichlet-is-nowhere-continuous ->
lem-sequential-characterisation-of-closure-r`: the companion A does not require
`topology-of-r`, and this elementary closure witness needs no new page edge.

**Add a same-page earlier dependency (18):**
`cor-cauchy-product-absolute -> thm-dirichlet-rearrangement`;
`cor-cesaro-matrix-is-regular -> thm-cesaro-mean-theorem`;
`cor-continuous-extension-from-a-dense-subset-r -> cor-boundedness-theorem-r`;
`cor-no-function-is-continuous-exactly-on-q -> thm-dirichlet-and-thomae-continuity-sets`;
`cor-stolz-cesaro-zero-over-zero -> thm-stolz-cesaro`;
`fs-continuity-implies-uniform-continuity -> thm-compactness-is-necessary-for-evt-and-uniform-continuity`;
`fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set -> thm-lebesgue-criterion`;
`fs-limit-equals-value -> thm-composition-of-function-limits`;
`lem-bw-implies-cauchy-complete -> lem-bw-implies-archimedean`;
`lem-function-limit-preserves-order -> lem-limit-is-local`;
`lem-mct-implies-archimedean -> lem-cauchy-complete-and-archimedean-imply-mct`;
`lem-mct-implies-lub -> lem-mct-implies-archimedean`;
`lem-real-and-metric-notions-agree -> thm-continuous-image-of-a-compact-set-r`;
`lem-real-and-metric-notions-agree -> thm-extreme-value-r`;
`thm-algebra-of-function-limits -> thm-sequential-criterion-for-function-limits`;
`thm-compact-null-is-content-zero -> lem-nondegenerate-interval-is-not-null`;
`thm-mean-value-inequality -> thm-norm-inequality-for-the-vector-valued-integral`;
`thm-riemann-series-theorem -> thm-dirichlet-rearrangement`.

**Do not add a forward dependency (40):** move the cited contrast/roadmap to
Remarks, remove it, or move the actual supplier before the consumer:
`cor-boundedness-theorem-r -> thm-compactness-is-necessary-for-evt-and-uniform-continuity`;
`cor-unconditional-iff-absolute-in-r -> rem-rearrangement-in-higher-dimensions`;
`lem-additive-is-q-linear -> fs-additive-implies-linear`;
`lem-bw-implies-archimedean -> fs-nested-intervals-implies-lub`;
`lem-bw-implies-archimedean -> fs-cauchy-complete-implies-lub`;
`lem-cauchy-complete-and-archimedean-imply-mct -> lem-mct-implies-archimedean`;
`lem-content-zero-implies-null -> thm-compact-null-is-content-zero`;
`lem-finite-interval-cover-total-length -> lem-nondegenerate-interval-is-not-null`;
`lem-finite-interval-cover-total-length -> thm-cantor-set-properties`;
`lem-finite-interval-cover-total-length -> thm-fat-cantor-set-has-positive-measure`;
`lem-finite-interval-cover-total-length -> fs-null-implies-content-zero`;
`lem-function-limit-preserves-order -> fs-function-limit-preserves-strict-inequality`;
`lem-function-limit-unique -> fs-limit-unique-at-every-point-of-the-domain`;
`lem-limit-implies-local-boundedness -> fs-limit-exists-implies-bounded-on-the-domain`;
`lem-mct-implies-archimedean -> rem-where-the-archimedean-hypothesis-is-needed`;
`lem-nth-term-test -> fs-nth-term-test-converse`;
`lem-real-and-metric-notions-agree -> thm-heine-cantor-r`;
`lem-sign-preservation-near-a-limit -> thm-algebra-of-function-limits`;
`thm-abel-dini -> fs-universal-comparison-series`;
`thm-algebra-of-function-limits -> rem-heine-criterion-choice-cost`;
`thm-cesaro-mean-theorem -> fs-cesaro-converse`;
`thm-completeness-equivalences -> fs-nested-intervals-implies-lub`;
`thm-completeness-equivalences -> fs-cauchy-complete-implies-lub`;
`thm-composition-of-function-limits -> fs-naive-composition-of-limits`;
`thm-continuity-iff-oscillation-zero -> lem-oscillation-superlevel-sets-are-closed`;
`thm-continuity-iff-oscillation-zero -> thm-discontinuity-set-is-f-sigma`;
`thm-continuity-preimage-characterisation -> lem-real-and-metric-notions-agree`;
`thm-continuous-image-of-a-compact-set-r -> lem-real-and-metric-notions-agree`;
`thm-dirichlet-test -> thm-alternating-series-test`;
`thm-double-series-fubini -> fs-iterated-double-sums-always-agree`;
`thm-extreme-value-r -> lem-real-and-metric-notions-agree`;
`thm-fermat-interior-extremum -> fs-vanishing-derivative-forbids-strict-increase`;
`thm-grouping-of-series -> fs-grouping-can-be-undone`;
`thm-infinite-product-criterion -> rem-sums-proved-to-exist-but-not-evaluated`;
`thm-mean-value-inequality -> cor-vector-valued-ftc-and-lipschitz-bound`;
`thm-mertens -> cor-cauchy-product-absolute`;
`thm-mertens -> fs-cauchy-product-of-convergent-series-converges`;
`thm-monotonicity-of-the-integral -> thm-nonnegative-continuous-with-zero-integral-vanishes`;
`thm-sequential-criterion-for-function-limits -> rem-heine-criterion-choice-cost`;
`thm-sequential-criterion-for-function-limits -> cor-sequential-criterion-for-nonexistence`.

**Remove/inline four B targets:**
`cex-indicator-of-a-fat-cantor-set-is-not-integrable ->
ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero`;
`cex-limit-differs-from-the-value -> cex-composition-of-limits-fails`;
`cex-nested-open-intervals-empty -> ex-nested-intervals-single-point`;
`thm-intermediate-value -> cex-evt-and-ivt-fail-over-a-non-complete-field`.
Also remove or move to a non-load-bearing Remarks paragraph the sole later-page
edge `rem-riemann-stieltjes-conventions-and-scope -> def-real-power`.

### 9.6 Membership and plan drift

The exact 16 duplicate memberships must be removed from the A copy, preserving
the B home.  Seven are duplicated between `approximation-and-compactness-in-ck`
and its B:
`cex-rudin-bounded-spikes-are-not-equicontinuous`,
`cex-constant-functions-are-equicontinuous-not-pointwise-bounded`,
`cex-noncompact-domain-breaks-arzela-ascoli`,
`ex-bernstein-polynomials-of-the-square-function`,
`ex-distance-functions-form-a-compact-family-in-c01`,
`cex-even-polynomial-algebra-is-not-dense`, and
`cex-separating-algebra-without-constants-is-not-dense`.  Nine are duplicated
between `mixed-partials-taylor-and-extrema` and its B:
`cex-peano-unequal-mixed-partials`,
`cex-peano-surface-linewise-minimum-without-an-extremum`,
`cex-smooth-linewise-minimum-without-an-extremum`,
`cex-unique-critical-point-is-a-nonglobal-strict-local-minimum`,
`ex-monkey-saddle`, `cex-zero-hessian-does-not-classify-a-critical-point`,
`ex-second-order-multivariable-taylor-polynomial-computed`,
`ex-lagrange-multiplier-on-an-affine-graph`, and
`cex-lagrange-multiplier-rule-needs-a-regular-constraint`.

Disk-but-not-plan memberships, excluding those duplicate A copies, are:
`countability-and-uncountability`:
`lem-nat-order-is-membership`, `lem-pigeonhole`, `cor-interval-uncountable`;
`power-series-and-real-analytic-functions`:
`def-taylor-and-maclaurin-series`,
`thm-taylor-series-representation-by-remainder`;
`the-exponential-function-examples`:
`cex-smooth-function-not-equal-to-its-maclaurin-series`;
`the-logarithm-and-general-powers`:
`thm-euler-mascheroni-constant-and-harmonic-asymptotic`;
`sine-cosine-and-the-definition-of-pi`:
`def-radian-angle-by-unit-circle-arc-length`,
`thm-analytic-sine-cosine-agree-with-right-triangle-ratios`;
and `further-trigonometric-identities-and-inverses`:
`thm-standard-maclaurin-expansions`.  Add these exact memberships to the plan.
The sole plan-but-not-disk id is the nonexistent
`ex-conway-base-13-function` on
`monotone-functions-and-discontinuities-examples`; remove it from the plan and
do not create it without a full authoritative proof source.

Nineteen page titles differ between plan and disk.  At plan reconciliation copy
the published titles exactly for:
`approximation-and-compactness-in-ck` and its B;
`cantor-set-baire-and-measure-zero` and its B;
`countability-and-uncountability`; `formal-laurent-series-field`;
`mixed-partials-taylor-and-extrema` and its B;
`monotone-sequences-and-cauchy-completeness` and its B;
`picard-lindelof-and-first-order-odes` and its B;
`power-series-and-real-analytic-functions-examples`;
`sine-cosine-and-the-definition-of-pi-examples`;
`the-logarithm-and-general-powers-examples`;
`the-total-derivative` and its B; and `topology-of-r` and its B.
There are also 29 stale plan order values and, among plan-listed published
items, 185 stale titles, 748 stale `deps` arrays and 17 stale `justified_by`
arrays (zero kind drifts).  The exact deterministic amendment is to resync each
corresponding page order and item field from the final Phase-3 published files,
after applying §§9.1--9.5; copying the pre-repair dependency arrays would
reintroduce the audited defects.

### 9.7 Cross-category ownership seams

The binding cross-category amendments are:

1. **Foundations / Set Theory.** Apply the DC rehome and typing correction in
   §9.2.  SET-6 must require `countability-and-uncountability`, not metric
   compactness.  Move the Foundations B prerequisite listed in §9.3.  The
   repaired Foundations continuum interface also adds the A item
   `thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero` before its B,
   moves `cantor-set-baire-and-measure-zero` to that A's prerequisites, and
   repoints Topology's `ex-cardinal-functions-of-the-lower-limit-line` away from
   the B example.  No Real Analysis file is edited for that ownership repair.
2. **Measure Theory.** The HK/Lebesgue comparison remains MT-19-owned.  Repair
   `rem-integral-conventions-and-scope` through the two proved MT A suppliers in
   §9.2 and move the product-measure B prerequisite in §9.3 to its A.  Measure
   Theory's published DC consumers retain the rehomed stable id.
3. **Functional Analysis / PDE.** Add
   `the-divergence-theorem-and-classical-stokes` to the Functional Analysis A
   page `distributions-test-functions-and-differentiation`; its B item
   `ex-distributional-laplacian-of-the-newtonian-kernel` uses
   `cor-greens-second-identity-for-glued-elementary-solid-regions` only through
   that A.  Existing PDE A seams remain:
   `partial-differential-equations-and-characteristics` consumes
   `picard-lindelof-and-first-order-odes`, the quasilinear interface consumes
   `inverse-and-implicit-function-theorems`, and the harmonic interface consumes
   `the-divergence-theorem-and-classical-stokes`.  Do not duplicate Euclidean
   IFT, ODE, or Green identities in FA/PDE.
4. **Differential Geometry.** Preserve the already-applied ownership split in
   §5.6: DG-4 consumes RC-1/RC-2, DG-8 consumes RC-10, and DG-14 consumes
   RC-8/RC-9.  Manifold forms and general Stokes remain DG-owned.
5. **Topology and Complex Analysis.** Apply every B-to-A move in §9.3.  The
   topology-owned cardinal-continuum cutover in item 1 is the only new supplier
   interface; all cited Real Analysis suppliers are existing published A items.

### 9.8 Sources, blockers, and validation contract

No unfamiliar new theorem was introduced by this audit.  The mathematical
proof inventory remains backed by the full texts and precise section locators
in §7.  The DC typing and rehome are inherited from the authoritative full-text
audit in `plan-set-theory-completion-track.md` §§7.2--7.3; its Morillon locator
is the author PDF *The power of DMC*, p. 6.  No affected claim lacks
authoritative full text, so there is no source blocker.  The nonexistent Conway
base-13 plan row remains blocked and is removed rather than guessed.

The Phase-3 acceptance check is exact: all three B files exist; every B page
requires only its A; every B-homed item has reverse-dependency outdegree zero;
the 16 duplicate memberships and 93 body-link warnings above are gone; all
declared and justification edges point strictly backward to published A items;
`extcheck` finds no Real Analysis consequence of a recorded/not-proved item;
and `validate-plan`, `depcheck`, `fwdcheck`, `extcheck`, `rendercheck`, and
`git diff --check` pass in scope.  The workflow remains paused throughout.

## Representation theory of groups

Binding source: `research/plan-representation-theory-groups-track.md` §15.
The audit covers all 30 pairs, the eight published RG pages, 73 published
items, and their 775-item transitive file-header closure. Every closure member
is published and proved; none reaches Recorded/Not-Proved-Here. Published files
remain read-only.

### Phase-2 supplier: Galois descent for simple finite-group modules

Add the A/B pair
`galois-orbits-and-descent-of-simple-finite-group-modules` /
`galois-orbits-and-descent-of-simple-finite-group-modules-examples`
immediately after RG-2 and before the published RG-3 pair. The B page requires
only its A and is a dependency leaf.

All five A items are Phase-2 eligible. Their exact roles are:

| planned A item | direct published consumers |
|---|---|
| `def-semilinear-galois-action-on-a-scalar-extended-algebra` | none; supplies the classification theorem below |
| `lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension` | none; supplies the classification theorem below |
| `lem-galois-orbit-sums-of-split-central-idempotents-descend` | none; supplies the classification theorem below |
| `lem-a-descended-galois-orbit-idempotent-is-primitive` | none; supplies the classification theorem below |
| `thm-galois-orbits-classify-simple-modules-after-splitting-base-change` | `def-schur-index-of-an-irreducible-character`; `thm-schur-index-as-minimal-realization-multiplicity` |

For each of the five A items, the complete published impact, including the two
direct consumers where applicable, is exactly:

- on `schur-indices-and-fields-of-definition`:
  `def-schur-index-of-an-irreducible-character`,
  `thm-schur-index-as-minimal-realization-multiplicity`,
  `lem-schur-index-is-independent-of-the-chosen-splitting-field`,
  `thm-character-of-an-irreducible-over-a-nonsplitting-field`,
  `cor-schur-index-divides-the-representation-degree`, and
  `thm-schur-index-equals-division-algebra-index`;
- on `schur-indices-and-fields-of-definition-examples`:
  `ex-galois-conjugate-characters-of-c3`,
  `ex-quaternion-character-has-schur-index-two`, and
  `ex-trivial-character-has-schur-index-one`.

The B items
`ex-galois-descent-for-the-two-nontrivial-characters-of-c-three`,
`ex-the-rational-simple-block-of-the-quaternion-group`, and
`cex-a-galois-stable-character-need-not-have-schur-index-one` each have zero
direct and zero transitive published consumers and are not Phase-2 eligible.

### Exhaustive zero-impact declaration

All 487 RG-owned unbuilt items on RG-5--RG-30 have, individually, zero direct and zero
transitive published impact and are not Phase-2 eligible. Counts by pair are:
RG-5 17, RG-6 13, RG-7 32, RG-8 16, RG-9 18, RG-10 21, RG-11 25,
RG-12 22, RG-13 27, RG-14 28, RG-15 10, RG-16 16, RG-17 14,
RG-18 16, RG-19 19, RG-20 21, RG-21 18, RG-22 15, RG-23 16,
RG-24 14, RG-25 21, RG-26 15, RG-27 18, RG-28 18, RG-29 18, and
RG-30 19. The two revoked RG-4 ids are excluded. Five generic measurable-field
and direct-integral rows were transferred from RG-26 to the FA-owned pair below;
they are not RG inventory. The RG scaffold contains 549 distinct item ids in
total.

The additional FA-owned planned pair
`measurable-hilbert-fields-and-direct-integral-operators` and its
`-examples` leaf directly supplies only planned RG-24 and RG-26. It has zero
direct and transitive published impact and is not Phase-2 eligible. RG-24,
RG-26, and consequently RG-30 remain build-held until it is proved.

### Phase-3 published repairs using existing suppliers

- Rehome published `lem-base-change-of-intertwiner-spaces` from RG-3 to RG-2
  before `cor-cyclotomic-field-splits-a-finite-group`. Its direct published
  consumers are that corollary,
  `thm-scalar-extension-of-an-irreducible-finite-group-representation`,
  `thm-absolute-irreducibility-via-the-endomorphism-division-algebra`,
  `lem-schur-index-is-independent-of-the-chosen-splitting-field`, and
  `thm-schur-index-equals-division-algebra-index`. Its additional transitive
  impact is `lem-character-field-is-the-stabilizer-fixed-field`, the two
  Phase-2 direct consumers above,
  `thm-character-of-an-irreducible-over-a-nonsplitting-field`,
  `cor-schur-index-divides-the-representation-degree`, and the three published
  RG-3 B examples listed above. This is an existing-item reorder, not Phase 2.
- Remove `the-weyl-kac-character-formula-examples` from published
  `artin-induction-and-rational-characters` with no replacement; its nine
  published items have zero Lie-item dependencies.
- Replace the published RG-1 B-page forward Schur-index appeal with the direct
  rational-matrix contradiction, and remove the unsupported “equivalently” in
  `def-rational-character-ring` unless complexification injectivity is proved
  locally.
- Replace the first three published preceding-B page edges by the exact A-page
  closures in the source audit and leave every B page requiring only its A.
- Reconcile the seven exact header/plan drift rows in source §15.1 after these
  repairs; do not copy stale plan dependencies back into published files.

### Cross-category reconciliation

- Group Theory owns modular systems, relative projectivity, vertices/sources,
  Brauer characters, decomposition maps/matrices, and block idempotents. Its
  Phase-2 `modular-traces-and-brauer-character-independence` A supplier must
  precede `brauer-characters-and-decomposition-matrices`; RG-14--RG-17 do not
  mint competing definitions or independence results.
- Lie supplies RG-28/RG-30 only through published
  `harish-chandra-isomorphism-casimir-and-central-characters` and
  `verma-modules-and-shapovalov-forms` A pages. RG consumes no RL-15 page.
- Fourier uses the repaired RG-18 A → FR-15--FR-17 seam. Obsolete relative
  `FR-14`/`FR-15`/`FR-n` placeholders are not dependencies.
- RG Haar theory consumes the proved AC-qualified `thm-tychonoff` through
  Topology A `compactness`, plus published Measure Theory and paracompactness A
  suppliers. No recorded choice-strength remark is load-bearing.
- Differential Geometry's compact-Lie Peter--Weyl page is an agreement/
  specialization citation only; RG-22 owns the general compact-Hausdorff
  theorem.

The full-text evidence and locators are recorded in source §15.7. No source
blocker remains. Scoped diff checks, ID uniqueness, companion-ID alignment,
and the global plan validator passed at landing.

## Scheme theory

Binding source: `research/plan-algebraic-geometry-track.md`, “Binding Scheme
Theory audit (2026-09-08).” The audit covers AV-9--AV-26, including ten
published AV-9--AV-13 pages, 209 published items, and their 869-item closure.
The closure has zero recorded, `proved_here: false`, or `not-supplied` items.

There is no Scheme-owned Phase-2 root. The sole published-to-draft edge is:

| draft supplier | direct published Scheme consumer | complete Scheme impact |
|---|---|---|
| AG AV-1 `def-affine-algebraic-set` | `def-classical-algebraic-prevariety-regular-maps-and-varieties` | that definition and `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes` |

Globally, `def-affine-algebraic-set` has four direct published consumers and is
inside the repaired AV-1 pair's exact 105-item total published impact. The
AV-1 pair as a whole has 17 distinct direct consumers. All are enumerated under
Algebraic Geometry above, including the two Scheme items. The
supplier is a draft item on an already published AG page, so the owner-defined
Phase 2 cannot create it as a new pair. It remains a Phase-3 repair gate for
the two Scheme consumers.

### Planned inventory and exact zero-impact declaration

After binding deletions, additions, and relocations, AV-14--AV-26 contains
exactly 534 planned IDs: 403 A items and 131 B leaves. Every one individually
has zero direct and zero transitive published consumers and is not Phase-2
eligible. This includes the six added proof suppliers:

- `def-quasi-finite-at-point-and-morphism`;
- `lem-quasi-finite-finite-fibre-characterization`;
- `lem-algebraic-zariski-main-quasi-finite-localization`;
- `thm-zariski-main-quasi-finite-factorization`;
- `lem-generic-freeness-finite-type-domain-algebra-module`;
- `thm-proper-flat-coherent-cohomology-perfect-complex`.

Delete the duplicate planned `def-affine-morphism-schemes`. Its existing
published AV-13 home directly supplies planned
`lem-affine-morphism-local-on-target` and
`lem-base-change-affine-morphisms`; those uses have zero published impact.
The unsupported zero-impact fpqc-properness, AV-23 preview, embedded-resolution,
and canonical-map/hyperelliptic-embedding items listed in the binding source
are deleted rather than treated as suppliers.

### Phase-3 published repair impact

- Replace all five downstream published B-page prerequisites with their A-page
  suppliers. Every published B page then requires only its A.
- Remove the stalk definition/lemma cycle, reorder the two AV-10 A
  definitions, and apply the binding source's 16 exact plan/header deltas.
- The five B suppliers and their exact current impact are:
  `ex-sheaf-locally-constant-functions` ->
  `cex-constant-presheaf-not-sheaf-disconnected-open` only;
  `ex-direct-image-open-immersion` ->
  `cex-extension-by-zero-differs-direct-image` directly and
  `cex-presheaf-cokernel-needs-sheafification` transitively;
  `cex-extension-by-zero-differs-direct-image` -> the latter cokernel
  counterexample only; `ex-spectrum-field-one-point` ->
  `ex-dual-numbers-one-point-nonreduced` and
  `cex-scheme-not-determined-by-underlying-space`; and
  `ex-dual-numbers-one-point-nonreduced` -> the underlying-space
  counterexample only. Phase 3 replaces or deletes all six B-item edges.
- Replace AV-12's direct use of Complex Analysis
  `def-noetherian-ring-and-module` by published Abstract Algebra
  `def-noetherian-ring` on `chain-conditions-and-semisimple-modules`, and drop
  `holomorphic-inverse-and-weierstrass-preparation` from AV-12. The bad
  supplier's Scheme impact is the one direct consumer and nothing transitive.

### Cross-category gates

Scheme uses the A-only ownership spine in the binding source. In particular,
CA-19 `normalization-finiteness-for-affine-domains` is a mandatory planned
gate before AV-23, while AV-17 proves generic freeness locally because no
current CA supplier does. Complex Analysis retains its two planned AV-21
consumers but is not a Noetherian supplier. Differential Geometry owns the
removed fine-sheaf/de Rham comparison material. Relevant Homological Algebra
A pages supply injective-resolution and derived-functor interfaces. These are
planned-only seams with zero published impact except for the AG AV-1 and
published Noetherian repairs above.

Full Stacks Project proof locators are recorded in the binding source. Scoped
precheck, collision, closure, diff, and global-plan validation all passed.

## Topology

Binding source: `research/plan-topology-track.md`, “Binding full-category
Topology audit (2026-09-08).” The census is 60 published pages, 30 A/B pairs,
and 922 distinct items. Five Ascoli items have duplicate A/B memberships.
Topology has zero Phase-2 roots; all published defects below are Phase 3.

### Recorded-material cutover and local Phase-3 suppliers

Delete eight deferred-catalogue `external_refs` edges from these seven items:
`thm-tychonoff`, `def-baire-space`,
`thm-baire-category-locally-compact-hausdorff`,
`rem-compactness-conventions-and-choice-ledger`,
`rem-separation-axiom-conventions`, `thm-urysohn-lemma`, and
`rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem`. Delete any
independence, equivalence, lower-bound, or optimal-choice assertion whose only
witness is `rem-schechter-kelley-tychonoff`,
`rem-baire-category-choice-strength`, or
`rem-urysohn-lemma-not-a-zf-theorem`. The internal Tychonoff, Baire, and
Urysohn proofs remain; they may state only the hypotheses used by their written
proofs.

Replace two proof-critical recorded metrization remarks by three proved items
on the already-published A page `metrization-theorems`:

| Phase-3 local A supplier | direct published consumers | complete published impact |
|---|---|---|
| `lem-regular-sigma-locally-finite-basis-gives-a-uniform-coordinate-embedding` | `thm-nagata-smirnov-metrization` | on `metrization-theorems`: `thm-nagata-smirnov-metrization`, `thm-bing-metrization`, `cor-urysohn-metrization`, `thm-smirnov-local-metrization`; on `smooth-manifolds-and-smooth-maps`: `rem-manifold-conventions-and-the-role-of-second-countability`, `thm-topological-manifolds-are-metrizable-and-paracompact` |
| `lem-stone-countably-discrete-small-diameter-closed-cover` | none; directly supplies the next new lemma | `thm-bing-metrization` |
| `lem-metric-spaces-have-sigma-discrete-bases` | `thm-bing-metrization` | `thm-bing-metrization` |

These are additions to a published page and therefore are Phase 3, not new
Phase-2 pairs. After the cutover, no Topology proof may directly or
transitively consume recorded-not-proved material.

### Exact published B-supplier repair map

There are 27 B-homed suppliers and 34 direct published edges. All consumers
are on the same B page; outside-page impact is zero. Phase 3 removes each edge
by a direct computation from A-page facts or a self-contained local
construction:

- `ex-hawaiian-earring-retracts-onto-each-circle` ->
  `fs-every-compact-path-connected-planar-set-has-a-universal-cover`.
- `ex-compactness-in-the-standard-topologies` ->
  `ex-one-point-compactifications-of-the-line-and-of-the-naturals`.
- `ex-discrete-metric-compact-iff-finite` ->
  `cex-bounded-not-totally-bounded`.
- `cex-totally-bounded-not-compact` -> `cex-evt-fails-without-compactness`,
  `cex-heine-cantor-fails-without-compactness`, and
  `cex-open-cover-with-no-lebesgue-number`.
- `fs-the-rational-numbers-form-a-baire-space` ->
  `fs-every-metrizable-space-is-cech-complete`.
- `ex-square-root-is-half-holder` ->
  `cex-uniform-bijection-with-non-uniform-inverse`.
- `ex-cardinal-functions-of-the-lower-limit-line` directly ->
  `cex-lindelofness-is-not-productive-worked` and
  `ex-countability-profile-of-the-lower-limit-plane`; its complete impact also
  includes `cex-separability-is-not-hereditary-worked`.
- `ex-countability-profile-of-the-lower-limit-plane` ->
  `cex-lindelofness-is-not-productive-worked` and
  `cex-separability-is-not-hereditary-worked`.
- `ex-trivial-coverings-and-discrete-fibre-products` ->
  `ex-pullback-over-an-evenly-covered-open-set-is-trivial`.
- `ex-real-line-mod-integer-translations-is-a-covering` directly ->
  `ex-power-maps-on-real-line-mod-integers-are-finite-sheeted-coverings` and
  `ex-the-unit-loop-in-real-line-mod-integers-is-essential`; its complete
  impact also includes `ex-the-hawaiian-earring-has-no-universal-cover`.
- `ex-the-unit-loop-in-real-line-mod-integers-is-essential` ->
  `ex-the-hawaiian-earring-has-no-universal-cover`.
- `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` ->
  `ex-dini-on-the-unit-interval`.
- `ex-intervals-and-euclidean-spaces-are-contractible` ->
  `ex-a-point-and-r-are-homotopy-equivalent-not-homeomorphic`.
- `ex-discrete-metric` -> `cex-sphere-is-not-the-boundary-of-the-ball`.
- `ex-bounded-remetrisation-of-r` -> `cex-boundedness-is-not-topological`.
- `ex-finite-subset-net-for-unordered-real-summation` ->
  `thm-unordered-summability-of-real-families`.
- `ex-omega-one-is-not-paracompact` ->
  `cex-paracompactness-is-not-open-hereditary`.
- `ex-sierpinski-space-is-t0-normal-and-not-regular` ->
  `ex-the-particular-point-topology-in-the-separation-hierarchy`.
- `ex-rn-as-a-product` directly -> `cex-projection-is-not-closed`; its
  complete impact also includes `cex-quotient-map-neither-open-nor-closed`.
- `cex-projection-is-not-closed` ->
  `cex-quotient-map-neither-open-nor-closed`.
- `ex-circle-as-r-mod-z` -> `ex-cylinder-and-mobius-band-as-quotients` and
  `ex-torus-as-a-quotient-of-the-square`.
- `ex-torus-as-a-quotient-of-the-square` ->
  `ex-cylinder-and-mobius-band-as-quotients`.
- `ex-sorgenfrey-plane` -> `cex-antidiagonal-of-the-sorgenfrey-plane`.
- `ex-fundamental-group-of-the-punctured-plane` ->
  `ex-fundamental-groups-of-once-and-twice-punctured-two-sphere`.
- `ex-cofinite-topology` -> `cex-sequential-limits-not-unique`.
- `ex-cocountable-topology-on-r` ->
  `cex-sequential-closure-strictly-inside-closure` and
  `cex-sequentially-continuous-not-continuous`.
- `ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic` ->
  `fs-a-compatible-uniformity-is-unique`.

### Planned compact-surface pair: exhaustive zero impact

The planned pair `classification-of-compact-connected-surfaces` /
`classification-of-compact-connected-surfaces-examples` contains eight A
items and six B leaves, all listed in proof order in the binding source. Each
item individually has zero direct and zero transitive published consumers and
is not Phase-2 eligible. Its only consumers are planned Complex Analysis items
`thm-topological-classification-compact-riemann-surfaces`,
`def-genus-and-euler-characteristic-compact-riemann-surface`, and
`thm-symplectic-homology-basis-compact-riemann-surface`. It is build-held until
the Algebraic Topology subdivision and orientation/duality A suppliers are
complete and published.

### Other Phase-3 repairs and cross-category effects

Move the seven extra published B-page prerequisites enumerated in the binding
source to their A companions. Remove five Ascoli duplicate memberships,
repair 14 local forward structural edges and ten body-link mismatches, and
resync metadata only after those changes.

Owner-side page repairs are: Category Theory moves `uniform-spaces` from the
abelian-category B to A page; Differential Geometry moves
`the-seifert-van-kampen-theorem` from the Frobenius B to A page; Measure Theory
deletes the unused Stone--Weierstrass B edge; and Group Theory deletes its
fundamental-group B edge and uses the seven exact A requirements in the
binding source. Probability consumes published Topology `def-polish-space`
but owns `def-standard-borel-space`. Foundations owns the DC rehome and the
continuum A supplier; their exact global cones remain recorded above.

Full-text Granath, Bing, and Gallier--Xu locators are recorded in the binding
source. Diff, prose, collision, census, mapping, and global-plan validation
passed. There is no source blocker.
