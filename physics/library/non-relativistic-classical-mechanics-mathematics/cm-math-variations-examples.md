---
page: cm-math-variations-examples
title: Cm Math Variations — Examples
status: draft
items: []
examples:
  - ex-cm-stationary-path-need-not-be-a-local-minimum
  - ex-cm-regular-lagrangians-need-not-be-hyperregular
  - ex-cm-ideal-pendulum-equation-and-stability
  - ex-cm-rotating-hoop-reduced-energy
  - ex-cm-rolling-disk-acceleration
requires:
  - cm-math-variations
  - cm-math-dynamics
---

The companion page to [[cm-math-variations]] records explicit worked checks for
its variational, Legendre and constraint results. Everything here is
mathematics: the examples carry `domain: mathematics`, depend only on the
mathematical items of the parent page and on mathematical suppliers, and make
no physical or empirical claim. The models are stated with their adopted data
(carrier, Lagrangian, constraint, mass matrix, force); each conclusion is a
conditional deduction from those data.

[[ex-cm-stationary-path-need-not-be-a-local-minimum]] verifies the scope of
the stationarity theorem with the indefinite quadratic Lagrangian
$\mathcal L=\tfrac12(v^2-4q^2)$ on $[0,\pi]$: the curve $q_*(t)=\sin 2t$ is
stationary and the exact identity $S(q_*+\epsilon\sin)=S(q_*)-\tfrac{3\pi}{4}\epsilon^2$
shows that it is not a local minimum and that the model has no minimiser.
[[ex-cm-regular-lagrangians-need-not-be-hyperregular]] separates regularity
from hyperregularity: $\mathcal L_1(v)=\sqrt{1+v^2}$ has a strictly positive
velocity Hessian but its velocity gradient has range $(-1,1)$, the zero
Lagrangian is neither regular nor hyperregular, and $\tfrac12v^2$ is both.

The remaining three examples exercise the constraint machinery.
[[ex-cm-ideal-pendulum-equation-and-stability]] derives
$ml^2\theta''+mgl\sin\theta=0$ from the reduced d'Alembert equation, proves
conservation of the reduced energy, Lyapunov stability of the hanging
equilibrium through the energy-stability theorem, and the linearised frequency
$\sqrt{g/l}$. [[ex-cm-rotating-hoop-reduced-energy]] treats a circle rotating
about the vertical axis with prescribed constant angular speed: differentiating
the carrier gives the velocity and acceleration identities, the reduced
Euler–Lagrange equation $\theta''=\Omega^2\sin\theta\cos\theta-(g/a)\sin\theta$,
conservation of the reduced energy, the comparison with the inertial mechanical
energy $K+U_g$ (whose rate of change is the reaction power under an ideal
reaction), and the subcritical stability threshold $a\Omega^2\le g$.
[[ex-cm-rolling-disk-acceleration]] models the planar rolling disk as a regular
holonomic ideal-constraint system: the constraint $x-a\theta=\mathrm{const}$
integrates, the projected equation gives $\bigl(m+I/a^2\bigr)x''=f$ with
multiplier $\lambda=-fI/(I+ma^2)$, so that $x''=2f/(3m)$ for a uniform thin
disk and $x''=f/(2m)$ for a hoop, and an explicit quadratic motion realises the
acceleration. The scope remarks on each example separate the ideal model from
its physical realisation.
