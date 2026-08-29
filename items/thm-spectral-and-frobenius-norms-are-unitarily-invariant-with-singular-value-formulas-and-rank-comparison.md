---
id: thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
kind: theorem
title: "Spectral and Frobenius norms are unitarily invariant, are given by singular values, and satisfy the sharp rank comparison"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-frobenius-matrix-norm, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-singular-value-decomposition, thm-operator-norm-is-the-largest-singular-value, cor-rank-equals-number-of-nonzero-singular-values, def-linear-isometry-and-orthogonal-or-unitary-operator, cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Matrix Nearness Problems"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-15.html"
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 3"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---



## Statement

Let $\mathbb F$ be $\mathbb R$ or $\mathbb C$, let $A\in M_{m\times n}(\mathbb F)$, and
let $\sigma_1\ge\sigma_2\ge\cdots\ge\sigma_r>0$ be the positive singular values of
$A$, where $r=\operatorname{rank}A$; write $\sigma_1=0$ when $r=0$.

1. **Spectral formula.** $\lVert A\rVert_2=\sigma_1$, where $\lVert\cdot\rVert_2$ is
   the operator norm of [[def-operator-norm-on-a-finite-dimensional-inner-product-space]].
2. **Frobenius formula.** $\lVert A\rVert_F=\bigl(\sigma_1^{2}+\cdots+\sigma_r^{2}\bigr)^{1/2}$.
3. **Unitary invariance.** For every unitary $U\in M_m(\mathbb F)$ and
   $V\in M_n(\mathbb F)$ (over $\mathbb F=\mathbb R$: orthogonal matrices),
   $$\lVert UAV\rVert_2=\lVert A\rVert_2,\qquad \lVert UAV\rVert_F=\lVert A\rVert_F.$$
4. **Sharp rank comparison.**
   $$\lVert A\rVert_2\;\le\;\lVert A\rVert_F\;\le\;\sqrt{r}\,\lVert A\rVert_2.$$
   The lower inequality is an equality exactly when $r\le 1$; the upper
   inequality is an equality exactly when $\sigma_1=\cdots=\sigma_r$, that is,
   when all nonzero singular values coincide. In particular
   $\lVert A\rVert_F\le\sqrt{\min(m,n)}\,\lVert A\rVert_2$.

## Facts & Assumptions

**Given:** A matrix $A\in M_{m\times n}(\mathbb F)$ over $\mathbb F=\mathbb R$ or
$\mathbb C$, with singular values $\sigma_1\ge\cdots\ge\sigma_r>0$.

[L1] There is a singular value decomposition $A=U\Sigma V^{*}$ with $U,V$
unitary (orthogonal over $\mathbb R$) and $\Sigma$ the diagonal matrix of the
singular values ([[thm-singular-value-decomposition]]).

[L2] The operator norm of a map between finite-dimensional real or complex
inner product spaces equals its largest singular value
([[thm-operator-norm-is-the-largest-singular-value]]).

[L3] The rank of a linear map is the number of its positive singular values
([[cor-rank-equals-number-of-nonzero-singular-values]]).

[L4] A unitary (orthogonal) operator preserves norms: $\lVert Qv\rVert=\lVert v\rVert$
for every vector $v$ ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

