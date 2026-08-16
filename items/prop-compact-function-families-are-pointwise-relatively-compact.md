---
id: prop-compact-function-families-are-pointwise-relatively-compact
kind: proposition
title: "Every compact compact-open family is pointwise relatively compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-compact-open-topology-for-topological-domains, def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness, thm-compactness-under-continuous-maps, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-metric-hausdorff-separation]
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

Let $X$ be a topological space, let $Y$ be a metric space, and let $\mathcal K\subseteq C(X,Y)$ be compact in the compact-open topology. Then $\mathcal K$ is pointwise relatively compact.

## Facts & Assumptions

**Given:** A topological space $X$, a metric space $Y$, and a compact compact-open family $\mathcal K$.

[L1] For compact $K\subseteq X$ and open $V\subseteq Y$, $S(K,V)=\{f:f[K]\subseteq V\}$ is compact-open subbasic ([[def-compact-open-topology-for-topological-domains]]).

[L2] Pointwise relative compactness asks that $\overline{\mathcal K(x)}$ be compact for every $x$ ([[def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness]]).

[L3] Continuous images of compact spaces are compact ([[thm-compactness-under-continuous-maps]]).

[L4] Compact subsets of Hausdorff spaces are closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[L5] Every metric space is Hausdorff ([[thm-metric-hausdorff-separation]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$, [L2] is vacuous. Otherwise fix $x\in X$. For open $V\subseteq Y$, evaluation at $x$ pulls $V$ back to $S(\{x\},V)$, which is open by [L1]; hence evaluation is continuous. [L1, L2]

2.1 By [L3], its image $\mathcal K(x)$ is compact. By [L4] and [L5], $\mathcal K(x)$ is closed. [L3, L4, L5, step 1.1]

3.1 Therefore $\overline{\mathcal K(x)}=\mathcal K(x)$ is compact. Since $x$ was arbitrary, [L2] proves pointwise relative compactness. [L2, step 2.1] ∎
