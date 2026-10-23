---
id: prop-fd-finite-observation-identifiability
kind: proposition
title: Whitened observation identifiability and stability
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-fd-fluid-coefficient-observation-model
  - thm-singular-value-decomposition
  - thm-non-negative-square-root-exists-and-is-unique
dependency_roles:
  def-fd-fluid-coefficient-observation-model: mathematical-premise
  thm-singular-value-decomposition: mathematical-premise
  thm-non-negative-square-root-exists-and-is-unique: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition, §7E"
      url: "https://linear.axler.net/LADR4e.pdf"
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 2 §2.1 and Chapter 4 §4.1"
      url: "https://arxiv.org/pdf/1506.07825v1"
---

## Statement

Let $E$ be a nonzero linear subspace of the finite coefficient space $\mathbb R^m$, let $G:\mathbb R^m\to\mathbb R^p$ be the declared linear observation map, and let $R\in\mathbb R^{p\times p}$ be symmetric positive definite. Let $R^{1/2}$ be the unique symmetric positive-semidefinite square root of $R$ and set $W=(R^{1/2})^{-1}$, so $W^TW=R^{-1}$. The whitened map is $A=W(G|_E):E\to\mathbb R^p$, and define its smallest gain by $\sigma_{\min}(A)=\inf\{\|Av\|_2:v\in E,\ \|v\|_2=1\}$; the singular-value decomposition shows this infimum is the smallest singular value and is attained. Identifiability on $E$ means injectivity of $G|_E$. It holds exactly when $\sigma_{\min}(A)>0$. If it holds, then for every true $a\in E$, every realized error $e\in\mathbb R^p$, and datum $y=Ga+e$, the unique weighted least-squares estimate $\hat a=\arg\min_{b\in E}\|W(y-Gb)\|_2$ satisfies
$$\|\hat a-a\|_2\le\frac{\|We\|_2}{\sigma_{\min}(A)}.$$
If $\sigma_{\min}(A)=0$, a nonzero vector in $E\cap\ker G$ makes distinct coefficients observationally indistinguishable. The estimate is pointwise in the realized error; it is not a confidence or probability statement. If a pressure representation includes an additive-constant coefficient direction in $\ker G$, that direction must be fixed or quotiented out to obtain identifiable coefficients. This finite-dimensional result is not a general coefficient-identifiability theorem for a partial differential equation.

## Statement references

[[def-fd-fluid-coefficient-observation-model]]

[[thm-singular-value-decomposition]]

[[thm-non-negative-square-root-exists-and-is-unique]]

[Axler, Linear Algebra Done Right, §7E, pp. 270–278](https://linear.axler.net/LADR4e.pdf)

[Law, Stuart, and Zygalakis, Chapter 2 §2.1 and Chapter 4 §4.1](https://arxiv.org/pdf/1506.07825v1)

## Facts & Assumptions

**Given:** The finite coefficient observation map, a nonzero coefficient subspace $E$, a symmetric positive-definite weighting matrix $R$, and a realized vector $e$ with $y=Ga+e$.

[A1] The coefficient and one-window observation maps have the finite-dimensional domains and matrix meanings stated in the local observation-interface definition. [[def-fd-fluid-coefficient-observation-model]]

[F1] Every finite-dimensional positive-semidefinite operator has a unique positive-semidefinite square root. [[thm-non-negative-square-root-exists-and-is-unique]]

[F2] Every linear map between finite-dimensional real inner-product spaces has orthonormal domain and codomain bases in which it acts by its nonnegative singular values and is zero on the remaining domain basis vectors. [[thm-singular-value-decomposition]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Since $R\succ0$, it is positive semidefinite, so [F1] gives a symmetric positive-semidefinite $S$ with $S^2=R$. If $Sv=0$, then $Rv=S^2v=0$, and positive definiteness of $R$ forces $v=0$; hence $S$ is invertible. Therefore $W=S^{-1}$ is symmetric positive definite and $W^TW=S^{-2}=R^{-1}$. [A1, F1, given, algebra]

1.2 Apply [F2] to $A$ on the nonzero finite-dimensional inner-product space $E$: for an orthonormal basis $e_1,\ldots,e_d$ of $E$, the SVD gives $r\le\min(d,p)$ positive singular values $s_1,\ldots,s_r$, an orthonormal list $f_1,\ldots,f_r$ in $\mathbb R^p$, $Ae_i=s_if_i$ for $i\le r$, and $Ae_i=0$ for $i>r$. For $v=\sum_i c_ie_i$ with $\|v\|_2=1$, $\|Av\|_2^2=\sum_{i=1}^r s_i^2c_i^2$. Thus the infimum in the Statement is zero when $r<d$ and is $\min_i s_i$ when $r=d$; it is positive exactly when $A$ is injective. If $r<d$, any $e_j$ with $j>r$ is a nonzero kernel vector. [F2, given, algebra]

2.1 The operator $W$ is invertible by step 1.1, so for every $v\in E$, $Av=0$ if and only if $WGv=0$, which holds if and only if $Gv=0$. Thus $A$ is injective exactly when $G|_E$ is injective, and in the noninjective case a nonzero $v\in E\cap\ker G$ gives $G(a+v)=Ga$ for every $a\in E$. [A1, step 1.1, step 1.2, algebra]

3.1 Suppose $\sigma_{\min}(A)>0$. Step 1.2 then has $r=d\le p$, so the $d$ vectors $f_1,\ldots,f_d$ form an orthonormal list that extends to an orthonormal basis $f_1,\ldots,f_p$ of $\mathbb R^p$ by [F2]. For $y=Ga+e$, write $a=\sum_{i=1}^d a_ie_i$ and $Wy=\sum_{i=1}^d b_if_i+b_\perp$, where $b_\perp$ is orthogonal to each $f_i$ for $i\le d$. For any $b=\sum_{i=1}^d c_ie_i\in E$, $\|W(y-Gb)\|_2^2=\sum_{i=1}^d(b_i-s_ic_i)^2+\|b_\perp\|_2^2$; since each $s_i>0$, this is uniquely minimized by $c_i=b_i/s_i$. Therefore $\hat a-a=\sum_{i=1}^d s_i^{-1}\langle We,f_i\rangle e_i$. Orthonormality gives $\|\hat a-a\|_2^2=\sum_{i=1}^d s_i^{-2}|\langle We,f_i\rangle|^2\le\sigma_{\min}(A)^{-2}\sum_{i=1}^d|\langle We,f_i\rangle|^2\le\sigma_{\min}(A)^{-2}\|We\|_2^2$, where the last inequality follows by expanding $We$ in the full orthonormal basis. Taking square roots proves the bound. [A1, F2, step 1.2, algebra] ∎

