---
id: thm-net-filter-convergence-dictionary
kind: theorem
title: "The tail-filter and derived-net constructions preserve convergence and cluster points in both directions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-tail-filter-preserves-net-convergence-and-cluster-points, lem-filter-derived-net-preserves-convergence-and-cluster-points]
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
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
pipeline_run: null
---

## Statement

Passing from a net to its tail filter, or from a filter to its derived net, preserves and reflects convergence and cluster points.

## Facts & Assumptions

**Given:** A net, a filter, and a point of the relevant topological space.

[L1] A net and its tail filter have the same limits and cluster points ([[lem-tail-filter-preserves-net-convergence-and-cluster-points]]).

[L2] A filter and its derived net have the same limits and cluster points ([[lem-filter-derived-net-preserves-convergence-and-cluster-points]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the given net. [L1]

1.2 Apply [L2] to the given filter. [L2]

2.1 These are precisely the two asserted correspondences. [step 1.1, step 1.2] ∎
