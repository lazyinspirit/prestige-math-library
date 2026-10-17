---
id: lem-na-chebyshev-integral-moments
kind: lemma
title: "Exact integrals of Chebyshev polynomials"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 1
deps: [def-chebyshev-polynomials-first-and-second-kind, lem-na-chebyshev-recurrence-angle-identity, thm-monotone-change-of-variable-for-riemann-integrals, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-derivatives, thm-ftc-second-part, thm-quarter-turn-values-and-shift-formulas, thm-continuous-implies-integrable, thm-sine-cosine-signs-monotonicity-and-ranges, thm-induction-principle, def-integer-power]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The substitution and finite trigonometric calculation are choice-free.
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.4.1"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed p. 236, Chebyshev-node quadrature."
    - title: "Lloyd N. Trefethen, Is Gauss Quadrature Better than Clenshaw–Curtis?, §2"
      url: "https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf"
      locator: "Printed pp. 69–70, Chebyshev nodes and integrated Chebyshev coefficients."
---

## Statement

For every integer $k\ge0$, let $\mu_k:=\int_{-1}^{1}T_k(x)\,dx$, where $T_k$ is the first-kind Chebyshev polynomial. Then
$$\mu_k=\begin{cases}2,&k=0,\\0,&k\text{ odd},\\[2pt]\dfrac{2}{1-k^2},&k\ge2\text{ even}.\end{cases}$$
Equivalently, $\mu_{2r}=2/(1-4r^2)$ for every integer $r\ge0$.

## Facts & Assumptions

**Given:** An integer $k\ge0$ and the polynomial $T_k$ of [[def-chebyshev-polynomials-first-and-second-kind]].

[A1] $k$ is a nonnegative integer.

[F1] [[lem-na-chebyshev-recurrence-angle-identity]]: $T_k(\cos\theta)=\cos(k\theta)$ for every real $\theta$.

[F2] [[thm-monotone-change-of-variable-for-riemann-integrals]]: a monotone differentiable bijection with integrable derivative changes a Riemann integral by the absolute derivative.

[F3] [[thm-sine-cosine-signs-monotonicity-and-ranges]] and [[thm-sine-and-cosine-derivatives]]: $\cos$ decreases on $[0,\pi]$, $\sin\theta\ge0$ there, and $(\cos\theta)'=-\sin\theta$.

[F4] [[def-chebyshev-polynomials-first-and-second-kind]] and [[thm-continuous-implies-integrable]]: $T_k$ is a continuous polynomial and is Riemann-integrable on $[-1,1]$.

[F5] [[thm-sine-and-cosine-addition-formulas]]: $\sin u\cos v=\frac12(\sin(u+v)+\sin(u-v))$.

[F6] [[thm-sine-and-cosine-derivatives]] and [[thm-ftc-second-part]]: an antiderivative of $\sin(m\theta)$ for nonzero integer $m$ is $-\cos(m\theta)/m$.

[F7] [[thm-quarter-turn-values-and-shift-formulas]] and [[thm-induction-principle]]: induction using the shift by $\pi$ gives $\cos(m\pi)=(-1)^m$ for natural $m\ge0$.

## Proof

1.1 Fix the integer $k$ in [A1]. The map $\theta\mapsto\cos\theta$ is a decreasing differentiable bijection from $[0,\pi]$ to $[-1,1]$ with derivative $-\sin\theta$; [F2]–[F4] verify the change-of-variable hypotheses. Therefore [F1]–[F4] give $\mu_k=\int_0^\pi T_k(\cos\theta)\sin\theta\,d\theta=\int_0^\pi\cos(k\theta)\sin\theta\,d\theta.$ [given, A1, F1, F2, F3, F4, algebra]

2.1 For the nonnegative integer $k$ in [A1], the case $k=0$ gives $\mu_0=\int_0^\pi\sin\theta\,d\theta=2$ by step 1.1. For $k\ge1$, [F5] gives $\sin\theta\cos(k\theta)=\frac12(\sin((k+1)\theta)-\sin((k-1)\theta))$. [F6]–[F7] evaluate each nonzero-frequency sine integral; the $m=0$ term is identically zero. [given, A1, F5, F6, F7, step 1.1, algebra]

3.1 If $k$ is odd, both positive integers among $k-1$ and $k+1$ are even, so [F6]–[F7] and step 2.1 give $\mu_k=0$. If $k\ge2$ is even, both $k-1$ and $k+1$ are odd, so they give $\mu_k=1/(k+1)-1/(k-1)=2/(1-k^2)$. Together with the $k=0$ case, this proves the formula. [given, F6, F7, step 2.1, algebra] ∎
