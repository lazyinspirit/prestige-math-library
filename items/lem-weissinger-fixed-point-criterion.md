---
id: lem-weissinger-fixed-point-criterion
kind: lemma
title: "Weissinger's fixed-point criterion for summably contracting iterates"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-metric-space, lem-absolute-convergence-implies-convergence, thm-banach-fixed-point, def-series]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a nonempty complete metric space and let $T:X\to X$. Suppose nonnegative reals $(a_m)_{m\ge1}$ satisfy $\sum_{m\ge1}a_m<\infty$ and

$$d(T^m x,T^m y)\le a_m d(x,y)\qquad(x,y\in X, m\ge1).$$

Summably contracting iterates have a unique fixed point and the iteration tail bounds its error. Explicitly, for $x_{k+1}=Tx_k$ and the fixed point $x^*$,

$$d(x_n,x^*)\le d(x_1,x_0)\sum_{m\ge n}a_m\qquad(n\ge1).$$

## Facts & Assumptions

**Given:** The complete metric space, map, constants, and starting point in the Statement.

[L1] Absolute convergence implies convergence for a real series ([[lem-absolute-convergence-implies-convergence]]).

[L2] In a complete metric space every Cauchy sequence converges to a point of the space ([[def-complete-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 For $p>n$, telescoping and the iterate estimate give $d(x_p,x_n)\le d(x_1,x_0)\sum_{m=n}^{p-1}a_m$; by [L1] the tails tend to zero, so $(x_n)$ is Cauchy. [given, L1, algebra]

2.1 By [L2], $x_n\to x^*\in X$; letting $p\to\infty$ in step 1.1 gives the stated tail bound. The $m=1$ estimate makes $T$ continuous, hence $Tx^*=x^*$, and since summability gives some $a_m<1$, two fixed points $u,v$ satisfy $d(u,v)=d(T^mu,T^mv)\le a_md(u,v)$ and are equal. [step 1.1, L2, algebra] ∎
