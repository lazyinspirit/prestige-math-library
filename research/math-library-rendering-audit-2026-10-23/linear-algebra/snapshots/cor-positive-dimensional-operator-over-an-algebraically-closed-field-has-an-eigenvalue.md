---
id: cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue
kind: corollary
title: 'Every endomorphism of a nonzero finite-dimensional vector space over an algebraically closed field has an eigenvalue'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraically-closed-field, lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients, thm-spectrum-is-the-root-set-of-the-characteristic-polynomial, def-characteristic-polynomial-of-an-operator]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'M. Khovanov, Linear Algebra II notes, §6'
      url: 'https://www.math.columbia.edu/~khovanov/MA2_2022/files/lin_alg.pdf'
pipeline_run: null
---

## Statement

Let $V$ be a nonzero finite-dimensional vector space over an algebraically closed field $F$. Every endomorphism $T:V\to V$ has an eigenvalue in $F$.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional $F$-vector space $V$, an algebraically closed field $F$, and $T\in\mathcal L(V)$.

[L1] Every nonconstant polynomial over an algebraically closed field has a root in that field ([[def-algebraically-closed-field]]).

[L2] The characteristic polynomial of an endomorphism is by definition that of any representing matrix ([[def-characteristic-polynomial-of-an-operator]]), and for $A\in M_n(F)$ the polynomial $\chi_A(x)$ is monic of degree $n$ ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]). So $\chi_T$ is monic of degree $n=\dim V$.

[L3] The roots in $F$ of $\chi_T$ are exactly the eigenvalues of $T$ ([[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 Since $V\ne\{0\}$, its finite dimension $n$ is positive, so [L2] makes $\chi_T$ a nonconstant polynomial. [L2, given]

2.1 By [L1], $\chi_T$ has a root $\lambda\in F$, and [L3] makes $\lambda$ an eigenvalue of $T$. [step 1.1, L1, L3]

3.1 Hence every such endomorphism has an eigenvalue; the excluded zero-dimensional case would have characteristic polynomial $1$ and no eigenvalue. [step 2.1, L2, L3] ∎
