---
page: cm09-coupled-oscillations-and-approximation-examples
title: "Coupled oscillations and approximation — Examples"
status: draft
library: physics
items: []
examples:
  - ex-cm09-two-mass-spring-modes
  - ex-cm09-triatomic-translation-zero-mode
  - ex-cm09-double-pendulum-linear-modes
  - ex-cm09-degenerate-oscillator-subspace
  - ex-cm09-unstable-quadratic-mode
  - ex-cm09-forced-resonant-mode-check
  - ex-cm09-weak-damping-averaging-check
  - ex-cm09-cubic-potential-error-check
requires:
  - cm09-coupled-oscillations-and-approximation
  - cm-math-verification
  - cm01-framework-quantities-and-geometry
  - cm-math-approximation
  - cm-math-dynamics
  - cm-math-geometry
  - cm04-one-dimensional-conservative-and-dissipative-models
---

Worked checks for [[cm09-coupled-oscillations-and-approximation]]. Modal vectors and coefficients use the model's fixed-unit numerical convention: physical mass-normalized vector components have unit $s_i/(\sqrt{e_*}t_*)$ and modal amplitudes have unit $\sqrt{e_*}t_*$.
[[ex-cm09-two-mass-spring-modes]] verifies the free-mode theorem on two
equal masses joined by a coupling spring: the modal vectors
$(1,\pm1)/\sqrt{2m}$, the frequencies $\sqrt{k/m}$ and
$\sqrt{(k+2c)/m}$, the single-mode data and energies, and the zero-stiffness
case in which the pair's translation is an affine zero mode.
[[ex-cm09-triatomic-translation-zero-mode]] computes the three modal patterns
of a linear chain with masses $m,m_c,m$ — translation, antisymmetric stretch
and symmetric stretch — with frequencies $\sqrt{k/m}$ and
$\sqrt{(k/m)(1+2m/m_c)}$, and corrects a frequency comparison of the cited
treatment whose printed matrices give the opposite ordering.
[[ex-cm09-double-pendulum-linear-modes]] treats the two-angle
small-oscillation data of the equal-arm double pendulum, with mass metric
$ml^{2}$ times the matrix with rows $(2,1)$ and $(1,1)$ and stiffness
$mgl\,\mathrm{diag}(2,1)$, with the slow
same-side mode $\sqrt{(g/l)(2-\sqrt2)}$ and the fast opposite-side mode
$\sqrt{(g/l)(2+\sqrt2)}$. [[ex-cm09-degenerate-oscillator-subspace]] exhibits
a doubly degenerate model in which every direction is a mode, the modal
basis is not intrinsic, and the coupling of the two-mass example splits the
double frequency. [[ex-cm09-unstable-quadratic-mode]] computes the inverted
pendulum's negative stiffness $-mgl$, the exponential quadratic motions and,
through the hyperbolic-saddle theorem, the nonlinear instability of the
upward equilibrium.

The approximation statements are checked on explicit data.
[[ex-cm09-forced-resonant-mode-check]] drives the two-mass chain along its
in-phase pattern: resonance occurs exactly at $\omega_{+}=\sqrt{k/m}$ with a
linearly growing mode-shaped motion, while at $\omega_{-}=\sqrt{(k+2c)/m}$
the drive is non-resonant with steady amplitude $|F|/(2c)$.
[[ex-cm09-weak-damping-averaging-check]] evaluates the averaging constants
$M=3\sqrt2/2$, $L=\sqrt2$, $K=2\pi(3\sqrt2+6)e^{\sqrt2/2}$ and verifies the
smallness and trapping hypotheses for $m=k=\gamma=1$, $\varepsilon=10^{-4}$,
concluding that the mechanical energy tracks $e^{-t/10^{4}}$ within
$2.63\times10^{-2}$ J on $[0,5000\,\mathrm s]$, with amplitude unit $1\,\mathrm m\,\mathrm s^{-1/2}$ and $A=1/2\,\mathrm s$. [[ex-cm09-cubic-potential-error-check]]
computes the exact quadratic remainder of a cubic potential and the explicit
constants $C=|\lambda|/(2m)$, $L=\max(1,(k+|\lambda|r/2)/m)$ in the explicitly normalized metre/second phase coordinates, checks the
finite-time bound on a numerical instance and records the exactly linear
case $\lambda=0$.
