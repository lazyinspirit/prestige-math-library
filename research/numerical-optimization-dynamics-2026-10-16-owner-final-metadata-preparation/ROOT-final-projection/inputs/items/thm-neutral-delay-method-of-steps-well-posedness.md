---
id: thm-neutral-delay-method-of-steps-well-posedness
kind: theorem
title: "Method of steps gives a unique compatible neutral-delay solution"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-scalar-neutral-delay-equation-and-segment-shift
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-extreme-value-metric
  - thm-gronwall-integral-inequality
  - thm-norm-inequality-for-the-vector-valued-integral
  - lem-of-triangle-inequality
  - cor-vector-valued-ftc-and-lipschitz-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Statement

Let $T=K\tau$ with integer $K\ge1$, let $a\in\mathbb R$, and assume the scalar
neutral-delay data satisfy [[def-scalar-neutral-delay-equation-and-segment-shift]]:
$\phi\in C^1([-\tau,0],\mathbb R)$ is compatible at zero, and $f$ is continuous
and globally Lipschitz in its current and delayed state variables. Then there is
exactly one $C^1$ solution on $[-\tau,T]$. On each interval
$[k\tau,(k+1)\tau]$, the delayed state and delayed derivative are known from
the preceding interval, so the equation reduces to an ordinary differential
equation.

## Facts & Assumptions

**Given:** The compatible scalar neutral-delay initial-value problem, its finite horizon, and the stated Lipschitz bound.

[F1] The neutral equation is $y'(t)=a y'(t-\tau)+f(t,y(t),y(t-\tau))$ and compatibility at zero is $\phi'(0)=a\phi'(-\tau)+f(0,\phi(0),\phi(-\tau))$ ([[def-scalar-neutral-delay-equation-and-segment-shift]]).

[F2] A continuous state-Lipschitz ODE field has a unique local solution; the quantitative compact-cylinder criterion supplies a solution staying in a prescribed ball when $hM\le r$ and $Lh<1$ ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[F3] Gronwall bounds a nonnegative continuous function satisfying $u(t)\le A+\int_0^t B u(s)\,ds$ by $Ae^{Bt}$ ([[thm-gronwall-integral-inequality]]).

[F4] The norm of a vector integral is bounded by the integral of its norm ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[F5] A continuous real-valued function on a nonempty compact metric space is bounded ([[thm-extreme-value-metric]]).

[F6] The real absolute value satisfies $|x+y|\le|x|+|y|$ ([[lem-of-triangle-inequality]]).

[F7] A differentiable vector path with integrable derivative has increments equal to integrals of that derivative ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

## Proof

1.1 Suppose the solution is known through $k\tau$. On $I_k=[k\tau,(k+1)\tau]$, both $z_k(t)=y(t-\tau)$ and $g_k(t)=y'(t-\tau)$ are known continuous functions, including the first interval where they come from $\phi$ and $\phi'$. Extend these known functions constantly just past the interval endpoints. The neutral equation on $I_k$ becomes $x'=a g_k(t)+f(t,x,z_k(t))$, a continuous ODE field that is globally $L$-Lipschitz in $x$; [F2] gives a unique local solution from the prescribed endpoint. [given, F1, F2, construct]

2.1 On a partial segment, [F7] gives the integral equation; [F4], [F6], and the Lipschitz bound then give $|x(t)|\le |x(k\tau)|+\int_{k\tau}^t(B_k+L|x(s)|)\,ds$, where $B_k=|a|\|g_k\|_\infty+\sup_{I_k}|f(s,0,0)|+L\|z_k\|_\infty$ is finite by [F5] and continuity of $f$. Since the interval length is at most $\tau$, this implies $|x(t)|\le |x(k\tau)|+B_k\tau+L\int_{k\tau}^t|x(s)|\,ds$. By [F3], $|x(t)|\le R_k:=(|x(k\tau)|+B_k\tau)e^{L\tau}$ throughout that partial segment. On the ball $|x|\le R_k+1$, the ODE field is bounded by $M_k:=B_k+L(R_k+1)$. Choose $\delta_k>0$ within the time-domain margin with $\delta_kM_k\le1$ and $L\delta_k<1$; [F2] continues the solution by at least $\delta_k$ whenever it has not reached the right endpoint. Finitely many such continuations cover $I_k$. [F2, F3, F4, F5, F6, F7, step 1.1, algebra]

2.2 The history derivative and the solution derivative agree at zero by the compatibility equation in [F1]. At a later breakpoint $(k+1)\tau$, the left and right limits of $a y'(t-\tau)+f(t,y(t),y(t-\tau))$ agree because $y$ and $y'$ already agree continuously at $k\tau$ and $f$ is continuous. Thus the stepwise solution is $C^1$ across each breakpoint. [F1, step 1.1, algebra]

3.1 The first interval is uniquely determined by [F2]. If two solutions agree through $k\tau$, they have the same known functions $z_k,g_k$ on $I_k$, so ODE uniqueness in [F2] makes them agree throughout that interval. Induction over the finite $K$ intervals proves existence and uniqueness on $[-\tau,T]$. [F2, step 2.1, step 2.2, induction] ∎
