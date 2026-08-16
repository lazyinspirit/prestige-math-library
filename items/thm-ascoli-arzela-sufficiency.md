---
id: thm-ascoli-arzela-sufficiency
kind: theorem
title: "Under Choice, equicontinuity and pointwise relative compactness give compact compact-open closure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-pointwise-compactness-criterion-for-function-families, lem-pointwise-closure-preserves-equicontinuity, lem-compact-open-and-pointwise-topologies-agree-on-an-equicontinuous-family, def-compact-open-topology-for-topological-domains, def-topology-of-pointwise-convergence]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Theorem 47.1"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice.** Let $X$ be a topological space, let $Y$ be a metric space, and let $\mathcal F\subseteq C(X,Y)$ be equicontinuous and pointwise relatively compact. Then the closure of $\mathcal F$ in the compact-open topology is compact.

## Facts & Assumptions

**Given:** Choice, a topological space $X$, a metric space $Y$, and an equicontinuous, pointwise relatively compact family $\mathcal F\subseteq C(X,Y)$.

[L1] Under Choice, the pointwise closure is compact exactly when every coordinate set has compact closure ([[thm-pointwise-compactness-criterion-for-function-families]]).

[L2] The pointwise closure of an equicontinuous family is equicontinuous and consists of continuous maps ([[lem-pointwise-closure-preserves-equicontinuity]]).

[L3] The compact-open and pointwise subspace topologies agree on an equicontinuous family ([[lem-compact-open-and-pointwise-topologies-agree-on-an-equicontinuous-family]]).

[L4] Compact-open subbasic sets test compact subsets of the domain ([[def-compact-open-topology-for-topological-domains]]).

[L5] Pointwise subbasic sets test one coordinate at a time ([[def-topology-of-pointwise-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Let $H$ be the pointwise closure of $\mathcal F$ in $Y^X$. Pointwise relative compactness and [L1] make $H$ compact in the pointwise topology. [L1]

2.1 By [L2], $H\subseteq C(X,Y)$ and $H$ is equicontinuous. By [L3], its compact-open subspace topology equals its pointwise subspace topology, so $H$ is compact in the compact-open topology. [L2, L3, step 1.1]

3.1 The family $\mathcal F$ is pointwise dense in $H$, and [L3] makes it compact-open dense there. Also, every pointwise subbasic set from [L5] is the compact-open set $S(\{x\},V)$ of [L4], so the compact-open topology is finer and the pointwise-closed set $H$ is compact-open closed. Thus the compact-open closure of $\mathcal F$ is exactly $H$, which is compact by step 2.1. [L3, L4, L5, step 2.1] ∎
