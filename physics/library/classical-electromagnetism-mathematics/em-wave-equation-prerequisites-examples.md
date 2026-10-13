---
page: em-wave-equation-prerequisites-examples
title: Em Wave Equation Prerequisites — Examples
status: published
items: []
examples: [ex-em-wave-equation-prerequisites-source-and-support-boundaries]
---

The companion page records three explicit mathematical checks of the hypotheses
of the wave Cauchy theorem [[thm-em-wave-cauchy-kirchhoff]]; it carries `domain:
mathematics`, inherits the Axiom of Countable Choice $\mathrm{AC}_\omega$ from
that theorem and its suppliers, and makes no empirical claim.

[[ex-em-wave-equation-prerequisites-source-and-support-boundaries]] specialises
the displayed solution formula in three directions. First, the spatially
constant source $h\equiv1$ with zero data gives the solution $u=c^2t^2/2$, a
nonzero spatial constant on every slice $t>0$: the fixed-compact-set hypothesis
of the compact-support clause cannot be dropped, and the constant source is
also outside the per-slice compact-support class of the published Duhamel
principle [[thm-wave-duhamel-principle]]. Second, a source supported in the
closed unit ball propagates with the explicit bound $|x|>1+ct$, exhibiting the
theorem's support estimate directly from the sphere integrals. Third, the linear
velocity datum $b(x)=x_1$ produces the smooth solution $u=(t-t_0)x_1$, which is
unbounded on every slice $t>t_0$ and whose total energy in the sense of
[[def-wave-energy-and-energy-flux]] is $+\infty$; it therefore lies outside the
finite-initial-energy hypothesis of the energy-uniqueness corollary
[[cor-energy-uniqueness-for-the-wave-cauchy-problem]] while the theorem's local
$C^2$ uniqueness still applies to it.
