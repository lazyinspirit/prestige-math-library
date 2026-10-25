---
id: lem-hybrid-guard-derivative-along-mode
kind: lemma
title: "The derivative of a guard along an ODE mode is its Lie derivative"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-hybrid-mode-guard-reset-system
  - thm-chain-rule-for-total-derivatives
  - def-c-one-map-and-local-inverse
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
    - title: "Nathan J. Kong, J. Joe Payne, James Zhu, and Aaron M. Johnson, Saltation Matrices: The Essential Tool for Linearizing Hybrid Dynamical Systems"
      url: "https://arxiv.org/pdf/2306.06862"
---

## Statement

Let $y$ be a differentiable solution in mode $m$ on an interval $J$, with $y'(t)=f_m(t,y(t))$. Let $g(t,x)$ be $C^1$ on an open neighborhood of the graph of $y$, and define $h(t)=g(t,y(t))$. Then $h$ is differentiable on $J$ and
$$h'(t)=\partial_tg(t,y(t))+D_xg(t,y(t))f_m(t,y(t)).$$

## Facts & Assumptions

**Given:** A mode solution $y'=f_m(t,y)$ and a $C^1$ guard $g$ on a neighborhood of its graph.

[F1] [[def-hybrid-mode-guard-reset-system]]: a solution in mode $m$ satisfies the first-order ODE $y'=f_m(t,y)$.

[F2] [[thm-chain-rule-for-total-derivatives]]: for differentiable maps $z$ and $g$, the derivative of $g\circ z$ is $Dg(z(t))z'(t)$.

[F3] [[def-c-one-map-and-local-inverse]]: a $C^1$ map on an open set is totally differentiable at every point of its domain.

## Proof

1.1 Set $z(t)=(t,y(t))$. Domain-relative differentiability of $y$ gives $z'(t)=(1,y'(t))=(1,f_m(t,y(t)))$ and $z(t+h)=z(t)+h z'(t)+o(|h|)$ for admissible $h$ with $t+h\in J$. [given, F1, construct]

2.1 At interior points of $J$, [F2] gives $(g\circ z)'(t)=Dg(z(t))z'(t)$. At an endpoint, use admissible increments in step 1.1 and the total differentiability of $g$ from [F3]: with $k=z(t+h)-z(t)=h z'(t)+o(|h|)$, its first-order expansion gives $g(z(t+h))-g(z(t))=Dg(z(t))k+o(\|k\|)=hDg(z(t))z'(t)+o(|h|)$, proving the same one-sided derivative formula. Splitting the derivative into its time and state blocks gives the displayed identity. [F2, F3, step 1.1, algebra] ∎
