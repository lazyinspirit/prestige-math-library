---
id: cor-metric-spaces-admit-subordinate-partitions-of-unity
kind: corollary
title: "Under choice and dependent choice, metric open covers admit locally finite subordinate partitions of unity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-stone-metric-spaces-are-paracompact, thm-subordinate-partitions-of-unity-exist, def-metric-space, def-hausdorff-space]
justified_by: []
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
  references:
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Every open cover
of a metric space admits a locally finite partition of unity subordinate to it.

## Facts & Assumptions

**Given:** Choice, dependent choice, a metric space $X$, and an open cover of its metric topology.

[L1] The space $X$ is paracompact under choice ([[thm-stone-metric-spaces-are-paracompact]]).

[L2] Every metrizable space is Hausdorff ([[def-hausdorff-space]]).

[L3] A paracompact Hausdorff space has a subordinate partition of unity under choice and dependent choice ([[thm-subordinate-partitions-of-unity-exist]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $X$ is paracompact and Hausdorff. [L1, L2]

2.1 Applying [L3] to the given cover yields the required locally finite subordinate partition of unity. [L3, step 1.1] ∎
