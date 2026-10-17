---
id: ex-closed-convex-program-with-positive-duality-gap
kind: example
title: A closed convex program with a positive duality gap when Slater fails
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-convex-program-duality-and-slater-condition
  - thm-lagrangian-weak-duality
  - thm-slater-strong-duality-and-dual-attainment
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Zhiyuan Li, Convex Optimization, Lecture 5: Lagrange Multipliers and KKT"
      url: https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-5___-Lagrange-Multipliers-and-KKT/
      locator: Example 5.5, lines 418–446; the source's open-domain perspective constraint has primal value 1 and dual value 0. This carrier adds its closed perspective boundary and verifies it independently.
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 5, Sections 5.2.3 and 5.3.2, printed pp. 226–236; Slater assumptions and strong-duality conclusion.
---

## Example

Define the extended-real perspective
$$
\phi(x,y)=\begin{cases}x^2/y,&y>0,\\0,&(x,y)=(0,0),\\+\infty,&\text{otherwise}.\end{cases}
$$
Minimize $f_0(x,y)=e^{-x}$ subject to $\phi(x,y)\le0$. Both functions are
proper closed convex, the primal minimum is $1$, Slater fails, and the
Lagrangian dual value is $0$.

## Facts & Assumptions

**Given:** The perspective $\phi$, objective $f_0$, and the single
inequality constraint $\phi\le0$.

[F1] A proper closed convex function is specified by its closed convex
epigraph; the Lagrangian dual uses
$q(\lambda)=\inf_{(x,y)\in\operatorname{dom}f_0\cap\operatorname{dom}\phi}
\bigl(f_0(x,y)+\lambda\phi(x,y)\bigr)$
([[def-convex-program-duality-and-slater-condition]]).

[F2] Weak duality gives $d^*\le p^*$, while Slater plus finite attained
primal value would give equality and an attained dual certificate
([[thm-lagrangian-weak-duality]],
[[thm-slater-strong-duality-and-dual-attainment]]).

## Verification

1.1 The epigraph of $\phi$ is exactly $E=\{(x,y,t):y\ge0,\ t\ge0,\ x^2\le yt\}$. For $y>0$ this is the inequality $t\ge x^2/y$; when $y=0$ it forces $x=0$ and $t\ge0$; for $y<0$ it is empty. Thus $E$ is closed, being defined by continuous non-strict inequalities. It is convex: if $|x_j|\le\sqrt{y_jt_j}$ for $j=1,2$, then for $0\le\theta\le1$, $ |\theta x_1+(1-\theta)x_2| \le\theta\sqrt{y_1t_1}+(1-\theta)\sqrt{y_2t_2} \le\sqrt{(\theta y_1+(1-\theta)y_2) (\theta t_1+(1-\theta)t_2)} $ by Cauchy–Schwarz. Therefore $\phi$ is closed convex. The objective is continuous and has second derivative $e^{-x}>0$ in $x$, so it is closed convex and proper as well. [given, F1, algebra]

2.1 On its domain $\phi\ge0$. If $y>0$, $\phi(x,y)\le0$ forces $x=0$; if $y=0$, finiteness already forces $x=0$. Hence the feasible set is $\{(0,y):y\ge0\}$ and $f_0=1$ throughout it, so $p^*=1$ and the primal minimum is attained, for example at $(0,0)$. No point has $\phi(x,y)<0$, so Slater fails. [given, step 1.1, algebra]

3.1 For $\lambda\ge0$, every point in the Lagrangian domain has $e^{-x}+\lambda\phi(x,y)\ge0$, so $q(\lambda)\ge0$. At $\lambda=0$, taking $x\to+\infty$ gives $q(0)=0$. For $\lambda>0$, take $(x_k,y_k)=(k,k^3)$; then $e^{-x_k}+\lambda\phi(x_k,y_k)=e^{-k}+\lambda/k\to0$, so again $q(\lambda)=0$. Therefore $d^*=\sup_{\lambda\ge0}q(\lambda)=0$ and the positive duality gap is $p^*-d^*=1$. This does not contradict [F2], because its Slater hypothesis fails. [F1, F2, step 2.1, algebra]

4.1 The calculation gives a closed convex primal problem with attained finite optimum and a strict gap; the missing strict-feasibility condition is exactly the boundary that blocks the Slater theorem's certificate. [step 1.1, step 2.1, step 3.1] ∎
