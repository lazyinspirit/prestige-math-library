---
page: cm-math-geometry-examples
title: Cm Math Geometry — Examples
status: draft
items: []
examples: [ex-cm-galilean-boost-coordinate-change, ex-cm-rotating-frame-identity, ex-cm-mass-metric-on-a-sphere, cex-cm-collinear-labeling-admits-a-nontrivial-rotation, ex-cm-closed-one-form-radial-primitive, ex-cm-stroboscopic-map-of-the-plane-oscillator]
requires: ["cm-math-geometry","line-integrals-and-the-gradient-theorem","the-fundamental-theorems-of-calculus","sine-cosine-and-the-definition-of-pi"]
---

Finite verifications of the definitions and lemmas of
[[cm-math-geometry]].
[[ex-cm-galilean-boost-coordinate-change]] works a change of adapted chart with
a rotation, a boost and a spatial shift through explicit coordinates, checks
$R\in SO(3)$ and the transformation law $x'=Rx+vt+a$, and verifies the velocity
and acceleration transformation on a stated curve.
[[ex-cm-rotating-frame-identity]] computes $\Omega=R^{\mathsf T}R'$ for a uniform
rotation and checks the acceleration identity of
[[lem-cm-moving-frame-acceleration-identity]] on two explicit curves, isolating
the Coriolis-type and centrifugal-type terms. [[ex-cm-mass-metric-on-a-sphere]]
evaluates the mass metric of the inclusion $S^2\hookrightarrow\mathbb R^3$ in
spherical coordinates, obtaining $m(\dot\theta^2+\sin^2\theta\,\dot\varphi^2)$
on the chart domain and noting the chart degeneration at the poles.
[[cex-cm-collinear-labeling-admits-a-nontrivial-rotation]] refutes the claim
that every nonempty labeling has trivial $SO(3)$-stabilizer by exhibiting the
half-turn about the axis of $\{0,e_3\}$, complementing
[[lem-cm-rigid-labeling-stabilizer]].
[[ex-cm-closed-one-form-radial-primitive]] differentiates a closed field on the
plane, exhibits its potential and evaluates the radial primitive of the
published Poincare lemma, with the punctured-plane obstruction recorded as a
separate published counterexample and not used as a premise.
[[ex-cm-stroboscopic-map-of-the-plane-oscillator]] computes the time-$P$ map of
the undamped plane oscillator, shows $D_P=\mathbb R^2$ for every $P$, and
identifies the identity case $P=2\pi/\omega$ and the half-turn case
$P=\pi/\omega$. All items are mathematics and nothing outside this pair depends
on them.
