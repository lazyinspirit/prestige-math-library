---
id: thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces
kind: theorem
title: "For a Hausdorff space, paracompactness is equivalent, under choice and dependent choice, to the existence of a locally finite subordinate partition of unity for every open cover"
status: published
origin: session
deps: [thm-subordinate-partitions-of-unity-exist, def-partition-of-unity-subordinate-to-a-cover, def-zero-sets-and-cozero-sets, def-paracompact-space]
justified_by: []
aliases: []
landmark: true
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
pipeline_run: null
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. For a Hausdorff
space $X$, the following are equivalent: $X$ is paracompact; every open cover of
$X$ admits a locally finite partition of unity subordinate to it.

## Facts & Assumptions

**Given:** A Hausdorff space $X$, choice and dependent choice, and an open cover $\mathcal U$.

[L1] A paracompact Hausdorff space has a locally finite partition of unity subordinate to each open cover ([[thm-subordinate-partitions-of-unity-exist]]).

[F1] In a subordinate partition, cozero sets are open, form a locally finite family, and each support lies in a member of $\mathcal U$ ([[def-partition-of-unity-subordinate-to-a-cover]], [[def-zero-sets-and-cozero-sets]]).

[F2] Paracompactness asks for a locally finite open refining cover ([[def-paracompact-space]]).

## Proof

**Proof technique:** direct.

1.1 If $X$ is paracompact, [L1] supplies the asserted partition for $\mathcal U$. [L1]

1.2 Conversely, suppose every open cover admits such a partition. For the partition subordinate to $\mathcal U$, the cozero sets cover $X$ because their functions sum to one. [F1]

1.3 Each cozero set is open, locally finite among the cozero family, and contained in its support and hence in a member of $\mathcal U$; it is therefore a locally finite open refinement of $\mathcal U$. [F1]

2.1 By [F2], step 1.3 proves that $X$ is paracompact, completing the equivalence. [F2, step 1.1, step 1.3] ∎
