---
id: lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients
kind: lemma
title: '$\chi_A(x)$ is monic of degree $n$; for $n\geq1$ its $x^{n-1}$ coefficient is $-\operatorname{tr}(A)$ and its constant coefficient is $(-1)^n\det(A)$, while $\chi_{0\times0}=1$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-characteristic-polynomial-of-a-matrix, def-determinant-of-a-square-matrix, def-trace-of-a-square-matrix, def-polynomial-degree-leading-coefficient-and-monic]
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
    - title: 'H. Pinkham, Linear Algebra, §12.1'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
    - title: 'M. Khovanov, Linear Algebra II notes, §6'
      url: 'https://www.math.columbia.edu/~khovanov/MA2_2022/files/lin_alg.pdf'
pipeline_run: null
---

## Statement

For $A\in M_n(F)$, the polynomial $\chi_A(x)$ is monic of degree $n$. If $n\ge1$, the coefficient of $x^{n-1}$ is $-\operatorname{tr}(A)$ and the constant coefficient is $(-1)^n\det(A)$. For $n=0$, $\chi_A(x)=1$.

## Facts & Assumptions

**Given:** A matrix $A=(a_{ij})\in M_n(F)$.

[L1] For $n\ge1$, $\chi_A(x)=\det(xI_n-A)$; for $n=0$, it is $1$ ([[def-characteristic-polynomial-of-a-matrix]]).

[L2] For $n\ge1$, $\det(C)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}c_{\sigma(i),i}$ ([[def-determinant-of-a-square-matrix]]).

[L3] The trace of $A$ is $\sum_{i<n}a_{ii}$ ([[def-trace-of-a-square-matrix]]).

[L4] The degree of a nonzero polynomial is the largest index of a nonzero coefficient, its leading coefficient is the coefficient at that index, and it is monic when that leading coefficient is $1$ ([[def-polynomial-degree-leading-coefficient-and-monic]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, [L1] gives $\chi_A=1$, which is monic of degree $0$; the additional coefficient assertions are restricted to $n\ge1$. [L1, L4]

1.2 Assume $n\ge1$. In [L2] for $xI_n-A$, the identity permutation contributes $\prod_{i<n}(x-a_{ii})$. Every nonidentity permutation moves at least two indices, so its term contains at most $n-2$ diagonal factors and has degree at most $n-2$. [L1, L2, algebra]

1.3 Evaluating at $x=0$ gives the constant coefficient $\det(-A)=(-1)^n\det(A)$ directly from [L2]. [L1, L2, algebra]

2.1 Hence the coefficient of $x^n$ is $1$, the coefficient of $x^{n-1}$ comes only from the identity term and is $-\sum_{i<n}a_{ii}=-\operatorname{tr}(A)$, and there are no terms of degree above $n$. Thus $\chi_A$ is monic of degree $n$. [step 1.2, L3, L4, algebra]

3.1 Steps 1.1–2.1 establish every asserted dimension and coefficient case. [step 1.1, step 2.1, step 1.3] ∎
