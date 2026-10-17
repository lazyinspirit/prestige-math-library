---
id: thm-retarded-delay-method-of-steps-well-posedness
kind: theorem
title: "Method of steps gives a unique retarded-delay solution"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-retarded-delay-equation-and-history-space
  - lem-retarded-delay-gronwall-bound
  - thm-extreme-value-metric
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-vector-valued-ftc-and-lipschitz-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Statement

Let $d\ge1$, $T,\tau>0$, and let $\phi\in\mathcal C_\tau$. Suppose
$f:U\times\mathbb R^d\times\mathbb R^d\to\mathbb R^d$ is continuous on an
open interval $U\supseteq[0,T]$ and satisfies the global state bound in
[[def-retarded-delay-equation-and-history-space]] with constant $L\ge0$. Then
the retarded-delay initial-value problem has exactly one solution on
$[-\tau,T]$. The construction is the **method of steps**: on each interval
$[k\tau,(k+1)\tau]\cap[0,T]$, the delayed path is already known, so the current
equation is an ordinary differential equation.

## Facts & Assumptions

**Given:** The delay, continuous history, vector field, and global Lipschitz constant in the Statement.

[F1] A retarded-delay solution equals $\phi$ on $[-\tau,0]$, satisfies $y(0)=\phi(0)$, and obeys $y'(t)=f(t,y(t),y(t-\tau))$ on $[0,T]$ ([[def-retarded-delay-equation-and-history-space]]).

[F2] A continuous vector field locally Lipschitz in its state variable has a unique local IVP solution; on a compact cylinder, a bound $hM\le r$ and $Lh<1$ give a unique solution staying in that cylinder ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[F3] For an integrable vector-valued function, $\|\int_a^b g\|_2\le\int_a^b\|g\|_2$ when $a\le b$ ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[F4] A continuous real-valued function on a nonempty compact metric space is bounded ([[thm-extreme-value-metric]]).

[F5] The Euclidean norm satisfies the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F6] A differentiable vector path with integrable derivative has increments equal to integrals of that derivative ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[L1] If $u$ obeys a scalar retarded integral inequality with history bound $H$ and coefficient $L$, then its running maximum is bounded by $(H+\int_0^t q)e^{2Lt}$ ([[lem-retarded-delay-gronwall-bound]]).

## Proof

1.1 Put $q(t)=\|f(t,0,0)\|_2$ and $H=\|\phi\|_\infty$. For any partial method-of-steps solution, [F6] supplies its integral equation; the norm integral bound [F3], the triangle inequality [F5], and the Lipschitz bound then give $\|y(t)\|_2\le H+\int_0^t(q(s)+L(\|y(s)\|_2+\|y(s-\tau)\|_2))\,ds$. [given, F1, F3, F5, F6, algebra]

2.1 By [L1], every partial solution constructed on $[0,t]$ remains in the fixed ball of radius $R=(H+\int_0^Tq(s)\,ds)e^{2LT}$. The delayed values used on the next step are therefore bounded by $R_*:=\max\{H,R\}$. [step 1.1, L1]

3.1 On $I_k=[k\tau,\min\{(k+1)\tau,T\}]$, define the known delayed input $z_k(t)=y(t-\tau)$ from the history and already constructed pieces. Extend $z_k$ constantly a short distance past each endpoint. Then $F_k(t,x)=f(t,x,z_k(t))$ is continuous and $L$-Lipschitz in $x$. Choose a compact time neighborhood $U_0\subset U$ of $[0,T]$ and put $Q_*:=\sup_{t\in U_0}\|f(t,0,0)\|_2$; this is finite by [F4] applied to the continuous norm of $f(t,0,0)$. The extended delayed values remain bounded by $R_*:=\max\{H,R\}$. The triangle inequality [F5] and state Lipschitz bound show that on $\|x\|_2\le R+1$ the vector field is bounded by $M_*:=Q_*+L(R+1+R_*)$. Choose a common $\delta>0$ inside the time-domain margin with $L\delta<1$ and $\delta M_*\le1$. [F2] gives a unique local solution from each current endpoint, and finitely many subintervals of length at most $\delta$ cover $I_k$; the bound in step 2.1 keeps every endpoint in the required ball. [F1, F2, F4, F5, step 2.1, construct]

4.1 Starting with $k=0$, the delayed input is $\phi(t-\tau)$ and step 3.1 constructs a unique solution on $I_0$. If a unique solution has been constructed through $k\tau$, its delayed path on $I_k$ is fixed by that past; step 3.1 constructs exactly one continuation there. Induction over the finite number $\lceil T/\tau\rceil$ of intervals gives existence on $[0,T]$. Any two solutions coincide on $I_0$ by [F2], and the same induction makes them coincide on each later $I_k$, proving uniqueness. [F2, step 3.1, induction] ∎

