---
id: prop-shooting-residual-derivative
kind: proposition
title: "Derivative of the nonlinear shooting residual"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-nonlinear-two-point-bvp-and-boundary-residual, def-certified-ivp-approximation-and-sensitivity-interface, lem-c1-ode-flow-on-common-tube, thm-chain-rule-for-total-derivatives, def-jacobian-matrix-and-gradient]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
    - title: "T. A. Driscoll and R. J. Braun, Fundamentals of Numerical Computation, Chapter 10"
      url: "https://fncbook.com/shooting/"
verification:
  precheck: pass
---

## Statement

Let $\Psi:U\to\mathbb R^d$ be a $C^1$ endpoint map (total differentiability with continuous derivative entries) on an open set $U\subseteq\mathbb R^d$, and let $B$ be $C^1$ on an open neighborhood of $\{(s,\Psi(s)):s\in U\}$. Define $R_\Psi(s)=B(s,\Psi(s))$. Then $R_\Psi$ is $C^1$ and

$$DR_\Psi(s)=D_1B(s,\Psi(s))+D_2B(s,\Psi(s))D\Psi(s).$$

This applies to the exact flow endpoint map under [[lem-c1-ode-flow-on-common-tube]] and to the approximate endpoint map in [[def-certified-ivp-approximation-and-sensitivity-interface]]; in the latter case the derivative is exact for the numerical map, not the exact flow.

## Facts & Assumptions

**Given:** $U$, $\Psi$, $B$, and their stated $C^1$ properties.

[F1] [[thm-chain-rule-for-total-derivatives]]: for totally differentiable maps $g,f$, $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$.

[F2] [[def-jacobian-matrix-and-gradient]]: the Jacobian matrix represents the total derivative in standard coordinates.

[F3] [[lem-c1-ode-flow-on-common-tube]]: the exact endpoint map $s\mapsto\phi(b;s)$ is $C^1$ on its open initial-state domain.

[F4] [[def-certified-ivp-approximation-and-sensitivity-interface]]: the approximate endpoint map is $C^1$ and its supplied derivative is its derivative as a map on initial states.

## Proof

1.1 Define $G:U\to\mathbb R^d\times\mathbb R^d$ by $G(s)=(s,\Psi(s))$. The coordinate product map is totally differentiable and $DG(s)v=(v,D\Psi(s)v)$. [given, F2, algebra]

2.1 The residual is the composition $R_\Psi=B\circ G$. Applying [F1] at each $s$ gives $DR_\Psi(s)v=D_1B(s,\Psi(s))v+D_2B(s,\Psi(s))D\Psi(s)v$ for every $v\in\mathbb R^d$, hence the displayed matrix identity. [given, F1, step 1.1, algebra]

3.1 Since both component maps and their derivatives are continuous, the derivative in step 2.1 varies continuously with $s$; therefore $R_\Psi$ is $C^1$. Facts [F3] and [F4] verify the two stated choices of $\Psi$ under their respective hypotheses. [F1, F3, F4, step 2.1] ∎
