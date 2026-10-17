---
id: ex-equispaced-cardinal-basis-growth
kind: example
title: "Unit nodal data exhibit equispaced cardinal basis growth"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-cardinal-polynomial-interpolation
  - prop-equispaced-interpolation-basis-growth
  - cor-weierstrass-approximation-on-a-closed-interval
dependency_level: 3
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
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, uniformly spaced nodes example"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
---

## Example

For each $m\ge6$, use the $2m+1$ equispaced nodes and the point $x_*$ from [[prop-equispaced-interpolation-basis-growth]]. Prescribe data $y_m=1$ and $y_k=0$ for $k\ne m$. Then the data have maximum magnitude $1$, while their interpolant has magnitude at least $9m/1280$ at $x_*$. This is a degree-dependent data witness for growth of the interpolation operator. Polynomials remain uniformly dense in $C([-1,1])$ by the Weierstrass theorem, but that density theorem does not claim convergence of this particular interpolation rule for any one fixed function; the data here vary with $m$.

## Facts & Assumptions

**Given:** An integer $m\ge6$, the equispaced nodes $x_k=-1+k/m$, the query $x_*=-1+1/(2m)$, and nodal data supported at index $m$.

[F1] [[def-cardinal-polynomial-interpolation]]: $I_{2m}y=\sum_{k=0}^{2m}y_k\ell_k$.

[F2] [[prop-equispaced-interpolation-basis-growth]]: for these nodes, $|\ell_m(x_*)|\ge9m/1280$.

[F3] [[cor-weierstrass-approximation-on-a-closed-interval]]: every continuous real function on a closed interval is a uniform limit of polynomials.

## Proof

1.1 Set $y_m=1$ and $y_k=0$ for $k\ne m$. Then $\max_{0\le k\le2m}|y_k|=1$. [given, algebra, construct]

1.2 By [F1], $I_{2m}y=\ell_m$. Since $m\ge6$, the query $x_*=-1+1/(2m)$ lies in $[-1,1]$; [F2] therefore gives $|I_{2m}y(x_*)|=|\ell_m(x_*)|\ge9m/1280.$ The input vector depends on $m$, so this calculation is an operator-amplification witness and does not by itself establish divergence for one fixed function. [given, F1, F2, algebra]

2.1 The density assertion [F3] states that for each fixed continuous function some sequence of polynomials converges uniformly to it. It makes no assertion that the polynomials selected by these changing nodal data converge for any fixed function; hence it is consistent with the finite-dimensional amplification calculation above. [given, F3, step 1.1, step 1.2, algebra] ∎
