---
page: affine-perverse-vanishing-and-universal-hyperplanes
title: "Affine Perverse Vanishing And Universal Hyperplanes"
status: draft
items: [lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions,
        lem-complex-stratified-morse-data-have-tangential-normal-product-and-link-description,
        lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact,
        lem-artin-affine-vanishing-for-constructible-perverse-sheaves,
        lem-affine-morphisms-have-one-sided-perverse-exactness,
        lem-projective-hyperplane-sections-decrease-the-defect-of-semismallness,
        lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects]
requires:
  - analytic-derived-six-operations-and-duality
  - chern-and-pontryagin-classes-by-splitting-and-complexification
  - complex-algebraic-stratified-topology
  - dimension-constructible-images-and-dimensions-of-fibres
  - krull-dimension-and-height-theorems
  - local-coefficients-twisted-homology-and-duality
  - noether-normalisation-and-nullstellensatz
  - relations-functions-and-quotients
  - zariski-tangent-spaces-regular-points-smoothness-and-bertini
  - morse-critical-points-hessians-and-indices
---

**Objective.** This page develops the perverse-sheaf geometry of affine varieties
and of universal hyperplane families. It first proves that a closed affine
complex algebraic subset with a finite smooth algebraic Whitney stratification
admits a generic squared-distance exhaustion whose restriction to every stratum
has only finitely many nondegenerate critical points and whose differential
kills no limiting tangent plane; the construction uses conormal boundaries,
Morse-Sard nullity, the complexified critical incidence and the Zariski density
of the real diagonal, and it never asserts distinct critical values. The second
result converts that exhaustion into stratified Morse data for constructible
coefficients over any field: the local relative cochain complex of a critical
band is the normal relative complex shifted by the real tangent Morse index,
the normal complex is the restriction cone from the stalk to the collared
complex link, relative complexes across a critical value are a finite direct
sum, and regular bands preserve cohomology; both the boundary normal form and
the complex-link coefficient transport are constructed in full. From there the
page proves Artin vanishing on affine varieties: the cohomology of an
algebraically constructible sheaf of finite-dimensional vector spaces vanishes
above the dimension of the closure of its support, objects of the perverse
upper aisle have no positive-degree cohomology on an affine variety, and dually
objects of the lower aisle have no negative-degree compactly supported
cohomology. The affine-open characterization of the upper perverse aisle is
derived with an explicit top-degree detector for nonzero local systems, and it
identifies affine morphisms as one-sided perverse-exact: $Ru_*$ preserves the
upper aisle and $Ru_!$ the lower aisle. The final pair of results switches to
projective geometry: general projective hyperplane sections of a smooth
projective variety lower the defect of semismallness by one (and preserve
smallness), while the universal hyperplane family satisfies the relative weak
Lefschetz theorem and its maximal perverse subobject and quotient from the base
are the pullbacks of the first perverse cohomology objects of $Rf_*K$. The two
final results are the geometric heart of the projective perverse decomposition
route built on the later pages; all identifications in them are constructions
with their restriction maps, not statements about ranks of cohomology groups.
