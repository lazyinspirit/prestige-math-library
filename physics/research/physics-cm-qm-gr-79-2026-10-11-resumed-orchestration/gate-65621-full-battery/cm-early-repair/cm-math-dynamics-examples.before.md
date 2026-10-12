---
page: cm-math-dynamics-examples
title: Cm Math Dynamics — Examples
status: draft
items: []
examples: [ex-cm-flow-of-a-linear-system-is-the-matrix-exponential, ex-cm-coupled-oscillator-modes, ex-cm-planar-harmonic-oscillator-return-map, ex-cm-bilateral-shift-finite-checks, ex-cm-jordan-block-dichotomy-computed, cex-cm-nonhyperbolic-equilibria-defeat-exponential-conclusions]
requires: ["cm-math-dynamics","finite-probability-and-the-probabilistic-method","the-exponential-function"]
---

The companion page to [[cm-math-dynamics]] records explicit worked checks and
one counterexample for its flow, shift, dichotomy and modal results. Everything
here is mathematics: the examples carry `domain: mathematics`, depend only on
the mathematical items of the parent page and on mathematical suppliers, and
make no physical or empirical claim.

[[ex-cm-flow-of-a-linear-system-is-the-matrix-exponential]] solves the linear
field $F(x)=Ax$ in closed form: $\Phi(t,a)=e^{tA}a$ on
$\Omega=\mathbb R\times\mathbb R^n$, the composition law, and the variational
equation $Y'=AY$ with $Y(t)=e^{tA}$.
[[ex-cm-coupled-oscillator-modes]] computes the modes of two coupled equal
masses, with frequencies $\sqrt{k/m}$ and $\sqrt{(k+2c)/m}$ and the free affine
zero mode when $k=0$; [[ex-cm-planar-harmonic-oscillator-return-map]] computes
the Poincaré map of the isotropic planar oscillator on the section $y=0$ as the
reflection $P(x,0)=(-x,0)$.
[[ex-cm-bilateral-shift-finite-checks]] evaluates the shift metric, a periodic
point in a prescribed cylinder, a sensitivity witness and a mixing computation
with the explicit threshold $N=2$. [[ex-cm-jordan-block-dichotomy-computed]]
computes the dichotomy constants $C=1$, $c=1/2$ for a non-diagonalisable
Jordan block and $C=1$, $c=1/4$ for a diagonal sink-source.
[[cex-cm-nonhyperbolic-equilibria-defeat-exponential-conclusions]] is the
counterexample $x'=x^3$: the linearisation vanishes at the equilibrium and the
equilibrium is unstable, so a zero-real-part eigenvalue cannot replace the
hyperbolicity hypotheses of the dichotomy theorems.
