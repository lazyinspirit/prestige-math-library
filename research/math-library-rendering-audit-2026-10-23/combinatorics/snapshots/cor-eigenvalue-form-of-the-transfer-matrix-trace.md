---
id: cor-eigenvalue-form-of-the-transfer-matrix-trace
kind: corollary
title: 'Let $K$ be a field, $p\ge1$, and $A\in M_p(K)$. If $\chi_A(t)=\prod_{i<p}(t-\lambda_i)$ in $K[t]$, then the transfer-matrix trace series is $\sum_{i<p}(1-\lambda_i x)^{-1}$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-closed-walk-trace-generating-functions, def-coordinate-endomorphism-over-a-commutative-ring, def-characteristic-polynomial-of-an-operator, def-trace-of-an-endomorphism, thm-spectral-mapping-for-polynomials, thm-trace-is-sum-of-eigenvalues, lem-binomial-series-for-a-repeated-pole, prop-ring-trace-agrees-with-the-published-field-trace]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Corollaries 4.7.3-4.7.4"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "H. Pinkham, Linear Algebra, Section 12.3"
      url: "https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field, let $p\ge1$, and let $A\in M_p(K)$. Suppose that its characteristic polynomial is displayed as a product of linear factors in the base field,

$$\chi_A(t)=\prod_{i<p}(t-\lambda_i)\quad\text{in }K[t],$$

where roots are repeated according to algebraic multiplicity. Then

$$\operatorname{tr}(A^n)=\sum_{i<p}\lambda_i^n\qquad(n\ge0),$$

and, formally,

$$\sum_{n\ge0}\operatorname{tr}(A^n)x^n=\sum_{i<p}\frac{1}{1-\lambda_i x}.$$

When $A$ is a transfer matrix, this is the eigenvalue form of its closed-walk trace series.

## Facts & Assumptions

**Given:** A field $K$, a positive size $p$, a matrix $A\in M_p(K)$, and the displayed split factorisation of $\chi_A$ in $K[t]$.

[L1] For a transfer matrix, the closed-walk series is $\sum_{n\ge0}\operatorname{tr}_K(A^n)x^n$ ([[cor-closed-walk-trace-generating-functions]]).

[L2] The matrix $A$ defines the coordinate endomorphism $T_A(x)=Ax$ ([[def-coordinate-endomorphism-over-a-commutative-ring]]).

[L3] The characteristic polynomial of an endomorphism equals that of any representing matrix ([[def-characteristic-polynomial-of-an-operator]]).

[L4] The trace of an endomorphism equals the trace of any representing matrix ([[def-trace-of-an-endomorphism]]).

[L5] If $\chi_T(t)=\prod_{i<p}(t-\lambda_i)$, then $\chi_{q(T)}(y)=\prod_{i<p}(y-q(\lambda_i))$ for every polynomial $q$ ([[thm-spectral-mapping-for-polynomials]]).

[L6] When the characteristic polynomial splits, the trace is the sum of its roots with algebraic multiplicity ([[thm-trace-is-sum-of-eigenvalues]]).

[L7] The case $j=1$ of the repeated-pole formula is $(1-\lambda x)^{-1}=\sum_{n\ge0}\lambda^nx^n$ ([[lem-binomial-series-for-a-repeated-pole]]).

[L8] Over a field, the commutative-ring matrix trace equals the published matrix trace ([[prop-ring-trace-agrees-with-the-published-field-trace]]).

## Proof

**Proof technique:** direct.

1.1 Let $T_A$ be the coordinate endomorphism from [L2]. By [L3], the given factorisation is also $\chi_{T_A}(t)=\prod_{i<p}(t-\lambda_i)$. [given, L2, L3]

2.1 Apply [L5] to $q(t)=t^n$. The roots of $\chi_{T_A^n}$ are $\lambda_i^n$ with the displayed multiplicities, so [L6] gives $\operatorname{tr}(T_A^n)=\sum_{i<p}\lambda_i^n$. [step 1.1, L5, L6]

3.1 By [L4] and [L8], the left side in step 2.1 is $\operatorname{tr}(A^n)$ in either trace convention. This proves the coefficient formula, including $n=0$. [step 2.1, L4, L8]

4.1 Multiply the coefficient formula by $x^n$, sum formally over $n\ge0$, and apply [L7] to each of the finitely many roots; this yields the displayed rational-series identity. [step 3.1, L7, algebra]

5.1 If $A$ is a transfer matrix, [L1] identifies the left side of step 4.1 with its closed-walk trace series. The split factorisation was assumed at the outset and is not inferred from algebraic closure or diagonalisation. [step 4.1, L1] ∎
