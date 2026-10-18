---
id: cex-arbitrary-selected-columns-miss-dominant-direction
kind: counterexample
title: "A prescribed column can miss the dominant direction"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: []
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
---

## Statement refuted

For every real matrix $A\in\mathbb R^{m\times n}$, every integer $0\le k<n$, and every prescribed ordered list $J$ of $k$ distinct column indices, there is a matrix $T$ with $T(:,J)=I_k$, $\max_{i,j}|T_{ij}|\le1$, and
$\|A-A(:,J)T\|_2\le\sqrt{1+k(n-k)}\,\sigma_{k+1}(A)$, where $\|\cdot\|_2$ is the Euclidean operator norm and $\sigma_j(A)$ is the $j$th singular value.

## Facts & Assumptions

**Given:** The claimed universal bound above.

[A1] Consider $A=\begin{bmatrix}10&0\\0&1\end{bmatrix}$, $k=1$, and the prescribed index set $J=(2)$.



**Given:** The matrix, rank parameter, and prescribed selected column in [A1].

## Counterexample

1.1 Any $1\times2$ matrix satisfying $T(:,J)=1$ has the form $T=(t,1)$. The coefficient condition gives $|t|\le1$, and direct multiplication gives $A-A(:,J)T=\begin{bmatrix}10&0\\-t&0\end{bmatrix}$. Its spectral norm is the Euclidean norm of its first column, $\sqrt{100+|t|^2}\ge10$. [given, A1, algebra]

2.1 The singular values of the diagonal matrix in [A1] are $10$ and $1$, so the proposed upper bound is $\sqrt{1+1\cdot(2-1)}\,\sigma_2(A)=\sqrt2$. Since $10>\sqrt2$, no such $T$ satisfies the claim. [A1, step 1.1, algebra] ∎
