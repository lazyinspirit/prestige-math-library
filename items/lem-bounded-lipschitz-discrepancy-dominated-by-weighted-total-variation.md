---
id: lem-bounded-lipschitz-discrepancy-dominated-by-weighted-total-variation
kind: lemma
title: Weighted total variation bounds bounded-Lipschitz discrepancy
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-weighted-total-variation-space-for-population-measures
  - def-bounded-lipschitz-discrepancy-for-measures
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the estimate holds for each test function before taking a supremum.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §2
      url: https://arxiv.org/pdf/1801.08312
---

## Statement

For $\mu,\nu\in\mathcal M_w(E)$,

$$d_{BL}(\mu,\nu)\le\|\mu-\nu\|_{TV}\le\|\mu-\nu\|_w.$$

## Facts & Assumptions

**Given:** The weight $w(x)=1+x^2\ge1$ and the test class in the bounded-Lipschitz discrepancy.

[F1] [[def-bounded-lipschitz-discrepancy-for-measures]]: every admissible test has $\|\varphi\|_\infty\le1$.

[F2] [[def-weighted-total-variation-space-for-population-measures]]: the weighted norm is $\int w\,d|\sigma|$ with $w\ge1$.

## Proof

1.1 For each admissible $\varphi$, $|\int\varphi\,d(\mu-\nu)|\le\int|\varphi|\,d|\mu-\nu|\le\|\mu-\nu\|_{TV}$ by [F1]. Taking the supremum proves the first inequality. [given, F1]

2.1 Since $w\ge1$, integrating $w$ against $|\mu-\nu|$ dominates its total mass, which is the total-variation norm. [F2, algebra] ∎

