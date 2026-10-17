---
id: ex-revised-simplex-ill-conditioned-basis-residual
kind: example
title: "A small residual at an ill-conditioned basis"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - alg-revised-simplex-residual-audit
  - thm-revised-simplex-primal-dual-residual-gap
justified_by: []
aliases: []
verification:
  precheck: pass
dependency_level: 3
proof_strategy: direct
sources:
  references:
    - title: "David Bindel, CS 6210: Sums, Dots, and Error in Linear Systems, residual-based bounds"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html"
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §3.3"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
---

## Example

Let $\delta=2^{-27}$, $A=\operatorname{diag}(1,\delta)$, $b=(1,\delta)^{\mathsf T}$, and $c=(1,1)^{\mathsf T}$. The exact primal solution is $x^*=(1,1)$ and the dual vector $y=(1,\delta^{-1})$ satisfies $A^{\mathsf T}y=c$. Audit the finite binary candidate $\hat x=(1,1+\delta)$.

## Facts & Assumptions

**Given:** The exact dyadic LP data and candidate in the Example.

[F1] [[alg-revised-simplex-residual-audit]]: Otherwise use exact integer/rational arithmetic to compute $r_p=A\hat x-b$, $r_d=c-A^{\mathsf T}\hat y$, and $g=c^{\mathsf T}\hat x-b^{\mathsf T}\hat y$.

[F2] [[thm-revised-simplex-primal-dual-residual-gap]]: $|g|\le \|x\|_1\|r_d\|_\infty+\|y\|_1\|r_p\|_\infty$.

## Verification


1.1 The basis matrix has $\|A\|_2=1$ and $\|A^{-1}\|_2=\delta^{-1}=2^{27}$, so its 2-norm condition number is $2^{27}$. The exact solution is $(1,1)$, while the candidate has forward error $\hat x-x^*=(0,\delta)$. [given, algebra]

2.1 Exact multiplication gives $r_p=(0,\delta^2)=(0,2^{-54})$, $r_d=(0,0)$, and $g=\delta=2^{-27}$. Thus the residual norm is $2^{-54}$ although the absolute forward error is $2^{-27}$, larger by the condition factor. [F1, step 1.1, algebra]

3.1 Here $\|\hat x\|_1=2+\delta$, $\|y\|_1=1+\delta^{-1}$, so [F2] gives $|g|\le(1+\delta^{-1})\delta^2=\delta+\delta^2$. The candidate is not exactly primal feasible and has a positive gap; the small residual alone therefore does not certify exact optimality or infeasibility. [F2, step 2.1, algebra] ∎
