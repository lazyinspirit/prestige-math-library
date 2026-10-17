---
id: ex-forward-difference-noise-bound-has-a-balanced-step
kind: example
title: "A quadratic attains the forward truncation bound and exhibits the balanced noisy step"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-optimal-step-for-forward-and-central-difference-error-bounds, def-finite-difference-stencils-and-evaluation-error-model]
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
    - title: "Nicholas J. Higham, What Is the Complex Step Approximation?"
      url: "https://nhigham.com/2020/10/06/what-is-the-complex-step-approximation/"
dependency_level: 3
---

## Example

Take $f(t)=t^2$ at $x=1$. Its exact forward difference has truncation error $h$. If each call may err by $\delta>0$, the allowed errors $e_{1+h}=\delta$ and $e_1=-\delta$ attain the forward bound $h+2\delta/h$. This bound is minimized at $h=\sqrt{2\delta}$.

## Facts & Assumptions

**Given:** The function, point, positive step and evaluation errors above.

[F1] [[def-finite-difference-stencils-and-evaluation-error-model]]: $D_h^+f(1)=(f(1+h)-f(1))/h$ and the inexact quotient replaces each value by $f(y)+e_y$.

[F2] [[thm-optimal-step-for-forward-and-central-difference-error-bounds]]: when $M_2=2$ the forward error bound $M_2h/2+2\delta/h$ is minimized at $h=\sqrt{4\delta/M_2}=\sqrt{2\delta}$.

## Verification



1.1 Substitution gives $D_h^+f(1)=((1+h)^2-1)/h=2+h$, while $f'(1)=2$; the truncation error is exactly $h=M_2h/2$ because $f''=2$. [given, F1, algebra]

2.1 With the stated errors, $\widehat D_h^+f(1)=((1+h)^2+\delta-(1-\delta))/h=2+h+2\delta/h$, so the error bound is attained exactly. [given, F1, step 1.1, algebra]

3.1 Set $\delta=1/2$. Then [F2] gives $h=1$; the truncation and evaluation contributions are each $1$, so the total error is $2$, equal to the minimum $2\sqrt{2\delta}$. [given, F2, step 2.1, algebra] ∎
