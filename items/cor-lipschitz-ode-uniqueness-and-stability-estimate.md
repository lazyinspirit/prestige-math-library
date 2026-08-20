---
id: cor-lipschitz-ode-uniqueness-and-stability-estimate
kind: corollary
title: "The Grönwall estimate for two solutions of a Lipschitz ODE"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, thm-gronwall-integral-inequality, thm-norm-inequality-for-the-vector-valued-integral]
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

Let $x$ and $y$ solve the same ODE on a common interval containing $t_0$, and suppose that for every time $t$ in that interval,

$$\|F(t,x(t))-F(t,y(t))\|_2\le L\|x(t)-y(t)\|_2.$$

Then

$$\|x(t)-y(t)\|_2\le e^{L|t-t_0|}\|x(t_0)-y(t_0)\|_2.$$

Coincident initial values give uniqueness on every common interval.

## Facts & Assumptions

**Given:** The two solutions and common state-Lipschitz constant in the Statement.

[L1] A curve solves the IVP if and only if it satisfies the associated Volterra integral equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[L2] If a nonnegative function is bounded by an initial error plus its coefficient-weighted integral, Gronwall gives the exponential estimate ([[thm-gronwall-integral-inequality]]).

[L3] For increasing limits the norm of a vector integral is at most the integral of the Euclidean norm, and for reversed limits the oriented form has the absolute value of that scalar integral ([[thm-norm-inequality-for-the-vector-valued-integral]]).

## Proof

**Proof technique:** direct.

1.1 Subtracting the two equations from [L1], applying [L3], and using the stated pairwise Lipschitz inequality gives $\|x(t)-y(t)\|_2\le\|x(t_0)-y(t_0)\|_2+L\left|\int_{t_0}^t\|x(s)-y(s)\|_2ds\right|$. [given, L1, L3]

2.1 Applying [L2] in the relevant time orientation gives the displayed estimate; at $t=t_0$ it is equality, for $L=0$ it is constant, and a zero initial difference forces equality of the solutions. [step 1.1, L2, algebra] ∎
