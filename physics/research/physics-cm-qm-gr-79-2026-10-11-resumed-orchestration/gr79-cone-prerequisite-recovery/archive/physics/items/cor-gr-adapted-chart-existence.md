---
id: cor-gr-adapted-chart-existence
kind: corollary
title: "Every congruence admits a local adapted chart"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-congruence-and-adapted-charts, def-gr-smooth-lorentzian-objects, thm-flow-box-theorem, def-integral-curve-of-a-vector-field]
dependency_roles:
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-flow-box-theorem: mathematical-premise
  def-integral-curve-of-a-vector-field: mathematical-premise
sources:
  references:
    - title: "J. M. Lee, Introduction to Smooth Manifolds, 2nd ed., Ch. 9 'Integral Curves and Flows': flows and the canonical form of a flow (the flow box theorem), printed pp. 206-222"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007), Ch. 4, section 4.2: coordinates adapted to the foliation, with x^0 = const. on the leaves, printed pp. 54-59"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$U\subseteq M$ be a nonempty open subset, let $n$ be an observer congruence on
$U$, and let $p\in U$
([[def-gr-observer-congruence-and-adapted-charts]]). Then there is a chart
$(u^0,u^1,u^2,u^3)$ of $M$ with domain $U'\subseteq U$ containing $p$ such
that

$$n=\frac{\partial}{\partial u^0}\qquad\text{on }U',$$

and this chart is $n$-adapted: its spatial coordinates $u^1,u^2,u^3$ are
constant along every integral curve of $n$ contained in $U'$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, an observer congruence $n$ on an open set $U$, and a point $p\in U$.

[L1] An observer congruence on $U$ is a smooth vector field $n$ on $U$ with $g_q(n_q,n_q)=-1$ for every $q\in U$; its integral curves are its observer curves, and a chart with domain $U'\subseteq U$ is $n$-adapted when its spatial coordinates are constant along every integral curve of $n$ contained in $U'$ ([[def-gr-observer-congruence-and-adapted-charts]]).

[L2] A smooth vector field $X$ on a manifold with $X_p\neq0$ at a point $p$ admits local coordinates $v^1,\dots,v^4$ near $p$ in which $X=\partial/\partial v^1$ ([[thm-flow-box-theorem]]).

[L3] The value $g_q(n_q,n_q)$ is a smooth function of $q$ on $U$, and $g_q(n_q,n_q)=-1$ implies $n_q\neq0$ ([[def-gr-smooth-lorentzian-objects]]).

[L4] A curve $\gamma$ is an integral curve of a vector field $X$ when $\gamma'=X_{\gamma}$ at every parameter value ([[def-integral-curve-of-a-vector-field]]).

## Proof

**Proof technique:** direct.

1.1 The field $n$ is smooth on the open set $U$ and nowhere vanishing: by [L1] it satisfies $g_q(n_q,n_q)=-1$ at every $q\in U$, so $n_q$ is a nonzero vector by [L3]. Applying [L2] to $n$ at the point $p$ gives a chart $(v^1,v^2,v^3,v^4)$ with domain $U'\subseteq U$ containing $p$ and $n=\partial/\partial v^1$ on $U'$. [L1, L2, L3, given]

2.1 Define $u^0:=v^1$, $u^1:=v^2$, $u^2:=v^3$, $u^3:=v^4$. This is again a chart with domain $U'$, and $n=\partial/\partial u^0$ on $U'$. A curve $\gamma$ in $U'$ satisfies $\gamma'=n_\gamma$ by [L4] exactly when its coordinate components satisfy $\dot u^0=1$ and $\dot u^1=\dot u^2=\dot u^3=0$, since $\partial/\partial u^0$ has components $(1,0,0,0)$ in this chart; hence the integral curves of $n$ are the curves $s\mapsto(u^0(p)+s,u^1(p),u^2(p),u^3(p))$ with constant $u^1,u^2,u^3$. By [L1] the chart is $n$-adapted. [step 1.1, L1, L4, algebra]

3.1 The chart produced in step 2.1 has all the stated properties, so a local adapted chart exists near every point of $U$. [step 2.1] ∎
