---
id: lem-ode-flow-lipschitz-on-a-tube
kind: lemma
title: "A Lipschitz ODE mode flow is stable to its initial state on a tube"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-hybrid-mode-guard-reset-system
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-gronwall-integral-inequality
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Chapter 2"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
---

## Statement

Fix a mode $m$ and times $a\le t\le T$. Suppose $u,v:[a,T]\to\mathbb R^d$ solve $y'=f_m(s,y)$, both graphs stay in a convex tube on which $f_m$ is $L$-Lipschitz in the state, uniformly in time, and both solutions have initial values at $a$. Then
$$\|u(t)-v(t)\|_2\le e^{L(t-a)}\|u(a)-v(a)\|_2.$$

## Facts & Assumptions

**Given:** Two mode solutions on $[a,T]$ in a common convex tube and the uniform state-Lipschitz constant $L\ge0$.

[F1] [[def-hybrid-mode-guard-reset-system]]: each mode trajectory solves its mode's first-order ODE.

[F2] [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]: each solution equals its initial value plus the oriented integral of its vector field.

[F3] [[thm-norm-inequality-for-the-vector-valued-integral]]: the norm of a vector integral is at most the integral of the norm.

[F4] [[thm-gronwall-integral-inequality]]: if a continuous nonnegative $w$ satisfies $w(t)\le A+L\int_a^t w(s)\,ds$, then $w(t)\le A e^{L(t-a)}$.

## Proof

1.1 Subtract the two Volterra equations from [F2]. By [F3] and the state-Lipschitz hypothesis, $w(t):=\|u(t)-v(t)\|_2$ satisfies $w(t)\le w(a)+L\int_a^t w(s)\,ds$. [given, F1, F2, F3, algebra]

2.1 Apply [F4] with $A=w(a)$ to obtain $w(t)\le e^{L(t-a)}w(a)$, which is the asserted estimate. [step 1.1, F4] ∎
