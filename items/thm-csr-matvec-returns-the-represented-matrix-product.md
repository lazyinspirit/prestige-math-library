---
id: thm-csr-matvec-returns-the-represented-matrix-product
kind: theorem
title: "CSR matrix-vector multiplication returns the represented product"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-field, def-finite-sum-in-a-commutative-monoid, def-function-space, def-matrix-space, def-csr-matrix-with-stored-entry-semantics, alg-csr-matrix-vector-product-with-validation, def-matrix-product-and-identity-matrix, lem-of-zero-mult]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Chapter 3 §§3.4–3.5, printed pp. 92–96"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods, 2nd ed., Chapter 4 §4.3.1–4.3.2, printed pp. 57–63"
      url: "https://www.netlib.org/templates/templates.pdf"
dependency_level: 2
---

## Statement

Let $F$ be a field, let $m,n\in\mathbb N$, let a valid CSR record represent
$A\in M_{m\times n}(F)$, and let $x=(x_j)_{j<n}\in F^n$. Let
$X\in M_{n\times1}(F)$ be the column matrix with $X_{j0}=x_j$ for $j<n$, and
define $Ax\in F^m$ by
$$(Ax)_i:=(AX)_{i0}=\sum_{j<n}A_{ij}x_j\qquad(i<m),$$
using [[def-matrix-product-and-identity-matrix]]. Then the algorithm
[[alg-csr-matrix-vector-product-with-validation]] returns `ok` with output
$Ax$ in exact field arithmetic.

## Facts & Assumptions

**Given:** A field $F$, $m,n\in\mathbb N$, a valid CSR record representing $A$, and $x\in F^n$.

[L1] [[def-csr-matrix-with-stored-entry-semantics]]: $A_{ij}=\sum_{r_i\le t<r_{i+1}}\mathbf 1_{c_t=j}v_t$, with an empty sum equal to $0_F$.

[L2] [[alg-csr-matrix-vector-product-with-validation]]: each row starts at $0_F$ and accumulates $v_t x_{c_t}$ once for every $t=r_i,\ldots,r_{i+1}-1$.

[L3] [[def-matrix-product-and-identity-matrix]]: for the column matrix $X$ with $X_{j0}=x_j$, $(AX)_{i0}=\sum_{j<n}A_{ij}x_j$.

[L4] [[def-finite-sum-in-a-commutative-monoid]]: a finite sum is independent of its enumeration and an empty sum is its identity element.

[L5] [[def-field]]: multiplication distributes over addition.

[L6] [[def-function-space]]: $F^m$ is the set of functions $m\to F$; when $m=0$ it has exactly one element, the empty function.

[L7] [[lem-of-zero-mult]]: in a field, $0\cdot a=0$ for every $a$.

[L8] [[def-field]]: multiplication is commutative on all of $F$, and $x\cdot1=x$ for every $x\in F$; hence $1_F x=x$.

## Proof

1.1 Fix a row $i$. Initially its output coordinate is $0_F$, the empty partial sum. After $q$ entries of that row have been visited, induction on $q$ gives $y_i=\sum_{t=r_i}^{r_i+q-1}v_t x_{c_t}$: the next algorithmic update adds exactly the next summand. Taking $q=r_{i+1}-r_i$ yields $y_i=\sum_{r_i\le t<r_{i+1}}v_t x_{c_t}$. [L2, induction, algebra]

2.1 By [L1] and [L3], $(Ax)_i=\sum_{j<n}\sum_{r_i\le t<r_{i+1}}\mathbf 1_{c_t=j}v_t x_j$. Repeated application of [L5], by induction on the finite number of summands, distributes the products over these sums. Re-enumerating the resulting finite sum over pairs $(j,t)$ as $(t,j)$ is permitted by [L4]. For each fixed $t$, exactly the term $j=c_t$ survives, so the result is $\sum_{r_i\le t<r_{i+1}}v_t x_{c_t}$. By step 1.1 this equals $y_i$. [L1, L3, L4, L5, L7, L8, step 1.1, algebra]

3.1 If $m=0$, both $y$ and $Ax$ are the unique empty vector by [L6]. If $m>0$, step 2.1 gives equality in every coordinate $i<m$, hence $y=Ax$. [L6, step 2.1, algebra] ∎
