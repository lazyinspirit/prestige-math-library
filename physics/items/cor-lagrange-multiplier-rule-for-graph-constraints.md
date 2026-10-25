---
id: cor-lagrange-multiplier-rule-for-graph-constraints
kind: corollary
title: "Lagrange multipliers for a regular graph constraint $y=\\psi(x)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-parametrized-constraint-necessary-condition, thm-gradient-represents-directional-derivatives-and-steepest-ascent, def-jacobian-matrix-and-gradient]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Lagrange Multipliers"
      url: "https://www2.math.upenn.edu/~gressman/analysis/12-lagrange.html"
pipeline_run: null
---

## Statement

Let $V\subseteq\mathbb R^m$ and $W\subseteq\mathbb R^{m+n}$ be open, let $x_0\in V$, let $\psi:V\to\mathbb R^n$ be differentiable at $x_0$, put $a=(x_0,\psi(x_0))\in W$, and let $f:W\to\mathbb R$ be differentiable at $a$. If $f|_{W\cap\operatorname{graph}(\psi)}$ has a local extremum at $a$, then for $G:V\times\mathbb R^n\to\mathbb R^n$ given by $G(x,y)=y-\psi(x)$ there is $\lambda\in\mathbb R^n$ such that $\nabla f(a)=DG(a)^T\lambda$.

## Facts & Assumptions
**Given:** The hypotheses of the statement.

[L1] A constrained local extremum annihilates every tangent velocity of a differentiable parametrization ([[thm-parametrized-constraint-necessary-condition]]).

[L2] The gradient represents the derivative and the Jacobian records the derivative in coordinates ([[thm-gradient-represents-directional-derivatives-and-steepest-ascent]], [[def-jacobian-matrix-and-gradient]]).

## Proof

**Proof technique:** direct.

1.1 Parametrize the graph by $\Gamma(x)=(x,\psi(x))$. Since $\psi$ is differentiable at $x_0$, $\Gamma$ is continuous there; because $V$ and $W$ are open, for every $v\in\mathbb R^m$ the curve $t\mapsto\Gamma(x_0+tv)$ is defined and lies in $W$ for sufficiently small $t$. Apply [L1] to get $Df(a)(v,D\psi(x_0)v)=0$. [L1, given, algebra]

2.1 In block gradient coordinates, step 1.1 says $\nabla_xf(a)+D\psi(x_0)^T\nabla_yf(a)=0$. [step 1.1, L2, algebra]

3.1 Set $\lambda=\nabla_yf(a)$. Since $DG(a)=(-D\psi(x_0),I_n)$, step 2.1 yields $DG(a)^T\lambda=(\nabla_xf(a),\nabla_yf(a))=\nabla f(a)$. [step 2.1, L2, algebra] ∎
