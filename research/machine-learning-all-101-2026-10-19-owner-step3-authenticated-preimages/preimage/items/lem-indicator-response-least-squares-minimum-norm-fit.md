---
id: lem-indicator-response-least-squares-minimum-norm-fit
kind: lemma
title: The minimum-norm indicator-response least-squares fit exists uniquely
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-indicator-response-least-squares-classifier
  - thm-least-squares-solutions-and-normal-equation
  - thm-singular-value-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
---

## Statement

Let $n,q\ge1$ and $K\ge2$ be finite, let $X\in\mathbb R^{n\times q}$, and let $Y\in\mathbb R^{n\times K}$ be an indicator response matrix. Among all minimizers of $\|Y-XB\|_F^2$ over $B\in\mathbb R^{q\times K}$ there is a unique one of smallest Frobenius norm. If $X=U_rD_rV_r^T$ is a thin singular-value decomposition with rank $r>0$, orthonormal columns in $U_r,V_r$, and positive diagonal entries in $D_r$, then this minimizer is $B_*=V_rD_r^{-1}U_r^TY$. If $r=0$, then $X=0$ and $B_*=0$. In either case the full minimizer set is $\{B_*+N:XN=0\}$.

## Statement references

[[def-indicator-response-least-squares-classifier]]

[[thm-least-squares-solutions-and-normal-equation]]

[[thm-singular-value-decomposition]]

[Hastie, Tibshirani, and Friedman, ESL, §4.2, equations (4.3)–(4.6)](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Stanford CS229 Spring 2022 lecture notes, §§1.2 and 2.1](https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf)

## Facts & Assumptions

**Given:** Finite real matrices $X\in\mathbb R^{n\times q}$ and $Y\in\mathbb R^{n\times K}$, with $n,q\ge1$ and $K\ge2$.

[F1] The indicator-response fit minimizes $(2n)^{-1}\|Y-XB\|_F^2$ over coefficient matrices; multiplying the objective by $2n$ does not change its minimizers. [[def-indicator-response-least-squares-classifier]]

[F2] For a finite-dimensional linear map, least-squares minimizers exist, satisfy the normal equation, and any two differ by an element of the kernel. [[thm-least-squares-solutions-and-normal-equation]]

[F3] Every finite-dimensional real inner-product-space map has a singular-value decomposition with orthonormal input and output bases and positive singular values on its image. [[thm-singular-value-decomposition]]

## Proof

1.1 If $r=0$, [F3] implies $X=0$. By the objective in [F1], the least-squares objective is then constant in $B$, so every matrix is a minimizer and $B_*=0$ is the unique one of smallest Frobenius norm. The minimizer set is $\{N:XN=0\}$, as claimed. [F1, F3, given, algebra]

1.2 Suppose $r>0$ and write the thin SVD $X=U_rD_rV_r^T$ from [F3]. Define $B_*=V_rD_r^{-1}U_r^TY$. Orthonormality gives $XB_*=U_rU_r^TY$, whose $k$th column is the orthogonal projection of the $k$th column of $Y$ onto $\operatorname{im}X=\operatorname{span}(U_r)$. [F3, given, construct, algebra]

2.1 Each residual column of $Y-XB_*$ is therefore orthogonal to $\operatorname{im}X$. Applying [F2] to each column shows that every column of $B_*$ is a least-squares minimizer, hence $B_*$ minimizes the matrix objective. [F2, step 1.2]

2.2 By [F2], any other matrix minimizer has the form $B_*+N$ with $XN=0$. The SVD in [F3] gives $\ker X=\operatorname{span}(v_{r+1},\ldots,v_q)$, orthogonal to the row space $\operatorname{span}(v_1,\ldots,v_r)$ containing every column of $B_*$. [F2, F3, step 1.2]

3.1 Columnwise Pythagoras now gives $\|B_*+N\|_F^2=\|B_*\|_F^2+\|N\|_F^2$. Thus $B_*$ has the smallest Frobenius norm among all minimizers, and equality is possible only for $N=0$. Together with step 1.1, this proves existence and uniqueness also in rank zero. [step 1.1, step 2.2, algebra] ∎
