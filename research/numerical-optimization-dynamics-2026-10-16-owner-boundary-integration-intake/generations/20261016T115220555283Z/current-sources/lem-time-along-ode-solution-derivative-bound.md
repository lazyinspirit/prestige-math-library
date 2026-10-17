---
id: lem-time-along-ode-solution-derivative-bound
kind: lemma
title: "A vector field along an ODE solution has an explicit derivative bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-first-order-ode-initial-value-problem-and-solution
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-total-differentiability-gives-a-local-linear-bound-and-continuity
  - thm-chain-rule-for-total-derivatives
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III, Section III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis (Spring 2012), Chapter 5"
      url: "https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf"
dependency_level: 0
---

## Statement

Let $d\ge1$, let $V\subseteq\mathbb R\times\mathbb R^d$ be open, let $f:V\to\mathbb R^d$ have continuous first partial derivatives, and let $y:I\to\mathbb R^d$ solve $y'=f(t,y)$ on an open interval $I$. Fix $a<b$ with $[a,b]\subset I$ such that $(s,y(s))\in V$ for every $s\in[a,b]$. Suppose finite constants $F_j,M_{t,i},M_{ij}\ge0$ satisfy for all $s\in[a,b]$

$$|f_j(s,y(s))|\le F_j,\qquad |\partial_t f_i(s,y(s))|\le M_{t,i},\qquad |\partial_{z_j}f_i(s,y(s))|\le M_{ij}\qquad(1\le i,j\le d).$$

Define $g_i(s):=f_i(s,y(s))$ and $B_i:=M_{t,i}+\sum_{j=1}^dM_{ij}F_j$. Then $g_i$ is continuous on $[a,b]$, differentiable on $(a,b)$, and

$$g_i'(s)=\partial_t f_i(s,y(s))+\sum_{j=1}^d\partial_{z_j}f_i(s,y(s))f_j(s,y(s)),\qquad |g_i'(s)|\le B_i.$$

## Facts & Assumptions

**Given:** The open ODE domain, continuous first partial derivatives, solution $y'=f(t,y)$ on $[a,b]$, and the displayed componentwise bounds.

[F1] [[def-first-order-ode-initial-value-problem-and-solution]]: an IVP solution is differentiable, its graph lies in the open domain, and it satisfies $y'(s)=f(s,y(s))$.

[F2] [[thm-continuous-partial-derivatives-imply-total-differentiability]]: continuous first partial derivatives give total differentiability with derivative matrix equal to the Jacobian.

[F3] [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]: total differentiability implies continuity.

[F4] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the composition of the total derivatives.

## Proof

1.1 By [F2]–[F3], $f$ is continuous on $V$. Since $y'=f(s,y(s))$, the derivative of $y$ is continuous on $I$; hence $y$ is continuously differentiable and the path $q(s):=(s,y(s))$ has derivative $q'(s)=(1,f(s,y(s)))$. [given, F1, F2, F3]

2.1 For each $i$, the component map $f_i$ is totally differentiable, so [F4] applied to $g_i=f_i\circ q$ gives the displayed derivative formula. The bounds give $|g_i'(s)|\le M_{t,i}+\sum_{j=1}^dM_{ij}F_j=B_i$ for every $s\in(a,b)$. Continuity of $g_i$ on $[a,b]$ follows from continuity of $f$ and $y$. [F1, F2, F3, F4, algebra] ∎
