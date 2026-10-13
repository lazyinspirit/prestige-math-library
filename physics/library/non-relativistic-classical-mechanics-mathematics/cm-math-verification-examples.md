---
page: cm-math-verification-examples
title: Cm Math Verification — Examples
status: published
items: []
examples:
  - ex-cm-oscillator-saddle-second-variation-checks
  - ex-cm-oscillator-boundary-value-nonuniqueness-check
  - ex-cm-parallel-axis-two-point-masses
  - ex-cm-two-mass-modes-numerical-check
  - ex-cm-pendulum-linearization-error-check
requires:
  - cm-math-verification
  - cm-math-variations
  - cm-math-rigid
  - cm-math-approximation
---

The companion page to [[cm-math-verification]] records explicit finite checks
of its results. Everything here is mathematics: the examples carry
`domain: mathematics`, depend only on the mathematical items of the parent page
and on mathematical suppliers, and make no physical or empirical claim. No
measurement, simulation or numerical integration is involved; the displayed
values and bounds are exact expressions, including square roots, multiples of
$\pi$, polynomials in the stated parameters, and exponential expressions.

[[ex-cm-oscillator-saddle-second-variation-checks]] evaluates the oscillator
second variation at $\omega=1$, $T=2\pi$ for the variations $\sin(t/2)$ and
$\sin(3t/2)$: the values $-3\pi/4$ and $5\pi/4$ and the exact action values
$-3\pi\varepsilon^2/8<0<5\pi\varepsilon^2/8$ exhibit the saddle of the
stationary zero curve, with the defining integrals also evaluated directly as a
check.

[[ex-cm-oscillator-boundary-value-nonuniqueness-check]] exhibits the two
distinct solutions $\sin t$ and $2\sin t$ of $x''+x=0$ with the same zero
endpoints at $T=\pi$, and shows that every member $A\sin t$ of the
one-dimensional solution family has the same action value $0$.

[[ex-cm-parallel-axis-two-point-masses]] computes, for
$\nu=m\delta_{re_3}+m\delta_{-re_3}$, both the inertia matrix
$\mathrm{diag}(2mr^2,2mr^2,0)$ about the origin and the inertia tensor
$\mathrm{diag}(2m(r^2+c^2),2m(r^2+c^2),0)$ about $ce_3$, twice: once from the
definition and once through the parallel-axis identity of
[[thm-cm-parallel-axis-theorem]].

[[ex-cm-two-mass-modes-numerical-check]] checks the eigenrelations
$Ku_+=u_+$, $Ku_-=7u_-$ of the two-mass system at $k=1$, $c=3$, verifies the
mode solution $\cos(t)u_++\cos(\sqrt7\,t)u_-$ by differentiation, and exhibits
the unbounded affine motion $(1+t)u_+$ of the degenerate case $k=0$, $c=1$.

[[ex-cm-pendulum-linearization-error-check]] instantiates the pendulum bound
at $g=l=1$, $r=1/2$, $\delta=1/100$, $T=1$: the smallness condition
$\delta e^{LT}<r$ follows from $2<e<3$, and the error is bounded by
$(e^{2t}-e^{t})/(12\cdot10^4)$ on $[0,1]$, with the pointwise remainder checks
$\lvert\sin\theta-\theta\rvert\le1/48$ and $\lvert\sin\theta\rvert\le1/2$ on
the ball.
