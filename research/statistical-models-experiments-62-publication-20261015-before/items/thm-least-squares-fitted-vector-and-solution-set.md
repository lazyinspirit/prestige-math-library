---
id: thm-least-squares-fitted-vector-and-solution-set
kind: theorem
title: "Least-squares fitted vectors and residuals are unique"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-least-squares-solution-set
  - def-euclidean-inner-product
  - def-euclidean-linear-map
  - thm-least-squares-solutions-and-normal-equation
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - def-orthogonal-projection
  - thm-orthogonal-projection-is-the-unique-nearest-point
  - thm-rank-nullity
  - lem-of-square-monotone
  - lem-standard-basis-of-f-n
  - cor-matrix-rank-equals-the-rank-of-its-linear-map
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Statistics for Applications, Section 15: Multiple Linear Regression"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf"
    - title: "Statistics: Lecture Three — Linear Models"
      url: "https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf"
proof_strategy: direct
---

## Statement

Let $n,p\ge1$, $X\in\mathbb R^{n\times p}$, $y\in\mathbb R^n$, and
$C=\operatorname{col}(X)\subseteq\mathbb R^n$. For the least-squares solution
set $\mathcal B_{\mathrm{LS}}(y)$ of
[[def-least-squares-solution-set]], the following hold:

1. $\mathcal B_{\mathrm{LS}}(y)$ is nonempty, and $b$ is in it exactly when
   $X^T(Xb-y)=0$.
2. If $b_0\in\mathcal B_{\mathrm{LS}}(y)$, then
   $\mathcal B_{\mathrm{LS}}(y)=b_0+\ker X$.
3. Every least-squares solution has the same fitted vector $P_Cy$ and residual
   $y-P_Cy$.
4. The direction space $\ker X$ of the affine solution set has dimension
   $p-\operatorname{rank}(X)$.

The theorem makes no statistical moment or distributional assumption.

## Facts & Assumptions

**Given:** Integers $n,p\ge1$, a real matrix $X\in\mathbb R^{n\times p}$, and $y\in\mathbb R^n$. Put $T_X:\mathbb R^p\to\mathbb R^n$, $T_Xb:=Xb$, and $C=\operatorname{col}(X)=\operatorname{im}T_X$.

[F1] The least-squares solution set is $\mathcal B_{\mathrm{LS}}(y)=\operatorname*{arg\,min}_{b\in\mathbb R^p} \|y-Xb\|_2^2$; it is set-valued until uniqueness is proved. [[def-least-squares-solution-set]].

[F2] For a finite-dimensional linear map $T$ and target $y$, minimizers of $\|Tb-y\|$ exist, are characterized by $T^*(Tb-y)=0$, and form $b_0+\ker T$. [[thm-least-squares-solutions-and-normal-equation]].

[F3] The Euclidean inner product on $\mathbb R^m$ is the dot product $\langle x,y\rangle=\sum_{k<m}x_ky_k$. [[def-euclidean-inner-product]].

[F4] In standard real coordinate bases, the adjoint matrix of a linear map is its transpose. [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]].

[F5] The orthogonal projection $P_Cy$ is the $C$-component of $y$ and $y-P_Cy\in C^\perp$. [[def-orthogonal-projection]].

[F6] $P_Cy$ is the unique point of $C$ nearest to $y$. [[thm-orthogonal-projection-is-the-unique-nearest-point]].

[F7] For a linear map with finite-dimensional domain, $\dim V=\dim\ker T+\dim\operatorname{im}T$. [[thm-rank-nullity]].

[F8] Squaring is strictly increasing on nonnegative reals: $s<t$ if and only if $s^2<t^2$ for $s,t\ge0$. [[lem-of-square-monotone]].

[F9] The standard coordinate vectors form a basis of $\mathbb R^p$, so $\dim\mathbb R^p=p$. [[lem-standard-basis-of-f-n]].

[F10] The matrix rank of $X$ equals the rank of $T_X$, which is $\dim\operatorname{im}T_X$. [[cor-matrix-rank-equals-the-rank-of-its-linear-map]].

## Proof

**Proof technique:** direct.

1.1 Regard $X$ as the linear map $T_X:\mathbb R^p\to\mathbb R^n$, $T_Xb=Xb$, with the Euclidean inner products of [F3]. Every residual norm is nonnegative, and [F8] says squaring is strictly increasing on the nonnegative reals. Therefore the minimizers of $\|y-Xb\|_2^2$ are exactly the minimizers of $\|Xb-y\|_2$. Applying [F2] and identifying $T_X^*=X^T$ by [F4] gives a minimizer, the normal equation $X^T(Xb-y)=0$, and the full solution set $b_0+\ker X$. [F1, F2, F3, F4, F8, algebra]

1.2 The image of $T_X$ is $C$. Every minimizer maps to a point of $C$ nearest to $y$, and every point of $C$ has a preimage under $T_X$. By [F5] and [F6] that nearest point is exactly $P_Cy$ and is unique. Thus every minimizing $b$ has fitted vector $Xb=P_Cy$, and its residual is the unique vector $y-P_Cy$. [F2, F5, F6, choose]

2.1 By step 1.1 the solution set is the translate $b_0+\ker X$, whose direction space is $\ker X$. By rank-nullity [F7] and $\dim\mathbb R^p=p$ from [F9], $\dim\ker X=p-\dim\operatorname{im}T_X$. Fact [F10] identifies $\dim\operatorname{im}T_X=\operatorname{rank}(X)$, giving the claimed direction-space dimension. [F7, F9, F10, step 1.1, algebra] ∎
