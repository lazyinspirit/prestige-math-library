---
id: ex-quadratic-interpolation-at-three-nodes
kind: example
title: "Quadratic interpolation at three nodes is exact"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-cardinal-polynomial-interpolation
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - thm-cardinal-polynomial-interpolant-exists-uniquely
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, lecture 1"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
---

## Example

For $f(x)=x^2$ at the three nodes $-1,0,1$, the cardinal interpolant is exactly $f$.

## Facts & Assumptions

**Given:** The ordered nodes $x_0=-1,x_1=0,x_2=1$ and the function $f(x)=x^2$.

[F1] [[def-cardinal-polynomial-interpolation]]: $I_2f$ is the sum of the nodal values times the cardinal functions.

[F2] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: $x^2$ is the evaluation of a formal polynomial of degree $2$.

[F3] [[thm-cardinal-polynomial-interpolant-exists-uniquely]]: the degree-at-most-$2$ polynomial matching $f$ at these three distinct nodes is uniquely $I_2f$.

## Proof

1.1 The nodal values are $f(-1)=1$, $f(0)=0$, and $f(1)=1$. [given, algebra]

2.1 The polynomial $q(X)=X^2$ has degree $2$ by [F2] and takes these three values. By the definition [F1] and uniqueness [F3], $I_2f=q=f$. [given, F1, step 1.1, F2, F3, algebra] ∎
