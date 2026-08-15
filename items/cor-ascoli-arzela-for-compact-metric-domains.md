---
id: cor-ascoli-arzela-for-compact-metric-domains
kind: corollary
title: "Ascoli–Arzelà in the uniform topology for compact metric domains"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-ascoli-arzela-for-compact-hausdorff-domains, prop-compact-open-is-uniform-on-a-compact-metric-domain, prop-topological-domain-equicontinuity-agrees-with-metric-equicontinuity, prop-general-compact-open-topology-agrees-with-the-metric-definition, thm-compactness-agrees-with-metric-compactness, thm-metric-hausdorff-separation]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Ascoli–Arzelà Theorem, BBT"
      url: "https://assets.pubpub.org/6d1dqgg9/51597355090422.pdf"
    - title: "Topology, second edition, Corollary 47.4"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice.** Let $X$ be a nonempty compact metric space, let $Y$ be a metric space, and let $\mathcal F\subseteq C(X,Y)$. The closure of $\mathcal F$ in the uniform topology is compact if and only if $\mathcal F$ is metric-equicontinuous and pointwise relatively compact.

## Facts & Assumptions

**Given:** Choice, a nonempty compact metric space $X$, a metric space $Y$, and $\mathcal F\subseteq C(X,Y)$.

[L1] For a compact Hausdorff domain, compactness of the compact-open closure is equivalent to equicontinuity and pointwise relative compactness ([[cor-ascoli-arzela-for-compact-hausdorff-domains]]).

[L2] On a nonempty compact metric domain, the published compact-open topology equals the uniform topology ([[prop-compact-open-is-uniform-on-a-compact-metric-domain]]).

[L3] Topological-domain and metric equicontinuity agree on a metric domain ([[prop-topological-domain-equicontinuity-agrees-with-metric-equicontinuity]]).

[L4] The general and published compact-open topologies agree on a metric domain ([[prop-general-compact-open-topology-agrees-with-the-metric-definition]]).

[L5] Metric compactness agrees with compactness in the metric topology ([[thm-compactness-agrees-with-metric-compactness]]).

[L6] Every metric space is Hausdorff ([[thm-metric-hausdorff-separation]]).

## Proof

**Proof technique:** direct.

1.1 By [L5] and [L6], $X$ with its metric topology is compact Hausdorff, so [L1] applies to $\mathcal F$. [L1, L5, L6]

1.2 By [L4] and [L2], the general compact-open topology used in [L1] is the uniform topology; hence the two closures and their compactness are identical. [L2, L4]

2.1 By [L3], the equicontinuity condition in [L1] is exactly metric equicontinuity. Pointwise relative compactness is unchanged, so [L1] becomes the claimed equivalence in both directions. [L1, L3, step 1.2] ∎
