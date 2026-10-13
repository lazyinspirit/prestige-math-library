---
requires:
  - gr-linearized-waves
  - gr-flat-and-newtonian-bridges
  - gr-framework-and-geometry
  - gr-tensors-and-observers
page: gr-linearized-waves-examples
title: "Linearized Waves — Examples"
status: published
library: physics
items: []
examples:
  - ex-gr-sinusoidal-tt-plane-wave
  - ex-gr-tt-screen-projection-computation
  - ex-gr-plane-wave-regauge-to-tt
  - cex-gr-subluminal-planar-profile-not-a-vacuum-wave
  - cex-gr-half-trace-subtraction-on-the-rest-space
---

This page collects the worked computations of [[gr-linearized-waves]]: three
examples and two counterexamples with complete verification arguments. Four
are mathematical statements in the flat model; the sinusoidal-wave example is
a conditional physics computation whose strain clause evaluates the ideal
detector definition of the companion page, and it carries a scope note
stating that no observation, apparatus or numerical wave quantity is
asserted.

[[ex-gr-sinusoidal-tt-plane-wave]] evaluates the sinusoidally modulated TT
plane wave $h_{11}=a\cos(\omega u)$, $h_{22}=-a\cos(\omega u)$,
$h_{12}=b\sin(\omega u)$ with $u=x^0-x^3$: it checks harmonic gauge, the
linearized vacuum equations and the quadratic residual, and computes the
first-order curvature components $R^{(1)}_{0101}=\tfrac12a\omega^2\cos(\omega u)$
and $R^{(1)}_{0102}=\tfrac12b\omega^2\sin(\omega u)$ together with the
ideal-detector strain for arms along $e_1$ and $(e_1+e_2)/\sqrt2$.
[[ex-gr-tt-screen-projection-computation]] projects an explicit symmetric
spatial tensor with the screen projector of an observer, computes the
transverse-traceless part and its amplitudes and verifies idempotence.
[[ex-gr-plane-wave-regauge-to-tt]] solves the regauging of a harmonic-gauge
plane-wave amplitude to transverse-traceless form, recovering the explicit
gauge vector and the amplitudes $(A_+,A_\times)=(1,0)$.

The two counterexamples delimit the algebraic and differential statements.
[[cex-gr-subluminal-planar-profile-not-a-vacuum-wave]] shows that a
transverse-traceless planar profile with sub-null phase-front coordinate ratio
$1/2$ fails the linearized vacuum equations, so the null propagation variable
of the plane waves is essential. [[cex-gr-half-trace-subtraction-on-the-rest-space]]
shows that the half-trace subtraction with the rank-three spatial projector
is not trace-free, complementing the rank-two screen projection of the
transverse-traceless lemma.
