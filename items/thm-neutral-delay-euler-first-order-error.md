---
id: thm-neutral-delay-euler-first-order-error
kind: theorem
title: "Compatible-grid Euler has first-order solution and derivative error for a stable neutral delay"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-scalar-neutral-delay-equation-and-segment-shift
  - thm-neutral-delay-method-of-steps-well-posedness
  - lem-neutral-delay-shift-neumann-inverse
  - alg-neutral-delay-euler-compatible-grid
  - lem-discrete-one-step-error-recurrence-bound
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-vector-valued-functions-limits-and-continuity
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

Let $T=K\tau$ with integers $K,m\ge1$, set $h=\tau/m$ and $N=Km$, and let
$|a|<1$. Assume the compatible scalar neutral-delay problem of
[[def-scalar-neutral-delay-equation-and-segment-shift]] has the unique solution
$y$ supplied by [[thm-neutral-delay-method-of-steps-well-posedness]]. Suppose
$y$ is $C^1$ on $[0,T]$, each grid-cell restriction is $C^2$ with one-sided
endpoint derivatives, and $|y''(t)|\le M$ on each cell interior for a constant
$M\ge0$. Apply [[alg-neutral-delay-euler-compatible-grid]] with exact history
values and complete all $N$ updates (no budget or an integer budget $B\ge N$).
Put $\Lambda=2L/(1-|a|)$. If $\Lambda>0$, set
$C_T=(M/2)(e^{\Lambda T}-1)/\Lambda$; if $\Lambda=0$, set $C_T=MT/2$.
Then
$$\max_{0\le n\le N}|Y_n-y(t_n)|\le C_T h,\qquad\max_{0\le n<N}|V_n-y'(t_n)|\le\Lambda C_T h.$$

## Facts & Assumptions

**Given:** The scalar neutral-delay equation, compatible history, stable coefficient $|a|<1$, a completed grid-aligned Euler run (no budget or $B\ge N$), and the piecewise $C^2$ exact solution in the Statement.

[F1] At each time $t_n$, $y'(t_n)=a y'(t_n-\tau)+f(t_n,y(t_n),y(t_n-\tau))$, with negative-time values and derivatives given by $\phi$ and $\phi'$ ([[def-scalar-neutral-delay-equation-and-segment-shift]]).

[F2] Euler initializes the history exactly and uses $V_n=a\phi'(t_n-\tau)+f(t_n,Y_n,Y_{n-m})$ for $n<m$, and $V_n=aV_{n-m}+f(t_n,Y_n,Y_{n-m})$ for $n\ge m$ ([[alg-neutral-delay-euler-compatible-grid]]).

[F3] On any finite derivative-array prefix of length $M$, the delayed mesh shift has inverse $ (I-aS)^{-1}$ with operator norm at most $(1-|a|)^{-1}$ ([[lem-neutral-delay-shift-neumann-inverse]]).

[F4] A bounded derivative makes a differentiable vector path Lipschitz, and the vector-valued fundamental theorem gives increments as integrals ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[F5] Under the canonical scalar/$\mathbb R^1$ coordinate identification, the norm of an integrable vector-valued integral is at most the integral of its norm ([[thm-norm-inequality-for-the-vector-valued-integral]], [[def-vector-valued-functions-limits-and-continuity]]).

[F6] The Euclidean norm satisfies the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L1] If $e_0\le C_0h^p$ and $e_{n+1}\le(1+\ell h)e_n+Ch^{p+1}$ on a uniform grid of length $T$, then the finite recurrence has the explicit exponential bound, including the $\ell=0$ branch ([[lem-discrete-one-step-error-recurrence-bound]]).

## Proof

1.1 Define $e_j=|Y_j-y(t_j)|$ for $j\ge0$, $e_j=0$ for $-m\le j<0$, $E_n=\max_{-m\le j\le n}e_j$, and $w_j=V_j-y'(t_j)$. For $j<m$, [F1]--[F2] give $w_j=f(t_j,Y_j,Y_{j-m})-f(t_j,y(t_j),y(t_j-\tau))$; for $j\ge m$ they give $w_j=a w_{j-m}$ plus this same $f$ difference. In both cases the residual vector $g_{0:n}:=w_{0:n}-aS_m^{(n+1)}w_{0:n}$ has supremum norm at most $2LE_n$. [F1, F2, given, algebra]

1.2 By [F4], $y(t_{n+1})-y(t_n)=\int_{t_n}^{t_{n+1}}y'(s)\,ds$. On this cell, [F4] applied to $y'$ gives $|y'(s)-y'(t_n)|\le M(s-t_n)$; [F5] then bounds the difference between this integral and $h y'(t_n)$ by $\int_{t_n}^{t_{n+1}}M(s-t_n)\,ds=Mh^2/2$. [F4, F5, given, algebra]

2.1 The shift inverse [F3], applied to the prefix of length $n+1$, yields $\max_{0\le j\le n}|w_j|\le 2LE_n/(1-|a|)=\Lambda E_n$. [F3, step 1.1, algebra]

3.1 Subtract the exact increment of step 1.2 from the Euler update in [F2] and use the triangle inequality [F6] and step 2.1 to obtain $e_{n+1}\le e_n+h\Lambda E_n+(M/2)h^2$. Hence $E_{n+1}\le(1+\Lambda h)E_n+(M/2)h^2$, with $E_0=0$. Applying [L1] with $p=1$, $C_0=0$, $C=M/2$, and $\ell=\Lambda$ gives $E_N\le C_T h$ in both branches of the Statement. Step 2.1 then gives the stated derivative bound. [F2, F6, step 2.1, step 1.2, L1, algebra] ∎

