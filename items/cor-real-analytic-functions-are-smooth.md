---
id: cor-real-analytic-functions-are-smooth
kind: corollary
title: "Every real-analytic function is infinitely differentiable"
status: published
origin: session
deps: [def-real-analytic-function, cor-power-series-sums-are-smooth-with-coefficient-formula]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "Analytic function, Encyclopedia of Mathematics", url: "https://encyclopediaofmath.org/wiki/Analytic_function"}]}
pipeline_run: null
---

## Statement

Every real-analytic function on an open subset $U\subseteq\mathbb R$ is infinitely differentiable at every point of $U$.

## Facts & Assumptions

**Given:** A real-analytic function $f:U\to\mathbb R$.

[L1] Near every $c\in U$, $f$ equals a convergent power series centred at $c$ ([[def-real-analytic-function]]).

[L2] A power-series sum is infinitely differentiable inside its radius ([[cor-power-series-sums-are-smooth-with-coefficient-formula]]).

## Proof

**Proof technique:** direct.

1.1 Fix $c\in U$ and choose the local representing power series supplied by [L1]. [given, L1, choose]

2.1 By [L2], that series, hence $f$, has derivatives of every order on a neighbourhood of $c$. Since $c$ was arbitrary, $f$ is smooth on $U$. [step 1.1, L2] ∎
