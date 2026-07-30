---
id: lem-uniform-convergence-uniformity-is-finer-than-pointwise
kind: lemma
title: "The uniform-convergence uniformity is finer than the pointwise uniformity, and they agree when the domain is finite"
status: published
origin: session
deps: [def-pointwise-and-uniform-convergence-uniformities, def-finite-cardinality]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

The uniform-convergence uniformity on $Y^X$ is finer than the pointwise-convergence uniformity. If $X$ is finite, they are equal.

## Facts & Assumptions

**Given:** A uniform space $Y$, a set $X$, an entourage $V$, and finite $F\subseteq X$.

[L1] Pointwise basic entourages require $V$-closeness on $F$, while uniform basic entourages require it on all of $X$ ([[def-pointwise-and-uniform-convergence-uniformities]]).

[L2] Finiteness allows $X$ itself as an allowed finite coordinate set ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 $Q(V)\subseteq P(F,V)$, so every pointwise basic entourage contains a uniform basic entourage. [L1]

1.2 If $X$ is finite, $P(X,V)=Q(V)$ by [L1] and [L2], so each uniform basic entourage is pointwise basic as well. [L1, L2]

2.1 Hence uniform convergence is finer than pointwise convergence. [step 1.1]

3.1 The two uniformities are equal in the finite-domain case. [step 2.1, step 1.2] ∎
