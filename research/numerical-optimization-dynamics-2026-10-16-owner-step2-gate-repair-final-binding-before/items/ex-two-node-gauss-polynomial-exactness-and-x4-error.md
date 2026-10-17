---
id: ex-two-node-gauss-polynomial-exactness-and-x4-error
kind: example
title: Two-node Gauss is exact through degree three but not for x to the fourth
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps: [def-gauss-moment-data, def-gauss-quadrature-rule, thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights, thm-monic-gauss-orthogonal-polynomials-exist-uniquely, thm-ftc-second-part, lem-derivative-of-a-power]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 27, Error analysis with variational crimes
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
---

## Example

For Lebesgue measure on $[-1,1]$, the two-node Gaussian rule has nodes $\pm1/\sqrt3$ and weights $1$. The supplier theorem gives exactness through degree three, but the error on $x^4$ is $8/45$.

## Facts & Assumptions

**Given:** $a=-1$, $b=1$, $m=2$, $r=3=2m-1$, and Lebesgue measure $\mu$ on $[-1,1]$.

[F1] [[def-gauss-moment-data]]: a moment datum is a finite positive measure whose relative support contains at least $m+1$ points and whose moments through degree $2m-1$ are finite.

[F2] [[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]]: the monic degree-two polynomial $p_2$ is orthogonal to every polynomial of degree below two.

[F3] [[def-gauss-quadrature-rule]]: the nodes are the roots of $p_2$ and the weights are the integrals of their Lagrange cardinal polynomials.

[F4] [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]: the rule integrates every polynomial of degree at most $2m-1$ exactly.

[F5] [[thm-ftc-second-part]]: the integral of a continuous derivative on $[-1,1]$ is the primitive's endpoint difference.

[F6] [[lem-derivative-of-a-power]]: $(x^k)'=kx^{k-1}$ for positive integer $k$.

## Verification

1.1 Lebesgue measure is finite and positive on $[-1,1]$, every relative neighborhood of each point has positive measure, and all bounded-interval polynomial moments are finite. Thus [F1] holds. [F1, given]

1.2 Write $p_2(x)=x^2+bx+c$. Orthogonality [F2] to $1$ and $x$, using $\int_{-1}^1 1=2$, $\int x=0$, $\int x^2=2/3$, and $\int x^3=0$ as evaluated by [F5, F6], gives $2/3+2c=0$ and $2b/3=0$. Hence $p_2=x^2-1/3$, and [F3] gives nodes $\pm1/\sqrt3$. [F1, F2, F3, F5, F6, algebra]

2.1 Using the nodes from step 1.2, the corresponding cardinal polynomials are $\ell_+(x)=(x+1/\sqrt3)/(2/\sqrt3)=(1+\sqrt3x)/2$ and $\ell_-(x)=(1/\sqrt3-x)/(2/\sqrt3)=(1-\sqrt3x)/2$. By [F5, F6], their odd terms integrate to zero and their constant terms integrate to one, so [F3] gives both weights equal to $1$. [F3, F5, F6, step 1.2, algebra]

3.1 By [F4], this rule is exact for every polynomial of degree at most three. Using the nodes and weights from steps 1.2 and 2.1, its value on $x^4$ is $(1/\sqrt3)^4+(-1/\sqrt3)^4=2/9$, whereas [F5, F6] give $\int_{-1}^1x^4dx=2/5$. The absolute error is $2/5-2/9=8/45$. [F4, F5, F6, step 1.2, step 2.1, algebra] ∎
