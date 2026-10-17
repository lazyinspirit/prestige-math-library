---
id: alg-sqp-second-order-correction
kind: algorithm
title: "Minimum-norm second-order correction for identified active constraints"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-sqp-linearized-quadratic-subproblem
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 18 §§18.8 and 18.11, printed pp. 556–558 and 568–569 / PDF pp. 574–576 and 586–587; second-order correction formula and line-search use."
---

## Definition

Let $c_A:U\to\mathbb R^r$ collect the equality constraints and a specified
set of active inequality constraints, in that order. Given $x,x+p\in U$,
assume $A=Dc_A(x)$ has full row rank and the SQP step satisfies
$c_A(x)+Ap=0$. For $r>0$, compute
$$w=-A^T(AA^T)^{-1}c_A(x+p)$$
and return $p+w$ as the corrected displacement. If the rank test fails,
the inverse or evaluation fails, return `correction-failure`. If $r=0$,
return $p$ with $w=0$. This is a correction for the specified active
constraints; it does not certify feasibility of inactive constraints.

## Facts & Assumptions

**Given:** A linearized SQP step and the active constraint map $c_A$ at a
point where the trial evaluations are defined.

[F1] [[def-sqp-linearized-quadratic-subproblem]] defines the affine
linearized constraints and the equation $c_A(x)+Dc_A(x)p=0$ on a chosen
active set.

[A1] The selected active constraint Jacobian $A=Dc_A(x)$ has full row rank,
and the trial points $x$ and $x+p$ lie in $U$.

## Proof

1.1 Full row rank implies that for every nonzero $v\in\mathbb R^r$, $v^TAA^Tv=\|A^Tv\|_2^2>0$; hence $AA^T$ is invertible. The formula is therefore defined and satisfies $Aw=-c_A(x+p)$. [given, F1, algebra]

2.1 If $u$ is any other correction satisfying $Au=-c_A(x+p)$, then $u-w\in\ker A$, while $w\in\operatorname{range}(A^T)$. The inclusion $\operatorname{range}(A^T)\subseteq(\ker A)^\perp$ follows from $\langle A^Tv,z\rangle=\langle v,Az\rangle=0$; both spaces have dimension $\operatorname{rank}A$, so they are equal. Therefore $\|u\|_2^2=\|w\|_2^2+\|u-w\|_2^2\ge\|w\|_2^2$, with equality only for $u=w$. For $r=0$, the unique minimum-norm correction is zero. [given, step 1.1, algebra] ∎
