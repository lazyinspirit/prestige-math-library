---
id: cor-piecewise-c1-paths-have-additive-speed-integral-length
kind: corollary
title: "A continuous piecewise-$C^1$ path is rectifiable and its length is the sum of the speed integrals over its pieces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-c1-paths-have-length-equal-to-the-integral-of-speed, thm-arc-length-is-additive-over-subintervals]
justified_by: []
aliases: []
landmark: true
proof_strategy: decomposition
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "U. Lang, Differential Geometry I, Section 1.1"
      url: "https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb R^n$ be continuous. Suppose there is a partition $a=t_0<\cdots<t_m=b$ such that on each $[t_i,t_{i+1}]$ the restriction is differentiable in the interior and its derivative has a continuous extension $v_i$ to that closed subinterval. Then $\gamma$ is rectifiable and

$$L_{[a,b]}(\gamma)=\sum_{i<m}\int_{t_i}^{t_{i+1}}\lVert v_i(t)\rVert_2\,dt.$$

No agreement between $v_{i-1}(t_i)$ and $v_i(t_i)$ is required, so corners are allowed. For a singleton interval the empty sum and the length are zero.

## Facts & Assumptions

**Given:** The piecewise $C^1$ path and subdivision.

[L1] Each $C^1$ piece is rectifiable with length equal to its speed integral ([[thm-c1-paths-have-length-equal-to-the-integral-of-speed]]).

[L2] Arc length is additive over adjacent parameter subintervals ([[thm-arc-length-is-additive-over-subintervals]]).

## Proof

**Proof technique:** decomposition.

1.1 By [L1], the $i$-th restriction is rectifiable and has length $\int_{t_i}^{t_{i+1}}\lVert v_i\rVert_2$. [given, L1]

2.1 Repeated application of [L2] expresses the total length as the sum of the finitely many piece lengths. [step 1.1, L2]

3.1 Substituting step 1.1 into step 2.1 proves the formula and finiteness. Endpoint derivative extensions are local to each piece, so no matching condition is used. [step 1.1, step 2.1]

4.1 On a singleton there are no nondegenerate pieces, and both the empty sum and the defined length are zero. [given, algebra] ∎
