---
id: def-quadratic-equation-instance-and-tensor-code-oracles
kind: definition
title: "Quadratic equations and tensor-code oracle tables"
status: draft
origin: pipeline
deps:
  - def-walsh-hadamard-encoding-and-relative-distance
  - def-quadratic-consistency-test
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.2, proof of Theorem 18.21, printed pp. 365–366"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: n/a
---

## Definition

For $N,M\ge0$, a **QUADEQ instance over $\mathbb F_2$** is an ordered list
$(A_j,b_j)_{j=1}^M$, where each $A_j$ is an $N\times N$ binary matrix and
$b_j\in\mathbb F_2$. Use the row-major order on pairs $(i,k)\in[N]^2$ to
identify matrices with vectors in $\mathbb F_2^{N^2}$. The instance is in
canonical form when $A_{j,ik}=0$ for $i>k$. A vector $w\in\mathbb F_2^N$
**satisfies** the instance when, for every $j\in[M]$,
$$\sum_{i,k=1}^N A_{j,ik}w_iw_k=b_j.$$
For canonical instances the sum may equivalently be restricted to $i\le k$.
For a general matrix, its canonical representative has diagonal entries
$A_{j,ii}$ and upper entries $A_{j,ik}+A_{j,ki}$ for $i<k$, with zero
entries below the diagonal; it defines the same quadratic form.
Equivalently, after flattening by that row-major order,
$A_j\cdot(w\otimes w)=b_j$. Constants in a quadratic equation are moved to
the right-hand side, repeated monomials cancel modulo two, and a square
$w_i^2$ is represented by the diagonal coordinate $(i,i)$, since
$w_i^2=w_i$ in $\mathbb F_2$. When $M=0$ the equation list is empty and every
$w$ satisfies it; when $N=0$ the vector and tensor are empty and each equation
has left-hand side $0$.

For $w\in\mathbb F_2^N$, its **intended oracle pair** is
$$f_w=\operatorname{WH}_N(w):\mathbb F_2^N\to\mathbb F_2,\qquad g_w=\operatorname{WH}_{N^2}(w\otimes w):\mathbb F_2^{N\times N}\to\mathbb F_2,$$
where the second domain is flattened in the same row-major order. Thus
$f_w(r)=w\cdot r$ and
$g_w(Z)=\sum_{i,k=1}^Nw_iw_kZ_{ik}$, with the sum interpreted as $0$ when
$N=0$. Their truth-table lengths are respectively $2^N$ and $2^{N^2}$;
if stored in one proof string, the $f_w$ table precedes the $g_w$ table. The
table indexing, including the one-entry truth tables at dimension zero, is the
convention of [[def-walsh-hadamard-encoding-and-relative-distance]]. The tensor
coordinates and ordered-pair indexing used by the consistency test are those
of [[def-quadratic-consistency-test]].
