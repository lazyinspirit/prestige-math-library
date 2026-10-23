---
id: thm-fdmath-finite-reynolds-identity
kind: theorem
title: Exact finite Reynolds averaged equation
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fdmath-finite-ensemble-and-covariance
dependency_roles:
  def-fdmath-finite-ensemble-and-covariance: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Glenn Flierl and Raffaele Ferrari, MIT OpenCourseWare 12.820, Turbulence in the Ocean and Atmosphere, Chapter 3 (Spring 2006 lecture notes)"
      url: "https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf"
    - title: "Gregory L. Eyink, Johns Hopkins University Turbulence Notes, Chapter VIb, §(B) Reynolds Averaging and kinetic-energy balances, pp. 17–19"
      url: "https://www.ams.jhu.edu/~eyink/Turbulence/notes/ChapterVIb.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Let $I\subseteq\mathbb R$ be an open interval, let $d,N\ge1$ be integers, let $\Omega\subseteq\mathbb R^d$ be open, and fix constants $a_j\ge0$ with $\sum_{j=1}^N a_j=1$ and a common $\nu\ge0$. For $j=1,\ldots,N$, let $u_j:I\times\Omega\to\mathbb R^d$ be continuously differentiable in $(t,x)$ with continuous second spatial derivatives, let $p_j:I\times\Omega\to\mathbb R$ be continuously differentiable, and let $f_j:I\times\Omega\to\mathbb R^d$ be continuous. Suppose pointwise that

$$\operatorname{div}u_j=0,\qquad \partial_tu_j+\operatorname{div}(u_j\otimes u_j)+\nabla p_j=\nu\Delta u_j+f_j.$$

Here $(u\otimes v)_{rs}=u_rv_s$, $\operatorname{div}$ of a matrix field is rowwise, $(\operatorname{div}A)_r=\sum_{s=1}^d\partial_{x_s}A_{rs}$, and $\Delta$ acts componentwise. Define the weighted means $\bar u=\sum_j a_ju_j$, $\bar p=\sum_j a_jp_j$, and $\bar f=\sum_j a_jf_j$, the fluctuations $v_j=u_j-\bar u$, and the covariance tensor $R=\sum_j a_jv_j\otimes v_j$. Then, pointwise on $I\times\Omega$,

$$\operatorname{div}\bar u=0,\qquad \sum_{j=1}^N a_jv_j=0,\qquad \sum_{j=1}^N a_j u_j\otimes u_j=\bar u\otimes\bar u+R,$$

and the exact averaged equation is

$$\partial_t\bar u+\operatorname{div}(\bar u\otimes\bar u)+\nabla\bar p=\nu\Delta\bar u+\bar f-\operatorname{div}R.$$

The tensor $R$ is symmetric positive semidefinite, with $z^{\mathsf T}Rz=\sum_j a_j(v_j\cdot z)^2\ge0$ for every $z\in\mathbb R^d$. With $\operatorname{tr}A:=\sum_{r=1}^d A_{rr}$ for $A\in\mathbb R^{d\times d}$, the pointwise energy split is $\sum_j a_j|u_j|^2=|\bar u|^2+\operatorname{tr}R$. These are identities for the specified smooth functions; they assert neither existence of such solutions nor a statistical or physical interpretation.

## Statement references

[Flierl and Ferrari, MIT OCW 12.820, Chapter 3, §§3.2 and 3.6–3.7 (covariance, closure, and Reynolds equations), full lecture notes](https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf)

[Eyink, Johns Hopkins University Turbulence Notes, Chapter VIb, §(B) Reynolds Averaging and kinetic-energy balances, pp. 17–19](https://www.ams.jhu.edu/~eyink/Turbulence/notes/ChapterVIb.pdf)

## Facts & Assumptions

[F1] [[def-fdmath-finite-ensemble-and-covariance]]: For fixed weights $a_j\ge0$ summing to one, the weighted mean is $\bar X=\sum_j a_jX_j$ and the fluctuation is $X'_j=X_j-\bar X$.

[F2] [[def-fdmath-finite-ensemble-and-covariance]]: The cross-covariance is $C(X,Y)=\sum_j a_jX'_j\otimes Y'_j$; in particular the covariance tensor is $C(X)=C(X,X)$.

[A1] The fields, fixed weights, common viscosity, divergence constraints, and pointwise equations satisfy every hypothesis in the Statement.

**Given:** The data in the Statement, including [A1] and the finite weighted mean and covariance convention [F1].

## Proof

1.1 Because the weights are fixed constants and all sums are finite, each displayed derivative of a weighted mean is the same weighted sum of the corresponding derivatives. Thus $\operatorname{div}\bar u=\sum_j a_j\operatorname{div}u_j=0$, while $\sum_j a_jv_j=\sum_j a_ju_j-\bar u\sum_j a_j=\bar u-\bar u=0$. [given, F1, A1, algebra]

2.1 For each $j$, write $u_j=\bar u+v_j$ and expand the outer product. Summing with weights gives $\sum_j a_j u_j\otimes u_j=\bar u\otimes\bar u+\bar u\otimes\sum_j a_jv_j+(\sum_j a_jv_j)\otimes\bar u+\sum_j a_jv_j\otimes v_j=\bar u\otimes\bar u+R$, using step 1.1 and the covariance definition [F2]. [F1, F2, step 1.1, algebra]

3.1 Multiply the $j$th equation in [A1] by $a_j$ and sum over $j$. Fixed weights commute with all indicated linear differential operators, so the time, pressure, viscosity, and forcing terms become their barred means; substituting step 2.1 into the summed nonlinear term yields $\partial_t\bar u+\operatorname{div}(\bar u\otimes\bar u)+\nabla\bar p=\nu\Delta\bar u+\bar f-\operatorname{div}R$. The divergence constraint is step 1.1. [given, A1, F1, F2, step 1.1, step 2.1, algebra]

4.1 By [F2], $R=\sum_j a_jv_j\otimes v_j$, so it is symmetric and $z^{\mathsf T}Rz=\sum_j a_j(v_j\cdot z)^2\ge0$. Also $\operatorname{tr}R=\sum_j a_j|v_j|^2$, so expanding $\sum_j a_j|u_j|^2=\sum_j a_j|\bar u+v_j|^2$ and using step 1.1 gives $\sum_j a_j|u_j|^2=|\bar u|^2+\operatorname{tr}R$. [F2, step 1.1, algebra] ∎
