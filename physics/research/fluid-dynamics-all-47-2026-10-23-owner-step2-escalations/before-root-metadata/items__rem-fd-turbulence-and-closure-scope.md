---
id: rem-fd-turbulence-and-closure-scope
kind: remark
title: Turbulent averaging and open closure questions
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - thm-fdmath-finite-reynolds-identity
dependency_roles:
  thm-fdmath-finite-reynolds-identity: mathematical-premise
physical_scope: >-
  Formal finite weighted averaging of smooth incompressible model fields and
  contextual limits on closure claims. No statistical averaging theorem,
  empirical turbulence observation, closure law, scaling law, or universality
  result is asserted.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Glenn Flierl and Raffaele Ferrari, MIT OpenCourseWare 12.820, Turbulence in the Ocean and Atmosphere, Chapter 3 (Spring 2006 lecture notes)"
      url: "https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf"
    - title: "H. Tennekes and J. L. Lumley, A First Course in Turbulence (1972), full-text digital copy"
      url: "https://djvu.online/file/rx5CLAMFpVjaT"
---

## Remark

Let $I\subseteq\mathbb R$ be an open interval, let $\Omega\subseteq\mathbb R^3$ be open, and let $N\ge1$. For $j=1,\ldots,N$, let $u_j:I\times\Omega\to\mathbb R^3$ be $C^1$ in $(t,x)$ with continuous second spatial derivatives, let $p_j:I\times\Omega\to\mathbb R$ be $C^1$, and let $f_j:I\times\Omega\to\mathbb R^3$ be continuous. Suppose $\operatorname{div}u_j=0$ and

$$\partial_tu_j+\operatorname{div}(u_j\otimes u_j)+\nabla p_j=\nu\Delta u_j+f_j$$

for one common constant $\nu\ge0$. Fix weights $a_j\ge0$ with $\sum_{j=1}^N a_j=1$, define $\bar u=\sum_j a_ju_j$, $\bar p=\sum_j a_jp_j$, $\bar f=\sum_j a_jf_j$, $v_j=u_j-\bar u$, and $R=\sum_j a_jv_j\otimes v_j$, and use $(u\otimes v)_{rs}=u_rv_s$ with rowwise tensor divergence. The exact finite weighted identity is

$$\partial_t\bar u+\operatorname{div}(\bar u\otimes\bar u)+\nabla\bar p=\nu\Delta\bar u+\bar f-\operatorname{div}R.$$

This is an identity for the specified smooth fields and fixed finite weights. For comparison, choose $t_0\in I$ and a finite $T>0$ such that $[t_0,t_0+T]\subset I$. For each fixed $x\in\Omega$, the temporal average of the first supplied field over this window is $T^{-1}\int_{t_0}^{t_0+T}u_1(s,x)\,ds$; its componentwise ordinary Riemann integral exists because $u_1(\cdot,x)$ is continuous on the compact window. No equality of this temporal average, the finite weighted mean $\bar u$, or a probability-space expectation is assumed or deduced. No long-time limit as $T\to\infty$ is asserted. The tensor $R$ is the covariance term left by the nonlinear product; a closure prescription is an additional model relation that specifies this unresolved term using selected mean fields or additional variables. The identity itself supplies no such prescription. This remark asserts no measured turbulent flow, statistical averaging theorem, closure law, scaling law, universality result, or existence theorem for turbulent solutions.

## Remark references

[[thm-fdmath-finite-reynolds-identity|finite weighted Reynolds identity and its hypotheses]]

[Flierl and Ferrari, MIT OpenCourseWare 12.820, Chapter 3, §§3.3 and 3.6–3.8, complete 11-page lecture notes](https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf)

[Tennekes and Lumley, *A First Course in Turbulence* (1972), Preface and Chapter 2, §2.1, full-text digital copy](https://djvu.online/file/rx5CLAMFpVjaT)
