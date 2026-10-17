---
id: prop-revised-simplex-sparse-pricing-operation-count
kind: proposition
title: "Sparse reduced-cost pricing operation count"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-revised-simplex-basis-dictionary
  - def-csr-matrix-with-stored-entry-semantics
justified_by: []
aliases: []
dependency_level: 2
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §§3.3 and 3.7"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, Chapter 3"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Statement

Let $A\in\mathbb R^{m\times n}$ be represented by a valid CSR record with row pointers $r$, column indices $c_t$, values $v_t$, and $s$ stored entries, under [[def-csr-matrix-with-stored-entry-semantics]]. For each $0\le t<s$, let $i(t)$ be the unique row satisfying $r_{i(t)}\le t<r_{i(t)+1}$. For a cost vector $c\in\mathbb R^n$ and given $y\in\mathbb R^m$, initialize $w\in\mathbb R^n$ to zero and, for $t=0,\ldots,s-1$, update
$$w_{c_t}\leftarrow w_{c_t}+v_ty_{i(t)}.$$
In exact real arithmetic the resulting vector is $A^{\mathsf T}y$. This loop uses exactly $s$ multiplications and $s$ additions, followed by $n$ zero initializations; forming $c-w$ uses $n$ subtractions and gives the reduced-cost vector of [[def-revised-simplex-basis-dictionary]] when $y=y(B)$. Every stored entry is counted, including repeated column indices and explicitly stored zeros. The claim is an arithmetic-operation count; it gives no runtime, bandwidth, or factorization bound.

## Facts & Assumptions

**Given:** A valid CSR record, $y\in\mathbb R^m$, and exact real arithmetic for the stated updates.

[F1] [[def-revised-simplex-basis-dictionary]]: For every column $j$, its reduced cost is $\bar c_j=c_j-a_j^{\mathsf T}y(B)$.

[F2] [[def-csr-matrix-with-stored-entry-semantics]]: The stored entries in row $i$ have indices $r_i\le t<r_{i+1}$, and the represented coordinate is $A_{ij}=\sum_{r_i\le t<r_{i+1}}\mathbf 1_{c_t=j}v_t$.

[A1] The loop processes every stored index exactly once in its increasing array order, using one exact real multiplication and addition per index.

## Proof

1.1 The intervals $[r_i,r_{i+1})$ are disjoint and, because $r_0=0$ and $r_m=s$, their union is $[0,s)$. Thus each stored index has exactly one row $i(t)$, including the empty-stream case $s=0$. After processing the first $k$ stored indices, the accumulator satisfies $w_j=\sum_{0\le t<k,\ c_t=j}v_ty_{i(t)}$: this holds at $k=0$, and the next update adds exactly its one summand to component $c_k$. [given, F2, A1, induction]

2.1 At $k=s$, for each column $j$ the CSR reconstruction in [F2] gives $(A^{\mathsf T}y)_j=\sum_{i=0}^{m-1}A_{ij}y_i=\sum_{i=0}^{m-1}\sum_{r_i\le t<r_{i+1}}\mathbf1_{c_t=j}v_ty_i=\sum_{0\le t<s,\ c_t=j}v_ty_{i(t)}=w_j$. The finite row intervals partition the stored indices, so the reindexing counts every stored term once; real multiplication distributes over finite sums. By [F1], $c-w$ is the reduced-cost vector when $y=y(B)$. [F1, F2, step 1.1, algebra]

3.1 Each of the $s$ updates performs one multiplication and one addition, and initialization and final subtraction each touch exactly $n$ coordinates. The count follows the stated loop, so duplicate indices and zero-valued entries still contribute one multiplication and one addition each; no timing, bandwidth, or factorization conclusion follows. [A1, step 2.1, algebra] ∎
