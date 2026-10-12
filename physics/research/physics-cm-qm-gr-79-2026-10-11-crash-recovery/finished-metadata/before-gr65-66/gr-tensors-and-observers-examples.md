---
page: gr-tensors-and-observers-examples
title: "Tensors And Observers — Examples"
status: draft
library: physics
items: []
examples:
  - ex-gr-mixed-tensor-transformation-and-contraction
  - ex-gr-boosted-constant-tetrad-field
  - ex-gr-shearing-congruence-tetrad-and-adapted-chart
  - ex-gr-observer-relative-velocity-of-a-boost
  - ex-gr-observer-energy-of-a-boosted-test-body
  - cex-gr-tetrad-field-need-not-be-a-coordinate-frame
  - cex-gr-shearing-congruence-rest-spaces-not-integrable
---

These examples and counterexamples work the objects of
[[gr-tensors-and-observers]] on explicit components. On the tensor side, a
mixed type $(1,1)$ field on flat four-space is transformed from the identity
chart to an affine chart in which one Jacobian entry is constant and the
offending component becomes the smooth function $y^1-y^0$; the trace computed
in the two charts is verified to agree, and the example records that the
individual diagonal components are not invariant
([[ex-gr-mixed-tensor-transformation-and-contraction]]).

On the observer side, the constant boosted fields
$E_0=\gamma(\partial_0+\beta\partial_1)$,
$E_1=\gamma(\beta\partial_0+\partial_1)$, $E_2=\partial_2$, $E_3=\partial_3$
on flat four-space are verified to be a smooth future-directed tetrad field,
and the chart $u=(x^0,x^1-\beta x^0,x^2,x^3)$ is exhibited as an adapted chart
for the parallel congruence $n=E_0$ in which $n=\gamma\,\partial_{u^0}$, so an
adapted chart's coordinate field need not equal the congruence
([[ex-gr-boosted-constant-tetrad-field]]). A second, shearing congruence
$n=\gamma(\partial_0+\Omega\partial_2)$ with $\Omega=\lambda x^1$ and its
tetrad are verified on the strip $\lvert\lambda x^1\rvert<1/2$, an adapted
chart is produced with explicit inverse, and the bracket
$[E_0,E_1]=-\gamma'\partial_0-(\gamma\Omega)'\partial_2$ shows that this
future-directed tetrad field is not the coordinate frame of any chart
([[ex-gr-shearing-congruence-tetrad-and-adapted-chart]]).

The observer-relative constructions are checked on the boost family. For
$u=\gamma(n+\beta E_1)$ the example computes $g(u,u)=-1$,
$\gamma_o=-g(n,u)=\gamma$, $h_n(u)=\gamma\beta E_1$ and
$g(w,w)=\beta^2c^2=c^2(1-\gamma^{-2})$, verifying the relative-velocity
decomposition theorem in an explicit family
([[ex-gr-observer-relative-velocity-of-a-boost]]); for $P=mcu$ it then
computes rest mass $m(P)=m$, energy $E_n(P)=mc^2\gamma$, spatial momentum
$q_n(P)=mc\gamma\beta E_1$ and verifies the mass shell
$E_n(P)^2=m^2c^4+c^2g(q_n(P),q_n(P))$
([[ex-gr-observer-energy-of-a-boosted-test-body]]).

Two counterexamples delimit the definitions. The shearing tetrad's nonvanishing
bracket contradicts the necessary commuting condition, refuting the universal
claim that every smooth future-directed tetrad field on an open subset of flat
Lorentzian four-space is the coordinate frame of a chart
([[cex-gr-tetrad-field-need-not-be-a-coordinate-frame]]). For the same
congruence the flat form $\alpha=\gamma(-dx^0+\Omega\,dx^2)$ satisfies
$\alpha\wedge d\alpha=-\gamma^2\lambda\,dx^0\wedge dx^1\wedge dx^2\neq0$, so
the rest spaces are not tangent to any local hypersurfaces: existence of an
adapted chart and integrability of the rest spaces are different properties
([[cex-gr-shearing-congruence-rest-spaces-not-integrable]]).
