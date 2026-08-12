---
id: cor-characteristic-polynomial-evaluation-has-only-zero-eigenvalues
kind: corollary
title: 'If $\chi_T$ splits over $F$, every eigenvalue of $\chi_T(T)$ is $0$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-spectral-mapping-for-polynomials, def-characteristic-polynomial-of-an-operator, thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.3.4'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

Let $T$ be a finite-dimensional endomorphism whose characteristic polynomial splits over $F$. Every eigenvalue of $\chi_T(T)$ is $0$.

## Facts & Assumptions

**Given:** A finite-dimensional endomorphism $T$ for which $\chi_T$ splits over $F$.

[L1] If $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$, then $\chi_{p(T)}(y)=\prod_{i<n}(y-p(\lambda_i))$ ([[thm-spectral-mapping-for-polynomials]]).

[L2] In dimension zero, $\chi_T=1$ ([[def-characteristic-polynomial-of-an-operator]]).

[L3] The eigenvalues of an operator are exactly the roots of its characteristic polynomial ([[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 If $\dim V=0$, the spectrum of every endomorphism is empty, so the assertion is vacuous; [L2] also gives the correct empty factorization. [L2, L3]

1.2 Otherwise write $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$. Each $\lambda_i$ is a root, so $\chi_T(\lambda_i)=0$. Applying [L1] with $p=\chi_T$ gives $\chi_{\chi_T(T)}(y)=\prod_{i<n}(y-0)=y^n$. [L1, given, algebra]

2.1 By [L3], the only possible root, and hence the only possible eigenvalue, is $0$. Together with step 1.1 this proves the claim. [step 1.1, step 1.2, L3] ∎
