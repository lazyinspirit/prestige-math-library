---
requires:
  - gr-framework-and-geometry
  - geodesics-the-exponential-map-completeness-and-hopf-rinow
  - sine-cosine-and-the-definition-of-pi
  - fundamental-trigonometric-identities
  - the-inverse-function-theorem-completed
page: gr-framework-and-geometry-examples
title: "Framework And Geometry — Examples"
status: draft
library: physics
items: []
examples:
  - ex-gr-minkowski-chart-as-a-lorentzian-manifold
  - ex-gr-spherical-coordinates-flat-metric-components
  - ex-gr-flat-connection-is-metric-selected
  - cex-gr-torsion-free-does-not-imply-metric-compatible
  - ex-gr-unit-conventions-for-two-time-coordinates
  - cex-gr-symmetric-nondegenerate-field-need-not-be-lorentzian
  - ex-gr-reversing-the-timelike-field-reverses-future
---

These examples and counterexamples work the objects of
[[gr-framework-and-geometry]] on explicit components. The constant field
$\operatorname{diag}(-1,1,1,1)$ on $\mathbb R^4$ is verified to be a smooth
time-oriented Lorentzian four-manifold, with the future-directed causal vectors
$v^0\ge\lvert v_{\mathrm{vec}}\rvert$ and the sample vectors $(1,0,0,0)$,
$(1,1,0,0)$ and $(0,1,0,0)$ classified as future timelike, future null and
spacelike ([[ex-gr-minkowski-chart-as-a-lorentzian-manifold]]). The same metric
is computed in a spherical chart: its components become
$\operatorname{diag}(-1,1,r^2,r^2\sin^2\vartheta)$, non-constant but smooth and
nondegenerate, by an explicit evaluation of the transition Jacobian
([[ex-gr-spherical-coordinates-flat-metric-components]]); the freedom of units
is exhibited by a second computation in which the time coordinate is seconds
instead of metres, giving the time-time component $-c^2$ with dimension
$\mathrm m^2\,\mathrm s^{-2}$ while $ds^2$ stays in $\mathrm m^2$
([[ex-gr-unit-conventions-for-two-time-coordinates]]).

On the connection side, the coordinate connection with vanishing coefficients
is verified to be an affine connection that is both torsion-free and
metric-compatible, so the metric-selected class is nonempty on flat space
([[ex-gr-flat-connection-is-metric-selected]]); a second connection, whose only
non-vanishing coefficients are $\Gamma^0{}_{01}=\Gamma^0{}_{10}=1$, is
torsion-free but violates the compatibility identity at every point, so torsion
freedom alone does not force metric compatibility
([[cex-gr-torsion-free-does-not-imply-metric-compatible]]). Two further
refutations delimit the definitions: a smooth symmetric nondegenerate field of
inertia $(2,2,0)$ — for instance $\operatorname{diag}(1,1,-1,-1)$ — is not a
Lorentzian metric, so the signature clause is a genuine requirement
([[cex-gr-symmetric-nondegenerate-field-need-not-be-lorentzian]]); and
reversing the time orientation field to $-N$ reverses every future/past label,
which shows that the attribution is relative to the adopted orientation
([[ex-gr-reversing-the-timelike-field-reverses-future]]).
