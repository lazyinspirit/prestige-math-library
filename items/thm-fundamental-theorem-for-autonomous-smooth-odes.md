---
id: thm-fundamental-theorem-for-autonomous-smooth-odes
kind: theorem
title: "The fundamental theorem for autonomous smooth ODEs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-autonomous-ordinary-differential-equation,
       thm-picard-lindelof-local-existence-and-uniqueness,
       cor-uniform-picard-lindelof-for-nearby-initial-values,
       thm-existence-and-uniqueness-of-a-maximal-ode-solution,
       thm-smooth-dependence-of-solutions-on-initial-data]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3, Theorem 10.7"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be open and let $V:U\to\mathbb R^n$ be smooth. For
every $x_0\in U$ there exist $h>0$ and an open neighbourhood $W\subseteq U$ of
$x_0$ such that:

1. for every $y\in W$ there is a unique solution $\Phi(\,\cdot\,,y)$ of
   $x'=V(x)$ on $[-h,h]$ with $\Phi(0,y)=y$;
2. the map
   $$\Phi:(-h,h)\times W\to U,\qquad \Phi(t,y)=\Phi_t(y),$$
   is smooth in $y$ and $C^1$ in $t$, with
   $\partial_t\Phi(t,y)=V(\Phi(t,y))$ and $\Phi(0,y)=y$.

This is the local smooth flow of the autonomous vector field $V$.

## Facts & Assumptions

**Given:** A smooth vector field $V:U\to\mathbb R^n$ and a base point $x_0\in U$.

[F1] The equation $x'=V(x)$ is an autonomous ODE ([[def-autonomous-ordinary-differential-equation]]).

[L1] Picard-Lindelof gives unique local solutions ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[L2] Nearby initial values share one common compact local time interval ([[cor-uniform-picard-lindelof-for-nearby-initial-values]]).

[L3] Every initial value problem has a unique maximal solution ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[L4] On a common compact local interval, solutions depend smoothly on the initial state ([[thm-smooth-dependence-of-solutions-on-initial-data]]).

## Proof

**Proof technique:** direct.

1.1 Since a smooth vector field is continuous and locally Lipschitz, [L1] applies [L1, L2, choose] at $(0,x_0)$. The uniform local existence result [L2] therefore gives $h>0$ and an open neighbourhood $W$ of $x_0$ such that every $y\in W$ has a unique solution on $[-h,h]$, and all these solution graphs stay inside one compact cylinder in $\mathbb R\times U$. [L1, L2, choose]

2.1 Define $\Phi(t,y)$ to be that unique solution value at time $t$. By [L4] the [L4, step 1.1] map is smooth in the initial state variable $y$ on $(-h,h)\times W$. For each fixed $y$, the curve $t\mapsto\Phi(t,y)$ is a solution, so it is differentiable in $t$ and satisfies $\partial_t\Phi(t,y)=V(\Phi(t,y))$ with $\Phi(0,y)=y$. [L4, step 1.1]

3.1 The uniqueness in step 1.1 is exactly the local uniqueness from [L1], and [F1, L1, L3, step 2.1] the maximal-solution theorem [L3] records that these local flows are the local pieces of unique maximal trajectories rather than unrelated solution branches. [F1, L1, L3, step 2.1] ∎