[L5] Compositions and adjoints of unitary operators are unitary
([[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is [L2] applied to the map $x\mapsto Ax$: $\lVert A\rVert_2=\sigma_1$. [L2]

1.2 Left invariance of the Frobenius norm. For unitary $Q\in M_m(\mathbb F)$, each column of $QA$ is the image under $Q$ of the corresponding column of $A$, so by [L4] $\lVert(QA)\text{ column }j\rVert_2=\lVert A\text{ column }j\rVert_2$ for every $j<n$; summing over $j$ gives $\lVert QA\rVert_F^{2}=\sum_{j<n}\lVert(QA)_j\rVert_2^{2}=\sum_{j<n}\lVert A_j\rVert_2^{2}=\lVert A\rVert_F^{2}$, using the entry formula of [[def-frobenius-matrix-norm]]. [L4, algebra]

1.3 Right invariance of the Frobenius norm. For unitary $Z\in M_n(\mathbb F)$, the $i$-th row of $AZ$ is $\operatorname{row}_i(A)Z$, and by [L4] applied to $Z^{*}$, $\lVert\operatorname{row}_i(A)Z\rVert_2=\lVert\operatorname{row}_i(A)\rVert_2$ for every $i<m$; summing over $i$ gives $\lVert AZ\rVert_F^{2}=\sum_{i<m}\lVert\operatorname{row}_i(A)\rVert_2^{2}=\lVert A\rVert_F^{2}$. [L4, algebra]

1.4 Singular values of $UAV$. If $A=U_0\Sigma V_0^{*}$ is the decomposition of [L1], then $UAV=(UU_0)\Sigma(V^{*}V_0)=(UU_0)\Sigma(V_0^{*}V)^{*}$, and by [L5] the factors $UU_0$ and $V_0^{*}V$ are unitary, so this is a singular value decomposition of $UAV$ with the same singular values as $A$. [L1, L5, algebra]

2.1 From [L1], $A=U\Sigma V^{*}$, so steps 1.2 and 1.3 give $\lVert A\rVert_F^{2}=\lVert U\Sigma V^{*}\rVert_F^{2}=\lVert\Sigma\rVert_F^{2}$, and the diagonal entries of $\Sigma$ are $\sigma_1,\dots,\sigma_r$ followed by zeros, so $\lVert\Sigma\rVert_F^{2}=\sigma_1^{2}+\cdots+\sigma_r^{2}$ by the entry formula of [[def-frobenius-matrix-norm]]. This is claim 2. [L1, step 1.2, step 1.3, algebra]

3.1 Claim 3 follows: by step 1.4 the singular values of $UAV$ are those of $A$, so claim 1 gives $\lVert UAV\rVert_2=\sigma_1=\lVert A\rVert_2$ and claim 2 gives $\lVert UAV\rVert_F=\bigl(\sum_j\sigma_j^{2}\bigr)^{1/2}=\lVert A\rVert_F$. [step 1.4, step 1.1, step 2.1]

3.2 The lower inequality. The maximum $\sigma_1$ is at most the Euclidean total $\bigl(\sigma_1^{2}+\cdots+\sigma_r^{2}\bigr)^{1/2}$, each term being nonnegative, so claims 1 and 2 give $\lVert A\rVert_2\le\lVert A\rVert_F$. Equality holds exactly when $\sigma_2=\cdots=\sigma_r=0$, that is exactly when $r\le 1$ by [L3]. [step 1.1, step 2.1, L3, algebra]

3.3 The upper inequality. Each $\sigma_j\le\sigma_1$, so $\sigma_1^{2}+\cdots+\sigma_r^{2}\le r\sigma_1^{2}$, and claims 1 and 2 give $\lVert A\rVert_F\le\sqrt{r}\,\sigma_1=\sqrt{r}\,\lVert A\rVert_2$. Equality holds exactly when $\sum_{j\le r}(\sigma_1^{2}-\sigma_j^{2})=0$, a sum of nonnegative terms, hence exactly when every $\sigma_j=\sigma_1$. [step 1.1, step 2.1, algebra]

4.1 Since $r\le\min(m,n)$ by [L3], the upper bound also gives $\lVert A\rVert_F\le\sqrt{\min(m,n)}\,\lVert A\rVert_2$. [step 3.3, L3]

5.1 Claims 1, 2, 3 and 4 are steps 1.1, 2.1, 3.1 and steps 3.2, 3.3 and 4.1. [step 1.1, step 2.1, step 3.1, step 3.2, step 3.3, step 4.1] ∎
