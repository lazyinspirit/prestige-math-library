---
id: prop-general-compact-open-topology-agrees-with-the-metric-definition
kind: proposition
title: "The general compact-open topology agrees with the published metric-domain definition"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-compact-open-topology-for-topological-domains, def-compact-open-topology, thm-compactness-agrees-with-metric-compactness]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Section 46"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ be a metric space equipped with its metric topology and let $Y$ be a topological space. The compact-open topology on $C(X,Y)$ defined using topologically compact subsets of $X$ is exactly the published compact-open topology defined using metric-compact subsets of $X$.

## Facts & Assumptions

**Given:** A metric space $X$ with its metric topology and a topological space $Y$.

[L1] The general compact-open topology has subbasis $S(K,V)=\{f:f[K]\subseteq V\}$ for topologically compact $K\subseteq X$ and open $V\subseteq Y$ ([[def-compact-open-topology-for-topological-domains]]).

[L2] The published metric-domain compact-open topology has the same form of subbasis, with $K$ metric-compact ([[def-compact-open-topology]]).

[L3] A subset of a metric space is metric-compact if and only if it is compact in the metric topology ([[thm-compactness-agrees-with-metric-compactness]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], the compact subsets allowed in [L1] and [L2] are exactly the same subsets of $X$. [L3]

2.1 For every such $K$ and every open $V\subseteq Y$, both definitions use the identical subset $S(K,V)$ of $C(X,Y)$, including $K=\varnothing$ and $V=Y$. [L1, L2, step 1.1]

3.1 The two subbasic families are equal, and therefore generate equal topologies. [step 2.1] ∎
