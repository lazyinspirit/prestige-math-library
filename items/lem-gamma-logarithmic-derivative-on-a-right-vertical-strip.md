---
dependency_level: 0
id: lem-gamma-logarithmic-derivative-on-a-right-vertical-strip
kind: lemma
title: An explicit right-strip bound for the Gamma logarithmic derivative
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-gamma-weierstrass-product
- thm-euler-mascheroni-constant-and-harmonic-asymptotic
- thm-weierstrass-convergence-holomorphic-functions
- cor-gamma-function-has-no-zeros
- thm-monotonicity-of-the-integral
- thm-logarithm-derivative-and-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: 'No additional choice is used: finite product differentiation, an explicitly normally convergent
  scalar series, and explicit harmonic/tail estimates suffice.'
sources:
  references:
  - title: A. R. Weiss, The least prime ideal, §1 equations(1.3)–(1.5)
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: Printed58–59, actual225-page scan physical63–64; formulation only, complete argument is reconstructed
      below from proved local suppliers.
  - title: K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture6§3
    url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf
    locator: Reciprocal-Gamma product; the exact scalar inequality below is derived locally from the actual
      proved local Gamma-product and harmonic-sum suppliers, with no external theorem import.
---

## Statement

Let $\psi(z)=\Gamma'(z)/\Gamma(z)$. On $\operatorname{Re}z>0$,
$$\psi(z)=-\gamma-\frac1z+\sum_{m=1}^\infty\left(\frac1m-\frac1{m+z}\right),$$
with absolute local uniform convergence. In particular, for every real $x,y$ with $1/2\le x\le2$,
$$\operatorname{Re}\psi(x+iy)\le\log(|y|+3)+3.$$
The numerical constant is independent of $x,y$ and of every number field or character.

## Facts & Assumptions

**Given:** The complex Gamma function and the stated right-strip parameters.

[F1] Reciprocal Gamma has the locally uniformly convergent product $\Gamma(z)^{-1}=ze^{\gamma z}\prod_{m\ge1}(1+z/m)e^{-z/m}$; Gamma is nonzero away from its poles. [[thm-gamma-weierstrass-product]] [[cor-gamma-function-has-no-zeros]]

[F2] Locally uniform holomorphic convergence implies locally uniform convergence of derivatives. [[thm-weierstrass-convergence-holomorphic-functions]]

[F3] The harmonic differences $H_m-\log m$ decrease from $1$ to $\gamma\in(0,1)$; in particular $H_m\le1+\log m$. [[thm-euler-mascheroni-constant-and-harmonic-asymptotic]]

[F4] Monotonicity compares a nonnegative decreasing integrand with its rectangle sums, and $\log x=\int_1^x du/u$. [[thm-monotonicity-of-the-integral]] [[thm-logarithm-derivative-and-integral]]

## Proof

**Given:** The data in the Statement.

1.1 The finite products in [F1] and their derivatives converge locally uniformly by [F2]. On each compact subset of the right half-plane their nonzero limit $1/\Gamma$ is bounded away from zero, so the logarithmic derivatives converge there. Differentiating each finite product gives $-\psi(z)=1/z+\gamma+\sum_{m\ge1}(1/(m+z)-1/m)$. The summands of the asserted series have absolute value $|z|/(m|m+z|)=O_K(m^{-2})$ on each compact set $K$, proving absolute local uniform convergence as well as the identity. [F1, F2, given, algebra]

2.1 Write $Y=|y|$ and choose the explicit integer $M=\lceil Y\rceil+2\ge2$. The real part of the $m$th summand in step 1.1 is $1/m-(m+x)/((m+x)^2+y^2)\le1/m$. Because $\gamma>0$ and $\operatorname{Re}(1/z)>0$ on this strip, their two negative terms can be dropped from an upper bound. The first $M$ summands are therefore at most $H_M\le1+\log M\le1+\log(Y+3)$ by [F3]. [F3, step 1.1, algebra, choose]

3.1 For $m>M$, the same real summand equals $[x(m+x)+y^2]/[m((m+x)^2+y^2)]$, which is nonnegative and at most $2m^{-2}+(4+Y^2)m^{-3}$ since $0<x\le2$. By [F4], $\sum_{m>M}m^{-2}\le1/M$ and $\sum_{m>M}m^{-3}\le1/(2M^2)$, obtained by comparison on each interval $[m-1,m]$ and taking the convergent antiderivative limits. Its tail is consequently at most $2/M+(4+Y^2)/(2M^2)\le2$, using $M\ge2$ and $Y<M$. Adding step 2.1 gives the asserted $\log(Y+3)+3$ bound, including $y=0$ and both strip endpoints. [F4, step 1.1, step 2.1, algebra] ∎
