---
id: ex-na-degree-one-minimax-of-square
kind: example
title: "The degree-one minimax approximation to x squared"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - cor-na-best-polynomial-approximation-unique
  - def-na-best-polynomial-uniform-error
  - thm-na-polynomial-equioscillation-certificate
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 10"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 73–79, best polynomial approximation and equioscillation."
---

## Example

On $[-1,1]$, the unique best degree-one uniform approximation to $f(x)=x^2$
is the constant polynomial $p(x)=1/2$, with error $1/2$.

## Verification

**Given:** $I=[-1,1]$, $f(x)=x^2$, $p(x)=1/2\in\mathcal P_1(I)$.

[F1] [[def-na-best-polynomial-uniform-error]]: $E_1(f;I)$ is the infimum of $\|f-q\|_{\infty,I}$ over real polynomials $q$ of degree at most $1$.

[F2] [[thm-na-polynomial-equioscillation-certificate]]: a degree-$n$ candidate with exact uniform error $E>0$ and $n+2$ ordered alternating extrema is a best approximant.

[F3] [[cor-na-best-polynomial-approximation-unique]]: the best degree-$n$ approximant exists and is unique for every continuous real target on a nondegenerate compact interval.

1.1 For $x\in[-1,1]$, $0\le x^2\le1$, so $-1/2\le x^2-1/2\le1/2$. Equality occurs at $x=0$ and at $x=\pm1$, hence $\|f-p\|_{\infty,I}=1/2$. [given, algebra]

2.1 The ordered points $-1<0<1$ give residual values $1/2,-1/2,1/2$. By [F2], $p$ is a best degree-one approximant; [F1] identifies its error with $E_1(f;I)$, and [F3] makes it unique. [F1, F2, F3, step 1.1, algebra] ∎