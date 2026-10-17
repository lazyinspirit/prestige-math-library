---
id: lem-weighted-total-variation-space-is-complete
kind: lemma
title: The weighted total-variation measure space is complete
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-weighted-total-variation-space-for-population-measures
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the convergent subsequence is selected by the least qualifying index at each stage.
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

The normed vector space $\mathcal M_w(E)$ of [[def-weighted-total-variation-space-for-population-measures]] is complete.

## Facts & Assumptions

**Given:** $E=[a,\infty)$, $w(x)=1+x^2$, and $\mathcal M_w(E)$ with norm $\|\sigma\|_w=\int w\,d|\sigma|$.

[F1] [[def-weighted-total-variation-space-for-population-measures]]: $\mathcal M_w(E)$ consists of finite signed Borel measures with $\int w\,d|\sigma|<\infty$, and $\|\sigma\|_w=\int w\,d|\sigma|$.

## Proof

1.1 The map $J:\sigma\mapsto w\sigma$ is linear. Multiplication by the positive function $w$ gives $|w\sigma|=w|\sigma|$, so [F1] yields $\|J\sigma\|_{TV}=\|\sigma\|_w$. It is onto because for any finite signed measure $\eta$, $\sigma=w^{-1}\eta$ satisfies $J\sigma=\eta$ and $\|\sigma\|_w=\int w\,d|w^{-1}\eta|=\|\eta\|_{TV}$. [given, F1, algebra]

1.2 Let $(\eta_n)$ be Cauchy in total variation. Choose increasing indices $n_j$ with $\|\eta_{n_{j+1}}-\eta_{n_j}\|_{TV}\le2^{-j}$, taking the least qualifying index at each step. For each Borel set $A$, the series $\eta_{n_1}(A)+\sum_{j\ge1}(\eta_{n_{j+1}}-\eta_{n_j})(A)$ converges absolutely, uniformly in $A$, because each summand is bounded by its total-variation norm. Define $\eta(A)$ by that sum. If $(A_k)$ are disjoint, the double series of absolute values is bounded by $\|\eta_{n_1}\|_{TV}+\sum_j\|\eta_{n_{j+1}}-\eta_{n_j}\|_{TV}$, so the two countable sums may be interchanged; hence $\eta$ is countably additive. The same tail bound gives $\|\eta-\eta_{n_j}\|_{TV}\le\sum_{r\ge j}2^{-r}\to0$. Given $\varepsilon>0$, choose $j$ so this is below $\varepsilon/2$ and the Cauchy property gives $\|\eta_n-\eta_m\|_{TV}<\varepsilon/2$ for all $n,m\ge n_j$. For any $n\ge n_j$, choose $n_k\ge n_j$ and pass to the limit in $\|\eta_n-\eta_{n_k}\|_{TV}<\varepsilon/2$; since $\eta_{n_k}\to\eta$, this gives $\|\eta_n-\eta\|_{TV}\le\varepsilon/2<\varepsilon$. Thus finite signed measures are complete in total variation. [given, choose]

2.1 Pulling the limit $\eta$ back through the inverse isometry $w^{-1}$ gives a limit in $\mathcal M_w(E)$ for every Cauchy sequence there. [step 1.1, step 1.2] ∎
