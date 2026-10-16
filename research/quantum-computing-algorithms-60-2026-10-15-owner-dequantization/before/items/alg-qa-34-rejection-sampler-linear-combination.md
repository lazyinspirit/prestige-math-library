---
id: alg-qa-34-rejection-sampler-linear-combination
kind: algorithm
title: Finite rejection sampler for a linear combination
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-34-l2-sample-query-access
  - def-finite-probability-space-and-event
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
---

## Definition

Let $k\ge1$, let $v_1,\ldots,v_k\in\mathbb R^n$ have ℓ2 sample/query access, and let $w_1,\ldots,w_k\in\mathbb R$. Set $x=\sum_{j=1}^k w_jv_j$ and $S=\sum_{j=1}^k\|w_jv_j\|_2^2$. The routine is admissible only when $x\ne0$ and a certified upper bound $C_0$ is supplied for $C=S/\|x\|_2^2$. Input also includes a rational $0<\delta<1$ and an integer cap $R$ satisfying $R\ge kC_0\ln(1/\delta)$; if this relation is not certified, return INVALID.

For each of at most $R$ trials, choose $j$ with probability $\|w_jv_j\|_2^2/S$, then sample $i$ from $D_{v_j}$ (terms with $w_jv_j=0$ have weight zero). Query all $v_{h,i}$ and set
$$a_i:=\begin{cases}\dfrac{(\sum_{h=1}^k w_hv_{h,i})^2}{k\sum_{h=1}^k(w_hv_{h,i})^2},&\sum_h(w_hv_{h,i})^2>0,\\0,&\sum_h(w_hv_{h,i})^2=0.\end{cases}$$
Accept index $i$ with probability $a_i$ and return it upon acceptance. If all $R$ trials reject, return FAIL. All samples, entry queries, random bits, cap, and output writing are charged. [[thm-qa-34-linear-combination-sampler-correct-and-cost]] proves the target law on the accepted branch and the failure and query bounds.
