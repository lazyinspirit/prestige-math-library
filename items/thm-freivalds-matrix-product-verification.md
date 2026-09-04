---
id: thm-freivalds-matrix-product-verification
kind: theorem
title: "Freivalds' one-trial matrix-product test has one-sided error"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-matrix-space, def-matrix-product-and-identity-matrix, def-field]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Jiri Matousek, Thirty-three Miniatures, Section on Freivalds' algorithm"
      url: "https://kam.mff.cuni.cz/~matousek/stml-53-matousek-1.pdf"
---

## Statement

Let $F$ be a field and let $A,B,C\in M_n(F)$. Choose a random vector $r\in\{0,1\}^n$ uniformly and accept exactly when $A(Br)=Cr$.

Then:

1. if $C=AB$, the test accepts with probability $1$; 2. if $C\ne AB$, the test accepts with probability at most $1/2$.

So one trial gives a one-sided-error randomized test for matrix products.

## Facts & Assumptions

**Given:** a field $F$, matrices $A,B,C\in M_n(F)$, and a uniform random vector $r\in\{0,1\}^n$.

[L1] Matrix products and matrix-vector products are defined by finite sums over matching indices ([[def-matrix-product-and-identity-matrix]]).

[L2] In a field, distinct scalars remain distinct and every nonzero scalar is invertible ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 If $C=AB$, then the equality $Cr=(AB)r=A(Br)$ follows directly from the finite-sum definition in [L1]. So the test always accepts a correct product. [L1, given]

1.2 Assume $C\ne AB$ and put $D:=C-AB\ne 0$. Then some row $d=(d_1,\dots,d_n)$ of $D$ is nonzero. Choose the largest index $j$ with $d_j\ne 0$; this is possible because the row is finite. [L2, choose, algebra]

2.1 Fix all random bits of $r$ except $r_j$. The equation $(Dr)_i=0$ for the chosen row has the form $d_j r_j = -\sum_{\ell<j} d_\ell r_\ell$, because $d_\ell=0$ for $\ell>j$. By [L2], $d_j$ is invertible, so at most one value of $r_j$ can satisfy this equation. Since $r_j$ is uniform on $\{0,1\}$ and $0\ne 1$ in a field by [L2], the conditional probability that this row equation holds is at most $1/2$. Therefore $\mathbb P(Dr=0)\le 1/2$, and hence the acceptance probability when $C\ne AB$ is at most $1/2$. [L2, step 1.2, algebra]

3.1 Steps 1.1 and 2.1 prove the one-sided error bound for a single trial of the test. Repeating with fresh random vectors multiplies the failure probability. [step 1.1, step 2.1] ∎
