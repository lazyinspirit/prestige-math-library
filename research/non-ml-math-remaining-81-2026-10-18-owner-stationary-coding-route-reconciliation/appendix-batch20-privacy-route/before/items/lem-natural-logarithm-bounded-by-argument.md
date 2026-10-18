---
id: lem-natural-logarithm-bounded-by-argument
kind: lemma
title: "The natural logarithm is bounded above by its positive argument minus one"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - cor-mean-value-theorem
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jiří Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
      locator: "Logarithm derivative and monotonicity; the bound for x>=1 is derived locally by the mean value theorem. This is the source treatment cited by the existing published derivative supplier, not a claim that the source states this exact restricted lemma."
---

## Statement

For every real $x\ge1$, the natural logarithm of
[[def-natural-logarithm]] satisfies
$$0\le\log x\le x-1\le x.$$

## Facts & Assumptions

**Given:** $x\ge1$ and the natural logarithm.

[F1] [[def-natural-logarithm]]: $\log$ is the inverse of the exponential
function on $(0,\infty)$.

[F2] [[thm-natural-logarithm-laws]]: $\log$ is continuous and strictly
increasing, and $\log1=0$.

[F3] [[thm-logarithm-derivative-and-integral]]:
$\log'(t)=1/t$ for every $t>0$.

[F4] [[cor-mean-value-theorem]]: a function continuous on a closed interval
and differentiable in its interior has a point where its derivative equals
its endpoint difference divided by the interval length.

[A1] $x\ge1$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F1], $\log$ is defined on $[1,x]$. If $x=1$, [F2] gives $\log x=0$. If $x>1$, [F2] gives continuity of $\log$ on $[1,x]$, and [F3] gives differentiability on $(1,x)$. By [F4], there is $c\in(1,x)$ such that $$\log x-\log1=\frac{x-1}{c},$$ so $\log x=(x-1)/c$. [given, A1, F1, F2, F3, F4, cases, choose]

2.1 In the $x=1$ case the claimed inequalities are equalities except $x-1\le x$. In the $x>1$ case, $c>1$ and $x-1>0$, so $0<(x-1)/c<x-1<x$. Combining with step 1.1 proves all three inequalities. [given, A1, F2, step 1.1, algebra, cases] ∎

