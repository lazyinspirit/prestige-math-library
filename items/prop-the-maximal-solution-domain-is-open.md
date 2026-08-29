---
id: prop-the-maximal-solution-domain-is-open
kind: proposition
title: "The maximal solution domain is open"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-for-autonomous-smooth-odes,
       thm-existence-and-uniqueness-of-a-maximal-ode-solution,
       thm-continuous-dependence-of-odes-on-initial-data-and-parameters]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

Let $V:U\to\mathbb R^n$ be a smooth vector field on an open set $U$, and for
each $x_0\in U$ let $x(\,\cdot\,;x_0)$ denote the unique maximal solution of
$x'=V(x)$ with $x(0)=x_0$. Then the maximal solution domain

$$\Omega:=\{(t,x_0)\in\mathbb R\times U:t\text{ lies in the maximal interval of }x(\,\cdot\,;x_0)\}$$

is open in $\mathbb R\times U$. On $\Omega$, the evaluation map
$\Phi(t,x_0):=x(t;x_0)$ is smooth in the state variable and continuous jointly in
$(t,x_0)$.

## Facts & Assumptions

**Given:** A smooth vector field $V:U\to\mathbb R^n$ and its maximal solutions.

[L1] Autonomous smooth ODEs have local smooth flows near every point ([[thm-fundamental-theorem-for-autonomous-smooth-odes]]).

[L2] Every initial datum has a unique maximal solution ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[L3] Solutions depend continuously on nearby initial data on common compact local intervals ([[thm-continuous-dependence-of-odes-on-initial-data-and-parameters]]).

## Proof

**Proof technique:** direct.

1.1 Let $(t_*,x_*)\in\Omega$ and put $p:=\Phi(t_*,x_*)$. By [L1], applied at the [L1, choose] state point $p$, there exist $\delta>0$ and an open neighbourhood $W\subseteq U$ of $p$ such that every $y\in W$ has a unique solution on $[-\delta,\delta]$, and these solutions vary smoothly with $y$. [L1, choose]

2.1 By [L3], for initial states $x$ sufficiently close to $x_*$, the solution [L3, step 1.1] $\Phi(\,\cdot\,,x)$ is defined at least on a compact interval around $t_*$ and its value at time $t_*$ lies in $W$. Therefore for every such $x$ and every $|s|<\delta$, the solution continued from time $t_*$ by the local flow of step 1.1 is defined at time $t_*+s$. Hence all pairs $(t_*+s,x)$ with $|s|<\delta$ and $x$ near $x_*$ lie in $\Omega$. [L3, step 1.1]

3.1 Step 2.1 gives an open neighbourhood of $(t_*,x_*)$ contained in $\Omega$, [L1, L2, L3, step 2.1] so $\Omega$ is open. On that neighbourhood, the evaluation map is the composite of the continuous time-$t_*$ map with the local smooth flow from step 1.1, hence is jointly continuous and smooth in the state variable. Since $(t_*,x_*)$ was arbitrary, the same holds on all of $\Omega$. [L1, L2, L3, step 2.1] ∎
