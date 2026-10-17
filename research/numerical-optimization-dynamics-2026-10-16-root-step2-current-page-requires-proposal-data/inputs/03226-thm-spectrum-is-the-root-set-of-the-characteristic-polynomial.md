---
id: thm-spectrum-is-the-root-set-of-the-characteristic-polynomial
kind: theorem
title: 'For every finite-dimensional space, $\sigma_F(T)$ is exactly the set of roots in $F$ of $\chi_T$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-characteristic-polynomial-of-an-operator, prop-eigenvalue-iff-shift-is-not-invertible, thm-operator-invertible-iff-determinant-nonzero, def-polynomial-evaluation-and-root]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'M. Khovanov, Linear Algebra II notes, §6'
      url: 'https://www.math.columbia.edu/~khovanov/MA2_2022/files/lin_alg.pdf'
pipeline_run: null
---

## Statement

For an endomorphism $T$ of a finite-dimensional $F$-vector space,

$$\sigma_F(T)=\{\lambda\in F:\chi_T(\lambda)=0\}.$$

## Facts & Assumptions

**Given:** A finite-dimensional $F$-vector space $V$ and $T\in\mathcal L(V)$.

[L1] In any basis, $\chi_T$ is the characteristic polynomial of the representing matrix; in dimension zero it is $1$ ([[def-characteristic-polynomial-of-an-operator]]).

[L2] A scalar $\lambda$ is an eigenvalue exactly when $T-\lambda I_V$ is not invertible ([[prop-eigenvalue-iff-shift-is-not-invertible]]).

[L3] A finite-dimensional endomorphism is invertible exactly when its determinant is nonzero ([[thm-operator-invertible-iff-determinant-nonzero]]).

[L4] A root of a polynomial is a scalar at which its evaluation is zero ([[def-polynomial-evaluation-and-root]]).

## Proof

**Proof technique:** direct.

1.1 If $\dim V=0$, the spectrum is empty because there is no nonzero eigenvector, while [L1] gives $\chi_T=1$, which has no root. [L1, L4]

1.2 Suppose $\dim V=n\ge1$ and choose a basis with matrix $A=[T]$. Then $\chi_T(\lambda)=\det(\lambda I_n-A)=(-1)^n\det(A-\lambda I_n)$. [L1, algebra]

2.1 The scalar $(-1)^n$ is nonzero. Thus step 1.2, [L3], and [L2] give $\chi_T(\lambda)=0$ if and only if $T-\lambda I_V$ is not invertible if and only if $\lambda\in\sigma_F(T)$. [step 1.2, L2, L3, L4]

3.1 Steps 1.1 and 2.1 prove the set equality in every finite dimension and prove both directions of the equivalence. [step 1.1, step 2.1] ∎
