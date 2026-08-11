---
id: cex-noninjective-change-of-variables-double-counts
kind: counterexample
title: 'Dropping injectivity double-counts under $x\mapsto x^2$ on two disjoint intervals'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-change-of-variables-for-compact-jordan-sets, thm-ftc-second-part, lem-derivative-of-a-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

**False claim.** The injectivity hypothesis may be removed from compact-Jordan change of variables when the derivative is nonzero everywhere on the domain.

## Facts & Assumptions

**Given:** The open set $U=(-3,-1/2)\cup(1/2,3)$, the compact Jordan set $K=[-2,-1]\cup[1,2]\subset U$, the $C^1$ map $g:U\to\mathbb R$ given by $g(x)=x^2$, and $f=1$ on $g(K)=[1,4]$.

[L1] Compact-Jordan change of variables assumes injectivity ([[thm-change-of-variables-for-compact-jordan-sets]]).

[L2] The power rule gives $g'(x)=2x$ ([[lem-derivative-of-a-power]]), and the fundamental theorem evaluates its absolute-value integral ([[thm-ftc-second-part]]).

## Counterexample

**Proof technique:** direct.

1.1 The derivative $2x$ never vanishes anywhere on $U$, but $g(-x)=g(x)$, so every point of $(1,4)$ has one preimage in each component of $K$. [L2, given]

2.1 The image integral is its length, $\int_{1}^{4}1\,dy=3$, while the proposed source integral is $$\int_K|2x|\,dx=\int_{-2}^{-1}(-2x)\,dx+\int_1^2 2x\,dx=3+3=6.$$ [L2, step 1.1]

3.1 The mismatch $6\ne3$ is exact double counting. Thus nonvanishing derivative does not replace injectivity, and [L1]'s hypothesis is essential. [L1, step 2.1] ∎
