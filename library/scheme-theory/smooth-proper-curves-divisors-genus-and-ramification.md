---
page: smooth-proper-curves-divisors-genus-and-ramification
title: Smooth Proper Curves Divisors Genus and Ramification
status: draft
requires:
- finite-proper-and-projective-morphisms
- kahler-differentials-conormal-sequences-and-infinitesimal-lifting
- flat-smooth-and-etale-morphisms
- quasi-coherent-and-coherent-sheaves-and-vector-bundles
- proj-projective-schemes-twisting-sheaves-and-ampleness
- cartier-and-weil-divisors-line-bundles-and-picard-groups
- sheaf-cohomology-cech-cohomology-and-comparison
- cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes
- normalization-finiteness-for-affine-domains
items:
- def-algebraic-curve-over-field
- thm-normalization-glues-integral-finite-type-curves
- def-rational-map-integral-schemes
- lem-rational-map-smooth-curve-to-proper-scheme-extends
- thm-curves-function-fields-equivalence
- cor-birational-smooth-proper-curves-isomorphic
- thm-local-ring-smooth-curve-dvr
- def-divisor-smooth-proper-curve
- thm-cartier-weil-divisors-curves-agree
- def-riemann-roch-space-of-divisor
- lem-effective-divisors-sections-mod-scalars
- def-complete-linear-system
- def-base-point-linear-system
- thm-base-point-free-linear-system-morphism
- thm-h0-structure-sheaf-proper-curve
- def-arithmetic-genus-proper-curve
- def-canonical-line-bundle-curve
- lem-rational-differential-divisor-well-defined-class
- thm-nonconstant-morphism-proper-curves-finite-surjective
- def-nonconstant-morphism-curves-degree
- def-ramification-index-curve-map
- lem-curve-different-local-support-and-index-bound
- lem-fibre-degree-sum-ramification-residue
- def-ramification-and-branch-points
- def-different-divisor-curve-map
- lem-torsion-quotient-invertible-sheaves-effective-divisor
- thm-canonical-bundle-ramification-formula
- lem-degree-effective-divisor-nonnegative
- thm-degree-positive-line-bundle-sections-zero-bound
- lem-function-with-poles-defines-map-p1
- def-gonality-curve
- def-geometric-genus-singular-curve
- def-delta-invariant-curve-singularity
- lem-normalization-lowers-arithmetic-genus-delta
- thm-plane-curve-arithmetic-genus
- cor-plane-curve-geometric-genus-delta-correction
- lem-composite-finite-proper-morphism-proper
- lem-projective-line-curve-and-divisor-basics
- lem-projective-line-twisting-sheaf-ample
- lem-two-affine-double-cover-cohomology
---

Smooth proper curves are the objects of this page. A curve over a field
$k$ is a geometrically integral, separated $k$-scheme of finite type whose
underlying topological space has chain dimension one; smoothness and
properness are separate adjectives, never part of the word. The page develops
the geometry that makes such curves comparable. Rational maps of integral
finite-type schemes are introduced as equivalence classes of morphisms on
dense opens, a rational map from a smooth curve into a proper $k$-scheme is
shown to be a morphism, and a dominant morphism of smooth proper curves
induces a finite extension of function fields, so that birational smooth
proper curves are isomorphic. The local ring of a closed point of a smooth
curve is proved to be a discrete valuation ring, which supplies the order of
vanishing used throughout, and the normalization of an integral finite-type
curve is built by gluing the affine integral closures.

Divisors on a smooth proper curve are finite integral combinations of closed
points, and degrees are weighted by residue degrees. The page records that
Cartier and Weil divisors agree on a curve, so that invertible sheaves and
divisors can be used interchangeably, and then studies the space $L(D)$ of
rational functions whose poles are bounded by $D$, the complete linear system
$|D|$ of effective divisors linearly equivalent to $D$, its identification
with the nonzero elements of $L(D)$ modulo scalars, base points, and the
morphism to projective space defined by a base-point-free linear system.

Genus is read off the structure sheaf: a proper curve has
$h^0(\mathcal O_C)=1$, the genus of a smooth proper curve is
$h^1(\mathcal O_C)$, and the arithmetic genus $1-\chi(\mathcal O_X)$ is
defined for singular curves as well. The canonical bundle is built from the
sheaf of relative differentials, and the divisors of two rational
differentials are shown to be linearly equivalent, so the canonical class is
well defined. For a singular curve the geometric genus is the genus of its
normalization, the delta invariant measures the drop of arithmetic genus at a
singularity, the normalization is shown to lower the arithmetic genus by the
total delta invariant, and the plane-curve formulas relate the arithmetic
genus $(d-1)(d-2)/2$ of a plane curve of degree $d$ to its geometric genus
through its delta invariants.

The final part treats morphisms between curves. A nonconstant morphism of
proper curves is finite and surjective, it has a degree, and its fibres
satisfy the degree-sum formula with ramification and residue degrees.
Ramification points and branch points are defined through the local rings and
the relative differentials, the different divisor of a generically separable
morphism is assembled from the local different, and the canonical bundle is
shown to differ from the pullback of the target canonical bundle by the
different for generically separable maps; an example shows that a proposed
extension using only the torsion in relative differentials fails for an
inseparable power map. The page also defines the gonality of a
curve and constructs the finite morphism to the projective line determined by
a nonconstant rational function.
