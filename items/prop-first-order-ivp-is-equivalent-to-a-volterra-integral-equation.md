---
id: prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
kind: proposition
title: "A first-order initial value problem is equivalent to its Volterra integral equation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-first-order-ode-initial-value-problem-and-solution, def-vector-valued-derivative-and-integral, cor-vector-valued-ftc-and-lipschitz-bound, cor-primitives-of-a-continuous-function, thm-componentwise-limits-and-continuity, def-oriented-integral]
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

Let $F:D\to\mathbb R^n$ be continuous, let $(t_0,x_0)\in D$, let $I\subseteq\mathbb R$ be order-convex with at least two elements, and let $x:I\to\mathbb R^n$ be continuous with $t_0\in I$ and $(t,x(t))\in D$. A curve solves the IVP if and only if it satisfies the associated Volterra integral equation. Explicitly, the equation is

$$x(t)=x_0+\int_{t_0}^{t}F(s,x(s))\,ds\qquad(t\in I).$$

The integral is oriented, so the assertion applies on either side of $t_0$.

## Facts & Assumptions

**Given:** The data in the Statement and componentwise vector integration as in [[def-vector-valued-derivative-and-integral]].

[L1] If a differentiable $f:[a,b]\to\mathbb R^m$ has integrable derivative, then $\int_a^b f'=f(b)-f(a)$ ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[L2] If $I$ is order-convex with at least two elements, $g:I\to\mathbb R$ is continuous, and $t_0\in I$, then $t\mapsto\int_{t_0}^t g$ is a primitive of $g$ on $I$ ([[cor-primitives-of-a-continuous-function]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, the identity is immediate at $t=t_0$; for $t\ne t_0$, each component of $x'=F(\,·\,,x)$ is continuous and hence integrable, so [L1] on the closed interval between $t_0$ and $t$, followed by orientation when $t<t_0$, gives $x(t)-x_0=\int_{t_0}^tF(s,x(s))\,ds$. [given, L1]

2.1 For the reverse direction, [L2] applied componentwise differentiates the displayed integral equation and gives $x'(t)=F(t,x(t))$; at $t=t_0$ the oriented integral is $0$, so $x(t_0)=x_0$. [given, L2, algebra] ∎
