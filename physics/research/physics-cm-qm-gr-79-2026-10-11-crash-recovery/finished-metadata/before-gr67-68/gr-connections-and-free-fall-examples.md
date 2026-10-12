---
page: gr-connections-and-free-fall-examples
title: "Connections And Free Fall — Examples"
status: draft
library: physics
items: []
examples:
  - ex-gr-flat-space-geodesics-and-proper-time
  - ex-gr-levi-civita-connection-of-a-conformal-metric
  - ex-gr-nonaffine-geodesic-parametrization
  - cex-gr-geodesics-do-not-determine-the-connection
  - ex-gr-radial-timelike-maximum-in-flat-space
  - cex-gr-point-normal-chart-does-not-make-second-derivatives-vanish
---

These examples and counterexamples work the constructions of
[[gr-connections-and-free-fall]] on explicit components. All six items are
mathematics: each is a complete conditional verification or refutation inside
the stated flat or conformal model, and none reports a measurement.

The flat model is settled first
([[ex-gr-flat-space-geodesics-and-proper-time]]): on $\mathbb R^4$ with the
identity chart, $g=\operatorname{diag}(-1,1,1,1)$ and the coordinate
connection with $\Gamma\equiv0$, the example verifies torsion freedom and
metric compatibility from the defining identities and concludes by uniqueness
that this is the metric-selected connection; its geodesics are then exactly
the affine lines, the proper-time increment of a timelike geodesic is
$\sqrt{-g(v,v)}\,(t-t_0)/c$, parallel transport has constant components in the
chart (hence preserves $g$ and depends only on the endpoints), and
$\exp_p(v)=p+v$ on all of $T_pM$ with $d(\exp_p)_0=\operatorname{id}$.

Two computations test the connection theory itself. For the conformal metric
$g_{ab}=e^{2\varphi}\eta_{ab}$ the displayed symbols
$\Gamma^a{}_{bc}=\delta^a{}_b\partial_c\varphi+\delta^a{}_c\partial_b\varphi-\eta_{bc}\eta^{ad}\partial_d\varphi$
are verified to be symmetric in the lower indices and to satisfy
$\partial_ag_{bc}=\sum_d(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd})$
identically, so by uniqueness they are the Levi–Civita coefficients of $g$;
the special case $\varphi=\lambda x^1$ is checked component by component
([[ex-gr-levi-civita-connection-of-a-conformal-metric]]). The example
$\beta(s)=(s^2,0,0,0)$ then shows that a curve with the image of an affine
geodesic need not be a geodesic in its own parameter: $D_s\beta'=(2,0,0,0)$ is
nonzero for every $s>0$, while the general formula for a reparametrized
geodesic gives $D_s\beta'=h''(\gamma'\circ h)$ and hence the pregeodesic
proportionality $\nabla_{\beta'}\beta'=f\beta'$ with $f=h''/h'=1/s$
([[ex-gr-nonaffine-geodesic-parametrization]]).

The first counterexample distinguishes the connection from its geodesic
images ([[cex-gr-geodesics-do-not-determine-the-connection]]). The connection
with $\Gamma'^a{}_{bc}=\delta^a{}_b\delta^0{}_c+\delta^a{}_c\delta^0{}_b$ on
flat four-space is torsion-free and different from the flat connection, and it
is not $g$-compatible because the compatibility identity fails at
$(a,b,c)=(0,0,0)$; nevertheless its geodesic images are exactly the straight
lines: every straight line can be reparametrized to solve
$\ddot x^a+2\dot x^0\dot x^a=0$, and conversely every solution with nonzero
velocity is affine or has $\dot x^a=c^a\dot x^0$. Torsion freedom plus the
geodesic images therefore does not determine the metric-selected connection;
metric compatibility is an independent condition, which is why the free-fall
assumption alone cannot identify the geometry used in the model.

The radial maximum is checked on the explicit family
$\alpha_a(t)=(ct,\,a\sin(\pi t),\,0,\,0)$, $0\le a<c/\pi$, between $p=(0,0,0,0)$
and $q=(c,0,0,0)$: the length is
$\int_0^1\sqrt{c^2-a^2\pi^2\cos^2(\pi t)}\,dt$, strictly less than
$c=\sqrt{-g_p(v_q,v_q)}$ for every $a\neq0$ by monotonicity of the integral
over a nondegenerate subinterval, and equal to $c$ for $a=0$, where the curve
is the radial geodesic itself — the equality case of the Gauss-lemma theorem
on a family of wiggly curves ([[ex-gr-radial-timelike-maximum-in-flat-space]]).
Finally, the second counterexample shows that the point-normal first-order
identities do not extend to second order
([[cex-gr-point-normal-chart-does-not-make-second-derivatives-vanish]]): the
metric $g_{ab}=\eta_{ab}+(x^0)^2\delta^1{}_a\delta^1{}_b$ has
$g_{ab}(0)=\eta_{ab}$, $\partial_ag_{bc}(0)=0$ and
$\Gamma^a{}_{bc}(0)=0$ in the identity chart, yet
$\partial_0\partial_0g_{11}(0)=2\neq0$, so no second-order vanishing follows
from the first-order normal-form identities; the item asserts nothing about
curvature and is silent about any neighborhood-flatness reading.
