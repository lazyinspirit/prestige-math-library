---
id: fs-every-graph-with-at-least-four-vertices-has-a-nontrivial-module
kind: false-statement
title: "Every graph with at least four vertices has a nontrivial module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-module-of-a-graph, def-prime-graph, ex-modules-of-the-four-vertex-path, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.4"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Statement

Every graph with at least four vertices has a nontrivial module.

## Facts & Assumptions

**Given:** The claim above and the four-vertex path $P_4$.

[L1] The four-vertex path has only trivial modules ([[ex-modules-of-the-four-vertex-path]], [[def-module-of-a-graph]]).

[L2] A graph with only trivial modules is prime ([[def-prime-graph]]).

## Refutation

**Proof technique:** direct.

1.1 The claim asserts that every graph with at least four vertices has some module that is neither empty, nor a singleton, nor the whole vertex set. [given]

1.2 The graph $P_4$ has four vertices and, by [L1], has no such module. [L1]

2.1 So the claim is false. Equivalently, [L2] shows that $P_4$ is a prime graph on four vertices. [step 1.2, L2] ∎
