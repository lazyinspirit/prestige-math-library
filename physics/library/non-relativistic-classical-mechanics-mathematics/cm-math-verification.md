---
page: cm-math-verification
title: Cm Math Verification
status: draft
items:
  - def-cm-second-variation-of-the-action
  - lem-cm-second-variation-formula
  - prop-cm-oscillator-second-variation-signs
  - prop-cm-oscillator-boundary-value-nonuniqueness
  - def-cm-inertia-tensor-about-a-point
  - lem-cm-inertia-tensor-about-a-point-is-finite
  - thm-cm-parallel-axis-theorem
  - prop-cm-two-mass-spring-modes
  - prop-cm-pendulum-small-angle-linearization-bound
  - rem-cm-verification-scope-and-limits
examples: []
requires:
  - cm-math-approximation
  - cm-math-rigid
  - cm-math-variations
  - darboux-lhopital-and-taylor
---

The verification layer of the non-relativistic classical mechanics
collection, all of it mathematics: the second variation of a time-dependent
action and its oscillator saddle, the non-uniqueness of the zero-endpoint
Dirichlet problem, the measure-theoretic parallel-axis theorem, the explicit
normal modes of two coupled oscillators, and the finite-time small-angle error
bound for the pendulum. Every item carries `domain: mathematics` and depends
only on mathematical suppliers; nothing here asserts that a physical system is
described by these models, that any unit convention holds, or that any
parameter is measured. The classical-mechanics readings belong to the consuming
physics pages, which add their own postulates and empirical qualifications.

**Second variation of an action.** [[def-cm-second-variation-of-the-action]]
defines the fixed-endpoint family $q+\varepsilon\eta$ and the second derivative
$\delta^2S(q)[\eta,\eta]$; [[lem-cm-second-variation-formula]] proves that the
family is twice differentiable and identifies the second derivative with the
integral of the Hessian quadratic form of the Lagrangian along the family, so
the definition is a well-defined real number. Both items sit over the chart and
first-variation conventions of [[def-cm-time-dependent-lagrangian-and-action]]
and [[lem-cm-first-variation-formula]].

**The oscillator saddle and Dirichlet endpoint degeneracy.**
[[prop-cm-oscillator-second-variation-signs]] computes
$\delta^2S(q_0)[\eta_n,\eta_n]=\frac T2((n\pi/T)^2-\omega^2)$ for the variations
$\eta_n=\sin(n\pi t/T)$ of the zero curve of $\mathcal L=\frac12(v^2-\omega^2q^2)$
and shows that for $T>\pi/\omega$ both signs occur among arbitrarily small
variations, so the stationary zero curve is neither a local minimiser nor a
local maximiser, while at $T=\pi/\omega$ the second-variation value in
direction $\eta_1$ is zero. More generally,
[[prop-cm-oscillator-boundary-value-nonuniqueness]] proves that the
Dirichlet problem with zero endpoints has nonzero solutions exactly for
$T=n\pi/\omega$ with an integer $n\ge1$; in each such case its solution
space is $\{A\sin(\omega t):A\in\mathbb R\}$, although every initial-value
problem is uniquely solvable.

**Parallel-axis theorem.** [[def-cm-inertia-tensor-about-a-point]] extends the
measure-theoretic inertia matrix of [[def-cm-mass-distribution-and-inertia-matrix]]
to an arbitrary reference point, [[lem-cm-inertia-tensor-about-a-point-is-finite]]
proves the entries finite with an explicit uniform bound under
$\mathrm{AC}_\omega$, and [[thm-cm-parallel-axis-theorem]] proves the centred
identity $I_\nu(a)=I(\nu)+m(\lVert a\rVert_2^2I_3-aa^{\mathsf T})$, so that the
translation behaviour that the parent definition left open is settled for
centred mass distributions.

**Two coupled oscillators.** [[prop-cm-two-mass-spring-modes]] treats
$K=\begin{pmatrix}k+c&-c\\-c&k+c\end{pmatrix}$: it identifies the orthonormal
eigenvectors $u_\pm$ with eigenvalues $k$ and $k+2c$, proves the decoupling
bijection onto two scalar oscillator equations and exhibits the exact solution
family with squared frequencies $k/m$ and $(k+2c)/m$, together with the affine
zero-frequency mode in the degenerate case $k=0$.

**The pendulum bound.** [[prop-cm-pendulum-small-angle-linearization-bound]]
verifies the hypotheses of the finite-time linearisation theorem for the field
$F(\theta,v)=(v,-\omega^2\sin\theta)$: the cubic remainder
$\lvert\sin\theta-\theta\rvert\le\lvert\theta\rvert^3/6$, the Lipschitz
constant and the operator norm, and then instantiates the order-$\delta^2$
error bound on $[0,T]$ under $\delta e^{LT}<r$. The scope sentence of that
proposition and the page remark [[rem-cm-verification-scope-and-limits]] record
that the estimate is conditional, finite-time and makes no exact-harmonicity
claim about the nonlinear pendulum.

The companion page [[cm-math-verification-examples]] records explicit finite
checks of these results: the two-sided saddle values at $T=2\pi$, the $T=\pi$
non-uniqueness with its common action value, the parallel-axis identity on two
point masses, the two-mass eigenrelations at concrete parameters, and the
pendulum error expression with its exact constants.
