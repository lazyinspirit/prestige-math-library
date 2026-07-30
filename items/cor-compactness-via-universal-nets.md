---
id: cor-compactness-via-universal-nets
kind: corollary
title: "Assuming the ultrafilter lemma, a space is compact if and only if every universal net converges"
status: published
origin: session
deps: [lem-every-net-has-a-universal-subnet, lem-universal-net-cluster-points-are-limits, thm-compactness-via-nets-filters-and-ultrafilters, thm-net-cluster-point-iff-convergent-subnet]
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
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
pipeline_run: null
---

## Statement

**Assume the ultrafilter lemma.** A topological space is compact if and only if every universal net in it converges.

## Facts & Assumptions

**Given:** A topological space $X$ and the ultrafilter lemma.

[L1] Compactness is equivalent to every net having a cluster point ([[thm-compactness-via-nets-filters-and-ultrafilters]]).

[L2] Every net has a universal subnet ([[lem-every-net-has-a-universal-subnet]]), and a cluster point of a universal net is a limit ([[lem-universal-net-cluster-points-are-limits]]).

[L3] A point is a cluster point of a net exactly when some subnet converges to it ([[thm-net-cluster-point-iff-convergent-subnet]]).



## Proof

**Proof technique:** direct.

1.1 If $X$ is compact, a universal net has a cluster point by [L1], hence converges by [L2]. [L1, L2]

1.2 Conversely, suppose every universal net converges. Every net has a universal subnet by [L2], which then converges; its limit is a cluster point of the original net by [L3]. Thus every net has a cluster point. [L2, L3]

2.1 By [L1], this makes $X$ compact. [step 1.2, L1] ∎
