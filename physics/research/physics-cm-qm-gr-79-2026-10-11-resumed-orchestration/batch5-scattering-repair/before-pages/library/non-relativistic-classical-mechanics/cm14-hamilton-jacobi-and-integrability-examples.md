---
page: cm14-hamilton-jacobi-and-integrability-examples
title: "Hamilton–Jacobi and integrability — Examples"
status: draft
library: physics
items: []
examples: [ex-cm14-harmonic-oscillator-hamilton-jacobi-check,
           ex-cm14-kepler-radial-action-check,
           cex-cm14-harmonic-model-critical-fibre,
           cex-cm14-free-particle-noncompact-fibre,
           ex-cm14-oscillator-caustic-check]
requires: ["cm14-hamilton-jacobi-and-integrability",
           "cm04-one-dimensional-conservative-and-dissipative-models",
           "cm05-two-body-central-forces-and-gravitation",
           "relations-functions-and-quotients",
           "compactness"]
---

Worked checks and counterexamples for
[[cm14-hamilton-jacobi-and-integrability]].
[[ex-cm14-harmonic-oscillator-hamilton-jacobi-check]] works the harmonic
model of [[post-cm04-harmonic-model]] through the whole page: the
explicit family $S$ is shown to be a complete integral of the model's
Hamilton-Jacobi equation wherever $\sin(\omega t)\neq0$, its
characteristic curves are the harmonic motions with $\beta=S_{\alpha}$
constant, and the explicit chart $(x,p)\mapsto(\theta,I)$ is canonical
with $H=I/T$, $\dot I=0$, $\dot\theta=1/T$, the normalization
$I=\oint p\,dx$ and the radian chart of the sources. The central example
[[ex-cm14-kepler-radial-action-check]] verifies, inside the gravitational
two-body model of [[post-cm05-gravity]], that the Kepler effective
potential has exactly two simple turning points on the elliptic energy
window, applies the one-dimensional action-variable theorem
[[thm-cm-action-variable-derivative]] to obtain
$J_{\mathrm a}'(E)=T/(2\pi)$, and identifies the radial quadrature with
the orbital period $T$, recovering
$T^{2}=4\pi^{2}\mu a^{3}/\kappa$ without using any measured constant.

The two counterexamples exhibit the hypotheses that cannot be dropped.
[[cex-cm14-harmonic-model-critical-fibre]] shows that the zero-energy
level of the one-label harmonic datum is a compact connected common level
set that is a single point, not a torus: compactness and connectedness
alone do not give the toral conclusion, regularity is indispensable.
[[cex-cm14-free-particle-noncompact-fibre]] shows that the positive-energy
level of a free label is a nonempty regular common level set that is
noncompact and carries no period at all, so the compactness hypothesis of
[[pthm-cm14-regular-tori]] is indispensable too. The published
mathematical obstruction
[[prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates]]
and the refuted global statement
[[fs-liouville-arnold-gives-global-action-angle-coordinates-on-the-entire-manifold]]
record the complementary global failure: local action-angle coordinates
need not patch to a single-valued global chart even when all fibres are
regular and compact, so no universal torus chart is claimed. Finally,
[[ex-cm14-oscillator-caustic-check]] exhibits the local caustic of the
oscillator family: the mixed derivative $S_{x\alpha}$ of the complete
integral is unbounded at the conjugate times $\omega t\in\pi\mathbb Z$,
and the family of model solutions through a fixed event refocuses there,
which is why the Hamilton–Jacobi statements of this page are local in
time and carry no claim across a caustic.
