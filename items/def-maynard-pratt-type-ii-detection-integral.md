---
id: def-maynard-pratt-type-ii-detection-integral
kind: definition
title: "The Maynard–Pratt Type II detection integral"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-countable-choice
  - def-natural-logarithm
  - def-real-power
  - def-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-euler-gamma-function
  - thm-gamma-meromorphic-continuation
  - thm-stirling-formula-gamma
  - def-number-theoretic-mobius-function
  - thm-riemann-zeta-meromorphic-continuation
  - def-riemann-zeta-zero-counting
  - lem-riemann-zeta-linear-growth-on-critical-line
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Maynard and Pratt, Half-Isolated Zeros and Zero-Density Estimates, Definition 22 and Appendix C"
      url: "https://arxiv.org/pdf/2206.11729v2"
---

## Definition

Assume countable choice. Let $T\ge2$, let $\rho=\beta+i\gamma$ be a nontrivial zero of the meromorphic Riemann zeta function with $0<\beta<1$ and $\gamma\in[T,2T]$, and set $\alpha:=\tfrac12-\beta$. Define
$$M_T(w):=\sum_{\substack{m\in\mathbb Z_{>0}\\m\le2T^{1/100}}}\mu(m)m^{-w},\qquad m^{-w}:=\exp(-w\log m),$$
and use $T^{w/2}:=\exp((w/2)\log T)$. Define the normalized detection integral by
$$I_T(\rho):=\frac1{2\pi}\int_{-\infty}^{\infty}T^{(\alpha+iu)/2}\Gamma(\alpha+iu)M_T(\rho+\alpha+iu)\zeta(\rho+\alpha+iu)\,du,$$
where the integral is the absolutely convergent improper integral. If $\beta=\tfrac12$, the integrand at $u=0$ is assigned its removable value: the zero of $\zeta$ at $\rho$ cancels the simple pole of $\Gamma$ at $0$.

## Definition references

[Maynard and Pratt, Definition 22 and Appendix C](https://arxiv.org/pdf/2206.11729v2)

## Facts & Assumptions

**Given:** Countable choice, $T\ge2$, and a nontrivial zero $\rho=\beta+i\gamma$ with $0<\beta<1$ and $\gamma\in[T,2T]$.

[A1] [[def-countable-choice]]: For every sequence of nonempty sets, a choice function for the whole sequence exists.

[F1] [[lem-riemann-zeta-linear-growth-on-critical-line]] gives $|\zeta(\tfrac12+it)|\le2+2|t|$ for every real $t$.

[F2] [[thm-gamma-meromorphic-continuation]] gives simple poles of $\Gamma$ at the nonpositive integers.

[F3] [[thm-stirling-formula-gamma]] gives the asymptotic $\Gamma(z)=\sqrt{2\pi}z^{z-1/2}e^{-z}(1+O_\delta(|z|^{-1}))$ in every closed sector $|\arg z|\le\pi-\delta$.

[F4] Under countable choice, [[thm-riemann-zeta-meromorphic-continuation]] makes $\zeta$ holomorphic away from $1$, and the given $\rho$ is a zero, so $\zeta(\rho)=0$.

[F5] [[def-number-theoretic-mobius-function]] gives $|\mu(m)|\le1$ for positive integers $m$.

[F6] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] gives $|\exp(iv)|=1$ for real $v$.

## Verification

1.1 On the line of integration, $\operatorname{Re}(\rho+\alpha+iu)=1/2$. By [F1], $\zeta(\rho+\alpha+iu)$ grows at most linearly in $|u|$. By [F5] and [F6], the finite sum $M_T(\rho+\alpha+iu)$ is bounded in $u$ by $\sum_{m\le2T^{1/100}}m^{-1/2}$; also $|T^{(\alpha+iu)/2}|=T^{\alpha/2}$. For $|u|\ge1$, $z=\alpha+iu$ lies in a fixed closed sector away from the negative real axis. The estimate [F3] gives $|\Gamma(\alpha+iu)|\le C_\alpha(1+|u|)^{A_\alpha}e^{-\pi|u|/2}$ for suitable constants, so the integrand is bounded by an integrable exponential times a polynomial. [given, F1, F3, F5, F6, algebra]

1.2 On bounded $u$-intervals, $\zeta$ is holomorphic on the line $\operatorname{Re}s=1/2$. If $\beta\ne1/2$, then $-1/2<\alpha<1/2$ and [F2] gives no Gamma pole on the line. If $\beta=1/2$, then $\alpha=0$ and the only Gamma pole on the line is at $u=0$; [A1, F4] shows the zeta factor has a zero there, so the product has a removable singularity. Thus the integrand is locally bounded after the stated extension. [given, A1, F2, F4, algebra]

2.1 The tail estimate in step 1.1 and local boundedness in step 1.2 prove absolute convergence of the displayed improper integral, so $I_T(\rho)$ is well-defined. [step 1.1, step 1.2, algebra] ∎
