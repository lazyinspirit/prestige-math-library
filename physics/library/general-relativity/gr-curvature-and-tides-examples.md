---
requires:
  - gr-curvature-and-tides
  - gr-framework-and-geometry
  - gr-connections-and-free-fall
  - gr-tensors-and-observers
page: gr-curvature-and-tides-examples
title: "Curvature And Tides — Examples"
status: published
library: physics
items: []
examples:
  - ex-gr-flat-metric-in-cylindrical-coordinates
  - ex-gr-curvature-of-a-product-with-a-round-sphere
  - ex-gr-jacobi-fields-in-flat-space
  - ex-gr-conjugate-instant-on-a-round-sphere-factor
  - cex-gr-symmetries-do-not-imply-bianchi
  - cex-gr-vanishing-tidal-operator-for-one-observer
---

These examples and counterexamples work the constructions of
[[gr-curvature-and-tides]] on explicit components. All six items are
mathematics: each is a complete conditional verification or refutation
inside the stated model, and none reports a measurement or an empirical
claim.

Two curvature computations bracket the theory. Locally in cylindrical
coordinates, the flat metric $g=-\bigl(dx^0\bigr)^2+\bigl(dx^1\bigr)^2+
(x^1)^2\bigl(dx^2\bigr)^2+\bigl(dx^3\bigr)^2$ has the nowhere-vanishing
Christoffel symbols $\Gamma^1{}_{22}=-x^1$ and
$\Gamma^2{}_{12}=\Gamma^2{}_{21}=1/x^1$, while the coordinate formula and a
finite case check show that every curvature component vanishes
([[ex-gr-flat-metric-in-cylindrical-coordinates]]): nonvanishing connection
coefficients are a chart artifact, not curvature. On the actual product
$\mathbb R^2\times S^2$ of flat time and space directions with a round unit
two-sphere, the local chart $0<x^1<\pi$, $0<x^2<2\pi$ has
$g=-\bigl(dx^0\bigr)^2+\bigl(dx^1\bigr)^2+\sin^2(x^1)\bigl(dx^2\bigr)^2+
\bigl(dx^3\bigr)^2$. The same machinery gives
$R_{1212}=\sin^2(x^1)$, $\operatorname{Ric}=\operatorname{diag}(0,1,\sin^2(x^1),0)$,
$S=2$ and $G=\operatorname{diag}(1,0,0,-1)$, and the contracted second
Bianchi identity is checked term by term in this local chart
([[ex-gr-curvature-of-a-product-with-a-round-sphere]]).

The Jacobi theory is then exercised on both sides. In flat space the Jacobi
fields along a geodesic are exactly the affine fields $J_0+tJ_1$ with
$D_tJ(0)=J_1$, and no geodesic has a conjugate instant
([[ex-gr-jacobi-fields-in-flat-space]]); on the equator of the round-sphere
factor the field $\sin(s)\,\partial_1$ is a nonzero Jacobi field vanishing at
$s=0$ and $s=\pi$, so $\pi$ is a first conjugate instant of multiplicity one,
with a one-dimensional kernel of $d(\exp_p)$ at $\pi v$
([[ex-gr-conjugate-instant-on-a-round-sphere-factor]]).

Finally the two counterexamples delimit the algebraic hypotheses. The
constant tensor $T_{abcd}=\omega_{ab}\omega_{cd}$ built from
$\omega=dx^0\wedge dx^1+dx^2\wedge dx^3$ satisfies the skew-symmetries and
the pair exchange but has Bianchi sum $1$ at $(0,1,2,3)$, so the exchange
symmetries do not imply the first Bianchi identity
([[cex-gr-symmetries-do-not-imply-bianchi]]); and the algebraic curvature
tensor $R_{abcd}=h_{ac}h_{bd}-h_{ad}h_{bc}$ of a degenerate form $h$ has a
tidal operator that vanishes for $\partial_0$ while
$R(\partial_0+\tfrac12\partial_1,\partial_3)(\partial_0+\tfrac12\partial_1)
=-\tfrac14\partial_3$, so the vanishing criterion cannot be weakened from
"all timelike directions" to a single observer
([[cex-gr-vanishing-tidal-operator-for-one-observer]]).
