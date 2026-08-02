---
id: cor-samuel-compactification-is-unique
kind: corollary
title: "Samuel compactifications are unique up to the unique isomorphism fixing the original space"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-samuel-compactification, lem-samuel-function-pseudometrics-and-coarsening, thm-samuel-compactification-universal-property, cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "A. Zucker, Big Ramsey Degrees and Topological Dynamics"
      url: "https://www.math.cmu.edu/~andrewz/Big%20Ramsey%202.pdf"
pipeline_run: null
---

## Statement

Under dependent choice and the ultrafilter lemma, two Samuel compactifications of the same separated uniform space are related by exactly one uniform isomorphism commuting with their canonical maps.

## Facts & Assumptions

**Given:** Samuel compactifications $\eta_i:X\to S_i$ for $i=1,2$ of one separated uniform space, under dependent choice and the ultrafilter lemma.

[L1] A Samuel compactification map is uniformly continuous from the Samuel uniformity; since that uniformity is coarser than the original one, it is also uniformly continuous from the original uniformity. A uniformly continuous map into a compact Hausdorff target then extends uniquely over a Samuel compactification ([[def-samuel-compactification]], [[lem-samuel-function-pseudometrics-and-coarsening]], [[thm-samuel-compactification-universal-property]]).

[L2] Two continuous maps to a Hausdorff space that agree on a dense subset agree everywhere ([[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $\eta_2:X\to S_2$ and to $\eta_1:X\to S_1$, obtaining uniformly continuous maps $F:S_1\to S_2$ and $G:S_2\to S_1$ with $F\eta_1=\eta_2$ and $G\eta_2=\eta_1$. [L1]

2.1 The maps $GF$ and $\operatorname{id}_{S_1}$ agree on the dense set $\eta_1[X]$, while $FG$ and $\operatorname{id}_{S_2}$ agree on $\eta_2[X]$, so [L2] makes both composites identities. [L2, step 1.1]

3.1 Therefore $F$ and $G$ are inverse uniform isomorphisms, and uniqueness of $F$ is the uniqueness clause in [L1]. [L1, step 2.1] ∎
