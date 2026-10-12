---
requires:
  - gr-spherical-vacuum-model
  - the-exponential-function
  - gr-tensors-and-observers
  - gr-framework-and-geometry
page: gr-spherical-vacuum-model-examples
title: "Spherical Vacuum Model — Examples"
status: draft
library: physics
items: []
examples:
  - ex-gr-schwarzschild-isotropic-weak-field-comparison
  - ex-gr-schwarzschild-static-clock-ratio-explicit
  - ex-gr-schwarzschild-circular-orbit-thresholds-explicit
  - ex-gr-schwarzschild-extension-horizon-data
  - ex-gr-kruskal-cone-and-radial-values
  - cex-gr-exterior-charts-do-not-cover-the-extension
---

This page collects six worked computations and counterexamples of
[[gr-spherical-vacuum-model]], each an exact evaluation of a supplied formula
at an explicit value or an explicit refutation. No item reports a measurement.
The Kruskal computation sets $s=1\,\mathrm m$ as an exact normalization of
the model parameter, not as a measured value; no numerical value of $c$,
$G_N$ or $m_*$ is asserted.

**Coordinates and clocks.**
[[ex-gr-schwarzschild-isotropic-weak-field-comparison]] verifies the isotropic
conversion $R(\rho)=\rho+s/2+s^2/(16\rho)$, expands the inverse as
$\rho_0(r)=r-s/2-s^2/(16r)+O(s^3/r^2)$ and shows that after the conversion the areal and
isotropic coefficients agree through first order and differ at second order by
$\frac18(s/r)^2$, while the unconverted comparison at $\rho=r$ is already
wrong at that order by $\frac58(s/r)^2$.
[[ex-gr-schwarzschild-static-clock-ratio-explicit]] evaluates the static clock
identity at $r_1=2s$ and $r_2=4s$, obtaining the exact ratio
$\sqrt{2/3}$ and the acceleration coefficient $1/(8s)$ at $r_1$;
[[ex-gr-schwarzschild-circular-orbit-thresholds-explicit]] computes the orbit
data at the two thresholds: $\ell^2=3c^2s^2$, $e=2\sqrt2 c/3$ and
$(d\varphi/dt)^2=c^2/(54s^2)$ at $r_0=3s$ with $V_\ell''(3s)=0$, the values
$f(3s/2)=1/3$, $(d\varphi/dt)^2=4c^2/(27s^2)$ at the photon sphere, and the
stable comparison radius $4s$ with $V_\ell''(4s)=c^2/(320s^2)$.

**The horizon.** [[ex-gr-schwarzschild-extension-horizon-data]] evaluates the
advanced-chart extension at the horizon: the metric block
$\begin{pmatrix}0&1\\1&0\end{pmatrix}$, determinant $-s^4\sin^2\vartheta_0$,
the orientation field $N_{\mathrm{ext}}=\partial_v-\partial_r$ at $r=s$ with
$g(N_{\mathrm{ext}},N_{\mathrm{ext}})=-2<0$, generator pairing
$g(N_{\mathrm{ext}},\partial_v)=-1$, and Kretschmann value $12/s^4$, next to
the divergent exterior component $g_{11}$.
[[ex-gr-kruskal-cone-and-radial-values]] instantiates the Kruskal cone
criterion at $(U,V)=(0,1)$ with $s=1\,\mathrm m$ as a model normalization,
where $r=s$ and $A=4s^2/e$: the
vectors $\partial_U+\partial_V$, $\partial_U$, $\partial_V$ are future causal
with the first timelike and the last two null, $\partial_U-\partial_V$ is
spacelike, the angular cut-off is $\gamma(\omega,\omega)\le 4/e$, and
$\partial_Ur=-e^{-1}$, $\partial_Vr=0$ agree with implicit differentiation.

**A counterexample.**
[[cex-gr-exterior-charts-do-not-cover-the-extension]] refutes the statement
that the product charts of the exterior datum cover the horizon-crossing
extension (equivalently, that extension points are reached at bounded exterior
coordinate $x^0$): the point $(v,r)=(0,s)$ is a regular point with finite
nonzero Kretschmann scalar $12/s^4$ and nonvanishing determinant, lies outside
the image of $\Phi$ because $\Phi$ preserves $r>s$, and any exterior sequence
mapping to it has $x^0\to+\infty$.
