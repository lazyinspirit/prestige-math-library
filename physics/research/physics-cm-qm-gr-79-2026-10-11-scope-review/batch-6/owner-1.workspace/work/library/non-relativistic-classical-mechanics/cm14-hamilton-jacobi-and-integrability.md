---
page: cm14-hamilton-jacobi-and-integrability
title: "Hamilton–Jacobi and integrability"
status: draft
library: physics
items: [def-cm14-hamilton-jacobi-equation,
        def-cm14-complete-integral,
        def-cm14-involution,
        def-cm14-complete-integrability,
        pthm-cm14-hamilton-jacobi-characteristics,
        pthm-cm14-regular-tori,
        pthm-cm14-action-angle,
        pthm-cm14-adiabatic-invariance,
        rem-cm14-scope-of-hamilton-jacobi-and-integrability]
examples: []
requires: ["cm-math-central",
           "cm08-symmetry-noether-and-conditional-conservation",
           "cm13-symplectic-geometry-and-canonical-methods"]
---

This page is the Hamilton–Jacobi and integrability companion of
[[cm13-symplectic-geometry-and-canonical-methods]]. It adds no physical
assumption to the force branch: every item is a conditional statement
about a declared hyperregular potential presentation of
[[def-cm07-action-and-mechanical-lagrangian]] with the momentum charts and
two-form of [[def-cm13-two-form]].
[[def-cm14-hamilton-jacobi-equation]] fixes the Hamilton–Jacobi equation
associated with one of the presentation's momentum charts — the class of
$C^{3}$ action-dimension functions $S$ with
$S_{t}+H(t,q,S_{q})=0$ for the branch Hamiltonian $H$ of
[[def-cm12-hamiltonian]] — and records that the equation is attached to
the declared chart, Legendre branch and potential representative.
[[def-cm14-complete-integral]] adds the no-caustic nondegeneracy
$\det S_{q\alpha}\neq0$ at the base point, together with the momentum map
$p=S_{q}$ and the Jacobi constants $\beta=S_{\alpha}$.

[[pthm-cm14-hamilton-jacobi-characteristics]] proves the method: the
characteristic curves of a complete integral solve the chart's Hamilton
equations, are the model's motions on the potential branch, carry the
constants $\beta=S_{\alpha}$, admit a local converse solving
$\beta=S_{\alpha}$ for the configuration, and make $(\beta,\alpha)$ local
canonical coordinates of the presentation's two-form. The theorem is
local in time, configuration and parameters, and the companion page
verifies the conjugate-time degeneration that limits it.

[[def-cm14-involution]] and [[def-cm14-complete-integrability]] fix the
model vocabulary of first integrals, involutive families and
completely integrable data $F=(F_{1}=H,\dots,F_{n})$ with $n$ smoothly
independent commuting integrals, in the root-library sense of
[[def-completely-integrable-hamiltonian-system]]. For such a datum,
[[pthm-cm14-regular-tori]] proves that a compact connected regular fibre
over a regular value is an embedded Lagrangian torus carrying the
transitive commuting action with a full period lattice, under the Axiom
of Countable Choice consumed through the cited lattice lemma, and
[[pthm-cm14-action-angle]] produces period-one action-angle coordinates
$(I,\theta)$ with $\omega=\sum_{i}d\theta_{i}\wedge dI_{i}$, the
reduction $H=h(I)$, the linear motion $\dot I=0$,
$\dot\theta=\partial h/\partial I$ on the torus, and the radian
rescaling of the sources. [[pthm-cm14-adiabatic-invariance]] then gives
the order-$\varepsilon$ drift bound for the action of a slowly varying
one-frequency family, conditional on a uniform parameter-dependent
action-angle chart with nonvanishing frequency and on the trapping of the
solution; no exact invariance is claimed.
[[rem-cm14-scope-of-hamilton-jacobi-and-integrability]] records the scope:
locality and caustics, the separate involution and independence
requirements, the compactness, connectedness and proper-submersion
hypotheses and their Countable-Choice cost, the published monodromy
obstruction to global action-angle coordinates, and the period-one versus
radian frequency conventions. No item on this page asserts that the model
describes nature, and no measured value is used.
