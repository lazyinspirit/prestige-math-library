---
id: cor-jordan-block-data-controls-eigenspaces-and-polynomials
kind: corollary
title: "For split operators, Jordan blocks read off eigenspace multiplicities and both canonical polynomials"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-jordan-form-uniqueness-from-ranks-of-powers, thm-minimal-polynomial-is-well-defined-and-controls-annihilators, def-eigenvalue-eigenvector-eigenspace-and-spectrum]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Section 8C"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $T$ be an endomorphism whose characteristic polynomial splits. For each eigenvalue $\lambda$, its algebraic multiplicity is the sum of the sizes of the $\lambda$-Jordan blocks, its geometric multiplicity $\dim\ker(T-\lambda I)$ is the number of those blocks, and the exponent of $x-\lambda$ in $\mu_T$ is the size of the largest such block. Thus
$$\chi_T=\prod_\lambda(x-\lambda)^{\sum_jm_{\lambda,j}},\qquad \mu_T=\prod_\lambda(x-\lambda)^{\max_jm_{\lambda,j}}.$$
For $V=0$, both products are empty and equal $1$.

## Facts & Assumptions

**Given:** A finite-dimensional endomorphism $T$ with split characteristic polynomial and Jordan block sizes $m_{\lambda,j}$.

[L1] The Jordan block multiset is determined up to order ([[thm-jordan-form-uniqueness-from-ranks-of-powers]]).

[L2] A scalar $\lambda$ is an eigenvalue when $\ker(T-\lambda I)$ contains a nonzero vector, and that kernel is its eigenspace ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

[L3] A polynomial annihilates $T$ exactly when it is divisible by $\mu_T$, with $\mu_T=1$ on the zero space ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

## Proof

**Proof technique:** direct.

1.1 A block $J_m(\lambda)$ contributes $m$ copies of $x-\lambda$ to the characteristic polynomial and one independent initial vector to $\ker(T-\lambda I)$; blocks at other eigenvalues contribute no kernel because their shifted blocks are invertible. This proves the algebraic- and geometric-multiplicity claims. [L1, L2, algebra]

1.2 On $J_m(\lambda)$, $(T-\lambda I)^a$ vanishes exactly when $a\ge m$. If $p=(x-\lambda)^aq$ with $q(\lambda)\ne0$, then $q(J_m(\lambda))$ is invertible by a finite geometric-series inverse for its nonzero scalar part; hence $p$ annihilates that block exactly when $a\ge m$. Applying this to every block and using [L3] gives the displayed minimal polynomial. [L3, algebra]

2.1 Multiplying the block contributions gives the characteristic-polynomial formula, and the empty block list gives $\chi_T=\mu_T=1$ on the zero space. [step 1.1, step 1.2, L3] ∎
