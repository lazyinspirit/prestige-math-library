---
id: lem-qa-36-partial-trace-contracts-trace-distance
kind: lemma
title: Partial trace contracts trace distance
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps:
  - def-qc-partial-trace
  - thm-qc-partial-trace-characterization-and-basis-independence
  - thm-qc-partial-trace-positive-and-trace-preserving
  - def-qc-trace-distance
  - def-qc-trace-norm
  - thm-qc-trace-norm-spectral-formula
  - def-qc-tensor-map
  - def-qc-tensor-register-and-permutation
  - lem-qc-tensor-product-basis-and-dimension
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
proof_strategy: direct
axiom_use: None; only finite-dimensional spectral theory and finite trace sums are used.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §3.1.1
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
---

## Statement

Let $H_A,H_B$ be nonzero finite-dimensional complex inner-product spaces and let $\rho,\sigma$ be density operators on $H_A\otimes H_B$. Then
$$D(\operatorname{Tr}_{H_B}\rho,\operatorname{Tr}_{H_B}\sigma)\le D(\rho,\sigma).$$

## Facts & Assumptions

**Given:** The finite-dimensional spaces, density operators $\rho,\sigma$, the partial trace over the second factor, and trace distance.

[F1] In ordered product orthonormal bases, $(\operatorname{Tr}_{H_B}X)_{ii'}=\sum_jX_{(i,j),(i',j)}$, and the partial trace satisfies $\operatorname{tr}((\operatorname{Tr}_{H_B}X)A)=\operatorname{tr}(X(A\otimes I_{H_B}))$ ([[def-qc-partial-trace]], [[thm-qc-partial-trace-characterization-and-basis-independence]]).

[F2] The partial trace of a nonnegative operator is nonnegative and it preserves total trace, so it maps density operators to density operators ([[thm-qc-partial-trace-positive-and-trace-preserving]]).

[F3] Trace distance is one half of the trace norm of the state difference; the trace norm is the sum of singular values and equals $\operatorname{tr}\sqrt{X^*X}$ ([[def-qc-trace-distance]], [[def-qc-trace-norm]], [[thm-qc-trace-norm-spectral-formula]]).

[F4] A finite-dimensional Hermitian operator has an orthonormal eigenbasis with real eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F5] $A\otimes I_{H_B}$ acts by $A$ on the first factor and identity on the second; the product basis is orthonormal ([[def-qc-tensor-map]], [[def-qc-tensor-register-and-permutation]], [[lem-qc-tensor-product-basis-and-dimension]]).

[F6] The operator norm is the maximum of $\|Tv\|$ over unit vectors on a nonzero domain ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F7] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\,\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

1.1 Put $X=\rho-\sigma$ and $Y=\operatorname{Tr}_{H_B}X$. Both are Hermitian. For $Y$, this follows directly from [F1]: conjugating its $(i,i')$ entry and using $X_{(i,j),(i',j)}=\overline{X_{(i',j),(i,j)}}$ gives $\overline{Y_{ii'}}=Y_{i'i}$. By [F2], the two partial traces of $\rho,\sigma$ are density operators, so their trace distance is defined. [given, F1, F2, algebra]

1.2 For any finite-dimensional Hermitian $Z$, diagonalize it in an orthonormal basis with eigenvalues $\lambda_i\in\mathbb R$. If $A=A^*$ and $\|A\|\le1$, then each diagonal entry $\langle Ae_i,e_i\rangle$ is real and lies in $[-1,1]$: [F7] gives $|\langle Ae_i,e_i\rangle|\le\|Ae_i\|\|e_i\|\le\|A\|\le1$, where the middle inequality follows from [F6] by scaling a unit vector. Hence $|\operatorname{tr}(ZA)|=|\sum_i\lambda_i\langle Ae_i,e_i\rangle|\le\sum_i|\lambda_i|=\|Z\|_1$ by [F3]–[F4]. Equality is attained by the self-adjoint contraction $A=\sum_{\lambda_i>0}P_i-\sum_{\lambda_i<0}P_i$, so $\|Z\|_1=\max_{A=A^*,\,\|A\|\le1}\operatorname{tr}(ZA)$. [given, F3, F4, F6, F7, algebra]

2.1 For every self-adjoint contraction $A$ on $H_A$, [F4] gives an orthonormal eigenbasis of $A$. If $Ae=\lambda e$ for a unit eigenvector, then [F7] and [F6] give $|\lambda|=|\langle Ae,e\rangle|\le\|Ae\|\|e\|\le\|A\|\le1$. By [F5], the product basis diagonalizes $A\otimes I_{H_B}$ with each eigenvalue repeated, so this tensor operator is a self-adjoint contraction as well. The pairing identity [F1] gives $\operatorname{tr}(YA)=\operatorname{tr}(X(A\otimes I_{H_B}))$, whose absolute value is at most $\|X\|_1$ by step 1.2 applied on $H_A\otimes H_B$. Taking the maximum over $A$ in step 1.2 on $H_A$ yields $\|Y\|_1\le\|X\|_1$. [F1, F4, F5, F6, F7, step 1.2, algebra]

3.1 Apply the trace-distance definition [F3] to $X=\rho-\sigma$ and $Y=\operatorname{Tr}_{H_B}\rho-\operatorname{Tr}_{H_B}\sigma=\operatorname{Tr}_{H_B}X$. Step 2.1 gives $2D(\operatorname{Tr}_{H_B}\rho,\operatorname{Tr}_{H_B}\sigma)=\|Y\|_1\le\|X\|_1=2D(\rho,\sigma)$; division by $2$ proves the assertion. [F1, F3, step 2.1, algebra] ∎
