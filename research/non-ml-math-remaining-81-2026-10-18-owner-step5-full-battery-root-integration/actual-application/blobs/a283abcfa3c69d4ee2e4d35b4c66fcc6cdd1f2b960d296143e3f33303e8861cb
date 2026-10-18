---
id: thm-it-optimal-compact-compander-density
kind: theorem
title: Optimal point density within the compact compander class
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-it-compact-one-dimensional-compander
  - thm-it-compact-compander-high-rate-distortion
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - thm-chain-rule-for-total-derivatives
  - cor-primitives-of-a-continuous-function
  - thm-extreme-value-metric
justified_by: []
aliases: []
axiom_use: No choice principle is used.
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Robert M. Gray, Source Coding Theory, first edition
      url: https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf
      locator: Chapter 5, §5.6, printed pp. 127–128, Holder optimization of the high-rate point density.
    - title: "Robert Gallager, 6.450 Principles of Digital Communications I, Chapter 3: Quantization"
      url: https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/926689aaa62a0315473fa9b982de1b07_book_3.pdf
      locator: Appendix 3A, printed pp. 79–81, high-rate scalar quantization; this item proves the fixed-rate compact coefficient directly.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §II, printed pp. 2328–2330, Panter–Dite optimal compressor and point-density result; §IV-A, printed pp. 2344–2347, Bennett integral and compander formulation. The restricted compact optimum is proved locally here.
---

## Statement

Fix $a<b$ and a positive normalized $C^1$ source density $f$ on $[a,b]$. Among all positive normalized $C^1$ point densities $g$ used in [[def-it-compact-one-dimensional-compander]], the asymptotic coefficient from [[thm-it-compact-compander-high-rate-distortion]] is uniquely minimized by

$$g_*(x)=\frac{f(x)^{1/3}}{\int_a^bf(t)^{1/3}\,dt},$$

and the minimum limit is

$$\frac1{12}\left(\int_a^bf(x)^{1/3}\,dx\right)^3.$$

This is optimality within the stated compact compander class, not unrestricted scalar or vector quantizer optimality.

## Facts & Assumptions

**Given:** $a<b$ and a positive normalized $C^1$ density $f$ on $[a,b]$.

[F1] [[def-it-compact-one-dimensional-compander]]: an admissible point density $g$ is positive, normalized, and $C^1$ on the same compact interval.

[F2] [[thm-it-compact-compander-high-rate-distortion]]: the asymptotic coefficient for $g$ is $\frac1{12}\int_a^bf/g^2$.

[F3] [[def-real-power]] and [[thm-real-power-continuity-and-derivatives]]: for positive input, $f^{1/3}$ is defined as the positive real power and is $C^1$ with derivative $f'/(3f^{2/3})$.

[F4] [[cor-primitives-of-a-continuous-function]]: every continuous integrand on $[a,b]$ has a finite Riemann integral.

[F5] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition of differentiable Euclidean maps is the composition of their derivatives.

[F6] [[thm-extreme-value-metric]]: a continuous real function on compact $[a,b]$ is bounded and attains its extrema.

## Proof

1.1 Set $A:=\int_a^bf(x)^{1/3}\,dx$, $B(g):=\int_a^bf(x)/g(x)^2\,dx$, and $z(x):=f(x)/(B(g)g(x)^3)$. Positivity and continuity on compact $[a,b]$ make $A,B(g)$ finite and strictly positive by [F3], [F4] and [F6]. Using $\int g=1$, direct cancellation gives $\int_a^bz(x)g(x)\,dx=1$ and $\int_a^bz(x)^{1/3}g(x)\,dx=A/B(g)^{1/3}$. [given, F1, F3, F4, F6, algebra]

2.1 For each $x$, $z(x)+2-3z(x)^{1/3}=(z(x)^{1/3}-1)^2(z(x)^{1/3}+2)\ge0$ by the positive real-power convention [F3]. Multiply by $g(x)>0$ and integrate; step 1.1 and $\int g=1$ give $3A/B(g)^{1/3}\le3$, hence $B(g)\ge A^3$. [F3, step 1.1, algebra]

3.1 Equality $B(g)=A^3$ makes the integral of $(z^{1/3}-1)^2(z^{1/3}+2)$ against $g(x)\,dx$ equal $1+2-3A/B(g)^{1/3}=0$, by step 1.1. By [F3] the root is positive; by [F6], $g$ has a positive minimum. If the continuous integrand were positive at any point, it would be bounded below by a positive number on a one-sided or two-sided interval of positive length, so that integral would be positive. Therefore the integrand vanishes everywhere, and its factorization gives $z=1$ and $f/g^3=B(g)$ on $[a,b]$. [F3, F6, step 1.1, step 2.1, algebra]

4.1 Step 3.1 gives $g=f^{1/3}/B(g)^{1/3}$; integrating and using $\int g=1$ gives $B(g)^{1/3}=A$, hence $g=g_*$. Conversely, [F3] and [F5] show $f^{1/3}$ is positive and $C^1$, so $g_*$ is an admissible positive normalized $C^1$ density; direct substitution gives $B(g_*)=A^3$. Thus $g_*$ is the unique minimizer of the coefficient in [F2], with minimum $A^3/12$. [F1, F2, F3, F5, step 1.1, step 3.1, algebra] ∎
