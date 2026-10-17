---
id: thm-richardson-extrapolation-has-fourth-order-error-bound
kind: theorem
title: "Richardson extrapolation cancels the second-order term with a fourth-order remainder"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-richardson-extrapolation-under-a-fourth-order-remainder, def-finite-difference-stencils-and-evaluation-error-model, lem-central-difference-has-fourth-order-remainder-under-bounded-fifth-derivative, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, finite differences"
      url: "https://fncbook.github.io/v1.0/localapprox/finitediffs.html"
    - title: "Andreas Buttenschoen, Introduction to Scientific Computing, Numerical Differentiation"
      url: "https://www.buttenschoen.ca/MATH551/numerical-differentiation/"
dependency_level: 3
---

## Statement

Let $I\subseteq\mathbb R$ be open, $x\in I$, and $h>0$ with $[x-h,x+h]\subset I$. Suppose that for every $0<t\le h$ the central difference has the actual uniform expansion

$$D_t^0f(x)=f'(x)+c_2t^2+r_t,\qquad |r_t|\le Mt^4,$$

where $c_2$ and $M\ge0$ do not depend on $t$. Then the Richardson estimate of [[def-richardson-extrapolation-under-a-fourth-order-remainder]] satisfies

$$|R_hf(x)-f'(x)|\le \frac{5Mh^4}{12}.$$

In particular, under [[lem-central-difference-has-fourth-order-remainder-under-bounded-fifth-derivative]] the bound holds with $c_2=f'''(x)/6$ and $M=M_5/120$, giving $|R_hf(x)-f'(x)|\le M_5h^4/288$. If each of the four function values at $x\pm h/2$ and $x\pm h$ is evaluated as $\widehat f(y)=f(y)+e_y$ with $|e_y|\le\delta$, define $\widehat R_hf(x)$ by replacing those four values in $R_hf(x)$ by their evaluations. Then

$$|\widehat R_hf(x)-f'(x)|\le \frac{5Mh^4}{12}+\frac{3\delta}{h}.$$

## Facts & Assumptions

**Given:** The uniform expansion and evaluation-error bounds above.

[F1] [[def-richardson-extrapolation-under-a-fourth-order-remainder]]: $R_hf(x)=(4D_{h/2}^0f(x)-D_h^0f(x))/3$.

[F2] [[lem-central-difference-has-fourth-order-remainder-under-bounded-fifth-derivative]]: if $|f^{(5)}|\le M_5$ on the stencil interval, then $D_h^0f(x)=f'(x)+(f'''(x)/6)h^2+r_h$ with $|r_h|\le M_5h^4/120$.

[F3] [[def-finite-difference-stencils-and-evaluation-error-model]]: each function value error has absolute value at most $\delta$.

[F4] [[def-abs-value]] and [[lem-of-abs-value]]: absolute values are nonnegative and invariant under sign change.

[F5] [[lem-of-triangle-inequality]]: $|a+b|\le|a|+|b|$.

## Proof

**Given:** The hypotheses listed above.

1.1 Write $r_h=D_h^0f(x)-f'(x)-c_2h^2$ and $r_{h/2}=D_{h/2}^0f(x)-f'(x)-c_2h^2/4$. Substitution into [F1] cancels both copies of $f'(x)$ correctly and gives $R_hf(x)-f'(x)=(4r_{h/2}-r_h)/3$, since $4(c_2h^2/4)-c_2h^2=0$. [given, F1, algebra]

2.1 By [F4]–[F5], $|R_hf(x)-f'(x)|\le(4|r_{h/2}|+|r_h|)/3\le(4M(h/2)^4+Mh^4)/3=5Mh^4/12$. [given, F4, F5, step 1.1, algebra]

3.1 In the $C^5$ case, [F2] supplies the expansion at every $0<t\le h$ with the same $c_2=f'''(x)/6$ and $M=M_5/120$. Substituting in step 2.1 gives $5(M_5/120)h^4/12=M_5h^4/288$. [given, F2, step 2.1, algebra]

4.1 By the definition of $\widehat R_h$ in the Statement, [F1] and the stencil formulas in [F3], the inexact perturbation is $\widehat R_hf(x)-R_hf(x)=\frac{4}{3h}(e_{+h/2}-e_{-h/2})-\frac{1}{6h}(e_{+h}-e_{-h})$. Each difference has magnitude at most $2\delta$ by [F4]–[F5]. The total perturbation is therefore at most $8\delta/(3h)+\delta/(3h)=3\delta/h$. Combining with step 2.1 proves the inexact bound. [given, F1, F3, F4, F5, step 2.1, algebra] ∎
