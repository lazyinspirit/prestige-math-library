---
requires:
  - gr-connections-and-free-fall
  - fundamental-trigonometric-identities
  - gr-framework-and-geometry
  - gr-tensors-and-observers
page: gr-curvature-and-tides
title: "Curvature And Tides"
status: draft
library: physics
items:
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-curvature-tensoriality-and-coordinate-formula
  - thm-gr-curvature-algebraic-symmetries
  - thm-gr-second-bianchi-and-divergence-free-einstein
  - def-gr-jacobi-field-and-conjugate-instant
  - thm-gr-jacobi-equation-and-geodesic-deviation
  - lem-gr-conjugacy-via-the-exponential-map
  - lem-gr-normal-index-form-factorization
  - thm-gr-conjugacy-and-local-timelike-maximum
  - lem-gr-algebraic-curvature-vanishing-criterion
  - pthm-gr-tidal-comparison
  - rem-gr-curvature-tidal-scope-and-conventions
  - ex-gr-curvature-in-a-point-normal-chart
examples: []
---

This page builds the curvature of the metric-selected connection on
[[gr-connections-and-free-fall]] and its reading as the tidal field. It has
eleven mathematical items: two definitions, eight proved results, and one
worked example, all within a time-oriented smooth Lorentzian four-manifold.
Its two physical items are one model-conditional theorem and one scope note.
No item reports a measurement or asserts that the model describes nature.

**Curvature and its identities.** The curvature operator
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and the derived
lowered Riemann, Ricci, scalar and Einstein tensors are defined with a fixed
sign and index order ([[def-gr-curvature-tensor-and-derived-tensors]]); the
tensoriality and the chart and point-normal coordinate formulas are proved in
[[thm-gr-curvature-tensoriality-and-coordinate-formula]], and the algebraic
symmetries together with the first Bianchi identity and the Ricci and
Einstein symmetries in [[thm-gr-curvature-algebraic-symmetries]]. The second
Bianchi identity and its two contractions give the divergence-free Einstein
tensor $\nabla^aG_{ab}=0$
([[thm-gr-second-bianchi-and-divergence-free-einstein]]).

**Geodesic deviation, conjugacy and the local maximum.** Jacobi fields along
a geodesic are defined by $D_s^2J=R(T,J)T$, with conjugate instants,
multiplicity and the normal bundle
([[def-gr-jacobi-field-and-conjugate-instant]]); the commutator identity
$[D_t,D_r]V=R(T,J)V$, the geodesic deviation equation and the
eight-dimensional initial-value theory are proved in
[[thm-gr-jacobi-equation-and-geodesic-deviation]]. Conjugacy is then
characterized as non-injectivity of the exponential differential with kernel
dimension equal to the multiplicity
([[lem-gr-conjugacy-via-the-exponential-map]]), the normal index form is
factored as a sum of squares before the first conjugate instant by a matrix
Riccati computation ([[lem-gr-normal-index-form-factorization]]), and the
local proper-time maximum is proved for every future timelike segment
with no conjugate instant through its endpoint; no claim is made about
maximality at or after a conjugate instant ([[thm-gr-conjugacy-and-local-timelike-maximum]]).

**Tidal reading.** The algebraic vanishing criterion
([[lem-gr-algebraic-curvature-vanishing-criterion]]) is the mathematical
lemma behind the model deduction that free-fall congruence deviation is
exactly the curvature term, vanishes identically when the curvature does, and
contains no rest mass or internal-structure parameter
([[pthm-gr-tidal-comparison]]); the scope note
[[rem-gr-curvature-tidal-scope-and-conventions]] fixes units and conventions
and separates chart artifacts from curvature. The in-page example
[[ex-gr-curvature-in-a-point-normal-chart]] shows explicitly that a
first-order normal chart with vanishing Christoffel symbols at a point can
still carry nonzero curvature. The companion page
[[gr-curvature-and-tides-examples]] computes all of this on flat space in
cylindrical coordinates, on a product with a round sphere, and on two
counterexamples separating the algebraic hypotheses.
