---
id: thm-normal-equations-square-the-spectral-condition-number
kind: theorem
title: "For full-column-rank A, the normal equations square the spectral condition number"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-condition-number-of-a-nonsingular-linear-system, thm-singular-value-decomposition, thm-operator-norm-is-the-largest-singular-value, thm-least-squares-solutions-and-normal-equation, cor-rank-equals-number-of-nonzero-singular-values, def-linear-isometry-and-orthogonal-or-unitary-operator]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 18 and Lecture 31"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---



## Statement

Let $m,n\in\mathbb{N}$ with $n\ge 1$ and $m\ge n$, and let
$A\in M_{m\times n}(\mathbb{R})$ have full column rank (rank $n$), with singular
values $\sigma_1\ge\cdots\ge\sigma_n>0$. Define the spectral condition number
of the rectangular matrix $A$ by

$$\kappa_2(A):=\frac{\sigma_1}{\sigma_n};$$

for a square invertible $A$ this agrees with
$\lVert A\rVert_2\lVert A^{-1}\rVert_2$ of
[[def-condition-number-of-a-nonsingular-linear-system]]. Then:

1. The normal-equation matrix $A^{\mathsf T}A$ is invertible, with
   $\kappa_2(A^{\mathsf T}A)=\kappa_2(A)^{2}$;
2. equivalently,
   $$\kappa_2(A^{\mathsf T}A)=\frac{\sigma_1^{2}}{\sigma_n^{2}}.$$

The least-squares normal equation $A^{\mathsf T}Ax=A^{\mathsf T}b$ of
[[thm-least-squares-solutions-and-normal-equation]] therefore has condition
number exactly the square of the condition number of the least-squares problem
itself.

## Facts & Assumptions

**Given:** A matrix $A\in M_{m\times n}(\mathbb{R})$ of full column rank with $n\ge 1$, $m\ge n$, and singular values $\sigma_1\ge\cdots\ge\sigma_n>0$.

[L1] There is a singular value decomposition $A=U\Sigma V^{\mathsf T}$ with orthogonal $U\in M_m(\mathbb{R})$, $V\in M_n(\mathbb{R})$ and $\Sigma$ diagonal with entries $\sigma_1,\dots,\sigma_n$ on the $n\times n$ block ([[thm-singular-value-decomposition]]).

[L2] The operator norm of a linear map is its largest singular value ([[thm-operator-norm-is-the-largest-singular-value]]).

[L3] The rank of a linear map is the number of its positive singular values; in particular the full-column-rank hypothesis is exactly $\sigma_n>0$ ([[cor-rank-equals-number-of-nonzero-singular-values]]).

[L4] An orthogonal operator satisfies $T^{*}T=TT^{*}=I$ ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

[L5] Least-squares solutions are exactly the solutions of the normal equation $A^{\mathsf T}Ax=A^{\mathsf T}b$ ([[thm-least-squares-solutions-and-normal-equation]]).

## Proof

**Proof technique:** direct.

1.1 From [L1], $A^{\mathsf T}A=V\Sigma^{\mathsf T}\Sigma V^{\mathsf T}$, and $\Sigma^{\mathsf T}\Sigma=\operatorname{diag}(\sigma_1^{2},\dots,\sigma_n^{2})$ is diagonal with decreasing nonnegative entries; by [L4], $V$ is orthogonal with $VV^{\mathsf T}=I_n$. [L1, L4, algebra]

2.1 The displayed product $V\operatorname{diag}(\sigma_j^{2})V^{\mathsf T}$ is a singular value decomposition of $A^{\mathsf T}A$ with singular values $\sigma_1^{2}\ge\cdots\ge\sigma_n^{2}$, since the two orthogonal factors are $V$ and $V$. [step 1.1, L1, algebra]

3.1 By [L3], full column rank means $\sigma_n>0$, so every singular value of $A^{\mathsf T}A$ in step 2.1 is positive, and $A^{\mathsf T}A$ has the inverse $V\operatorname{diag}(\sigma_j^{-2})V^{\mathsf T}$: the two products with $A^{\mathsf T}A$ give $I_n$ by [L4]. [step 2.1, L3, L4, algebra]

4.1 By [L2] applied to $A^{\mathsf T}A$ and to its inverse, $\lVert A^{\mathsf T}A\rVert_2=\sigma_1^{2}$ and $\lVert(A^{\mathsf T}A)^{-1}\rVert_2=\sigma_n^{-2}$, the largest singular value of $V\operatorname{diag}(\sigma_j^{-2})V^{\mathsf T}$ being $\sigma_n^{-2}$; hence $\kappa_2(A^{\mathsf T}A)=\sigma_1^{2}\sigma_n^{-2}$. [step 2.1, step 3.1, L2, algebra]

5.1 By the definition of $\kappa_2(A)$ in the Statement, $\kappa_2(A)^{2}=\sigma_1^{2}/\sigma_n^{2}$, which equals the value in step 4.1; this is claim 2, and claim 1 is its equivalence with the condition number of the square invertible matrix $A^{\mathsf T}A$ from [[def-condition-number-of-a-nonsingular-linear-system]], the displayed agreement for square $A$ being $\lVert A^{-1}\rVert_2=\sigma_n^{-1}$ by [L2] applied to the SVD $A^{-1}=V\Sigma^{-1}U^{\mathsf T}$ of [L1]. [step 4.1, L1, L2, algebra]

6.1 The normal equation of [L5] has coefficient matrix $A^{\mathsf T}A$, so its condition number is the one computed in step 5.1. [step 5.1, L5]

7.1 Claims 1 and 2 are step 5.1, and the final sentence is step 6.1. [step 5.1, step 6.1] ∎

## Remarks

- **The square is unavoidable for the normal-equation route.** Forming $A^{\mathsf T}A$ squares the condition number even though the least-squares problem itself has condition number $\kappa_2(A)$; computing with $A$ directly through a QR route keeps the factor $\kappa_2(A)$ instead. For $A=\begin{pmatrix}1&0\\0&10^{-8}\\0&0\end{pmatrix}$, the Gram-Schmidt factor is $R=\operatorname{diag}(1,10^{-8})$ while $A^{\mathsf T}A=\operatorname{diag}(1,10^{-16})$.
