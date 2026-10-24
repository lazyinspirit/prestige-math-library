---
id: thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent
kind: theorem
title: 'Eigenvectors belonging to pairwise distinct eigenvalues are linearly independent'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-linear-independence, def-field]
aliases: []
landmark: true
proof_strategy: induction
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
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., Theorem 5.11'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

Let $T:V\to V$ be linear. If $v_1,\ldots,v_m$ are eigenvectors of $T$ belonging respectively to pairwise distinct eigenvalues $\lambda_1,\ldots,\lambda_m$, then $v_1,\ldots,v_m$ are linearly independent.

## Facts & Assumptions

**Given:** Eigenvectors $v_1,\ldots,v_m$ of $T$ with pairwise distinct eigenvalues $\lambda_1,\ldots,\lambda_m$.

[L1] An eigenvector is nonzero and satisfies $T(v_i)=\lambda_i v_i$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

[L2] A finite family is linearly independent when every vanishing linear combination has all coefficients zero ([[def-linear-independence]]).

[F1] Every nonzero element of a field has a multiplicative inverse ([[def-field]]).

## Proof

**Proof technique:** induction on $m$.

1.1 For $m=0$ the empty family is independent, and for $m=1$ the equation $a_1v_1=0$ forces $a_1=0$ because $v_1\ne0$. [base, L1, L2, F1]

1.2 Assume $m\ge2$ and that the claim holds for $m-1$ eigenvectors. Suppose $\sum_{i=1}^m a_iv_i=0$. Applying $T-\lambda_mI_V$ and using [L1] gives $\sum_{i=1}^{m-1}a_i(\lambda_i-\lambda_m)v_i=0$. [ih, L1, L2, given, algebra]

2.1 The first $m-1$ eigenvalues remain pairwise distinct, so the induction hypothesis gives $a_i(\lambda_i-\lambda_m)=0$ for $i<m$. Since $\lambda_i-\lambda_m\ne0$, [F1] gives $a_i=0$ for every $i<m$. [step 1.2, ih, F1, given]

3.1 The original relation now reads $a_mv_m=0$, so $a_m=0$ by [L1] and [F1]. Thus the family is independent by [L2]. [step 2.1, L1, L2, F1]

4.1 The base cases and induction step prove the claim for every finite family. [step 1.1, step 3.1, discharge-induction] ∎
