---
id: alg-sqp-second-order-correction
kind: algorithm
title: "Minimum-norm second-order correction for identified active constraints"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-sqp-linearized-quadratic-subproblem
  - prop-full-row-rank-pseudoinverse-formula
  - thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
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

## Remarks

The full-row-rank inverse formula is supplied by
[[prop-full-row-rank-pseudoinverse-formula]], and the minimum-norm
characterization by
[[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]],
with right-hand side $-c_A(x+p)$. The zero-row branch returns the zero
correction. Residual-order estimates under smoothness and uniform rank
hypotheses are separate properties.
