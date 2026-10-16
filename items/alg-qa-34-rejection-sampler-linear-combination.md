---
id: alg-qa-34-rejection-sampler-linear-combination
kind: algorithm
title: Finite rejection sampler for a linear combination
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-34-l2-sample-query-access
  - def-finite-probability-space-and-event
  - def-independence-of-finite-random-variables
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by:
  - thm-qa-34-linear-combination-sampler-correct-and-cost
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

**Inputs:** an integer $k\ge1$, vectors $v_1,\ldots,v_k\in\mathbb R^n$ with ℓ2 sample/query access, real coefficients $w_1,\ldots,w_k$, and a positive integer cap $R$. Set $x=\sum_{j=1}^k w_jv_j$ and $S=\sum_{j=1}^k\|w_jv_j\|_2^2$. **Output:** an index $i\in[n]$ or FAIL.

If $S=0$, return FAIL. Otherwise, for each of at most $R$ trials:

1. Using fresh randomness, choose $j$ with probability $\|w_jv_j\|_2^2/S$, then sample $i$ from $D_{v_j}$. A zero-weight term is never chosen, so every requested vector distribution is defined.
2. Query all $v_{h,i}$ and set
$$a_i:=\begin{cases}\dfrac{(\sum_{h=1}^k w_hv_{h,i})^2}{k\sum_{h=1}^k(w_hv_{h,i})^2},&\sum_h(w_hv_{h,i})^2>0,\\0,&\sum_h(w_hv_{h,i})^2=0.\end{cases}$$
By Cauchy--Schwarz, $0\le a_i\le1$, so this is a valid acceptance probability.
3. With a fresh independent acceptance coin, accept index $i$ with probability $a_i$ and return $i$ upon acceptance.

If all $R$ trials reject, return FAIL. When $x=0$ but $S>0$, every defined acceptance probability is zero and the cap still forces a finite FAIL output. No normalized target distribution is assigned when $x=0$. All samples, entry queries, random bits, cap, and output writing are charged. [[thm-qa-34-linear-combination-sampler-correct-and-cost]] proves the target law on the accepted branch and the failure and query bounds under its separate hypotheses on $x$, the cancellation ratio, and $R$.
