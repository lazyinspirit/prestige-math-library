---
id: ex-b-spline-basis-and-polynomial-reproduction
kind: example
title: A quadratic Bernstein B-spline basis
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-b-spline-space-and-basis, thm-spline-polynomial-reproduction]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Tom Lyche, Carla Manni, and Hendrik Speleers, B-Splines and Spline Approximation, §1.1.1
      url: https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf
---

## Example

Take degree $p=2$ and clamped knot vector $(0,0,0,1,1,1)$. On $[0,1]$ its three B-splines are $(1-x)^2$, $2x(1-x)$, and $x^2$. They form a nonnegative partition of unity and hence a basis of $\mathcal P_2$.

## Facts & Assumptions

**Given:** The degree-two clamped knot vector $(0,0,0,1,1,1)$.

[F1] Degree-zero B-splines are knot-interval indicators and higher degrees follow the stated recurrence ([[def-b-spline-space-and-basis]]).

[F2] For a clamped knot vector, the degree-$p$ B-splines form a basis and reproduce every polynomial of degree at most $p$ ([[thm-spline-polynomial-reproduction]]).

[A1] The degree is $p=2$, the domain is $[0,1]$, and the knot vector is $(0,0,0,1,1,1)$.

## Verification

**Given:** $p=2$, knots $(0,0,0,1,1,1)$, and $x\in[0,1]$.

1.1 The only nonzero degree-zero spline on $(0,1)$ is $B_{3,0}=1$. Applying the recurrence [F1] first at degree one gives $B_{2,1}=1-x$ and $B_{3,1}=x$. Applying it again gives $B_{1,2}=(1-x)^2$, $B_{2,2}=x(1-x)+x(1-x)=2x(1-x)$, and $B_{3,2}=x^2$. Each is nonnegative on $[0,1]$ and their sum is $(1-x)^2+2x(1-x)+x^2=1$. [A1, F1, algebra]

2.1 For $q(x)=a+bx+cx^2$, choose coefficients $a$, $a+b/2$, and $a+b+c$. Their B-spline combination is $a(1-x)^2+2(a+b/2)x(1-x)+(a+b+c)x^2=a+bx+cx^2.$ Thus every quadratic is reproduced; uniqueness of the coefficient vector follows from the basis assertion [F2]. [A1, F2, step 1.1, algebra] ∎