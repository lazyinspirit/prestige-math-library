---
id: thm-frozen-slow-euler-global-first-order-error
title: "Fixed-time first-order error bound for frozen-slow Euler"
kind: theorem
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-frozen-slow-explicit-fast-euler
  - lem-frozen-slow-euler-local-defect-bound
  - lem-frozen-slow-euler-one-step-stability
  - lem-frozen-slow-euler-variation-bounds
  - lem-discrete-one-step-error-recurrence-bound
  - def-first-order-ode-initial-value-problem-and-solution
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michael Günther and Adrian Sandu, Multirate Methods for Ordinary Differential Equations, CSL-TR-25-5 (2025)"
      url: "https://vtechworks.lib.vt.edu/bitstreams/107ab78d-834d-44a8-9cc8-566d7f2a2911/download"
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, Lecture 34: Global Analysis of One-Step Integrators (2016)"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
---

## Statement

Let $T>0$, let $\Omega\subseteq\mathbb R^{r+s}$ be open, $r,s\ge1$, and let $F=(f,g):\Omega\to\mathbb R^r\times\mathbb R^s$ be continuous. Assume $K,M\ge0$ and there is a set $S\subseteq\Omega$ containing the exact path, all macro states, every fast microstate, and every method output, on which $F$ is jointly $K$-Lipschitz and bounded by $M$. Let $U'=F(U)$ on $[0,T]$. Take $H=T/N$, $N\ge1$, and for each macro block $n$ choose an integer $m_n\ge1$ and set $h_n=H/m_n$. Starting from the exact initial value, run [[alg-frozen-slow-explicit-fast-euler]] with these block counts and denote its macro states by $U_n=(x_n,z_{n,0})$. Assume every numerical step is successful and the stated bounds hold on $S$. For each $n<N$, also assume that the algorithm with count $m_n$ succeeds from the exact input $U(t_n)$, with all of its fast microstates and output in $S$. Set
$$L_T:=K\sqrt{2(1+\exp(2KT))}.$$
Then at every macro node $t_n=nH$,
$$\|U_n-U(t_n)\|_2\le C_T H,\qquad C_T:=\begin{cases}4KM\dfrac{\exp(L_TT)-1}{L_T},&L_T>0,\\4KMT,&L_T=0.\end{cases}$$
At each fast microstate $(x_n,z_{n,j})$ with $0\le j\le m_n$ in block $n$, its distance from the exact path at time $t_n+jh_n$ is at most $(C_T+2M)H$. The constants do not depend on the microstep counts.

## Facts & Assumptions

**Given:** The common set $S$, field bounds, exact initial data, successful macro steps, and uniform fixed-time grid in the Statement.

[F1] The frozen-slow step map is Lipschitz with factor $1+L_TH$ for any two admitted inputs, uniformly in the microstep count ([[lem-frozen-slow-euler-one-step-stability]]).

[F2] An exact-start macro step has defect at most $4KMH^2$ ([[lem-frozen-slow-euler-local-defect-bound]]).

[F3] If $e_0\le C_0h^p$ and $e_{n+1}\le(1+Lh)e_n+Ch^{p+1}$, the finite recurrence lemma gives the stated exponential formula for $L>0$ and the linear formula for $L=0$ ([[lem-discrete-one-step-error-recurrence-bound]]).

[F4] The Euclidean norm satisfies the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F5] Exact-path displacement over a subinterval of length $\tau$ is at most $M\tau$ ([[lem-frozen-slow-euler-variation-bounds]]).

[F6] An exact first-order IVP solution is a differentiable path satisfying $U'=F(U)$; for this autonomous field use $\widehat F(t,u)=F(u)$ on $\mathbb R\times\Omega$ ([[def-first-order-ode-initial-value-problem-and-solution]]).

[F7] On a successful macro block, the fast loop uses $z_{n,i+1}=z_{n,i}+h_n g(x_n,z_{n,i})$ for $0\le i<m_n$ ([[alg-frozen-slow-explicit-fast-euler]]).

[F8] The product Euclidean norm satisfies $\|(a,b)\|_2^2=\|a\|_2^2+\|b\|_2^2$, so each coordinate block has norm at most the full norm ([[lem-frozen-slow-euler-variation-bounds]]).

[A1] The exact and numerical macro states, fast microstates, and method outputs lie in $S$; each step map comparison is admitted there and all microstep counts are positive integers.

## Proof

1.1 Put $e_n:=\|U_n-U(t_n)\|_2$ for the exact solution [F6]. The triangle inequality [F4], stability [F1], and exact-start defect [F2] imply $e_{n+1}\le(1+L_TH)e_n+4KMH^2$ for $0\le n<N$. [F1, F2, F4, F6, A1, algebra]

2.1 Apply [F3] with $p=1$, $C_0=0$, $C=4KM$, $L=L_T$, and $h=H$. Exact initial data gives $e_0=0$, and step 1.1 is the required recurrence. The $L_T>0$ case gives $e_n\le4KM(\exp(L_TT)-1)H/L_T$; the $L_T=0$ case gives $e_n\le4KMT H$. Taking the maximum over macro nodes proves the claimed node bound. [F3, A1, step 1.1, algebra]

3.1 Fix a macro block and micro-index $j$. By [F7] and [F8], each fast increment satisfies $\|z_{n,i+1}-z_{n,i}\|_2=h_n\|g(x_n,z_{n,i})\|_2\le h_n\|F(x_n,z_{n,i})\|_2\le h_nM$, since $(x_n,z_{n,i})\in S$. Summing from $i=0$ to $j-1$ gives $\|z_{n,j}-z_{n,0}\|_2\le jh_nM\le HM$; because $x_n$ is frozen, this is also $\|(x_n,z_{n,j})-U_n\|_2$. By [F5], the exact path is at most $Mjh_n\le MH$ from $U(t_n)$. The triangle inequality [F4] and step 2.1 therefore give $\|(x_n,z_{n,j})-U(t_n+jh_n)\|_2\le e_n+2MH\le(C_T+2M)H$. The bound is independent of the block's microstep count, proving the stage claim. [F4, F5, F7, F8, A1, step 2.1, algebra] ∎
