---
id: thm-arc-length-is-lower-semicontinuous-under-uniform-convergence
kind: theorem
title: "Arc length is lower semicontinuous under uniform convergence of paths"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-path-polygonal-length-and-rectifiability-in-rn, def-pointwise-uniform-and-uniformly-cauchy-convergence, thm-componentwise-limits-and-continuity, def-limsup-liminf]
justified_by: []
aliases: []
landmark: true
proof_strategy: fixed-partition
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Denzler, Calculus of Variations, Section 4.9"
      url: "https://web.math.utk.edu/~denzler/M534-Sp2014/CalVar.pdf"
pipeline_run: null
---

## Statement

Let $\gamma_k,\gamma:[a,b]\to\mathbb R^n$ be paths, with $n\ge1$, and suppose

$$\sup_{t\in[a,b]}\lVert\gamma_k(t)-\gamma(t)\rVert_2\longrightarrow0.$$

Then

$$L(\gamma)\le\liminf_{k\to\infty}L(\gamma_k)$$

in the extended real line. In particular, a uniform limit can have smaller length than every approximating path, but not larger than their limiting lower length.

## Facts & Assumptions

**Given:** The uniformly convergent sequence of paths.

[L1] Uniform convergence uses one index for every point of the domain ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]); the displayed Euclidean-norm form gives convergence at each partition point.

[L2] Euclidean norm and vector limits are compatible componentwise, so every fixed finite sum of chord norms converges term by term ([[thm-componentwise-limits-and-continuity]]).

[L3] Arc length is the supremum of polygonal lengths ([[def-path-polygonal-length-and-rectifiability-in-rn]]).

[L4] The limit inferior is $\sup_N\inf_{k\ge N}x_k$ in the extended reals ([[def-limsup-liminf]]).

## Proof

**Proof technique:** fixed-partition.

1.1 Fix a partition $P=(t_0,\ldots,t_m)$. By [L1], $\gamma_k(t_i)\to\gamma(t_i)$ for each of its finitely many points. [given, L1]

2.1 By [L2], every chord norm converges and hence $\ell_P(\gamma_k)\to\ell_P(\gamma)$. [step 1.1, L2]

3.1 For every $k$, [L3] gives $\ell_P(\gamma_k)\le L(\gamma_k)$. Passing to the limit inferior yields $\ell_P(\gamma)\le\liminf_kL(\gamma_k)$. [step 2.1, L3, L4]

4.1 The right side is independent of $P$. Taking the supremum of the left side over all partitions and using [L3] gives $L(\gamma)\le\liminf_kL(\gamma_k)$. [step 3.1, L3]

5.1 The argument also covers an infinite right side or an infinite $L(\gamma)$, because all suprema and the limit inferior are taken in the extended reals. [step 4.1, L3, L4] ∎
