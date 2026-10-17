---
id: thm-csr-matvec-algorithm-terminates-with-status
kind: theorem
title: "Validated CSR matrix-vector multiplication terminates with a status"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [alg-csr-matrix-vector-product-with-validation]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Chapter 3 §3.5, printed pp. 95–96"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
dependency_level: 2
---

## Statement

Let $F$ be a field, let $m,n\in\mathbb Z$, let $r,c$ be finite integer arrays,
and let $v,x$ be finite arrays with entries in $F$. The algorithm
[[alg-csr-matrix-vector-product-with-validation]] terminates on every such
input. Its return status is `invalid-dimension`, `invalid-index`, or `ok` with
a vector in $F^m$.

## Facts & Assumptions

**Given:** A field $F$, integer dimension candidates $m,n$, finite integer arrays $r,c$, and finite arrays $v,x$ with entries in $F$.

[L1] [[alg-csr-matrix-vector-product-with-validation]]: all input arrays are finite; $r,c$ are integer arrays and the entries of $v,x$ lie in $F$.

[L2] [[alg-csr-matrix-vector-product-with-validation]]: the routine checks the finite row-pointer and column-index arrays and returns `invalid-index` when a check fails.

[L3] [[alg-csr-matrix-vector-product-with-validation]]: after validation, the routine initializes $m$ outputs and traverses the row intervals from $r_i$ to $r_{i+1}-1$.

## Proof

1.1 If a dimension is not natural or an array length fails its dimension check, the algorithm returns `invalid-dimension` immediately. Otherwise $m,n$ and $s=\operatorname{length}(v)$ are finite naturals by [L1]. The row-pointer and column-index validations inspect at most $m+1$ and $s$ entries, respectively, and each scan advances its index by one; therefore they finish and either return `invalid-index` or pass as in [L2]. [given, L1, L2, algebra]

2.1 If validation passes, the outer loop has $m$ iterations. The inner ranges are disjoint and their total length is $\sum_{i<m}(r_{i+1}-r_i)=r_m-r_0=s$, so all accumulation loops in [L3] are finite and every accessed index is valid. The algorithm then returns `ok` with its length-$m$ output. Together with step 1.1 this proves termination on every input in the Statement. [given, L3, step 1.1, algebra] ∎
