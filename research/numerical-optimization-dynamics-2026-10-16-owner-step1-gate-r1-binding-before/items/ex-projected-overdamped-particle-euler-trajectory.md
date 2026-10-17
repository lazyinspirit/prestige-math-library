---
id: ex-projected-overdamped-particle-euler-trajectory
kind: example
title: Projected Euler for a constrained overdamped particle
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-projected-contact-dynamics-and-euler-step
  - alg-certified-projected-euler-method
  - thm-projected-euler-square-root-global-error
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
axiom_use: Countable Choice and Dependent Choice are included because the example invokes the general existence and error theorem; the explicit scalar calculation itself uses no further choice.
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 4.3, pp. 122–124; projected dynamics on a fixed closed convex constraint set.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 23, slides 301–303; projection updates.
---

## Example

Take $C=[0,1]$, constant forcing $f(t,x)=-1$, initial state $x_0=1$, and horizon $T=2$. Use exact projections and $N\ge1$ uniform steps, so $h=2/N$.

## Facts & Assumptions

**Given:** The one-dimensional projected dynamics data in the Example, Countable Choice, and Dependent Choice for the general theorem application.

[A1] [[def-countable-choice]]: Countable Choice, as assumed by the existence and error theorem.

[A2] [[def-dependent-choice]]: Dependent Choice, as assumed by the existence and error theorem.

[F1] [[def-projected-contact-dynamics-and-euler-step]]: solutions satisfy $f-\dot x\in N_C(x)$, and the exact Euler recurrence is $x_{k+1}=P_C(x_k+h f(t_k,x_k))$.

[F2] [[alg-certified-projected-euler-method]]: with zero projection residual tolerance, every completed step is the exact projection Euler node.

[F3] [[thm-projected-euler-square-root-global-error]]: for this problem, a completed zero-tolerance projected Euler trajectory converges uniformly to the unique solution and has the proved square-root bound.

## Verification

1.1 For $0<x<1$, $N_C(x)=\{0\}$; at $x=0$, $N_C(0)=(-\infty,0]$, and at $x=1$, $N_C(1)=[0,\infty)$. Therefore $x(t)=\max(1-t,0)$ satisfies the projected inclusion for $t<1$ and $t>1$: before contact $\dot x=-1$ and $f-\dot x=0$; after contact $\dot x=0$ and $f-\dot x=-1\in N_C(0)$. At $t=0$, $f-\dot x=0\in N_C(1)$. The single nondifferentiability time $t=1$ does not affect the almost-everywhere condition. The data satisfy the hypotheses of [F3], using [A1] and [A2]. [A1, A2, F1, F3, given, algebra]

2.1 For $C=[0,1]$, $P_C(y)=\min(1,\max(0,y))$: if $y<0$, then $|z-y|\ge|0-y|$ for every $z\in C$; if $0\le y\le1$, $y$ itself is the nearest point; if $y>1$, then $|y-z|\ge|y-1|$. Since all iterates are at most $1$, the recurrence is $x_{k+1}=\max(0,x_k-h)$. Starting with $x_0=1$, induction gives $x_k=\max(1-kh,0)$: if $1-kh\ge0$, the next value is $\max(0,1-(k+1)h)$; if $1-kh<0$, both the current and next values are zero and $1-(k+1)h<0$. On cells entirely before $t=1$, interpolation equals $1-t$; on cells entirely after $1$, it is zero. If a cell straddles $1$, its left value is $1-t_k<h$ and its right value is zero; the difference from $\max(1-t,0)$ is linear on each side of $1$ and has maximum at $1$, at most $h$. Thus $\sup_t|X_h(t)-x(t)|\le h$, consistent with [F3]. [F1, F2, F3, step 1.1, given, algebra, induction] ∎
