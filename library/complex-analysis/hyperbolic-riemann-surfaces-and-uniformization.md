---
page: hyperbolic-riemann-surfaces-and-uniformization
title: "Hyperbolic Riemann Surfaces and Uniformization"
status: draft
requires: [conformal-mapping-branches-and-the-schwarz-lemma, the-riemann-mapping-theorem, covering-spaces-and-lifting, classification-of-covering-spaces, harmonic-functions-and-mean-values-in-rn, riemann-surfaces-branched-maps-and-differentials, green-functions-harmonic-measure-and-conformal-invariance, sublevel-deformation-and-the-handle-attachment-theorem, weak-derivatives-and-sobolev-spaces, dirichlets-unit-theorem-regulators-and-s-units]
items:
  - def-properly-discontinuous-group-action
  - lem-holomorphic-structure-lifts-to-covering-surface
  - lem-biholomorphic-invariance-of-plane-subharmonicity
  - def-harmonic-and-subharmonic-riemann-surface-functions
  - lem-locality-of-subharmonicity
  - lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces
  - lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces
  - def-canonical-green-kernel-riemann-surface
  - lem-green-envelope-dichotomy-and-logarithmic-pole
  - lem-green-kernel-exists-after-removing-a-chart-disc
  - lem-surface-green-identity-on-smooth-bordered-domain
  - lem-green-kernel-symmetry-on-riemann-surfaces
  - lem-weak-harmonic-limits-on-riemann-surfaces
  - lem-green-function-uniformizes-simply-connected-surface
  - lem-dipole-green-function-on-riemann-surface
  - lem-nongreen-simply-connected-surface-is-plane-or-sphere
  - lem-three-simply-connected-models-are-inequivalent
  - thm-uniformization-simply-connected-riemann-surfaces
  - def-universal-covering-type-riemann-surface
  - cor-universal-cover-classification-riemann-surfaces
  - def-poincare-metric-hyperbolic-riemann-surface
  - thm-deck-transformations-are-hyperbolic-isometries
  - lem-cocompact-free-affine-plane-action-is-a-lattice
  - cor-compact-genus-determines-uniformization-type
examples: []
---

This page develops uniformization of Riemann surfaces by the classical Green-kernel route, from chartwise function theory to the classification of universal covers. Harmonic and subharmonic functions on a surface are defined chartwise, and their well-definedness rests on conformal invariance of plane harmonicity together with the invariance of plane subharmonicity under biholomorphic change of coordinate; locality of subharmonicity is recorded in both the plane and the surface form. On a simply connected surface every real harmonic function has a global harmonic conjugate, and a harmonic function with isolated logarithmic poles exponentiates to a single-valued meromorphic function whose orders are the integer pole coefficients.

The canonical Green kernel of a surface is the Perron envelope of a unit logarithmic pole. A dichotomy separates the Greenian case, where the envelope is finite off the pole and is positive harmonic there, from the case in which it is identically infinite; a regular exhaustion by relatively compact smooth bordered domains and the Dirichlet solvability of such domains support the construction of the kernel after removing a closed coordinate disc contained in a larger chart, and the surface Green identity on smooth bordered domains yields symmetry of the kernel. The dipole Green function then produces the nonconstant holomorphic function that uniformizes a simply connected surface onto the disc, while the non-Greenian case splits into the plane and the sphere, so every simply connected Riemann surface is biholomorphic to exactly one of the sphere, the plane and the disc.

For a general connected surface the holomorphic universal cover exists and carries a unique complex structure making the projection holomorphic, and the three models classify its universal-covering type; the three models are pairwise non-biholomorphic. A compact surface of genus $0$ is spherical, of genus $1$ parabolic, and of genus at least $2$ hyperbolic; this last case is identified with a free properly discontinuous cocompact action of a torsion-free discrete group of disc automorphisms, the Poincare metric is transported to the quotient, and deck transformations act as hyperbolic isometries. A free properly discontinuous action of biholomorphisms of the plane with compact quotient is a rank-two lattice of translations. Countable Choice is used only through the countable exhaustion and covering interfaces, and the Axiom of Choice only through the genus and universal-cover interfaces, as recorded item by item.
