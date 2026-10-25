---
id: thm-csr-matvec-algorithm-terminates-with-status
kind: theorem
title: "Validated CSR matrix-vector multiplication terminates with a status"
status: published
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

[L1] [[alg-csr-matrix-vector-product-with-validation]]: with $s=\operatorname{length}(v)$, the routine first returns `invalid-dimension` unless $m,n\in\mathbb N$, $\operatorname{length}(r)=m+1$, $\operatorname{length}(c)=s$, and $\operatorname{length}(x)=n$.

[L2] [[alg-csr-matrix-vector-product-with-validation]]: after the dimension checks, finite scans check $0\le r_i\le s$ for $0\le i\le m$, $r_0=0$, $r_m=s$, $r_i\le r_{i+1}$ for $i<m$, and $0\le c_t<n$ for $t<s$; any failure returns `invalid-index`.

[L3] [[alg-csr-matrix-vector-product-with-validation]]: after validation, the routine initializes $y_i=0_F$ for $i<m$, traverses $t=r_i,\ldots,r_{i+1}-1$ in each row, updates $y_i\gets y_i+v_t x_{c_t}$, and returns `ok` with $y$.

## Proof

1.1 The tests in [L1] are finite and either return `invalid-dimension` or establish natural dimensions and the required array lengths. Since the arrays are finite, $s=\operatorname{length}(v)$ is also a finite natural. The pointer-bound, pointer-monotonicity, and column-index scans in [L2] have respectively $m+1$, $m$, and $s$ iterations, with two additional endpoint tests; every accessed index exists by [L1]. Thus validation finishes, either returning `invalid-index` or establishing all conditions in [L2]. [given, L1, L2, algebra]

2.1 If validation passes, [L2] gives $0=r_0\le\cdots\le r_m=s$ and $0\le c_t<n$. Hence the row ranges partition $\{0,\ldots,s-1\}$ and have total length $\sum_{i<m}(r_{i+1}-r_i)=s$. The initialization and outer loop in [L3] each have $m$ iterations, and the inner loops have $s$ iterations in total. Every $v_t$ and $x_{c_t}$ accessed exists; field addition and multiplication keep each accumulator in $F$. The routine therefore returns `ok` with a vector in $F^m$. If $m=0$, validation forces $s=0$ and returns the empty vector; empty row ranges likewise require no updates. Together with step 1.1 this proves the claim. [given, L1, L2, L3, step 1.1, algebra] ∎
