---
id: ex-finite-chain-transport-duality
kind: example
title: "Transport on a finite chain"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-metric-space
  - def-finite-probability-vector
  - def-finite-metric-coupling
  - def-finite-metric-wasserstein-one
  - lem-real-line-is-a-metric-space
  - thm-finite-metric-transport-duality
justified_by: []
axiom_use: "No choice principle is used; the potential is defined by a finite recursion."
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Gabriel Peyré and Marco Cuturi, Computational Optimal Transport, §6.1"
      url: "https://ar5iv.labs.arxiv.org/html/1803.00567"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §1.3, PDF pp. 5–6"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Example

Let $n\ge1$ and let $X=\{0,1,\ldots,n\}$ with metric $d(i,j)=|i-j|$. Let $p=(p_i)_{i=0}^n$ and $q=(q_i)_{i=0}^n$ be probability vectors. Put $R_k=\sum_{i=0}^k(p_i-q_i)$ for $0\le k<n$. Define $\operatorname{sgn}(t)=1$ for $t>0$, $\operatorname{sgn}(t)=-1$ for $t<0$, and $\operatorname{sgn}(0)=0$. Then
$$
W_1(p,q)=\sum_{k=0}^{n-1}|R_k|.
$$
An attaining normalized potential is given recursively by $f_0=0$ and $f_{k+1}=f_k-\operatorname{sgn}(R_k)$ for $0\le k<n$.

## Example references

[Peyré and Cuturi, Computational Optimal Transport, §6.1](https://ar5iv.labs.arxiv.org/html/1803.00567)

[Santambrogio, Introduction to Optimal Transport Theory, §1.3](https://arxiv.org/pdf/1009.3856)

## Facts & Assumptions

**Given:** The chain, probability vectors, and cumulative differences in the Example.

[F1] The usual metric on $\mathbb R$ is $d_{\mathbb R}(s,t)=|s-t|$, and its restriction to $\{0,\ldots,n\}$ is a metric ([[lem-real-line-is-a-metric-space]]).

[F2] For the ordered points $x_0,\ldots,x_n$, finite-metric transport equals the maximum of $\sum_{i=0}^n(p_i-q_i)f_i$ over 1-Lipschitz vectors normalized by $f_0=0$; this is the duality theorem's first-coordinate normalization after relabeling ([[thm-finite-metric-transport-duality]]).

[F3] A probability vector has nonnegative entries summing to one ([[def-finite-probability-vector]]).

## Verification

1.1 Write $r_i=p_i-q_i$ for $0\le i\le n$, set $R_{-1}=0$ and $R_n=0$, and use $\sum_i r_i=0$ from [F3]. Then $r_i=R_i-R_{i-1}$ for every $i$, and expanding the finite sums gives $\sum_{i=0}^n r_i f_i=\sum_{k=0}^{n-1}R_k(f_k-f_{k+1})$. For any feasible 1-Lipschitz vector, $|f_k-f_{k+1}|\le1$, so each term is at most $|R_k|$ and the dual objective is at most $\sum_{k=0}^{n-1}|R_k|$. [given, F1, F3, algebra]

2.1 The recursively defined potential has $|f_{k+1}-f_k|=|\operatorname{sgn}(R_k)|\le1$ on each adjacent pair. For $i<j$, the triangle inequality on real absolute values gives $|f_i-f_j|\le\sum_{k=i}^{j-1}|f_{k+1}-f_k|\le j-i=d(x_i,x_j)$; also $f_0=0$. Thus it is feasible. Its objective, by step 1.1, is $\sum_{k=0}^{n-1}R_k\operatorname{sgn}(R_k)=\sum_{k=0}^{n-1}|R_k|$, so it attains the dual maximum. [given, F1, step 1.1, algebra]

3.1 The dual maximum is therefore $\sum_{k=0}^{n-1}|R_k|$ by steps 1.1–2.1. Applying [F2] identifies this value with $W_1(p,q)$ and proves the formula and the asserted attaining potential. [step 1.1, step 2.1, F2] ∎
