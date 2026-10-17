---
id: lem-composite-midpoint-panel-error-kernel
kind: lemma
title: Midpoint panel error kernel and second-derivative bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-higher-derivatives-and-smoothness
  - thm-integration-by-parts
  - thm-additivity-over-subintervals
  - thm-linearity-of-the-integral
  - thm-monotonicity-of-the-integral
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-heine-borel-r
  - thm-extreme-value-r
  - thm-ftc-second-part
  - thm-algebra-of-continuous-functions
  - thm-chain-rule
  - lem-derivative-of-a-power
  - thm-algebra-of-derivatives
justified_by: []
proof_strategy: direct
axiom_use: None. The argument uses finite interval integration and no choice principle.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 7, §7.1
      url: https://artowen.su.domains/mc/Ch-quadrature.pdf
      locator: Theorem 7.1 and its full proof, printed pp. 5–6
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6
      url: https://fncbook.com/integration/
      locator: Complete online section read; §§5.6.1–5.6.4
---

## Statement

Let $a<b$, $m=(a+b)/2$, and $f\in C^2([a,b])$ in the sense of
[[def-higher-derivatives-and-smoothness]]. Define

$$K(t)=\begin{cases}\frac12(t-a)^2,&a\le t\le m,\\\frac12(b-t)^2,&m\le t\le b.\end{cases}$$

Then $K$ is nonnegative and continuous,

$$\int_a^b f(t)\,dt-(b-a)f(m)=\int_a^b K(t)f''(t)\,dt,$$

and, with $M_2:=\max_{t\in[a,b]}|f''(t)|$,

$$\left|\int_a^b f(t)\,dt-(b-a)f(m)\right|\le\frac{(b-a)^3}{24}M_2.$$

In particular, if $f''\ge0$ on $[a,b]$, the panel midpoint value does not
exceed the integral.

## Facts & Assumptions

**Given:** Reals $a<b$ and $f\in C^2([a,b])$.

[F1] [[def-higher-derivatives-and-smoothness]]: $C^2([a,b])$ means that $f$,
$f'$, and $f''$ are continuous on the closed interval, with endpoint
derivatives interpreted from within the interval.

[F2] [[thm-integration-by-parts]]: for differentiable $u,v$ with integrable
derivatives, $\int u v'=[uv]-\int u'v$ on a closed interval.

[F3] [[thm-additivity-over-subintervals]]: an integrable function's integral
over two adjacent intervals is the sum of the two integrals.

[F4] [[thm-continuous-on-a-rectangle-is-riemann-integrable]]: every continuous
real function on a closed nondegenerate rectangle in $\mathbb R^q$, $q\ge1$,
is Riemann integrable; here $q=1$ and the rectangle is $[a,b]$.

[F5] [[thm-heine-borel-r]]: the closed interval $[a,b]$ is compact.

[F6] [[thm-extreme-value-r]]: a continuous real function on a nonempty compact
subset of $\mathbb R$ attains its maximum and minimum.

[F7] [[thm-monotonicity-of-the-integral]]: pointwise order between integrable
functions on an increasing interval gives the same order between their
integrals.

[F8] [[thm-linearity-of-the-integral]]: the integral of a scalar multiple of
an integrable function is the same scalar multiple of its integral.

[F9] [[thm-ftc-second-part]]: if $G$ is differentiable on $[a,b]$, $G'=g$,
and $g$ is integrable, then $\int_a^b g=G(b)-G(a)$.

[F10] [[thm-algebra-of-continuous-functions]]: constants and the identity are
continuous; sums, scalar multiples and products preserve continuity, so every
polynomial function and its product with $f''$ are continuous on each interval
where the polynomial formula for $K$ applies.

[F11] [[thm-chain-rule]]: the derivative of a differentiable composition is
the outer derivative at the image multiplied by the inner derivative.

[F12] [[lem-derivative-of-a-power]]: $(x^k)'=kx^{k-1}$ for each integer
$k\ge1$.

[F13] [[thm-algebra-of-derivatives]]: derivatives of sums and scalar multiples
are the corresponding sums and scalar multiples of the derivatives.

## Proof

1.1 By [F1], $f''$ is continuous and $[a,b]$ is compact by [F5], so [F6] gives the finite maximum $M_2=\max_{[a,b]}|f''|$. Each formula for $K$ is polynomial and hence continuous by [F10]; the two formulas agree at $m$, so $K$ is continuous on $[a,b]$ and nonnegative on both halves. Thus $Kf''$ is continuous by [F10], and $f$, $K$, $Kf''$, and their restrictions are integrable by [F4]. [given, F1, F4, F5, F6, F10, construct]

2.1 On $[a,m]$, $K(a)=K'(a)=0$, $K(m)=(b-a)^2/8$, $K'(m)=(b-a)/2$, and $K''=1$ inside; applying [F2] first to $u=K,v=f'$ and then to $u=K',v=f$ gives $\int_a^m Kf''=K(m)f'(m)-K'(m)f(m)+\int_a^m f$, with all hypotheses valid because $K$ is polynomial on this half and $f\in C^2$. [given, F1, F2, F4, step 1.1]

2.2 On $[m,b]$, $K(b)=K'(b)=0$, $K(m)=(b-a)^2/8$, $K'(m)=-(b-a)/2$, and $K''=1$ inside; the same two applications of [F2] give $\int_m^b Kf''=-K(m)f'(m)+K'(m)f(m)+\int_m^b f$. [given, F1, F2, F4, step 1.1]

3.1 Adding steps 2.1 and 2.2 cancels the $f'(m)$ terms, sums the $f(m)$ terms to $-(b-a)f(m)$, and by additivity [F3] yields $\int_a^b Kf''=\int_a^b f-(b-a)f(m)$. [step 2.1, step 2.2, F3, algebra]

4.1 The chain rule [F11], power rule [F12], and scalar rule [F13] show that $(t-a)^3/6$ is an antiderivative of the left formula for $K$, and $-(b-t)^3/6$ is an antiderivative of the right formula. The FTC [F9] therefore gives $\int_a^mK=(m-a)^3/6=(b-a)^3/48$ and $\int_m^bK=(b-m)^3/6=(b-a)^3/48$; additivity [F3] gives $\int_a^bK=(b-a)^3/24$. Since $0\le K$ and $|f''|\le M_2$, one has $-M_2K\le Kf''\le M_2K$; monotonicity [F7] and linearity [F8] give $|\int_a^bKf''|\le M_2\int_a^bK=M_2(b-a)^3/24$, and if $f''\ge0$ they also give $\int_a^bKf''\ge0$. Step 3.1 transfers the bound and sign to the midpoint error. [step 1.1, step 3.1, F3, F4, F7, F8, F9, F11, F12, F13, algebra] ∎
