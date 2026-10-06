---
page: "plane-curves-local-intersection-multiplicity-and-bezout"
title: "Plane Curves, Local Intersection Multiplicity, and Bézout"
status: published
items:
  - def-linear-system-plane-curves
  - def-plane-projective-curve
  - def-resultant-homogeneous-polynomials
  - lem-local-intersection-length-finite
  - lem-truncated-plane-local-length
  - def-multiplicity-plane-curve-point
  - lem-bezout-global-length-degree-product
  - lem-resultant-detects-common-projective-point
  - def-local-intersection-multiplicity-plane-curves
  - def-tangent-lines-plane-curve-point
  - lem-bezout-no-common-component-finite-intersection
  - lem-intersection-multiplicity-independent-equations-coordinates
  - lem-intersection-with-line-order-of-vanishing
  - lem-smooth-plane-curve-unique-tangent
  - lem-tangent-cone-ideal-containment
  - def-local-parameter-smooth-plane-curve
  - lem-global-intersection-length-sum-local-lengths
  - lem-plane-syzygy-truncation-injectivity
  - thm-intersection-multiplicity-basic-properties
  - lem-local-intersection-as-vanishing-order-on-smooth-curve
  - thm-bezout-plane-curves
  - thm-intersection-multiplicity-at-least-product-multiplicities
  - cor-line-meets-degree-d-curve-counted-with-multiplicity
  - cor-projective-plane-curves-meet
  - cor-transverse-smooth-curves-intersection-one
  - lem-projective-coordinate-invariance-bezout-sum
  - cor-pascal-bezout-obstruction-template
  - def-flex-and-bitangent-plane-curve
  - rem-bezout-needs-projective-algebraic-closure-multiplicity
  - thm-bezout-uniqueness-low-degree-interpolation
  - cor-tangent-line-flex-multiplicity
examples: []
requires: [finite-averaging-and-character-theory-prerequisites]
---

The page develops the classical local intersection calculus of plane projective
curves over an algebraically closed field, assuming the Axiom of Choice for
the cited classical and length results, and proves Bézout's theorem. A plane
projective curve is the zero set of a nonconstant square-free homogeneous form;
its multiplicity at a point is the order of vanishing of a local equation, with
the lowest-degree part defining the tangent cone and its tangent lines counted
with multiplicity. The local intersection multiplicity of two curves at a point
with no common local branch is the length of the quotient of the local ring of
the plane by the two local equations; it is finite exactly when no common local
branch exists, is invariant under changes of equations, charts and projective
coordinates, is symmetric in the two curves, additive for unions whose defining forms have no common factor,
and depends only on the local branches. The tangent-cone inequality
$I_p\ge m_p(C)m_p(D)$ holds with equality precisely when the two tangent cones
share no line; its proof passes through truncated local rings, the containment
of a suitable power of the maximal ideal in the local ideal, and the syzygy
analysis of the truncated multiplication map. For two curves with no common component, after choosing an elimination centre
on neither curve, the resultant of the two defining forms detects the finitely many common projective points, the global length of
the associated projective complete intersection is the degree product, and the
global length decomposes as the sum of the local intersection multiplicities.
This yields Bézout's theorem $\sum_p I_p(C,D)=de$ for such pairs, together with
the classical corollaries: a line not contained in a degree-$d$ curve meets it
in exactly $d$ points counted with
multiplicity, curves without a common component always meet, transversal smooth
meeting has multiplicity one, and two curves of degree at most $d$ sharing more
than $d^2$ distinct points share a component. Flexes and bitangents are recorded
by contact multiplicity, and the hypotheses of projectivity, algebraic closure
and multiplicity are isolated as exactly the places where the affine, real or
distinct-point variants fail.
