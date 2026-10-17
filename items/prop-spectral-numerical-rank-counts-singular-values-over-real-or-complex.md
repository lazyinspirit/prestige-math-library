---
id: prop-spectral-numerical-rank-counts-singular-values-over-real-or-complex
kind: proposition
title: "Spectral numerical rank counts singular values above threshold over R or C"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-numerical-rank-relative-to-a-norm-scale-and-tolerance, thm-eckart-young-best-rank-k-approximation, cor-rank-equals-number-of-nonzero-singular-values]
dependency_level: 0
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
proof_strategy: direct
sources:
  references:
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §3.2.2"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
---

## Statement

Let $m,n\ge1$, $\mathbb F\in\{\mathbb R,\mathbb C\}$, $A\in\mathbb F^{m\times n}$, $p=\min(m,n)$, and $\tau\ge0$. For the spectral norm, the numerical rank defined by [[def-numerical-rank-relative-to-a-norm-scale-and-tolerance]] satisfies
$$\operatorname{rank}_\tau(A)=\#\{i\in\{1,\ldots,p\}:\sigma_i(A)>\tau\}.$$

## Facts & Assumptions

**Given:** A real or complex matrix $A$, its ordered singular values, and a threshold $\tau\ge0$.

[F1] [[def-numerical-rank-relative-to-a-norm-scale-and-tolerance]]: $\operatorname{rank}_\tau(A)$ is the least rank of a matrix within spectral-norm distance $\tau$ of $A$.

[F2] [[thm-eckart-young-best-rank-k-approximation]]: for $0\le k<p$, the least spectral-norm distance from $A$ to a matrix of rank at most $k$ is $\sigma_{k+1}(A)$; the rank-$k$ SVD truncation attains it.

[F3] [[cor-rank-equals-number-of-nonzero-singular-values]]: the rank of $A$ is the number of its positive singular values, so it is at most $p$.

## Proof

1.1 Put $q=\#\{i\le p:\sigma_i(A)>\tau\}$. For every $k<q$, one has $k<p$ and $\sigma_{k+1}(A)\ge\sigma_q(A)>\tau$ (when $q>0$), so [F2] shows that no rank-at-most-$k$ matrix lies within distance $\tau$. If $q<p$, then $\sigma_{q+1}(A)\le\tau$ and the rank-$q$ truncation from [F2] is within distance $\tau$. If $q=p$, [F3] gives $\operatorname{rank}A\le p=q$, so $A$ itself is an admissible matrix at distance zero. Thus the least admissible rank is $q$. [F2, F3, algebra]

2.1 By [F1], the least admissible rank is $\operatorname{rank}_\tau(A)$; step 1.1 identifies it with the number of singular values strictly greater than $\tau$. This proves the formula, including $q=0$ and thresholds equal to a singular value. [step 1.1, F1] ∎
