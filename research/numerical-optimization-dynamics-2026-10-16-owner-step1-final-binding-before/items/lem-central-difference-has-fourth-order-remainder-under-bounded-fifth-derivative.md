---
id: lem-central-difference-has-fourth-order-remainder-under-bounded-fifth-derivative
kind: lemma
title: "A bounded fifth derivative gives the central-difference expansion required by Richardson extrapolation"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-difference-stencils-and-evaluation-error-model, cor-taylor-lagrange-and-cauchy-remainders, def-taylor-polynomial-and-remainder, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, finite differences"
      url: "https://fncbook.github.io/v1.0/localapprox/finitediffs.html"
    - title: "Andreas Buttenschoen, Introduction to Scientific Computing, Numerical Differentiation"
      url: "https://www.buttenschoen.ca/MATH551/numerical-differentiation/"
---

## Statement

Let $I\subseteq\mathbb R$ be open, let $x\in I$, and let $h>0$ with $[x-h,x+h]\subset I$. Suppose $f\in C^5$ on a neighborhood of this interval and $|f^{(5)}(y)|\le M_5$ throughout it. Then for some real $r_h$,

$$D_h^0f(x)=f'(x)+c_2h^2+r_h,\qquad c_2:=\frac{f'''(x)}6,\qquad |r_h|\le \frac{M_5h^4}{120}.$$

The same coefficient $c_2$ works for every admissible $h$ at the fixed point $x$.

## Facts & Assumptions

**Given:** The domain, smoothness and fifth-derivative bound in the statement.

[F1] [[def-finite-difference-stencils-and-evaluation-error-model]]: $D_h^0f(x)=(f(x+h)-f(x-h))/(2h)$ for $h>0$ with both stencil points in the domain.

[F2] [[cor-taylor-lagrange-and-cauchy-remainders]] and [[def-taylor-polynomial-and-remainder]]: for a $C^5$ function on the interval, the remainder after the degree-$4$ Taylor polynomial at $x$ is $f^{(5)}(\xi)(y-x)^5/5!$ at an intermediate point $\xi$.

[F3] [[def-abs-value]] and [[lem-of-abs-value]]: absolute values are nonnegative and $|{-}r|=|r|$.

[F4] [[lem-of-triangle-inequality]]: $|r+s|\le|r|+|s|$.

## Proof

**Given:** The hypotheses listed above.

1.1 Apply [F2] at $x$ to $x+h$ and $x-h$. The degree-four Taylor polynomials subtract to $2hf'(x)+h^3f'''(x)/3$, because the constant, quadratic and fourth-degree terms agree at the two endpoints. Each remainder has magnitude at most $M_5h^5/120$. [given, F2, algebra]

2.1 By [F3]–[F4], the difference of the two remainders has magnitude at most $2M_5h^5/120$. Divide the subtracted expansion by $2h$ and use [F1]: the remainder in $D_h^0f(x)$ is bounded by $M_5h^4/120$, and the cubic term becomes $f'''(x)h^2/6$. [given, F1, F3, F4, step 1.1, algebra] ∎
