---
page: cm04-one-dimensional-conservative-and-dissipative-models-examples
title: "One-dimensional conservative and dissipative models — Examples"
status: draft
library: physics
items: []
examples:
  - ex-cm04-harmonic-motion-check
  - ex-cm04-damped-regimes-check
  - ex-cm04-resonance-response-check
  - ex-cm04-pendulum-small-angle-check
  - cex-cm04-undamped-resonance-with-bounded-drive-is-unbounded
requires:
  - cm04-one-dimensional-conservative-and-dissipative-models
  - cm01-framework-quantities-and-geometry
  - cm-math-approximation
  - cm-math-verification
  - cm-math-dynamics
---

These checks exercise the models of
[[cm04-one-dimensional-conservative-and-dissipative-models]] on explicit
data. The harmonic check ([[ex-cm04-harmonic-motion-check]]) runs the
classification of [[pthm-cm04-harmonic-motion]] at $m=1$ kg, $k=4$ N/m and
datum $(0,0,1)$: the motion $\tfrac12\sin(2t)$ with period $\pi$ s, conserved
energy $\tfrac12$ J and phase ellipse $4x^{2}+v^{2}=1$ in numerical SI coordinates $x=x_{\mathrm{phys}}/(1\,\mathrm m)$, $v=v_{\mathrm{phys}}/(1\,\mathrm{m/s})$. The damping check
([[ex-cm04-damped-regimes-check]]) displays the three regimes of
[[pthm-cm04-damped-motion]] at $m=k=1$ and $c=1,2,5$ for the datum
$(0,1,0)$, computes the initial data and derivatives of each explicit
motion, evaluates the dissipation identity and the decay bounds of
[[pthm-cm04-damped-decay-and-stability]].

The driven check ([[ex-cm04-resonance-response-check]]) verifies the steady
response $5\sin t$ at $m=k=1$, $f_{0}=1$ N, $c=1/5$ kg/s and $\Omega=1$
s$^{-1}$ by substitution, locates the amplitude maximum at
$\Omega_{*}=\sqrt{0.98}$, solves the transient from rest explicitly and
contrasts the undamped resonant and off-resonant cases; the counterexample
([[cex-cm04-undamped-resonance-with-bounded-drive-is-unbounded]]) uses the
same model at $c=0$ to refute the unqualified claim that a bounded drive
forces bounded motions: the bounded drive $\cos t$ coexists with the
unbounded motion $t\sin t/2$, and every maximal motion on $\mathbb R$ is
unbounded on $[0,\infty)$, while the
strictly damped and undamped off-resonant parameter values remain bounded.

The pendulum check ([[ex-cm04-pendulum-small-angle-check]]) declares the
ideal planar pendulum as an effective angular chart model with generalized
inertia $ml^{2}$ and torque $-mgl\sin\theta$, verifies its potential
presentation and the strict minimum at $\theta=0$, applies the generic mathematical chart stability and
linearisation suppliers to obtain the stable hanging rest point and the
small-angle frequency $\sqrt{g/l}$, and transports the source-supported
finite-time error bound of
[[prop-cm-pendulum-small-angle-linearization-bound]] with its explicit
numbers at $g=1\,\mathrm{m/s^2}$, $l=1\,\mathrm m$ and normalized initial phase norm $1/100$ on a one-second horizon; it closes by exhibiting the non-conservation of the
quadratic energy of the linearization along the exact motion, so the exact pendulum is not the
harmonic model.

