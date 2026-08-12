---
id: thm-cayley-hamilton
kind: theorem
title: 'Cayley-Hamilton: every finite-dimensional endomorphism satisfies its characteristic polynomial, $\chi_T(T)=0$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-characteristic-polynomial-of-an-operator, def-polynomial-evaluation-at-an-endomorphism, def-matrix-minors-cofactors-and-adjugate, thm-adjugate-identity-over-a-commutative-ring, prop-polynomial-coefficient-sequences-and-trimmed-lists-agree, thm-matrix-representation-is-a-vector-space-isomorphism, thm-matrix-of-a-composite-is-the-product]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'M. Khovanov, Linear Algebra II notes, §6'
      url: 'https://www.math.columbia.edu/~khovanov/MA2_2022/files/lin_alg.pdf'
    - title: 'The Stacks Project, Lemma 10.16.1 (05G6)'
      url: 'https://stacks.math.columbia.edu/tag/05G6'
pipeline_run: null
---

## Statement

For every endomorphism $T$ of a finite-dimensional vector space,

$$\chi_T(T)=0.$$

## Facts & Assumptions

**Given:** A finite-dimensional $F$-vector space $V$ and $T\in\mathcal L(V)$.

[L1] The operator characteristic polynomial is computed from any representing matrix and equals $1$ in dimension zero ([[def-characteristic-polynomial-of-an-operator]]); polynomial evaluation is $p(T)=\sum_k a_kT^k$ ([[def-polynomial-evaluation-at-an-endomorphism]]).

[L2] The adjugate consists of signed $(n-1)\times(n-1)$ minors ([[def-matrix-minors-cofactors-and-adjugate]]), and over a commutative ring $(xI-A)\operatorname{adj}(xI-A)=\det(xI-A)I$ ([[thm-adjugate-identity-over-a-commutative-ring]]).

[L3] Equality of polynomials is equality of all coefficients ([[prop-polynomial-coefficient-sequences-and-trimmed-lists-agree]]).

[L4] Matrix representation is injective and sends sums and scalar multiples to matrix operations ([[thm-matrix-representation-is-a-vector-space-isomorphism]]) and composition to matrix multiplication ([[thm-matrix-of-a-composite-is-the-product]]).

## Proof

**Proof technique:** direct coefficient comparison.

1.1 If $\dim V=0$, [L1] gives $\chi_T=1$, while $I_V=0_V$ is the unique endomorphism of the zero space; hence $\chi_T(T)=I_V=0_V$. [L1, algebra]

1.2 Suppose $n=\dim V\ge1$, choose a basis, and put $A=[T]$. Each entry of $\operatorname{adj}(xI-A)$ has degree at most $n-1$ by [L2], so write $\operatorname{adj}(xI-A)=\sum_{j=0}^{n-1}B_jx^j$; also write $\chi_A(x)=\sum_{k=0}^{n}c_kx^k$, where $c_n=1$. [L1, L2, choose, algebra]

2.1 Expanding the adjugate identity [L2] and comparing coefficients using [L3] gives $-AB_0=c_0I$, $B_{k-1}-AB_k=c_kI$ for $1\le k<n$, and $B_{n-1}=I$. [step 1.2, L2, L3, algebra]

3.1 Multiply the equation indexed by $k$ on the left by $A^k$, include the first equation at $k=0$ and the last identity at $k=n$, and add. The $A^kB_{k-1}$ terms telescope against the $A^kB_{k-1}$ terms of the preceding recurrence, leaving $\sum_{k=0}^{n}c_kA^k=0$. [step 2.1, algebra]

4.1 By [L1] and [L4], the left side of step 3.1 is the representing matrix of $\chi_T(T)$; injectivity of matrix representation therefore gives $\chi_T(T)=0$. [step 3.1, L1, L4]

5.1 Steps 1.1 and 4.1 prove Cayley-Hamilton in every finite dimension without treating substitution into a matrix-coefficient polynomial as a ring homomorphism. [step 1.1, step 4.1] ∎
