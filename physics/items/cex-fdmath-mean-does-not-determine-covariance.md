---
id: cex-fdmath-mean-does-not-determine-covariance
kind: counterexample
title: Equal means with unequal Reynolds covariance
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - thm-fdmath-finite-reynolds-identity
dependency_roles:
  thm-fdmath-finite-reynolds-identity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Glenn Flierl and Raffaele Ferrari, MIT OpenCourseWare 12.820, Turbulence in the Ocean and Atmosphere, Chapter 3, §3.6 (Spring 2006 lecture notes)"
      url: "https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement refuted

Fix any integer $d\ge2$ and any $\nu\ge0$, and define $\mathbb T^d=(\mathbb R/2\pi\mathbb Z)^d$. Consider the entire class of finite ensembles described as follows, allowing the number of members and the weight tuple to vary across the class. Each ensemble has an integer $N\ge1$ and fixed weights $a_j\ge0$ with $\sum_{j=1}^N a_j=1$. For $j=1,\ldots,N$, let $u_j:\mathbb R\times\mathbb R^d\to\mathbb R^d$ be continuously differentiable in $(t,x)$ with continuous second spatial derivatives, and let $p_j:\mathbb R\times\mathbb R^d\to\mathbb R$ be continuously differentiable. Require all these fields to be $2\pi$-periodic in each spatial coordinate, and suppose that for each $j=1,\ldots,N$, pointwise on $\mathbb R\times\mathbb R^d$,

$$\operatorname{div}u_j=0,\qquad \partial_tu_j+\operatorname{div}(u_j\otimes u_j)+\nabla p_j=\nu\Delta u_j.$$

For each such family, define $\bar u=\sum_j a_ju_j$, $\bar p=\sum_j a_jp_j$, and $R=\sum_j a_j(u_j-\bar u)\otimes(u_j-\bar u)$. The following universal determination assertion over this entire class is false: any two ensembles in the class with the same mean velocity and mean pressure fields $\bar u,\bar p$ must have the same covariance tensor $R$.

## Statement references

[Flierl and Ferrari, MIT OCW 12.820, Chapter 3, §3.6 (closure problem), full lecture notes](https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf)

## Facts & Assumptions

[F1] [[thm-fdmath-finite-reynolds-identity]]: For integers $d,N\ge1$, an open time interval $I$, an open spatial domain $\Omega\subseteq\mathbb R^d$, fixed nonnegative weights summing to one, and common $\nu\ge0$, the finite Reynolds theorem assumes velocities $u_j:I\times\Omega\to\mathbb R^d$ continuously differentiable in $(t,x)$ with continuous second spatial derivatives, continuously differentiable pressures $p_j:I\times\Omega\to\mathbb R$, continuous forcings $f_j:I\times\Omega\to\mathbb R^d$, and pointwise equations $\operatorname{div}u_j=0$ and $\partial_tu_j+\operatorname{div}(u_j\otimes u_j)+\nabla p_j=\nu\Delta u_j+f_j$. It defines $\bar u=\sum_j a_ju_j$, $v_j=u_j-\bar u$, and $R=\sum_j a_jv_j\otimes v_j$, and proves the exact averaged equation with covariance term $-\operatorname{div}R$. In this counterexample $I=\mathbb R$, $\Omega=\mathbb R^d$, and $f_j=0$.

[A1] Fix any integer $d\ge2$, any $\nu\ge0$, and any nonzero constant vector $w\in\mathbb R^d$.

[A2] The two proposed ensembles each have two members (so $N=2$) and fixed weights $a_1=a_2=1/2$; all velocities and pressures are the constant fields specified in the Counterexample steps.

**Given:** The torus, common viscosity, finite Reynolds equation and covariance convention [F1], and the nonzero vector [A1].

## Counterexample

1.1 Define ensemble A by $u_1=u_2=0$ and $p_1=p_2=0$. Define ensemble B by $u_1=w$, $u_2=-w$, and $p_1=p_2=0$, with weights $1/2,1/2$ in each. These velocity and pressure fields are constant, so the velocities are continuously differentiable with continuous second spatial derivatives, the pressures are continuously differentiable, and all fields are periodic. Every time and spatial derivative vanishes, so every member is divergence-free and satisfies the displayed equation for the common $\nu$. The mean velocities in both ensembles are $0$, and the mean pressures in both are $0$. [given, A1, A2, algebra]

2.1 By [F1], the covariance tensor in the averaged equation is $R=\sum_j a_j(u_j-\bar u)\otimes(u_j-\bar u)$. For ensemble A this is $R_A=0$. For ensemble B the fluctuations are $w,-w$, hence $R_B=\frac12w\otimes w+\frac12(-w)\otimes(-w)=w\otimes w\ne0$, since $w^{\mathsf T}R_Bw=|w|^4>0$. [given, F1, A1, A2, step 1.1, algebra]

3.1 The two admissible ensembles have identical mean velocity and pressure fields but unequal covariance tensors, contradicting the refuted universal determination claim. This excludes only unrestricted determination from those means; it does not address a closure relation restricted by additional hypotheses. [step 1.1, step 2.1, algebra] ∎
