---
id: prop-full-column-rank-pseudoinverse-formula
kind: proposition
title: "If $A$ has full column rank, then $A^+=(A^*A)^{-1}A^*$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-rank-equals-number-of-nonzero-singular-values,
       def-invertible-matrix-and-general-linear-group,
       thm-moore-penrose-pseudoinverse-exists-and-is-unique,
       thm-singular-value-decomposition]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gene H. Golub, Least squares, singular values and matrix approximations"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/700449/AplMat_11-1966-5_17.pdf"
    - title: "Stanford CS205L, Unit 11: Zero Singular Values"
      url: "https://web.stanford.edu/class/cs205l/assets/unit_11_svd_pinv_solns.pdf"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$ and let
$A\in M_{m\times n}(\mathbb F)$ have full column rank $n$. Then $A^*A$ is
invertible and

$$A^+=(A^*A)^{-1}A^*.$$

## Facts & Assumptions

**Given:** A matrix $A\in M_{m\times n}(\mathbb F)$ of full column rank, where
$\mathbb F\in\{\mathbb R,\mathbb C\}$.

[L1] Full column rank means that all $n$ singular values of $A$ are nonzero ([[cor-rank-equals-number-of-nonzero-singular-values]]).

[L2] Every finite real or complex matrix has a unique Moore--Penrose pseudoinverse ([[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]).

[L3] An invertible matrix has a two-sided inverse ([[def-invertible-matrix-and-general-linear-group]]).

[L4] Every finite real or complex matrix has a singular value decomposition
([[thm-singular-value-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], choose an SVD $A=U\Sigma V^*$, and by [L1] the diagonal matrix $\Sigma$ has the form $\operatorname{diag}(\sigma_1,\dots,\sigma_n)$ with every $\sigma_i>0$. [L1, L4]
2.1 Then $$ A^*A=V\Sigma^* \Sigma V^* =V\operatorname{diag}(\sigma_1^2,\dots,\sigma_n^2)V^*, $$ so [L3] gives $$ (A^*A)^{-1}=V\operatorname{diag}(\sigma_1^{-2},\dots,\sigma_n^{-2})V^*. $$ [L3, step 1.1, algebra]
3.1 Multiplying by $A^*=V\Sigma^*U^*$ yields $$ B:=(A^*A)^{-1}A^* =V\operatorname{diag}(\sigma_1^{-1},\dots,\sigma_n^{-1})U^*. $$ Direct diagonal multiplication shows that $B$ satisfies all four Penrose equations for $A$, so uniqueness in [L2] gives $B=A^+$. [L2, step 2.1, algebra]
4.1 Therefore $A^*A$ is invertible and $A^+=(A^*A)^{-1}A^*$. [step 3.1] ∎
