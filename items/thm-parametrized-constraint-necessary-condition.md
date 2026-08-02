---
id: thm-parametrized-constraint-necessary-condition
kind: theorem
title: "A constrained local extremum annihilates every velocity of a differentiable parametrization"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-chain-rule-for-total-derivatives, thm-fermat-interior-extremum, def-euclidean-local-extrema-and-critical-points]
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

Let $f:U\to\mathbb R$ be differentiable at $a\in U\subseteq\mathbb R^N$, and let $\gamma:(-\eta,\eta)\to U$ be differentiable at $0$ with $\gamma(0)=a$. If $f\circ\gamma$ has a local maximum or minimum at $0$, then $Df(a)\gamma'(0)=0$.

## Facts & Assumptions
**Given:** The hypotheses of the statement.

[L1] The total-derivative chain rule is $D(f\circ\gamma)(0)=Df(\gamma(0))D\gamma(0)$ ([[thm-chain-rule-for-total-derivatives]]).

[L2] A differentiable one-variable function with an interior local extremum has derivative zero ([[thm-fermat-interior-extremum]]).

## Proof

**Proof technique:** direct.

1.1 The composite $g=f\circ\gamma$ is differentiable at $0$ by [L1], and $0$ is an interior local extremum of $g$ by the hypothesis. [given, L1, algebra]

2.1 Fermat's theorem gives $g'(0)=0$. [step 1.1, L2]

3.1 The chain-rule identity in [L1] and $\gamma(0)=a$ give $g'(0)=Df(a)\gamma'(0)$. Combining with step 2.1 proves the conclusion. [L1, step 2.1, algebra] ∎
