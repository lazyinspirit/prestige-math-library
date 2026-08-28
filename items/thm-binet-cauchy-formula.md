---
id: thm-binet-cauchy-formula
kind: theorem
title: "The Binet-Cauchy formula"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-determinant-of-a-square-matrix, def-matrices-over-a-commutative-ring,
       def-ring-matrix-product-identity-and-transpose,
       thm-leibniz-determinant-is-alternating-multilinear-and-normalized]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, MIT 18.314 handout, Theorem 1.4"
      url: "https://ocw.mit.edu/courses/18-314-combinatorial-analysis-fall-2014/2724112ea36679f82dc04f0b2f4f355e_MIT18_314F14_mt.pdf"
---

## Statement

Let $A$ be an $m\times n$ matrix and $B$ an $n\times m$ matrix over a
commutative ring, where $m\ge1$. For an $m$-element subset
$S=\{s_0<\dots<s_{m-1}\}\subseteq n=\{0,\dots,n-1\}$, let $A[S]$ be the
$m\times m$ submatrix of $A$ formed from columns $s_0,\dots,s_{m-1}$, and let
$B[S]$ be the $m\times m$ submatrix of $B$ formed from rows
$s_0,\dots,s_{m-1}$.

If $m>n$, then $\det(AB)=0$. If $m\le n$, then

$$\det(AB)=\sum_{|S|=m}\det(A[S])\det(B[S]),$$

where the sum runs over all $m$-element subsets
$S\subseteq n$.

## Facts & Assumptions

**Given:** An $m\times n$ matrix $A=(a_{ij})$ and an $n\times m$ matrix $B=(b_{ij})$ over a commutative ring.

[F1] The determinant is multilinear and alternating in the columns of a square matrix ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

[F2] For conformable matrices, $(AB)_{ij}=\sum_{r<n}a_{ir}b_{rj}$ ([[def-ring-matrix-product-identity-and-transpose]]).

[F3] The determinant is the signed Leibniz sum over the permutations of the column index set ([[def-determinant-of-a-square-matrix]]).

## Proof

**Proof technique:** direct.

1.1 Write the columns of $A$ as $a_0,\dots,a_{n-1}$ and the columns of $AB$ as $c_0,\dots,c_{m-1}$. Then [F2] gives $c_j=\sum_{r<n} b_{rj}a_r$ for each $j<m$. By multilinearity of the determinant from [F1], this gives $\det(AB)=\det(c_0,\dots,c_{m-1})=\sum_{r_0,\dots,r_{m-1}<n}\bigl(\prod_{j<m}b_{r_j,j}\bigr)\det(a_{r_0},\dots,a_{r_{m-1}})$. [F1, F2, algebra]

2.1 If some index repeats among $r_0,\dots,r_{m-1}$, then the determinant term vanishes by alternation in [F1]. When $m>n$, every $m$-tuple has a repeated index, so all terms vanish and $\det(AB)=0$. [step 1.1, F1]

3.1 Assume now that $m\le n$. By step 2.1, the sum from step 1.1 may be restricted to tuples whose indices are all distinct. Such tuples are exactly the permutations of the $m$-element sets $S=\{s_0<\dots<s_{m-1}\}$. Grouping together the $m!$ terms attached to one fixed $S$ gives $\sum_{\sigma\in S_m}\bigl(\prod_{j<m}b_{s_{\sigma(j)}j}\bigr)\det(a_{s_{\sigma(0)}},\dots,a_{s_{\sigma(m-1)}})=\det(A[S])\det(B[S])$, because permuting the chosen columns of $A[S]$ contributes the same sign that appears in the Leibniz expansion of $B[S]$. Summing over all $m$-element subsets $S$ proves the formula. [step 1.1, step 2.1, F1, F3, algebra] ∎
