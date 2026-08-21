---
id: cor-lipschitz-ode-uniqueness-and-stability-estimate
kind: corollary
title: "The Grönwall estimate for two solutions of a Lipschitz ODE"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, thm-gronwall-integral-inequality, thm-norm-inequality-for-the-vector-valued-integral, thm-monotonicity-of-the-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

Let $F:D\to\mathbb R^n$ be continuous on an open ODE domain, let $I\subseteq\mathbb R$ be an order-convex interval with at least two elements, and let $x,y:I\to\mathbb R^n$ solve $z'=F(t,z)$ with both graphs in $D$. Fix $t_0\in I$, and suppose that for every $t\in I$,

$$\|F(t,x(t))-F(t,y(t))\|_2\le L\|x(t)-y(t)\|_2.$$

Then

$$\|x(t)-y(t)\|_2\le e^{L|t-t_0|}\|x(t_0)-y(t_0)\|_2.$$

Coincident initial values give uniqueness on every common interval.

## Facts & Assumptions

**Given:** The two solutions and common state-Lipschitz constant in the Statement.

[L1] For a continuous field on an open ODE domain and an order-convex interval with at least two elements, a curve solves the IVP if and only if it satisfies the associated Volterra integral equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[L2] If a continuous nonnegative function $u$ satisfies $u(t)\le A+\int_{t_0}^tLu(s)\,ds$ with constants $A,L\ge0$, then $u(t)\le Ae^{L(t-t_0)}$; the reflected statement holds to the left of $t_0$ ([[thm-gronwall-integral-inequality]]).

[L3] For increasing limits the norm of a vector integral is at most the integral of the Euclidean norm, and for reversed limits the oriented form has the absolute value of that scalar integral ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L4] If integrable real functions $p\le q$ on a compact interval, then $\int p\le\int q$ ([[thm-monotonicity-of-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 Subtracting the two equations from [L1], applying [L3], and integrating the stated pairwise Lipschitz inequality with [L4] on the compact interval between $t_0$ and $t$ gives $\|x(t)-y(t)\|_2\le\|x(t_0)-y(t_0)\|_2+L\left|\int_{t_0}^t\|x(s)-y(s)\|_2ds\right|$. [given, L1, L3, L4]

2.1 Applying [L2] in the relevant time orientation gives the displayed estimate; at $t=t_0$ it is equality, for $L=0$ it is constant, and a zero initial difference forces equality of the solutions. [step 1.1, L2, algebra] ∎
