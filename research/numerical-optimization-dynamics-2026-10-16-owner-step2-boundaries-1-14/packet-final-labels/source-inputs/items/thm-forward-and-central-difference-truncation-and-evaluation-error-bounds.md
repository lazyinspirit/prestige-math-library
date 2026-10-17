---
id: thm-forward-and-central-difference-truncation-and-evaluation-error-bounds
kind: theorem
title: "Forward and central differences have first- and second-order error bounds"
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
dependency_level: 1
---

## Statement

Let $I\subseteq\mathbb R$ be open, $x\in I$, and $h>0$. For the forward bound assume $[x,x+h]\subset I$, $f\in C^2$ on a neighborhood of that interval, and $|f''(y)|\le M_2$ there. For the central bound assume $[x-h,x+h]\subset I$, $f\in C^3$ on a neighborhood of that interval, and $|f'''(y)|\le M_3$ there. Then

$$|D_h^+f(x)-f'(x)|\le \frac{M_2h}{2},\qquad |D_h^0f(x)-f'(x)|\le \frac{M_3h^2}{6}.$$

If each function evaluation has absolute error at most $\delta\ge0$ as in [[def-finite-difference-stencils-and-evaluation-error-model]], then

$$|\widehat D_h^+f(x)-f'(x)|\le \frac{M_2h}{2}+\frac{2\delta}{h},\qquad |\widehat D_h^0f(x)-f'(x)|\le \frac{M_3h^2}{6}+\frac{2\delta}{h}.$$

For the central stencil the evaluation contribution is in fact at most $\delta/h$; the displayed $2\delta/h$ is a uniform conservative bound for both stencils.

## Facts & Assumptions

**Given:** The interval, step, smoothness, derivative bounds and evaluation-error hypotheses in the statement.

[F1] [[def-finite-difference-stencils-and-evaluation-error-model]]: $D_h^+f(x)=(f(x+h)-f(x))/h$ and $D_h^0f(x)=(f(x+h)-f(x-h))/(2h)$; each inexact value is $f(y)+e_y$ with $|e_y|\le\delta$.

[F2] [[cor-taylor-lagrange-and-cauchy-remainders]] and [[def-taylor-polynomial-and-remainder]]: for a $C^{n+1}$ function on the interval, $f(y)$ is its degree-$n$ Taylor polynomial at $a$ plus $f^{(n+1)}(\xi)(y-a)^{n+1}/(n+1)!$ for some intermediate $\xi$.

[F3] [[def-abs-value]] and [[lem-of-abs-value]]: absolute value is nonnegative, and $|{-}r|=|r|$ for real $r$.

[F4] [[lem-of-triangle-inequality]]: $|r+s|\le|r|+|s|$ for real $r,s$.

## Proof

**Given:** The hypotheses listed above.

1.1 Apply [F2] with $n=1$, $a=x$, and $y=x+h$. Then $f(x+h)=f(x)+hf'(x)+h^2f''(\xi)/2$ for some $\xi\in(x,x+h)$. Substituting into [F1] gives $D_h^+f(x)-f'(x)=hf''(\xi)/2$, so the forward truncation bound follows. [given, F1, F2, algebra]

1.2 Apply [F2] with $n=2$ to $y=x+h$ and $y=x-h$. Subtracting the two expansions cancels the equal even-order terms and gives $D_h^0f(x)-f'(x)=h^2(f'''(\xi_+)+f'''(\xi_-))/12$ for intermediate points $\xi_+\in(x,x+h)$ and $\xi_-\in(x-h,x)$. The derivative bound and [F3]–[F4] give magnitude at most $M_3h^2/6$. [given, F1, F2, F3, F4, algebra]

2.1 Write the forward evaluation errors as $e_+=e_{x+h}$ and $e_0=e_x$. By [F1], $\widehat D_h^+-D_h^+=(e_+-e_0)/h$; [F3]–[F4] bound its magnitude by $2\delta/h$. The triangle inequality with step 1.1 proves the forward inexact bound. [given, F1, F3, F4, step 1.1, algebra]

3.1 Write the central errors as $e_+=e_{x+h}$ and $e_-=e_{x-h}$. Then $\widehat D_h^0-D_h^0=(e_+-e_-)/(2h)$, whose magnitude is at most $\delta/h$ by [F1], [F3] and [F4], hence at most $2\delta/h$. Combining with step 1.2 proves the stated central inexact bound. [given, F1, F3, F4, step 1.2, algebra] ∎
