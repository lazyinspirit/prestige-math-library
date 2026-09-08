---
id: ex-checking-the-subreciprocal-condition-for-the-quadratic-log-bound
kind: example
title: "Checking the subreciprocal condition for the quadratic log bound"
status: draft
origin: pipeline
deps: [def-subreciprocal-function-and-ell-divisibility, cor-fox-sudakov-quantitative-induced-density-bound, thm-logarithm-change-of-base]
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "Section 5, ell=2"
generation:
  role: example
proof_strategy: direct
---

## Example

For $\ell(x)=2$ on $(0,1/2)$, the subreciprocal inequalities are $1<2<1/x$ and $\log_2\ell(x)=1$. At $x=1/16$ the classical density fraction with symbolic constant $C>0$ is $2^{-16C}$.

## Facts & Assumptions

**Given:** $\ell(x)=2$, $0<x<1/2$, and $C>0$ symbolic.

[F1] From [[def-subreciprocal-function-and-ell-divisibility]]: A function $\ell:(0,1/2)\to(0,\infty)$ is subreciprocal when it is nonincreasing and satisfies $1<\ell(x)\leq1/x$ throughout its domain.

[F2] From [[cor-fox-sudakov-quantitative-induced-density-bound]]: $\delta=2^{-C_H(\log_2(1/x))^2}$

## Verification

1.1 The constant function is positive and nonincreasing. For $0<x<1/2$, reciprocation gives $1/x>2>1$, so it meets [F1]. Also $2^1=2$, hence $\log_2\ell(x)=1$. [F1, given]

2.1 The value $1/16$ lies in that interval, and $\log_2(1/(1/16))=\log_2 16=4$. Substitution into [F2] with $C_H=C$ yields exponent $C\cdot4^2=16C$ and fraction $2^{-16C}$. Here $C$ is a symbolic admissible constant, not a numerically certified constant for arbitrary $H$. [F2, step 1.1, algebra] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), Section 5, ell=2.
