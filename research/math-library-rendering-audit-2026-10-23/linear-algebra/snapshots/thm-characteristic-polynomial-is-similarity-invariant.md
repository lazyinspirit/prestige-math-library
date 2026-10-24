---
id: thm-characteristic-polynomial-is-similarity-invariant
kind: theorem
title: 'Similar matrices have the same characteristic polynomial'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-characteristic-polynomial-of-a-matrix, def-similar-matrices, thm-determinant-multiplicative, prop-field-and-ring-matrix-interfaces-agree]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.1'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

If $A,B\in M_n(F)$ are similar, then $\chi_A(x)=\chi_B(x)$ in $F[x]$, including $n=0$.

## Facts & Assumptions

**Given:** Similar matrices $A,B\in M_n(F)$.

[L1] Similarity means that $B=P^{-1}AP$ for some invertible $P\in M_n(F)$ ([[def-similar-matrices]]).

[L2] For positive size over a commutative ring, $\det(XY)=\det(X)\det(Y)$ ([[thm-determinant-multiplicative]]).

[L3] Field matrices embed entrywise into matrices over $F[x]$, with the same matrix arithmetic and determinant ([[prop-field-and-ring-matrix-interfaces-agree]]).

[L4] The characteristic polynomial is $\det(xI-A)$ in positive size and $1$ in size zero ([[def-characteristic-polynomial-of-a-matrix]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, [L4] gives $\chi_A=1=\chi_B$. [L4]

1.2 Suppose $n\ge1$ and choose $P$ from [L1]. Over $F[x]$, $xI-B=P^{-1}(xI-A)P$. [L1, L3, algebra]

2.1 By [L2], $\det(xI-B)=\det(P^{-1})\det(xI-A)\det(P)$. Since $P^{-1}P=I$, multiplicativity also gives $\det(P^{-1})\det(P)=1$. [step 1.2, L2, L3, algebra]

3.1 Using [L4] in step 2.1 gives $\chi_B(x)=\chi_A(x)$, and step 1.1 supplies the remaining size. [step 1.1, step 2.1, L4] ∎
